function Geiss__Flower() {
  with (Math) {
    gamma=2.7;
    echo_zoom=2;
    echo_alpha=0;
    echo_orient=0;
    decay=0.96;
    wave_mode=0;
    wave_additive=0;
    wave_usedots=0;
    bModWaveAlphaByVolume=0;
    wave_brighten=1;
    wrap=1;
    darken_center=0;
    bMotionVectorsOn=0;
    mv_x=12;
    mv_y=9;
    wave_a=1;
    fWaveScale=1.151736;
    fWaveSmoothing=0.1;
    wave_mystery=-0.5;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=1;
    warp_scale=1.331;
    zoomexp=1;
    fShader=0;
    zoom=1.280549;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=0.012485;
    sx=1;
    sy=1;
    wave_r=0.65;
    wave_g=0.65;
    wave_b=0.65;
    wave_x=0.5;
    wave_y=0.5;
    wave_r = wave_r + 0.350*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );
    wave_g = wave_g + 0.350*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );
    wave_b = wave_b + 0.350*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );
    rot = rot + 0.030*( 0.60*sin(0.381*time) + 0.40*sin(0.479*time) );
    cx = cx + 0.110*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );
    cy = cy + 0.110*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );
    zoom=zoom+0.05+0.05*sin(time*0.133);
    // per_pixel_1=zoom=(zoom-1)*rad+1;
    fRating=1;
  }
}
register_preset( Geiss__Flower);
