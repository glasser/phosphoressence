function Rovastar__Jesters_Awakening() {
  with (Math) {
    fRating=3;
    gamma=1.994;
    decay=0.93;
    echo_zoom=0.999834;
    echo_alpha=0.5;
    echo_orient=1;
    wave_mode=0;
    wave_additive=0;
    wave_usedots=0;
    bWaveThick=1;
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
    fWaveScale=0.197884;
    fWaveSmoothing=0.75;
    wave_mystery=0.5001;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=1;
    warp_scale=1;
    zoomexp=1;
    fShader=0;
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
    ob_size=0;
    ob_r=0;
    ob_g=0;
    ob_b=0;
    ob_a=0.6;
    ib_size=0.005;
    ib_r=0.5;
    ib_g=0.5;
    ib_b=0.5;
    ib_a=0.38;
    mv_x=12.799999;
    mv_y=11.399998;
    mv_dx=0;
    mv_dy=0;
    mv_l=5;
    mv_r=1;
    mv_g=1;
    mv_b=1;
    mv_a=1;
    warp=0;
    vol = 0.167*(bass+mid);
    xamptarg = if_milk(equal(frame%15,0),min(0.5*vol*bass_att,0.5),xamptarg);
    xamp = xamp + 0.5*(xamptarg-xamp);
    xdir = if_milk(above(abs(xpos),xamp),-sign(xpos),if_milk(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));
    xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);
    xpos = xpos + 0.001*xspeed;
    yamptarg = if_milk(equal(frame%15,0),min(0.3*vol*treb_att,0.5),yamptarg);
    yamp = yamp + 0.5*(yamptarg-yamp);
    ydir = if_milk(above(abs(ypos),yamp),-sign(ypos),if_milk(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));
    yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);
    ypos = ypos + 0.001*yspeed;
    ib_r = ib_r + 2.3*sin(time*4.132)*xpos;
    ib_g = ib_g + 2.3*sin(time*3.547)*ypos;
    ib_b = ib_b + 0.499*sin(time*0.731);
    ob_g = beat*treb*0.5;
    ob_a = 0.5 + 0.5*beat;
    ob_size = ob_size + 0.01*beat;
    mv_dx =0.15* xpos;
    mv_dy = 0.15*ypos;
    mv_l = 0.15;
    mv_r = 1 - ib_g;
    mv_b = ib_r;
    mv_g = 1-ib_b;
    volume = 0.15*(bass_att+bass+mid+mid_att);
    beatrate = if_milk(equal(beatrate,0),1,if_milk(below(volume,0.01),1,beatrate));
    lastbeat = if_milk(equal(lastbeat,0),time,lastbeat);
    meanbass_att = 0.1*(meanbass_att*9 + bass_att);
    peakbass_att = if_milk(above(bass_att,peakbass_att),bass_att,peakbass_att);
    beat = if_milk(above(volume,0.8),if_milk(below(peakbass_att - bass_att, 0.05*peakbass_att),if_milk(above(time - lastbeat,0.1+0.5*(beatrate-0.1)),1,0),0),0);
    beatrate = max(if_milk(beat,if_milk(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);
    peakbass_att = if_milk(equal(beat,0),if_milk(above(time - lastbeat,2*beatrate),peakbass_att*0.95,peakbass_att*0.995),bass_att);
    lastbeat = if_milk(beat,time,lastbeat);
    peakbass_att = max(if_milk(beat,bass_att,peakbass_att),1.1*meanbass_att);
    Eff_test = if_milk(below(Eff_size*200,500),1,0);
    Eff_size = if_milk(beat,2.5*Eff_test+ 0.0025*random_integer(500),Old_Eff_size);
    Old_Eff_size =Eff_size;
    q5 = Eff_size;
    mv_l = if_milk(Eff_test,q5*3,mv_l);
    q6 = 3*xpos;
    q4 = 3*ypos;
    decay = decay + if_milk(Eff_test,0,0.07);
    wave_r = 1-ib_g;
    wave_g = 1-ib_b;
    wave_b = 1-ib_b;
    // per_pixel_1=q1 = 0.8*((sqrt(2)*0.5)-rad);
    // per_pixel_2=q3  = below(rad,0.1*q5+ 0.3);
    // per_pixel_3=q7 =if_milk(q3,0,12 + floor(3*(rad)));
    // per_pixel_4=q8 =if_milk(q3,0,10 + floor(1*(rad)));
    // per_pixel_5=cx =if_milk(q3,0.5,(0&(x*q7-q1))*(1/q7)+0.1*q1);
    // per_pixel_6=cy =if_milk(q3,0.5,(0&(y*q8-0.3*rad))*(1/(q8-0.3*rad))+0.1*(0.3*rad));
    // per_pixel_7=rot = if_milk(q3,2*q6*rad,0.1*(0.5*sqrt(2)-rad)- 0.1*bass_att-0.02*cx*cy);
    // per_pixel_8=zoomexp = if_milk(q3,0.2+0.2*(1-rad)+0.1*q5+ 0.5*q4,zoomexp);
    // per_pixel_9=zoom = zoomexp-0.005*(rad);
    // per_pixel_10=dx = if_milk(q3,0,-0.0015);
    // per_pixel_11=sx = 1.05 + if_milk(q3,0,0.05*q4);
    // per_pixel_12=sy = 1.05 + if_milk(q3,0,0.05*q4);
    Eff_test =1;
    Eff_size = 400;
  }
}
register_preset( Rovastar__Jesters_Awakening);