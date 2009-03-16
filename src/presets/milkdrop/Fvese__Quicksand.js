function Fvese__Quicksand() {
  with (Math) {
    fRating=4.5;
    gamma=1;
    decay=0.992;
    echo_zoom=1.008;
    echo_alpha=0.5;
    echo_orient=0;
    wave_mode=3;
    wave_additive=1;
    wave_usedots=0;
    bWaveThick=1;
    bModWaveAlphaByVolume=0;
    wave_brighten=0;
    wrap=1;
    darken_center=1;
    bRedBlueStereo=0;
    brighten=1;
    darken=0;
    solarize=1;
    invert=0;
    wave_a=1;
    fWaveScale=0.499226;
    fWaveSmoothing=0.9;
    wave_mystery=0;
    fModWaveAlphaStart=1.489999;
    fModWaveAlphaEnd=0.75;
    warp_speed=1;
    warp_scale=1.331;
    zoomexp=1;
    fShader=0;
    zoom=0.9995;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=0.000005;
    dy=0;
    warp=0.01;
    sx=1;
    sy=1;
    wave_r=0.76;
    wave_g=0.48;
    wave_b=0.39;
    wave_x=0.5;
    wave_y=0.5;
    ob_size=0;
    ob_r=0;
    ob_g=1;
    ob_b=0.2;
    ob_a=0;
    ib_size=0;
    ib_r=1;
    ib_g=0;
    ib_b=0;
    ib_a=0;
    mv_x=64;
    mv_y=48;
    mv_dx=0;
    mv_dy=0;
    mv_l=5;
    mv_r=0.6699;
    mv_g=0.48;
    mv_b=0.39;
    mv_a=0.2;
    wave_r = wave_r + 0.350*( 0.60*sin(0.825*time) + 0.40*sin(0.915*time) );
    wave_g = wave_g + 0.350*( 0.60*sin(0.900*time) + 0.40*sin(1.025*time) );
    vol = (5*bass + 3*mid + 2*treb)/10;
    wave_x = wave_x + 0.03*vol*sin(0.727*time);
    wave_y = wave_y + 0.04*vol*sin(0.777*time);
    bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);
    dx = 0.005 + 0.002*( 0.60*sin(0.234*time) + 0.40*sin(0.277*time) );
    dy = 0.005 + 0.002*( 0.60*sin(0.234*time) + 0.40*sin(0.277*time) );
    monitor = time;
    // per_pixel_1=cx = (0.25&(x*5-0.5))*0.1+0.025;
    // per_pixel_2=cy = (0.25&(y*5-0.5))*0.1+0.025;
    // per_pixel_3=sx = sx -.005-abs(x-1)*.01;
    // per_pixel_4=sy = sy -.005-abs(x-1)*.01;
    // per_pixel_5=zoom = pow(rad,0.05)+.050;
    // per_pixel_6=rot = 0.03*sin(0.84*time)-0.013*cos(0.784*time)+0.02*sin(1-rad);
  }
}
register_preset( Fvese__Quicksand);
