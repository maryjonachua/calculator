let data = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let calculation = "";
let arrayButton = Array.from(buttons);
arrayButton.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            calculation = eval(calculation);
            data.value =calculation ;
        }

        else if(e.target.innerHTML == 'C'){
            calculation = "";
            data.value = calculation;
        }
        else if(e.target.innerHTML == 'AC'){
            calculation = calculation.substring(0, calculation.length-1);
            data.value = calculation;
        }

else if(e.target.innerHTML == '%'){

let result = eval(calculation)/100;
calculation = result;
data.value = calculation;
}
        else{
            calculation += e.target.innerHTML;
            data.value = calculation;
        }
        
    })
})
