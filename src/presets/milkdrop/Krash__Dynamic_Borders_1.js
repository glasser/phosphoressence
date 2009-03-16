function Krash__Dynamic_Borders_1() {
  with (Math) {
    fRating=3.;
    gamma=2.7;
    decay=0.99;
    echo_zoom=2.;
    echo_alpha=0.;
    echo_orient=0;
    wave_mode=7;
    wave_additive=0;
    wave_usedots=0;
    bModWaveAlphaByVolume=0;
    wave_brighten=1;
    wrap=0;
    darken_center=1;
    bMotionVectorsOn=0;
    bRedBlueStereo=0;
    mv_x=12;
    mv_y=9;
    brighten=0;
    darken=0;
    solarize=0;
    invert=0;
    wave_a=0.001;
    fWaveScale=0.634243;
    fWaveSmoothing=0.1;
    wave_mystery=0.;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=1.;
    warp_scale=1.331;
    zoomexp=0.99999;
    fShader=0.;
    zoom=1.;
    rot=0.;
    cx=0.5;
    cy=0.5;
    dx=0.;
    dy=0.;
    warp=0.000156;
    sx=0.999666;
    sy=0.9999;
    wave_r=0.65;
    wave_g=0.65;
    wave_b=0.65;
    wave_x=0.5;
    wave_y=0.38;
    ob_size=0.02;
    ob_r=0.;
    ob_g=0.;
    ob_b=0.;
    ob_a=0.1;
    ib_size=0.05;
    ib_r=0.5;
    ib_g=0.5;
    ib_b=0.5;
    ib_a=0.1;
    warp = 0;
    
    ib_r = ib_r + 0.10*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );
    ib_g = ib_g + 0.10*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );
    ib_b = ib_b + 0.10*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );
    temp = 0.12*tan(0.3*(mid+bass));
    ib_a = if_milk(below(temp,0.4),temp,0.4);
    ob_size = ob_size - 0.01;
    ob_size = ob_size + 0.15*sin(0.5*bass_att);
    q1 = (cx*2-1) + 0.62*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );
    q2 = (cy*2-1) + 0.62*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );
    q3 = (cx*2-1) + 0.62*( 0.60*sin(0.174*-time) + 0.40*sin(0.364*time) );
    q4 = (cy*2-1) + 0.62*( 0.60*sin(0.234*time) + 0.40*sin(0.271*-time) );
    decay = decay - 0.01*equal(frame%5,0);
    // per_pixel_1=du = x*2-1 - q1;
    // per_pixel_2=dv = y*2-1 - q2;
    // per_pixel_3=dist = sqrt(du*du+dv*dv);
    // per_pixel_4=ang2 = atan2(du,dv);
    // per_pixel_5=mult = 0.008/(dist+0.4);
    // per_pixel_6=dx = mult*sin(ang2-1.5);
    // per_pixel_7=dy = mult*cos(ang2-1.5);
    // per_pixel_8=du = x*2-1 - q3;
    // per_pixel_9=dv = y*2-1 - q4;
    // per_pixel_10=dist = sqrt(du*du+dv*dv);
    // per_pixel_11=ang2 = atan2(du,dv);
    // per_pixel_12=mult = 0.008/(dist+0.4);
    // per_pixel_13=dx = dx + mult*sin(ang2+1.5);
    // per_pixel_14=dy = dy + mult*cos(ang2+1.5);
    // per_pixel_15=dx = dx*1.5;
    // per_pixel_16=dy = dy*1.5;
  }
}
register_preset( Krash__Dynamic_Borders_1);
