function Rozzor__Learning_Curve_Invert_tweak() {
  with (Math) {
    fRating=3;
    gamma=1;
    decay=0.96;
    echo_zoom=0.01;
    echo_alpha=0;
    echo_orient=0;
    wave_mode=3;
    wave_additive=0;
    wave_usedots=1;
    bWaveThick=0;
    bModWaveAlphaByVolume=0;
    wave_brighten=0;
    wrap=0;
    darken_center=0;
    bRedBlueStereo=0;
    brighten=0;
    darken=0;
    solarize=0;
    invert=1;
    wave_a=0.793875;
    fWaveScale=1.074093;
    fWaveSmoothing=0;
    wave_mystery=0;
    fModWaveAlphaStart=1.000001;
    fModWaveAlphaEnd=0;
    warp_speed=1;
    warp_scale=0.01;
    zoomexp=1;
    fShader=0;
    zoom=1.001837;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=0.01;
    sx=1;
    sy=1;
    wave_r=0.65;
    wave_g=0.65;
    wave_b=0.65;
    wave_x=0.5;
    wave_y=0.5;
    ob_size=0.015;
    ob_r=0.3;
    ob_g=0;
    ob_b=0;
    ob_a=0.2;
    ib_size=0.025;
    ib_r=0;
    ib_g=0;
    ib_b=1;
    ib_a=1;
    mv_x=64;
    mv_y=48;
    mv_dx=0;
    mv_dy=0;
    mv_l=0;
    mv_r=0;
    mv_g=0.7;
    mv_b=1;
    mv_a=0;
    warp = 0;
    vol_now =  .4 * bass + 0.1 * (bass_att + treb + mid);
    vol_mean =  if_milk(equal(frame%50,0),vol_mean - 0.5 * (vol_mean-vol_now),0.1 * (vol_mean * 9 + vol_now));
    beat = if_milk(above(vol_now,1.15 * vol_mean),1,0);
    sinbeat =sin(beat * (vol_now-vol_mean));
    wave_b = cos(time)  + abs(cos(time));
    wave_g = abs(sin(time)) ;
    wave_r = (-1 * cos(time))  + abs(-1 * cos(time)) + 0.2 * (cos(sin(time))+(abs(cos(sin(time)))+cos(sin(time))));
    ib_r = if_milk(above(wave_r,1),1,if_milk(above(wave_r,0), abs(wave_r),0));
    ib_g = if_milk(above(wave_g,1),1,if_milk(above(wave_g,0), abs(wave_g),0));
    ib_b = if_milk(above(wave_b,1),1,if_milk(above(wave_b,0), abs(wave_b),0));
    ob_r = 1 - if_milk(above(wave_r,1),1,if_milk(above(wave_r,0), abs(wave_r),0));
    ob_g = 1 - if_milk(above(wave_g,1),1,if_milk(above(wave_g,0), abs(wave_g),0));
    ob_b = 1 - if_milk(above(wave_b,1),1,if_milk(above(wave_b,0), abs(wave_b),0));
    q1 = sinbeat+.35 ;
    wave_mystery = vol_now;
    monitor = sinbeat;
    // per_pixel_1=a = pow(1.02, pow(1, rad * 2 - 1));
    // per_pixel_2=dx = (x - .5) * a + .5 - x;
    // per_pixel_3=dy = (y - .5) * a + .5 - y;
    // per_pixel_4=zoom = q1 +  x;
  }
}
register_preset( Rozzor__Learning_Curve_Invert_tweak);