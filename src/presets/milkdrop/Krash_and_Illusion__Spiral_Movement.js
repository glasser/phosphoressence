function Krash_and_Illusion__Spiral_Movement() {
  with (Math) {
    fRating=3;
    gamma=2;
    decay=1;
    echo_zoom=1;
    echo_alpha=0;
    echo_orient=0;
    wave_mode=1;
    wave_additive=0;
    wave_usedots=0;
    bModWaveAlphaByVolume=0;
    wave_brighten=0;
    wrap=1;
    darken_center=0;
    bRedBlueStereo=0;
    brighten=0;
    darken=0;
    solarize=0;
    invert=0;
    wave_a=1;
    fWaveScale=0.504218;
    fWaveSmoothing=0.75;
    wave_mystery=0.24;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=9.8608;
    warp_scale=16.2174;
    zoomexp=1.503744;
    fShader=0;
    zoom=1.0201;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=0.819544;
    sx=1;
    sy=1;
    wave_r=0.5;
    wave_g=0.5;
    wave_b=0.5;
    wave_x=0.5;
    wave_y=0.5;
    ob_size=0.005;
    ob_r=0;
    ob_g=0;
    ob_b=0;
    ob_a=0.2;
    ib_size=0.005;
    ib_r=0;
    ib_g=0;
    ib_b=0;
    ib_a=0.06;
    mv_x=12;
    mv_y=9;
    mv_r=1;
    mv_g=1;
    mv_b=1;
    mv_a=0;
    dx=-0.0005;
    dy=-0.0005;
    vol = (bass+mid+att)/6;
    xamptarg = if_milk(equal(frame%15,0),min(0.5*vol*bass_att,0.5),xamptarg);
    xamp = xamp + 0.5*(xamptarg-xamp);
    xdir = if_milk(above(abs(xpos),xamp),-sign(xpos),if_milk(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));
    xaccel = xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);
    xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);
    xpos = xpos + 0.001*xspeed;
    wave_x = xpos + 0.5;
    yamptarg = if_milk(equal(frame%15,0),min(0.3*vol*treb_att,0.5),yamptarg);
    yamp = yamp + 0.5*(yamptarg-yamp);
    ydir = if_milk(above(abs(ypos),yamp),-sign(ypos),if_milk(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));
    yaccel = ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);
    yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);
    ypos = ypos + 0.001*yspeed;
    wave_y = ypos + 0.5;
    wave_r = wave_r + 0.350*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );
    wave_g = wave_g + 0.350*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );
    wave_b = wave_b + 0.350*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );
    rot = rot + 0.030*( 0.60*sin(0.381*time) + 0.40*sin(0.479*time) );
    cx = cx + 0.410*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );
    cy = cy + 0.410*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );
    wave_mystery = wave_mystery + 0.15*( 0.60*sin(0.629*time) + 0.40*sin(1.826*time) );
    warp = warp*vol;
    zoom = zoom - 0.02*zoom*bass_att;
    zoom_exp = 1.5*( 0.60*sin(0.381*time) + 0.40*sin(0.479*time) );
    ob_a = 1 - 2*vol;
    monitor = zoom_exp;
  }
}
register_preset( Krash_and_Illusion__Spiral_Movement);
