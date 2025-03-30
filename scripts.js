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
alert("is this thing on?");


function lightingDetailsFunc() {
  let lightingCondValue = lightingCondition.value;

  if (lightingCondValue === "clearAndSunny") {
    lightingDetails.textContent = "bright or hazy sun with distinct shadows";
  } else if (lightingCondValue === "slightlyOvercast") {
    lightingDetails.textContent =
      "slightly cloudy with soft shadows around the edges";
  } else if (lightingCondValue === "overcast") {
    lightingDetails.textContent = "cloudy with barely visible shadows";
  } else if (lightingCondValue === "heavyOvercast") {
    lightingDetails.textContent = "open shade with no shadows";
  } else if (lightingCondValue === "sunset") {
    lightingDetails.textContent = "dimmer daylight with no shadows";
  }

  lightingDetails.innerHTML = lightingDetails.textContent;
} // function closing

function sunnyCalculate() {
  lightingCondValue = lightingCondition.value;
  let filmSpdValue = filmSpeed.value;

  if (lightingCondValue === "clearAndSunny") {
    apertureResult.textContent = "f/16";
    if (filmSpdValue === "oneHunISO") {
      shutterSpeedResult.textContent = "1/125";
    } else if (filmSpdValue === "twoHunISO") {
      shutterSpeedResult.textContent = "1/250";
    } else if (filmSpdValue === "fourHunISO") {
      shutterSpeedResult.textContent = "1/500";
    } else if (filmSpdValue === "eightHunISO") {
      shutterSpeedResult.textContent = "1/1000";
    }
  } else if (lightingCondValue === "slightlyOvercast") {
    apertureResult.textContent = "f/11";
    if (filmSpdValue === "oneHunISO") {
      shutterSpeedResult.textContent = "1/125";
    } else if (filmSpdValue === "twoHunISO") {
      shutterSpeedResult.textContent = "1/250";
    } else if (filmSpdValue === "fourHunISO") {
      shutterSpeedResult.textContent = "1/500";
    } else if (filmSpdValue === "eightHunISO") {
      shutterSpeedResult.textContent = "1/1000";
    }
  } else if (lightingCondValue === "overcast") {
    apertureResult.textContent = "f/8";
    if (filmSpdValue === "oneHunISO") {
      shutterSpeedResult.textContent = "1/125";
    } else if (filmSpdValue === "twoHunISO") {
      shutterSpeedResult.textContent = "1/250";
    } else if (filmSpdValue === "fourHunISO") {
      shutterSpeedResult.textContent = "1/500";
    } else if (filmSpdValue === "eightHunISO") {
      shutterSpeedResult.textContent = "1/1000";
    }
  } else if (lightingCondValue === "heavyOvercast") {
    apertureResult.textContent = "f/5.6";
    if (filmSpdValue === "oneHunISO") {
      shutterSpeedResult.textContent = "1/125";
    } else if (filmSpdValue === "twoHunISO") {
      shutterSpeedResult.textContent = "1/250";
    } else if (filmSpdValue === "fourHunISO") {
      shutterSpeedResult.textContent = "1/500";
    } else if (filmSpdValue === "eightHunISO") {
      shutterSpeedResult.textContent = "1/1000";
    }
  } else if (lightingCondValue === "sunset") {
    apertureResult.textContent = "f/4";
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
