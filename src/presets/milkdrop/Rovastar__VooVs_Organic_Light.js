function Rovastar__VooVs_Organic_Light() {
  with (Math) {
    fRating=2;
    gamma=2;
    decay=0.925;
    echo_zoom=1.006596;
    echo_alpha=0;
    echo_orient=3;
    wave_mode=3;
    wave_additive=0;
    wave_usedots=1;
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
    wave_a=4.099998;
    fWaveScale=1.053731;
    fWaveSmoothing=0.36;
    wave_mystery=-0.5;
    fModWaveAlphaStart=0.71;
    fModWaveAlphaEnd=1.3;
    warp_speed=1;
    warp_scale=1.331;
    zoomexp=1;
    fShader=0;
    zoom=0.903947;
    rot=0.02;
    cx=0.5;
    cy=0.5;
    dx=0;
    dy=0;
    warp=0.198054;
    sx=1.072135;
    sy=1.232392;
    wave_r=0.65;
    wave_g=0.65;
    wave_b=0.65;
    wave_x=0.5;
    wave_y=0.5;
    ob_size=0;
    ob_r=0;
    ob_g=0;
    ob_b=0;
    ob_a=0;
    ib_size=0.05;
    ib_r=0.25;
    ib_g=0.25;
    ib_b=0.25;
    ib_a=0.5;
    mv_x=64;
    mv_y=2.400007;
    mv_dx=0;
    mv_dy=0;
    mv_l=0;
    mv_r=1;
    mv_g=1;
    mv_b=1;
    mv_a=0;
    wave_r = 0.5+0.5*sin(1.123*time);
    wave_g = 0.5+0.5*sin(time*1.576);
    wave_b = 0.5+0.5*cos(time*1.465);
    q8 =  oldq8+ 0.0005*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);
    oldq8 = q8;
    ib_r = 0.5+0.5*sin(1.123*q8);
    ib_g = 0.5+0.5*sin(q8*1.576);
    ib_b = 0.5+0.5*cos(q8*1.465);
    q7 = 0.0001*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);
    ob_size = 0.95;
    monitor = q8;
    // per_pixel_1=rot=0.1*pow(-ang,3)-1.18*sin(ang);
    // per_pixel_2=zoom=2*sin(-rad)+1.3+ sin(rad);
    // per_pixel_3=dx = dx + 0.09*sin(q8*0.785);
    // per_pixel_4=dy = dy + 0.09*sin(q8*0.675);
    // per_pixel_5=zoom = zoom +q7;
  }
}
register_preset( Rovastar__VooVs_Organic_Light);
