function Geiss__Ultrafast() {
  with (Math) {
    fRating=4;
    gamma=1.998;
    decay=0.98;
    echo_zoom=1.421369;
    echo_alpha=0;
    echo_orient=0;
    wave_mode=5;
    wave_additive=1;
    wave_usedots=1;
    bModWaveAlphaByVolume=0;
    wave_brighten=1;
    wrap=1;
    darken_center=1;
    bMotionVectorsOn=0;
    bRedBlueStereo=0;
    mv_x=12;
    mv_y=9;
    brighten=0;
    darken=0;
    solarize=0;
    invert=0;
    wave_a=1.456111;
    fWaveScale=1.694;
    fWaveSmoothing=0.9;
    wave_mystery=0;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=1;
    warp_scale=3.138;
    zoomexp=1;
    fShader=0;
    zoom=1.153;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=1.098615;
    sx=1;
    sy=1;
    wave_r=0.5;
    wave_g=0.5;
    wave_b=0.8;
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
    wave_r = wave_r + 0.650*( 0.60*sin(1.437*time) + 0.40*sin(0.970*time) );
    wave_g = wave_g + 0.650*( 0.60*sin(1.344*time) + 0.40*sin(0.841*time) );
    wave_b = wave_b + 0.650*( 0.60*sin(1.251*time) + 0.40*sin(1.055*time) );
    rot = rot + 0.07*( 0.60*sin(0.381*time) + 0.09*sin(-0.579*time) );
    cx = cx + 0.10*( 0.60*sin(0.374*time) + 0.10*sin(0.294*time) );
    cy = cy + 0.10*( 0.60*sin(0.393*time) + 0.10*sin(0.223*time) );
    dx = dx + 0.010*( 0.60*sin(0.234*time) + 0.40*sin(0.277*time) );
    dy = dy + 0.010*( 0.60*sin(0.284*time) + 0.40*sin(0.247*time) );
    decay = decay - 0.01*equal(frame%6,0);
  }
}
register_preset( Geiss__Ultrafast);
