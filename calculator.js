function fivePersent() {
    const getInput = document.getElementById("input-bill").value; //x
    const finalOutput = (getInput * 5) / 100;
    document.getElementById("num").innerHTML = finalOutput;
    document.getElementById('input-bill').value = '0';
  }
  function tenPersent() {
    const getInput = document.getElementById("input-bill").value; //x
    const finalOutput = (getInput * 10) / 100;
    document.getElementById("num").innerHTML = finalOutput;
    document.getElementById('input-bill').value = '0';
  }
  
  function fifteenPersent() {
    const getInput = document.getElementById("input-bill").value; //x
    const finalOutput = (getInput * 15) / 100;
    document.getElementById("num").innerHTML = finalOutput;
    document.getElementById('input-bill').value = '0';
  }
  
  function twentyfivePersent() {
    const getInput = document.getElementById("input-bill").value; //x
    const finalOutput = (getInput * 25) / 100;
    document.getElementById("num").innerHTML = finalOutput;
    document.getElementById('input-bill').value = '0';
  }
  
  function thirtyfivePersent() {
    const getInput = document.getElementById("input-bill").value;
    const finalOutput = (getInput * 35) / 100;
    document.getElementById("num").innerHTML = finalOutput;
    document.getElementById('input-bill').value = '0';
  }
  
  function fifty() {
    const getInput = document.getElementById("input-bill").value;
    const finalOutput = (getInput * 50) / 100;
    document.getElementById("num").innerHTML = finalOutput;
    document.getElementById('input-bill').value = '0';
  }
  function sixtyfive() {
    const getInput = document.getElementById("input-bill").value;
    const finalOutput = (getInput * 65) / 100;
    document.getElementById("num").innerHTML = finalOutput;
    document.getElementById('input-bill').value = '0';
  }
  function eighty() {
    const getInput = document.getElementById("input-bill").value;
    const finalOutput = (getInput * 80) / 100;
    document.getElementById("num").innerHTML = finalOutput;
    document.getElementById('input-bill').value = '0';
  }
  
  document.getElementById('reset').addEventListener('click',()=>{
     document.getElementById('input-bill').value = '0';
     document.getElementById('num').textContent = '0.00';
  })