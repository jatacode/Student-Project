function clock(){
	const now = new Date()
	let hour = now.getHours()
	let minute = now.getMinutes()
	let second = now.getSeconds()

	let form = ""
	if (hour>12){
		form = "PM"
	}else{
		form = "AM"
	}

	hour= hour%12
	if (hour==0){
		hour=12
	}

	if (hour<10){
		hour= "0"+hour
	}

	if (minute<10){
		minute= "0"+minute
	}
	if (second<10){
		second= "0"+second
	}
	const time = hour + " : " + minute + " : " + second
	console.log (time)

	const jam = document.querySelector("#clock")
	jam.innerHTML=time
}


setInterval(clock,1000)

//STOPWATCH
const stopwatch = document.querySelector("#stopwatch")
const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const reset = document.querySelector("#reset")

let menit=0
let detik=0
let milidetik=0
let stopwatch_run

start.addEventListener("click",function(){
	stopwatch_run=setInterval(()=>{
		milidetik++ //milidetik terus bertambah setiap 1 milisecond
		if(milidetik===100){
			milidetik=0
			detik++
		}
		if(detik===60){
			detik=0
			menit++
		}
		stopwatch.innerHTML=menit+":"+detik+":"+milidetik
	},10)
})