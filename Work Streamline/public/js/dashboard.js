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
   progressEndValue = 100,
   speed = 45;
   


// For Completed Projects in Stream-Line

let circularProgress2 = document.querySelector("#circular-2"),
   progressValue2 = document.querySelector("#progress-2");
let progressStartValue2 = 0,
   progressEndValue2 = 51,
   speed2 = 45;


// For In-Progress Projects in Stream-Line

let circularProgress3 = document.querySelector("#circular-3"),
   progressValue3 = document.querySelector("#progress-3");
let progressStartValue3 = 0,
   progressEndValue3 = 35,
   speed3 = 45;

   

// For Waiting Projects in Stream-Line

let circularProgress4 = document.querySelector("#circular-4"),
   progressValue4 = document.querySelector("#progress-4");
let progressStartValue4 = 0,
   progressEndValue4 = 15,
   speed4 = 45;

/*
// For started project 

// Get the button element by its id
var project_1 = document.getElementById('projectS_1');

// Add a click event listener to the button
project_1.addEventListener('click', function () {
   // Display an alert when the button is clicked
   alert(`Description : UI Design
Assigned to : Ravi Mathur
Assigned on : 2/11/2023`);
});

var project_2 = document.getElementById('projectS_2');
project_2.addEventListener('click', function () {
   alert(`Description : Content Writing
Assigned to : Viraj Shukla
Assigned on : 1/11/2023`);
});

var project_3 = document.getElementById('projectS_3');
project_3.addEventListener('click', function () {
   alert(`Description : Langing Page
Assigned to : Abhinav Jaiswal
Assigned on : 4/11/2023`);
});

// For Ongoing project 

// Get the button element by its id
var project_1 = document.getElementById('projectO_1');

// Add a click event listener to the button
project_1.addEventListener('click', function () {
   // Display an alert when the button is clicked
   alert(`Description : Illustration
Assigned to : Jahnvi Mehta
Assigned on : 2/9/2023`);
});

var project_2 = document.getElementById('projectO_2');
project_2.addEventListener('click', function () {
   alert(`Description : UI Design
Assigned to : Ranvijay Jaiswal
Assigned on : 23/4/2023`);
});

var project_3 = document.getElementById('projectO_3');
project_3.addEventListener('click', function () {
   alert(`Description : Copywriting
Assigned to : Rohit Singh
Assigned on : 12/8/2023`);
});

// For Completed project 

// Get the button element by its id
var project_1 = document.getElementById('projectC_1');

// Add a click event listener to the button
project_1.addEventListener('click', function () {
   // Display an alert when the button is clicked
   alert(`Description : Designing
Assigned to : Pratik Ahuja
Assigned on : 24/2/2023`);
});

var project_2 = document.getElementById('projectC_2');
project_2.addEventListener('click', function () {
   alert(`Description : Responsive
Assigned to : Dilip Verma
Assigned on : 20/4/2023`);
});

var project_3 = document.getElementById('projectC_3');
project_3.addEventListener('click', function () {
   alert(`Description : Chat Bot
Assigned to : Sujay 
Assigned on : 13/6/2023`);
});
*/

function showProgress(circularProgress, progressValue, percentage)
{
   if(percentage == 0)
   {
      return;
   }
   console.log(percentage);
   let startValue = 0;
   let endValue = percentage * 100;
   console.log("End Value: " + endValue);
   
   let speed = 45;
   
   let currentValue = startValue;
   let progress = setInterval(() => {
      console.log(currentValue);
      currentValue++;
      
      progressValue.textContent = `${currentValue}%`
      circularProgress.style.background = `conic-gradient(#7d2ae8 ${currentValue * 3.6}deg, #ededed 0deg)`
      if (currentValue >= endValue) {
         clearInterval(progress);
      }
   }, speed);
}

function loadVariousProgresses(totalPercent, completedPercent, onGoingPercent, waitingPercent)
{
   showProgress(circularProgress, progressValue, totalPercent);
   showProgress(circularProgress2, progressValue2, completedPercent);
   showProgress(circularProgress3, progressValue3, onGoingPercent);
   showProgress(circularProgress4, progressValue4, waitingPercent);
}


loadVariousProgresses(1.0, 2.0/9.0 ,0.3,4.0/9.0);