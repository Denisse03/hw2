import * as MODEL from "../app/model.js";

function initListeners() {
  $("button").on("click", (e) => {
    let btnID = e.currentTarget.id;
    let location = $("#city").val();

    if (location != "") {
      MODEL.getRandomWeather(location);
    } else {
      alert("Please type a location or the zip code");
    }
  });
}

$(document).ready(function () {
  initListeners();
});
