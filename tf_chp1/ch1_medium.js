
import * as tf from "@tensorflow/tfjs"

const medium1 = tf.fill([3,3] , 1*5);

medium1.print()

let medium2 = tf.zeros([4,4])

const ro5 = tf.fill([1,4] , 5);

medium2 = medium2.slice([0,0] , [1,4])
           .concat(ro5 , 0)
           .concat(medium2.slice([2,0] , [2,4]) , 0)

medium2.print()

medium2.slice([0,0] , [1,4]).print()
const tensor = tf.tensor([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]);

const slicedTensor = tensor.slice([0,0], [3, 3]); 
slicedTensor.print();

  
let mediumq3 = tf.randomNormal([2,2] , 10 , 3)

mediumq3.print()
mediumq3.mean().print()

let abcd = tf.randomNormal([2,3] , 10 , 5).clipByValue(5,10)
abcd.print()