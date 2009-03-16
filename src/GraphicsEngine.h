// __BEGIN_LICENSE__
// Copyright (C) 2009 Michael J. Broxton
// All Rights Reserved.
// __END_LICENSE__

/// \file GraphicsEngine.h
///
#ifndef __GRAPHICS_ENGINE_H__
#define __GRAPHICS_ENGINE_H__

// Qt
#include <QGLWidget>
#include <QGLFormat>
#include <QPoint>

// Vision Workbench
#include <vw/Core/Log.h>
#include <vw/Image/ImageResource.h>
#include <vw/Image/ImageViewRef.h>
#include <vw/Image/ImageView.h>
#include <vw/Image/Manipulation.h>
#include <vw/Image/Statistics.h>
#include <vw/FileIO/DiskImageResource.h>
#include <vw/FileIO/DiskImageView.h>
#include <vw/Math/BBox.h>
#include <vw/Math/Vector.h>
#include <vw/Math/Matrix.h>

// STL
#include <string>
#include <list>

#include <GpuProgram.h>
#include <ScriptEngine.h>

class QMouseEvent;
class QWheelEvent;
class QPoint;

#define HORIZ_MESH_SIZE 64
#define VERT_MESH_SIZE 64
#define FRAMEBUFFER_SIZE 2048


/// Drawable
///
/// This is the base class for a drawable object.  A class that
/// inherits from Drawable is expected to implement the draw() method
/// to render something in OpenGL.  The subclass should assume that
/// the OpenGL viewport and projection matrices are properly
/// initialized, so all it needs to do is initialize the ModelView
/// matrix and draw using the OpenGL primatives.
///
struct Drawable {
  virtual void draw(float time, float gain) = 0;
};


// CUDA
void copy_image (int pbo_in, int width, int height);
void pboRegister(int pbo);
void pboUnregister(int pbo);

/// GraphicsEngine
///
/// The GraphicsEngine creates an OpenGL context, performs setup, and
/// drives rendering into the OpenGL framebuffer.  It also manages the
/// feedback texture -- which is central to PhosphorEssence's cool
/// effects!
///
class GraphicsEngine : public QGLWidget {
  Q_OBJECT
  
public:
  
  // Constructors/Destructor
  GraphicsEngine(QWidget *parent) : QGLWidget(parent) {
    setup();
  }
  virtual ~GraphicsEngine();
  
  // Set a default size for this widget.  This is usually overridden
  // by parent views.
  virtual QSize sizeHint () const { return QSize(500,500); }
  
  // Image Manipulation Methods
  void zoom(float scale);
  void size_to_fit();
  
  // Managing drawables
  void register_drawable(boost::shared_ptr<Drawable> drawable) {
    m_drawables.push_back(drawable);
  }

  // Managing script engines
  void register_script_engine(boost::shared_ptr<ScriptEngine> script_engine) {
    m_script_engines.push_back(script_engine);
  }

  void clear_drawables() {
    m_drawables.clear();
  }

  void clear_script_engines() {
    m_script_engines.clear();
  }

public slots:

  // This timer is used by the Texture Fetch thread to inform the
  // GraphicsEngine when new textures are available for drawing.
  // Timer callback is called 30 times per second.
  void timer_callback();

protected:

  // Setup
  void setup();
  void initializeGL();
  void resizeGL(int width, int height);
  void setup_mesh();

  // Event handlers
  void paintEvent(QPaintEvent *event);
  void mousePressEvent(QMouseEvent *event);
  void mouseMoveEvent(QMouseEvent *event);
  void mouseDoubleClickEvent(QMouseEvent *event);
  void wheelEvent(QWheelEvent *event);
  void enterEvent(QEvent *event);
  void leaveEvent(QEvent *event);
  void keyPressEvent(QKeyEvent *event);
  
private:

  // Drawing is driven by QPaintEvents, which call out to drawImage()
  // and drawLegend()
  void drawImage();
  void drawLegend(QPainter *painter);
  void updateCurrentMousePosition();
  void saveFeedback();

  // Graphic Elements (see GraphicElements.cc for imlementations)
  void drawFeedback();
  void drawVectorField();
  
  // Image & OpenGL
  GLuint m_feedback_texture;
  GLuint m_feedback_pbo;
  GLuint m_framebuffer_texture0;
  GLuint m_framebuffer_texture1;
  GLuint m_framebuffer;
  boost::shared_ptr<vw::GPU::GpuProgram> m_gpu_main_program;
  boost::shared_ptr<vw::GPU::GpuProgram> m_gpu_rd_program;
  boost::shared_ptr<vw::GPU::GpuProgram> m_gpu_blur_program;

  // Drawables & Script Engines
  std::list<boost::shared_ptr<Drawable> > m_drawables;
  std::list<boost::shared_ptr<ScriptEngine> > m_script_engines;
  
  // Timers and updates
  QTimer *m_timer;
  double m_fps_last_time;

  // Mouse positions and legend information
  QPoint lastPos;
  QPoint currentImagePos;
  std::string m_legend_status;

  // Dimensions & stats
  int m_viewport_width;
  int m_viewport_height;
  int m_framebuffer_width;
  int m_framebuffer_height;

  // Feedback
  vw::Matrix<vw::Vector2> m_feedback_texcoords;
  vw::Matrix<vw::Vector2> m_feedback_screencoords;
  vw::Matrix<vw::Vector2> m_warped_screencoords;
  
  // Image Parameters
  vw::BBox2 m_current_viewport;
};

#endif  // __GRAPHICS_ENGINE_H__