// =========================
// ANMOL DIGITAL POINT
// script.js
// =========================

// Live Notice
const notices = [
"🎉 Welcome to ANMOL DIGITAL POINT",
"🪪 Aadhaar Update Available",
"💳 PAN Card Apply Here",
"📱 Mobile Unlock Available",
"📄 Online Form Fill-up Available"
];

let index = 0;

function changeNotice(){

const notice = document.getElementById("notice");

if(notice){

notice.innerHTML = notices[index];

index++;

if(index>=notices.length){

index=0;

}

}

}

setInterval(changeNotice,3000);

// Dark Mode

function toggleTheme(){

document.body.classList.toggle("light");

}

// Scroll Button

window.onscroll=function(){

let btn=document.getElementById("topBtn");

if(btn){

if(document.documentElement.scrollTop>200){

btn.style.display="block";

}else{

btn.style.display="none";

}

}

};

function topFunction(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

// Hindi English

function hindi(){

alert("हिंदी भाषा जल्द उपलब्ध होगी");

}

function english(){

alert("English Language Selected");

}

console.log("ANMOL DIGITAL POINT Loaded Successfully");
