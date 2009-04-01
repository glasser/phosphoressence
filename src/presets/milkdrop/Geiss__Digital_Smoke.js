function Geiss__Digital_Smoke() {
  with (Math) {
    gamma=1;
    decay=0.97;
    echo_zoom=1.728;
    echo_alpha=0.4;
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
    wave_a=3.8;
    fWaveScale=1.694;
    fWaveSmoothing=0.1;
    wave_mystery=0;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=1;
    warp_scale=1.331;
    zoomexp=2;
    fShader=0;
    zoom=1.031;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=0.239;
    sx=1;
    sy=1;
    wave_r=0.5;
    wave_g=0.5;
    wave_b=0.5;
    wave_x=0.5;
    wave_y=0.5;
    wave_r = wave_r + 0.10*( 0.60*sin(1.037*time) + 0.40*sin(0.370*time) );
    wave_g = wave_g + 0.10*( 0.60*sin(0.944*time) + 0.40*sin(0.441*time) );
    wave_b = wave_b + 0.10*( 0.60*sin(0.851*time) + 0.40*sin(0.55*time) );
    rot = rot + 0.010*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );
    cx = cx + 0.210*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );
    cy = cy + 0.210*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );
    dx = dx + 0.010*( 0.60*sin(0.234*time) + 0.40*sin(0.277*time) );
    dy = dy + 0.010*( 0.60*sin(0.284*time) + 0.40*sin(0.247*time) );
    fRating=2;
  }
}
register_preset( Geiss__Digital_Smoke);