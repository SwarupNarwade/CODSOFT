let Calculator_Input_Number_v =document.getElementById('Calculator_Input_Number');
let Calculator_Input_Number_previous_v =document.getElementById('Calculator_Input_Number_previous');

let Calculator_Input_AC_V =document.getElementById('Calculator_Input_AC');
Calculator_Input_AC_V.addEventListener('click',()=>{
    Calculator_Input_Number_v.value='';
    Calculator_Input_Number_previous_v.value='';
});
let DisplayValue;
let DisplayEqual;
function display(DisplayValue){
    Calculator_Input_Number_v.value+=DisplayValue;
}
function DisplaySolve(){
    let eq=Calculator_Input_Number_v.value;
    Calculator_Input_Number_previous_v.value=eq;
    let y=eval(eq);
    Calculator_Input_Number_v.value=y;
}

