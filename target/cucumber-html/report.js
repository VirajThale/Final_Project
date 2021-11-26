$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Products.feature");
formatter.feature({
  "name": "Product Selection",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ProductSelction"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Add Product in Cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestProduct"
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
  "name": "User add a product \"\u003cProduct_Name\u003e\" to the cart",
  "keyword": "And "
});
formatter.step({
  "name": "validate that product product is added in cart\"\u003cProduct_Id\u003e\"",
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
        "Product_Id",
        "Product_Name"
      ]
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce",
        "1",
        "Sauce Labs Backpack"
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
  "name": "Add Product in Cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ProductSelction"
    },
    {
      "name": "@TestProduct"
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
  "name": "User add a product \"Sauce Labs Backpack\" to the cart",
  "keyword": "And "
});
formatter.match({
  "location": "ProductStepDefs.user_add_a_product_something_to_the_cart(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate that product product is added in cart\"1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductStepDefs.validate_that_product_product_is_added_in_cart(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/swag_login.feature");
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
        "PRODUCTS"
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
  "name": "User should be landed on Products Page\"PRODUCTS\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_should_be_landed_on_products_pagesomething(String)"
});
formatter.result({
  "status": "passed"
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