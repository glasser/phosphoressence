function Zylot_and_Rovastar__Iouo_Stone_Morphic_Fusion() {
  with (Math) {
    fRating=3;
    gamma=2;
    decay=0.98;
    echo_zoom=2;
    echo_alpha=0;
    echo_orient=0;
    wave_mode=0;
    wave_additive=0;
    wave_usedots=0;
    bModWaveAlphaByVolume=0;
    wave_brighten=1;
    wrap=0;
    darken_center=0;
    bRedBlueStereo=0;
    brighten=0;
    darken=0;
    solarize=0;
    invert=0;
    wave_a=0.8;
    fWaveScale=0.132666;
    fWaveSmoothing=0.75;
    wave_mystery=-0.38;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=1;
    warp_scale=1;
    zoomexp=1;
    fShader=0;
    zoom=1;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=1;
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
    mv_x=12;
    mv_y=9;
    mv_l=5;
    mv_r=1;
    mv_g=1;
    mv_b=1;
    mv_a=1;
    warp = 0;
    wave_r = wave_r + .2*sin(time*.333)+bass_att*.2;
    wave_g = wave_g + .2*sin(time*.555)+treb_att*.2;
    wave_b = wave_b + .2*sin(time*.444)+mid_att*.2;
    bass_effect = max(max(bass,bass_att)-1.3,0);
    rot = min(if_milk(above(bass_effect,0),bass_effect + 0.2,0),1.8);
    mv_x= 1;
    mv_y =1;
    dx = -0.0005;
    dy = -0.0005;
    mv_l = -25 + rot *500;
    mv_r = 1;
    mv_b = 1-wave_g;
    mv_g = 1-wave_r;
    monitor = rot;
    // per_pixel_1=dx = dx + (.1*treb_att)*abs(sin(time))*atan(x-.5);
    // per_pixel_2=dy = dy + (.1*bass_att)*abs(cos(time))*atan(y-.5);
    // per_pixel_3=zoom = zoom + .05*pow(zoom,2) -0.04;
    // per_pixel_4=rot = (dx*dy)*1
  }
}
register_preset( Zylot_and_Rovastar__Iouo_Stone_Morphic_Fusion);