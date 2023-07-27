let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}
function decrement() {
    if(count <= 0){
        count = 0;
    }
    else{
        count -= 1
        countEl.textContent = count;
    }
    
}

function reset(){
    count = 0;
    countEl.innerText = count;
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
