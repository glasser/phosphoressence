function Krash_and_Rovastar__The_Devil_Is_In_The_Details() {
  with (Math) {
    fRating=3;
    gamma=2.993998;
    decay=1;
    echo_zoom=1;
    echo_alpha=0.5;
    echo_orient=1;
    wave_mode=0;
    wave_additive=0;
    wave_usedots=0;
    bWaveThick=0;
    bModWaveAlphaByVolume=0;
    wave_brighten=1;
    wrap=0;
    darken_center=0;
    bRedBlueStereo=0;
    brighten=0;
    darken=0;
    solarize=0;
    invert=0;
    wave_a=1;
    fWaveScale=0.334693;
    fWaveSmoothing=0.75;
    wave_mystery=-0.2199;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=1;
    warp_scale=1;
    zoomexp=1;
    fShader=1;
    zoom=0.9999;
    rot=0.1;
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
    ob_a=1;
    ib_size=0.005;
    ib_r=0.4;
    ib_g=0;
    ib_b=0;
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
    warp=0;
    wave_r = wave_r + 0.45*(0.5*sin(time*0.701)+ 0.3*cos(time*0.438));
    wave_b = wave_b - 0.4*(0.5*sin(time*4.782)+0.5*cos(time*0.722));
    wave_g = wave_g + 0.4*sin(time*1.931);
    vol = 0.167*(bass+mid);
    xamptarg = if_milk(equal(frame%15,0),min(0.5*vol*bass_att,0.5),xamptarg);
    xamp = xamp + 0.5*(xamptarg-xamp);
    xdir = if_milk(above(abs(xpos),xamp),-sign(xpos),if_milk(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));
    xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);
    xpos = xpos + 0.001*xspeed;
    wave_x = 1.25*xpos + 0.5;
    yamptarg = if_milk(equal(frame%15,0),min(0.3*vol*treb_att,0.5),yamptarg);
    yamp = yamp + 0.5*(yamptarg-yamp);
    ydir = if_milk(above(abs(ypos),yamp),-sign(ypos),if_milk(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));
    yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);
    ypos = ypos + 0.001*yspeed;
    wave_y = 1.25*ypos + 0.5;
    q2=1.1*xpos +0.25*ypos + 0.5;
    q1=1.1*ypos +0.25*xpos + 0.5;
    ib_r = 0.3+xpos;
    ib_b = 0.06*bass;
    ib_g = 0.25+ypos;
    q3 = 10+8*(0.6*sin(0.423*time) + 0.4*sin(0.253*time));
    q4 = 1/q3;
    q5 = 0.5*sign(xpos);
    q6 = 0.5*sign(ypos);
    monitor = rot;
    // per_pixel_1=cx = ((0&(x*q3-q5))+q5)*q4;
    // per_pixel_2=cy = ((0&(y*q3-q6))+q6)*q4;
    // per_pixel_3=newx = q1-x;
    // per_pixel_4=newy = q2-y;
    // per_pixel_5=newrad = sqrt((newx)*(newx)+0.5625*(newy)*(newy))*2;
    // per_pixel_6=newzoom = pow(1.05 + 0.03*newrad, pow(0.01+sin(newrad*newrad), newrad*2-1));
    // per_pixel_7=dx = (newx)*newzoom - newx;
    // per_pixel_8=dy = (newy)*newzoom - newy;
    // per_pixel_9=dx =dx*0.1;
    // per_pixel_10=dy=dy*0.1;
    // per_pixel_11=rot = 2*newrad*(0.5*(0.5-rad)+0.1);
  }
}
register_preset( Krash_and_Rovastar__The_Devil_Is_In_The_Details);