//loops
//for loop
var greedings  = 'Hello World'
var car = ["BMW", "Lexus", "Porsche"]

for (let i = 0; i<5; i++){
    console.log(greedings)
}

for (let c of car){
    console.log(c)
    if (car == 'Toyota'){
        break
    }

}

car.forEach(car => {
    console.log(car)
})

