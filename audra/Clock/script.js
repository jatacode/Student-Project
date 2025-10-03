function updatejam(){
const waktu= new Date()
const jam= String(waktu.getHours())
const menit= String(waktu.getMinutes())
const detik= String(waktu.getSeconds())
console.log(jam)
const tampilkan= document.querySelector("#clock") 
const background= document.querySelector("body")
tampilkan.innerHTML= jam+":"+menit+":"+detik
if (waktu.getHours()>=6 && waktu.getHours()<=12) {
background.style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGSXNi7Ned4lCiS2e12Q7YZRqBbDeAMfJ-Bw&s')"
background.style.backgroundSize="cover"
} 
else if (waktu.getHours()>=13 && waktu.getHours()<=18) {
background.style.backgroundImage="url('https://th.bing.com/th/id/OIP.kM5oxSyL2LxJlu1HbxaQFQHaFj?w=257&h=193&c=7&r=0&o=5&dpr=2&pid=1.7')"
background.style.backgroundSize="cover"
}
else if (waktu.getHours()>=18 && waktu.getHours()<=6) {
background.style.backgroundImage="url('https://th.bing.com/th/id/OIP.Mg3FmXa_m7WkJk-a-5zscwHaEX?w=307&h=181&c=7&r=0&o=5&dpr=2&pid=1.7')"
background.style.backgroundSize="cover"
}
}
setInterval(updatejam,1000)
let stopwatchInterval;
let detik =0;
let jam =0;
let menit =0;
let milidetik =0;
function startstopwatch(){
if (stopwatchInterval) return;
stopwatchInterval = setInterval(() => {
milidetik++;
if (milidetik===100){
	milidetik = 0;
	detik++;
}
if (detik==60){
	detik = 0;
	menit++;
}
if (menit==60){
	menit = 0;
	jam++;
}
const stopwatch = document.querySelector("#stopwatch")
stopwatch.innerHTML= jam+":"+menit+":"+detik+":"+milidetik
},10)
}
function stopstopwatch(){
clearInterval(stopwatchInterval);
stopwatchInterval=null;
}
function resetstopwatch(){
clearInterval(stopwatchInterval);
stopwatchInterval=null;
milidetik=0;
detik=0;
jam=0;
menit=0;
const stopwatch = document.querySelector("#stopwatch")
stopwatch.innerHTML=jam+":"+menit+":"+detik+":"+milidetik
}