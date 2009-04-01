function Geiss__Serpent() {
  with (Math) {
    fRating=3;
    gamma=2;
    decay=0.98;
    echo_zoom=2;
    echo_alpha=0;
    echo_orient=0;
    wave_mode=1;
    wave_additive=0;
    wave_usedots=0;
    bWaveThick=1;
    bModWaveAlphaByVolume=0;
    wave_brighten=1;
    wrap=1;
    darken_center=0;
    bRedBlueStereo=0;
    brighten=0;
    darken=0;
    solarize=0;
    invert=0;
    wave_a=0.369668;
    fWaveScale=1.3;
    fWaveSmoothing=0.5;
    wave_mystery=0;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=1;
    warp_scale=2.853;
    zoomexp=3.6;
    fShader=0;
    zoom=1.004;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=0.309;
    sx=1;
    sy=1;
    wave_r=0.6;
    wave_g=0.6;
    wave_b=0.6;
    wave_x=0.5;
    wave_y=0.47;
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
    mv_x=12;
    mv_y=9;
    mv_dx=0;
    mv_dy=0;
    mv_l=0.9;
    mv_r=1;
    mv_g=1;
    mv_b=1;
    mv_a=0;
    wave_r = wave_r + 0.400*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );
    wave_g = wave_g + 0.400*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );
    wave_b = wave_b + 0.400*( 0.60*sin(0.910*time) + 0.40*sin(0.920*time) );
    zoom = zoom + 0.023*( 0.60*sin(0.339*time) + 0.40*sin(0.276*time) );
    rot = rot + 0.030*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );
    decay = decay - 0.01*equal(frame%200,0);
    // per_pixel_1=sx=sx+0.05*sin((y*2-1)*6+time*1.53+(x*2-1)*3.2);
    // per_pixel_2=sy=sy+0.05*cos((x*2-1)*8+time*1.71+(y*2-1)*4.3);
  }
}
register_preset( Geiss__Serpent);