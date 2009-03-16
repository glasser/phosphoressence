function Rozzor_and_Rovastar__Altars_Of_Madness_3_ooze_tweak_with_custom_wave() {
  with (Math) {
    fRating=3;
    gamma=1.98;
    decay=1;
    echo_zoom=1.006596;
    echo_alpha=0;
    echo_orient=0;
    wave_mode=2;
    wave_additive=0;
    wave_usedots=0;
    bWaveThick=0;
    bModWaveAlphaByVolume=0;
    wave_brighten=0;
    wrap=0;
    darken_center=1;
    bRedBlueStereo=0;
    brighten=0;
    darken=0;
    solarize=0;
    invert=1;
    wave_a=0.001;
    fWaveScale=0.01;
    fWaveSmoothing=0.9;
    wave_mystery=-0.4;
    fModWaveAlphaStart=0.71;
    fModWaveAlphaEnd=1.3;
    warp_speed=1;
    warp_scale=1.331;
    zoomexp=1;
    fShader=0;
    zoom=1;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=-1;
    dy=-1;
    warp=0.01;
    sx=1;
    sy=0.972365;
    wave_r=0.65;
    wave_g=0.65;
    wave_b=0.65;
    wave_x=0.5;
    wave_y=0.5;
    ob_size=0.005;
    ob_r=0;
    ob_g=0;
    ob_b=0;
    ob_a=1;
    ib_size=0.005;
    ib_r=0.25;
    ib_g=0.25;
    ib_b=0.25;
    ib_a=1;
    mv_x=64;
    mv_y=48;
    mv_dx=0;
    mv_dy=0;
    mv_l=0.5;
    mv_r=0.35;
    mv_g=0.35;
    mv_b=0.35;
    mv_a=0;
    wavecode_0_enabled=1;
    wavecode_0_samples=384;
    wavecode_0_sep=0;
    wavecode_0_bSpectrum=0;
    wavecode_0_bUseDots=0;
    wavecode_0_bDrawThick=1;
    wavecode_0_bAdditive=0;
    wavecode_0_scaling=22.479836;
    wavecode_0_smoothing=0.5;
    wavecode_0_r=1;
    wavecode_0_g=1;
    wavecode_0_b=1;
    wavecode_0_a=0.6;
    x = 100*sin(time) * q2+.2;
    t1 = cos(time)*q3;
    wave_0_per_pofloor1=x = sample+(value1*t1);;
    wave_0_per_pofloor2=y = value2 +q3;;
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
    shapecode_0_enabled=0;
    shapecode_0_sides=4;
    shapecode_0_additive=0;
    shapecode_0_thickOutline=0;
    shapecode_0_x=0.5;
    shapecode_0_y=0.5;
    shapecode_0_rad=0.1;
    shapecode_0_ang=0;
    shapecode_0_r=1;
    shapecode_0_g=0;
    shapecode_0_b=0;
    shapecode_0_a=1;
    shapecode_0_r2=0;
    shapecode_0_g2=1;
    shapecode_0_b2=0;
    shapecode_0_a2=0;
    shapecode_0_border_r=1;
    shapecode_0_border_g=1;
    shapecode_0_border_b=1;
    shapecode_0_border_a=0.1;
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
    decay=0.1;
    warp=0;
    q8 =oldq8+ 0.0003*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);
    oldq8 = q8;
    ib_a =bass;
    volume = 0.15*(bass_att+bass+mid+mid_att);
    beatrate = if_milk(equal(beatrate,0),1,if_milk(below(volume,0.01),1,beatrate));
    lastbeat = if_milk(equal(lastbeat,0),time,lastbeat);
    meanbass_att = 0.1*(meanbass_att*9 + bass_att);
    peakbass_att = if_milk(above(bass_att,peakbass_att),bass_att,peakbass_att);
    beat = if_milk(above(volume,0.8),if_milk(below(peakbass_att - bass_att, 0.05*peakbass_att),if_milk(above(time - lastbeat,0.1+0.5*(beatrate-0.1)),1,0),0),0);
    beatrate = max(if_milk(beat,if_milk(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);
    peakbass_att = if_milk(equal(beat,0),if_milk(above(time - lastbeat,2*beatrate),peakbass_att*0.95,peakbass_att*0.995),bass_att);
    lastbeat = if_milk(beat,time,lastbeat);
    countertime = if_milk(beat,time,countertime);
    counter =-1*pow(min((time-countertime-1.5),0),9);
    q7 = if_milk(beat,0.001+0.0001*random_integer(40),oldq7);
    oldq7=q7;
    q6 = if_milk(beat,0.001+0.0001*random_integer(40),oldq6);
    oldq6=q6;
    q5= if_milk(beat,0.001+0.0001*random_integer(40),oldq5);
    oldq5=q5;
    q4 = if_milk(beat,0.001+0.0001*random_integer(40),oldq4);
    oldq4=q4;
    Flag = If(beat,if_milk(Rand(2)-1,1,0),oldFlag);
    oldflag = flag;
    Ratio = If(Beat,50+random_integer(100),oldRatio);
    OldRatio = Ratio;
    q1 = if_milk(beat,if_milk(flag,ratio,0.75*ratio),oldq1);
    oldq1=q1;
    q2 = if_milk(beat,if_milk(flag,0.75*ratio,ratio),oldq2);
    //q2 = if_milk(beat, random_integer(2)+1,oldq2);
    oldq2=q2;
    //monitor = if_milk(random_integer(2)-1,-1,1);
    temp_b = cos(time)  + abs(cos(time));
    temp_g = abs(sin(time)) ;
    temp_r = (-1 * cos(time))  + abs(-1 * cos(time)) + 0.2 * (cos(sin(time))+(abs(cos(sin(time)))+cos(sin(time))));
    ob_r = 1 - if_milk(above(temp_r,1),1,if_milk(above(temp_r,0), abs(temp_r),0));
    ob_g = 1 - if_milk(above(temp_g,1),1,if_milk(above(temp_g,0), abs(temp_g),0));
    ob_b = 1 - if_milk(above(temp_b,1),1,if_milk(above(temp_b,0), abs(temp_b),0));
    q3 = .5+.5*sin(q8);
    monitor = q3;
    // per_pixel_1=dx=q4*sin((y-0.5)*q1)+q5*sin((y-0.5)*q2);
    // per_pixel_2=dy=q6*cos((x-0.5)*q2)+q7*cos((x-0.5)*q1);
    // per_pixel_3=rot = 0.1*(rad+cos((5+5*sin(q8*1.211)*x)-0.5) -sin(((5+5*sin(q8*0.973))*y)-dx));
    // per_pixel_4=cx = if_milk(above(dy,-.5),1-rot * 2,rot*q8);
  }
}
register_preset( Rozzor_and_Rovastar__Altars_Of_Madness_3_ooze_tweak_with_custom_wave);
