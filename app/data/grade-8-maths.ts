// app/data/grade-8-maths.ts

export const grade8Maths = {
  subject: "Mathematics",
  grade: 8,
  terms: {
    term1: {
      id: "term1",
      label: "Term 1",
      weeks: [
        {
          id: "t1-w1-2",
          label: "Week 1-2",
          topic: "Whole Numbers",
          notes: `
## Properties of Whole Numbers

Whole numbers are the numbers we use for counting (0, 1, 2, 3, ...). They have special properties that make calculations easier.

### Commutative Property
- Addition: Numbers can be added in any order, and the sum will be the same.
  Example: 70 + 50 = 50 + 70
- Multiplication: Numbers can be multiplied in any order, and the product will be the same.
  Example: 7 × 10 = 10 × 7
- Important: This property does not work for subtraction or division.

### Associative Property
- Addition: When adding three or more numbers, you can group them in any way.
  Example: (4 + 7) + 5 = 4 + (7 + 5)
- Multiplication: When multiplying three or more numbers, you can group them in any way.
  Example: (2 × 3) × 5 = 2 × (3 × 5)
- Important: This property also does not work for subtraction or division.

### Distributive Property
Multiplication can be distributed over addition and subtraction. This helps break down difficult multiplications into easier parts.

- Over addition: 6 × 204 = 6 × (200 + 4) = (6 × 200) + (6 × 4) = 1200 + 24 = 1224
- Over subtraction: 7 × 96 = 7 × (100 - 4) = (7 × 100) - (7 × 4) = 700 - 28 = 672

### Identity Elements
- Additive Property of 0: Adding 0 to any number leaves it unchanged.
  Example: 5 + 0 = 5
- Multiplicative Property of 1: Multiplying any number by 1 leaves it unchanged.
  Example: 5 × 1 = 5

---

## Calculations with Whole Numbers

### Estimating and Rounding
Estimating means finding a number that is close to the exact answer. This is useful for checking if an answer is reasonable.

To estimate, you can round off numbers to make them easier to work with.
Example: To estimate 84 × 178, you could round to 80 × 200 = 16,000.
The error is the difference between your estimate and the exact answer.

### Rounding Off and Compensating
This is a method to calculate accurately by rounding numbers and then adjusting for the error.

Example: To calculate 386 + 3435, round to 400 + 3400 = 3800.
You rounded up by 14 and down by 35, so you need to compensate with 14 - 35 = -21.
Your estimate is too big by 21, so subtract: 3800 - 21 = 3778 (which is 386 + 3435).

### Adding Numbers in Columns
Align the numbers so that units are under units, tens under tens, etc. Add the numbers in each column, starting from the right. If the sum in a column is 10 or more, carry the tens digit to the next column to the left.

Example:
  31837
+  4994
-------
  36831

Calculation: 7 + 4 = 11 (write 1, carry 1 to tens). 3 + 9 + 1 = 13 (write 3, carry 1 to hundreds). 8 + 9 + 1 = 18 (write 8, carry 1 to thousands). 1 + 4 + 1 = 6. 3 + 0 = 3. Final answer: 36831.

### Methods of Subtraction

Counting on a Number Line: Find the difference by counting the steps from the smaller number to the larger number.
Example: For 859 - 267, you can think: 267 + 33 = 300, 300 + 500 = 800, 800 + 59 = 859.
So, 33 + 500 + 59 = 592.

Subtraction by Parts (Borrowing): Align the numbers in columns. If the digit on top is smaller than the digit below, borrow from the next column to the left.

Example:
  6213
- 2758
-------
  3455

Calculation: 3 - 8 (borrow 1 from tens, 13 - 8 = 5). Tens column: now 0 - 5 (borrow from hundreds, 10 - 5 = 5). Hundreds: now 1 - 7 (borrow from thousands, 11 - 7 = 4). Thousands: 5 - 2 = 3. Final answer: 3455.

### A Method of Multiplication
Multiply in parts and then add the partial products. It is convenient to write the work in vertical columns, carrying over numbers to the next column.

Example: 7 × 4598
1. 7 × 8 = 56 (write 6, carry 5)
2. 7 × 9 = 63 + 5 = 68 (write 8, carry 6)
3. 7 × 5 = 35 + 6 = 41 (write 1, carry 4)
4. 7 × 4 = 28 + 4 = 32 (write 2, then 3)
Final answer: 32186.

### Long Division
The process of chunking to find how many times one number fits into another. You can take away multiples of the divisor in chunks until you can't take any more.

Example: 9400 ÷ 27
1. 27 × 300 = 8100. Remainder: 9400 - 8100 = 1300
2. 27 × 40 = 1080. Remainder: 1300 - 1080 = 220
3. 27 × 8 = 216. Remainder: 220 - 216 = 4
Total: 300 + 40 + 8 = 348 with a remainder of 4.
Answer: 348 R4

---

## Multiples, Factors and Prime Factors

### Multiples
Multiples of a number are obtained by multiplying it by natural numbers (1, 2, 3, ...).
Example: Multiples of 6 are 6, 12, 18, 24, ...
If n is a natural number, then 6n represents the multiples of 6.

### Factors
Factors of a number are numbers that divide exactly into it (no remainder). They come in pairs.
Example: The factors of 20 are 1, 2, 4, 5, 10, 20.
Factor pairs: 1 × 20, 2 × 10, 4 × 5.

### Prime Numbers
A prime number is a whole number greater than 1 that has exactly two factors: 1 and itself.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47.
Note: 1 is not a prime number (it has only one factor). 2 is the only even prime number.

### Composite Numbers
A composite number is a whole number greater than 1 that has more than two factors.
Examples: 4, 6, 8, 9, 10, 12, 14, 15, 16.

### Prime Factorisation
This is the process of writing a composite number as a product of its prime factors. This can be done by repeated division by prime numbers (starting with 2, 3, 5, 7, etc.) until only 1 remains.

Example: Prime factorisation of 72:
1. 72 ÷ 2 = 36
2. 36 ÷ 2 = 18
3. 18 ÷ 2 = 9
4. 9 ÷ 3 = 3
5. 3 ÷ 3 = 1

So, 72 = 2 × 2 × 2 × 3 × 3 = 2³ × 3²

### Highest Common Factor (HCF)
The largest number that divides exactly into two or more numbers.

To find the HCF:
1. Find the prime factorisation of each number.
2. Find the common prime factors.
3. Multiply the common prime factors, using the lowest exponent.

### Lowest Common Multiple (LCM)
The smallest multiple that is common to two or more numbers.

To find the LCM:
1. Find the prime factorisation of each number.
2. List all the prime factors that appear in any of the factorisations.
3. Multiply them, using the highest exponent for each.

---

## Solving Problems

### Ratio
A ratio is a comparison of two or more quantities of the same kind. It is written as a : b (e.g., 4:5). Ratios can be used to share a quantity according to a given ratio.

Example: Share R600 in the ratio 5:4:3.
Total parts = 5 + 4 + 3 = 12
One part = 600 ÷ 12 = 50
Nathi gets 5 × 50 = R250, Paul gets 4 × 50 = R200, Tim gets 3 × 50 = R150.

### Rate
A rate compares two quantities of different kinds. It often uses the word per.
Example: Speed is a rate (kilometres per hour). A car travels 180 km in 2 hours, so its speed is 90 km/h.

### Profit, Loss, Discount and Interest
- Cost Price (CP): The price a dealer pays to buy an item.
- Marked Price (MP): The price shown on the item.
- Selling Price (SP): The price after a discount is applied.
- Discount: A percentage of the marked price that is subtracted to get the selling price.

Example: A 10% discount on R3,200 is 10/100 × 3200 = R320.
The selling price is 3200 - 320 = R2880.

- Percentage Profit/Loss: Calculated on the cost price.
  - Profit % = (Profit / Cost Price) × 100
  - Loss % = (Loss / Cost Price) × 100

- Interest: Money paid for borrowing or using money.
  - Simple Interest (I): I = P × R × T (Principal × Rate × Time)
  - Amount (A) to be paid back: A = P + I
`,
          questions: [
            { id: 1, question: "Which property is illustrated by the equation 8 + 12 = 12 + 8?", options: ["Associative property of addition", "Commutative property of addition", "Distributive property", "Additive property of 0"], correct: 1 },
            { id: 2, question: "Which calculation correctly shows the distributive property being used to simplify 6 × 204?", options: ["6 × (200 + 4) = 6 × 200 + 4", "6 × (200 + 4) = 6 × 200 + 6 × 4", "6 × (200 + 4) = 6 + 200 + 6 + 4", "6 × (200 + 4) = 6 × 200 × 4"], correct: 1 },
            { id: 3, question: "What is the correct estimate for 84 × 178 when rounding to the nearest ten?", options: ["80 × 180 = 14,400", "80 × 200 = 16,000", "90 × 180 = 16,200", "100 × 200 = 20,000"], correct: 0 },
            { id: 4, question: "Using rounding and compensating, what is the correct answer for 473 + 638 if you round to the nearest hundred?", options: ["500 + 600 = 1100", "500 + 600 = 1100, then -27 + 38 = 11, so 1100 + 11 = 1111", "500 + 600 = 1100, then -27 + 38 = 11, so 1100 - 11 = 1089", "470 + 640 = 1110"], correct: 1 },
            { id: 5, question: "What is the result of 7826 + 888 + 367?", options: ["9,081", "9,071", "9,181", "8,981"], correct: 0 },
            { id: 6, question: "Using the long division method, what is the quotient and remainder for 7234 ÷ 48?", options: ["150 R34", "140 R34", "150 R14", "160 R34"], correct: 0 },
            { id: 7, question: "Is 175 a multiple of 7?", options: ["Yes, because 7 × 25 = 175", "No, because 7 × 20 = 140 and 7 × 30 = 210", "Yes, because 7 + 168 = 175", "No, because 175 is odd"], correct: 0 },
            { id: 8, question: "Which of the following numbers is a prime number?", options: ["69", "71", "70", "68"], correct: 1 },
            { id: 9, question: "What is the prime factorisation of 444?", options: ["2² × 3 × 37", "2 × 3 × 74", "2² × 111", "3 × 4 × 37"], correct: 0 },
            { id: 10, question: "What is the Highest Common Factor (HCF) of 24, 28, and 42?", options: ["6", "4", "2", "1"], correct: 2 },
            { id: 11, question: "What is the Lowest Common Multiple (LCM) of 24, 28, and 42?", options: ["168", "84", "336", "672"], correct: 0 },
            { id: 12, question: "The ratio of boys to girls in a class is 2:3. If there are 25 learners in total, how many girls are there?", options: ["10", "15", "5", "12"], correct: 1 },
            { id: 13, question: "A car travels 180 km in 2 hours. What is its speed?", options: ["60 km/h", "180 km/h", "90 km/h", "360 km/h"], correct: 2 },
            { id: 14, question: "A shop offers a 20% discount on a marked price of R150. What is the selling price?", options: ["R30", "R120", "R130", "R170"], correct: 1 },
            { id: 15, question: "A dealer buys a sofa for R2,000 and sells it for R2,600. What is the percentage profit?", options: ["20%", "23%", "30%", "60%"], correct: 2 },
            { id: 16, question: "If you borrow R1,000 at a simple interest rate of 10% per year for 3 years, how much interest will you pay?", options: ["R100", "R300", "R1,300", "R1,000"], correct: 1 },
            { id: 17, question: "When adding numbers in columns, why do we carry a digit to the next column?", options: ["To make the number smaller", "Because the digit in the ones column is more than 9", "It is a random rule", "To ensure all numbers have the same number of digits"], correct: 1 },
            { id: 18, question: "What is 300 expressed as a product of prime factors in exponential form?", options: ["2 × 3 × 5²", "2² × 3 × 5²", "2³ × 3² × 5", "3 × 10²"], correct: 1 },
            { id: 19, question: "A recipe uses 2 parts sugar to 5 parts flour. How much sugar is needed if you use 400g of flour?", options: ["80g", "100g", "160g", "200g"], correct: 2 },
            { id: 20, question: "A trader marks an item at R500. He gives a discount of 10%. What is the discount amount?", options: ["R5", "R10", "R50", "R100"], correct: 2 }
          ]
        },
        {
          id: "t1-w3-4",
          label: "Week 3-4",
          topic: "Integers",
          notes: `
## What are Integers?

Integers are the set of whole numbers and their opposites: {..., -3, -2, -1, 0, 1, 2, 3, ...}

- Natural numbers (1, 2, 3...) are positive integers.
- Zero (0) is neither positive nor negative.
- Negative numbers are numbers smaller than 0.

## Why We Use Negative Numbers
- They help us solve problems where we subtract a larger number from a smaller one.
  Example: 10 - 20 = -10
- Adding a negative number has the same effect as subtracting the corresponding positive number.
  Example: 15 + (-5) = 15 - 5 = 10
- Subtracting a negative number has the same effect as adding the corresponding positive number.
  Example: 15 - (-5) = 15 + 5 = 20

## Additive Inverses
- The additive inverse of a number is the number that, when added to it, gives zero.
- Examples: The additive inverse of 5 is -5. The additive inverse of -12 is 12.
- 5 + (-5) = 0 and -12 + 12 = 0

## Adding and Subtracting Integers
- Adding a negative integer = subtract the positive: 8 + (-5) = 8 - 5 = 3
- Subtracting a negative integer = add the positive: 8 - (-5) = 8 + 5 = 13
- Adding two negative integers: Add their absolute values and keep the negative sign: (-20) + (-40) = -60
- Subtracting a positive integer from a negative: Move further left on the number line: -5 - 3 = -8

## Multiplying and Dividing Integers

| Operation | Result |
|-----------|--------|
| Positive × Positive | Positive |
| Positive × Negative | Negative |
| Negative × Positive | Negative |
| Negative × Negative | Positive |
| Positive ÷ Positive | Positive |
| Positive ÷ Negative | Negative |
| Negative ÷ Positive | Negative |
| Negative ÷ Negative | Positive |

Summary: Same signs → Positive answer. Different signs → Negative answer.

## Squares, Cubes and Roots with Integers

- Squaring: (x)² = x × x (always positive)
  Example: (-5)² = 25 and 5² = 25
- Cubing: (x)³ = x × x × x (keeps the sign)
  Example: (-5)³ = -125 and 5³ = 125
- Square Root: The positive and negative roots of a number.
  Example: The square roots of 100 are 10 and -10.
- Cube Root: The number that, when cubed, gives the result.
  Example: The cube root of -125 is -5, because (-5)³ = -125
`,
          questions: [
            { id: 1, question: "What is the result of -8 + (-5)?", options: ["-13", "-3", "13", "3"], correct: 0 },
            { id: 2, question: "Which of the following is the additive inverse of -17?", options: ["-17", "17", "1/17", "0"], correct: 1 },
            { id: 3, question: "Calculate (-5) × (-8)", options: ["-40", "40", "-13", "13"], correct: 1 },
            { id: 4, question: "What is 15 - (-7)?", options: ["8", "22", "-22", "-8"], correct: 1 },
            { id: 5, question: "What is -12 + 8?", options: ["-20", "-4", "4", "20"], correct: 1 },
            { id: 6, question: "Calculate (-24) ÷ 6", options: ["4", "-4", "-18", "18"], correct: 1 },
            { id: 7, question: "What is the square of (-9)?", options: ["81", "-81", "18", "-18"], correct: 0 },
            { id: 8, question: "What is the cube root of (-64)?", options: ["4", "-4", "8", "-8"], correct: 1 },
            { id: 9, question: "What is (-3)³?", options: ["27", "-27", "-9", "9"], correct: 1 },
            { id: 10, question: "At 5 a.m., the temperature was -5°C. At 1 p.m., it was 19°C. By how many degrees did it rise?", options: ["24°C", "14°C", "19°C", "5°C"], correct: 0 },
            { id: 11, question: "A diver is 150m below sea level. She moves 75m upwards. Where is she now?", options: ["75m above sea level", "75m below sea level", "225m below sea level", "150m above sea level"], correct: 1 },
            { id: 12, question: "What is the difference in depth between an 800m trench and a 2200m trench?", options: ["1400m", "3000m", "800m", "2200m"], correct: 0 },
            { id: 13, question: "Which statement is true for multiplying integers?", options: ["Positive × Negative = Positive", "Negative × Negative = Negative", "Positive × Negative = Negative", "Negative × Positive = Positive"], correct: 2 },
            { id: 14, question: "Calculate (-6) × 4 + (-8)", options: ["-32", "-16", "16", "32"], correct: 0 },
            { id: 15, question: "What is the positive square root of 64?", options: ["8", "-8", "16", "-16"], correct: 0 },
            { id: 16, question: "What is the cube root of 27?", options: ["3", "-3", "9", "-9"], correct: 0 },
            { id: 17, question: "Calculate (-5) × (-3) × (-2)", options: ["30", "-30", "10", "-10"], correct: 1 },
            { id: 18, question: "What is (-4)² - 10?", options: ["6", "-6", "26", "-26"], correct: 0 },
            { id: 19, question: "Which number is between -3 and -1 on the number line?", options: ["-4", "-2", "0", "1"], correct: 1 },
            { id: 20, question: "A submarine is 220m below sea level. It rises 75m. How far below sea level is it now?", options: ["145m", "295m", "75m", "220m"], correct: 0 }
          ]
        },
        {
          id: "t1-w5-6",
          label: "Week 5-6",
          topic: "Exponents",
          notes: `
## Exponential Notation
Writing repeated multiplication concisely.
- Base: The number being multiplied.
- Exponent: The number of times the base is multiplied by itself.

## Laws of Exponents

1. Product of Powers (Same base): Add the exponents.
   a^m × a^n = a^(m+n)
   Example: 2³ × 2⁴ = 2⁷

2. Power of a Power: Multiply the exponents.
   (a^m)^n = a^(m×n)
   Example: (3²)³ = 3⁶

3. Power of a Product: Distribute the exponent.
   (a × b)^m = a^m × b^m
   Example: (2 × 3)⁴ = 2⁴ × 3⁴

4. Quotient of Powers (Same base): Subtract the exponents.
   a^m ÷ a^n = a^(m-n) (where m > n)
   Example: 5⁷ ÷ 5³ = 5⁴

5. The Zero Exponent: Any number (except 0) to the power of 0 is 1.
   a⁰ = 1
   Example: 10⁰ = 1

## Working with Integers in Exponential Form
- (-5)² = 25 (The negative sign is inside the brackets, so it's also squared).
- -5² = -25 (The exponent applies only to the 5, not the negative sign).

## Square and Cube Roots of Fractions and Decimals
- To find the square root of a fraction, find the square root of the numerator and denominator.
  Example: √(9/16) = 3/4 because (3/4)² = 9/16
- To find the square root of a decimal, convert to a common fraction first.
  Example: √0.09 = √(9/100) = 3/10 = 0.3

## Scientific Notation
A way of writing very large numbers concisely: a number between 1 and 10 multiplied by a power of 10.
Example: 136,000,000 = 1.36 × 10⁸.
The exponent tells you how many places to move the decimal point.
`,
          questions: [
            { id: 1, question: "Simplify 3² × 3⁵", options: ["3⁷", "3¹⁰", "9⁷", "9¹⁰"], correct: 0 },
            { id: 2, question: "Simplify (2³)⁴", options: ["2⁷", "2¹²", "2⁶⁴", "2⁸"], correct: 1 },
            { id: 3, question: "Which is the correct simplification of (4 × 5)³?", options: ["4³ × 5³", "4 × 5³", "4³ × 5", "4 × 3 × 5"], correct: 0 },
            { id: 4, question: "Simplify 6⁵ ÷ 6³", options: ["6²", "6⁸", "6¹⁵", "6⁹"], correct: 0 },
            { id: 5, question: "What is the value of 10⁰?", options: ["0", "1", "10", "100"], correct: 1 },
            { id: 6, question: "What is (-3)²?", options: ["-9", "9", "-6", "6"], correct: 1 },
            { id: 7, question: "What is -3²?", options: ["-9", "9", "-6", "6"], correct: 0 },
            { id: 8, question: "Calculate √0.16", options: ["0.4", "0.04", "0.8", "0.08"], correct: 0 },
            { id: 9, question: "What is the cube root of 8/27?", options: ["2/3", "4/9", "8/27", "1/3"], correct: 0 },
            { id: 10, question: "Write 145,000,000 in scientific notation.", options: ["1.45 × 10⁸", "14.5 × 10⁷", "1.45 × 10⁶", "145 × 10⁶"], correct: 0 },
            { id: 11, question: "What is 3.4 × 10⁵ in ordinary notation?", options: ["340,000", "34,000", "3,400,000", "0.000034"], correct: 0 },
            { id: 12, question: "Which is bigger: 5.23 × 10¹⁰ or 2.9 × 10¹¹?", options: ["5.23 × 10¹⁰ is bigger", "2.9 × 10¹¹ is bigger", "They are equal", "Cannot be determined"], correct: 1 },
            { id: 13, question: "Simplify (x²)⁵", options: ["x⁷", "x¹⁰", "x²⁵", "x²"], correct: 1 },
            { id: 14, question: "Simplify x⁷ × x³", options: ["x¹⁰", "x²¹", "x⁴", "x⁷³"], correct: 0 },
            { id: 15, question: "Simplify y¹² ÷ y⁵", options: ["y⁷", "y¹⁷", "y⁶", "y⁰"], correct: 0 },
            { id: 16, question: "Calculate √121", options: ["11", "-11", "11 and -11", "12"], correct: 2 },
            { id: 17, question: "What is the cube root of (-125)?", options: ["-5", "5", "-25", "25"], correct: 0 },
            { id: 18, question: "Which number is in scientific notation?", options: ["0.34 × 10⁵", "3.4 × 10⁶", "34 × 10⁵", "3.4 × 10⁻²"], correct: 1 },
            { id: 19, question: "Calculate (0.6)²", options: ["0.36", "0.06", "3.6", "36"], correct: 0 },
            { id: 20, question: "Calculate √(81/144)", options: ["9/12", "3/4", "9/12 and -9/12", "3/4 and -3/4"], correct: 3 }
          ]
        },
        {
          id: "t1-w7-8",
          label: "Week 7-8",
          topic: "Numeric & Geometric Patterns",
          notes: `
## Types of Sequences (Numeric Patterns)

### 1. Constant Difference
A fixed number is added or subtracted each time. Called an arithmetic sequence.
Example: 2, 5, 8, 11, 14, ... (Add 3 each time)

### 2. Constant Ratio
Each term is multiplied by a fixed number to get the next term. Called a geometric sequence.
Example: 2, 6, 18, 54, ... (Multiply by 3 each time)

### 3. Other Patterns
Neither a constant difference nor a constant ratio. The difference between terms might change in a predictable way.
Example: 10, 17, 26, 37, 50, ... (Differences are 7, 9, 11, 13 - increasing by 2)

## The Position-Term Relationship
You can often find a rule that links the position of a term (1st, 2nd, 3rd, etc.) to its value. This is useful for finding the value of very large terms without writing them all out.

Example: For 5, 8, 11, 14, ... the rule is: Position × 3 + 2
- 1st term: 1 × 3 + 2 = 5
- 2nd term: 2 × 3 + 2 = 8
- 10th term: 10 × 3 + 2 = 32

## Geometric Patterns
Patterns using shapes, like squares, tiles, or circles.

- Square Numbers: 1, 4, 9, 16, 25, ... (Rule: Position², or n²)
- Triangular Numbers: 1, 3, 6, 10, 15, ... (Rule: Position × (Position + 1) ÷ 2, or n(n+1)/2)
`,
          questions: [
            { id: 1, question: "What type of sequence is 3, 7, 11, 15, 19, ...?", options: ["Constant ratio", "Constant difference", "Neither", "Both"], correct: 1 },
            { id: 2, question: "What is the next term in the sequence 2, 6, 18, 54, ...?", options: ["108", "162", "72", "216"], correct: 1 },
            { id: 3, question: "What is the 7th term of the sequence 3, 7, 11, 15, ...?", options: ["27", "23", "31", "19"], correct: 0 },
            { id: 4, question: "If the rule for a sequence is 2n + 5, what is the 10th term?", options: ["15", "25", "20", "30"], correct: 1 },
            { id: 5, question: "What is the 5th triangular number?", options: ["10", "12", "15", "20"], correct: 2 },
            { id: 6, question: "What is the next term in 1, 4, 9, 16, 25, ...?", options: ["30", "36", "49", "35"], correct: 1 },
            { id: 7, question: "What is the rule for the sequence 5, 9, 13, 17, 21, ...?", options: ["4n + 1", "4n - 1", "5n", "n + 4"], correct: 0 },
            { id: 8, question: "What is the next term in -3, -7, -11, -15, ...?", options: ["-19", "19", "-18", "-16"], correct: 0 },
            { id: 9, question: "What type of sequence is 1, 2, 4, 8, 16, ...?", options: ["Constant difference", "Constant ratio", "Neither", "Both"], correct: 1 },
            { id: 10, question: "What is the missing term in 2, 13, 26, 41, 58, ...?", options: ["77", "75", "73", "71"], correct: 0 },
            { id: 11, question: "The 100th term of 5, 8, 11, 14, ... is:", options: ["302", "303", "304", "305"], correct: 0 },
            { id: 12, question: "What is the next figure in a pattern where 1st has 1 square, 2nd has 4, 3rd has 9?", options: ["16", "25", "36", "49"], correct: 0 },
            { id: 13, question: "What is the 20th square number?", options: ["400", "20", "200", "40"], correct: 0 },
            { id: 14, question: "What is the 15th triangular number?", options: ["120", "115", "105", "110"], correct: 0 },
            { id: 15, question: "What is the missing term in 4, 5, 8, 13, 20, 29, 40, ...?", options: ["53", "55", "51", "49"], correct: 0 },
            { id: 16, question: "A sequence starts with 10 and each term increases by 7 more than the previous increase. The first five terms are:", options: ["10, 17, 26, 37, 50", "10, 17, 25, 35, 45", "10, 17, 24, 33, 42", "10, 18, 28, 40, 54"], correct: 0 },
            { id: 17, question: "What is the rule for 5, 9, 13, 17, ... in terms of position n?", options: ["4n + 1", "4n - 1", "5n", "3n + 2"], correct: 0 },
            { id: 18, question: "The next term in 100, -50, 25, -12.5, ... is:", options: ["6.25", "-6.25", "12.5", "-12.5"], correct: 0 },
            { id: 19, question: "What is the 50th square number?", options: ["2500", "50", "500", "250"], correct: 0 },
            { id: 20, question: "The 100th term of a sequence is 301. If the first term is 5 and it has a constant difference, what is the difference?", options: ["3", "4", "2", "5"], correct: 0 }
          ]
        },
        {
          id: "t1-w9-10",
          label: "Week 9-10",
          topic: "Functions & Relationships",
          notes: `
## Variables and Constants
- Variable: A quantity that can change (e.g., the number of bricks you need depends on the number of houses).
- Constant: A quantity that does not change (e.g., the number of bricks required for one house is fixed).
- A relationship exists when one variable influences another.

## Describing Relationships
Relationships can be described in four different ways:

### 1. Flow Diagrams
Show the input number, the operator (what to do), and the output number.
Example: Input → ×3 → +2 → Output
If input is 5: 5 × 3 + 2 = 17

### 2. Tables
Show the input numbers and their corresponding output numbers.

Example:
| Input (x) | 1 | 2 | 3 | 4 |
|-----------|---|---|---|---|
| Output (y) | 5 | 8 | 11 | 14 |

### 3. Word Formulae
Describe the relationship in words.
Example: The output number is equal to the input number multiplied by 3, then plus 2.

### 4. Symbolic Formulae
Use letters to represent variables.
Example: y = 3x + 2 (Input is x, output is y).

## Algebraic Language
- Terms: Parts of an expression separated by + or - signs. 3x, 2x, and y are terms in 3x + 2x + y
- Coefficient: The number in front of a variable. In 3x, 3 is the coefficient.
- Constant: A number on its own. In 3x + 2, 2 is the constant.
- Like Terms: Terms with the same variable(s) raised to the same power. 3x and 2x are like terms. 5x² and 3x² are like terms. 3x² and 3x are unlike terms.
- Equivalent Expressions: Different expressions that give the same value for the same input. 2x + 3x is equivalent to 5x.

## Simplifying Algebraic Expressions
Combine like terms by adding or subtracting their coefficients.
Example: 30x + 80 + 5x + 20 = (30x + 5x) + (80 + 20) = 35x + 100

## Algebraic Equations
An equation is a mathematical sentence that is true for some numbers and false for others.
Example: 3x + 2 = 23

Solving an equation means finding the value of the unknown (x) that makes the equation true.

Solving by Inspection: Guessing and checking the answer.

Additive and Multiplicative Inverses: Use these to isolate the unknown and solve systematically.

3x + 2 = 23
Subtract 2 from both sides: 3x = 21
Divide both sides by 3: x = 7

## Equations with Exponents
To solve 2^x = 32, express both sides with the same base: 2^x = 2⁵.
Therefore, x = 5.
`,
          questions: [
            { id: 1, question: "For the flow diagram Input → ×4 → −1 → Output, what is the output when the input is 7?", options: ["27", "24", "28", "32"], correct: 0 },
            { id: 2, question: "Which expression is equivalent to 5x + 3x?", options: ["8x", "8x²", "15x", "15x²"], correct: 0 },
            { id: 3, question: "Simplify the expression: 7x + 5 - 3x + 2", options: ["4x + 7", "10x + 7", "4x + 3", "10x + 3"], correct: 0 },
            { id: 4, question: "Solve for x: 2x + 5 = 21", options: ["x = 8", "x = 13", "x = 26", "x = 10"], correct: 0 },
            { id: 5, question: "Solve for x: 3^x = 81", options: ["x = 3", "x = 4", "x = 5", "x = 6"], correct: 1 },
            { id: 6, question: "What is the coefficient of x in 7x + 3?", options: ["7", "3", "7x", "x"], correct: 0 },
            { id: 7, question: "Identify the constant in 5y - 12", options: ["5", "y", "12", "-12"], correct: 3 },
            { id: 8, question: "Which of these are like terms?", options: ["3x and 3y", "5x² and 5x", "7ab and 2ab", "4 and 4x"], correct: 2 },
            { id: 9, question: "What is -3x + 7x?", options: ["4x", "-4x", "10x", "-10x"], correct: 0 },
            { id: 10, question: "Solve 4x = 28", options: ["x = 7", "x = 8", "x = 6", "x = 9"], correct: 0 },
            { id: 11, question: "Solve x + 7 = 15", options: ["x = 8", "x = 22", "x = 15", "x = 7"], correct: 0 },
            { id: 12, question: "Solve 3x - 4 = 20", options: ["x = 8", "x = 7", "x = 6", "x = 5"], correct: 0 },
            { id: 13, question: "Solve 2(x + 3) = 16", options: ["x = 5", "x = 8", "x = 13", "x = 3"], correct: 0 },
            { id: 14, question: "Solve 4x + 2x = 36", options: ["x = 6", "x = 9", "x = 4", "x = 8"], correct: 0 },
            { id: 15, question: "Solve 2^x = 64", options: ["x = 4", "x = 5", "x = 6", "x = 7"], correct: 2 },
            { id: 16, question: "Complete the table for y = 2x + 3. When x = 4, what is y?", options: ["8", "11", "7", "10"], correct: 1 },
            { id: 17, question: "Complete the table for y = 3x - 2. When y = 10, what is x?", options: ["2", "3", "4", "5"], correct: 2 },
            { id: 18, question: "In the table below, what is the rule? x: 1,2,3,4 | y: 7,10,13,16", options: ["y = 3x + 4", "y = 3x + 5", "y = 4x + 3", "y = 2x + 5"], correct: 0 },
            { id: 19, question: "In the table below, what is the missing value? x: 1,2,3,4 | y: 5,9,13,?", options: ["15", "17", "19", "21"], correct: 1 },
            { id: 20, question: "If y = 2x + 10 and y = 20, what is x?", options: ["5", "10", "15", "20"], correct: 0 }
          ]
        },
        {
          id: "t1-w11",
          label: "Week 11",
          topic: "Revision & Assessment",
          notes: `
## Term 1 Revision

This week is for revising all the Term 1 topics covered in Weeks 1-10.

### Focus Areas:
- Whole Numbers: Properties, calculations, prime factorisation, LCM, HCF, problem-solving.
- Integers: Operations, squares, cubes and roots.
- Exponents: Laws, scientific notation, rational numbers.
- Numeric and Geometric Patterns: Sequences, rules, position-term relationships.
- Functions and Relationships: Flow diagrams, tables, formulae, equations.

### Study Tips:
1. Review all your notes from each week.
2. Practice the MCQ questions again, focusing on areas where you made mistakes.
3. Try to explain each concept to someone else (or to yourself) - teaching is the best way to learn.
4. Pay special attention to the laws of exponents and the properties of whole numbers.
5. Practice the long division and multiplication methods step by step.

### Key Formulas to Remember:
- HCF: Find common prime factors with lowest exponents.
- LCM: List all prime factors with highest exponents.
- Simple Interest: I = P × R × T
- Profit % = (Profit / Cost Price) × 100
- Loss % = (Loss / Cost Price) × 100

Good luck with your assessment! You've got this! 💪
`,
          questions: [
            { id: 1, question: "What is (-4) + (-7)?", options: ["-11", "11", "-3", "3"], correct: 0 },
            { id: 2, question: "Simplify 2⁵ × 2³", options: ["2⁸", "2¹⁵", "4⁸", "4¹⁵"], correct: 0 },
            { id: 3, question: "What is the next term in the sequence 7, 11, 15, 19, ...?", options: ["23", "22", "24", "21"], correct: 0 },
            { id: 4, question: "Solve for x: 5x - 8 = 22", options: ["x = 6", "x = 5", "x = 7", "x = 4"], correct: 0 },
            { id: 5, question: "What is the highest common factor of 12 and 18?", options: ["6", "3", "4", "2"], correct: 0 },
            { id: 6, question: "What is the LCM of 6 and 8?", options: ["24", "12", "48", "18"], correct: 0 },
            { id: 7, question: "Calculate (-5) × (-3) × (-2)", options: ["-30", "30", "-10", "10"], correct: 0 },
            { id: 8, question: "In the table, what is the rule if x = 1,2,3,4 and y = 3,6,9,12?", options: ["y = 3x", "y = x + 2", "y = 2x + 1", "y = 3x + 1"], correct: 0 },
            { id: 9, question: "Write 0.00056 in scientific notation.", options: ["5.6 × 10⁻⁴", "56 × 10⁻⁵", "5.6 × 10⁴", "0.56 × 10⁻³"], correct: 0 },
            { id: 10, question: "Simplify (3x²)(2x³)", options: ["6x⁵", "6x⁶", "5x⁵", "6x"], correct: 0 },
            { id: 11, question: "What is the 8th term of the sequence 2, 5, 8, 11, ...?", options: ["23", "24", "25", "26"], correct: 0 },
            { id: 12, question: "What is the prime factorization of 60?", options: ["2² × 3 × 5", "2 × 3 × 5²", "2³ × 3 × 5", "2 × 3² × 5"], correct: 0 },
            { id: 13, question: "What is the square root of 144?", options: ["12 and -12", "12", "-12", "16"], correct: 0 },
            { id: 14, question: "Calculate (6 - 8)²", options: ["4", "-4", "36", "-36"], correct: 0 },
            { id: 15, question: "What is the correct estimate for 29 × 312?", options: ["30 × 300 = 9,000", "30 × 310 = 9,300", "29 × 300 = 8,700", "30 × 312 = 9,360"], correct: 0 },
            { id: 16, question: "If 3 apples cost R12, what is the cost of 7 apples?", options: ["R28", "R21", "R24", "R35"], correct: 0 },
            { id: 17, question: "Simplify 3a + 7b - 2a + 3b", options: ["a + 10b", "5a + 10b", "a + 4b", "5a + 4b"], correct: 0 },
            { id: 18, question: "What is the fifth term of n² - 1?", options: ["24", "15", "16", "25"], correct: 0 },
            { id: 19, question: "A shop buys a shirt for R200 and sells it for R250. What is the percentage profit?", options: ["25%", "20%", "50%", "30%"], correct: 0 },
            { id: 20, question: "What is the temperature change from -8°C to 15°C?", options: ["23°C", "7°C", "15°C", "-23°C"], correct: 0 }
          ]
        }
      ]
    },
    term2: {
      id: "term2",
      label: "Term 2",
      weeks: [
        {
          id: "t2-w1-2",
          label: "Week 1-2",
          topic: "Exponents (Continued)",
          notes: `
## Revising Exponential Notation

Writing repeated multiplication concisely.
- **Base:** The number being multiplied.
- **Exponent:** The number of times the base is multiplied by itself.

Example: 3 × 3 × 3 × 3 × 3 × 3 = 3⁶ (3 is the base, 6 is the exponent)

## Comparing and Representing Integers in Exponential Form
- (-5)² = 25 (The negative sign is inside the brackets, so it's also squared).
- -5² = -25 (The exponent applies only to the 5, not the negative sign).

**Important:** The calculator "understands" these as different numbers.

## Scientific Notation (Positive Exponents)
A way of writing very large numbers concisely: a number between 1 and 10 multiplied by a power of 10.
Example: 136,000,000 = 1.36 × 10⁸.
The exponent tells you how many places to move the decimal point.
Example: 3.4 × 10⁵ = 340,000

## Laws of Exponents (Revision)

1. **Product of Powers:** a^m × a^n = a^(m+n)
   Example: 2³ × 2⁴ = 2⁷

2. **Power of a Power:** (a^m)^n = a^(m×n)
   Example: (3²)³ = 3⁶

3. **Power of a Product:** (a × b)^m = a^m × b^m
   Example: (2 × 3)⁴ = 2⁴ × 3⁴

4. **Quotient of Powers:** a^m ÷ a^n = a^(m-n) (where m > n)
   Example: 5⁷ ÷ 5³ = 5⁴

5. **Zero Exponent:** a⁰ = 1
   Example: 10⁰ = 1

---

## Calculations with Exponents

Perform calculations involving all four operations with numbers in exponential form (exponents up to 5).

Example: 3² × 2³ + 5 × √100 = 9 × 8 + 5 × 10 = 72 + 50 = 122

## Square and Cube Roots of Rational Numbers

To find the square root of a fraction, find the square root of the numerator and denominator separately.
Example: √(9/16) = 3/4

To find the square root of a decimal, convert to a common fraction first.
Example: √0.09 = √(9/100) = 3/10 = 0.3

Cube roots work the same way: ∛(8/27) = 2/3
`,
          questions: [
            { id: 1, question: "Simplify (-4)²", options: ["-16", "16", "-8", "8"], correct: 1 },
            { id: 2, question: "Simplify -4²", options: ["-16", "16", "-8", "8"], correct: 0 },
            { id: 3, question: "Simplify 2³ × 2⁵", options: ["2⁸", "2¹⁵", "4⁸", "2²"], correct: 0 },
            { id: 4, question: "Simplify (5²)³", options: ["5⁵", "5⁶", "5⁸", "5⁹"], correct: 1 },
            { id: 5, question: "Simplify (2 × 5)⁴", options: ["2⁴ × 5⁴", "2 × 5⁴", "2⁴ × 5", "2⁴ × 5⁴"], correct: 0 },
            { id: 6, question: "Simplify 6⁷ ÷ 6³", options: ["6⁴", "6¹⁰", "6²¹", "6⁰"], correct: 0 },
            { id: 7, question: "What is (3x²)³ simplified?", options: ["3x⁶", "27x⁶", "9x⁵", "27x⁵"], correct: 1 },
            { id: 8, question: "Write 4,500,000 in scientific notation.", options: ["4.5 × 10⁶", "45 × 10⁵", "4.5 × 10⁵", "0.45 × 10⁷"], correct: 0 },
            { id: 9, question: "Write 2.3 × 10⁷ in ordinary notation.", options: ["23,000,000", "2,300,000", "230,000,000", "0.00000023"], correct: 0 },
            { id: 10, question: "Calculate √0.49", options: ["0.7", "0.07", "7", "0.49"], correct: 0 },
            { id: 11, question: "Calculate ∛(27/64)", options: ["3/4", "3/8", "9/16", "27/64"], correct: 0 },
            { id: 12, question: "Which is the correct simplification of (x³)⁴?", options: ["x⁷", "x¹²", "x⁸¹", "x⁶⁴"], correct: 1 },
            { id: 13, question: "Simplify x⁸ ÷ x²", options: ["x⁴", "x⁶", "x¹⁰", "x¹⁶"], correct: 1 },
            { id: 14, question: "What is the value of (2x)³ when x = 3?", options: ["27", "54", "216", "72"], correct: 2 },
            { id: 15, question: "Calculate 3² + 4²", options: ["7", "25", "14", "49"], correct: 1 },
            { id: 16, question: "Calculate √144", options: ["12", "14", "16", "18"], correct: 0 },
            { id: 17, question: "What is (-2)⁵?", options: ["32", "-32", "10", "-10"], correct: 1 },
            { id: 18, question: "Simplify (2x²)³", options: ["2x⁶", "8x⁶", "8x⁵", "6x⁶"], correct: 1 },
            { id: 19, question: "Which number is in scientific notation?", options: ["0.5 × 10⁴", "5.0 × 10³", "50 × 10²", "5 × 10²"], correct: 1 },
            { id: 20, question: "Calculate (-3)³ + 2", options: ["-27", "-25", "29", "-29"], correct: 1 }
          ]
        },
        {
          id: "t2-w3-4",
          label: "Week 3-4",
          topic: "Algebraic Expressions",
          notes: `
## Algebraic Language

- **Variables:** Letters used to represent unknown numbers. Examples: x, y, a, b
- **Constants:** Numbers on their own that do not change. Examples: 5, -3, 12
- **Coefficients:** The number written in front of a variable. In 3x, the coefficient is 3.
- **Terms:** Parts of an expression separated by + or - signs.
  - 3x² + 5x - 7 has three terms: 3x², 5x, and -7

## Like and Unlike Terms

**Like Terms:** Have the same variable(s) raised to the same power(s).
- 3x and 5x are like terms.
- 4x² and 7x² are like terms.
- 3xy and 5xy are like terms.
- Key: The order of variables doesn't matter: 3xy and 5xy are like terms.

**Unlike Terms:** Have different variables or the same variables but different exponents.
- 3x² and 5x are unlike terms.
- 3x and 3y are unlike terms.

## Simplifying Algebraic Expressions

1. Identify like terms.
2. Add or subtract the coefficients of like terms.
3. Keep the variable part unchanged.

Example 1: 3x + 5x = (3 + 5)x = 8x
Example 2: 7x² - 3x² + 2x + 5 = (7 - 3)x² + 2x + 5 = 4x² + 2x + 5
Example 3: 2a + 3b + 4a - b = (2a + 4a) + (3b - b) = 6a + 2b

## Expanding Algebraic Expressions

Using the distributive property to remove brackets.
- a(b + c) = ab + ac
- a(b - c) = ab - ac

Example 1: 3(x + 4) = 3x + 12
Example 2: x(2x - 5) = 2x² - 5x
Example 3: -2(3x - 4) = -6x + 8

## Multiplying Monomials
Multiply the coefficients and multiply the variables (add exponents of the same base).

Example: (3x)(2x²) = 6x³

## Dividing by Monomials
Divide coefficients and subtract exponents of the same base.

Example: (12x⁵) ÷ (3x²) = 4x³

## Squares, Cubes and Roots of Algebraic Terms
- (3x)² = 9x²
- (2x)³ = 8x³
- √(9x²) = 3x
- ∛(8x³) = 2x
`,
          questions: [
            { id: 1, question: "Identify the coefficient in 5x² + 3", options: ["5", "2", "3", "x"], correct: 0 },
            { id: 2, question: "Which of the following are like terms?", options: ["3x and 3x²", "5xy and 5yx", "4a and 4b", "7x² and 7y²"], correct: 1 },
            { id: 3, question: "Simplify 3x + 7x", options: ["10x", "10x²", "21x", "21x²"], correct: 0 },
            { id: 4, question: "Simplify 4y² + 2y - y² + 3y", options: ["3y² + 5y", "5y² + y", "3y² - y", "5y² + 5y"], correct: 0 },
            { id: 5, question: "Expand 3(x + 7)", options: ["3x + 21", "3x + 7", "x + 21", "3x + 10"], correct: 0 },
            { id: 6, question: "Expand -2(x - 5)", options: ["-2x + 10", "-2x - 10", "2x + 10", "2x - 10"], correct: 0 },
            { id: 7, question: "Expand x(3x - 4)", options: ["3x² - 4x", "3x² - 4", "x² - 4x", "3x² + 4x"], correct: 0 },
            { id: 8, question: "Simplify (3x²)(2x)", options: ["6x³", "6x²", "5x³", "5x²"], correct: 0 },
            { id: 9, question: "Simplify (12x⁵) ÷ (3x²)", options: ["4x³", "9x³", "4x⁷", "9x⁷"], correct: 0 },
            { id: 10, question: "Simplify (3x)²", options: ["9x²", "9x", "6x²", "3x²"], correct: 0 },
            { id: 11, question: "Simplify (2x)³", options: ["8x³", "8x", "6x³", "2x³"], correct: 0 },
            { id: 12, question: "Simplify √(16x²)", options: ["4x", "8x", "4x²", "16x"], correct: 0 },
            { id: 13, question: "Simplify ∛(27x³)", options: ["3x", "9x", "27x", "3x³"], correct: 0 },
            { id: 14, question: "Simplify 5a + 3b - 2a + 4b", options: ["3a + 7b", "7a + 7b", "3a + b", "7a + b"], correct: 0 },
            { id: 15, question: "Expand 3(2x + 1) + 4(x - 2)", options: ["10x - 5", "6x - 3", "10x + 5", "6x - 5"], correct: 0 },
            { id: 16, question: "Which expression is equivalent to 2(x + 3) + 4x?", options: ["6x + 6", "6x + 3", "2x + 12", "8x + 6"], correct: 0 },
            { id: 17, question: "Simplify 7x - (3x - 2)", options: ["4x + 2", "4x - 2", "10x - 2", "10x + 2"], correct: 0 },
            { id: 18, question: "What is the constant term in 3x² - 5x + 7?", options: ["7", "-5", "3", "2"], correct: 0 },
            { id: 19, question: "How many terms does 4x³ - 2x² + x - 8 have?", options: ["4", "3", "5", "2"], correct: 0 },
            { id: 20, question: "Evaluate 2x² + 3x - 1 when x = 2", options: ["13", "9", "15", "7"], correct: 0 }
          ]
        },
        {
          id: "t2-w5-6",
          label: "Week 5-6",
          topic: "Algebraic Equations",
          notes: `
## Setting Up Equations

An equation is a mathematical sentence showing that two expressions are equal.

Example: 2x + 3 = 11

Equations can be used to describe problem situations.

## Solving Equations by Inspection

This means trying different values for the unknown until the equation is true.

Example: Solve 3x = 12. Try x = 4: 3 × 4 = 12, so x = 4

## Using Additive and Multiplicative Inverses

**Additive Inverse:** The number you add to get zero.
- Additive inverse of +5 is -5.
- Additive inverse of -3 is +3.

**Multiplicative Inverse:** The number you multiply by to get one.
- Multiplicative inverse of 3 is 1/3.
- Multiplicative inverse of -2 is -1/2.

## Solving Steps:
1. Use the additive inverse to isolate the term with the variable.
2. Use the multiplicative inverse to isolate the variable.

Example 1: Solve 3x + 2 = 23
- Subtract 2 from both sides: 3x = 21
- Divide both sides by 3: x = 7

Example 2: Solve x/5 = 10
- Multiply both sides by 5: x = 50

## Equations with Exponents
Write both sides with the same base.
Example: 2^x = 32
32 = 2⁵, so x = 5

## Substitution
Replacing a variable with a given number to find the value of the expression.
Example: If y = 2x + 3 and x = 4, then y = 2 × 4 + 3 = 11

## Generating Tables of Ordered Pairs
Substitute values of x into the equation to find y.

Example: For y = 2x + 1

| x | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| y | 1 | 3 | 5 | 7 |
`,
          questions: [
            { id: 1, question: "Solve x + 7 = 15", options: ["x = 8", "x = 22", "x = 15", "x = 7"], correct: 0 },
            { id: 2, question: "Solve 4x = 28", options: ["x = 7", "x = 8", "x = 6", "x = 9"], correct: 0 },
            { id: 3, question: "Solve 3x - 4 = 20", options: ["x = 8", "x = 7", "x = 6", "x = 5"], correct: 0 },
            { id: 4, question: "Solve 2(x + 3) = 16", options: ["x = 5", "x = 8", "x = 13", "x = 3"], correct: 0 },
            { id: 5, question: "Solve 4x + 2x = 36", options: ["x = 6", "x = 9", "x = 4", "x = 8"], correct: 0 },
            { id: 6, question: "Solve 2^x = 64", options: ["x = 4", "x = 5", "x = 6", "x = 7"], correct: 2 },
            { id: 7, question: "Solve x/5 = 8", options: ["x = 40", "x = 13", "x = 3", "x = 5"], correct: 0 },
            { id: 8, question: "Solve 2x + 5 = 21", options: ["x = 8", "x = 13", "x = 26", "x = 10"], correct: 0 },
            { id: 9, question: "Solve -3x = 15", options: ["x = -5", "x = 5", "x = -3", "x = 3"], correct: 0 },
            { id: 10, question: "Solve x - 8 = -3", options: ["x = 5", "x = -5", "x = 11", "x = -11"], correct: 0 },
            { id: 11, question: "Solve 3x - 7 = 2x + 5", options: ["x = 12", "x = 2", "x = -2", "x = 10"], correct: 0 },
            { id: 12, question: "Solve 2^(3x) = 64", options: ["x = 1", "x = 2", "x = 3", "x = 4"], correct: 1 },
            { id: 13, question: "If y = 3x + 4, what is y when x = 5?", options: ["19", "15", "20", "12"], correct: 0 },
            { id: 14, question: "If y = 2x - 5, what is x when y = 11?", options: ["8", "7", "6", "9"], correct: 0 },
            { id: 15, question: "Complete: y = 4x when x = -2", options: ["y = -8", "y = 8", "y = 2", "y = -2"], correct: 0 },
            { id: 16, question: "What is the missing x value in the table for y = 3x + 1 when y = 16?", options: ["5", "4", "6", "3"], correct: 0 },
            { id: 17, question: "If 2a + 3 = 15, what is a?", options: ["6", "7", "8", "9"], correct: 0 },
            { id: 18, question: "Solve (2x)/5 = 8", options: ["x = 20", "x = 4", "x = 16", "x = 40"], correct: 0 },
            { id: 19, question: "Solve 3x - 2 = 2x + 7", options: ["x = 9", "x = -9", "x = 5", "x = -5"], correct: 0 },
            { id: 20, question: "If y = x² + 3, what is y when x = 4?", options: ["19", "16", "7", "11"], correct: 0 }
          ]
        },
        {
          id: "t2-w7-8",
          label: "Week 7-8",
          topic: "Functions and Relationships",
          notes: `
## Input and Output Values

Relationships can be shown in three ways:
1. Flow diagrams
2. Tables
3. Formulae

## Flow Diagrams
Show the input, operator, and output.

Example: Input → ×3 → +2 → Output

| Input | 1 | 2 | 3 | 4 |
|-------|---|---|---|---|
| Output| 5 | 8 | 11 | 14 |

## Formulae
Use letters to represent variables.
Example: y = 3x + 2 (input is x, output is y)

## Equivalent Forms
Different ways of describing the same relationship:
- **Verbal:** "Multiply the input by 3 and add 2"
- **Flow Diagram:** Input → ×3 → +2 → Output
- **Table:** As shown above
- **Formula:** y = 3x + 2
- **Equation:** 3x + 2 = 17 (Solving for a specific input)

## Finding the Rule
Examine the relationship between input and output values. Look for a pattern.

Example:
- x = 1 → y = 7
- x = 2 → y = 10
- x = 3 → y = 13
- The rule is y = 3x + 4

## Solving Problems Using Functions
- Use the formula to find output values.
- Use the formula to find input values (solve equations).
`,
          questions: [
            { id: 1, question: "For the flow diagram Input → ×4 → −1 → Output, what is the output when the input is 7?", options: ["27", "24", "28", "32"], correct: 0 },
            { id: 2, question: "Complete the table for y = 3x + 2: x: 1,2,3,4 | y: ?,8,11,14", options: ["5", "6", "7", "4"], correct: 0 },
            { id: 3, question: "What is the formula for the table: x:1,2,3,4 | y:7,10,13,16", options: ["y = 3x + 4", "y = 3x + 5", "y = 4x + 3", "y = 2x + 5"], correct: 0 },
            { id: 4, question: "What is the verbal description of y = 4x - 2?", options: ["Multiply the input by 4 and subtract 2", "Multiply the input by 4 and add 2", "Subtract 2 from the input and multiply by 4", "Multiply the input by 4 and subtract 2"], correct: 0 },
            { id: 5, question: "If y = 2x + 10 and y = 20, what is x?", options: ["5", "10", "15", "20"], correct: 0 },
            { id: 6, question: "Complete the table for y = 2x - 3: x:1,2,3,4 | y:-1,?,3,5", options: ["1", "2", "0", "4"], correct: 0 },
            { id: 7, question: "What is the missing x value in the table for y = 5x + 2 when y = 17?", options: ["3", "4", "5", "6"], correct: 0 },
            { id: 8, question: "Which table matches the flow diagram: Input → ×2 → +4 → Output?", options: ["x:1,2,3 | y:6,8,10", "x:1,2,3 | y:5,7,9", "x:1,2,3 | y:6,7,8", "x:1,2,3 | y:2,4,6"], correct: 0 },
            { id: 9, question: "If y = 3x + 1, what is y when x = -2?", options: ["-5", "5", "-7", "7"], correct: 0 },
            { id: 10, question: "The rule is 'multiply the input by 2 and subtract 5'. What is the formula?", options: ["y = 2x - 5", "y = 2x + 5", "y = 5 - 2x", "y = 5x - 2"], correct: 0 },
            { id: 11, question: "Complete: For the flow diagram Input → ×3 → −4 → Output, when input is 5, output is:", options: ["11", "15", "8", "10"], correct: 0 },
            { id: 12, question: "If y = 4x and y = 36, what is x?", options: ["9", "8", "7", "10"], correct: 0 },
            { id: 13, question: "What is the rule for the table: x:2,4,6,8 | y:6,10,14,18", options: ["y = 2x + 2", "y = 2x + 1", "y = x + 4", "y = 3x"], correct: 0 },
            { id: 14, question: "If y = x² + 2, what is y when x = 3?", options: ["11", "9", "5", "8"], correct: 0 },
            { id: 15, question: "Complete the table for y = -2x + 3: x:0,1,2 | y:3,1,?", options: ["-1", "0", "1", "2"], correct: 0 },
            { id: 16, question: "If y = 3x - 4 and y = 14, what is x?", options: ["6", "5", "4", "3"], correct: 0 },
            { id: 17, question: "Which is the correct flow diagram for y = 2x + 7?", options: ["Input → ×2 → +7 → Output", "Input → +7 → ×2 → Output", "Input → ×2 → -7 → Output", "Input → -7 → ×2 → Output"], correct: 0 },
            { id: 18, question: "Complete the table for y = 5 - 2x: x:0,1,2 | y:5,3,?", options: ["1", "2", "0", "4"], correct: 0 },
            { id: 19, question: "If y = 3x + 2 and the input is doubled, what happens to the output?", options: ["It doubles", "It increases by 3", "It increases by 6", "It is halved"], correct: 0 },
            { id: 20, question: "The relationship is y = 2x - 1. When x = 0, what is y?", options: ["-1", "1", "0", "2"], correct: 0 }
          ]
        },
        {
          id: "t2-w9-10",
          label: "Week 9-10",
          topic: "Graphs",
          notes: `
## Interpreting Global Graphs

A graph shows the relationship between two variables.
- The horizontal axis (x-axis) shows the independent variable (input).
- The vertical axis (y-axis) shows the dependent variable (output).

## Key Features of Graphs:
- **Linear:** A straight line (constant rate of change).
- **Non-linear:** A curved line (changing rate of change).
- **Constant:** The output stays the same as the input increases (horizontal line).
- **Increasing:** The output goes up as the input goes up.
- **Decreasing:** The output goes down as the input goes up.
- **Maximum:** The highest point on the graph.
- **Minimum:** The lowest point on the graph.
- **Discrete Data:** Data that can only take specific values (e.g., number of people). Plotted as points.
- **Continuous Data:** Data that can take any value (e.g., temperature). Plotted as a line or curve.

## Plotting Graphs
1. Complete a table for the equation.
2. Plot the points on the Cartesian plane (x, y).
3. If the data is continuous, join the points.

Example: For y = 2x + 1, you get the points (-2, -3), (-1, -1), (0, 1), (1, 3), (2, 5).

## The Cartesian Plane
- Divided into four quadrants.
- Quadrant I: (+, +)
- Quadrant II: (-, +)
- Quadrant III: (-, -)
- Quadrant IV: (+, -)
`,
          questions: [
            { id: 1, question: "A graph that is a straight line is called:", options: ["Non-linear", "Linear", "Discrete", "Curved"], correct: 1 },
            { id: 2, question: "A horizontal line on a graph shows:", options: ["Increasing", "Decreasing", "Constant", "Discrete"], correct: 2 },
            { id: 3, question: "Which quadrant contains the point (3, -4)?", options: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"], correct: 3 },
            { id: 4, question: "Which point is in Quadrant II?", options: ["(-3, 4)", "(3, -4)", "(-3, -4)", "(3, 4)"], correct: 0 },
            { id: 5, question: "A graph that increases at a steady rate is called:", options: ["Non-linear increasing", "Linear increasing", "Non-linear decreasing", "Linear decreasing"], correct: 1 },
            { id: 6, question: "The highest point on a graph is the:", options: ["Minimum", "Maximum", "Constant", "Zero"], correct: 1 },
            { id: 7, question: "Complete the table for y = 3x - 1: x:0,1,2 | y:-1,2,?", options: ["5", "6", "4", "3"], correct: 0 },
            { id: 8, question: "What is the point for x = 2 and y = -3?", options: ["(-2, 3)", "(2, -3)", "(2, 3)", "(-2, -3)"], correct: 1 },
            { id: 9, question: "A graph that goes down from left to right is:", options: ["Increasing", "Constant", "Decreasing", "Non-linear"], correct: 2 },
            { id: 10, question: "Which type of data should be plotted as individual points?", options: ["Continuous", "Discrete", "Linear", "Non-linear"], correct: 1 },
            { id: 11, question: "A curve on a graph shows a relationship that is:", options: ["Linear", "Constant", "Non-linear", "Discrete"], correct: 2 },
            { id: 12, question: "Plot the point (-4, -2). Which quadrant is it in?", options: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"], correct: 2 },
            { id: 13, question: "The graph of y = 2x is a:", options: ["Curved line", "Straight line through the origin", "Horizontal line", "Vertical line"], correct: 1 },
            { id: 14, question: "If the temperature rises then falls, the graph would:", options: ["Go up then stay constant", "Go up then go down", "Go down then go up", "Stay constant then go up"], correct: 1 },
            { id: 15, question: "A graph with a maximum value would:", options: ["Decrease then increase", "Increase then decrease", "Stay constant", "Be a straight line"], correct: 1 },
            { id: 16, question: "Complete: For y = -2x + 3, when x = 2, y =", options: ["-1", "1", "7", "-7"], correct: 0 },
            { id: 17, question: "Which of the following is a continuous variable?", options: ["Number of students", "Number of cars", "Temperature", "Number of apples"], correct: 2 },
            { id: 18, question: "The origin on the Cartesian plane is:", options: ["(1, 1)", "(0, 0)", "(-1, -1)", "(0, 1)"], correct: 1 },
            { id: 19, question: "For the point (0, 5), the x-coordinate is:", options: ["5", "0", "-5", "1"], correct: 1 },
            { id: 20, question: "If data is continuous, how are the plotted points connected?", options: ["They are not connected", "With a straight or curved line", "With a bar", "With dots only"], correct: 1 }
          ]
        },
        {
          id: "t2-w11-12",
          label: "Week 11-12",
          topic: "Revision & Assessment",
          notes: `
## Term 1 & 2 Revision

This fortnight is for revising all Term 1 and Term 2 topics.

### Topics to revise:
- Whole Numbers
- Integers
- Exponents
- Numeric and Geometric Patterns
- Functions and Relationships
- Algebraic Expressions
- Algebraic Equations
- Graphs

### Study Tips:
1. Review all your notes from each week.
2. Practice the MCQ questions again, focusing on areas where you made mistakes.
3. Try to explain each concept to someone else - teaching is the best way to learn.
4. Pay special attention to:
   - Laws of exponents
   - Expanding and simplifying algebraic expressions
   - Solving equations step by step
   - Reading and interpreting graphs

### Key Formulas to Remember:
- HCF: Find common prime factors with lowest exponents.
- LCM: List all prime factors with highest exponents.
- Simple Interest: I = P × R × T
- Profit % = (Profit / Cost Price) × 100
- Loss % = (Loss / Cost Price) × 100

Good luck with your assessment! 💪
`,
          questions: [
            { id: 1, question: "Simplify (-3)²", options: ["9", "-9", "6", "-6"], correct: 0 },
            { id: 2, question: "Simplify -3²", options: ["9", "-9", "6", "-6"], correct: 1 },
            { id: 3, question: "Simplify 3x + 5x", options: ["8x", "8x²", "15x", "15x²"], correct: 0 },
            { id: 4, question: "Expand 2(x + 5)", options: ["2x + 10", "2x + 5", "x + 10", "2x + 7"], correct: 0 },
            { id: 5, question: "Solve 2x + 3 = 15", options: ["x = 6", "x = 9", "x = 12", "x = 4"], correct: 0 },
            { id: 6, question: "Solve 3x = 81", options: ["x = 3", "x = 4", "x = 5", "x = 6"], correct: 1 },
            { id: 7, question: "What is the coefficient in 7x² - 3?", options: ["7", "2", "-3", "x"], correct: 0 },
            { id: 8, question: "Which quadrant is (-5, 3) in?", options: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"], correct: 1 },
            { id: 9, question: "Simplify (x²)³", options: ["x⁵", "x⁶", "x⁸", "x⁹"], correct: 1 },
            { id: 10, question: "What is the rule for y = 3x - 2 when x = 4?", options: ["y = 10", "y = 12", "y = 14", "y = 8"], correct: 0 },
            { id: 11, question: "Simplify 4x - 2x + 7", options: ["2x + 7", "6x + 7", "2x + 7", "4x + 7"], correct: 0 },
            { id: 12, question: "Solve 2x/3 = 8", options: ["x = 12", "x = 6", "x = 24", "x = 4"], correct: 0 },
            { id: 13, question: "Write 5,600,000 in scientific notation.", options: ["5.6 × 10⁶", "56 × 10⁵", "5.6 × 10⁵", "0.56 × 10⁷"], correct: 0 },
            { id: 14, question: "What is the square root of 121?", options: ["11", "12", "13", "10"], correct: 0 },
            { id: 15, question: "Simplify (3x)(2x²)", options: ["6x³", "6x²", "5x³", "5x²"], correct: 0 },
            { id: 16, question: "If y = 3x + 2 and x = -1, what is y?", options: ["-1", "1", "-5", "5"], correct: 0 },
            { id: 17, question: "A graph that goes up then down has a:", options: ["Minimum", "Maximum", "Constant", "Zero"], correct: 1 },
            { id: 18, question: "Simplify 2(x + 3) - x", options: ["x + 6", "x + 3", "3x + 6", "2x + 6"], correct: 0 },
            { id: 19, question: "Solve 3x - 7 = 14", options: ["x = 7", "x = 8", "x = 6", "x = 9"], correct: 0 },
            { id: 20, question: "What is the value of (-2)⁴?", options: ["16", "-16", "8", "-8"], correct: 0 }
          ]
        }
      ]
    },
    term3: {
      id: "term3",
      label: "Term 3",
      weeks: [
        {
          id: "t3-w1-2",
          label: "Week 1-2",
          topic: "Common Fractions",
          notes: `
## Equivalent Fractions

Fractions that represent the same value but look different.
Example: 1/2 = 2/4 = 4/8 = 8/16
To find equivalent fractions, multiply or divide the numerator and denominator by the same number.

## Simplifying Fractions

Divide the numerator and denominator by their Highest Common Factor (HCF).
Example: 12/18 → HCF is 6 → 12÷6/18÷6 = 2/3

## Adding and Subtracting Fractions

Step 1: Find a common denominator (LCM of the denominators).
Step 2: Convert each fraction to an equivalent fraction with the common denominator.
Step 3: Add or subtract the numerators and keep the denominator the same.
Step 4: Simplify if possible.

Example 1 (Addition): 2/3 + 3/4
LCM of 3 and 4 is 12.
2/3 = 8/12, 3/4 = 9/12
8/12 + 9/12 = 17/12 = 1 5/12

Example 2 (Subtraction): 5/6 - 1/4
LCM of 6 and 4 is 12.
5/6 = 10/12, 1/4 = 3/12
10/12 - 3/12 = 7/12

## Multiplying Fractions

Multiply the numerators together and the denominators together.
Example: 2/3 × 4/5 = 8/15
With mixed numbers, first convert to improper fractions.
Example: 1 1/2 × 2/3 = 3/2 × 2/3 = 6/6 = 1

## Dividing Fractions

Keep the first fraction, change division to multiplication, flip the second fraction (multiply by the reciprocal).
Example: 2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6

## Finding Fractions of Whole Numbers

Multiply the fraction by the whole number.
Example: 3/4 of 20 = 3/4 × 20 = 60/4 = 15

## Tenths, Hundredths and Thousands

These are fractions with denominators of 10, 100, and 1000.
They form the link between common fractions, decimal fractions, and percentages.
Example: 0.7 = 7/10 = 70/100 = 70%
`,
          questions: [
            { id: 1, question: "Which fraction is equivalent to 2/3?", options: ["4/6", "3/4", "2/6", "6/9"], correct: 0 },
            { id: 2, question: "What is 3/4 in simplest form?", options: ["1/2", "3/4", "6/8", "9/12"], correct: 1 },
            { id: 3, question: "Calculate 2/5 + 1/3", options: ["3/8", "11/15", "3/15", "6/15"], correct: 1 },
            { id: 4, question: "Calculate 5/6 - 1/4", options: ["4/2", "7/12", "4/24", "1/2"], correct: 1 },
            { id: 5, question: "Calculate 2/3 × 3/4", options: ["6/12", "1/2", "5/7", "6/7"], correct: 1 },
            { id: 6, question: "Calculate 3/4 ÷ 2/5", options: ["6/20", "15/8", "3/10", "6/9"], correct: 1 },
            { id: 7, question: "What is 3/5 of 40?", options: ["24", "20", "30", "12"], correct: 0 },
            { id: 8, question: "Write 7/20 as a decimal.", options: ["0.35", "0.7", "0.07", "0.14"], correct: 0 },
            { id: 9, question: "What is 0.45 as a simplified fraction?", options: ["45/100", "9/20", "4/5", "45/10"], correct: 1 },
            { id: 10, question: "Calculate 1 1/2 + 2 1/3", options: ["3 1/2", "3 5/6", "3 2/3", "4 1/6"], correct: 1 },
            { id: 11, question: "Calculate 2 1/4 × 2/3", options: ["1 1/2", "1 1/3", "1 1/4", "1 1/6"], correct: 0 },
            { id: 12, question: "What is the reciprocal of 3/4?", options: ["4/3", "3/4", "1/4", "3/1"], correct: 0 },
            { id: 13, question: "Calculate 2/3 of 27", options: ["9", "18", "15", "12"], correct: 1 },
            { id: 14, question: "What is 0.3 as a percentage?", options: ["3%", "30%", "300%", "0.3%"], correct: 1 },
            { id: 15, question: "Calculate 3/8 + 1/4", options: ["5/8", "4/12", "1/2", "7/8"], correct: 0 },
            { id: 16, question: "Calculate 7/10 - 2/5", options: ["5/10", "3/10", "1/10", "9/10"], correct: 1 },
            { id: 17, question: "What is 4/5 as a decimal?", options: ["0.4", "0.8", "0.5", "0.75"], correct: 1 },
            { id: 18, question: "Calculate 1/2 ÷ 3/4", options: ["3/8", "2/3", "3/2", "1/3"], correct: 1 },
            { id: 19, question: "What is 25% as a fraction in simplest form?", options: ["25/100", "1/4", "1/2", "5/20"], correct: 1 },
            { id: 20, question: "Calculate 3/5 + 2/3 - 1/2", options: ["23/30", "13/30", "17/30", "7/30"], correct: 0 }
          ]
        },
        {
          id: "t3-w3-4",
          label: "Week 3-4",
          topic: "Decimal Fractions",
          notes: `
## Equivalent Forms

Common fractions, decimal fractions, and percentages are different ways of writing the same number.

Common Fraction to Decimal: Divide the numerator by the denominator.
Example: 3/4 = 3÷4 = 0.75

Decimal to Common Fraction: Write as a fraction with a power of 10 (10, 100, 1000) as the denominator, then simplify.
Example: 0.75 = 75/100 = 3/4

Common Fraction/Decimal to Percentage: Multiply by 100.
Example: 0.75 × 100 = 75%

## Comparing and Ordering Decimal Fractions

Compare the digits from left to right.
Example: 0.45 > 0.405 because the hundredths digit is different (5 > 0).
To compare, write them with the same number of decimal places.
Example: 0.3 vs 0.25 → 0.30 > 0.25

## Calculations with Decimal Fractions

Addition/Subtraction: Align the decimal points.
Example: 16.52 + 9.38 = 25.90

Multiplication: Multiply as whole numbers, then count decimal places.
Example: 0.12 × 0.3 = 0.036 (3 decimal places)

Division: Convert to whole numbers by multiplying by powers of 10.
Example: 62.5 ÷ 2.5 = 625 ÷ 25 = 25

## Rounding Off Decimal Fractions

Look at the digit to the right of the place you are rounding to.
If it's 5 or more, round up. If it's 4 or less, round down.
Example: 13.526 rounded to 2 decimal places is 13.53.
Example: 13.521 rounded to 2 decimal places is 13.52.

## Solving Problems

Use the four operations with decimal fractions in contexts such as money and measurement.
Example: A bottle of juice costs R12.50. What is the cost of 8 bottles? 12.50 × 8 = R100.00
`,
          questions: [
            { id: 1, question: "What is 3/5 as a decimal?", options: ["0.3", "0.5", "0.6", "0.35"], correct: 2 },
            { id: 2, question: "What is 0.35 as a fraction in simplest form?", options: ["35/100", "7/20", "3/5", "7/25"], correct: 1 },
            { id: 3, question: "What is 0.45 as a percentage?", options: ["45%", "4.5%", "0.45%", "450%"], correct: 0 },
            { id: 4, question: "Which decimal is the biggest?", options: ["0.8", "0.85", "0.75", "0.9"], correct: 3 },
            { id: 5, question: "Calculate 16.52 + 9.38", options: ["25.90", "25.90", "26.90", "24.90"], correct: 0 },
            { id: 6, question: "Calculate 45.67 - 23.25", options: ["22.42", "22.52", "22.32", "22.00"], correct: 0 },
            { id: 7, question: "Calculate 0.12 × 0.3", options: ["0.36", "0.036", "3.6", "36"], correct: 1 },
            { id: 8, question: "Calculate 62.5 ÷ 2.5", options: ["25", "250", "2.5", "0.25"], correct: 0 },
            { id: 9, question: "Round 13.526 to two decimal places.", options: ["13.53", "13.52", "13.50", "13.00"], correct: 0 },
            { id: 10, question: "What is 75% as a decimal?", options: ["0.75", "7.5", "75", "0.075"], correct: 0 },
            { id: 11, question: "Calculate 0.9 - 0.045", options: ["0.855", "0.845", "0.85", "0.955"], correct: 0 },
            { id: 12, question: "What is 0.06 as a percentage?", options: ["0.6%", "6%", "60%", "600%"], correct: 1 },
            { id: 13, question: "Calculate 1.3 × 1.6", options: ["2.08", "2.08", "20.8", "0.208"], correct: 0 },
            { id: 14, question: "Round 3.65 to the nearest whole number.", options: ["3", "4", "3.7", "3.6"], correct: 1 },
            { id: 15, question: "Calculate 8.345 ÷ 5", options: ["1.669", "1.669", "16.69", "0.1669"], correct: 0 },
            { id: 16, question: "Which is bigger: 0.11 or 0.087?", options: ["0.11", "0.087", "They are equal", "Cannot be determined"], correct: 0 },
            { id: 17, question: "Calculate 3.05 × 1.3", options: ["3.965", "39.65", "0.3965", "396.5"], correct: 0 },
            { id: 18, question: "What is 0.5 as a fraction in simplest form?", options: ["5/10", "1/2", "2/4", "50/100"], correct: 1 },
            { id: 19, question: "Calculate 14.5 ÷ 6 to two decimal places.", options: ["2.41", "2.42", "2.40", "2.50"], correct: 1 },
            { id: 20, question: "A bottle of juice costs R12.50. How much do 8 bottles cost?", options: ["R100.00", "R96.00", "R104.00", "R120.00"], correct: 0 }
          ]
        },
        {
          id: "t3-w5-6",
          label: "Week 5-6",
          topic: "Theorem of Pythagoras",
          notes: `
## What is Pythagoras' Theorem?

In a right-angled triangle, the square of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the other two sides.

Formula: a² + b² = c² where c is the hypotenuse.

## Finding the Missing Side

If you know the two shorter sides (a and b):
c² = a² + b²
Then find the square root: c = √(a² + b²)

Example: If a = 3 and b = 4
c² = 3² + 4² = 9 + 16 = 25
c = √25 = 5

If you know the hypotenuse (c) and one shorter side (a):
b² = c² - a²
Then find the square root: b = √(c² - a²)

Example: If c = 13 and a = 5
b² = 13² - 5² = 169 - 25 = 144
b = √144 = 12

## Determining if a Triangle is Right-Angled

Using the converse of Pythagoras. If c² = a² + b², where c is the longest side, then the triangle is right-angled.

Example: Sides 6, 8, 10:
10² = 100
6² + 8² = 36 + 64 = 100
Since they are equal, it is right-angled.

Example: Sides 3, 4, 6:
6² = 36
3² + 4² = 9 + 16 = 25
Since they are not equal, it is not right-angled.

## Surds

Sometimes the answer is not a whole number. Leave it as a square root if it is irrational.
Example: If c² = 34, then c = √34.
`,
          questions: [
            { id: 1, question: "Pythagoras' Theorem applies to which type of triangle?", options: ["Equilateral", "Isosceles", "Right-angled", "Scalene"], correct: 2 },
            { id: 2, question: "In Pythagoras' Theorem, what is the hypotenuse?", options: ["The shortest side", "The side opposite the right angle", "The side adjacent to the right angle", "The base of the triangle"], correct: 1 },
            { id: 3, question: "If a = 6 and b = 8, what is c?", options: ["10", "14", "12", "16"], correct: 0 },
            { id: 4, question: "If c = 13 and a = 5, what is b?", options: ["12", "14", "10", "8"], correct: 0 },
            { id: 5, question: "Which set of sides forms a right-angled triangle?", options: ["3, 4, 5", "4, 5, 6", "5, 6, 7", "6, 7, 8"], correct: 0 },
            { id: 6, question: "What is the length of the hypotenuse if the other sides are 9 and 12?", options: ["15", "21", "18", "13"], correct: 0 },
            { id: 7, question: "Is a triangle with sides 4, 5, 6 right-angled?", options: ["Yes", "No", "Cannot determine", "Only if it's isosceles"], correct: 1 },
            { id: 8, question: "If c² = 34, what is c?", options: ["√34", "34", "17", "2√17"], correct: 0 },
            { id: 9, question: "A ladder is leaning against a wall. The bottom is 3m from the wall and the ladder is 5m long. How high up the wall does it reach?", options: ["4m", "2m", "5m", "3m"], correct: 0 },
            { id: 10, question: "Which of the following is a Pythagorean triple?", options: ["5, 12, 13", "4, 5, 6", "7, 8, 9", "2, 3, 4"], correct: 0 },
            { id: 11, question: "If a = 8 and c = 17, what is b?", options: ["15", "14", "16", "13"], correct: 0 },
            { id: 12, question: "A right-angled triangle has sides 6, 8, x. What is x?", options: ["10", "9", "14", "7"], correct: 0 },
            { id: 13, question: "In a right-angled triangle, the square of the hypotenuse is equal to:", options: ["The sum of the squares of the other two sides", "The difference of the squares of the other two sides", "The product of the other two sides", "The sum of the other two sides"], correct: 0 },
            { id: 14, question: "A diagonal of a rectangle is 10cm and one side is 8cm. What is the other side?", options: ["6 cm", "12 cm", "14 cm", "9 cm"], correct: 0 },
            { id: 15, question: "If a² + b² = c², then triangle ABC is:", options: ["Acute-angled", "Obtuse-angled", "Right-angled", "Equilateral"], correct: 2 },
            { id: 16, question: "What is √144?", options: ["12", "14", "16", "18"], correct: 0 },
            { id: 17, question: "A triangle has sides 5, 5, 7. Is it right-angled?", options: ["Yes", "No", "Cannot determine", "Only if it's isosceles"], correct: 1 },
            { id: 18, question: "If a = 7 and b = 24, what is c?", options: ["25", "31", "23", "30"], correct: 0 },
            { id: 19, question: "What does the 'converse' of Pythagoras' theorem tell us?", options: ["If a triangle is right-angled, then c² = a² + b²", "If c² = a² + b², then the triangle is right-angled", "That Pythagoras was wrong", "That all triangles are right-angled"], correct: 1 },
            { id: 20, question: "A ship sails 40 km east and 30 km south. How far is it from its starting point?", options: ["50 km", "70 km", "10 km", "35 km"], correct: 0 }
          ]
        },
        {
          id: "t3-w7-8",
          label: "Week 7-8",
          topic: "Area and Perimeter of 2D Shapes",
          notes: `
## Perimeter

The distance around the outside of a shape.

- Square: P = 4s
- Rectangle: P = 2(l + b) or P = 2l + 2b
- Triangle: P = a + b + c
- Circle: P = 2πr or P = πd (π ≈ 3.14)

## Area

The space inside a 2D shape.

- Square: A = s²
- Rectangle: A = l × b
- Triangle: A = 1/2 × b × h (where b is the base and h is the perpendicular height)
- Circle: A = πr²

## The Circle

- Radius (r): Distance from the centre to the edge.
- Diameter (d): Distance across the circle through the centre. d = 2r
- Circumference: The distance around the circle.
- Pi (π): The ratio of circumference to diameter. π ≈ 3.14

## Composite Shapes

Break the shape down into simpler shapes (rectangles, triangles, circles).
Calculate the area of each part and add them together.
`,
          questions: [
            { id: 1, question: "What is the perimeter of a square with side 7cm?", options: ["14 cm", "28 cm", "49 cm", "21 cm"], correct: 1 },
            { id: 2, question: "What is the area of a rectangle with length 8 cm and breadth 5 cm?", options: ["26 cm²", "40 cm²", "13 cm²", "20 cm²"], correct: 1 },
            { id: 3, question: "What is the area of a triangle with base 10 cm and height 6 cm?", options: ["60 cm²", "30 cm²", "16 cm²", "120 cm²"], correct: 1 },
            { id: 4, question: "What is the circumference of a circle with radius 7 cm? (Use π = 3.14)", options: ["21.98 cm", "43.96 cm", "153.86 cm", "14 cm"], correct: 1 },
            { id: 5, question: "What is the area of a circle with radius 5 cm? (Use π = 3.14)", options: ["31.4 cm²", "78.5 cm²", "15.7 cm²", "157 cm²"], correct: 1 },
            { id: 6, question: "What is the diameter of a circle with radius 12 cm?", options: ["6 cm", "24 cm", "18 cm", "36 cm"], correct: 1 },
            { id: 7, question: "The perimeter of a rectangle is 30 cm. The length is 9 cm. What is the breadth?", options: ["6 cm", "12 cm", "4 cm", "8 cm"], correct: 0 },
            { id: 8, question: "A square has an area of 64 cm². What is its side length?", options: ["8 cm", "4 cm", "16 cm", "32 cm"], correct: 0 },
            { id: 9, question: "What is the perimeter of a triangle with sides 5 cm, 12 cm, and 13 cm?", options: ["30 cm", "31 cm", "29 cm", "25 cm"], correct: 0 },
            { id: 10, question: "The diameter of a circle is 14 cm. What is its radius?", options: ["7 cm", "28 cm", "14 cm", "21 cm"], correct: 0 },
            { id: 11, question: "What is the area of a square with side 9 cm?", options: ["81 cm²", "36 cm²", "18 cm²", "27 cm²"], correct: 0 },
            { id: 12, question: "A triangle has an area of 36 cm² and a base of 9 cm. What is its height?", options: ["8 cm", "4 cm", "18 cm", "12 cm"], correct: 0 },
            { id: 13, question: "What is the circumference of a circle with diameter 8 cm? (Use π = 3.14)", options: ["25.12 cm", "50.24 cm", "12.56 cm", "20.56 cm"], correct: 0 },
            { id: 14, question: "A rectangle has length 12 cm and breadth 5 cm. What is its area?", options: ["60 cm²", "34 cm²", "17 cm²", "30 cm²"], correct: 0 },
            { id: 15, question: "A shape is made of a rectangle and a semi-circle. The area is found by:", options: ["Adding the areas of both shapes", "Subtracting the areas", "Multiplying the areas", "Dividing the areas"], correct: 0 },
            { id: 16, question: "The radius of a circle is 3 cm. What is its area? (Use π = 3.14)", options: ["28.26 cm²", "18.84 cm²", "9.42 cm²", "21.98 cm²"], correct: 0 },
            { id: 17, question: "Convert 5 cm² to mm²", options: ["50 mm²", "500 mm²", "5,000 mm²", "0.5 mm²"], correct: 1 },
            { id: 18, question: "Convert 2 m² to cm²", options: ["20 cm²", "200 cm²", "20,000 cm²", "2,000 cm²"], correct: 2 },
            { id: 19, question: "The perimeter of a rectangle is 24 cm. If the breadth is 5 cm, what is the length?", options: ["7 cm", "12 cm", "14 cm", "19 cm"], correct: 0 },
            { id: 20, question: "A square and a rectangle have the same perimeter. If the square has side 6 cm and the rectangle has breadth 4 cm, what is the length of the rectangle?", options: ["8 cm", "6 cm", "10 cm", "12 cm"], correct: 0 }
          ]
        },
        {
          id: "t3-w9-10",
          label: "Week 9-10",
          topic: "Surface Area and Volume of 3D Objects",
          notes: `
## Surface Area

The total area of all the faces of a 3D object.

- Cube: SA = 6s² (6 faces, each with area s²)
- Rectangular Prism: SA = 2(lb + lh + bh)
- Triangular Prism: SA = 2(1/2 × b × h) + (perimeter of triangle × length)
  Or: SA = (base area × 2) + (lateral faces area)

## Volume

The amount of space a 3D object takes up.

- Cube: V = s³
- Rectangular Prism: V = l × b × h
- Triangular Prism: V = (1/2 × b × h) × length

## Capacity

The amount of space inside a container.
- 1 cm³ = 1 mL
- 1 m³ = 1 kL

## Converting Between Cubic Units

- 1 cm³ = 1,000 mm³
- 1 m³ = 1,000,000 cm³
- 1 km³ = 1,000,000,000 m³
`,
          questions: [
            { id: 1, question: "What is the surface area of a cube with side 5 cm?", options: ["25 cm²", "125 cm²", "150 cm²", "100 cm²"], correct: 2 },
            { id: 2, question: "What is the volume of a cube with side 4 cm?", options: ["16 cm³", "64 cm³", "24 cm³", "48 cm³"], correct: 1 },
            { id: 3, question: "What is the volume of a rectangular prism with length 6 cm, breadth 3 cm, and height 4 cm?", options: ["72 cm³", "36 cm³", "48 cm³", "24 cm³"], correct: 0 },
            { id: 4, question: "What is the surface area of a rectangular prism with length 5 cm, breadth 3 cm, and height 2 cm?", options: ["30 cm²", "62 cm²", "46 cm²", "52 cm²"], correct: 1 },
            { id: 5, question: "How many faces does a cube have?", options: ["4", "6", "8", "12"], correct: 1 },
            { id: 6, question: "What is the volume of a triangular prism with a triangular base of base 4 cm, height 3 cm, and length 10 cm?", options: ["60 cm³", "120 cm³", "30 cm³", "40 cm³"], correct: 0 },
            { id: 7, question: "What is capacity measured in?", options: ["cm³", "mL", "m²", "kg"], correct: 1 },
            { id: 8, question: "Convert 3 cm³ to mm³", options: ["30 mm³", "300 mm³", "3,000 mm³", "30,000 mm³"], correct: 2 },
            { id: 9, question: "Convert 2 m³ to cm³", options: ["200 cm³", "2,000 cm³", "20,000 cm³", "2,000,000 cm³"], correct: 3 },
            { id: 10, question: "If a cube has a volume of 64 cm³, what is its side length?", options: ["4 cm", "8 cm", "6 cm", "16 cm"], correct: 0 },
            { id: 11, question: "The surface area of a cube is 96 cm². What is its side length?", options: ["4 cm", "8 cm", "6 cm", "16 cm"], correct: 0 },
            { id: 12, question: "A rectangular prism has a volume of 120 cm³. Its length is 8 cm and breadth is 5 cm. What is its height?", options: ["3 cm", "6 cm", "4 cm", "8 cm"], correct: 0 },
            { id: 13, question: "1 m³ is equal to:", options: ["1,000 cm³", "100 cm³", "1,000,000 cm³", "10,000 cm³"], correct: 2 },
            { id: 14, question: "The net of a cube consists of how many squares?", options: ["4", "6", "8", "12"], correct: 1 },
            { id: 15, question: "Capacity is:", options: ["The amount of space an object takes up", "The amount of space inside a container", "The weight of an object", "The length of an object"], correct: 1 },
            { id: 16, question: "What is the surface area of a triangular prism with a triangular base area of 12 cm² and a rectangular side area of 30 cm² each? (It has 3 rectangular sides)", options: ["54 cm²", "114 cm²", "84 cm²", "24 cm²"], correct: 1 },
            { id: 17, question: "1 cm³ =", options: ["1 mL", "1 L", "1 kL", "1 m³"], correct: 0 },
            { id: 18, question: "A rectangular prism has dimensions 5 cm, 4 cm, and 3 cm. What is its surface area?", options: ["60 cm²", "94 cm²", "120 cm²", "47 cm²"], correct: 1 },
            { id: 19, question: "If the radius of a cylinder is 7 cm and height is 10 cm, what is the volume? (Use π = 3.14)", options: ["1,538.6 cm³", "220 cm³", "1,540 cm³", "154 cm³"], correct: 0 },
            { id: 20, question: "What is the volume of a rectangular prism with dimensions 3 cm × 4 cm × 5 cm?", options: ["60 cm³", "12 cm³", "120 cm³", "20 cm³"], correct: 0 }
          ]
        }
      ]
    },
    term4: {
      id: "term4",
      label: "Term 4",
      weeks: [
        {
          id: "t4-w1-2",
          label: "Week 1-2",
          topic: "Functions and Relationships (Continued)",
          notes: `
## Revision of Functions

A relationship where each input has exactly one output.

Functions can be represented using:
1. Flow diagrams
2. Tables
3. Formulae
4. Equations
5. Graphs

## Completing Tables from Formulae

Substitute input values (x) into the formula to find output values (y).
Example: For y = 3x - 2, when x = 1, y = 1; when x = 2, y = 4; etc.

## Finding Rules from Tables

Look for the relationship between x and y.

Example:
x: 1 2 3 4
y: 5 8 11 14

As x increases by 1, y increases by 3 → coefficient is 3.
When x = 0, y = 2 → constant is 2.
Rule: y = 3x + 2

## Generating Tables of Ordered Pairs

Complete the table and write the ordered pairs (x, y). These points can then be plotted on the Cartesian plane.
`,
          questions: [
            { id: 1, question: "For y = 4x - 1, what is y when x = 3?", options: ["11", "12", "10", "8"], correct: 0 },
            { id: 2, question: "What is the rule for the table? x:1,2,3,4 | y:2,5,8,11", options: ["y = 3x - 1", "y = 3x + 1", "y = 2x + 1", "y = 2x - 1"], correct: 0 },
            { id: 3, question: "If y = 2x + 7, what is x when y = 19?", options: ["6", "5", "7", "4"], correct: 0 },
            { id: 4, question: "Complete the table for y = -2x + 5: x:-1,0,1,2 | y:7,5,?,1", options: ["3", "4", "2", "1"], correct: 0 },
            { id: 5, question: "What is the ordered pair for x = 2 in y = 3x - 4?", options: ["(2, 2)", "(2, 1)", "(2, 0)", "(2, -2)"], correct: 0 },
            { id: 6, question: "For y = -3x + 2, what is y when x = -1?", options: ["5", "-5", "1", "-1"], correct: 0 },
            { id: 7, question: "If y = 5x - 3 and y = 12, what is x?", options: ["3", "4", "5", "6"], correct: 0 },
            { id: 8, question: "Complete the table for y = x² + 1: x:-2,-1,0,1,2 | y:5,2,1,2,?", options: ["5", "4", "6", "3"], correct: 0 },
            { id: 9, question: "The table shows y = 2x + 3. What is the missing value? x:0,1,2,3 | y:3,5,?,9", options: ["7", "6", "8", "4"], correct: 0 },
            { id: 10, question: "If y = 4x - 3, what is y when x = -2?", options: ["-11", "11", "5", "-5"], correct: 0 }
          ]
        },
        {
          id: "t4-w3-4",
          label: "Week 3-4",
          topic: "Algebraic Equations (Continued)",
          notes: `
## Solving More Complex Equations

Some equations require combining like terms first.

Example: 4x + 6x = 20 → 10x = 20 → x = 2
Example: 5x = 40 + 3x → 2x = 40 → x = 20
Example: 3x + 1 - x = 0 → 2x + 1 = 0 → 2x = -1 → x = -1/2

## Equations Involving Fractions

Example: x/2 = 8 → Multiply both sides by 2 → x = 16
Example: 2x/3 = 12 → Multiply by 3 → 2x = 36 → x = 18

## Equations with Exponents

Write both sides with the same base.
Example: 2^x = 64 → 2^x = 2^6 → x = 6
Example: 3^(x+1) = 81 → 3^(x+1) = 3^4 → x + 1 = 4 → x = 3
`,
          questions: [
            { id: 1, question: "Solve 4x + 6x = 20", options: ["x = 2", "x = 4", "x = 6", "x = 8"], correct: 0 },
            { id: 2, question: "Solve 5x = 40 + 3x", options: ["x = 20", "x = 10", "x = 30", "x = 5"], correct: 0 },
            { id: 3, question: "Solve 3x + 1 - x = 0", options: ["x = -1/2", "x = 1/2", "x = -1", "x = 1"], correct: 0 },
            { id: 4, question: "Solve x/2 = 8", options: ["x = 4", "x = 10", "x = 16", "x = 8"], correct: 2 },
            { id: 5, question: "Solve 2x/3 = 12", options: ["x = 8", "x = 18", "x = 6", "x = 24"], correct: 1 },
            { id: 6, question: "Solve 2^x = 64", options: ["x = 4", "x = 5", "x = 6", "x = 7"], correct: 2 },
            { id: 7, question: "Solve 3^(x+1) = 81", options: ["x = 4", "x = 3", "x = 5", "x = 6"], correct: 1 },
            { id: 8, question: "Solve x + 20 + 4x = -55", options: ["x = 15", "x = -15", "x = 10", "x = -10"], correct: 1 },
            { id: 9, question: "Solve 4^x + 2 = 100", options: ["x = 2", "x = 3", "x = 4", "x = 5"], correct: 0 },
            { id: 10, question: "Solve 4x³ = 32", options: ["x = 2", "x = 4", "x = 8", "x = 16"], correct: 0 }
          ]
        },
        {
          id: "t4-w5-6",
          label: "Week 5-6",
          topic: "Graphs (Continued)",
          notes: `
## Plotting Points on the Cartesian Plane

The x-coordinate tells you how far left or right to move.
The y-coordinate tells you how far up or down to move.
Example: (3, 2) → Move 3 right, 2 up.

## Drawing Graphs

1. Complete a table of values for the equation.
2. Plot the ordered pairs.
3. Join the points (if continuous data).

Example: For y = 2x + 1, the points are:
x = -2 → y = -3 → (-2, -3)
x = -1 → y = -1 → (-1, -1)
x = 0 → y = 1 → (0, 1)
x = 1 → y = 3 → (1, 3)
x = 2 → y = 5 → (2, 5)

## Interpret Graphs

- Linear: Straight line → constant rate of change.
- Non-linear: Curve → changing rate of change.
- Maximum: Highest point.
- Minimum: Lowest point.
- Constant: Horizontal line.
`,
          questions: [
            { id: 1, question: "The point (3, -4) is in which quadrant?", options: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"], correct: 3 },
            { id: 2, question: "Plot the points for y = 2x - 3 when x = 0, 1, 2. Which are correct?", options: ["(0, -3), (1, -1), (2, 1)", "(0, 3), (1, 5), (2, 7)", "(0, -3), (1, -2), (2, -1)", "(0, 3), (1, 1), (2, -1)"], correct: 0 },
            { id: 3, question: "A straight line graph shows:", options: ["Non-linear change", "Constant change", "No change", "Changing rate"], correct: 1 },
            { id: 4, question: "A graph that goes up and down has a:", options: ["Constant value", "Maximum and minimum", "Linear relationship", "No relationship"], correct: 1 },
            { id: 5, question: "Which point is on the line y = 3x - 1?", options: ["(1, 2)", "(2, 5)", "(3, 8)", "All of the above"], correct: 3 },
            { id: 6, question: "If y = -2x + 4, what is the point when x = 3?", options: ["(3, -2)", "(3, 2)", "(3, -4)", "(3, 4)"], correct: 0 },
            { id: 7, question: "The independent variable is plotted on the:", options: ["x-axis", "y-axis", "z-axis", "None of the above"], correct: 0 },
            { id: 8, question: "The graph of y = 4 is:", options: ["A vertical line", "A horizontal line", "A diagonal line", "A curve"], correct: 1 },
            { id: 9, question: "Which graph shows a decreasing relationship?", options: ["y = 2x + 1", "y = -3x + 5", "y = x²", "y = 4"], correct: 1 },
            { id: 10, question: "The point (-2, -3) is in which quadrant?", options: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"], correct: 2 }
          ]
        },
        {
          id: "t4-w7-8",
          label: "Week 7-8",
          topic: "Transformation Geometry",
          notes: `
## Translations (Slides)

A figure moves to a new position by a specified distance and direction.
All points move the same distance and direction.
The image is congruent to the original.

## Reflections (Flips)

A figure is flipped over a line of reflection (mirror line).
Each point is the same distance from the mirror line as its image.
The image is congruent to the original.

## Rotations (Turns)

A figure is turned around a point (centre of rotation) by a specified angle.
The image is congruent to the original.

## Enlargements and Reductions

The size changes but the shape stays the same.

Scale Factor: The number by which all side lengths are multiplied.
- Scale factor > 1 → Enlargement.
- 0 < Scale factor < 1 → Reduction.

Perimeter: Changes by the scale factor.
Area: Changes by the square of the scale factor.
Example: If scale factor is 2, area is multiplied by 4 (2²)
`,
          questions: [
            { id: 1, question: "A translation is also called a:", options: ["Turn", "Flip", "Slide", "Shrink"], correct: 2 },
            { id: 2, question: "A reflection is also called a:", options: ["Slide", "Flip", "Turn", "Shrink"], correct: 1 },
            { id: 3, question: "A rotation is also called a:", options: ["Turn", "Flip", "Slide", "Shift"], correct: 0 },
            { id: 4, question: "When a figure is reflected, the image is:", options: ["Larger", "Smaller", "The same size and shape", "Rotated"], correct: 2 },
            { id: 5, question: "A translation moves a point (2, 3) three units right and two units down. What is the new point?", options: ["(5, 1)", "(5, 5)", "(-1, 5)", "(-1, 1)"], correct: 0 },
            { id: 6, question: "A reflection of point (3, -4) in the x-axis gives:", options: ["(-3, 4)", "(3, 4)", "(-3, -4)", "(3, -4)"], correct: 1 },
            { id: 7, question: "A reflection of point (-2, 5) in the y-axis gives:", options: ["(2, -5)", "(-2, -5)", "(2, 5)", "(2, -5)"], correct: 2 },
            { id: 8, question: "A 90° clockwise rotation of point (3, 2) about the origin gives:", options: ["(2, -3)", "(-2, 3)", "(-3, 2)", "(3, -2)"], correct: 0 },
            { id: 9, question: "A scale factor of 3 means:", options: ["A reduction", "An enlargement", "The same size", "A rotation"], correct: 1 },
            { id: 10, question: "If a square has side length 4 cm and is enlarged by a scale factor of 2, what is the new side length?", options: ["6 cm", "8 cm", "12 cm", "16 cm"], correct: 1 },
            { id: 11, question: "If a rectangle is enlarged by a scale factor of 2, its area is multiplied by:", options: ["2", "4", "6", "8"], correct: 1 },
            { id: 12, question: "A rotation of 180° about the origin maps (4, 3) to:", options: ["(-4, -3)", "(-4, 3)", "(4, -3)", "(3, -4)"], correct: 0 },
            { id: 13, question: "A translation of (x, y) → (x + 5, y - 2) moves (1, 4) to:", options: ["(6, 2)", "(6, 6)", "(-4, 6)", "(-4, 2)"], correct: 0 },
            { id: 14, question: "A figure and its image after a reflection are:", options: ["Similar", "Congruent", "Enlarged", "Reduced"], correct: 1 },
            { id: 15, question: "Which transformation changes the size of a figure?", options: ["Translation", "Reflection", "Rotation", "Enlargement"], correct: 3 },
            { id: 16, question: "A 90° anticlockwise rotation of (2, 3) about the origin gives:", options: ["(-3, 2)", "(3, -2)", "(-2, -3)", "(2, -3)"], correct: 0 },
            { id: 17, question: "A scale factor of 0.5 means:", options: ["Enlargement", "Reduction", "Same size", "Rotation"], correct: 1 },
            { id: 18, question: "A square with side 6 cm is enlarged by scale factor 3. What is the new area?", options: ["36 cm²", "108 cm²", "324 cm²", "18 cm²"], correct: 2 },
            { id: 19, question: "The image after a translation is always:", options: ["Larger", "Smaller", "The same size and shape", "Rotated"], correct: 2 },
            { id: 20, question: "A rotation of 180° about the origin maps (-3, 2) to:", options: ["(3, -2)", "(3, 2)", "(-3, -2)", "(2, -3)"], correct: 0 }
          ]
        },
        {
          id: "t4-w9-10",
          label: "Week 9-10",
          topic: "Area, Perimeter, Surface Area & Volume Revision",
          notes: `
## Key Formulas to Memorize

| Shape | Perimeter | Area |
|-------|-----------|------|
| Square | P = 4s | A = s² |
| Rectangle | P = 2(l + b) | A = l × b |
| Triangle | P = a + b + c | A = 1/2 × b × h |
| Circle | P = 2πr | A = πr² |

| 3D Object | Surface Area | Volume |
|-----------|--------------|--------|
| Cube | SA = 6s² | V = s³ |
| Rectangular Prism | SA = 2(lb + lh + bh) | V = l × b × h |
| Triangular Prism | SA = 2(1/2 × b × h) + (perimeter × length) | V = (1/2 × b × h) × length |
`,
          questions: [
            { id: 1, question: "What is the perimeter of a square with side 9 cm?", options: ["36 cm", "81 cm", "18 cm", "27 cm"], correct: 0 },
            { id: 2, question: "What is the area of a rectangle with length 10 cm and breadth 6 cm?", options: ["60 cm²", "32 cm²", "16 cm²", "80 cm²"], correct: 0 },
            { id: 3, question: "What is the area of a triangle with base 12 cm and height 8 cm?", options: ["96 cm²", "48 cm²", "24 cm²", "40 cm²"], correct: 1 },
            { id: 4, question: "What is the circumference of a circle with radius 10 cm? (Use π = 3.14)", options: ["31.4 cm", "62.8 cm", "314 cm", "62.8 cm²"], correct: 1 },
            { id: 5, question: "What is the surface area of a cube with side 3 cm?", options: ["54 cm²", "36 cm²", "27 cm²", "72 cm²"], correct: 0 },
            { id: 6, question: "What is the volume of a rectangular prism with length 7 cm, breadth 5 cm, and height 4 cm?", options: ["140 cm³", "120 cm³", "35 cm³", "280 cm³"], correct: 0 },
            { id: 7, question: "A triangular prism has a triangular base with base 6 cm, height 4 cm, and prism length 10 cm. What is the volume?", options: ["120 cm³", "60 cm³", "240 cm³", "30 cm³"], correct: 0 },
            { id: 8, question: "What is the diameter of a circle with radius 8 cm?", options: ["16 cm", "4 cm", "24 cm", "8 cm"], correct: 0 },
            { id: 9, question: "What is the area of a square with side 12 cm?", options: ["144 cm²", "48 cm²", "24 cm²", "72 cm²"], correct: 0 },
            { id: 10, question: "If a rectangle has a perimeter of 30 cm and a length of 10 cm, what is its breadth?", options: ["5 cm", "10 cm", "15 cm", "20 cm"], correct: 0 },
            { id: 11, question: "A square has an area of 81 cm². What is its side length?", options: ["9 cm", "7 cm", "8 cm", "10 cm"], correct: 0 },
            { id: 12, question: "What is the surface area of a rectangular prism with dimensions 4 cm × 5 cm × 6 cm?", options: ["148 cm²", "120 cm²", "74 cm²", "240 cm²"], correct: 0 },
            { id: 13, question: "1 cm³ equals:", options: ["1 mL", "1 L", "1 kL", "1 m³"], correct: 0 },
            { id: 14, question: "What is the area of a circle with radius 7 cm? (Use π = 3.14)", options: ["153.86 cm²", "43.96 cm²", "21.98 cm²", "49 cm²"], correct: 0 },
            { id: 15, question: "A cube has a volume of 27 cm³. What is its side length?", options: ["3 cm", "9 cm", "27 cm", "6 cm"], correct: 0 },
            { id: 16, question: "What is the perimeter of a triangle with sides 8 cm, 15 cm, and 17 cm?", options: ["40 cm", "30 cm", "50 cm", "60 cm"], correct: 0 },
            { id: 17, question: "The radius of a circle is 6 cm. What is its diameter?", options: ["12 cm", "3 cm", "18 cm", "6 cm"], correct: 0 },
            { id: 18, question: "A rectangle has length 12 cm and breadth 5 cm. What is its perimeter?", options: ["34 cm", "60 cm", "17 cm", "30 cm"], correct: 0 },
            { id: 19, question: "Convert 2 cm to mm", options: ["2,000 mm", "200 mm", "20 mm", "0.2 mm"], correct: 0 },
            { id: 20, question: "What is the volume of a cube with side 5 cm?", options: ["125 cm³", "150 cm³", "25 cm³", "75 cm³"], correct: 0 }
          ]
        }
      ]
    }
  }
};