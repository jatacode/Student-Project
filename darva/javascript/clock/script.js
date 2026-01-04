function clock(){
	const new Date()
	const hour=getHours()
	const minute=getMinutes()
	const second=getSeconds()
	const time = hour+" : "+minute+" : "+second
	console.log(time)
	if(hour>12)
	{
		form="PM"
	}else{
		form"AM"
	}
	hour = hour%12
	if(hour==0){
		hour=12
	}
	if(hour<10){
		hour"0"+hour
	}
	if(hour<10){
	minute"0"+minute
	}
	if(hour<10){
	second"0"+second
	}
	const jam = documen.querySelector("clock")
	jam.innerHTML=time
}
clock()
setInterval(clock(),1000)

const stopwatch=document.querySelector("#stopwatch")
const start=document.querySelector("#start")
const stop=document.querySelector("#stop")
const reset=document.querySelector("#reset")
let menit=0
let detik=0
let milidetik=0
let stopwatch_run                                               

start.addEventListener("click",function(){
	stopwatch_run=setInterval(()=>{
		milidetik++
	if(milidetik==100){
		milidetik=0
		detik++
	}
	if(detik==60){
		detik=0
		menit++
	}
	stopwatch.innerHTML=menit+" : "+detik+" : "+milidetik
	},10)
})
