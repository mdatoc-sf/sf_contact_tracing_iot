# sf_contact_tracing_iot

This app is meant to be deployed to an existing Heroku App with Heroku Connect and Postgres DB configured with a Health Cloud IDO.

To use:
1) Clone Repo
2) In file: routes/index.js
        1. Line 5: Update with your Postgres DB connection info from Heroku
        2. Line 33: Update with your Location ID from Health Cloud IDO
3) Build and Deploy to your Heroku app
