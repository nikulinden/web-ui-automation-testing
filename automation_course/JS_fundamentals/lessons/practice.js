let familySize = 35
let plannedDistanceToDrive = 1000

function recommendedCar(familySize, plannedDistanceToDrive){
    if (familySize <= 4){
        if (plannedDistanceToDrive < 200){
            return "Tesla"
        }else{
            return "Toyota Camry"
        }
    }else if (familySize > 4){
        return "Minivan"
    }
}

console.log(recommendedCar(familySize, plannedDistanceToDrive))
