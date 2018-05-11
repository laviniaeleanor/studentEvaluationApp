export function calculatePercentages(arrayOfObjects) {

  const total = arrayOfObjects.length
  const green = arrayOfObjects.filter(object => object.latestEvaluation === 'green').length
  const yellow = arrayOfObjects.filter(object => object.latestEvaluation === 'yellow').length
  const red = arrayOfObjects.filter(object => object.latestEvaluation === 'red').length
  const grey = arrayOfObjects.filter(object => object.latestEvaluation === 'grey').length

  const percentageGreen = green/total *100
  const percentageYellow = yellow/total *100
  const percentageRed = red/total *100
  const percentageGrey = grey/total *100

  return {
    green: percentageGreen,
    yellow: percentageYellow,
    red: percentageRed,
    grey: percentageGrey
  }

}


export function getRandomStudent(arrayOfObjects) {

  let randomStudent

  if (arrayOfObjects.filter(object => object.latestEvaluation !== 'grey').length === 0) {

    randomStudent = arrayOfObjects[Math.floor(Math.random()*arrayOfObjects.length)]

  } else {

    const randomNumber = Math.floor(Math.random() * 100)

    let color
    if (randomNumber <= 53) color = 'red'
    else if (randomNumber > 53 && randomNumber < 81) color = 'yellow'
    else color = 'green'

    const students = arrayOfObjects.filter(object => object.latestEvaluation === color)
    const randomStudent = students[Math.floor(Math.random()*students.length)]

    if (randomStudent !== undefined )
      return randomStudent

    else return getRandomStudent(arrayOfObjects)

  }

  return randomStudent
}

export function getCurrentDate() {

  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1;
  let yyyy = today.getFullYear();

  if(dd<10) {
    dd = '0'+dd
  }

  if(mm<10) {
    mm = '0'+mm
  }

  return mm + '/' + dd + '/' + yyyy;

}

export function getNextStudent(arrayOfObjects, object){
  let index = arrayOfObjects.findIndex(x => x.id === object.id)
  if (index === arrayOfObjects.length - 1)
    index = 0
  index += 1
  return arrayOfObjects[index]
}

export function checkDate(arrayOfObjects, update){
  if (arrayOfObjects.filter(object => object.date === update.date).length === 0) return true
  return false
}

export function getEvaluationColor(evaluation, colors){
  switch(evaluation) {
  case 'green':
    return colors.green

  case 'yellow':
    return colors.yellow

  case 'red':
    return colors.red
  default:
    return colors.grey
  }
}
