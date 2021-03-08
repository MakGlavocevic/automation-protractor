 exports.config = {

    framework: 'jasmine2',

    jasmineNodeOpts: {
      defaultTimeoutInterval: 2500000
      },

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['./test/*spec.js'],

    onPrepare: function() {
      browser.driver.manage().window().maximize();
  },
  
  }