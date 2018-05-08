const test = [{name: 'a', evaluation : 'green'},{name: 'b', evaluation : 'yellow'},{name: 'c', evaluation : 'yellow'},{name: 'd', evaluation : 'yellow'},{name: 'e', evaluation : 'red'}]


function calculatePercentages(arrayOfObjects) {
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

calculatePercentages(test)



function getRandomStudent(arrayOfObjects) {
    const randomNumber = Math.floor(Math.random() * 100)

    let color
    if (randomNumber <= 53) color = 'red'
    else if (randomNumber > 53 && randomNumber < 81) color = 'yellow'
    else color = 'green'

    const students = arrayOfObjects.filter(object => object.evaluation === color)
    const randomStudent = students[Math.floor(Math.random()*students.length)]

    return randomStudent
}

getRandomStudent(test)
