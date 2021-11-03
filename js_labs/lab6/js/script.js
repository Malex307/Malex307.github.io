const emailRegex = /^([a-z0-9]+)(\.[a-z0-9]+)*@([a-z0-9]+)(\.[a-z0-9]+)*$/i;
const fullnameRegex = /^([A-ZА-Я])([a-zа-я]+)/;
const indexRegex = /^([0-9]){5}$/;
const loginRegex = /^([a-zA-Z\-])+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{6,}$/;

function validate(){
    let firstName = fullnameRegex.test($("#name").val());
    $("#name_message").text( firstName? "✔" : "Ім'я повинно починатись з великої літери")

    let lastName = fullnameRegex.test($("#surname").val());
    $("#lnameMessage").text( lastName ? "✔" : "Прізвище повинно починатись з великої літери")

    let login = loginRegex.test($("#nickname").val());
    $("#loginMessage").text( login ? "✔" : "Логін повинен бути написаний лише латиницею")

    let password = passwordRegex.test($("#password").val());
    $("#passwordMessage").text( password ? "✔" : "Пароль повинень містити мінімум 6 символів (З яких мінімум по 1 букві і цифрі)")

    let postcode = indexRegex.test($("#zip_code").val());
    $("#postcodeMessage").text( postcode ? "✔" : "Повинен містити 5 цифр")

    let email = emailRegex.test($("#email").val());
    $("#emailMessage").text( email ? "✔" : "Не відповідає структурі електронної пошти")
}

function no_zeros(array){
    let new_array = []
    array.forEach(e => {
        if (e !== null & e !== 0 & e !== ''){
            console.log(e);
            new_array.push(e)
        }
    });
    return new_array
}

function reverser(string){
    return string.split("").reverse().join("");
}

function replace(string){
    arr = string.split(" ")
    temp = arr[1]
    arr[1] = arr[2]
    arr[2] = temp
    return arr.join(",")
}