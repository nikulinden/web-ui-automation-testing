//objects - mutable

var customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ["BMW", "Lexus", "Porsche"]
}

console.log(customer.firstName, customer['lastName'])
// dot notationa and bracket notation
customer.firstName = 'Mike'
customer['lastName'] = 'Jordan'

//array - mutable
var car = ["BMW", "Lexus", "Porsche"]
console.log(car[0])

