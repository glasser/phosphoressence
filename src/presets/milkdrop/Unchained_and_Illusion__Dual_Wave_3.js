function Unchained_and_Illusion__Dual_Wave_3() {
  with (Math) {
    fRating=3;
    gamma=1;
    decay=0.95;
    echo_zoom=1;
    echo_alpha=0.5;
    echo_orient=0;
    wave_mode=7;
    wave_additive=1;
    wave_usedots=0;
    bModWaveAlphaByVolume=0;
    wave_brighten=1;
    wrap=0;
    darken_center=0;
    bMotionVectorsOn=0;
    bRedBlueStereo=0;
    mv_x=1;
    mv_y=3;
    brighten=0;
    darken=0;
    solarize=0;
    invert=0;
    wave_a=4;
    fWaveScale=1.4023;
    fWaveSmoothing=0;
    wave_mystery=0;
    fModWaveAlphaStart=1;
    fModWaveAlphaEnd=1;
    warp_speed=1;
    warp_scale=1;
    zoomexp=1;
    fShader=0;
    zoom=1;
    rot=0.04;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=1;
    sx=1;
    sy=1;
    wave_r=0.65;
    wave_g=0.65;
    wave_b=0.64;
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
    wave_r = wave_r + 0.3*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );
    wave_y = wave_y + 0.1*sin(time);
    wave_x = wave_x + 0.1*sin(time);
    // per_pixel_1=crazy_bass_effect=sin (time + abs(ang * bass * 2));
    // per_pixel_2=dx= 0.03 * crazy_bass_effect;
    // per_pixel_3=rot=0.02 * bass * sin (time * .8);
    // per_pixel_4=warp=if_milk(below(crazy_bass_effect,0),0,warp);
  }
}
register_preset( Unchained_and_Illusion__Dual_Wave_3);