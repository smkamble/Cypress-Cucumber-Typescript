Feature: Google Search
    @Functional @Smoke @focus
    Scenario Outline: with string value
        Given User launch an Google url
        When User enter search "<string>" and click on search button
        Then Search result should be display

        Examples:
            | string |
            | Cypress |
