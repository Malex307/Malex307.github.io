function message(){
    alert('15.07.2003 місто Городенка');
}

function calculate(){
    let x = 4;
    alert(1/Math.sqrt(x));
}

function load(){
    console.log('test');
    document.getElementById('p2').innerText = "load made";
}

function mouseOut(){
    document.getElementById('p2').innerText = "mouse out";
}

function calculating(){
    let x, y, d;
    x = parseInt(main_form.t_x.value);
    y = parseInt(main_form.t_y.value);
    if(x*y != -100) d=2*x/y; else
    if(x*y != 20) d=(x*x*x) - 2*x*y; else
    d=x*x+4;
    main_form.t_d.value = "" + d;
}

function calculate_loop(){
    let x, y, d;
    x = parseInt(main_form.t_x.value);
    y = parseInt(main_form.t_y.value);
    d = 0;
    for(let i = 2; i < 7; i++){
        d += Math.pow(-1, i)*((factorial(i) - 2*x*y)/factorial(i+2))
    }
    main_form.t_d.value = "" + d;
}

function factorial(n){
    let sum = 1;
    for (let i = 1; i < n+1; i++){
        sum = sum * i;
    }
    return sum;
}

function continent(){
    let continent = main_form.continen.value;
    let density;
    let area;
    switch(continent){
        case 'Europa':
            density = 188;
            area = 10180000;
            main_form.density.value = density;
            main_form.area.value = area;
            break;
        case 'Africa':
            density = 87;
            area = 11730000;
            main_form.density.value = density;
            main_form.area.value = area;
            break;
        case 'Australia':
            density = 8.3;
            area = 3478200;
            main_form.density.value = density;
            main_form.area.value = area;
            break;
        case 'South America':
            density = 57;
            area = 6890000;
            main_form.density.value = density;
            main_form.area.value = area;
            break;
        case 'Asia':
            density = 246;
            area = 16920000;
            main_form.density.value = density;
            main_form.area.value = area;
            break;
        case 'North America':
            density = 57;
            area = 9460000;
            main_form.density.value = density;
            main_form.area.value = area;
            break;
        case 'Antarctica':
            density = 0.00078;
            area = 5300000;
            main_form.density.value = density;
            main_form.area.value = area;
            break;
        }
    console.log();
}

function calculate_population(){
    let density = main_form.density.value;
    let area = main_form.area.value;
    main_form.population.value = "" + density * area;
}

