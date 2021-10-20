function check() {
    let mark = 0;
    let q1 = document.getElementsByName("q1"), q2 = document.getElementsByName("q2"), q3 = document.getElementsByName("q3"), q4 = document.getElementsByName("q4"), q5 = document.getElementById("t51").value, q6 = document.getElementById("t61").value;
    if (q1[0].checked) { mark += 1; }
    if (q2[2].checked) { mark += 1; }
    if (q3[0].checked && !q3[1].checked && !q3[2].checked && q3[3].checked) { mark += 1; }
    if (q4[0].checked && q4[1].checked && !q4[3].checked && !q4[2].checked) { mark += 1; }
    if (q5 == 4) { mark += 1; }
    if (q6 == 50) { mark += 1;}
    document.getElementById("result").innerHTML = "Бал: " + mark + "/6";
  }