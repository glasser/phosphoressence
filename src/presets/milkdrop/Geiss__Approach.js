function Geiss__Approach() {
  with (Math) {
    fRating=3;
    gamma=2;
    decay=0.98;
    echo_zoom=2;
    echo_alpha=0;
    echo_orient=0;
    wave_mode=2;
    wave_additive=0;
    wave_usedots=0;
    bWaveThick=1;
    bModWaveAlphaByVolume=0;
    wave_brighten=0;
    wrap=1;
    darken_center=0;
    bRedBlueStereo=0;
    brighten=0;
    darken=0;
    solarize=0;
    invert=0;
    wave_a=11.94;
    fWaveScale=1.372;
    fWaveSmoothing=0.7;
    wave_mystery=0;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=1;
    warp_scale=1.772;
    zoomexp=1.001;
    fShader=0;
    zoom=1.007;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=0;
    sx=1;
    sy=1;
    wave_r=0.7;
    wave_g=0.3;
    wave_b=0.3;
    wave_x=0.5;
    wave_y=0.5;
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
    wave_x = wave_x + 0.150*( 0.60*sin(2.121*time) + 0.40*sin(1.621*time) );
    wave_y = wave_y + 0.150*( 0.60*sin(1.742*time) + 0.40*sin(2.322*time) );
    wave_r = wave_r + 0.200*( 0.60*sin(0.823*time) + 0.40*sin(0.916*time) );
    wave_g = wave_g + 0.500*( 0.60*sin(0.900*time) + 0.40*sin(1.023*time) );
    wave_b = wave_b + 0.500*( 0.60*sin(0.808*time) + 0.40*sin(0.949*time) );
    rot = rot + 0.002*sin(time+0.073);
    decay = decay - 0.03*equal(frame%30,0);
  }
}
register_preset( Geiss__Approach);