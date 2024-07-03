const currentDate = new Date();

const currentDayOfWeek = currentDate.getDay();

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentHoursUTC = currentDate.getUTCHours();
const currentMinutesUTC = currentDate.getUTCMinutes();
const currentSecondsUTC = currentDate.getUTCSeconds();

/* Cureent Day and Time */
const currentDayName = daysOfWeek[currentDayOfWeek];
const currentTimeUTC =
  currentHoursUTC.toString().padStart(2, "0") +
  ":" +
  currentMinutesUTC.toString().padStart(2, "0") +
  ":" +
  currentSecondsUTC.toString().padStart(2, "0");

document.querySelector(".section-header__day-time-box").innerHTML = `
    <span class="day" data-testid="currentTimeUTC">${currentDayName}, </span>
    <span class="time" data-testid="currentDay"">${currentTimeUTC} UTC</span>
`;
