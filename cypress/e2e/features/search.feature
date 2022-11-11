Feature: Search Input
    Background:
        Given Open main page
    Scenario: Search result
        When Type to search box "Printed Summer Dress"
        And Click Submit
        Then Display message "3 results have been found."