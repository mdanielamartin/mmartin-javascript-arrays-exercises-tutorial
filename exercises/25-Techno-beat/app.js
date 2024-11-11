// Your code here
function lyricsGenerator(arr) {
    let result = ''
    let bassDrop = 0;
    for (let i of arr) {
        if (i == 0) {
            result += 'Boom ';
            bassDrop = 0;
        } else if (i == 1) {
            bassDrop += 1;
            result += 'Drop the bass '
        }

        if (bassDrop === 3) {
            result += '!!!Break the bass!!! '
            bassDrop = 0;
        }

    }
    return result;
}

    // Don't change anything below this line
    console.log(lyricsGenerator([0, 0, 1, 1, 0, 0, 0]))
    console.log(lyricsGenerator([0, 0, 1, 1, 1, 0, 0, 0]))
    console.log(lyricsGenerator([0, 0, 0]))
    console.log(lyricsGenerator([1, 0, 1]))
    console.log(lyricsGenerator([1, 1, 1]))
