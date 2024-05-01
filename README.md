
## Build a basic version of PayTM

1. Adding bunch  of Schema, specifically user schema
2. Creating routing file structure to route incoming request to a specific handler
3. Inside that top level handler all request coming to /user will go to this user router
4. adding few external dependencies specifically 
'cors' because front and backend go to on different urls
'body-parser' for incoming json body
'jsonwebtoken' just add jwt 
create jwt secret acually sign the user
crate the token and listen the port 3000
5. Add back-end auth route 
    1. Sign up
    2. sign in
    3. Give me list of all user that exists in the database
    4. late me update firstname, lastname and password in my database
6. Add middleware - which  lets the user send the right token or not 
and if they have decoded and let the request flow stop the flow and return back 403.
7. create bank related Schema
