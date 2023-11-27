window.addEventListener("DOMContentLoaded", e => {
    let cleanDisplay = false;
    let buttons = document.querySelectorAll(".button");
    buttons.forEach(btn => {
        btn.addEventListener("click", e => {
            let display = document.querySelector(`#display`);
            if(cleanDisplay == false) {
                cleanDisplay = true;
                display.innerText = "";
            }
            let target = e.target;
            console.log(`You clicked on ${target.id}`);
            if(target.id == -1){
                display.innerText = "Calling"
                cleanDisplay = false;
            } else {
                display.innerText += target.id
            }
            
        });
    });
});