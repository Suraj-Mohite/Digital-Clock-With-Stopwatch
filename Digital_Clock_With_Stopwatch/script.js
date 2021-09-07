setInterval(setClock, 1000)
function setClock() {
    var clk = new Date()
    var hr = clk.getHours()
    var min = clk.getMinutes()
    var sec = clk.getSeconds()
    if (hr > 12) {
        hr = hr - 12
    }
    if (hr == 0) {
        hr = 12
    }
    if (hr < 10) {
        hr = "0" + hr
    }
    if (min < 10) {
        min = "0" + min
    }
    if (sec < 10) {
        sec = "0" + sec
    }

    document.getElementById("clk").innerHTML = hr + ":" + min + ":" + sec
}

var min = 0
var sec = 0
var msec = 0
var m = document.getElementById("min")
var s = document.getElementById("sec")
var ms = document.getElementById("msec")
var count=0;
var timer=false

function start() {
    timer=true
    startTimer()
}
function stop() {
    timer=false
    startTimer()
}
function reset() {
    timer=false
    startTimer()
    m.innerHTML = "0"+0
    s.innerHTML = "0"+0
    ms.innerHTML = "0"+0
    min=0
    sec=0
    msec=0
}
function startTimer() {
    
    if(timer==true){
        msec++
        
        if(msec==100){
            sec++
            msec=0
        }
        if(sec==60){
            min++
            sec=0
        }
        if(msec<10){
            ms.innerHTML="0"+msec
        }
        if(msec>=10){
            ms.innerHTML=msec
        }
        if(sec<10){
            s.innerHTML="0"+sec
        }
        if(sec>=10){
            s.innerHTML=sec
        }
        if(min<10){
            m.innerHTML="0"+min
        }
        if(min>=10){
            m.innerHTML=min
        }
        setTimeout("startTimer()",10)
    }
}