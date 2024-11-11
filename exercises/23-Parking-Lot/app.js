let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here

function getParkingLotState(matrix){
  let totalSlots = 0;
  let availableSlots = 0;
  let occupiedSlots = 0;

  for (let row of matrix){
    for (let spot of row){
      totalSlots+=1;
      
      if (spot === 1){
        occupiedSlots+=1;
      }else if (spot === 2){
        availableSlots+=1;
      }else{
        totalSlots-=1;
      }
    }
  }

  return {'totalSlots':totalSlots, 'availableSlots':availableSlots, 'occupiedSlots': occupiedSlots}
}

console.log(getParkingLotState(parkingState))
