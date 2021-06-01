export default function calculateTime(speed, distance) {

    let timeOne = distance/speed[0]
    let timeTwo = distance/speed[1]
    
    let result = [
        {
            time : timeOne.toFixed(2)
        }, 
        {
            time: timeTwo.toFixed(2)
        }, 
        {
            difference : ((timeOne - timeTwo) * 60).toFixed(0)
        }
    ]

    return result
}