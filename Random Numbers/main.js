// Practice RAndom Numbers

// Event Listener
document.getElementById("random-btn").addEventListener("click", randomNumber);

// Event Function
function randomNumber() {
    let randNum = Math.floor(Math.random()*6) + 1;

    document.getElementById("output").innerHTML = randNum
}

