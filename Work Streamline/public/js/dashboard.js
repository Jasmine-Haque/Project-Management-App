const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const themeToggler2 = document.querySelector(".theme-toggler-1");

// show sidebar
menuBtn.addEventListener('click', () => {
   sideMenu.style.display = 'block';
})

// close sidebar
closeBtn.addEventListener('click', () => {
   sideMenu.style.display = 'none';
})

// ------------------------------------ change theme for large screen device ----------------------------------------
themeToggler.addEventListener('click', () => {
   document.body.classList.toggle('dark-theme-variables');

   themeToggler.querySelector('span:nth-child(1) ').classList.toggle('active')
   themeToggler.querySelector('span:nth-child(2) ').classList.toggle('active')

})

//  --------------------------------------- change theme For Small Screen Devices ----------------------------------
themeToggler2.addEventListener('click', () => {
   document.body.classList.toggle('dark-theme-variables');

   themeToggler2.querySelector('span:nth-child(1) ').classList.toggle('active')
   themeToggler2.querySelector('span:nth-child(2) ').classList.toggle('active')

})

/* ------------------------------------ Calendar Date & Day Changer -----------------------------*/

const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const today = new Date();

const weekDays = [
   'Sunday',
   'Monday',
   'Tuesday',
   'Wednesday',
   'Thursday',
   'Friday',
   'Saturday',
];

const allMonths = [
   'January',
   'February',
   'March',
   'April',
   'May',
   'June',
   'July',
   'August',
   'September',
   'October',
   'November',
   'December',
];

date.innerHTML = (today.getDate() < 10 ? '0' : '') + today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();


/* ------------------------------------ Progress Bar Animation ---------------------------------*/

// For Total Projects in Stream-Line

let circularProgress = document.querySelector("#circular-1"),
   progressValue = document.querySelector("#progress-1");
let progressStartValue = 0,
   progressEndValue = 72,
   speed = 45;

let progress = setInterval(() => {
   progressStartValue++;
   progressValue.textContent = `${progressStartValue}%`
   circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`
   if (progressStartValue == progressEndValue) {
      clearInterval(progress);
   }
}, speed);

// For Completed Projects in Stream-Line

let circularProgress2 = document.querySelector("#circular-2"),
   progressValue2 = document.querySelector("#progress-2");
let progressStartValue2 = 0,
   progressEndValue2 = 51,
   speed2 = 45;

let progress2 = setInterval(() => {
   progressStartValue2++;
   progressValue2.textContent = `${progressStartValue2}%`
   circularProgress2.style.background = `conic-gradient(#7d2ae8 ${progressStartValue2 * 3.6}deg, #ededed 0deg)`
   if (progressStartValue2 == progressEndValue2) {
      clearInterval(progress2);
   }
}, speed);

// For In-Progress Projects in Stream-Line

let circularProgress3 = document.querySelector("#circular-3"),
   progressValue3 = document.querySelector("#progress-3");
let progressStartValue3 = 0,
   progressEndValue3 = 35,
   speed3 = 45;

let progress3 = setInterval(() => {
   progressStartValue3++;
   progressValue3.textContent = `${progressStartValue3}%`
   circularProgress3.style.background = `conic-gradient(#7d2ae8 ${progressStartValue3 * 3.6}deg, #ededed 0deg)`
   if (progressStartValue3 == progressEndValue3) {
      clearInterval(progress3);
   }
}, speed);

// For Waiting Projects in Stream-Line

let circularProgress4 = document.querySelector("#circular-4"),
   progressValue4 = document.querySelector("#progress-4");
let progressStartValue4 = 0,
   progressEndValue4 = 15,
   speed4 = 45;

let progress4 = setInterval(() => {
   progressStartValue4++;
   progressValue4.textContent = `${progressStartValue4}%`
   circularProgress4.style.background = `conic-gradient(#7d2ae8 ${progressStartValue4 * 3.6}deg, #ededed 0deg)`
   if (progressStartValue4 == progressEndValue4) {
      clearInterval(progress4);
   }
}, speed);

// For started project 

// Get the button element by its id
var project_1 = document.getElementById('projectS_1');

// Add a click event listener to the button
project_1.addEventListener('click', function () {
   // Display an alert when the button is clicked
   alert('Button clicked!');
});

var project_2 = document.getElementById('projectS_2');
project_2.addEventListener('click', function () {
   alert('Button clicked!');
});

var project_3 = document.getElementById('projectS_3');
project_3.addEventListener('click', function () {
   alert('Button clicked!');
});

// For Ongoing project 

// Get the button element by its id
var project_1 = document.getElementById('projectO_1');

// Add a click event listener to the button
project_1.addEventListener('click', function () {
   // Display an alert when the button is clicked
   alert('Button clicked!');
});

var project_2 = document.getElementById('projectO_2');
project_2.addEventListener('click', function () {
   alert('Button clicked!');
});

var project_3 = document.getElementById('projectO_3');
project_3.addEventListener('click', function () {
   alert('Button clicked!');
});

// For Completed project 

// Get the button element by its id
var project_1 = document.getElementById('projectC_1');

// Add a click event listener to the button
project_1.addEventListener('click', function () {
   // Display an alert when the button is clicked
   alert('Button clicked!');
});

var project_2 = document.getElementById('projectC_2');
project_2.addEventListener('click', function () {
   alert('Button clicked!');
});

var project_3 = document.getElementById('projectC_3');
project_3.addEventListener('click', function () {
   alert('Button clicked!');
});