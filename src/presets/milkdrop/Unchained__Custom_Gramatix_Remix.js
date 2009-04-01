function Unchained__Custom_Gramatix_Remix() {
  with (Math) {
    fRating=3;
    gamma=2;
    decay=0.98;
    echo_zoom=1.006435;
    echo_alpha=0.5;
    echo_orient=3;
    wave_mode=3;
    wave_additive=1;
    wave_usedots=0;
    bModWaveAlphaByVolume=0;
    wave_brighten=0;
    wrap=0;
    darken_center=0;
    bMotionVectorsOn=0;
    bRedBlueStereo=0;
    mv_x=12;
    mv_y=9;
    brighten=0;
    darken=1;
    solarize=0;
    invert=0;
    wave_a=1.028401;
    fWaveScale=0.282087;
    fWaveSmoothing=0;
    wave_mystery=0.2;
    fModWaveAlphaStart=0.95;
    fModWaveAlphaEnd=0.75;
    warp_speed=1;
    warp_scale=1;
    zoomexp=1.001827;
    fShader=0.1;
    zoom=0.98001;
    rot=0;
    cx=0.4399;
    cy=0.5;
    dx=0;
    dy=0;
    warp=0.01;
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
    ob_a=0;
    ib_size=0;
    ib_r=0.5;
    ib_g=0.5;
    ib_b=0.5;
    ib_a=0;
    warp=0;
    old_bass_flop=bass_flop;
    old_treb_flop=treb_flop;
    old_mid_flop=mid_flop;
    chaos=.9+.1*sin(pulse);
    entropy=if_milk(bnot(entropy),2,if_milk(above(pulse,pulse_cap-entropy*10),1+random_integer(3),entropy));
    bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*chaos+1.3);
    bass_flop=abs(bass_flop-equal(bass_thresh,2));
    treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*chaos+1.3);
    treb_flop=abs(treb_flop-equal(treb_thresh,2));
    mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*chaos+1.3);
    mid_flop=abs(mid_flop-equal(mid_thresh,2));
    bass_changed=bnot(equal(old_bass_flop,bass_flop));
    mid_changed=bnot(equal(old_mid_flop,mid_flop));
    treb_changed=bnot(equal(old_treb_flop,treb_flop));
    pulse_cap=entropy*100;
    pulse=if_milk(above(abs(pulse),pulse_cap),0-pulse_cap,pulse+.1*entropy*bor(bor(bass_changed*bnot(treb_changed),treb_changed*bnot(bass_changed))*bnot(mid_changed),mid_changed)+(mid+bass+treb)*entropy*.03);
    q3=sin(pulse);
    effect_1=1+1*bass_flop*above(q3,0);
    effect_2=1+2*treb_flop*below(q3,0);
    effect_3=1+4*mid_flop*above(q3,0);
    effect_4=1+6*mid_flop*below(q3,0);
    effect_5=1+10*treb_flop*above(q3,0);
    effect_6=1+12*bass_flop*below(q3,0);
    q1=effect_1*effect_2*effect_3*effect_4*effect_5*effect_6;
    q2=time*q1*entropy*chaos*.002;
    q4=sin(q2*.02);
    q5=entropy;
    wave_r=if_milk(treb_flop,abs(.5*q4),if_milk(bass_flop,.5+.5*q4,1));
    wave_g=if_milk(treb_changed,0,if_milk(mid_changed,0,.49));
    wave_b=if_milk(treb_flop,.8+.2*q4,bass_changed*mid_changed);
    cx=.5+.2*q3;
    cy=.5+.2*q4;
    wave_x=cy;
    wave_y=cx;
    ob_r=if_milk(bass_flop,treb_flop,wave_g);
    ob_b=if_milk(treb_flop,wave_r,wave_b);
    ob_g=if_milk(mid_flop,wave_g,wave_b);
    ob_a=.07+.05*q2;
    ob_size=.01+.009*q4;
    ib_r=ib_r+.5*sin(time*.04*entropy);
    ib_b=ib_b+.5*sin(time*.03*entropy);
    ib_g=ib_g+.5*sin(time*.02*entropy);
    ib_a=.07+.05*q3*q4;
    ib_size=.01+.009*q3;
    zoom=zoom+.19*q4;
    // per_pixel_1=g1=sin(q2+time*q5*.01)/2;
    // per_pixel_2=g2=sin(q2+time*q5*.02)/2;
    // per_pixel_3=rot=if_milk(above(sin(q2+time*q5*.025),0),g1*rad,g2*(1-rad));
  }
}
register_preset( Unchained__Custom_Gramatix_Remix);