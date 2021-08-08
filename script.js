let black = () => {
    document.getElementById("myImage").src = "images/4x/black1@4x.png";
  };
  
  let green = () => {
    document.getElementById("myImage").src = "images/4x/green1@4x.png";
  };
  
  let blue = () => {
    document.getElementById("myImage").src = "images/4x/blue1@4x.png";
  };
  
  const pink = () => {
    document.getElementById("myImage").src = "images/4x/pink1@4x.png";
  };
  
  let orange = () => {
    document.getElementById("myImage").src = "images/4x/orange1@4x.png";
  };
  
  let white = () => {
    document.getElementById("myImage").src = "images/4x/white1@4x.png";
  };

  function timer() {
    document.getElementById("heart").style.visibility = "hidden";
    document.getElementById("heart-rate").style.visibility = "hidden";
    document.getElementById("heart-rate").textContent = "";
    document.getElementById("time").style.visibility = "visible";
  
    setInterval(() => {
      let addZero = (i) => {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      };
  
      let d = new Date();
      let h = addZero(d.getHours());
      let m = addZero(d.getMinutes());
      let s = addZero(d.getSeconds());
      document.getElementById("time").innerHTML = h + " : " + m + " : " + s;
    }, 0);
  }
  
  let heartbeat = () => {
    document.getElementById("heart-rate").textContent = "";
    document.getElementById("time").style.visibility = "hidden";
    document.getElementById("heart").style.visibility = "visible";
    document.getElementById("heart-rate").style.visibility = "visible";
    document
      .getElementById("heart-rate")
      .appendChild(document.createTextNode(randomNumber(70, 100)));
  };
  
  let randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };