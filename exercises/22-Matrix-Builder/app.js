// Your code here
function matrixBuilder(size) {
    let matrix = []
    for (let j = 0; j < size; j++) {
        let row = [];
        for (let i = 0; i < size; i++) {
            let random = Math.round(Math.random() * 1);
            row.push(random);
        }
        matrix.push(row);
    }
    return matrix;
}


// Do not change anything from this line down
console.log(matrixBuilder(5))
