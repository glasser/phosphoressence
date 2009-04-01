function Rovastar__Forgotten_Moon() {
  with (Math) {
    fRating=3;
    gamma=1;
    decay=1;
    echo_zoom=1.006596;
    echo_alpha=0;
    echo_orient=3;
    wave_mode=8;
    wave_additive=1;
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
    wave_a=4.099998;
    fWaveScale=0.015199;
    fWaveSmoothing=0.63;
    wave_mystery=-0.34;
    fModWaveAlphaStart=0.71;
    fModWaveAlphaEnd=1.3;
    warp_speed=1;
    warp_scale=1.331;
    zoomexp=1;
    fShader=0;
    zoom=1;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=0.01;
    sx=1;
    sy=1;
    wave_r=0.65;
    wave_g=0.65;
    wave_b=0.65;
    wave_x=0.1;
    wave_y=0.86;
    ob_size=0.005;
    ob_r=0.01;
    ob_g=0;
    ob_b=0;
    ob_a=1;
    ib_size=0.005;
    ib_r=0.25;
    ib_g=0.25;
    ib_b=0.25;
    ib_a=1;
    mv_x=64;
    mv_y=48;
    mv_dx=0;
    mv_dy=0;
    mv_l=0.5;
    mv_r=0.35;
    mv_g=0.35;
    mv_b=0.35;
    mv_a=0;
    warp=0;
    ib_r = 0.5+0.5*sin(time);
    ib_g = 0.5+0.5*sin(time*1.576);
    wave_r = wave_r + 0.350*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );
    wave_g = wave_g + 0.350*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );
    wave_b = wave_b + 0.350*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );
    q8 =oldq8+ 0.0002*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);
    oldq8 = q8;
    // per_pixel_1=dx = 0.01*sin(100*y+q8/y);
    // per_pixel_2=dy = 0.01*sin(100*x+q8/x);
    q8=0;
  }
}
register_preset( Rovastar__Forgotten_Moon);