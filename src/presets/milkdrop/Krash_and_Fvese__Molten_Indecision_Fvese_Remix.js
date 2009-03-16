function Krash_and_Fvese__Molten_Indecision_Fvese_Remix() {
  with (Math) {
    fRating=3;
    gamma=2;
    decay=1;
    echo_zoom=1;
    echo_alpha=0;
    echo_orient=0;
    wave_mode=5;
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
    fWaveScale=6;
    fWaveSmoothing=0;
    wave_mystery=-;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=1;
    warp_scale=1;
    zoomexp=1;
    fShader=1;
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
    wave_x=0.95;
    wave_y=0.5;
    ob_size=0.01;
    ob_r=0;
    ob_g=0;
    ob_b=0;
    ob_a=0.8;
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
    warp=0;
    dx=-0.0005;
    dy=-0.0005;
    drip1grav = if_milk(above(drip1y,1.2),0.001*(1+random_integer(10)),drip1grav) + equal(drip1grav,0)*0.05;
    drip1x = if_milk(above(drip1y,1.2),0.01*random_integer(100),drip1x);
    drip1y = if_milk(above(drip1y,1.2),0,drip1y);
    drip2grav = if_milk(above(drip2y,1.2),0.001*(1+random_integer(10)),drip2grav) + equal(drip2grav,0)*0.06;
    drip2x = if_milk(above(drip2y,1.2),0.01*random_integer(100),drip2x);
    drip2y = if_milk(above(drip2y,1.2),0,drip2y);
    drip3grav = if_milk(above(drip3y,1.2),0.001*(1+random_integer(10)),drip3grav) + equal(drip3grav,0)*0.07;
    drip3x = if_milk(above(drip3y,1.2),0.01*random_integer(100),drip3x);
    drip3y = if_milk(above(drip3y,1.2),0,drip3y);
    drip4grav = if_milk(above(drip4y,1.2),0.001*(1+random_integer(10)),drip4grav) + equal(drip4grav,0)*0.08;
    drip4x = if_milk(above(drip4y,1.2),0.01*random_integer(100),drip4x);
    drip4y = if_milk(above(drip4y,1.2),0,drip4y);
    drip1y = 0.001 + drip1y + drip1grav;
    drip2y = 0.001 + drip2y + drip2grav;
    drip3y = 0.001 + drip3y + drip3grav;
    drip4y = 0.001 + drip4y + drip4grav;
    q1 = if_milk(equal(frame%4,0),drip1x,if_milk(equal(frame%4,1),drip2x,if_milk(equal(frame%4,2),drip3x,drip4x)));
    q2 = if_milk(equal(frame%4,0),drip1y,if_milk(equal(frame%4,1),drip2y,if_milk(equal(frame%4,2),drip3y,drip4y)));
    wave_r = wave_r + 0.350*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );
    wave_g = wave_g + 0.350*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );
    wave_b = wave_b + 0.350*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );
    vol = (bass+mid+att)/6;
    xamptarg = if_milk(equal(frame%15,0),min(0.5*vol*bass_att,0.5),xamptarg);
    xamp = xamp + 0.5*(xamptarg-xamp);
    xdir = if_milk(above(abs(xpos),xamp),-sign(xpos),if_milk(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));
    xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);
    xpos = xpos + 0.001*xspeed;
    wave_x = xpos + 0.5;
    yamptarg = if_milk(equal(frame%15,0),min(0.3*vol*treb_att,0.5),yamptarg);
    yamp = yamp + 0.5*(yamptarg-yamp);
    ydir = if_milk(above(abs(ypos),yamp),-sign(ypos),if_milk(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));
    yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);
    ypos = ypos + 0.001*yspeed;
    wave_y = ypos + 0.5;
    rot = rot + 0.01*( 0.60*sin(0.381*time) + 0.40*sin(0.479*time) );
    cx = cx + 0.410*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );
    cy = cy + 0.410*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );
    dy = dy + 0.002*( 0.60*sin(0.284*time) + 0.40*sin(0.247*time) );
    wave_mystery = wave_mystery + 0.15*( 0.60*sin(0.629*time) + 0.40*sin(1.826*time) );
    warp = warp*vol+treb_att;
    dy = dy + above(bass_att,1.2)*bass_att*0.003;
    ob_a = ob_a - 2*vol;
    // per_pixel_1=dy = dy + if_milk(below(abs(q1-x),0.01),if_milk(below(y,q2),max(0.02-abs(q1-x),0),0.001),0.001);
    // per_pixel_2=zoom=zoom+0.07*sin(rad*9*time*2.5);
    // per_pixel_3=rot=if_milk(below(rad,bass_factor),sin(time*.3+ang*8+rad*7.5)*.063,rot);
  }
}
register_preset( Krash_and_Fvese__Molten_Indecision_Fvese_Remix);
