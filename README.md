# ta-backend


**All routes are assumed to be prefixed with /api**

# Routes
## login [POST]

Attempts to log in a user providing email and password credentials

__Request Format__

* *Headers*: none

* *Body*:
    * **email** [string]: the user's email
    * **password** [string]: the user's password

__Response Format__

* *Headers*: none

* *Body*: a single JWT containing an authenticated user's _id. 