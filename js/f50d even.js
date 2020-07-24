function findevennumber(numbers) {


    let evennumber = []

    for (i = 0; i <= numbers.length; i++) {

        let reminder = numbers[i] % 2

        if (reminder == 0) {

            evennumber.push(numbers[i])



        }
       
    }

    return evennumber
}



let a=[2,5,7,8,14,16,17,19,22,27,26,28]

let output = findevennumber(a)

console.log(output)







