// //-------sum------
// function sum(num1, num2){
//   return num1 + num2
// }
//
// document.querySelector("#sum").addEventListener('click',
//   function () {
//     const number1 = Number(document.querySelector("#num1").value);
//     const number2 = Number(document.querySelector("#num2").value);
//     document.querySelector("#result").textContent = sum(number1, number2);
//   }
// );
//
// //-------substraction------
//
// function sub(num1, num2){
//   return num1 - num2
// }
//
// document.querySelector("#sub").addEventListener('click',
//   function () {
//     const number1 = Number(document.querySelector("#num1").value);
//     const number2 = Number(document.querySelector("#num2").value);
//     document.querySelector("#result").textContent = sub(number1, number2);
//   }
// );
//
// //-------------div-----------
//
// function div(num1, num2){
//   return num1 / num2
// }
//
// document.querySelector("#div").addEventListener('click',
//   function () {
//     const number1 = Number(document.querySelector("#num1").value);
//     const number2 = Number(document.querySelector("#num2").value);
//     document.querySelector("#result").textContent = div(number1, number2);
//   }
// );
//
// //-------------mul-----------
//
// function mul(num1, num2){
//   return num1 * num2
// }
//
// document.querySelector("#mul").addEventListener('click',
//   function () {
//     const number1 = Number(document.querySelector("#num1").value);
//     const number2 = Number(document.querySelector("#num2").value);
//     document.querySelector("#result").textContent = mul(number1, number2);
//   }
// );
//
//
// //--------------mod--------------
//
// function mod(num1, num2){
//   return num1 % num2
// };
//
//
// document.querySelector("#mod").addEventListener('click',
//   function () {
//     const number1 = Number(document.querySelector("#num1").value);
//     const number2 = Number(document.querySelector("#num2").value);
//     document.querySelector("#result").textContent = mod(number1, number2);
//   }
// );
//
//
// //----------------uppdate-----------------
// //---------------clearing values----------
//
// document.querySelector("#clear").addEventListener('click',
//   function () {
//     document.querySelector("#result").textContent = "0";
//     document.querySelector("#num1").value = "";
//     document.querySelector("#num2").value = "";
//   }
// );




//---------------switch-------------

document.querySelector("#buttons").addEventListener("click",
  function () {

    let buttonName = event.target.id;

    switch (buttonName) {
      case "sum":
        document.querySelector("#sum").addEventListener("click",
        function () {
          const number1 = Number(document.querySelector("#num1").value);
          const number2 = Number(document.querySelector("#num2").value);
          document.querySelector("#result").textContent = sum(number1, number2);
        }
        );
        break;
      case "sub":
        document.querySelector("#sub").addEventListener("click",
        function () {
          const number1 = Number(document.querySelector("#num1").value);
          const number2 = Number(document.querySelector("#num2").value);
          document.querySelector("#result").textContent = sub(number1, number2);
        }
        );
        break;
      case "div":
        document.querySelector("#div").addEventListener("click",
        function () {
          const number1 = Number(document.querySelector("#num1").value);
          const number2 = Number(document.querySelector("#num2").value);
          document.querySelector("#result").textContent = div(number1, number2);
        }
        );
        break;
      case "mul":
        document.querySelector("#mul").addEventListener("click",
        function () {
          const number1 = Number(document.querySelector("#num1").value);
          const number2 = Number(document.querySelector("#num2").value);
          document.querySelector("#result").textContent = mul(number1, number2);
        }
        );
        break;
      case "mod":
        document.querySelector("#mod").addEventListener("click",
        function () {
          const number1 = Number(document.querySelector("#num1").value);
          const number2 = Number(document.querySelector("#num2").value);
          document.querySelector("#result").textContent = mod(number1, number2);
        }
        );
        break;
      case "clear":
        document.querySelector("#clear").addEventListener('click',
        function () {
          document.querySelector("#result").textContent = "0";
          document.querySelector("#num1").value = "";
          document.querySelector("#num2").value = "";
        }
        );
        break;
      default:
        break;

    }
  }
);

//--------------Helper functions--------
//-------------Addition-----------------
function sum(num1, num2){
  return num1 + num2
}

//-----------Subtraction----------------
function sub(num1, num2){
  return num1 - num2
}

//-------------Division-----------------
function div(num1, num2){
  return num1 / num2
}

//----------Multiplication--------------
function mul(num1, num2){
  return num1 * num2
}

//--------------Module------------------
function mod(num1, num2){
  return num1 % num2
};

//--------------------------------------

// 1 event listenetis annt conteinerio
// 2 issiconsolinti targeta
// 3 tam paciam if isconsolinti targeto parametras, kuris mygtukas buvo paspaustas




















// document.querySelector("#button2").addEventListener('mouseover',
//   function (event) {
//     console.log(event);
//   }
// );
//
// document.querySelector("body").addEventListener('keydown',
// function (event) {
//   event.target.style.background = "salmon";
// }
// );
//
// document.querySelector("body").addEventListener('keyup',
// function (event) {
//     event.target.style.background = "white";
// }
// );
//
//
// document.querySelector("#button3").addEventListener('mouseover',
//   function (event) {
//   event.target.style.color = "red";
//   }
// );
//
// document.querySelector("#button3").addEventListener('mouseout',
//   function (event) {
//   event.target.style.color = "";
//   }
// );
//
//
//
// document.querySelector("#button4").addEventListener('click',
//   function (event) {
//     event.target.textContent = "lol";
//   }
// );
