// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // Validate the shift value
    if (!shift || shift < -25 || shift > 25) {
        return false;
    }

    // If decoding, invert the shift
    if (!encode) {
        shift = -shift;
    }

    // Helper function to shift a single character
    const shiftChar = (char, shift) => {
        const charCode = char.charCodeAt(0);
        const base = 'a'.charCodeAt(0);
        const newCharCode = ((charCode - base + shift) % 26 + 26) % 26 + base;
        return String.fromCharCode(newCharCode);
    };

    // Convert input to lowercase
    input = input.toLowerCase();

    // Iterate over each character and build the result
    let result = '';
    for (const char of input) {
        if (char >= 'a' && char <= 'z') {
            result += shiftChar(char, shift);
        } else {
            result += char;
        }
    }

    // Return the final result
    return result;
}

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };