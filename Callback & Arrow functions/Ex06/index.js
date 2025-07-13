const determineWeather = temp => {
  if(temp > 25){
    return "hot"
  }
  return "cold"
}




const commentOnWeather = (temp) => determineWeather(temp)
console.log(commentOnWeather(26));