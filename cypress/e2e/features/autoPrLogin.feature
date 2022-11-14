Feature: Displayed page section
    Background:
       Given Open product
       When Close modal letter

    Scenario Outline: Open shop page
       And Open section "<sectionName>" in shop header
       Then Section is open
    Examples:
    | sectionName   |
    | left sidebar  |