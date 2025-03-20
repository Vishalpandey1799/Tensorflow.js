
## chapter one -- the basics

## working with node 

-- Okay so first we need to install package ## npm install @tensorflow/tfjs
-- start everything with tf like tf.tensor("hello world").print()
--output ? any guess ..... ??? lol it will be hello world


## working with web

-- if we want to use without node so we can directly work it on web 

-- process for web add this script and turn type = module 

<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest/dist/tf.min.js"></script>

-- so instead of console.log we use print for log 

## tensor - multidimensional array 

-- 

## 2 x 2 matrix 
tf.ones([2,2])

## now what it's 2 x 4 but there are 2 blocks 
tf.ones([2,2,4])
Tensor
[
  [  // Block 1
    [1, 1, 1, 1],  // Row 1
    [1, 1, 1, 1],  // Row 2
    [1, 1, 1, 1]   // Row 3
  ],

  [  // Block 2
    [1, 1, 1, 1],  // Row 1
    [1, 1, 1, 1],  // Row 2
    [1, 1, 1, 1]   // Row 3
  ]
]

## Got it how order changes left to right let me explain this leave it 

## now whatttttttttttttttt it's also 3 x 4 matrix but here is a catch 


tf.ones([2,2,3,4])

-- 2 Blocks 
-- 2 Matrix each block
-- 3 rows 
-- 4 column
Tensor
 [
  [  // Block 1
    [  // Matrix 1
      [1, 1, 1, 1],  // Row 1
      [1, 1, 1, 1],  // Row 2
      [1, 1, 1, 1]   // Row 3
    ],
    [  // Matrix 2
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1]
    ]
  ],

  [  // Block 2
    [  // Matrix 1
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1]
    ],
    [  // Matrix 2
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1]
    ]
  ]
]

Final verdict h mitarrrrr

-- Blocks
-- Matrices
-- rows
-- columns

