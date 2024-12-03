### Note:
- This is My Semester 6 Cryptogrphy labwork and I do not plan to make any further changes here so I am archiving this repo ✌🏽. Enjoy !

# SHA-256 Logic

## Constants:

The code defines two arrays of constants:
- K: Constants defined by the SHA-256 algorithm, used in the main computation.
- H: Initial hash values, representing the first 32 bits of the fractional parts of the square roots of the first 8 primes.


## Helper Functions:

The code defines several helper functions:
- rotr(x, n): Performs a bitwise right rotation of x by n bits.
- shr(x, n): Performs a bitwise right shift of x by n bits.
- sig0(x), sig1(x), S0(x), S1(x): These functions implement specific logical operations used in the 

## SHA-256 algorithm.

1. **Pre-processing:**
The input message is divided into 64-byte (512-bit) chunks.
Each chunk is further divided into 4-byte words, and the character codes of each character in the chunk are stored as Uint8Array.

2. **Padding:**
The message is padded to ensure its length is a multiple of 512 bits (64 bytes).
A single '1' bit is appended to the message, followed by '0' bits until the length is 64 bits less than a multiple of 512.
The original length of the message (in bits) is then appended as a 64-bit big-endian integer.

3. **Main Computation:**
The code iterates over each 512-bit block of the padded message.
For each block, it prepares the message schedule by expanding the block into an array of 64 32-bit words (w).
It then initializes eight working variables (a to h) with the initial hash values (H).
The main loop of the SHA-256 algorithm is executed, where each round involves updating the working variables based on the message schedule and the constants (K).
After processing all blocks, the final hash values (H) are updated.
Conversion to Hexadecimal String:

4. The final hash values are converted to a hexadecimal string representation.
Each 32-bit hash value is converted to an 8-character hexadecimal string using toString(16), ensuring each value is represented with leading zeros if necessary.
Return Value:

5. The function returns the computed hash as a hexadecimal string.

