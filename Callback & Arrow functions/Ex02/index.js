const returnTime = function (time) {
  console.log('The current time is: ' + time)
}


function getTime(func)
{
    func(new Date());
}

getTime(returnTime)
