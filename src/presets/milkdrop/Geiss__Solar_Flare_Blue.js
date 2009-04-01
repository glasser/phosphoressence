function Geiss__Solar_Flare_Blue() {
  with (Math) {
    fRating=3;
    gamma=2;
    decay=1;
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
    wave_a=4;
    fWaveScale=0.387;
    fWaveSmoothing=0.5;
    wave_mystery=0;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=1;
    warp_scale=3.138;
    zoomexp=2.6;
    fShader=0;
    zoom=1.031;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=-0.005;
    warp=0.123;
    sx=1;
    sy=1;
    wave_r=0;
    wave_g=0.57;
    wave_b=1;
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
    wave_r = wave_r + 0.250*( 0.60*sin(2.137*time) + 0.40*sin(1.770*time) );
    wave_g = wave_g + 0.300*( 0.60*sin(1.944*time) + 0.40*sin(1.541*time) );
    wave_b = wave_b + 0.250*( 0.60*sin(1.251*time) + 0.40*sin(1.655*time) );
    rot = rot + 0.010*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );
    cx = cx + 0.410*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );
    cy = cy + 0.410*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );
    dx = dx + 0.010*( 0.60*sin(0.234*time) + 0.40*sin(0.277*time) );
    dy = dy + 0.010*( 0.60*sin(0.284*time) + 0.40*sin(0.247*time) );
    decay = decay - 0.03*equal(frame%2,0);
  }
}
register_preset( Geiss__Solar_Flare_Blue);