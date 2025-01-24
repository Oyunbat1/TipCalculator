// function fivePersent() {
//   const getInput = document.getElementById("input-bill").value; //x
//   const finalOutput = (getInput * 5) / 100;
//   document.getElementById("num").innerHTML = finalOutput;
//   document.getElementById('input-bill').value = '0';
// }
// function tenPersent() {
//   const getInput = document.getElementById("input-bill").value; //x
//   const finalOutput = (getInput * 10) / 100;
//   document.getElementById("num").innerHTML = finalOutput;
//   document.getElementById('input-bill').value = '0';
// }

// function fifteenPersent() {
//   const getInput = document.getElementById("input-bill").value; //x
//   const finalOutput = (getInput * 15) / 100;
//   document.getElementById("num").innerHTML = finalOutput;
//   document.getElementById('input-bill').value = '0';
// }

// function twentyfivePersent() {
//   const getInput = document.getElementById("input-bill").value; //x
//   const finalOutput = (getInput * 25) / 100;
//   document.getElementById("num").innerHTML = finalOutput;
//   document.getElementById('input-bill').value = '0';
// }

// function thirtyfivePersent() {
//   const getInput = document.getElementById("input-bill").value;
//   const finalOutput = (getInput * 35) / 100;
//   document.getElementById("num").innerHTML = finalOutput;
//   document.getElementById('input-bill').value = '0';
// }

// function fifty() {
//   const getInput = document.getElementById("input-bill").value;
//   const finalOutput = (getInput * 50) / 100;
//   document.getElementById("num").innerHTML = finalOutput;
//   document.getElementById('input-bill').value = '0';
// }
// function sixtyfive() {
//   const getInput = document.getElementById("input-bill").value;
//   const finalOutput = (getInput * 65) / 100;
//   document.getElementById("num").innerHTML = finalOutput;
//   document.getElementById('input-bill').value = '0';
// }
// function eighty() {
//   const getInput = document.getElementById("input-bill").value;
//   const finalOutput = (getInput * 80) / 100;
//   document.getElementById("num").innerHTML = finalOutput;
//   document.getElementById('input-bill').value = '0';
// }



const tipsContainer = document.getElementById('buttons');
const tipsRef = document.getElementsByClassName('tip');

for (let i = 0 ; i < tipsRef.length ; i++){
  tipsRef[i].addEventListener('click',(event)=>{
    const tipStrings = event.target.innerHTML;
    const tipGetValues = parseFloat(tipStrings.replace('%', ''));
    const input = document.getElementById('input-bill');
    const inputValue = parseFloat(input.value);
    const inputCustomer = document.getElementById('input-customer')
    const inputCustomerValue = parseFloat(inputCustomer.value);
    if (!isNaN(inputValue && inputCustomer)) {
      const Result = (inputValue * tipGetValues) / 100;
      const sum = Result + inputValue;
      const finalResult = sum / inputCustomerValue;
      document.getElementById('num').innerHTML = finalResult;
    } else {
      alert('Хоосон зайгаа бөглөнө үү бро !!!')
    }
  })
}

document.getElementById('reset').addEventListener('click', () => {
  document.getElementById('input-bill').value = '';
  document.getElementById('num').textContent = '0.00';
  document.getElementById('input-customer').value =''
})

