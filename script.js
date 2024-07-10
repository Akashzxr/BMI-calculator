let btn = document.getElementById('submit');


btn.addEventListener('click',()=>{
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    let meter = height / 100;
    let bmi = Math.round(weight /  meter ** 2 );

    let result = document.getElementById('result');
    let des = document.getElementById('description');

    result.innerHTML = bmi;

    if(bmi <= 16 || bmi < 18){
        des.innerHTML = "underWeight";
    }
    else if(bmi >= 18 && bmi < 25){
        des.innerHTML = "Normal";
    }
    else if(bmi >= 25 && bmi < 30){
        des.innerHTML = "Overweight";
    }
    else if(bmi >= 30) {
        des.innerHTML = "Obese";
    }
   
    
})


let reset = document.getElementById('reset');
let des = document.getElementById('description');

reset.addEventListener('click',()=>{
    result.innerHTML = "0";
    des.innerHTML = "";
})


