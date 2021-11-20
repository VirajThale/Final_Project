Feature: Swag Login

  Background: 
    Given user has navigated to Swag Login Page

  @Regression
  Scenario: Positive Login Scenario
    When user enter correct username and password
    And user clicks on Login Button
    Then user should be exit

  @Test3
  Scenario Outline: Positive and Negative Login
    When user enter correct username "<Username>" and password "<Password>"
    And user clicks on Login Button
    Then you should get error messgae"<Error>"
    Then user should be exit

    Examples: 
      | Username      | Password     | Error                                                                     |
      | standard_user | secret_sauce | Epic sadface: Username and password do not match any user in this service |
      | problem_user  | s!cret_sauce |                                                                           |
