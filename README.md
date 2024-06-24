# cypress-login

Cypress login test


### QA Automation

1. Write an automation script using a Javascript testing
framework which will open:
https://www.pecodesoftware.com/qa-portal/greet.php page
2. Create an environment file and pick up all the credentials
values from there.
3. Fill in the “Username” and “Password” input fields and click
the “LogIn” button.
4. Use an assertion library and verify that all the elements are
present on the page.
5. Verify that all the error messages appear.
6. Create a test case that will fail because of unsuccessful
login.
7. Use a page-object pattern or app actions.
8. The result of execution should generate 
    - A mochawesome report file.
    - Screenshots for failing the test.
    - Video recording for all the tests.
9. Optional - provide additional options to step 2(get test data
from different sources).
10. Post the code (without node_modules) to the public Github
repository and provide a link.


### Run tests

`
npm run cy:run
`
or
`
npx cypress run --env ENVIROMENTNAME=qa
`
Environment file - qa.data.json

### Run tests with different sources

`
npm run cy:run:dev
`
or
`
npx cypress run --env ENVIROMENTNAME=dev
`
Environment file - dev.data.json


