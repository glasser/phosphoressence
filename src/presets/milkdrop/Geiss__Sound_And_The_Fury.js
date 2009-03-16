function Geiss__Sound_And_The_Fury() {
  with (Math) {
    fRating=3;
    gamma=1.98;
    decay=0.98;
    echo_zoom=2;
    echo_alpha=0;
    echo_orient=0;
    wave_mode=2;
    wave_additive=0;
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
    wave_a=7.9;
    fWaveScale=0.769339;
    fWaveSmoothing=0.9;
    wave_mystery=0;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=1;
    warp_scale=1;
    zoomexp=1;
    fShader=0;
    zoom=1.135;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=0.28;
    sx=1;
    sy=1;
    wave_r=0;
    wave_g=0;
    wave_b=0;
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
    wave_b = wave_b + min(1,max(0,(bass_att-1)*1.5));
    wave_r = wave_b*0.4;
    wave_g = wave_b*0.4;
    zoom = zoom + 0.013*( 0.60*sin(0.339*time) + 0.40*sin(0.276*time) );
    rot = rot + 0.040*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );
    cx = cx + 0.005*( 0.60*sin(0.471*time) + 0.40*sin(0.297*time) );
    cy = cy + 0.005*( 0.60*sin(0.379*time) + 0.40*sin(0.351*time) );
    dx = dx + 0.009*( 0.60*sin(0.234*time) + 0.40*sin(0.277*time) );
    
    dx = dx + dx_residual;
    dy = dy + dy_residual;
    bass_thresh = above(bass_att,bass_thresh)*2.5 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.4)*0.98+1.4);
    dx_residual = equal(bass_thresh,2.5)*0.016*sin(time*7) + (1-equal(bass_thresh,2.5))*dx_residual;
    dy_residual = equal(bass_thresh,2.5)*0.012*sin(time*9) + (1-equal(bass_thresh,2.5))*dy_residual;
    // per_pixel_1=zoom = zoom + 0.1*rad;
  }
}
register_preset( Geiss__Sound_And_The_Fury);
