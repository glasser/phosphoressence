function Geiss__Spacedust() {
  with (Math) {
    fRating=3;
    gamma=1.6;
    decay=0.98;
    echo_zoom=2;
    echo_alpha=0;
    echo_orient=0;
    wave_mode=2;
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
    brighten=0;
    darken=0;
    solarize=0;
    invert=0;
    wave_a=1.9;
    fWaveScale=1.372;
    fWaveSmoothing=0.7;
    wave_mystery=0;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=1;
    warp_scale=3.138;
    zoomexp=1;
    fShader=0;
    zoom=1.099;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=0.564;
    sx=1;
    sy=1;
    wave_r=0.5;
    wave_g=0.5;
    wave_b=0.5;
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
    wave_r = wave_r + 0.500*( 0.60*sin(0.637*time) + 0.40*sin(0.570*time) );
    wave_g = wave_g + 0.500*( 0.60*sin(0.744*time) + 0.40*sin(0.641*time) );
    wave_b = wave_b + 0.500*( 0.60*sin(0.751*time) + 0.40*sin(0.555*time) );
    rot = rot + 0.040*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );
    cx = cx + 0.110*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );
    cy = cy + 0.110*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );
    dy = dy + 0.002*( 0.60*sin(0.284*time) + 0.40*sin(0.247*time) );
  }
}
register_preset( Geiss__Spacedust);
