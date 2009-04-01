function Rovastar_and_Unchained__Life_After_Pie_Remix() {
  with (Math) {
    fRating=3;
    gamma=1;
    decay=0.977;
    echo_zoom=1.006596;
    echo_alpha=0.5;
    echo_orient=3;
    wave_mode=0;
    wave_additive=1;
    wave_usedots=0;
    bModWaveAlphaByVolume=1;
    wave_brighten=0;
    wrap=0;
    darken_center=0;
    bMotionVectorsOn=0;
    bRedBlueStereo=0;
    mv_x=12;
    mv_y=9;
    brighten=0;
    darken=0;
    solarize=0;
    invert=0;
    wave_a=4.099998;
    fWaveScale=3.192474;
    fWaveSmoothing=0;
    wave_mystery=0;
    fModWaveAlphaStart=0.71;
    fModWaveAlphaEnd=1.3;
    warp_speed=1;
    warp_scale=1.331;
    zoomexp=1;
    fShader=0;
    zoom=0.999514;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=0.009091;
    sx=1;
    sy=1;
    wave_r=0.65;
    wave_g=0.65;
    wave_b=0.65;
    wave_x=0.5;
    wave_y=0.5;
    ob_size=0.5;
    ob_r=0.01;
    ob_g=0;
    ob_b=0;
    ob_a=0;
    ib_size=0.26;
    ib_r=0.25;
    ib_g=0.25;
    ib_b=0.25;
    ib_a=0;
    bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.35)*0.96+1.3);
    bass_factor = equal(bass_thresh,2)*sin(time*bass_thresh*.4) + (1-equal(bass_thresh,2))*bass_factor;
    mid_thresh = above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.35)*0.96+1.3);
    mid_factor = equal(mid_thresh,2)*sin(time*mid_thresh*.4) + (1-equal(mid_thresh,2))*mid_factor;
    treb_thresh = above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.35)*0.96+1.3);
    treb_factor = equal(treb_thresh,2)*sin(time*treb_thresh*.4) + (1-equal(treb_thresh,2))*treb_factor;
    wave_r = 0.5+0.5*bass_factor;
    wave_b = 0.5+0.5*mid_factor;
    wave_g = 0.5+0.5*treb_factor;
    wave_mystery = sin(time*.7)/10;
    q1=bass_factor;
    q2=mid_factor;
    q3=treb_factor;
    // per_pixel_1=pi=22/7+.2-.2*q1;
    // per_pixel_2=rpi=pi*rad;
    // per_pixel_3=api=(1-rad)*pi;
    // per_pixel_4=zoom = if_milk(above(rad,abs(q2)),1.07+sin(rpi)*.04*q2, 0.97+(sin(rpi)/10-sin(api)/10)*.04*q2)+cos(rpi*3*q3)*.07;
    // per_pixel_5=rot = if_milk(above(rad,abs(q2)),cos((rad*2*rpi)+sin(pi*pow(rad,5)))*.1*q1,(cos(api)/25+sin(rpi))*.1*q1)+cos(api*3*q3)*.1;
  }
}
register_preset( Rovastar_and_Unchained__Life_After_Pie_Remix);