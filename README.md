# Playwright Test Automation Framework

## Table of Contents

* [Overview](#overview)
* [Installation](#installation)
* [Trigger Tests](#trigger-tests)
* [Test Report](#test-report)
* [Tech Stack](#tech-stack)
* [Test Coverage](#test-coverage)
* [Configurations](#configurations)

### Overview
This is the test automation framework for Mytheresa website application, which contains a set of automated test cases, which in turn compound to some proposed scenarios automated.

### Installation
1. Clone this repo.
2. Install Node.
3. Run ``` npm install``` from root directory.
4. Execute the tests.
5. Have fun.

### Trigger Tests

To run test for specific browser or environment, environment variables can be used as mentioned below.
If environment variables not specified, configurations are loaded from default_config.js

Example configs
``` In Terminal or Commandline
export ENVIRONMENT=https://www.mytheresa.com
export BROWSER=chromium
```

Trigger Test for specific browser
``` In Terminal or Commandline
npm run test 
```

Trigger Test in all browsers
``` In Terminal or Commandline
npm run test_all_browsers - To run tests on all browsers
```

### Test Report
``` In Terminal or Commandline
  npm run report
```

For Pull Request Scenario
* CSV will be found in the report directory.

### Tech Stack
* node
* PlayWright
* TypeScript

### Test Coverage
* Verify no Javascript error on the website.
* Verify Expected status code on all links fetched on the website.
* Verify login by bypassing the captcha.
* Fetch all open pull request on the product.

### Configurations
* headless mode and other configurations can be set in default_config.js file.
