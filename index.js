// Code your solution here
function findMatching(driverArray, names){
  return driverArray.filter(name => name.toLowerCase() === names.toLowerCase())
}

function fuzzyMatch(driverArray, startsWithLetter){
  const matchingDrivers = driverArray.filter(name => name.indexOf(startsWithLetter) === 0)
  return matchingDrivers
}

function matchName(driverArray, string){
  return driverArray.filter(driver => driver.name  === string)
}