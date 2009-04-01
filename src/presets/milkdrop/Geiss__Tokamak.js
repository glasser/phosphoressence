function Geiss__Tokamak() {
  with (Math) {
    fRating=3;
    gamma=1.993;
    decay=0.98;
    echo_zoom=2;
    echo_alpha=0;
    echo_orient=0;
    wave_mode=7;
    wave_additive=0;
    wave_usedots=0;
    bModWaveAlphaByVolume=1;
    wave_brighten=0;
    wrap=1;
    darken_center=0;
    bMotionVectorsOn=0;
    bRedBlueStereo=0;
    mv_x=12;
    mv_y=9;
    brighten=0;
    darken=0;
    solarize=0;
    invert=0;
    wave_a=0.2;
    fWaveScale=4.225629;
    fWaveSmoothing=0.7;
    wave_mystery=0;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=1;
    warp_scale=1.331;
    zoomexp=1;
    fShader=0;
    zoom=1.004;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=0.197884;
    sx=0.999667;
    sy=0.9999;
    wave_r=0.75;
    wave_g=0.75;
    wave_b=0.75;
    wave_x=0.5;
    wave_y=0.68;
    ob_size=0.01;
    ob_r=0;
    ob_g=0;
    ob_b=0;
    ob_a=0;
    ib_size=0.01;
    ib_r=0.25;
    ib_g=0.25;
    ib_b=0.25;
    ib_a=0;
    wave_r = wave_r + 0.2*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );
    wave_g = wave_g + 0.2*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );
    wave_b = wave_b + 0.2*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );
    q1 = (cx*2-1) + 0.6*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );
    q2 = (cy*2-1) + 0.6*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );
    // per_pixel_1=du = (x*2-1) - q1;
    // per_pixel_2=dv = (y*2-1) - q2;
    // per_pixel_3=dist = sqrt(du*du+dv*dv);
    // per_pixel_4=ang2 = atan2(du,dv) + time*0.15;
    // per_pixel_5=mult = 0.65*sin(dist*0.05);
    // per_pixel_6=dx = mult*sin(ang2*2-1.5);
    // per_pixel_7=dy = mult*cos(ang2*2-1.5);
  }
}
register_preset( Geiss__Tokamak);