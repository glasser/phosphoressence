function EMPR__Random__Look_mama,_Im_on_TV_2() {
  with (Math) {
    fRating=2;
    gamma=1;
    decay=1;
    echo_zoom=1;
    echo_alpha=0;
    echo_orient=3;
    wave_mode=7;
    wave_additive=0;
    wave_usedots=0;
    bWaveThick=1;
    bModWaveAlphaByVolume=0;
    wave_brighten=1;
    wrap=1;
    darken_center=0;
    bRedBlueStereo=0;
    brighten=0;
    darken=0;
    solarize=0;
    invert=0;
    wave_a=0.001;
    fWaveScale=0.6401;
    fWaveSmoothing=0.27;
    wave_mystery=-0.250278;
    fModWaveAlphaStart=0.75;
    fModWaveAlphaEnd=0.95;
    warp_speed=5.9957;
    warp_scale=1.331;
    zoomexp=1.01;
    fShader=0;
    zoom=0.998531;
    rot=0.002;
    cx=0.5;
    cy=0.5;
    dx=1;
    dy=1;
    warp=0.01;
    sx=1;
    sy=1;
    wave_r=0.840465;
    wave_g=0.977183;
    wave_b=0.577708;
    wave_x=0.68159;
    wave_y=0.841076;
    ob_size=0.01;
    ob_r=0.364951;
    ob_g=0.522256;
    ob_b=0.9619;
    ob_a=0.345787;
    ib_size=0;
    ib_r=0.691402;
    ib_g=0.523066;
    ib_b=0.706478;
    ib_a=0.808526;
    mv_x=0;
    mv_y=48;
    mv_dx=0.479713;
    mv_dy=-0.559295;
    mv_l=5;
    mv_r=0.376825;
    mv_g=0.65155;
    mv_b=0.954265;
    mv_a=0.602945;
    ob_r = 0.9 - 0.7*(0.5*sin(time*0.701)+ 0.3*cos(time*0.438));
    ob_g = 0.6- 0.4*sin(time*2.924);
    ob_b = 0.35 - 0.3*cos(time*0.816);
    cx = cx - 0.4*sin(time*0.342);
    cy = cy + 0.6*sin(time*0.433);
    warp =0;
    ib_size = 0.08;
    ib_r = ib_r + 0.5*sin(time*3.034);
    ib_g = ib_g + 0.5*sin(time*2.547);
    ib_b = ib_b - 0.5*sin(time*1.431);
    dx = dx -0.008*sin(time*0.23);
    dy = dy - 0.008*sin(time*0.2);
    dy = wave_r * wave_g;
    wave_g = treb - wave_r;
    wave_b = wave_r * bass;
    dy=if_milk(below(dy,-1), -1, dy);
    dy=if_milk(above(dy,1.0), 1.0, dy);
    wave_b=if_milk(below(wave_b,0.0), 0.0, wave_b);
    wave_b=if_milk(above(wave_b,1.0), 1.0, wave_b);
    wave_g=if_milk(below(wave_g,0.0), 0.0, wave_g);
    wave_g=if_milk(above(wave_g,1.0), 1.0, wave_g);
    wave_g=if_milk(below(wave_g,0.0), 0.0, wave_g);
    wave_g=if_milk(above(wave_g,1.0), 1.0, wave_g);
    wave_b=if_milk(below(wave_b,0.0), 0.0, wave_b);
    wave_b=if_milk(above(wave_b,1.0), 1.0, wave_b);
    // per_pixel_1=box=(1-rad)+0.7*abs(x*3-0.4*sin(q1))%2 + 0.8*abs(y*3+0.4*sin(q1))%2;
    // per_pixel_2=q1 = 8.05+(sin(x+0.137*time)-cos(y+0.513*time));
    // per_pixel_3=zoom = if_milk(above(box,1),q1*.1,zoom);
    // per_pixel_4=rot = if_milk(above(box,1),1*sin(0.385*time)-time*.1,rot);
    // per_pixel_5=zoom = b + y*1.2;
    // per_pixel_6=dx = time * a;
    // per_pixel_7=zoom=if_milk(below(zoom,0.01), 0.01, zoom);
    // per_pixel_8=zoom=if_milk(above(zoom,100), 100, zoom);
    // per_pixel_9=dx=if_milk(below(dx,-1), -1, dx);
    // per_pixel_10=dx=if_milk(above(dx,1.0), 1.0, dx);
  }
}
register_preset( EMPR__Random__Look_mama,_Im_on_TV_2);
