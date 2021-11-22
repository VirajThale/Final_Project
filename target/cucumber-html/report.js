$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Products.feature");
formatter.feature({
  "name": "Product Selection",
  "description": "",
  "keyword": "Feature"
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
});