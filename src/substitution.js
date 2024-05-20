// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    input = input.toLowerCase();
    // Validate the alphabet parameter
    if (!alphabet || alphabet.length !== 26 || new Set(alphabet).size !== 26) {
        return false;
    }

    // Standard alphabet for reference
    const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz';

    // Create maps for encoding and decoding
    const encodeMap = {};
    const decodeMap = {};

    for (let i = 0; i < 26; i++) {
        encodeMap[standardAlphabet[i]] = alphabet[i];
        decodeMap[alphabet[i]] = standardAlphabet[i];
    }

    // Function to process input based on the map provided
    function processInput(input, map) {
        return input
            .toLowerCase()
            .split('')
            .map(char => {
                if (char === ' ') return ' ';
                return map[char] || char;
            })
            .join('');
    }

    // Determine whether to encode or decode
    if (encode) {
        return processInput(input, encodeMap);
    } else {
        return processInput(input, decodeMap);
    }
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
