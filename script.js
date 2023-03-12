function calcule(){
    var height = document.getElementById(`height`).value /100;
     var weight =document.getElementById(`weight`).value;

   var imc =  weight / height ** 2;
   if (imc<18.5) {
      window.alert(`voce estar magro`);
   } else if (imc < 24.9)  {
    window.alert(`voce estar normal`);
    }else if (imc < 29.9) {
        window.alert(`voce estar com sobrepeso`);
    } else if (imc < 39.9) {
        window.alert(`voce estar com obesidade`);
    }else if (imc > 39.9) {
        window.alert(`voce estar com obesidade morbida`); 
    }
    document.getElementById(`text_area`).innerText`calculou`
}