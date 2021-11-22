@LoginFeature
Feature: Swag Login

  Background: 
    Given user has navigated to Swag Login Page

  @Test1
  Scenario Outline: Positive Login
    When user enter correct username "<Username>" and password "<Password>"
    And user clicks on Login Button
    Then User should be landed on Products Page"<Name>"

    Examples: 
      | Username     | Password     | Name      |
      | problem_user | secret_sauce | PRODUCTS! |

  @Test2
  Scenario Outline: Negative Login
    When user enter correct username "<Username>" and password "<Password>"
    And user clicks on Login Button
    Then you should get error messgae"<Error>"

    Examples: 
      | Username     | Password     | Error                                                                     |
      | problem_user | s!cret_sauce | Epic sadface: Username and password do not match any user in this service |
