Feature: Product Selection

  Background: 
    Given user has navigated to Swag Login Page

  @TestProduct
  Scenario Outline: Add Product in Cart
    When user enter correct username "<Username>" and password "<Password>"
    And user clicks on Login Button
    And User add a product "<Product_Name>" to the cart
    Then validate that product product is added in cart  

    Examples: 
      | Username     | Password     | Product_Name        |
      | problem_user | secret_sauce | Sauce Labs Backpack |
