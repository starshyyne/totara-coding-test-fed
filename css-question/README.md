# CSS Question 

Please open the file fed_code_test_css--question.html to view the completed test. I have added Gulp for simple Sass compiling.

Some notes: 
- I have changed the menu from using divs to a nav item with an unordered list. This is best practice for semantic HTML markup, and although there is some debate whether it is best to use a list of plain divs, most FEDs agree that using lists is best for screenreaders so there is a gap in between the menu items. If the menu items were contained within divs the menu items would be read out one right after another with no gaps in between, making it hard to distinguish between them. 
- I have added the `role` attribute and `aria-label` as this covers most bases to make sure there is good accessibility for the menu. 
- I have added a `menu--main` class to the unordered list to distinguish it from other potential menus on the page. At this stage I have not added classes to the list items, but depending on the styling requirements it may be necessary to move the selected class to the list item rather than the a tag to provide the correct styling, or if nested menus were to be introduced.
- Removed the `!important` from the selected class background colour. As `a.link.selected` is more specific than `a.link` 
- Adjusted the `selected` selector to the correct selector
- To reduce unnecessary specifity, the selectors `a.link` and `a.link.selected` have been simplified to `.link` and `.link.selected`. It could also have been reduced to `a` and `.selected` with the same results. 