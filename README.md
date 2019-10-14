# ta-backend


**All routes are assumed to be prefixed with /api**

# Routes
## /login [POST]

Attempts to log in a user providing email and password credentials

__Request Format__

* *Headers*: none

* *Body*:
    * **email** [string]: the user's email
    * **password** [string]: the user's password

__Response Format__

* *Headers*: none

* *Body*: a single JWT containing an authenticated user's _id.

## /signup [POST]

Signup a user with email and password. Username also required

__Request Format__

* *Headers*: none

* *Body*:
    * **email** [string] [req]: the new user's email

    * **username** [string] [req]: the new user's username

    * **password** [string] [req]: the new user's password, to be hashed and stored in mongoDB

    * **confirmPassword** [string] [req]: confirm the above password, both of these fields must match

    * **firstName** [string] [opt]: the new user's optional first name

    * **lastName** [string] [opt]: the new user's optional last name

__Response Format__

* Headers: none

* Body: either the new user's database entry, or an **errors** object with the following fields:

    * **email**: email field must be a valid email, and must not be taken
    * **password**: password must be between 8-32 characters in length
    * **confirmPassword**: confirmPassword must match password field
    * **userName**: userName field must be between 8-32 characters in length, and must not be taken

## /trips/create [POST]
Create a new trip, adding initial data such as 

