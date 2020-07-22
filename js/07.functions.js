
// Normal function with no inputs

function print() {

	console.log("iam a print function")

}

print()
print()

// function with single input

function print2(message) {

	console.log(message)


}

print2("iam from print2")
print2("iam ajin")

// function accepts two inputs

function findsum(x, y) {

	console.log(x + y)

}

findsum(100, 100)
findsum(400, 500)

// write a function which takes one input 
// the input is side of a acube
// find area of cube

function findthearea(a) {
	let area = a * a * a
	console.log(area)
}

findthearea(5)

findthearea(3)

// 

function findareaoftriangle(b, h) {

	let area = 1 / 2 * b * h

	console.log(area)


}

findareaoftriangle(30, 40)


function findthebmi(h, w) {

	let heightinmeters = h / 100

	let bmi = w / (heightinmeters * heightinmeters)

	if (bmi > 24) {

		console.log("u r fat")

	}
	else if (bmi < 18) {
		console.log("u r lean")


	}
	else {

		console.log("u r normal")

	}
}

findthebmi(167, 63)

findthebmi(123,32)

