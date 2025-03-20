1️⃣ How is a 3D tensor different from a 2D tensor?
2️⃣ What is the formula used in tf.randomNormal()? Explain in your words.
3️⃣ What is the difference between randomUniform and randomNormal?
4️⃣ If you set tf.randomNormal([2,2], 5, 2), will values be strictly between 3 and 7? Why or why not?
5️⃣ What does clipByValue() do, and why is it useful?

## answer of 1

--- So using 3d tensor we can create 3d array and using 2d we can create 2d array

## answer of 2 

So randomNormal uses formula of simple distribution x = mean(standerd daviation * z (random values))

where mean is you can say stays between
standerd daviation = 5 ( suppose)

and value of z we can took between <0 to > 0

## answer of 3 

-- okay so randomUniform stick to the value because it takes min and max and syntax of it like (shape , min , max)

but randomNormal's syntax is different it takes shape , mean and daviation so value should be less or high depends on random value of z 

## answer of 4 

hey i don't know really please explain

## answer of 5 

-- okay so clipByValue() sets boundries so it never goes out of given number 

## Q . const t = tf.ones([2, 3, 4]);
t.print();

How many matrices does this tensor have? How many rows and columns in each?

## answer of 6 

there will be 2 matrices and 3 rows and 4 columns

