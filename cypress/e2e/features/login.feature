Features: Authorization error
    Background:
        Given Open product
        And Select authorization in the header
    Scenario: Error alert Authentication
        Log in form with email "test@gmail.com", pass "qwerty" and click on the login
        Then The error message "Authentication failed." is displayed
