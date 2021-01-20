import { browser, element, by } from 'protractor';

describe("Customer App E2E Test Suite", () => {
  describe("customers route page should work fine", () => {
    beforeEach(() => {
      browser.waitForAngularEnabled(false);
    });
    beforeAll(() => {
        // window.sessionStorage.setItem('user','dummy');
    });

    it("should display customers ", async (done) => {
      browser.get("/");
      browser.waitForAngular();
      let customers = element.all(by.css(".card"));
      let count = await customers.count();
      expect(count).toBe(6);
      done();
    });

    it("should filter", async (done) => {
      browser.get("/");
      browser.waitForAngular();
      let searchInput = element(by.name("searchText"));
      searchInput.sendKeys("Geller").then(async () => {
       
        let customers = element.all(by.css(".card"));
        expect(await customers.count()).toBe(2);
        done();
      });
      browser.sleep(1000);
     
    });
    
  });
});