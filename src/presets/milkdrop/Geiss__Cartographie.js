function Geiss__Cartographie() {
  with (Math) {
    gamma=1.35;
    echo_zoom=2;
    echo_alpha=0;
    echo_orient=0;
    decay=1;
    wave_mode=2;
    wave_additive=1;
    wave_usedots=0;
    bModWaveAlphaByVolume=0;
    wave_brighten=1;
    wrap=1;
    darken_center=0;
    bMotionVectorsOn=0;
    mv_x=12;
    mv_y=9;
    wave_a=3.699999;
    fWaveScale=1.3;
    fWaveSmoothing=0.9;
    wave_mystery=0;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=1;
    warp_scale=1;
    zoomexp=1.000415;
    fShader=1;
    zoom=1.006882;
    rot=0.04;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=0.057228;
    sx=1;
    sy=1;
    wave_r=0.65;
    wave_g=0.65;
    wave_b=0.65;
    wave_x=0.5;
    wave_y=0.5;
    wave_r = wave_r + 0.350*( 0.60*sin(0.742*time) + 0.40*sin(1.021*time) );
    wave_g = wave_g + 0.350*( 0.60*sin(0.703*time) + 0.40*sin(0.969*time) );
    wave_b = wave_b + 0.350*( 0.60*sin(1.090*time) + 0.40*sin(0.963*time) );
    rot = rot + 0.010*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );
    cx = cx + 0.110*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );
    cy = cy + 0.110*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );
    decay=decay-0.025*pow(0.5+0.5*sin(time*1.5),4.8);
    // per_pixel_1=dx=0.05*sin(x*80+y*94+rad*97+ang*22+time*0.733);
    // per_pixel_2=dy=0.05*sin(x*60+y*114+rad*77+ang*32+time*0.83);
    // per_pixel_3=zoom=zoom+0.05*rad;
    fRating=2;
  }
}
register_preset( Geiss__Cartographie);