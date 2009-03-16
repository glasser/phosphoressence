function Unchained__All_You_Can_Eat() {
  with (Math) {
    fRating=3;
    gamma=2;
    decay=0.981;
    echo_zoom=1.00644;
    echo_alpha=0.5;
    echo_orient=3;
    wave_mode=5;
    wave_additive=1;
    wave_usedots=0;
    bModWaveAlphaByVolume=0;
    wave_brighten=0;
    wrap=1;
    darken_center=0;
    bMotionVectorsOn=0;
    bRedBlueStereo=0;
    mv_x=12;
    mv_y=9;
    brighten=0;
    darken=0;
    solarize=0;
    invert=0;
    wave_a=1.868299;
    fWaveScale=1.136001;
    fWaveSmoothing=0.54;
    wave_mystery=0.2;
    fModWaveAlphaStart=0.95;
    fModWaveAlphaEnd=0.75;
    warp_speed=1;
    warp_scale=1;
    zoomexp=1.008151;
    fShader=0.2;
    zoom=0.9998;
    rot=0;
    cx=0.47;
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
    ob_r=0.5;
    ob_g=0.5;
    ob_b=0.5;
    ob_a=0;
    ib_size=0;
    ib_r=0.5;
    ib_g=0.5;
    ib_b=0.5;
    ib_a=0;
    warp=0;
    chaos=.9+.1*sin(pulse);
    entropy=if_milk(bnot(entropy),2,if_milk(equal(pulse,-20),1+random_integer(5),entropy));
    bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*chaos+1.3);
    bass_changed=abs(bass_changed-equal(bass_thresh,2));
    treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*chaos+1.3);
    treb_changed=abs(treb_changed-equal(treb_thresh,2));
    mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*chaos+1.3);
    mid_changed=abs(mid_changed-equal(mid_thresh,2));
    pulse=if_milk(above(abs(pulse),20),-20,pulse+.1*chaos*bor(bor(bass_changed,treb_changed),mid_changed)+(mid+bass+treb)*.025);
    q3=sin(pulse);
    q2=(pulse/entropy)*.5*chaos;
    q4=sin(q2);
    q5=entropy;
    q1=(1+1*above(q4,0))*(1+2*above(q3,0))*(1+4*mid_changed*above(q3,0))*(1+6*above(pulse,0));
    wave_r=if_milk(treb_changed,.5+.5*q3,if_milk(bass_changed,.5+.5*q4,1));
    wave_g=.5+.2*bnot(q1%2)-.2*bnot(q1%3)+.2*bnot(q1%5)-.2*bnot(q1%7);
    wave_b=if_milk(bnot(q1%6),.8+.2*q4,bass_changed*mid_changed);
    ob_r=ob_r+.2*q4+.3*bnot(q1%7)*q3;
    ob_b=ob_b-.1*bnot(q1%105)-.4*sin(q2*.8);
    ob_g=ob_g+.5*sin(pulse*.4*entropy);
    ob_a=.07+.05*q3;
    ob_size=.01*entropy*bnot(q1%6);
    ib_r=ib_r+.2*q1-.3*bnot(q1%3)*q4;
    ib_b=ib_b-.1*bnot(q1%42)-.4*sin(q2*.7);
    ib_g=ib_g+.5*sin(pulse*.5*entropy);
    ib_a=.07+.05*q3*q4;
    ib_size=.005+.005*q3;
    zoom_fade=if_milk(above(q3,0),if_milk(above(q4,0),zoom_fade-.0013,zoom_fade+.002),1+.04*q4);
    zoom=zoom_fade;
    // per_pixel_1=g1=sin(q2*.04*q5);
    // per_pixel_2=g2=sin(q2*.05*q5);
    // per_pixel_3=g3=sin(q2*.06*q5);
    // per_pixel_4=x_shif_milkt=pow(x,2)+x*g1*2+sqr(g1);
    // per_pixel_5=y_shif_milkt=pow(y,2)+y*g2*2+sqr(g2);
    // per_pixel_6=r_shif_milkt=pow(rad,2)+rad*g3*2+sqr(g3);
    // per_pixel_7=zoom=zoom -sin(x_shif_milkt*bnot(q1%10)+y_shif_milkt*bnot(q1%14)+r_shif_milkt*bnot(q1%21))*q3*(.1+.1*bnot(q1%30)+.1*bnot(q1%7));
    // per_pixel_8=dx=dx+bnot(q1%35)*(rad-.5*g3)*g2-cos(y*1.68)*.1*bnot(q1%21);
    // per_pixel_9=dy=dy-cos(x*1.68)*bnot(q1%10);
    // per_pixel_10=rot=if_milk(above(sin(q2*4.3),0),.3*above(abs(zoom-1),.05),.3*g3);
  }
}
register_preset( Unchained__All_You_Can_Eat);
