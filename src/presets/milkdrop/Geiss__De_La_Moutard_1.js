function Geiss__De_La_Moutard_1() {
  with (Math) {
    fRating=3;
    gamma=2;
    decay=0.97;
    echo_zoom=2;
    echo_alpha=0;
    echo_orient=0;
    wave_mode=7;
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
    wave_a=11.94;
    fWaveScale=2.578376;
    fWaveSmoothing=0.6;
    wave_mystery=0;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=1;
    warp_scale=1.772;
    zoomexp=4.401;
    fShader=0;
    zoom=1.031;
    rot=0.003;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=0;
    sx=1;
    sy=1;
    wave_r=0.19;
    wave_g=0.19;
    wave_b=0.19;
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
    wave_r = min(1,max(0,(bass_att-1)*1.3));
    wave_g = wave_r*0.7;
    wave_b = wave_r*0.1;
    rot = rot + 0.010*( 0.60*sin(0.038*time) + 0.40*sin(0.054*time) );
    dx = dx + 0.002*( 0.60*sin(0.434*time) + 0.40*sin(0.277*time) );
    dy = dy + 0.002*( 0.60*sin(0.384*time) + 0.40*sin(0.477*time) );
  }
}
register_preset( Geiss__De_La_Moutard_1);
