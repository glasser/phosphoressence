function Zylot__Rush() {
  with (Math) {
    fRating=2;
    gamma=1.98;
    decay=0.94;
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
    darken_center=0;
    bRedBlueStereo=0;
    brighten=0;
    darken=1;
    solarize=0;
    invert=0;
    wave_a=0.001;
    fWaveScale=2.987793;
    fWaveSmoothing=0.75;
    wave_mystery=0;
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
    sx=1;
    sy=1;
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
    mv_x=12;
    mv_y=9;
    mv_dx=0;
    mv_dy=0;
    mv_l=0.9;
    mv_r=1;
    mv_g=1;
    mv_b=1;
    mv_a=0;
    wavecode_0_enabled=0;
    wavecode_0_samples=512;
    wavecode_0_sep=0;
    wavecode_0_bSpectrum=1;
    wavecode_0_bUseDots=0;
    wavecode_0_bDrawThick=0;
    wavecode_0_bAdditive=0;
    wavecode_0_scaling=0.120321;
    wavecode_0_smoothing=0.5;
    wavecode_0_r=1;
    wavecode_0_g=1;
    wavecode_0_b=1;
    wavecode_0_a=1;
    wave_0_per_pofloor1=x=sample;;
    wave_0_per_pofloor2=y=.3+pow(value1,.2);;
    wave_0_per_pofloor3=r=random_integer(10)*.1;;
    wave_0_per_pofloor4=g=random_integer(10)*.1;;
    wave_0_per_pofloor5=b=random_integer(10)*.1;;
    wavecode_1_enabled=0;
    wavecode_1_samples=512;
    wavecode_1_sep=0;
    wavecode_1_bSpectrum=1;
    wavecode_1_bUseDots=0;
    wavecode_1_bDrawThick=0;
    wavecode_1_bAdditive=0;
    wavecode_1_scaling=1;
    wavecode_1_smoothing=0.5;
    wavecode_1_r=1;
    wavecode_1_g=1;
    wavecode_1_b=1;
    wavecode_1_a=1;
    wave_1_per_pofloor1=x=sample;;
    wave_1_per_pofloor2=y=.9-pow(value2,.2);;
    wave_1_per_pofloor3=r=random_integer(10)*.1;;
    wave_1_per_pofloor4=g=random_integer(10)*.1;;
    wave_1_per_pofloor5=b=random_integer(10)*.1;;
    wavecode_2_enabled=1;
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
    wave_2_init1=t1 = 0;;
    wave_2_per_pofloor1=x=.5+.1*sin(sample*10)*(random_integer(10)*.1)*bass;;
    wave_2_per_pofloor2=y=.5+.1*cos(sample*10)*(random_integer(10)*.1)*treb;;
    wave_2_per_pofloor3=a=(abs(y-.5)*abs(x-.5))*60;;
    shapecode_0_enabled=1;
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
    r=.5+.2*sin(time*1.3);
    g=.5+.2*sin(time*1.1);
    b=.5+.2*sin(time*.9);
    a=bass;
    r2=r;
    g2=g;
    b2=b;
    border_a = if_milk(above(bass,1.5),1,0);
    rad = bass*.1;
    rad = rad*if_milk(above(bass,1.7),5,1);
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
    warp = 0;
    // per_pixel_1=zoom = if_milk(above(abs(x-.5),.04),if_milk(above(abs(y-.5),.04),1.2,1),1);
    // per_pixel_2=dx = if_milk(above(x-.5,.025),if_milk(below(abs(y-.5),.025),.02,0),0);
    // per_pixel_3=dx = if_milk(below(x-.5,-.025),if_milk(below(abs(y-.5),.025),-.02,dx),dx);
    // per_pixel_4=dy = if_milk(above(y-.5,.025),if_milk(below(abs(x-.5),.02),.02,0),0);
    // per_pixel_5=dy = if_milk(below(y-.5,-.025),if_milk(below(abs(x-.5),.02),-.02,dy),dy);
  }
}
register_preset( Zylot__Rush);