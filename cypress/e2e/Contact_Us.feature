@contact-us @regression
Feature: WebdriverUniversity - Contact Us Page
    Background: Pre-Condition
        Given I navigate to the webdriver page contact_us page

    Scenario: Valid Contact Us Form Submission
        # Given I navigate to the webdriver page
        # When I click on the Contact_Us button
        And I type a first name
        And I type a last name
        And I type and email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact_us submission message

    Scenario: Invalid Contact Us Form Submission
        # Given I navigate to the webdriver page
        # When I click on the Contact_Us button
        And I type a first name
        And I type a last name
        # And I type and email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a unsuccessful contact_us submission message

    # Scenario: Valid Contact Us Form Submission - Using specific data
    #     Given I navigate to the webdriver page
    #     When I click on the Contact_Us button
    #     And I type a first name "Sarah"
    #     And I type a last name "Woods"
    #     And I type and email address "sarah_woods10@mail.com"
    #     And I type a specific word "helle123" and number 6788 with the comment input field
    #     And I click on the submit button
    #     Then I should be presented with a successful contact_us submission message


    @smoke
    Scenario Outline: Valid contact us page
        # Given I navigate to the webdriver page
        # When I click on the Contact_Us button
        And I type a first name <firstName> and a last name '<lastName>'
        And I type a '<emailAdress>' and a comment '<comment>'
        And I click on the submit button
        Then I should be presented with header text '<message>'

        Examples:
            | firstName | lastName | emailAdress         | comment                | message                      |
            | John      | Jones    | john_jones@mail.com | Hello description      | Thank You for your Message!  |
            | Mia       | Carter   | mia_carter@mail.com | same description       | Thank You for your Message!  |
            | Grace     | Hudson   | grace_hudson        | Do you create websites | Error: Invalid email address |