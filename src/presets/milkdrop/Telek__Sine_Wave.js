function Telek__Sine_Wave() {
  with (Math) {
    fRating=4;
    gamma=1;
    decay=0.98;
    echo_zoom=1;
    echo_alpha=0;
    echo_orient=3;
    wave_mode=6;
    wave_additive=1;
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
    wave_a=4.099998;
    fWaveScale=0.430333;
    fWaveSmoothing=0.63;
    wave_mystery=1;
    fModWaveAlphaStart=0.71;
    fModWaveAlphaEnd=1.3;
    warp_speed=1;
    warp_scale=1;
    zoomexp=1;
    fShader=0;
    zoom=1;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=0.001;
    sx=1;
    sy=1;
    wave_r=0.65;
    wave_g=0.65;
    wave_b=0.65;
    wave_x=0.97;
    wave_y=0.5;
    ob_size=0.005;
    ob_r=0;
    ob_g=0;
    ob_b=0;
    ob_a=0;
    ib_size=0.26;
    ib_r=0.25;
    ib_g=0.25;
    ib_b=0.25;
    ib_a=0;
    mv_x=33.152;
    mv_y=28.799997;
    mv_dx=0.006;
    mv_dy=0;
    mv_l=1;
    mv_r=1;
    mv_g=1;
    mv_b=0;
    mv_a=0.4;
    mv_g=1-bass_att*.4;
    beat=if_milk(above(bass*bass_att,4.5),1-beat,beat);
    q1=beat*2-1;
    
    amp =amp*.8+.2*(bass_att+mid_att+treb_att)*.3;
    q2 = min(amp,1);
    trebcap=trebcap*.7+.16*treb;
    q3=trebcap*2;
    monitor = q3;
    // per_pixel_1=wang = (3+q3)*x+time*1.7+bass*.1;
    // per_pixel_2=in = 0;
    // per_pixel_3=in = in + below(abs(x-.25),.05)*below(abs(y-.5),.25);
    // per_pixel_4=in = below(abs(y-(.5+.5*sin(wang)*q2)),.1);
    // per_pixel_5=in=bnot(bnot(in));
    // per_pixel_6=dx = .02*in;
    // per_pixel_7=dy = .08*cos(wang)*q2*in;
    // per_pixel_8=
    // per_pixel_9=dx = dx+bnot(in)*.005*q1;
    // per_pixel_10=dy = dy+bnot(in)*cos(wang)*-.01*q1;
  }
}
register_preset( Telek__Sine_Wave);