const expect = require('chai').expect;
const request = require('request');
 
describe("testing server module",() => {
    // @Test
    it("test server response rgb to hex", (done) => {
        request('http://localhost:3000/rgbToHex?red=255&green=15&blue=100',   (error, response, body) => {
            const result = "ff1f14"
            expect(body).to.be.equal(result);
            done();
        });
    });

    it("test server response test hex to rgb", (done) => {
        request('http://localhost:3000/hexToRgb?hex=ff0023',   (error, response, body) => {
            const result = "255,0,35"
            expect(body).to.be.equal(result);
            done();
        });
    });
})