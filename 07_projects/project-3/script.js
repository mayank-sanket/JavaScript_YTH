const clock = document.getElementById('clock');


setInterval(function (){
    
    // let date = new Date();
    // clock.innerHTML = date.toLocaleTimeString();

    clock.innerText = new Date().toLocaleTimeString();
}, 1000)