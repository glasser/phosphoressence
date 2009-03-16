function EMPR__Random__Changing_Polyevolution() {
  with (Math) {
    fRating=2;
    gamma=1;
    decay=1;
    echo_zoom=1.220183;
    echo_alpha=0;
    echo_orient=0;
    wave_mode=3;
    wave_additive=1;
    wave_usedots=0;
    bWaveThick=0;
    bModWaveAlphaByVolume=0;
    wave_brighten=0;
    wrap=0;
    darken_center=0;
    bRedBlueStereo=0;
    brighten=0;
    darken=0;
    solarize=0;
    invert=0;
    wave_a=1;
    fWaveScale=0.241455;
    fWaveSmoothing=0;
    wave_mystery=-0.261032;
    fModWaveAlphaStart=0.5;
    fModWaveAlphaEnd=1;
    warp_speed=1;
    warp_scale=1;
    zoomexp=1;
    fShader=1;
    zoom=1;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=0.00001;
    dy=0.00001;
    warp=0.01;
    sx=1;
    sy=1;
    wave_r=0.526528;
    wave_g=0.324083;
    wave_b=0.134239;
    wave_x=0.482812;
    wave_y=0.467471;
    ob_size=0.0045;
    ob_r=0.071102;
    ob_g=0.089654;
    ob_b=0.51465;
    ob_a=0.985207;
    ib_size=0.005;
    ib_r=0.491715;
    ib_g=0.022579;
    ib_b=0.569085;
    ib_a=0.949768;
    mv_x=3;
    mv_y=48;
    mv_dx=-0.505893;
    mv_dy=-0.993957;
    mv_l=5;
    mv_r=0.835033;
    mv_g=0.249397;
    mv_b=0.055806;
    mv_a=0.175581;
    wave_r = wave_r + 0.45*( 0.6*sin(1.517*time) + 0.4*mid_effect );
    wave_b = wave_b + 0.45*( 0.6*sin(1.088*time) + 0.4*bass_effect );
    wave_g = wave_g + 0.45*( 0.6*sin(1.037*time) + 0.4*treb_effect );
    zoom = zoom + 0.013*( 0.60*sin(0.339*time) + 0.40*sin(0.276*time) );
    rot = rot + 0.020*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );
    decay = decay - 0.01*below(frame%5,1);
    volume = 0.3*(bass+mid+att);
    beatrate = equal(beatrate,0) + (1-equal(beatrate,0))*(below(volume,0.01) + (1-below(volume,0.01))*beatrate);
    lastbeat = lastbeat + equal(lastbeat,0)*time;
    meanbass_att = 0.1*(meanbass_att*9 + bass_att);
    peakbass_att = max(bass_att,peakbass_att);
    beat = above(volume,0.8)*below(peakbass_att - bass_att, 0.05*peakbass_att)*above(time - lastbeat, 0.1 + 0.5*(beatrate - 0.1));
    beatrate = max(if_milk(beat,if_milk(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);
    peakbass_att = beat*bass_att + (1-beat)*peakbass_att*(above(time - lastbeat, 2*beatrate)*0.95 + (1-above(time - lastbeat, 2*beatrate))*0.995);
    lastbeat = beat*time + (1-beat)*lastbeat;
    peakbass_att = max(peakbass_att,1.1*meanbass_att);
    effect = if_milk(beat,effect+random_integer(5)+1,effect);
    effect = if_milk(above(effect,5),effect-6,effect);
    q1 = effect+2;
    monitor = q1;
    wave_mode = wave_g * wave_b;
    wave_r = time + treb;
    wave_r=if_milk(below(wave_r,0.0), 0.0, wave_r);
    wave_r=if_milk(above(wave_r,1.0), 1.0, wave_r);
    wave_mode=if_milk(below(wave_mode,0), 0, wave_mode);
    wave_mode=if_milk(above(wave_mode,7.0), 7.0, wave_mode);
    wave_r=if_milk(below(wave_r,0.0), 0.0, wave_r);
    wave_r=if_milk(above(wave_r,1.0), 1.0, wave_r);
    // per_pixel_1=zoom=zoom+0.04*sin(ang*floor(q1)+time*2.6);
    // per_pixel_2=cy = x * b;
    // per_pixel_3=cy=if_milk(below(cy,-1.0), -1.0, cy);
    // per_pixel_4=cy=if_milk(above(cy,2.0), 2.0, cy);
  }
}
register_preset( EMPR__Random__Changing_Polyevolution);
