
import * as tf from "@tensorflow/tfjs"

const hello = tf.tensor("hello world");

hello.print()


//  tf.ones([4,5]).print()

//  tf.zeros([3,2]).print()
//  tf.tensor([[1,2],[4,5]]).print() // 2d array hi kehde yo crazy 
//  tf.tensor3d([[[1], [2]], [[3], [4]] , [[4] , [6]]]).print() // - 3d bhai saab

 // it was general way now specific 

// const ta1d = tf.tensor1d([1,2,3,4])
// ta1d.print()

// const ta2d  = tf.tensor2d([[4,5] , [6,7]]);
// ta2d.print()

// const ta3d = tf.tensor3d([[[4] , [5]] , [[4] , [8]] , [[8] , [9]]]);
// ta3d.print()

// tf.tensor4d([[[[4] , [6] , [7]]] , [[[4] , [8] , [3]]]]).print()

// so basically tensor is like multidimentional array and easy to use 

// we can create default values matrix using zeros and one

// tf.ones([3,2,3,4]).print()


// Now random values 

// first method is randomUniform(shape , min , max) = ([2,3] , 5 , 7)

// tf.randomUniform([2,3] , 4,7).print() // for floating values

// tf.randomUniformInt([3,2] , 1 , 7).print() // for integer values

// tf.randomNormal([3,4] , 3 , 8).print()

tf.fill([2,3] , 4).print()