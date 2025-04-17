const lightingCondition = document.getElementById("lightingCondition");
const filmSpeed = document.getElementById("filmSpeed");
const resultBtn = document.getElementById("resultBtn");
let lightingDetails = document.getElementById("lightingDetails");
let shutterSpeedResult = document.getElementById("shutterSpeedResult");
let apertureResult = document.getElementById("apertureResult");

lightingCondition.addEventListener("change", lightingDetailsFunc);
resultBtn.addEventListener("click", sunnyCalculate);

//let lightingCondValue = lightingCondition.value;
//let filmSpdValue = filmSpeed.value;

function lightingDetailsFunc() {
    let lightingCondValue = lightingCondition.value;

    if (lightingCondValue === "clearAndSunny") {
        lightingDetails.textContent = "BRIGHT OR HAZY SUN WITH DISTINCT SHADOWS";
    } else if (lightingCondValue === "slightlyOvercast") {
        lightingDetails.textContent =
            "SLIGHTLY CLOUDY WITH SOFT SHADOWS AROUND THE EDGES";
    } else if (lightingCondValue === "overcast") {
        lightingDetails.textContent = "CLOUDY WITH BARELY VISIBLE SHADOWS";
    } else if (lightingCondValue === "heavyOvercast") {
        lightingDetails.textContent = "OPEN SHADE WITH NO SHADOWS";
    } else if (lightingCondValue === "sunset") {
        lightingDetails.textContent = "DIMMER DAYLIGHT WITH NO SHADOWS";
    }

    lightingDetails.innerHTML = lightingDetails.textContent;
} // function closing

function sunnyCalculate() {
    lightingCondValue = lightingCondition.value;
    let filmSpdValue = filmSpeed.value;

    if (filmSpdValue && lightingCondValue) {
        if (lightingCondValue === "clearAndSunny") {
            apertureResult.textContent = "F16";
        } else if (lightingCondValue === "slightlyOvercast") {
            apertureResult.textContent = "F11";
        } else if (lightingCondValue === "overcast") {
            apertureResult.textContent = "F8";
        } else if (lightingCondValue === "heavyOvercast") {
            apertureResult.textContent = "F5.6";
        } else if (lightingCondValue === "sunset") {
            apertureResult.textContent = "F4";
        }

        if (filmSpdValue === "oneHunISO") {
            shutterSpeedResult.textContent = "1/125";
        } else if (filmSpdValue === "twoHunISO") {
            shutterSpeedResult.textContent = "1/250";
        } else if (filmSpdValue === "fourHunISO") {
            shutterSpeedResult.textContent = "1/500";
        } else if (filmSpdValue === "eightHunISO") {
            shutterSpeedResult.textContent = "1/1000";
        }
    }

    shutterSpeedResult.innerHTML = shutterSpeedResult.textContent;
    apertureResult.innerHTML = apertureResult.textContent;
} // do not delete. function won't.
