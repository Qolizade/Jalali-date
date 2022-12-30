let date = moment();
date = date.format("jYYYY/ jM/ jD");
const dateShow = document.querySelector("#date_box");
dateShow.innerHTML = date;

// My computer has a Persian calendar, so I turned off the (direction: rtl) in style
