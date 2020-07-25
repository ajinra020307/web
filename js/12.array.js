
let cars = ["benz","maruthi","honda","tvs","bmw"]

// FIND LENGTH  

let noofCars = cars.length

// change an existing value

cars[1] = "ambazadar"

// remove last element

cars.pop()

// remove first element

cars.shift()

/*************************************************************************************************/

let bikes = ["pulsor","duke","hero","fz","yamaha"]

// add an element to the end of the array

bikes.push("r15")

// add an element to the start of the array

bikes.unshift("duo")


/************************************************************************************************/


let computerstudents = ["ajin","vishnu","aswin"]

let mathsstudents = ["renju","stijo"]

let englishStudents = ["ste","df","fd"]

// merging two arrays

let allstudents = computerstudents.concat(mathsstudents)

// merging more than two arrays

let combinedArray = computerstudents.concat(mathsstudents,englishStudents)


// deleting an element

delete mathsstudents[0]


// splice and slice

let computers = ["acer","Dell","lenova","azus","lg"]


// computers.splice(0,4)


let newComputers = computers.slice(1,4)

console.log(newComputers)