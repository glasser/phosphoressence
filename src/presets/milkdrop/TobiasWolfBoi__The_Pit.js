function TobiasWolfBoi__The_Pit() {
  with (Math) {
    fRating=3;
    gamma=1.5;
    decay=0.98;
    echo_zoom=2;
    echo_alpha=0;
    echo_orient=0;
    wave_mode=1;
    wave_additive=1;
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
    wave_a=0.8;
    fWaveScale=1.386143;
    fWaveSmoothing=0;
    wave_mystery=0.9;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=1.008151;
    warp_scale=3.151486;
    zoomexp=0.1;
    fShader=0;
    zoom=0.801925;
    rot=-;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=0;
    sx=1;
    sy=1;
    wave_r=1;
    wave_g=1;
    wave_b=1;
    wave_x=0.5;
    wave_y=0.5;
    wave_r = wave_r + 0.500*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );
    wave_g = wave_g + 0.500*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );
    wave_b = wave_b + 0.500*( 0.60*sin(0.910*time) + 0.40*sin(0.920*time) );
    zoom = zoom + 0.013*( 0.60*sin(0.339*time) + 0.40*sin(0.276*time) );
    rot = rot + 0.040*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );
    // per_pixel_1=zoom=zoom+0.07*sin(rad*20+time*2.5);
  }
}
register_preset( TobiasWolfBoi__The_Pit);
