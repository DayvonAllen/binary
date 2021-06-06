## Hexadecimal 
- Base 16 is called Hexadecimal or just hex.
- It's usually marked with a "0x" prefix in high level programming languages. ex. `0x10`, `0x2a`
- It contains 16 symbols: 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
---
## Hexadecimal(base number is 16)
| Base number | Weight            |
| ------------|------------------:|
| 1(16^0)     | 1                 |
| 2(16^1)     | 16                |
| 3(16^2)     | 256               |
| 4(16^3)     | 4096              |
| 5(16^4)     | 65536             |
| 6(16^5)     | 1,048,576         |
| 7(16^6)     | 16,777,216        |
---

## Hexadecimal to Decimal
- `23E` = [256, 16, 1] helper table
- 2 x 256 = 512
- 3 x 16 = 48
- 14(E) x 1 = 14
- answer: 512 + 48 + 14 = 574
- Example 2: `F7D` = [256, 16, 1] helper table
- 3,840 + 112 + 13 = 3,965
- Anything to the right of a decimal will be calculated using 16^(some negative number)
- Example 3: `3B4.C8`, 3B4 = [256, 16, 1], C8 = [] 16^-1 etc.
- num^-1 etc. translates to division. Ex. 12 x 16^-1 = 12 / 16
- 768 + 180 + 0.75 + 0.03125
- answer = 948.78125
