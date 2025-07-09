const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

logData = console.log; //Added row

displayData(console.error, logData, "I like to party")
