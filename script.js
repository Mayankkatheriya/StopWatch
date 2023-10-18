let milliSeconds = document.querySelector(".milli-second h2");
let seconds = document.querySelector(".second h2");
let minutes = document.querySelector(".minute h2");
let hours = document.querySelector(".hour h2");
let recordContainer = document.querySelector(".records");
let list = document.querySelector("ul");
let lapbtn = document.querySelector("#lap");
let listCount = 1;
let timerStart = false;
let ms = 0,
  s = 0,
  m = 0,
  h = 0;
var timer;
function startStopWatch() {
  milliSeconds.style.transform = "scale(1.5)";
  lapbtn.style.display = "inline";
  timerStart = true;
  clearInterval(timer);
  timer = setInterval(updateStopWatch, 10);
}
function updateStopWatch() {
  ms++;
  if (ms == 100) {
    ms = 0;
    s++;
  }
  if (s == 60) {
    s = 0;
    m++;
  }
  if (m == 60) {
    m = 0;
    h++;
  }
  ms = String(ms).padStart("2", "0");
  s = String(s).padStart("2", "0");
  m = String(m).padStart("2", "0");
  h = String(h).padStart("2", "0");
  milliSeconds.innerText = ms;
  seconds.innerText = s;
  minutes.innerText = m;
  hours.innerText = h;
}

function resetStopWatch() {
  recordContainer.style.display = "none";
  lapbtn.style.display = "none";

  timerStart = false;
  listCount = 1;
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  clearInterval(timer);
  milliSeconds.innerText = "00";
  seconds.innerText = "00";
  minutes.innerText = "00";
  hours.innerText = "00";
}
function stopStopWatch() {
  clearInterval(timer);
}
function addRecords() {
  if (timerStart) {
    recordContainer.style.display = "block";
    listCount = String(listCount).padStart("2", "0");
    let li = document.createElement("li");
    li.innerHTML = `<div class = "delete">❌</div><span>${listCount}.</span> ${hours.innerText}:${minutes.innerText}:${seconds.innerText}:${milliSeconds.innerText}`;
    list.appendChild(li);
    listCount++;
    activateDelete();
    
  }
}
function activateDelete(){
  const deleteBtns=[...document.querySelectorAll(".delete")]
  if(deleteBtns.length==0){
    recordContainer.style.display = "none"
  }
  for(let i=0 ; i<deleteBtns.length ; i++){
    deleteBtns[i].addEventListener('click', (e)=>{
      e.target.parentElement.remove();
    })
  }
}