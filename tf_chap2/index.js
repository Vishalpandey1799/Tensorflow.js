import * as tf from "@tensorflow/tfjs"

//  Matrix Addition & Subtraction

const a = tf.randomUniformInt([3,2] , 5 , 10)
const b = tf.randomUniformInt([2,3] , 5 , 10)

// a.print()
// b.print()

// // it uses hadamard formula col to col 

// const add = a.add(b)
// add.print()


// const substractin = a.sub(b);
// substractin.print()

// const multi = a.mul(b);
// tf.tensor("hadamard multi").print()

// multi.print()


// // now dot product

const dotMulti = a.matMul(b);
tf.tensor("dot multi").print()
dotMulti.print()


// transposing matrices

const exTranspose = tf.randomUniformInt([3,5] , 5 , 10)

exTranspose.print()

exTranspose.transpose().print()

tf.tensor([1,2,3]).transpose().print()


// inverse of matrix

// finding inverse of a matrix 

let matrix = tf.randomUniformInt([2,2] , 4, 9);
matrix.print()

let determinant = matrix.arraySync()[0][0] * matrix.arraySync()[1][1] - matrix.arraySync()[0][1]*matrix.arraySync()[1][0];

 
 
console.log(determinant)


if(determinant!=0){
   let adjoint = tf.tensor([[
      matrix.arraySync()[1][1] , -matrix.arraySync()[0][1]
   ],[
   - matrix.arraySync()[1][0] , matrix.arraySync()[0][0]
   ]
])

 let inverse = adjoint.mul(1/determinant)
 tf.tensor("start").print()
 inverse.print()
 tf.tensor("end").print()

 
}else{
    console.log("Matrix is singular , no inverse exists non invertible hi kehde badmosh")
}

 // okay let's play with functions 

 function det(matrix){
    let arr = matrix.arraySync();
    return (arr[0][0]) * arr[1][1] - arr[0][1] * arr[1][0]
 }

 const mat = tf.tensor([[2,4],[4,8]]);

 const result = det(mat);
 console.log(result)

