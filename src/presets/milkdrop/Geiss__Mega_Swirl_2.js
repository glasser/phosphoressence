function Geiss__Mega_Swirl_2() {
  with (Math) {
    gamma=2;
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
    wave_a=3.3;
    fWaveScale=1.17;
    fWaveSmoothing=0.5;
    wave_mystery=0;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=1;
    warp_scale=2.853;
    zoomexp=2.1;
    fShader=0;
    zoom=1.025;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=1.29077;
    sx=1;
    sy=1;
    wave_r=0.8;
    wave_g=0.5;
    wave_b=0.3;
    wave_x=0.5;
    wave_y=0.5;
    wave_r = wave_r + 0.400*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );
    wave_g = wave_g + 0.400*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );
    wave_b = wave_b + 0.400*( 0.60*sin(0.910*time) + 0.40*sin(0.920*time) );
    zoom = zoom + 0.01*( 0.60*sin(0.339*time) + 0.40*sin(0.276*time) );
    rot = rot + 0.010*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );
    decay = decay - 0.01*equal(frame%6,0);
    // per_pixel_1=rot=rot+0.16*sin(time*-3.3+rad*11)*(1.3-rad);
    fRating=3;
  }
}
register_preset( Geiss__Mega_Swirl_2);
