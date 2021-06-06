## Why is binary important
- Computer parts are engineered to understand only two symbols: 0, 1.
- 0 means low voltage, and 1 means high voltage.
- Binary is base 2
- Every binary digit is called a bit.
- To convert binary to decimal, you need to be familiar with the power of 2.
---

## Decimal Representation
- We use this in our daily lives ex. (1 - 10).
- This is known as base 10 or decimal
- Decimal means 10
- The significance of every digit is related to its location in the number - this  is called "positional notation"
- Leading zeroes don't change the value of the number.
---

## Binary(base number is two)
| Base number | Weight            |
| ------------|------------------:|
| 1(2^0)      | 1                 |
| 2(2^1)      | 2                 |
| 3(2^2)      | 4                 |
| 4(2^3)      | 8                 |
| 5(2^4)      | 16                |
| 6(2^5)      | 32                |
| 7(2^6)      | 64                |
| 8(2^7)      | 128               |
| 9(2^8)      | 256               |
| 10(2^9)     | 512               |
---

## Decimal to Binary
- 75 = 1001011. [128, 64, 32, 16, 8, 4, 2, 1]
- Walk through the answer: starting point [128, 64, 32, 16, 8, 4, 2, 1]. We will use the subtraction approach
- Is 75 >= 128, No so we will not use 128: New starting point [0, 64, 32, 16, 8, 4, 2, 1], remaining number 75
- Is 75 >= 64, yes so we will subtract 64 from 75 and use it in the list of numbers: New starting point [0, 1, 32, 16, 8, 4, 2, 1], remaining number 11
- Is 11 >= 32, No so we will not use 32: New starting point [0, 1, 0, 16, 8, 4, 2, 1], remaining number 11
- Is 11 >= 16, No so we will not use 16: New starting point [0, 1, 0, 0, 8, 4, 2, 1], remaining number 11
- Is 11 >= 8, yes so we will subtract 8 from 11 and use it in the list of numbers: New starting point [0, 1, 0, 0, 1, 4, 2, 1], remaining number 3
- Is 3 >= 4, No so we will not use 4: New starting point [0, 1, 0, 0, 1, 0, 2, 1], remaining number 3
- Is 3 >= 2, yes so we will subtract 2 from 3 and use it in the list of numbers: New starting point [0, 1, 0, 0, 1, 0, 1, 1], remaining number 1
- Is 1 >= 1, yes so we will subtract 1 from 1 and use it in the list of numbers: New starting point [0, 1, 0, 0, 1, 0, 1, 1], remaining number 0
- We are done
---

## Decimal to Binary(Successive Division Approach)
- 75 = 1001011. [128, 64, 32, 16, 8, 4, 2, 1]
- if the number doesn't divide perfectly, then the remainder will be consider to be 1 (even if the true remainder is 0.5).
- 75 / 2 = 37.5 (37 remainder 1) <- this is the LSB (Least Significant bit)
- 37 / 2 = 18.5 (18 remainder 1)
- 18 / 2 = 9 (9 remainder 0)
- 9 / 2 = 4 (4  remainder 1)
- 4 / 2 = 2 (2 remainder 0)
- 2 / 2 = 1 (1 remainder 0)
- 1 / 2 = 0.5 turns to 0 (0 remainder 1) <- this is the MSB (Most significant bit)
- We read it from the most significant bit to least significant bit(so bottom to top)
- The remainders give us our answer(from bottom to top)
- We are done
---

## Addition in Binary
- Rules: 0 + 0 = 0, 1 + 0 = 1, 1 + 1 = 10
- 1 + 1 is 0 but you need to carry over a 1, so it becomes `10`
- 1 + 1 = 2(decimal) in binary it is `10`. [2, 1] = 10
- 1 + 1 + 1 = 11. You get 1 first and carry over a 1
- 1 + 1 + 1 = 3(decimal) = [2, 1] = 11
- 1010 + 1001 
- first line the numbers up:
1010
1001
- 10011
- Example 2: 100110 + 110101
100110
110101
- start right to left
- 0 + 1 = 1
- 1 + 0 = 1
- 1 + 1 = 0 and we carry the 1 to the next column
- 1(0 turns to one because we carried it over) + 0 = 1
- 1 + 0 = 1
- 1 + 1 = 10(the one would be carried over if there were more numbers)
- answer = 1011011
---

## Subtraction in Binary
- Rules: 1 - 0 = 1, 1 -1 = 0, 10 - 1 = 01( 0 - 1 is negative so we would need to the 1 from the next column)
- 10(2 in decimal) - 1(1 in decimal) = 01(1 in decimal)
- 100 - 10 = 010
- we can do this too [1(4), 0(2), 0(1)] highest num is 4
- [0(2), 0(1)] highest num is 2. 4 - 2 = 2(binary is 10 or 010)
- 100 - 1 = 011. Everytime you cross out a zero you replace it with a 2:
100
  1
020 - we borrowed a one from the end and the zero became a 2 because we had to cross it out
  1
012 - we borrow a 1 from the 2
  1
answer = 011
---

## Multiplication in Binary
- 1001 = 9(decimal)
-  101 = 5(decimal)
- 101101 = 45(decimal)
- answer = 101101




