function Geiss__Three_Kinds_Of_Amphetamines() {
  with (Math) {
    fRating=3;
    gamma=1.98;
    decay=0.98;
    echo_zoom=2;
    echo_alpha=0;
    echo_orient=0;
    wave_mode=2;
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
    wave_a=0.42;
    fWaveScale=0.691358;
    fWaveSmoothing=0.4;
    wave_mystery=0;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=1;
    warp_scale=1;
    zoomexp=0.888;
    fShader=1;
    zoom=1.045;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=0.513;
    sx=1;
    sy=1;
    wave_r=0.65;
    wave_g=0.65;
    wave_b=0.65;
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
    wave_r = wave_r + 0.350*( 0.60*sin(0.742*time) + 0.40*sin(1.021*time) );
    wave_g = wave_g + 0.350*( 0.60*sin(0.703*time) + 0.40*sin(0.969*time) );
    wave_b = wave_b + 0.350*( 0.60*sin(1.090*time) + 0.40*sin(0.963*time) );
    zoom = zoom + 0.033*( 0.60*sin(0.339*time) + 0.40*sin(0.276*time) );
    zoom = zoom + rad*0.2;
    rot = rot + 0.040*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );
    cx = cx + 0.110*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );
    cy = cy + 0.110*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );
    dx = dx + dx_residual;
    dy = dy + dy_residual;
    bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);
    dx_residual = equal(bass_thresh,2)*0.008*sin(time*7) + (1-equal(bass_thresh,2))*dx_residual;
    dy_residual = equal(bass_thresh,2)*0.006*sin(time*9) + (1-equal(bass_thresh,2))*dy_residual;
    // per_pixel_1=zoom=zoom+0.13*rad;
  }
}
register_preset( Geiss__Three_Kinds_Of_Amphetamines);