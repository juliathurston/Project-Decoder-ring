// Write your tests here!
const { expect } = require('chai');
const { caesar } = require('../src/caesar'); // Adjust the import path as per your project structure

// Test suite for caesar function
describe('caesar', () => {
    // Test for invalid shift values
    it('returns false if shift value is 0, less than -25, greater than 25, or not present', () => {
        expect(caesar("Hello", 0)).to.be.false;
        expect(caesar("Hello", -26)).to.be.false;
        expect(caesar("Hello", 26)).to.be.false;
        expect(caesar("Hello")).to.be.false;
    });

    // Test for ignoring capital letters
    it('ignores capital letters', () => {
        expect(caesar("A Message", 1)).to.equal("b nfttbhf");
        expect(caesar("a message", 1)).to.equal("b nfttbhf");
    });

    // Test for handling shifts that wrap around the end of the alphabet
    it('handles shifts that wrap around the end of the alphabet', () => {
        expect(caesar("Zebra", 3)).to.equal("cheud");
        expect(caesar("Zebra Magazine", 3)).to.equal("cheud pdjdclqh");
        expect(caesar("xyz", 5)).to.equal("cde");
    });

    // Test for maintaining spaces and non-alphabetic symbols
    it('maintains spaces and non-alphabetic symbols', () => {
        expect(caesar("Hello, World!", 5)).to.equal("mjqqt, btwqi!");
        expect(caesar("Mjqqt, Btwqi!", -5)).to.equal("hello, world!");
    });
});