//var chromedriver = require('chromedriver');
//module.exports = {
//  before : function(done) {
//    chromedriver.start();
//
//    done();
//  },
//
//  after : function(done) {
//    chromedriver.stop();
//
//    done();
//  }
//};

module.exports = {
  'Demo test' : function (browser) {

  console.log(browser.globals);
        browser
        .url(browser.launchUrl)
#        .waitForElementPresent('a[class="wg-header__login-button wg-btn wg-btn--white wg-btn--hollow"]', 1000)
        .pause(5000)
        .useCss()
        .source(function(html){
            browser
#                .useXpath()
#                .getValue('//*[@id="wspace;lister;group=later"]/div[2]')
//            html.wrike-task-list-view-group-items
        })
        .end();
  // {
  //   "myGlobalVar" : "some value",
  //   "otherGlobal" : "some other value"
  // }

  }
};
