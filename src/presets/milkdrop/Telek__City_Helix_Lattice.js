function Telek__City_Helix_Lattice() {
  with (Math) {
    fRating=3;
    gamma=1.916999;
    decay=1;
    echo_zoom=0.999609;
    echo_alpha=0.5;
    echo_orient=3;
    wave_mode=0;
    wave_additive=1;
    wave_usedots=0;
    bWaveThick=1;
    bModWaveAlphaByVolume=0;
    wave_brighten=1;
    wrap=1;
    darken_center=0;
    bRedBlueStereo=0;
    brighten=0;
    darken=1;
    solarize=0;
    invert=0;
    wave_a=1;
    fWaveScale=1.028413;
    fWaveSmoothing=0.45;
    wave_mystery=-0.6;
    fModWaveAlphaStart=0.71;
    fModWaveAlphaEnd=1.3;
    warp_speed=0.07316;
    warp_scale=0.543568;
    zoomexp=1;
    fShader=0;
    zoom=0.999514;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=0.01;
    sx=1;
    sy=1;
    wave_r=1;
    wave_g=1;
    wave_b=0.65;
    wave_x=0.7499;
    wave_y=0.7199;
    ob_size=0.02;
    ob_r=0;
    ob_g=0;
    ob_b=0;
    ob_a=0.007;
    ib_size=0.01;
    ib_r=0;
    ib_g=0;
    ib_b=0;
    ib_a=0.006;
    mv_x=12;
    mv_y=9;
    mv_dx=0;
    mv_dy=0;
    mv_l=0.9;
    mv_r=1;
    mv_g=1;
    mv_b=1;
    mv_a=0;
    wave_b = if_milk(below(treb, 2),1,0);
    decay = if_milk(equal(frame % 20,0),.99,1);
    dx = if_milk(equal(frame % 100,0),.001,0);
    
    rot = .05 *cos(time*.4);
    wave_x = (wave_x-.45)*sin(time*.4) + wave_x;
    wave_y = (wave_y-.45)*sin(time*.4) + wave_y;
    zoom = 1- cos(time*.4)*.05;
    //rot = -0.005;
    wave_x = .5+(wave_x-.5)*cos(time*5);
    wave_y = .5+(wave_y-.5)*sin(time*5);
    ib_a = cos(time*.4)*-.5+.5;
    ob_a = ib_a;
    ob_r = cos(time)*.5+.5;
    ob_b = .5;
    warp = 0;
    zoom = 1;
    rot = 0.01;
  }
}
register_preset( Telek__City_Helix_Lattice);
