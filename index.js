// Code your solution in this file!
let hqStreet
function distanceFromHqInBlocks(blocks) {
    hqStreet = 42;
    return Math.abs(blocks - hqStreet);
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((start * 264) - (destination * 264))

}
let minimumDistanceForFee
function calculatesFarePrice(start, destination) {
    minimumDistanceForFee = Math.abs((start * 264) - (destination * 264)) - 400
    if(minimumDistanceForFee > 0 && minimumDistanceForFee < 1600){
        return minimumDistanceForFee * .02
    }

    else if  (minimumDistanceForFee >= 1600 && minimumDistanceForFee < 2100){
        return 25
    }

    else if   (minimumDistanceForFee < 0){
        return 0
    }
    else 
        return 'cannot travel that far'
    
}