function Idiot__Typomatic_Remix_2() {
  with (Math) {
    fRating=2;
    gamma=1;
    decay=0.95;
    echo_zoom=0.999609;
    echo_alpha=0.5;
    echo_orient=3;
    wave_mode=3;
    wave_additive=0;
    wave_usedots=0;
    bWaveThick=0;
    bModWaveAlphaByVolume=0;
    wave_brighten=1;
    wrap=1;
    darken_center=0;
    bRedBlueStereo=0;
    brighten=0;
    darken=0;
    solarize=0;
    invert=0;
    wave_a=4.099998;
    fWaveScale=0.438652;
    fWaveSmoothing=0.63;
    wave_mystery=0;
    fModWaveAlphaStart=0.71;
    fModWaveAlphaEnd=1.3;
    warp_speed=1;
    warp_scale=1.331;
    zoomexp=1.000157;
    fShader=0;
    zoom=1.010404;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=0.01;
    sx=0.999944;
    sy=0.999904;
    wave_r=1;
    wave_g=1;
    wave_b=1;
    wave_x=0.5;
    wave_y=0.5;
    ob_size=0.0499;
    ob_r=0.11;
    ob_g=1;
    ob_b=0;
    ob_a=0;
    ib_size=0.055;
    ib_r=0.25;
    ib_g=0.25;
    ib_b=0.25;
    ib_a=1;
    mv_x=1.28;
    mv_y=48;
    mv_dx=0;
    mv_dy=0;
    mv_l=0.5;
    mv_r=1;
    mv_g=1;
    mv_b=0;
    mv_a=0;
    vol_att=bass_att+treb_Att+mid_att;
    bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.4)*0.85+1.4);
    treb_thresh = above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.5)*0.75+1.5);
    mid_thresh=above(mid_att,mid_thresh)*2+
    (1-above(mid_att,mid_thresh))*((mid_thresh-1.5)*0.75+1.5);
    vol_thresh=bass_thresh+treb_thresh+mid_thresh;
    treb_effect=max(max(treb,treb_Att),react);
    bass_effect=max(max(Bass,bass_Att),react);
    mid_effect=max(max(mid,mid_att),react);
    vol_effect=bass_effect+treb_effect+mid_effect;
    normal=5;
    more=bass_effect;
    less=7;
    react=less;
    new_bass=if_milk(above(Bass,bass_effect),bass&bass_att,bass_effect+bass_thresh);
    new_treb=if_milk(above(treb,treb_effect),treb&treb_att,treb_Effect+treb_thresh);
    new_mid=if_milk(above(mid,mid_effect),mid&mid_Att,mid_effect+mid_thresh);
    new_vol=new_bass+new_treb+new_mid+.04;
    change=bnot(1);
    q1=new_bass;
    q2=new_treb;
    q3=new_mid;
    q4=new_vol;
    q5=if_milk(above(q2,q3),above(q1,q3),-above(q1,q3));
    q6=if_milk(above(q1,q3),above(q2,q4),-above(q2,q3));
    q7=if_milk(above(q5,q6),q5,-q6);;
    q8=if_milk(above(q6,q7),q6,-q7);;
    ib_r=q3-.2*sin(q2);
    ib_b=q3+.2*sin(q1);
    ib_g=q3-1*sin(q2);
    wave_r=.2*sin(Q3);
    wave_b=.6*sin(Q1);
    wave_g=.7*sin(Q2);
    // per_pixel_1=zoom=if_milk(above(q1-q3,q6-q7),if_milk(above(q2,q1),if_milk(above(pow(x,q1-q5),pow(y,q1-q6)),zoom*sin(rad+1*sin(q1)*sin(q4)),zoom
    // per_pixel_2=*sin(Rad-.2)+1)-rad*sin(q6+rad-x-q6)+x*sin(above(q7,q6)*sin(Q7))+.2*sin(x*sin(q8)),1.2
    // per_pixel_3=*sin(pow(x,y)*sin(Q4))),1+rad-.2*sin(q4-x))-(rad&rad*sin(q4));
    // per_pixel_4=
    // per_pixel_5=rot=if_milk(above(q3,q5),if_milk(above(q5,.5),if_milk(above(q7,q6),if_milk(Above(q1,q2),rot*sin(Rad-.2*ang+x),-rot*Sin(rad+x-tan(ang)-cos(x*q3))+.2
    // per_pixel_6=-x)*band(rad-zoom,rad+zoom),-.2*Sin(rad-ang-x)),0*sin(rad-.2)*zoom)*sin(q1-q2),rot&rad-1*x);
    // per_pixel_7=
    // per_pixel_8=
  }
}
register_preset( Idiot__Typomatic_Remix_2);
