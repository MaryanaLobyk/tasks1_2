////Create a function that parses a string into an integer (like the js function parseInt, but without the base parameter)

function myParseInt(str){
    let a = str*1;
    console.log(typeof(a));
}
myParseInt('123')


//Create a function that prints a given matrix in spiral
// the function should accept any size matrix [MxN]

function printMatrix(array){
    let result = [];
    function throughMatrix(matrix) {
        if (matrix.length === 0) {
            return;
        }
        result = result.concat(matrix.shift());

        for (let i=1; i < matrix.length - 1; i++) {
            result.push(matrix[i].pop());
        }

        result = result.concat(matrix.pop().reverse());

        for (let j=matrix.length -2; j > 0; j--) {
            result.push(matrix[j].shift());
        }

        return throughMatrix(matrix);
    }
    throughMatrix(array);

    return result;
}

console.log(printMatrix([[1,  2,   3,  4],
    [5,  6,   7,  8],
    [9,  10, 11, 12],
    [13, 14, 15, 16]]));



