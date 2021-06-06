## Processor
- A processor is an electrical component.
- It the heart of the modern computer
- It can Read instructions
- It can execute instructions, ex. Arithmetic calculations, Reading and writing to memory, Input / Output
- The instructions to be executed are written ahead of time in memory.
- The collection of instructions in memory is called a program.
---

## Basic History of x86 Archtitecture
- `x86` is a general name for a family of processors that adhere to a specification. All of the those processors can understand the same instructions.
---

## x86 Processor Modes
- x86 processors have several modes, that help with backwards compatibility.
- `Real mode` is the operation mode of the 8086 processor, 
    - It has very limited memory access(acess to less than 1MB of code and data)
    - Every x86 processor starts in the real mode.
- `Protected Mode`(SInce intel's 80286 processor)  has access to larger amounts of memory(1 GB in 16 bit)
    - Provides memory protection
    - Helps the operating system manage a multitasking environment.
    - Handles 32 bit data.
- `Long Mode`(Since AMD's Opteron processor)
    - Can handle 64 bit data.
---

## Storing Programs in Memory
-  The program to be run is written into memory(RAM)
    - The memory is made of bits.
    - A byte is a set of 8 consecutive bits.
    - A byte is a basic information unit in x86 processors.
    - Usually a byte will be represented as two hexadecimal digits.
    - A hexadecimal digit(represents 4 bits) is sometimes called a nibble.
        - Ex. 89(8 is 4 bits and 9 is 4 bits, so it makes up one byte. Each 4 bit number is a nimble) 
        - 89 C1 01 C9 01 C1 - this is the opcode
        - [89 C1] = one instruction
        - [01 C9] = one instruction
        - [01 C1] = one instruction
        - Interpretation:
            - 89 C1 : mov ecx,eax
            - 01 C9 : add ecx,ecx
            - 01 C1 : add ecx,eax
        - The processor cannot read `mov ecx,eax`, only `89 C1`(opcode). The code will get compiled into the hex form that the processor can read.

---

## x86 Instructions
- An instruction in the x86 architecture represents some simple task.
    - Ex. Addition, Subtraction, moving data etc.
- Every instruction is encoded as one or more bytes
    - Instructions come in various sizes. There are short instructions(one byte) and very long instructions(sometimes even 10 bytes or more)
    - The numeric representation of an instruction is called `opcode`(Operation code)
- The processor can only understand the numeric representation of the instructions
---

## The Processor's Operation Cycle
1. Read an instruction from memory
2. Understand(Decode) the instruction
3. Execute the instruction
4. Fetch the next instruction
---

## The Registers
- x86 processors has a very efficient internal place to store data. These are called registers.
    - Registers are built inside of the processor(Not the RAM).
    - Registers are very efficient
    - Very scarce, there are only a few
    - Together they represent the internal state of the processor
    - They are made of bits(Can only store binary). 
---

## Basic Registers
- Basic registers, each is made of 32 bits:
    - e**a**x - **A**ccumulator
    - e**b**x - **B**ase Index.
    - e**c**x - **C**ounter.
    - e**d**x - **D**ata Register
- In the early x86 Processors every register had a specific job for a specific operation
    - In recent processors(Mostly in protected and long modes), registers became more general purpose.
    - The old roles of the registers can help you remember their names.
- The `e` stand for extended.
---

## Misc
- Embedded systems - are usuallly small computers that are meant to do one thing(like a router, computer in a car)