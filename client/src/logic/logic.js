 const test = [{name: 'a', evaluation : 'green'},{name: 'b', evaluation : 'yellow'},{name: 'c', evaluation : 'yellow'},{name: 'd', evaluation : 'yellow'},{name: 'e', evaluation : 'red'}]

export function calculatePercentages(arrayOfObjects) {
    const total = arrayOfObjects.length
    const green = arrayOfObjects.filter(object => object.evaluation === 'green').length
    const yellow = arrayOfObjects.filter(object => object.evaluation === 'yellow').length
    const red = arrayOfObjects.filter(object => object.evaluation === 'red').length

    const percentageGreen = green/total *100
    const percentageYellow = yellow/total *100
    const percentageRed = red/total *100

    return {
        green: percentageGreen,
        yellow: percentageYellow,
        red: percentageRed
    }

}

console.log(calculatePercentages(test))

export function getRandomStudent(arrayOfObjects) {
    const randomNumber = Math.floor(Math.random() * 100)
    const colors = ['red', 'yellow', 'green']

    let color
    if (randomNumber <= 53) color = colors[0]
    else if (randomNumber > 53 && randomNumber < 81) color = colors[1]
    else color = colors[2]

    const students = arrayOfObjects.filter(object => object.evaluation === color)
    const randomStudent = students[Math.floor(Math.random()*students.length)]
    return randomStudent

}


getRandomStudent(test)
