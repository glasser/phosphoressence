function Geiss__Swirlie_3() {
  with (Math) {
    fRating=5;
    gamma=1.994;
    decay=0.97;
    echo_zoom=2;
    echo_alpha=0;
    echo_orient=0;
    wave_mode=1;
    wave_additive=1;
    wave_usedots=0;
    bModWaveAlphaByVolume=0;
    wave_brighten=1;
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
    wave_a=4.499998;
    fWaveScale=1.524161;
    fWaveSmoothing=0.9;
    wave_mystery=0;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=0.334695;
    warp_scale=3.928016;
    zoomexp=2.1;
    fShader=0;
    zoom=0.961;
    rot=0.22;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=1.771011;
    sx=1;
    sy=1;
    wave_r=0.65;
    wave_g=0.65;
    wave_b=0.65;
    wave_x=0.5;
    wave_y=0.5;
    ob_size=0;
    ob_r=0;
    ob_g=0;
    ob_b=0;
    ob_a=0.5;
    ib_size=0.0285;
    ib_r=0.34;
    ib_g=0.34;
    ib_b=0.34;
    ib_a=0.1;
    wave_x = wave_x + 0.2900*( 0.60*sin(2.121*time) + 0.40*sin(1.621*time) );
    wave_y = wave_y + 0.2900*( 0.60*sin(1.742*time) + 0.40*sin(2.322*time) );
    wave_r = wave_r + 0.350*( 0.60*sin(0.823*time) + 0.40*sin(0.916*time) );
    wave_g = wave_g + 0.350*( 0.60*sin(0.900*time) + 0.40*sin(1.023*time) );
    wave_b = wave_b + 0.350*( 0.60*sin(0.808*time) + 0.40*sin(0.949*time) );
    blah = 0.5/(wave_r+wave_g+wave_b);
    wave_r = wave_r*blah; wave_g = wave_g*blah; wave_b = wave_b*blah;
    rot = rot + 0.12*( 0.60*sin(0.21*time) + 0.40*sin(0.339*time) );
    cx = cx + 0.30*( 0.60*sin(0.374*time) + 0.14*sin(0.194*time) );
    cy = cy + 0.37*( 0.60*sin(0.274*time) + 0.10*sin(0.394*time) );
    ib_r = ib_r + 0.2*sin(time*0.5413);
    ib_g = ib_g + 0.2*sin(time*0.6459);
    ib_b = ib_b + 0.2*sin(time*0.7354);
    blah = 0.4/(ib_r+ib_g+ib_b)*3;
    ib_r = ib_r*blah; ib_g = ib_g*blah; ib_b = ib_b*blah;
    
  }
}
register_preset( Geiss__Swirlie_3);
