const converter = require('../app/converter');
const expect = require('chai').expect;

// AAA ==> Assemble Action and Assert
// test suite
describe("testing converter module",() => {
    // @Test
    it("test rgb to hex", () => {
        let result = converter.rgbToHex(255,0,255);
        expect(result).to.be.equal("ff00ff");
    });

    it("test hex to rgb", () => {
        let result = converter.hexToRgb("ff0000");
        expect(result).to.be.deep.equal([255,0,0]);
    });
})