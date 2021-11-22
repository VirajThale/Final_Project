$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/swag_login.feature");
formatter.feature({
  "name": "Swag Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Positive Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "name": "user enter correct username \"\u003cUsername\u003e\" and password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be landed on Products Page\"\u003cName\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "Name"
      ]
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce",
        "PRODUCTS!"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has navigated to Swag Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_has_navigated_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "name": "user enter correct username \"problem_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_enter_correct_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be landed on Products Page\"PRODUCTS!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_should_be_landed_on_products_pagesomething(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cPRODUCTS[!]\u003e but was:\u003cPRODUCTS[]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat stepdefs.LoginStepDefs.user_should_be_landed_on_products_pagesomething(LoginStepDefs.java:83)\n\tat ✽.User should be landed on Products Page\"PRODUCTS!\"(file:src/test/java/features/swag_login.feature:11)\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Negative Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "name": "user enter correct username \"\u003cUsername\u003e\" and password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "you should get error messgae\"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "problem_user",
        "s!cret_sauce",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has navigated to Swag Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_has_navigated_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Negative Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "name": "user enter correct username \"problem_user\" and password \"s!cret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_enter_correct_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "you should get error messgae\"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.you_should_get_error_messgaesomething(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});