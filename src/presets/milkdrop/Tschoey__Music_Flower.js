function Tschoey__Music_Flower() {
  with (Math) {
    fRating=3;
    gamma=1;
    decay=0.99;
    echo_zoom=1.006596;
    echo_alpha=0;
    echo_orient=3;
    wave_mode=0;
    wave_additive=0;
    wave_usedots=0;
    bWaveThick=1;
    bModWaveAlphaByVolume=0;
    wave_brighten=1;
    wrap=0;
    darken_center=0;
    bRedBlueStereo=0;
    brighten=0;
    darken=1;
    solarize=0;
    invert=0;
    wave_a=1.000158;
    fWaveScale=3.001487;
    fWaveSmoothing=0;
    wave_mystery=0.2;
    fModWaveAlphaStart=0.71;
    fModWaveAlphaEnd=1.3;
    warp_speed=1;
    warp_scale=1.331;
    zoomexp=1;
    fShader=0;
    zoom=0.999514;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=0.01;
    sx=1;
    sy=1;
    wave_r=1;
    wave_g=1;
    wave_b=1;
    wave_x=0.5;
    wave_y=0.5;
    ob_size=0.5;
    ob_r=0.01;
    ob_g=0;
    ob_b=0;
    ob_a=0;
    ib_size=0.26;
    ib_r=0.25;
    ib_g=0.25;
    ib_b=0.25;
    ib_a=0;
    mv_x=10.879999;
    mv_y=11.52;
    mv_dx=0;
    mv_dy=0;
    mv_l=5;
    mv_r=0;
    mv_g=1;
    mv_b=0;
    mv_a=0;
    wave_r = 0.5 + 0.5 *sin(time*1.13);
    wave_g = 0.5 + 0.5 *sin(time*1.23);
    wave_b = 0.5 + 0.5 *sin(time*1.33);
    // per_pixel_1=zoom = 1 +0.05*(rad)* if_milk(above(rad,0.7),1,-1);
  }
}
register_preset( Tschoey__Music_Flower);