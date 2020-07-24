const { lookup } = require("dns")

function findtheaverage(marks) {
    let totalsubject = marks.length

    let sum = 0

    for (let i = 0; i < marks.length; i++) {

        sum = sum + marks[i]
    }


    let average = sum / totalsubject

    return average

}

marks = [30, 40, 50]


let output = findtheaverage(marks)

console.log(output)