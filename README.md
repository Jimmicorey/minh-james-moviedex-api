# minh-james-moviedex-api
paired programming with Minh (using "buddy-system")


## Create a project called moviedex-api and initialize it as an Express app to meet the following requirements.

Users can search for Movies by genre, country or avg_vote
The endpoint is GET /movie
The search options for genre, country, and/or average vote are provided in query string parameters.
When searching by genre, users are searching for whether the Movie's genre includes a specified string. The search should be case insensitive.
When searching by country, users are searching for whether the Movie's country includes a specified string. The search should be case insensitive.
When searching by average vote, users are searching for Movies with an avg_vote that is greater than or equal to the supplied number.
The API responds with an array of full movie entries for the search results
The endpoint only responds when given a valid Authorization header with a Bearer API token value.
The endpoint should have general security in place such as best practice headers and support for CORS.
This assignment should take about 2 hours to complete. If you're having trouble, attend a Q&A session or reach out on Slack for help.


## Hints
This application will share a lot of code in common with the pokedex API we've just built. 
Try to build it up yourself using the debugger to inspect along the way and understand each step.

When comparing two numeric strings for greater than or less than, we can "cast" the strings to numbers like so:

Number('1') === 1
Number('3') === 3
Number('6.123') === 6.123
