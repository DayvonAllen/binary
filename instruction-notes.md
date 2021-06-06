## MOV
- The `MOV` instruction allows us to "move" data
    - `MOV` `destination, source`
    - Data is copied from source to destination.
---
## ADD
- The `ADD` instruction allows  to  add numbers.
    - `ADD` `destination, source`
    - *destination* <- *destination* + *source*
    - The result wraps around if larger than the size of the arguments.
        - `add eax,edx`
            - Adds the contents of `eax` and `edx`. Stores the result in `eax`.(`eax` <- `eax` + `edx`)
---

## SUB
- The `SUB` instruction subtracts numbers.
    - *SUB* <- *destination* <- *source*
    - The rsult wraps around if needed.
        - Equivalent to destination <- destination + (`-source`), where `-source` is found using the two's complement method.
---

## MUL
- `mul ecx`
    - Multiples `eax` by `ecx` and stores the result inside `edx:eax`. (`edx:eax <- eax * ecx`)
- `mul si`
    - Multiples `ax` by `si` and stores the result inside `dx:ax`. (`dx:ax <- ax * si`)
- `mul al`
    - Multiples `al` by `al` and stores the result inside `ax`. (`ax <- al`)
---

## DIV
- Divides one number by another number. (Unsigned division)
- arg of size 8 bits:
    -  `al <- ax / arg` quotient
    -  `ah <- ax % arg` remainder
- arg of size 16 bits:
    - `ax <- dx:ax / arg` quotient
    - `dx <- ax:dx % arg` remainder
- arg of size 32 bits:
    - `eax <- edx:eax / arg` quotient
    - `edx <- eax:edx % arg` remainder