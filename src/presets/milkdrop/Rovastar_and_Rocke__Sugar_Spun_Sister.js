function Rovastar_and_Rocke__Sugar_Spun_Sister() {
  with (Math) {
    fRating=3;
    gamma=1.998;
    decay=0.994;
    echo_zoom=0.999609;
    echo_alpha=0.5;
    echo_orient=3;
    wave_mode=2;
    wave_additive=1;
    wave_usedots=0;
    bWaveThick=0;
    bModWaveAlphaByVolume=0;
    wave_brighten=1;
    wrap=0;
    darken_center=0;
    bRedBlueStereo=0;
    brighten=0;
    darken=1;
    solarize=0;
    invert=0;
    wave_a=5.9;
    fWaveScale=1.116811;
    fWaveSmoothing=0.9;
    wave_mystery=0;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=1;
    warp_scale=2.853;
    zoomexp=1;
    fShader=0;
    zoom=0.9619;
    rot=-0.01;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=0;
    sx=1;
    sy=1;
    wave_r=0.9;
    wave_g=0.45;
    wave_b=0;
    wave_x=0.5;
    wave_y=0.5;
    ob_size=0.01;
    ob_r=0;
    ob_g=0;
    ob_b=0;
    ob_a=0;
    ib_size=0.01;
    ib_r=0.5;
    ib_g=0.57;
    ib_b=0.4;
    ib_a=0;
    mv_x=63.936001;
    mv_y=47.952;
    mv_dx=0;
    mv_dy=0;
    mv_l=1.05;
    mv_r=0;
    mv_g=0;
    mv_b=0.8;
    mv_a=0.1;
    wave_r = wave_r + 0.1*(0.6*sin(0.933*time) + 0.4*sin(1.072*time));
    wave_g = wave_g + 0.1*(0.6*sin(0.888*time) + 0.4*sin(0.918*time));
    wave_b = wave_b + 0.2*(0.6*sin(0.335*time) + 0.4*sin(0.4*time));
    wave_mystery = 0.5*sin(0.35*bass);
    decay = decay - 0.01*equal(frame%50,0);
    mv_b = mv_b + 0.2*sin(time*1.411);
    cx = cx + 0.08*sin(time*1.315);
    cy = cy + 0.08*sin(time*1.127);
    q1 = sin(sin(1.211*time)+ cos(0.887*time)-sin(1.453*time));
    // per_pixel_1=zoom = zoom + (0.1*rad);
    // per_pixel_2=rot = rot - 0.15*sin(q1-ang);
  }
}
register_preset( Rovastar_and_Rocke__Sugar_Spun_Sister);
