function Unchained__A_Matter_Of_Taste_Remix() {
  with (Math) {
    fRating=3;
    gamma=2;
    decay=0.993;
    echo_zoom=0.99662;
    echo_alpha=0.5;
    echo_orient=3;
    wave_mode=0;
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
    darken=1;
    solarize=0;
    invert=0;
    wave_a=1.264366;
    fWaveScale=0.264076;
    fWaveSmoothing=0.72;
    wave_mystery=-0.4;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=1;
    warp_scale=1;
    zoomexp=1;
    fShader=0.3;
    zoom=1;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=1;
    sx=1.06152;
    sy=1.06152;
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
    warp=0;
    entropy=if_milk(bnot(entropy),2,if_milk(equal(pulse,-9.42),1+random_integer(3),entropy));
    bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*chaos+1.3);
    bass_changed=abs(bass_flop-equal(bass_thresh,2));
    treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*chaos+1.3);
    treb_changed=abs(treb_flop-equal(treb_thresh,2));
    mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*chaos+1.3);
    mid_changed=abs(mid_flop-equal(mid_thresh,2));
    bass_residual = bass_changed*sin(pulse*bass_thresh*.2*entropy) + bnot(bass_changed)*bass_residual;
    treb_residual = treb_changed*sin(pulse*treb_thresh*.2*entropy) + bnot(treb_changed)*treb_residual;
    mid_residual = mid_changed*sin(pulse*mid_thresh*.2*entropy) + bnot(mid_changed)*mid_residual;
    pulse=if_milk(above(abs(pulse),9.42),-9.42,pulse+.1*bor(bor(bass_changed*bnot(treb_changed),treb_changed*bnot(bass_changed))*bnot(mid_changed),mid_changed)+(mid+bass+treb)*entropy*.01);
    q1=mid_residual;
    q2=bass_residual;
    q3=treb_residual;
    q4=sin(pulse);
    q5=cos(pulse);
    wave_mystery=-.2+.2*q4;
    wave_r=wave_r+.5*bass_residual;
    wave_r=wave_g+.5*mid_residual;
    wave_r=wave_b+.5*treb_residual;
    zoom=zoom-.0035*q1;
    decay=decay+.003*sin(pulse);
    // per_pixel_1=anti_rad=(1-rad);
    // per_pixel_2=dx=if_milk(below(sin(rad*10*q5),abs(q5)),.02*q1,.025*q2);
    // per_pixel_3=dy=dy-cos(anti_rad*10*q3-rad*10*q5+rad*10*q4)*.05;
    // per_pixel_4=zoom=zoom+(dy-1)*(dx-1)*q1*.07;
    // per_pixel_5=rot=rot+atan(anti_rad*3.14*q3)*abs(zoom-1.2)*above(q2,0);
  }
}
register_preset( Unchained__A_Matter_Of_Taste_Remix);
