export default function calculateFuelConsumption(speed, distance, base) {
    
    let increment = 1.009
    let consumption = base/100
    let consumptionOne = (increment ** speed[0]) * consumption * distance
    let consumptionTwo = (increment ** speed[1]) * consumption * distance

    let result = [
        {
            consumption : consumptionOne.toFixed(2)
        }, 
        {
            consumption : consumptionTwo.toFixed(2)
        },
        {   
            difference : (consumptionTwo-consumptionOne).toFixed(2)
        }
    ]

    return result;
}
