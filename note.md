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
- 75 = 01001011. [128, 64, 32, 16, 8, 4, 2, 1]
- Walk through the answer: starting point [128, 64, 32, 16, 8, 4, 2, 1]. We will use the subtracting approach
- Is 75 >= 128, No so we will not use 128: New starting point [0, 64, 32, 16, 8, 4, 2, 1], remaining number 75
- Is 75 >= 64, yes so we will subtract 64 from 75 and use it in the list of numbers: New starting point [0, 1, 32, 16, 8, 4, 2, 1], remaining number 11
- Is 11 >= 32, No so we will not use 32: New starting point [0, 1, 0, 16, 8, 4, 2, 1], remaining number 11
- Is 11 >= 16, No so we will not use 16: New starting point [0, 1, 0, 0, 8, 4, 2, 1], remaining number 11
- Is 11 >= 8, yes so we will subtract 8 from 11 and use it in the list of numbers: New starting point [0, 1, 0, 0, 1, 4, 2, 1], remaining number 3
- Is 3 >= 4, No so we will not use 4: New starting point [0, 1, 0, 0, 1, 0, 2, 1], remaining number 3
- Is 3 >= 2, yes so we will subtract 2 from 3 and use it in the list of numbers: New starting point [0, 1, 0, 0, 1, 0, 1, 1], remaining number 1
- Is 1 >= 1, yes so we will subtract 1 from 1 and use it in the list of numbers: New starting point [0, 1, 0, 0, 1, 0, 1, 1], remaining number 0
- We are done



