// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    let takeOffButton = document.getElementById("takeoff");
    let flightStatusLabel = document.getElementById("flightStatus");
    let landingButton = document.getElementById("landing");
    let abortButton = document.getElementById("missionAbort");
    let rocket = document.getElementById("rocket");
    let background = document.getElementById("shuttleBackground");
    let bgWidth = background.offsetWidth;
    let bgHeight = background.offsetHeight;
    let rocketX = Math.round((bgWidth / 2) - 37.5);
    let rocketY = (bgHeight - 75);
    positionRocket(rocketX, rocketY);
    let rocketHeight = 0;  
    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let rightButton = document.getElementById("right");
    let leftButton = document.getElementById("left");

    takeOffButton.addEventListener("click", event => {
        if (confirm("Confirm that the shuttle is ready for takeoff.")) {
            flightStatusLabel.innerHTML = "Shuttle in flight.";
            background.style.backgroundColor = "#0000ff";
            document.getElementById("spaceShuttleHeight").innerHTML = "10,000";
            rocketHeight = 10000;
        }        
     }); 

    landingButton.addEventListener("click", event => {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatusLabel.innerHTML = "The shuttle has landed.";
        background.style.backgroundColor = "#007f00";
        document.getElementById("spaceShuttleHeight").innerHTML = "0";
        rocketHeight = 0;        
     });

     abortButton.addEventListener("click", event => {
        if (confirm("Confirm that you want to abort the mission.")) {
            flightStatusLabel.innerHTML = "Mission aborted.";
            background.style.backgroundColor = "#007f00";
            document.getElementById("spaceShuttleHeight").innerHTML = "0";
            rocketHeight = 0;
        }        
     }); 

     function positionRocket(x, y) {
        rocket.style.left = x + "px";
        rocket.style.top = y + "px";
     }

     upButton.addEventListener("click", event => {
        rocketHeight += 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = rocketHeight; 
        rocketY = rocketY - 10;
        positionRocket(rocketX, rocketY);       
     });

     downButton.addEventListener("click", event => {
        rocketHeight -= 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = rocketHeight; 
        rocketY = rocketY + 10;
        positionRocket(rocketX, rocketY);       
     });

     rightButton.addEventListener("click", event => {
        rocketX = rocketX + 10;
        positionRocket(rocketX, rocketY);       
     });

     leftButton.addEventListener("click", event => {
        rocketX = rocketX - 10;
        positionRocket(rocketX, rocketY);       
     });


  


};

window.addEventListener("load", init);
