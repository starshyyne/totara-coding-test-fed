# Totara coding test - front end developer

Hello, here are my files and notes for the coding test.
# CSS Question 

After downloading the repo, please open the file [fed_code_test_css--question.html](https://github.com/starshyyne/totara-coding-test-fed/blob/css-question/css-question/fed_code_test_css--question.html) in a web browser to view the completed test. I have added Gulp for simple Sass compiling.

Some notes: 
- I have changed the menu from using divs to a nav item with an unordered list. This is best practice for semantic HTML markup, and although there is some debate whether it is best to use a list of plain divs, most FEDs agree that using lists is best for screenreaders so there is a gap in between the menu items. If the menu items were contained within divs the menu items would be read out one right after another with no gaps in between, making it hard to distinguish between them. 
- I have added the `role` attribute and `aria-label` as this covers most bases to make sure there is good accessibility for the menu. 
- I have added a `menu--main` class to the unordered list to distinguish it from other potential menus on the page. At this stage I have not added classes to the list items, but depending on the styling requirements it may be necessary to move the `selected` class to the list item rather than the a tag to provide the correct styling, or if nested menus were to be introduced.
- Removed the `!important` from the selected class background colour. As `a.link.selected` is more specific than `a.link` 
- Adjusted the `selected` selector to the correct selector
- To reduce unnecessary specifity, the selectors `a.link` and `a.link.selected` have been simplified to `.link` and `.link.selected`. It could also have been reduced to `a` and `.selected` with the same results. 
- Added `lang="en"` to the HTML tag for best practice, and a title to the page

## JavaScript Question

TODO

## Vue Question

As Vue is the area in which I have the least amount of experience, I found it most challenging. Given more time I feel I could have gotten closer, but as it stands I accept my solution is totally wrong, as I cannot get a successful build from the file. 

Steps taken:
- Install Vue CLI on machine (Windows 10)
- Setup basic Vue instance "HelloWorld" using webpack option
- Create new `Child` and `Parent` components to test
- Setup basic data points `id`, `list` and `description` using parameters specified in the `Child` component, without bringing in data from a parent component for simplicity, thinking once it worked within a single component I would then move the `list` data to the parent and import the list as a prop
- Attempt to compute data `list` to show the number of items in array by writing a `listCount` function referencing the `list` data point (failed)
- Attempt to import `list` data from parent component (failed)

As it stands, Vue doesn't recognise my listCount function and won't compile. 

I also tried setting up a [rapid-prototyping](https://cli.vuejs.org/guide/prototyping.html) environment using Vue CLI but as the component required receiving data from a parent, it didn't help me much. 

If this was a real-world problem the next step for me would be to ask for help from my peers, looking for someone with Vue experience, especially in single file components. As the documentation I found online mainly focused on traditional Vue setups, without explaining how it would function in a SFC setup. Without knowing more about props, computations and data flow between components, this is as far as I'm able to get in the time I had. 

I suspect that there may be an error in the order of the props, computed and data items, and most definitely some syntax errors in the listCount function. The import 'Parent' line also fails, it can't seem to find the component. I had tried several different file paths and names with no luck, there's probably a problem with it not being declared as a global/local component. 

Resources used: 
- [Introduction to Components](https://vueschool.io/lessons/introduction-to-components)
- [Component's Template](https://vueschool.io/lessons/components-template)
- [Reusable Components with Props](https://vueschool.io/lessons/reusable-components-with-props)
- [Nested Components](https://vueschool.io/lessons/nested-components)
- [Global vs Local Components](https://vueschool.io/lessons/global-vs-local-components)
- [Communication Between Components with Custom Events](https://vueschool.io/lessons/communication-between-components)
- [Introduction to Single File Components](https://vueschool.io/lessons/introduction-to-single-file-components)

- [Vue Tutorial - Vue JS Tutorial for Beginners #1 setting up an app](https://www.youtube.com/watch?v=mZY1yyrlJWU)
- [Vue Tutorial # 2 - Vue.js filters and computed data](https://www.youtube.com/watch?v=h6lhOYv-QM4)
- [Vue Tutorial #3 - Vue.js directives and event listeners](https://www.youtube.com/watch?v=t0w2KLOLaTA)
- [Vue Tutorial #4 - Break up your app into Vue Components](https://www.youtube.com/watch?v=1V9Lcnm1Dqw)
- [Vue Tutorial #5 - AJAX data and Lifecycle Methods](https://www.youtube.com/watch?v=inJDWcHmsss)
- [Vue Tutorial #6 - Full REST Example](https://www.youtube.com/watch?v=Oyr5X5HwXhM)
- [Vue.js Tutorial #7 - Scaling Vue with Single File Components](https://www.youtube.com/watch?v=IkcJ0YAiycQ)

- [30 Days of Vue - Single File Components](https://www.newline.co/30-days-of-vue/day-17-single-file-components )
- [Using Vue.js Single File Components](https://medium.com/swlh/using-vue-js-single-file-components-4675c652db8c)
