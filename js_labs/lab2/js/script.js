function time() {
    now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();
    timeStr = "" + hours;
    timeStr += ((minutes < 10) ? "/0" : "/") + minutes;
    timeStr += ((seconds < 10) ? "/0" : "/") + seconds;
    date = now.getDate();
    month = now.getMonth() + 1;
    year = now.getFullYear();
    console.log(year);
    dateStr = "" + year;
    dateStr += ((date < 10) ? "*0" : "*") + month;
    dateStr += "*" + date;
    document.clock.time.value = timeStr + '+' + dateStr;
    Timer = setTimeout("time()", 1000);
}

function create_calculate() {
    const numberAndOperation = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", "(", ")"];
    let keyboard = "";
    let i = 0;
    numberAndOperation.map((key, index) => {
        i++;
        keyboard += `<button style="width:30px" onclick="adding('${key}')">${key}</button>`
        if (i == 4) {
            keyboard += `<br>`
            i = 0
        }
    })
    document.getElementById("calculate_buttons").innerHTML = keyboard;
}

let expresion = "";

function adding(value) {
    expresion += value;
    document.getElementById("input_calculate").value = expresion;
}


function calculate() {
    let result = eval(expresion);
    document.getElementById("input_calculate").value = result;
    expresion = result;
}

function create_table() {
    let str = parseInt(main_form.t_str.value);
    let stb = parseInt(main_form.t_stb.value);
    let res_str = "<table>\n";
    for (var i = 1; i <= str; i++) {
        res_str += "<tr>\n";
        for (var j = 1; j <= stb; j++) {
            console.log(2*j+1);
            res_str += "<td>";
            res_str += "<input type = \"text\" id = \"_" + i + "_" + j + "\" value = \"" + (2*j+i) + "\">";
            res_str += "<\/td>\n";
        }
        res_str += "<\/tr>\n";
    }
    res_str += "<\/table>";
    main_div.innerHTML = res_str;
}

function calculate_table() {
    let res_str = "";
    let str_report = "";
    let str = parseInt(main_form.t_str.value);
    let stb = parseInt(main_form.t_stb.value);
    let sum = 0;
    for (let i = 1; i <= str; i++) {
        for (let j = 1; j <= stb; j++) {
            res_str = " parseInt(main_form._" + i + "_" + j + ".value);";
            sum +=eval(res_str);
        }
    }
    str_report += "Сумма = " + sum + ";\n"
    alert(str_report);
}