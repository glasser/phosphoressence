#include <PeParameters.h>
#include <GraphicsEngine.h>
#include <vw/Math/Vector.h>
#include <vw/Math/Matrix.h>

void GraphicsEngine::drawFeedback() {

  // Copy the pixel data from the pixel buffer object to the feedback texture.
  glEnable( GL_TEXTURE_2D );
  glActiveTexture(GL_TEXTURE0);
  glBindTexture( GL_TEXTURE_2D, m_feedback_texture );

  // Feedback decay, gamma, etc are controlled using a pixel shader.
  m_gpu_backbuffer_program->install();
  m_gpu_backbuffer_program->set_input_int("feedback_texture", 0);
  m_gpu_backbuffer_program->set_input_float("framebuffer_radius", m_framebuffer_radius);
  m_gpu_backbuffer_program->set_input_float("decay", pe_script_engine().get_parameter("decay"));
  m_gpu_backbuffer_program->set_input_float("ifs_mode", pe_script_engine().get_parameter("ifs_mode"));
  m_gpu_backbuffer_program->set_input_float("invert", pe_script_engine().get_parameter("invert"));
  m_gpu_backbuffer_program->set_input_float("edge_extend", pe_script_engine().get_parameter("wrap"));
  m_gpu_backbuffer_program->set_input_float("kaleidoscope", pe_script_engine().get_parameter("kaleidoscope"));
  m_gpu_backbuffer_program->set_input_float("kaleidoscope_radius", pe_script_engine().get_parameter("kaleidoscope_radius"));
  m_gpu_backbuffer_program->set_input_float("echo_zoom", pe_script_engine().get_parameter("echo_zoom"));
  m_gpu_backbuffer_program->set_input_float("echo_alpha", pe_script_engine().get_parameter("echo_alpha"));
  m_gpu_backbuffer_program->set_input_float("echo_orient", pe_script_engine().get_parameter("echo_orient"));

  // These are handled by the mobius transform
  m_gpu_backbuffer_program->set_input_float("zoom", pe_script_engine().get_parameter("zoom"));
  m_gpu_backbuffer_program->set_input_float("zoomexp", pe_script_engine().get_parameter("zoomexp"));
  m_gpu_backbuffer_program->set_input_float("rot", pe_script_engine().get_parameter("rot"));
  m_gpu_backbuffer_program->set_input_float("dx", pe_script_engine().get_parameter("dx"));
  m_gpu_backbuffer_program->set_input_float("dy", pe_script_engine().get_parameter("dy"));


  // Time
  //  float time = pe_time();

  // {
  //   vw::Stopwatch sw;
  //   sw.start();
  //   for (unsigned int i = 0; i < 1000; ++i) {
  //     float test = pe_parameters().get_value("cx");
  //   }
  //   sw.stop();
  //   std::cout << "Get_Value: " << (sw.elapsed_microseconds()/1000.0) << " per call\n";
  // }

  // {
  //   vw::Stopwatch sw;
  //   sw.start();
  //   for (unsigned int i = 0; i < 1000; ++i) {
  //     pe_parameters().set_value("cx", .2);
  //   }
  //   sw.stop();
  //   std::cout << "Set_Value: " << (sw.elapsed_microseconds()/1000.0) << " per call\n";
  // }

  // {
  //   vw::Stopwatch sw;
  //   sw.start();

  //   float cxz;
  //   for (unsigned int i = 0; i < 1000; ++i) {
  //     cxz = pe_script_engine().get_parameter("zoom");
  //   }
  //   sw.stop();
  //   std::cout << "FetchParameter: " << (sw.elapsed_microseconds()/1000.0) << " per call  " << cxz << "\n";
  //   sleep(2);
  // }
  
  float warpSpeed = pe_script_engine().get_parameter("warp_speed");
  float warpScale = pe_script_engine().get_parameter("warp_scale");
  float warpTime = pe_time() * warpSpeed;
  float warpScaleInv = 1.0f / warpScale;

  float f[4];
  f[0] = 11.68f + 4.0f*cosf(warpTime*1.413f + 10);
  f[1] =  8.77f + 3.0f*cosf(warpTime*1.113f + 7);
  f[2] = 10.54f + 3.0f*cosf(warpTime*1.233f + 3);
  f[3] = 11.49f + 4.0f*cosf(warpTime*0.933f + 5);

  // Extract the per-pixel parameters
  float zoom = 1;//pe_script_engine().get_parameter("zoom");
  float zoomExp = 1;//pe_script_engine().get_parameter("zoomexp");
  float warpAmount = pe_script_engine().get_parameter("warp");
      
  float rot = 0;//pe_script_engine().get_parameter("rot");
  float cx = pe_script_engine().get_parameter("cx");
  float cy = pe_script_engine().get_parameter("cy");
  float dx = 0;//pe_script_engine().get_parameter("dx");
  float dy = 0;//pe_script_engine().get_parameter("dy");
  float sx = pe_script_engine().get_parameter("sx");
  float sy = pe_script_engine().get_parameter("sy");

  // Iterate through the coordinates in the mesh, applying a coordinate by coordinate
  // mesh distortion.  THIS IS WHERE THE MAGIC HAPPENS, FOLKS
  for (int i = 0; i < HORIZ_MESH_SIZE + 1; i++) { 
    for (int j = 0; j < VERT_MESH_SIZE + 1; j++) {
      float u = m_feedback_screencoords(i,j)[0];
      float v = m_feedback_screencoords(i,j)[1];

      // Before we call the per-pixel equations, we need to set the
      // per-pixel parameters.
      // pe_script_engine().set_parameter("x",u);
      // pe_script_engine().set_parameter("y",v);
      // pe_script_engine().set_parameter("rad",sqrt(u*u+v*v));
      // pe_script_engine().set_parameter("ang",atan2(v,u));
      
      // Apply the zoom effect 
      float zoomCoefficient = powf(zoom, powf(zoomExp, 
                                              sqrtf(u * u + v * v) * 2.0 * 
                                              m_framebuffer_radius - m_framebuffer_radius));
      u = u * zoomCoefficient;
      v = v * zoomCoefficient;

      // Apply the scaling effect
      u = (u - cx)/sx + cx;
      v = (v - cy)/sy + cy;

      // Apply the Milkdrop warp effect (most of these constants were
      // taken from the milkdrop source code)
      u += warpAmount * 0.0035f * sinf(warpTime * 0.333f + warpScaleInv*(m_feedback_screencoords(i,j)[0] * f[0] - m_feedback_screencoords(i,j)[1] * f[3]));
      v += warpAmount * 0.0035f * cosf(warpTime * 0.375f - warpScaleInv*(m_feedback_screencoords(i,j)[0] * f[2] + m_feedback_screencoords(i,j)[1] * f[1]));
      u += warpAmount * 0.0035f * cosf(warpTime * 0.753f - warpScaleInv*(m_feedback_screencoords(i,j)[0] * f[1] - m_feedback_screencoords(i,j)[1] * f[2]));
      v += warpAmount * 0.0035f * sinf(warpTime * 0.825f + warpScaleInv*(m_feedback_screencoords(i,j)[0] * f[0] + m_feedback_screencoords(i,j)[1] * f[3]));

      // Apply the rotation effect
      float u2 = u - cx;
      float v2 = v - cy;
      
      float cos_rot = cosf(rot);
      float sin_rot = sinf(rot);
      u = u2*cos_rot - v2*sin_rot + cx;
      v = u2*sin_rot + v2*cos_rot + cy;

      // Apply the translation effect
      u -= dx;
      v -= dy;

      m_warped_screencoords(i,j)[0] = u;
      m_warped_screencoords(i,j)[1] = v;
    }
  }
 
  //  glEnable(GL_BLEND);
  glDisable(GL_BLEND);
  //  glBlendFunc (GL_ONE, GL_ZERO);
        
  //  We will draw the image as a texture on this quad.
  qglColor(Qt::white);
  glBegin(GL_QUADS);
  for (int i = 0 ; i < HORIZ_MESH_SIZE ; ++i) {
    for (int j = 0 ; j < VERT_MESH_SIZE ; ++j) {
      glTexCoord2f( m_feedback_texcoords(i,j)[0], m_feedback_texcoords(i,j)[1] ); 
      glVertex2f(   m_warped_screencoords(i,j)[0] , m_warped_screencoords(i,j)[1] );
      glTexCoord2f( m_feedback_texcoords(i,j+1)[0], m_feedback_texcoords(i,j+1)[1] ); 
      glVertex2f(   m_warped_screencoords(i,j+1)[0], m_warped_screencoords(i,j+1)[1] );
      glTexCoord2f( m_feedback_texcoords(i+1,j+1)[0],  m_feedback_texcoords(i+1,j+1)[1] ); 
      glVertex2f(   m_warped_screencoords(i+1,j+1)[0], m_warped_screencoords(i+1,j+1)[1] );
      glTexCoord2f(  m_feedback_texcoords(i+1,j)[0],  m_feedback_texcoords(i+1,j)[1] ); 
      glVertex2f(   m_warped_screencoords(i+1,j)[0], m_warped_screencoords(i+1,j)[1] );
    }		
  }
  glEnd();
  glDisable( GL_TEXTURE_2D );
  m_gpu_backbuffer_program->uninstall();
}


// <<MILKDROP>> This code was adapted from Milkdrop's milkdropfs.cpp.
// See the milkdrop license in COPYING for more details.
bool ReversePropagatePoint(float fx, float fy, float *fx2, float *fy2, 
                           int size_x, int size_y, float framebuffer_radius,
                           vw::Matrix<vw::Vector2>& screencoords) {

  float screen_w = 2.0*framebuffer_radius;  
  float screen_h = 2.0*framebuffer_radius;

  float Y = (fy + framebuffer_radius) / screen_h * (size_y);
  float X = (fx + framebuffer_radius) / screen_w * (size_x);

  int   y0 = int(Y);
  float dy = Y - y0;

  int   x0 = int(X);
  float dx = X - x0;

  int x1 = x0 + 1;
  int y1 = y0 + 1;
  
  if (x0 < 0) return false;
  if (y0 < 0) return false;
  if (x1 > size_x) return false;
  if (y1 > size_y) return false;

  float tu, tv;
  tu  = screencoords(x0,y0)[0] * (1-dx)*(1-dy);
  tv  = screencoords(x0,y0)[1] * (1-dx)*(1-dy);
  tu += screencoords(x0,y1)[0] * (dx)*(1-dy);
  tv += screencoords(x0,y1)[1] * (dx)*(1-dy);
  tu += screencoords(x1,y0)[0] * (1-dx)*(dy);
  tv += screencoords(x1,y0)[1] * (1-dx)*(dy);
  tu += screencoords(x1,y1)[0] * (dx)*(dy);
  tv += screencoords(x1,y1)[1] * (dx)*(dy);
  
  *fx2 = tu;
  *fy2 = tv;
  return true;
}

// <<MILKDROP>> This code was adapted from Milkdrop's milkdropfs.cpp.
// See the milkdrop license in COPYING for more details.

void GraphicsEngine::drawBorders() {

  glEnable(GL_BLEND);
  glBlendFunc (GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);

  if (pe_script_engine().get_parameter("ib_a")) {
    glLoadIdentity();
    glLineWidth( pe_script_engine().get_parameter("ib_size") );
    glColor4f( pe_script_engine().get_parameter("ib_r"),
               pe_script_engine().get_parameter("ib_g"),
               pe_script_engine().get_parameter("ib_b"),
               pe_script_engine().get_parameter("ib_a") );

    // float ib_size = pe_script_engine().get_parameter("ib_size");
    // float ob_size = pe_script_engine().get_parameter("ob_size");

    // float fInnerRad = (it==0) ? 1.0f - fOuterBorderSize : 
    //                             1.0f - fOuterBorderSize - fInnerBorderSize;
    // float fOuterRad = (it==0) ? 1.0f                    : 
    //                             1.0f - fOuterBorderSize;
    
    glBegin(GL_LINES);
    glVertex2d( -m_aspect, 1.0 );
    glVertex2d( m_aspect, 1.0 );
    glVertex2d( m_aspect, 1.0 );
    glVertex2d( m_aspect, -1.0 );
    glVertex2d( m_aspect, -1.0 );
    glVertex2d( -m_aspect, -1.0 );
    glVertex2d( -m_aspect, -1.0 );
    glVertex2d( -m_aspect, 1.0 );
    glEnd();
  }
  glDisable( GL_BLEND );
}

void GraphicsEngine::drawDarkenCenter() {

  if (pe_script_engine().get_parameter("darken_center")) {

       glEnable(GL_BLEND);
       glBlendFunc (GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);

       float fHalfSize = 0.005f;
       glBegin(GL_TRIANGLE_FAN);
       
       // Center point
       glColor4f(0.0, 0.0, 0.0, 3.0f/32.0f);
       glVertex2f(0.0,0.0);
       
       // Perimeter
       glColor4f(0.0, 0.0, 0.0, 0.0);
       glVertex2f(0.0f - fHalfSize*m_aspect, 0.0);
       glVertex2f(0.0f, 0.0f - fHalfSize);
       glVertex2f(0.0f + fHalfSize*m_aspect, 0.0);
       glVertex2f(0.0f, 0.0f + fHalfSize);
       glVertex2f(0.0f - fHalfSize*m_aspect, 0.0);
       
       glEnd();
       glDisable( GL_BLEND ); 
     }
}



// <<MILKDROP>> This code was adapted from Milkdrop's milkdropfs.cpp.
// See the milkdrop license in COPYING for more details.

void GraphicsEngine::drawVectorField() {
  
  if (pe_script_engine().get_parameter("mv_a") >= 0.001f) {
    
    glLoadIdentity();
    glLineWidth(1.0);
    glPointSize(2.0);

    glEnable(GL_POINT_SMOOTH);

    glColor4f(pe_script_engine().get_parameter("mv_r"),
              pe_script_engine().get_parameter("mv_g"),
              pe_script_engine().get_parameter("mv_b"),
              pe_script_engine().get_parameter("mv_a"));              


    glEnable(GL_BLEND);
    glBlendFunc (GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);


    int nX = int(pe_script_engine().get_parameter("mv_x"));
    int nY = int(pe_script_engine().get_parameter("mv_y"));
    float dx = pe_script_engine().get_parameter("mv_x") - nX;
    float dy = pe_script_engine().get_parameter("mv_y") - nY;
    if (nX > 64) { nX = 64; dx = 0; }
    if (nY > 48) { nY = 48; dy = 0; }
    
    if (nX > 0 && nY > 0) {

      float len_mult = pe_script_engine().get_parameter("mv_l");
      if (dx < 0) dx = 0;
      if (dy < 0) dy = 0;
      if (dx > 1) dx = 1;
      if (dy > 1) dy = 1;
      float min_len = 1.0f/m_viewport_width; // Is this correct?  

      for (int y=0; y<nY; y++) { 
        float fy = (y + 0.25f)/(float)(nY + dy + 0.25f - 1.0f) * 2.0f - 1.0f ;

        // now move by offset
        fy -= pe_script_engine().get_parameter("mv_dy");

        if (fy > -1.0f && fy < 1.0f) {
          for (int x=0; x<nX; x++) {
            float fx = (x + 0.25f)/(float)(nX + dx + 0.25f - 1.0f) * 2.0f * m_aspect - m_aspect;

            // now move by offset
            fx += pe_script_engine().get_parameter("mv_dx");
            
            if (fx > -m_aspect && fx < m_aspect) {

              float fx2, fy2;
              ReversePropagatePoint(fx, fy, &fx2, &fy2, 
                                    HORIZ_MESH_SIZE, VERT_MESH_SIZE, 
                                    m_framebuffer_radius,
                                    m_warped_screencoords);	
              float dx = (fx2 - fx);
              float dy = (fy2 - fy);
              fx2 = fx + len_mult * dx;
              fy2 = fy + len_mult * dy;

              glBegin(GL_LINES);
              glVertex2d( fx, fy );
              glVertex2d( fx2, fy2);
              glEnd();
              glBegin(GL_POINTS);
              glVertex2d( fx2, fy2 );
              glEnd();
            }
          }
        }
      }
    }
    glDisable(GL_BLEND);
  }
  
}


// <<MILKDROP>> This code was adapted from Milkdrop's milkdropfs.cpp.
// See the milkdrop license in COPYING for more details.

void GraphicsEngine::draw_milkdrop_waves() {
    glEnable(GL_BLEND);
    if (pe_script_engine().get_parameter("wave_additive"))
      glBlendFunc (GL_SRC_ALPHA, GL_ONE);
    else
      glBlendFunc (GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);

    float wave_r = pe_script_engine().get_parameter("wave_r");
    float wave_g = pe_script_engine().get_parameter("wave_g");
    float wave_b = pe_script_engine().get_parameter("wave_b");
    float wave_a = pe_script_engine().get_parameter("wave_a");
    float wave_mystery = pe_script_engine().get_parameter("wave_mystery");
    
    if (pe_script_engine().get_parameter("wave_brighten")) {
      float max = wave_r;
      if (max < wave_g) max = wave_g;
      if (max < wave_b) max = wave_b;
      if (max > 0.01f) {
        wave_r = wave_r/max;
        wave_g = wave_g/max;
        wave_b = wave_b/max;
      }

    }

    // Compute wave position, adjusting from the parameter range
    // [0..1] to the window range [-1..1] for x and [-aspect..aspect]
    // for y.
    float x = pe_script_engine().get_parameter("wave_x")*2.0*m_aspect - m_aspect;
    float y = pe_script_engine().get_parameter("wave_y")*2.0 - 1.0;


    float bass_rel   = pe_script_engine().get_parameter("bass_att");
    float mid_rel    = pe_script_engine().get_parameter("mid_att");
    float treble_rel = pe_script_engine().get_parameter("treb_att");

    glDisable(GL_BLEND);
}
