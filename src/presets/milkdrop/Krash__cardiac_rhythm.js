function Krash__cardiac_rhythm() {
  with (Math) {
    fRating=3;
    gamma=2;
    decay=0.99;
    echo_zoom=1;
    echo_alpha=0;
    echo_orient=0;
    wave_mode=3;
    wave_additive=1;
    wave_usedots=0;
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
    fWaveScale=0.025182;
    fWaveSmoothing=0;
    wave_mystery=0;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=1;
    warp_scale=1;
    zoomexp=1;
    fShader=0;
    zoom=1;
    rot=0;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=1;
    sx=1;
    sy=1;
    wave_r=0.1;
    wave_g=0.8;
    wave_b=0.1;
    wave_x=0.5;
    wave_y=0.5;
    ob_size=0;
    ob_r=0;
    ob_g=0;
    ob_b=0;
    ob_a=0;
    ib_size=0;
    ib_r=0;
    ib_g=0;
    ib_b=0;
    ib_a=0;
    mv_x=12;
    mv_y=9;
    mv_l=0.9;
    mv_r=1;
    mv_g=1;
    mv_b=1;
    mv_a=0;
    warp=0;
    dx=-0.0005;
    dy=-0.0005;
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
    wave_x = 0.25*time-floor(0.25*time);
    ypos = if_milk(below(wave_x,0.005),random_integer(60)*0.01,ypos);
    wave_y = 0.15 + ypos;
    decay = if_milk(below(wave_x,0.005),0.8,0.985);
    pulse = if_milk(beat,1,pulse);
    pulsetime = if_milk(beat,time,pulsetime);
    wave_y = wave_y + if_milk(pulse,0.2*sin(20*(time-pulsetime)),0);
    pulse = if_milk(above(20*(time-pulsetime),3.5),0,pulse);
  }
}
register_preset( Krash__cardiac_rhythm);