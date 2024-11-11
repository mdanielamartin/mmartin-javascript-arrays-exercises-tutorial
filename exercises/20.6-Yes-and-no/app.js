let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// Your code here
let newArr = theBools.map((value) => {
    if (value === 1){
        return 'wiki'
    }else {
        return 'woko'
    }
})

console.log(newArr)