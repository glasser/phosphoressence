function Zylot__De_arangedment_strain() {
  with (Math) {
    fRating=2;
    gamma=2;
    decay=0.97;
    echo_zoom=2;
    echo_alpha=0;
    echo_orient=0;
    wave_mode=2;
    wave_additive=1;
    wave_usedots=0;
    bWaveThick=0;
    bModWaveAlphaByVolume=0;
    wave_brighten=1;
    wrap=1;
    darken_center=0;
    bRedBlueStereo=0;
    brighten=0;
    darken=0;
    solarize=0;
    invert=0;
    wave_a=1.691361;
    fWaveScale=3.300357;
    fWaveSmoothing=0.819;
    wave_mystery=-0.5;
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
    wave_r=0.5;
    wave_g=0.5;
    wave_b=0.5;
    wave_x=0.5;
    wave_y=0.5;
    ob_size=0.31;
    ob_r=0.3;
    ob_g=0;
    ob_b=0;
    ob_a=0;
    ib_size=0.01;
    ib_r=0.25;
    ib_g=0.25;
    ib_b=0.25;
    ib_a=0;
    mv_x=64;
    mv_y=1.488;
    mv_dx=0;
    mv_dy=0;
    mv_l=0.5;
    mv_r=1;
    mv_g=1;
    mv_b=1;
    mv_a=0;
    warp = 0;
    wave_r = .6+(.3*sin(time));
    wave_g = .6+(.3*sin(time*.999));
    wave_b = .6+(.3*sin(time*.777));
    // per_pixel_1=dx = if_milk(above(treb,1.4),.01*atan((rad)/.1*sin((x*y)*100000*(.1*sin(time)))),dy);
    // per_pixel_2=dy = if_milk(above(bass,1.4),.01*atan((rad)/.1*sin((x*y)*100000*(.1*sin(time)))),-dy);
    // per_pixel_3=zoom = zoom + (dx+dy)*2;
    // per_pixel_4=rot = if_milk(above(bass,1.5),zoom - 1,-zoom + 1);
    // per_pixel_5=cx = dy;
    // per_pixel_6=cy = dx;
  }
}
register_preset( Zylot__De_arangedment_strain);
