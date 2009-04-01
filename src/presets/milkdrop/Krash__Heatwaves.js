function Krash__Heatwaves() {
  with (Math) {
    fRating=3;
    gamma=2;
    decay=0.98;
    echo_zoom=1.006596;
    echo_alpha=0;
    echo_orient=0;
    wave_mode=3;
    wave_additive=0;
    wave_usedots=0;
    bModWaveAlphaByVolume=0;
    wave_brighten=1;
    wrap=0;
    darken_center=0;
    bRedBlueStereo=0;
    brighten=0;
    darken=0;
    solarize=0;
    invert=0;
    wave_a=0.8;
    fWaveScale=1.028395;
    fWaveSmoothing=0.75;
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
    wave_r=0.5999;
    wave_g=0.2;
    wave_b=0.1;
    wave_x=0.5;
    wave_y=0.5;
    ob_size=0.01;
    ob_r=0;
    ob_g=0;
    ob_b=0;
    ob_a=0.0999;
    ib_size=0.01;
    ib_r=1;
    ib_g=0.6;
    ib_b=0;
    ib_a=0.2;
    mv_x=12;
    mv_y=9;
    mv_l=0.9;
    mv_r=1;
    mv_g=1;
    mv_b=1;
    mv_a=0;
    warp = 0;
    wave_r = wave_r + 0.2*(0.6*sin(0.892*time) + 0.4*sin(1.432*time));
    wave_g = wave_g + 0.15*(0.6*sin(1.217*time) + 0.4*sin(0.935*time));
    wave_b = wave_b + 0.1*(0.6*sin(0.729*time) + 0.4*sin(1.292*time));
    ob_r = abs(wave_r - 0.2);
    ob_g = abs(wave_g - 0.1);
    ob_b = abs(wave_b - 0.05);
    ib_a = 0.9-bass;
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
    mode = if_milk(beat,1-mode,mode);
    wave_x = abs(1-mode);
    wave_y = 0.5+(1-2*mode)*0.05;
    q1 = 1-2*mode;
    q2 = mode;
    // per_pixel_1=du = x*2-1 - q1*0.7;
    // per_pixel_2=dv = y*2-1 + q1*0.5;
    // per_pixel_3=dist = sqrt(du*du+dv*dv);
    // per_pixel_4=ang2 = atan2(du,dv);
    // per_pixel_5=mult = 0.008/(dist+0.4);
    // per_pixel_6=dx = mult*sin(ang2-1.5);
    // per_pixel_7=dy = mult*cos(ang2-1.5+q2*0.1);
    // per_pixel_8=du = x*2-1 - q1*0.7;
    // per_pixel_9=dv = y*2-1 - q1*0.5;
    // per_pixel_10=dist = sqrt(du*du+dv*dv);
    // per_pixel_11=ang2 = atan2(du,dv);
    // per_pixel_12=mult = 0.008/(dist+0.4);
    // per_pixel_13=dx = dx + mult*sin(ang2+1.5);
    // per_pixel_14=dy = dy + mult*cos(ang2+1.4+q2*0.1);
    // per_pixel_15=dy = dy - below(y,0.65)*above(y,0.35)*(0.1*(y-0.5) + 0.01*sin(x*30+q1*time*4));
    // per_pixel_16=dx = dx - above(dx,-0.01+q2*0.01)*below(dx,0+q2*0.01)*q1*0.006;
  }
}
register_preset( Krash__Heatwaves);