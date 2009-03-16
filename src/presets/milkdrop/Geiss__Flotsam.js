function Geiss__Flotsam() {
  with (Math) {
    gamma=2.7;
    decay=0.98;
    echo_zoom=2;
    echo_alpha=0;
    echo_orient=0;
    wave_mode=3;
    wave_additive=0;
    wave_usedots=0;
    bModWaveAlphaByVolume=0;
    wave_brighten=1;
    wrap=1;
    darken_center=0;
    bMotionVectorsOn=0;
    bRedBlueStereo=0;
    mv_x=12;
    mv_y=9;
    wave_a=4.099998;
    fWaveScale=2.24567;
    fWaveSmoothing=0.7;
    wave_mystery=0;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=1;
    warp_scale=1.331;
    zoomexp=1;
    fShader=0;
    zoom=1.012991;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=0.000156;
    sx=0.999666;
    sy=0.9999;
    wave_r=1;
    wave_g=0.65;
    wave_b=0.25;
    wave_x=0.5;
    wave_y=0.38;
    wave_r = wave_r + 0.250*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );
    wave_g = wave_g + 0.250*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );
    wave_b = wave_b + 0.250*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );
    q1 = (cx*2-1) + 0.92*( 0.60*sin(0.374*time) + 0.40*sin(0.494*time) );
    q2 = (cy*2-1) + 0.92*( 0.60*sin(0.393*time) + 0.40*sin(0.423*time) );
    q3 = (cx*2-1) + 0.92*( 0.60*sin(0.174*-time) + 0.40*sin(0.364*time) );
    q4 = (cy*2-1) + 0.92*( 0.60*sin(0.234*time) + 0.40*sin(0.271*-time) );
    // per_pixel_1=du = (x*2-1) - q1;
    // per_pixel_2=dv = (y*2-1) - q2;
    // per_pixel_3=dist = sqrt(du*du+dv*dv);
    // per_pixel_4=ang2 = atan2(du,dv);
    // per_pixel_5=mult = 0.012/(dist+0.4);
    // per_pixel_6=dx = mult*sin(ang2-1.5);
    // per_pixel_7=dy = mult*cos(ang2-1.5);
    // per_pixel_8=du = (x*2-1) - q3;
    // per_pixel_9=dv = (y*2-1) - q4;
    // per_pixel_10=dist = sqrt(du*du+dv*dv);
    // per_pixel_11=ang2 = atan2(du,dv);
    // per_pixel_12=mult = 0.012/(dist+0.4);
    // per_pixel_13=dx = dx + mult*sin(ang2+1.5);
    // per_pixel_14=dy = dy + mult*cos(ang2+1.5);
    fRating=2;
  }
}
register_preset( Geiss__Flotsam);
