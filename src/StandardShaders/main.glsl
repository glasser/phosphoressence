// Top level uniform variables
uniform sampler2D feedback_texture;                             
uniform float framebuffer_radius;
uniform float decay;
uniform float invert;
uniform float gamma;
uniform float time;
uniform float ifs_mode;

uniform float width;
uniform float D_g;
uniform float D_b;
uniform float s;
uniform float beta;
uniform float rd_blur;

#define EPS 0.00001
#define PI 3.14159

/// RGB->HSV conversion
vec4 rgb_to_hsv(vec4 rgb) {
  float hue;
  float saturation;
  float luminance;
  
  if( rgb.r==rgb.g && rgb.r==rgb.b ) {                 // S = 0
    hue = 0.0;
    saturation = 0.0;
    luminance = rgb.r;
  } else if( rgb.r<=rgb.g && rgb.r<=rgb.b ) {          // H=[1/3,2/3)
    luminance = max(rgb.g,rgb.b);
    hue = (3.0 - (rgb.g-rgb.b)/(luminance-rgb.r))/6.0;
    saturation = (luminance-rgb.r)/(luminance+EPS);
  } else if( rgb.g <= rgb.r && rgb.g < rgb.b ) {       // H=[2/3,1)
    luminance = max(rgb.r,rgb.b);
    hue = (5.0 - (rgb.b-rgb.r)/(luminance-rgb.g))/6.0;
    saturation = (luminance-rgb.g)/(luminance+EPS);
  } else {                                             // H=[0,1/3)
    luminance = max(rgb.r,rgb.g);
    hue = (1.0 - (rgb.r-rgb.g)/(luminance-rgb.b))/6.0;
    saturation = (luminance-rgb.b)/(luminance+EPS);
  }
  return vec4(hue, saturation, luminance, rgb.a);
}

/// HSV->RGB conversion
vec4 hsv_to_rgb(vec4 hsv) {
  float h = hsv.r;
  float s = hsv.g;
  float v = hsv.b;

  int i = int(floor(6.0*h));
  float f = 6.0*h - float(i);

  float p = v * (1.0 - s);
  float q = v * (1.0 - s*f);
  float t = v * (1.0 - (1.0-f) * s);

  float r,g,b;
  if (i==1) {
    r=q; g=v; b=p; 
  } else if (i==2) {
    r=p; g=v; b=t; 
  } else if (i==3) {
    r=p; g=q; b=v; 
  } else if (i==4) {
    r=t; g=p; b=v;
  } else if (i==5) {
    r=v; g=p; b=q; 
  } else {  // i == 0 || i == 6
    r=v; g=t; b=p; 
  }
  return vec4(r,g,b,hsv.a);
}

void main() { 

  // For debugging:
  // gl_FragColor = texture2D(feedback_texture, gl_TexCoord[0].st);
  // return;


  // Compute the source texture coordinates
  //
  // gl_TexCoord ranges from [0..1, 0..1]
  // normalized coordinates range from [-1..1, -1..1] * framebuffer_radius
  float x = (gl_TexCoord[0].x-0.5) * 2.0 * framebuffer_radius;
  float y = (gl_TexCoord[0].y-0.5) * 2.0 * framebuffer_radius;
  float r = sqrt(x*x+y*y);
  float theta = atan(x,y);
  float phi = atan(y,x);

  vec2 remapped_coords;
  // if (ifs_mode == 1.0) {

  //   // 1. Sinusoidal
  //   remapped_coords = vec2(sin(x),sin(y));

  // } else if (ifs_mode == 2.0) {

  //   // 2. Spherical
  //   remapped_coords = vec2(1.0/(r*r)*x,
  //                          1.0/(r*r)*y);
                           
  // } else if (ifs_mode == 3.0) {

  //   // 3. Swirl (variation 3)
  //   remapped_coords = vec2(x*sin(r*r)-y*cos(r*r),
  //                          x*cos(r*r)+y*sin(r*r));

  // } else if (ifs_mode == 4.0) {

  //   // 4. Horsehoe 
  //   remapped_coords = vec2(1.0/r * (x-y)*(x+y), 
  //                          1.0/r * 2.0*x*y);
    
  // } else if (ifs_mode == 5.0) {

  //   //  5. Polar (*)
  //   remapped_coords = vec2(theta/PI, r-1.0);
    
  // } else if (ifs_mode == 6.0) {

  //   // 6. Handkerchief
  //   remapped_coords = vec2(r*sin(theta+r), 
  //                          r*cos(theta-r));

  // } else if (ifs_mode == 7.0) {

  //   // 7. Heart (*)
  //   remapped_coords = vec2(r*sin(theta*r), 
  //                          -r*cos(theta*r));

  // } else if (ifs_mode == 8.0) {

  //   // 8. Disc
  //   remapped_coords = vec2(theta/PI*sin(theta*r), 
  //                          theta/PI*cos(theta*r));


  // } else if (ifs_mode == 9.0) {

  //   // 9. Spiral
  //   remapped_coords = vec2(1.0 / r * (cos(theta)+sin(r)),
  //                          1.0 / r * (sin(theta)-cos(r)));

  // } else if (ifs_mode == 10.0) {

  //   // 10. Hyperbolic
  //   remapped_coords = vec2( sin(theta) / r, 
  //                           r * cos(theta) );

  // } else if (ifs_mode == 11.0) {

  //   // 11. Diamond
  //   remapped_coords = vec2( sin(theta)*cos(r), 
  //                           cos(theta)*sin(r) );

  // } else if (ifs_mode == 12.0) {

  //   // 12. Ex
  //   float p0 = sin(theta+r); 
  //   float p1 = cos(theta-r);
  //   remapped_coords = vec2( r * (p0*p0*p0 + p1*p1*p1),
  //                           r * (p0*p0*p0 - p1*p1*p1) );

  // } else if (ifs_mode == 13.0) {

  //   // 13. Julia
  //   float root_r = sqrt(r);
  //   float omega = 0.0;     // NEED TO IMPLEMENT
  //   remapped_coords = vec2( root_r * cos(theta/2.0 + omega),
  //                           root_r * sin(theta/2.0 + omega) );

  // } else if (ifs_mode == 14.0) {

  //   // 14. Bent
  //   if (x >= 0.0 && y >= 0.0)
  //     remapped_coords = vec2(x,y);
  //   else if (x < 0.0 && y >= 0.0)
  //     remapped_coords = vec2(2.0*x,y);
  //   else if (x >= 0.0 && y < 0.0)
  //     remapped_coords = vec2(x,y/2.0);
  //   else
  //     remapped_coords = vec2(2.0*x,y/2.0);

  // } else if (ifs_mode == 15.0) {

  //   // 15. Waves (dependent)
  //   remapped_coords = vec2(x,y);   // NEED TO IMPLEMENT

  // } else if (ifs_mode == 16.0) {

  //   // 16. Fisheye
  //   float p = 2.0 / (r + 1.0);
  //   remapped_coords = vec2(p * y, p * x);

  // } else if (ifs_mode == 17.0) {

  //   // 17. Popcorn (dependent)
  //   remapped_coords = vec2(x,y);   // NEED TO IMPLEMENT

  // } else if (ifs_mode == 18.0) {

  //   // 18. Exponential
  //   float p = exp(x-1.0);
  //   remapped_coords = vec2(p * cos(PI*y), 
  //                          p * sin(PI*y) );

  // } else { 


    // Linear
    remapped_coords = vec2(x,y);

    //  }

  vec2 unnormalized_coords = vec2(remapped_coords.x / (2.0*framebuffer_radius) + 0.5, 
                                  remapped_coords.y / (2.0*framebuffer_radius) + 0.5);
  vec4 src;
  if (unnormalized_coords.x <= 0.0 || unnormalized_coords.x >= 1.0 ||
      unnormalized_coords.y <= 0.0 || unnormalized_coords.y >= 1.0)
    src = vec4(1.0,0.0,0.0,1.0);
  else 
    src = texture2D(feedback_texture, unnormalized_coords);

  // Apply invert
  if (invert == 1.0) {
    src.r = src.r * -1.0 + 1.0;
    src.g = src.g * -1.0 + 1.0;
    src.b = src.b * -1.0 + 1.0;
  }
  
  // Apply Gamma
  // src.r = pow(src.r, gamma);
  // src.g = pow(src.g, gamma);
  // src.b = pow(src.b, gamma);

  // Apply gain
  vec4 g = vec4(decay, decay, decay, 1.0);
  vec4 hsv_texel = g * rgb_to_hsv(src);
  
  while (hsv_texel.r >= 1.0)     // Hue
    hsv_texel.r -= 0.99;
  if (hsv_texel.g > 1.0) {      // Saturation
    hsv_texel.g = 1.0;
  } if (hsv_texel.b > 1.0) {    // Luminance
    hsv_texel.b = 1.0;
  }
  vec4 final_texel = hsv_to_rgb(hsv_texel);

  // NaNs are the bane of our existence here!  We replace them with
  // null values.
  if (final_texel.r != final_texel.r ||
      final_texel.g != final_texel.g ||
      final_texel.b != final_texel.b ||
      final_texel.a != final_texel.a)
    final_texel = vec4(0.0,0.0,0.0,1.0);

  // Return the final value
  gl_FragColor = final_texel;
}
