var assert = require('assert');

module.exports = function () {
  this.Given(/^I visit SonyMobile website$/, function() {
    return this.driver.get('https://www.sonymobile.com/gb');
  });

  this.Then(/^I see title SonyMobile$/, function() {
    this.driver.getTitle().then(function (title) {
      assert.equal(title, "The Official Xperia™ Website - Sony Mobile (UK)");
    });
  });

  this.Then(/^Wait "([^"]*)"$/, function (milisec) {
    this.driver.sleep(milisec);
  });

  this.Given(/^I visit "([^"]*)"$/, function (arg1) {
    return this.driver.get(arg1);
       });


};
