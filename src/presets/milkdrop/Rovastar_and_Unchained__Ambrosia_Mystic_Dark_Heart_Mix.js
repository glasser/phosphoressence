function Rovastar_and_Unchained__Ambrosia_Mystic_Dark_Heart_Mix() {
  with (Math) {
    fRating=2;
    gamma=2;
    decay=0.942;
    echo_zoom=1.0065;
    echo_alpha=0.5;
    echo_orient=1;
    wave_mode=5;
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
    wave_a=0.7999;
    fWaveScale=1.54922;
    fWaveSmoothing=0.75;
    wave_mystery=0;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=1;
    warp_scale=1;
    zoomexp=1;
    fShader=0;
    zoom=1.040604;
    rot=0;
    cx=0.47;
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
    mv_dx=0;
    mv_dy=0;
    mv_l=0.9;
    mv_r=1;
    mv_g=1;
    mv_b=1;
    mv_a=0;
    wave_r = 0.5 + 0.5*sin(time*1.143);
    wave_g = 0.5+0.5*sin(time*0.896);
    q8 = (bass+bass_att)*0.5;
    // per_pixel_1=state_scalar=if_milk(equal(q8,3),-.1,if_milk(equal(q8,2),2,1));
    // per_pixel_2=location = sin(ang*10+time+abs(pow(1+rad,q8)+x*10%5));
    // per_pixel_3=zoom = zoom+.08*state_scalar*location;
    // per_pixel_4=rot = rot+.02*state_scalar*location;
    // per_pixel_5=zoomexp = 1/(pow(q8,q8*10));
    // per_pixel_6=zoomexp = if_milk(above(rad,0.8),1,zoomexp);
  }
}
register_preset( Rovastar_and_Unchained__Ambrosia_Mystic_Dark_Heart_Mix);
