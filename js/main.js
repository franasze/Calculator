console.log("Hi!");

// console.log(1 == "1"); true
// console.log(1 === "1"); false

// document.querySelector("#plus-button").addEventListener("click", () =>{
//   const resultElement = document.querySelector("#resault");
//   resultElement.innerText = parseFloat(resultElement.innerText) + 1;
// });


function  numberClickListiner(number) {
  return () => {
    const resultElement = document.querySelector("#number");
    if (resultElement.innerText === '0') {
      resultElement.innerText = number;
    } else {
      resultElement.innerText = resultElement.innerText + number;
    }
  };
}
document.querySelector("#one-button").addEventListener("click",numberClickListiner(1));
document.querySelector("#two-button").addEventListener("click",numberClickListiner(2));
document.querySelector("#three-button").addEventListener("click",numberClickListiner(3));
document.querySelector("#four-button").addEventListener("click",numberClickListiner(4));
document.querySelector("#five-button").addEventListener("click",numberClickListiner(5));
document.querySelector("#six-button").addEventListener("click",numberClickListiner(6));
document.querySelector("#seven-button").addEventListener("click",numberClickListiner(7));
document.querySelector("#eight-button").addEventListener("click",numberClickListiner(8));
document.querySelector("#nine-button").addEventListener("click",numberClickListiner(9));
document.querySelector("#zero-button").addEventListener("click",numberClickListiner(0));

document.querySelector("#dot-button").addEventListener("click", ()=>{
  const Element = document.querySelector("#number");
  if(Element.innerText.indexOf('.') === -1){
    Element.innerText = Element.innerText + '.';
  }
});

document.querySelector("#remove-last-char-button").addEventListener("click", () => {
  const Element = document.querySelector("#number");
  element.innerText.substring(0,element.innerText.length - 1);

  if(element.innerText.length === 0){
    element.innerText = '0';
  }

});

  document.querySelector("#remove-all-button").addEventListener("click", () => {
    document.querySelector("#number").innerText = '0';
    document.querySelector("#number").innerText = '0';

});



document.querySelector("#plus-button").addEventListener("click", () => {
  const resultElement = document.querySelector("#result");
  const numberElement = document.querySelector("#number");

  resultElement.innerText = parseFloat(resultElement.innerText) - parseFloat(numberClickListiner())
  numberElement.innerHTML = '0';
});

function operationClickListener(operation){
  return () => {
  const resultElement = document.querySelector("#result");
  const numberElement = document.querySelector("#number");

  resultElement.innerText = Mth.round(operation(parseFloat(resultElement.innerText),parseFloat(numberElement.innerText *1000) / 1000
  numberElement.innerHTML = '0';
  }
}

document.querySelector("#plus-button").addEventListener("click",operationClickListener((a,b) => a+b));
document.querySelector("#minus-button").addEventListener("click",operationClickListener((a,b) => a-b));
document.querySelector("#mulitply-button").addEventListener("click",operationClickListener((a,b) => a*b);
document.querySelector("#divide-button").addEventListener("click",operationClickListener((a,b) => a/b));

