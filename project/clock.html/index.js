setInterval(() => {
    d = new Date();
    htime = d.getHours();
    hmin =d.getMinutes();
    hsec =d.getSeconds();

    hrrotattion = 30*htime + hmin/2;
    nmrrotation = 6*hmin;
    srrotation = 6*hsec;
   hour.style.transform = `rotate(${hrrotattion}deg)`;
   min.style.transform = `rotate(${nmrrotation}deg)`;
   sec.style.transform = `rotate(${srrotation}deg)`;

}, 1000); 