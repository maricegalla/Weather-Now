const colorChange = (city) => {
  const temperature = document.getElementById(city);
  const realTemp = parseInt(temperature.innerText);

  if (realTemp <= 5) {
    temperature.style.color = "var(--blue)";
  }
  if (realTemp > 5 && realTemp <= 25) {
    temperature.style.color = "var(--orange)";
  }
  if (realTemp > 25) {
    temperature.style.color = "var(--red)";
  }
};

const displayTime = () => {
  let time = "";

  const currentTime = new Date();
  const hours = currentTime.getHours();

  const minutes =
    currentTime.getMinutes() < 10
      ? "0" + currentTime.getMinutes()
      : currentTime.getMinutes();

  const seconds =
    currentTime.getSeconds() < 10
      ? "0" + currentTime.getSeconds()
      : currentTime.getSeconds();

  const amPmHour = hours > 12 ? hours - 12 : hours;
  const formatedHour = amPmHour < 10 ? "0" + amPmHour : amPmHour;

  time += formatedHour + ":" + minutes + ":" + seconds + " ";
  if (hours > 11) {
    time += "PM";
  } else {
    time += "AM";
  }
  return time;
};

const saveLocalStorage = (temp, press, updatedAt, hum, city) => {
  const data = {
    temperature: temp,
    pressure: press,
    humidity: hum,
    updatedAt: updatedAt,
  };
  localStorage.setItem(city, JSON.stringify(data));
};

const reloader = () => {
  setTimeout(() => {
    window.location.reload();
  }, 600000);
}

export { colorChange, displayTime, saveLocalStorage, reloader };
