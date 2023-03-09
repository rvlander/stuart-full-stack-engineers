# My remarks

## TODO

FIX THIS

## About instructions

- Proposed API is not optimal :
  - FIXME: I decided to go with a PUT for the first route as it allows me to do upserts (use the same route for insertions).
  - The locate API sends data in the body while the method is a GET. We'd rather use query strings.
  - I added a DELETE route be able to delete couriers
  - We want to lookup couriers based on spare capacity, but I guess it evolves with attributed missions. Who is responsible for this computation ? It was unclear from the instructions so I decided to go to the simplest solution as far as the API is concerned and show off other things.

## Possible evolutions
