import * as tf from "@tensorflow/tfjs";

let matrix = tf.randomUniformInt([3, 3], 3, 9);
matrix.print();

function getDeterminant(matrix) {
    const arr = matrix.arraySync();  

    return (
        arr[0][0] * (arr[1][1] * arr[2][2] - arr[1][2] * arr[2][1]) - 
        arr[0][1] * (arr[1][0] * arr[2][2] - arr[1][2] * arr[2][0]) + 
        arr[0][2] * (arr[1][0] * arr[2][1] - arr[1][1] * arr[2][0])
    );
}

console.log("Determinant:", getDeterminant(matrix));

const two_d_array = tf.randomUniformInt([2,2]  , 2 , 9).arraySync()




function invertible(matrix){

      let det = matrix[0][0]*matrix[1][1] - matrix[0][1] * matrix[1][0]
      console.log(det)

    if(det!=0){
        let adjoint = tf.tensor2d([
            [matrix[1][1], -matrix[0][1]],
            [matrix[1][0], -matrix[0][0]]
        ])

        let inverse = adjoint.mul(1/det)
        inverse.print()
    }else{
        console.log("Non invertible ! ")
    }
}

invertible(two_d_array)

let tbtmatrix = tf.randomUniformInt([3,3] , 2,9);
tbtmatrix.print()
 
 

function transposeMatrix(matrix){
    matrix.transpose().print()
   
}

transposeMatrix(tbtmatrix)