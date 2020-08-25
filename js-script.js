  function superPowerClick(el) {
    alert('Ты нажал на супер-способность') 
  el.style.background = 'yellow';
  el.style.color = 'black';
  }
  function mainHeaderClick(al) {
  al.style.color = 'gray';
  }
var h3Showed = false;

function showHeaderContent() {
  const header3 = document.getElementById("1");
  
  header3.style.display = !h3Showed ? 'block' : 'none';
  h3Showed = !h3Showed;
}
 function marcuslogoClick() {
   alert('Ты нажал на персонажа')
 }
var h3Showed = false;
 
function seeInscriptionContent() {
  const header3 = document.getElementById("2");
  
  header3.style.display = !h3Showed ? 'block' : 'none';
  h3Showed = !h3Showed;
}