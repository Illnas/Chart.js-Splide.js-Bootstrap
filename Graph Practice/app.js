let xValues = ["HTML", "CSS", "Javascript"];
let yValues = [95, 4, 1];
let barColors = ["rgb(146, 238, 59)", "rgb(238, 160, 59)","rgb(59, 238, 238)"];

new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Usage of Frontend Technologies"
      }
    }
  });