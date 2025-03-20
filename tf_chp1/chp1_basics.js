

import * as tf from "@tensorflow/tfjs"


const tensor3d = tf.randomUniformInt([2,3,4] , 10 , 20)

tensor3d.print()
 

const answer2 =  tf.randomNormal([5,5] , 0 , 1)

answer2.print();


const answer3 = tf.randomNormal([2,2]).clipByValue(-1,1)

answer3.print()