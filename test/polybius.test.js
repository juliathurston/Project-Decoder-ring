// Write your tests here!
const { expect } = require('chai');
const { polybius } = require('../src/polybius'); // Adjust the import path as per your project structure

// Test suite for polybius function
describe('polybius', () => {
    // Test for encoding: translates 'i' and 'j' to 42
    it('translates letters i and j to 42 when encoding', () => {
        expect(polybius("message")).to.equal("23513434112251");
        expect(polybius("i")).to.equal("42");
        expect(polybius("j")).to.equal("42");
    });

    // Test for decoding: translates 42 to '(i/j)'
    it('translates 42 to (i/j) when decoding', () => {
        expect(polybius("42", false)).to.equal("(i/j)");
    });

    // Test for ignoring capital letters
    it('ignores capital letters', () => {
        expect(polybius("A Message")).to.equal("11 23513434112251");
        expect(polybius("a message")).to.equal("11 23513434112251");
    });

    // Test for maintaining spaces in the message
    it('maintains spaces in the message', () => {
        expect(polybius("hello world")).to.equal("3251131343 2543241341");
        expect(polybius("3251131343 2543241341", false)).to.equal("hello world");
    });
});