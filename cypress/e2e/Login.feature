@login @regression
Feature: WebdriverUniversity - Login Page
    Background: Pre-Condition
        # Given I navigate to the webdriver page
        # When I click the Login Portal link
        Given I navigate to the webdriver page login page

    Scenario Outline: Validate Valid & Invalid Login Credentials
        And I type a username '<username>'
        And I type a password '<password>'
        And I click the login button
        Then I should be presented with alert box which contains text '<expectedAlertText>'

        Examples: Username, Password, response message
            |   | Test Case        | username  | password     | expectedAlertText    |
            | 1 | Valid details    | webdriver | webdriver123 | validation succeeded |
            | 2 | Invalid Username | username  | webdriver123 | validation failed    |
            | 3 | Invalid Password | webdriver | password     | validation failed    |

    Scenario: Invalid No Username Login Credentials Test
        And I type a password 'webdriver123'
        And I click the login button
        Then I should be presented with alert box which contains text 'validation failed'

    Scenario: Invalid No Password Login Credentials Test
        And I type a username 'webdriver'
        And I click the login button
        Then I should be presented with alert box which contains text 'validation failed'
