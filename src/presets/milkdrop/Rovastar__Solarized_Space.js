function Rovastar__Solarized_Space() {
  with (Math) {
    fRating=2;
    gamma=1.994;
    decay=0.96;
    echo_zoom=2;
    echo_alpha=0;
    echo_orient=0;
    wave_mode=0;
    wave_additive=0;
    wave_usedots=0;
    bWaveThick=0;
    bModWaveAlphaByVolume=0;
    wave_brighten=1;
    wrap=1;
    darken_center=1;
    bRedBlueStereo=0;
    brighten=1;
    darken=0;
    solarize=1;
    invert=1;
    wave_a=1.882469;
    fWaveScale=0;
    fWaveSmoothing=0.63;
    wave_mystery=-0.5;
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
    sx=0.980296;
    sy=1;
    wave_r=1;
    wave_g=0;
    wave_b=0;
    wave_x=0.5;
    wave_y=0.5;
    ob_size=0;
    ob_r=0;
    ob_g=0;
    ob_b=0;
    ob_a=1;
    ib_size=0.0015;
    ib_r=1;
    ib_g=0.25;
    ib_b=0.25;
    ib_a=0;
    mv_x=64;
    mv_y=48;
    mv_dx=0;
    mv_dy=0;
    mv_l=0;
    mv_r=1;
    mv_g=1;
    mv_b=1;
    mv_a=1;
    warp = 0;
    wave_mystery = -0.5;
    vol = 0.167*(bass+mid);
    xamptarg = if_milk(equal(frame%15,0),min(0.5*vol*bass_att,0.5),xamptarg);
    xamp = xamp + 0.5*(xamptarg-xamp);
    xdir = if_milk(above(abs(xpos),xamp),-sign(xpos),if_milk(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));
    xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);
    xpos = xpos + 0.001*xspeed;
    myx = 1.25*xpos + 0.5;
    yamptarg = if_milk(equal(frame%15,0),min(0.3*vol*treb_att,0.5),yamptarg);
    yamp = yamp + 0.5*(yamptarg-yamp);
    ydir = if_milk(above(abs(ypos),yamp),-sign(ypos),if_milk(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));
    yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);
    ypos = ypos + 0.001*yspeed;
    myy = 1.25*ypos + 0.5;
    
    cx = 0.5 + 0.05*sin(0.497*time);
    cy = 0.5 +0.05*sin(0.413*time);
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
    beatcounter = if_milk(above(beat,0),beatcounter +1, beatcounter);
    beatcounter = if_milk(above(beatcounter,8), 0, beatcounter);
    beateven = beatcounter%4;
    mode = if_milk(beat,(mode+random_integer(3)+1)%4,mode);
    beateven = if_milk(equal(beateven,3),-1,beateven);
    beateven = if_milk(equal(beateven,0),0.1*(myx+myy),beateven);
    beateven = if_milk(equal(beateven,2),0.1*(-myx-myy),beateven);
    dx = 0.1*beateven*myx;
    dy = 0.1*beateven*myy;
    monitor = beateven;
    wave_a = Bass_thresh;
    zoom = 1.5 +0.25*myy;
    rot = myx*beateven;
    wave_x = 0.5 + 0.05*myx;
    wave_y=0.5 + 0.05*myy;
    
  }
}
register_preset( Rovastar__Solarized_Space);
