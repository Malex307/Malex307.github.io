function validate(){
    let error = true;
    if (!document.getElementById('fullname').value){
        error = false;
        document.getElementById('error_fullname').innerHTML = "Обов'язкове поле";
    }else{
        document.getElementById('error_fullname').innerHTML = "";
        if (!document.getElementById('fullname').value.match("[A-Z][a-z]*.[A-Z][a-z]*.[A-Z][a-z]*")){
            error = false;
            document.getElementById('error_fullname').innerHTML = "Неправильно введено";
        }else {
            document.getElementById('error_fullname').innerHTML = "";
        }
    }

    if (document.getElementById('count').value > 100){
        error = false;
        document.getElementById('error_count').innerHTML = "Забагато";
    }else {
        document.getElementById('error_count').innerHTML = "";
    }

    if (document.getElementById('email').value != "" && !document.getElementById('email').value.match("[a-z]*@[a-z]*\.[a-z]*")){
        error = false;
        document.getElementById('error_email').innerHTML = "Неправильно введено";
    }else {
        document.getElementById('error_email').innerHTML = "";
    }

    if (document.getElementById('number').value != "" && !document.getElementById('number').value.match("\\+380\\s\\(\\d+\\) [0-9]{3}-[0-9]{2}-[0-9]{2}")){
         error = false;
         document.getElementById('error_number').innerHTML = "Неправильно введено";
    }else {
        document.getElementById('error_number').innerHTML = "";
    }
    if (error) {
        toTable();
    }
}

function toTable(){
    let table = document.getElementsByTagName('label');
    for (let i = 0; i < table.length; i++) {
        const id = table[i].htmlFor

        try {
            let value = document.getElementById(id).value
            document.getElementById('table').innerHTML += "<p>"+table[i].innerText+" "+value+"</p>";
        }catch (e) {
        }
    }
}
