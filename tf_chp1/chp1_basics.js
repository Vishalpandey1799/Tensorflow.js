

import * as tf from "@tensorflow/tfjs"


const tensor3d = tf.randomUniformInt([2,3,4] , 10 , 20)

tensor3d.print()
 

const answer2 =  tf.randomNormal([5,5] , 0 , 1)

answer2.print();


const answer3 = tf.randomNormal([2,2]).clipByValue(-1,1)

answer3.print()


let a = tf.tensor([[1,2] , [3,4]])
let b = tf.tensor([[3,2] , [4,1]])

const result = a.concat(b)
result.print()

// shape changes like we used 1 as axis then column increase shape became 2 x 4 but be default shape wil be what ? okay good it will be 4 x 2 isn't it cool ? 


const adf = tf.tensor([1, 2, 3, 4])
const expended = adf.expandDims(1);
expended.print()


const s = tf.ones([2,1,2]).squeeze()
s.print()

const square = tf.tensor([1,2,3])

square.print()