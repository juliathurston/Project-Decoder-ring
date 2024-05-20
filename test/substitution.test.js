// Write your tests here!
const { expect } = require('chai');
const { substitution } = require('../src/substitution'); // Adjust the import path as per your project structure

// Test suite for substitution function
describe('substitution', () => {
    // Test for invalid alphabet length
    it('returns false if the given alphabet is not exactly 26 characters long', () => {
        expect(substitution("message", "short")).to.be.false;
    });

    // Test for correct translation based on the alphabet
    it('correctly translates the given phrase based on the provided alphabet', () => {
        expect(substitution("message", "plmoknijbuhvygctfxrdzeswaq")).to.equal("ykrrpik");
        expect(substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")).to.equal("elp xhm xf mbymwwmfj dne");
    });

    // Test for duplicate characters in the alphabet
    it('returns false if there are any duplicate characters in the given alphabet', () => {
        expect(substitution("message", "abcabcabcabcabcabcabcabcyz")).to.be.false;
    });

    // Test for maintaining spaces in the message
    it('maintains spaces in the message', () => {
        const message = "hello world";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";

        // Encode the message
        const encodedMessage = substitution(message, alphabet);

        // Decode the encoded message
        const decodedMessage = substitution(encodedMessage, alphabet, false);

        // Assert that the decoded message matches the original message
        expect(decodedMessage).to.equal(message);
    });

    // Test for ignoring capital letters
    it("should ignore capitalization", () => {
        const input1 = "julia thurston";
        let alphabet = "xoyqmcgrukswaflnthdjpzibev";
        input2 = "JuLiA tHuRsToN";
        let actual = substitution(input1, alphabet, (encode = true));
        let expected = substitution(input2, alphabet, (encode = true));
    
        expect(actual).to.equal(expected);
      });
});
