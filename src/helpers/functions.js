const colorChange = (city) => {
  const temperature = document.getElementById(city);
  const realTemp = parseInt(temperature.innerText.slice(0, -1));

  if (realTemp <= 5) {
    temperature.style.color = "#69A3FF";
  }
  if (realTemp > 5 && realTemp <= 25) {
    temperature.style.color = "#FF9632";
  }
  if (realTemp > 25) {
    temperature.style.color = "#ED1946";
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

export { colorChange, displayTime, saveLocalStorage };
