let mat = [
    [1, 2],
    [3, 4]
]
// [ [1,2,3,4] ]
function matrixReshape(mat, r, c) {
    let m = mat.length;
    let n = mat[0].length;

    if (m * n !== r * c) return mat;


    // create new matrix
    let res = new Array(r);
    for (let i = 0; i < r; i++) {
        res[i] = new Array(c);
        
    }

    let index = 0;


    // adding elements into new matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let newRow = Math.floor(index / c);
            let newCol = index % c;

            res[newRow][newCol] = mat[i][j];

            index++;
        }

    }
        return res;

}
