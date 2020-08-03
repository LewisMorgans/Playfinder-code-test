# Playfinder

In order to test the application, enter the Pitch ID: 32990 with a date in the past, in a given range of 14 days.
To view specific data, mouse click on the ID provided in the table, which will present a modal with the target data.
If there was more time, there are several actions I would take to improve the application. Such as adding pagination, checking deep equality in component unit tests and refactoring the functions 
within the search component. [GetTargetData] and [RetrieveData] are not following the DRY principles. I would like to refactor this in order to improve code quality and efficiency. I would also have created a calculation function to parse the returned dates and calculate a duration value; alas I wasn't given this instruction until the deadline date had already been met.

In order to complete the bonus objective I had to design my application as NGRX first, influencing my time management to other features such as pagination. The application is fully state manageable with appropriate scaffolding to be extended in the future.
