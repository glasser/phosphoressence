function Krash_and_Rovastar__Switching_Polygons() {
  with (Math) {
    fRating=3;
    gamma=1.85;
    decay=0.973;
    echo_zoom=2;
    echo_alpha=0;
    echo_orient=0;
    wave_mode=2;
    wave_additive=0;
    wave_usedots=0;
    bModWaveAlphaByVolume=0;
    wave_brighten=1;
    wrap=1;
    darken_center=0;
    bRedBlueStereo=0;
    brighten=0;
    darken=0;
    solarize=0;
    invert=0;
    wave_a=1.396647;
    fWaveScale=0.883471;
    fWaveSmoothing=0.52;
    wave_mystery=0;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=1;
    warp_scale=2.853;
    zoomexp=1;
    fShader=0;
    zoom=1.064;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=0;
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
    mv_l=0.9;
    mv_r=1;
    mv_g=1;
    mv_b=1;
    mv_a=0;
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
    // per_pixel_1=zoom=zoom+0.04*sin(ang*floor(q1)+time*2.6);
  }
}
register_preset( Krash_and_Rovastar__Switching_Polygons);
