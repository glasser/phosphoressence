function Rovastar_and_Geiss__Dynamic_Swirls_3_Voyage_Of_Twisted_Souls_Mix() {
  with (Math) {
    fRating=2;
    gamma=1.993;
    decay=0.98;
    echo_zoom=2;
    echo_alpha=0;
    echo_orient=0;
    wave_mode=7;
    wave_additive=0;
    wave_usedots=0;
    bWaveThick=1;
    bModWaveAlphaByVolume=0;
    wave_brighten=1;
    wrap=0;
    darken_center=0;
    bRedBlueStereo=0;
    brighten=0;
    darken=0;
    solarize=0;
    invert=0;
    wave_a=0.608039;
    fWaveScale=0.634243;
    fWaveSmoothing=0.1;
    wave_mystery=0.5;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=1;
    warp_scale=1.331;
    zoomexp=1;
    fShader=0;
    zoom=1.00496;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=0.000156;
    sx=0.999666;
    sy=0.9999;
    wave_r=0.65;
    wave_g=0.65;
    wave_b=0.65;
    wave_x=0.5;
    wave_y=0.36;
    ob_size=0.01;
    ob_r=1;
    ob_g=0;
    ob_b=0;
    ob_a=1;
    ib_size=0.015;
    ib_r=0;
    ib_g=0;
    ib_b=0;
    ib_a=1;
    mv_x=64;
    mv_y=48;
    mv_dx=0;
    mv_dy=0;
    mv_l=0.15;
    mv_r=0;
    mv_g=0;
    mv_b=1;
    mv_a=0.4;
    ob_r = 0.7 - 0.3*(0.5*sin(time*0.701)+ 0.3*cos(time*0.438));
    ob_g = 0.5- 0.48*sin(time*1.324);
    ob_b = 0.5 - 0.48*cos(time*1.316);
    wave_r = wave_r + 0.350*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );
    wave_g = wave_g + 0.350*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );
    wave_b = wave_b + 0.350*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );
    mv_r = wave_r;
    mv_b = wave_b;
    mv_g = wave_g;
    q8 = oldq8+if_milk(above(bass+bass_att,2.8),q8+0.005*pow((bass+bass_att),5),0);
    oldq8 = q8;
    monitor = sin(q8);
    q1 = 0.62*( 0.60*sin(0.374*q8) + 0.40*sin(0.294*q8) );
    q2 = 0.62*( 0.60*sin(0.393*q8) + 0.40*sin(0.223*q8) );
    q3 = 0.62*( 0.60*sin(0.174*-q8) + 0.40*sin(0.364*q8) );
    q4 = 0.62*( 0.60*sin(0.234*q8) + 0.40*sin(0.271*-q8) );
    //zoom = zoom+ 0.06*abs(sin(q8));
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
    // per_pixel_12=mult = 0.008*sin(q8)/(dist+0.4);
    // per_pixel_13=dx = dx + mult*sin(ang2+1.5);
    // per_pixel_14=dy = dy + mult*cos(ang2+1.5);
    // per_pixel_15=//rot = -0.01*rad*sin(q8);
    // per_pixel_16=rot =0+abs(3* dx) - abs(3*dy);
    // per_pixel_17=zoom =1+abs(3* dx) - abs(3*dy);
    // per_pixel_18=zoomexp = 1 + abs((300* dx) - (300*dy));
  }
}
register_preset( Rovastar_and_Geiss__Dynamic_Swirls_3_Voyage_Of_Twisted_Souls_Mix);