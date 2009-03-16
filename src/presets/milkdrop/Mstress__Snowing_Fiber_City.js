function Mstress__Snowing_Fiber_City() {
  with (Math) {
    fRating=4;
    gamma=1;
    decay=0.9;
    echo_zoom=1.168096;
    echo_alpha=0;
    echo_orient=0;
    wave_mode=7;
    wave_additive=1;
    wave_usedots=0;
    bWaveThick=0;
    bModWaveAlphaByVolume=1;
    wave_brighten=0;
    wrap=1;
    darken_center=0;
    bRedBlueStereo=0;
    brighten=0;
    darken=0;
    solarize=0;
    invert=0;
    wave_a=0.0033;
    fWaveScale=0.572643;
    fWaveSmoothing=0;
    wave_mystery=0;
    fModWaveAlphaStart=0.24;
    fModWaveAlphaEnd=1.300001;
    warp_speed=1;
    warp_scale=1.331;
    zoomexp=0.999998;
    fShader=0;
    zoom=0.4639;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=0.000022;
    sx=1;
    sy=1;
    wave_r=0.65;
    wave_g=0.65;
    wave_b=0.65;
    wave_x=0.5;
    wave_y=0.5;
    ob_size=0.035;
    ob_r=0.34;
    ob_g=0.34;
    ob_b=0.34;
    ob_a=0.38;
    ib_size=0.02;
    ib_r=0.34;
    ib_g=0.34;
    ib_b=0.34;
    ib_a=0.21;
    mv_x=28;
    mv_y=9;
    mv_dx=0;
    mv_dy=0;
    mv_l=0.9;
    mv_r=1;
    mv_g=1;
    mv_b=1;
    mv_a=0;
    wavecode_0_enabled=1;
    wavecode_0_samples=512;
    wavecode_0_sep=16;
    wavecode_0_bSpectrum=0;
    wavecode_0_bUseDots=0;
    wavecode_0_bDrawThick=1;
    wavecode_0_bAdditive=0;
    wavecode_0_scaling=2.2796;
    wavecode_0_smoothing=0.7;
    wavecode_0_r=1;
    wavecode_0_g=1;
    wavecode_0_b=1;
    wavecode_0_a=0.52;
    wave_0_init1=t8 = time;;
    t7 = t8;
    t8 = time;
    wave_0_per_pofloor1=x = 0.5 + sin(sample*103.41 + time*0.1);;
    wave_0_per_pofloor2=y = 0.5 + sin(sample*94.23) + 0.02*sin(time*4.5);;
    wave_0_per_pofloor3=b=abs(sin(sample*100+time));;
    wave_0_per_pofloor4=r=abs(sin(sample*512+time));;
    wave_0_per_pofloor5=g=abs(sin(sample*10+time));;
    wave_0_per_pofloor6=;
    wavecode_1_enabled=0;
    wavecode_1_samples=512;
    wavecode_1_sep=0;
    wavecode_1_bSpectrum=0;
    wavecode_1_bUseDots=0;
    wavecode_1_bDrawThick=0;
    wavecode_1_bAdditive=0;
    wavecode_1_scaling=1;
    wavecode_1_smoothing=0.5;
    wavecode_1_r=1;
    wavecode_1_g=1;
    wavecode_1_b=1;
    wavecode_1_a=1;
    wavecode_2_enabled=0;
    wavecode_2_samples=512;
    wavecode_2_sep=0;
    wavecode_2_bSpectrum=0;
    wavecode_2_bUseDots=0;
    wavecode_2_bDrawThick=0;
    wavecode_2_bAdditive=0;
    wavecode_2_scaling=1;
    wavecode_2_smoothing=0.5;
    wavecode_2_r=1;
    wavecode_2_g=1;
    wavecode_2_b=1;
    wavecode_2_a=1;
    shapecode_0_enabled=1;
    shapecode_0_sides=32;
    shapecode_0_additive=0;
    shapecode_0_thickOutline=0;
    shapecode_0_x=0.5;
    shapecode_0_y=0.5;
    shapecode_0_rad=0.15;
    shapecode_0_ang=0;
    shapecode_0_r=0.79;
    shapecode_0_g=0.46;
    shapecode_0_b=0.42;
    shapecode_0_a=1;
    shapecode_0_r2=0.36;
    shapecode_0_g2=0.460001;
    shapecode_0_b2=0;
    shapecode_0_a2=0;
    shapecode_0_border_r=1;
    shapecode_0_border_g=1;
    shapecode_0_border_b=1;
    shapecode_0_border_a=0.1;
    shape_0_init1=oldx=.5;;
    shape_0_init2=oldy=.5;;
    rad=rad+.1*sin(time);
    mbass=max(bass_att,3);
    xmovn = 0.1*random_integer(10)*mbass*0.015*(1-2*above(random_integer(10),5));
    ymovn = pow(pow(mbass*0.015,2)-pow(xmovn,2),1/2)*(1-2*above(random_integer(10),5));
    //ymovn=.05;
    xmov = if_milk(beat,xmovn,xmov*.9);
    ymov = if_milk(beat,ymovn,ymov*.9);
    q1=oldx;
    q2=oldy;
    out_x = bor(above(q1+xmov,.9),below(q1+xmov,.1));
    out_y = bor(above(q2+ymov,.9),below(q2+ymov,.1));
    xmov = xmov + (-2*xmov*out_x);
    ymov = ymov + (-2*ymov*out_y);
    x =  q1+xmov ;
    y = q2+ymov;
    q1=x;
    q2=y;
    oldx = q1;
    oldy = q2;
    
    decay = decay - 0.91*(treble);
    
    //Thanks to krash for beat detection (modif_milkied)
    volume = 0.3*bass+mid;
    beatrate = equal(beatrate,0) + (1-equal(beatrate,0))*(below(volume,0.01) + (1-below(volume,0.01))*beatrate);
    lastbeat = lastbeat + equal(lastbeat,0)*time;
    meanbass_att = 0.1*(meanbass_att*9 + bass_att);
    runmeanbass =(runmeanbass*2 + bass_att)/3;
    peakbass_att = max(bass_att,peakbass_att);
    beat = above(volume,0.8)*above(bass_att,runmeanbass*1.1)*below(peakbass_att - bass_att, 0.05*peakbass_att)*above(time - lastbeat, 0.1 + 0.5*(beatrate - 0.1));
    beatrate = max(if_milk(beat,if_milk(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);
    peakbass_att = beat*bass_att + (1-beat)*peakbass_att*(above(time - lastbeat, 2*beatrate)*0.95 + (1-above(time - lastbeat, 2*beatrate))*0.995);
    lastbeat = beat*time + (1-beat)*lastbeat;
    peakbass_att = max(peakbass_att,1.1*meanbass_att);
    shapecode_1_enabled=0;
    shapecode_1_sides=4;
    shapecode_1_additive=0;
    shapecode_1_thickOutline=0;
    shapecode_1_x=0.5;
    shapecode_1_y=0.5;
    shapecode_1_rad=0.1;
    shapecode_1_ang=0;
    shapecode_1_r=1;
    shapecode_1_g=0;
    shapecode_1_b=0;
    shapecode_1_a=1;
    shapecode_1_r2=0;
    shapecode_1_g2=1;
    shapecode_1_b2=0;
    shapecode_1_a2=0;
    shapecode_1_border_r=1;
    shapecode_1_border_g=1;
    shapecode_1_border_b=1;
    shapecode_1_border_a=0.1;
    shapecode_2_enabled=0;
    shapecode_2_sides=4;
    shapecode_2_additive=0;
    shapecode_2_thickOutline=0;
    shapecode_2_x=0.5;
    shapecode_2_y=0.5;
    shapecode_2_rad=0.1;
    shapecode_2_ang=0;
    shapecode_2_r=1;
    shapecode_2_g=0;
    shapecode_2_b=0;
    shapecode_2_a=1;
    shapecode_2_r2=0;
    shapecode_2_g2=1;
    shapecode_2_b2=0;
    shapecode_2_a2=0;
    shapecode_2_border_r=1;
    shapecode_2_border_g=1;
    shapecode_2_border_b=1;
    shapecode_2_border_a=0.1;
    rot=tot+.1*sin(time);
    dx=dx+.1*sin(time*.5);
    dy=dy+.1*sin(time*.3);
  }
}
register_preset( Mstress__Snowing_Fiber_City);
