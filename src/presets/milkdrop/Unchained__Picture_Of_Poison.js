function Unchained__Picture_Of_Poison() {
  with (Math) {
    fRating=2;
    gamma=1;
    decay=0.997;
    echo_zoom=1;
    echo_alpha=0.5;
    echo_orient=3;
    wave_mode=6;
    wave_additive=0;
    wave_usedots=0;
    bWaveThick=1;
    bModWaveAlphaByVolume=0;
    wave_brighten=0;
    wrap=0;
    darken_center=0;
    bRedBlueStereo=0;
    brighten=1;
    darken=1;
    solarize=0;
    invert=0;
    wave_a=0.8179;
    fWaveScale=0.397105;
    fWaveSmoothing=0;
    wave_mystery=0;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=5.9957;
    warp_scale=1.331;
    zoomexp=1;
    fShader=0;
    zoom=0.740601;
    rot=-0.76;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=0.350495;
    sx=1;
    sy=1;
    wave_r=1;
    wave_g=1;
    wave_b=1;
    wave_x=0.5;
    wave_y=0.5;
    ob_size=0;
    ob_r=0;
    ob_g=0;
    ob_b=0;
    ob_a=1;
    ib_size=0;
    ib_r=0.5;
    ib_g=0.9;
    ib_b=0.5;
    ib_a=0;
    mv_x=31.999994;
    mv_y=28.799999;
    mv_dx=0;
    mv_dy=0;
    mv_l=0.85;
    mv_r=0.4999;
    mv_g=0.4999;
    mv_b=0.4999;
    mv_a=1;
    warp=0;
    rot=0;
    old_bass_flop=bass_flop;
    old_treb_flop=treb_flop;
    old_mid_flop=mid_flop;
    chaos=.1+.1*sin(pulse);
    bass_thresh =if_milk(above(bass_att,bass_thresh),3,bass_thresh-chaos);
    bass_flop=abs(bass_flop-equal(bass_thresh,3));
    treb_thresh=if_milk(above(treb_att,treb_thresh),3,treb_thresh-chaos);
    treb_flop=abs(treb_flop-equal(treb_thresh,3));
    mid_thresh=if_milk(above(mid_att,mid_thresh),3,mid_thresh-chaos);
    mid_flop=abs(mid_flop-equal(mid_thresh,3));
    bass_changed=bnot(equal(old_bass_flop,bass_flop));
    mid_changed=bnot(equal(old_mid_flop,mid_flop));
    treb_changed=bnot(equal(old_treb_flop,treb_flop));
    bass_residual = bass_changed*sin(pulse*3) + bnot(bass_changed)*bass_residual;
    treb_residual = treb_changed*sin(pulse*3) + bnot(treb_changed)*treb_residual;
    mid_residual = mid_changed*sin(pulse*3) + bnot(mid_changed)*mid_residual;
    pulse=if_milk(above(abs(pulse),3.14),-3.14,pulse+(bass_thresh+mid_thresh+treb_thresh)*.032);
    entropy=if_milk(equal(pulse,-3.14),bass_flop+mid_flop+treb_flop+random_integer(5),entropy);
    q1=mid_residual;
    q2=bass_residual;
    q3=treb_residual;
    q4=sin(pulse);
    q5=cos(pulse*(.5+.1*entropy));
    q6=sin(pulse*(.5+pow(.25,entropy)));
    q7=above(q1,0)+above(q2,0)+above(q3,0)+above(q3,0)*treb_flop+above(q2,0)*bass_flop+above(q1,0)*mid_flop;
    q8=entropy;
    
    ob_r=.2+.1*sin(time*2.157+q6);
    ob_b=.2+.1*sin(time*1.689+q5);
    ob_g=.2+.1*sin(time*.413+q4);
    ib_r=.8+.2*cos(time*1.2+q1*.1);
    ib_b=.2+.2*cos(time*2.811+q2*.1);
    ib_g=.7+.3*cos(time*1.666+q3*.1);
    ib_size=.03+.02*q2;
    ob_size=.03+.02*sin(time*2.321+q2*.2);
    ob_a=.75+.25*q3;
    ib_a=.8+.2*sin(q2*.3+q4+q1*.5);
    mv_r=mv_r+.5*sin(q4+time*.678);
    mv_b=mv_b+.5*sin(q4+time*.789);
    mv_g=mv_g+.5*sin(q5+time*.456);
    mv_a=.2+.2*sin(time*1.178+q5*1.14);
    wave_r=if_milk(treb_changed,.5+.5*q3,if_milk(bass_changed,.5+.5*q4,1));
    wave_g=.5+.2*bnot(q8%2)-.2*bnot(q8%3)+.2*bnot(q8%4)-.2*bnot(q8%5);
    wave_b=if_milk(bnot(q8%6),.8+.2*q1,bass_changed*mid_changed);
    wave_mode=q8-bass_changed+mid_changed+treb_changed;
    wave_mystery=frame%2;
    // per_pixel_1=grid=pow(x*3,3-q1)%q8 + pow(y*3,3-q3)%q8;
    // per_pixel_2=bend = sin(x*(9.42-6.28*q2)*bnot(q8%3)
    // per_pixel_3=+(rad*9.42-6.28*sin(time*(1.3+.3*q1)))*bnot(q8%4)+y*(9.42*q4-6.28*q3)*bnot(q8%5));
    // per_pixel_4=zoom = zoom+bend*.1;
    // per_pixel_5=sx=sx-if_milk(above(q1,2),bnot(grid)*q3*.2,.1*q2*bnot(q8%5));
    // per_pixel_6=sy=sy-if_milk(above(q1,3),bnot(grid)*q2*.2,.1*q3*bnot(q8%2));
    // per_pixel_7=rot=equal(grid,3)*q3+bnot(grid%q7)*cos(zoom*grid*q1*.01);
  }
}
register_preset( Unchained__Picture_Of_Poison);
