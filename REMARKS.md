# My remarks

## About instructions

- I improved the proposed API :
  - I decided to go with a PUT for the first route as it allows me to do upserts (use the same route for insertions).
  - The proposed API sends data in the body while the method is a GET. We'd rather use query strings.
  - I added a DELETE route be able to delete couriers

## Bonus goals

- I decided to go with project architecture and setup appropriate tools (formatting, linting, CI, migrations, ...) to have a good base to work from.

## Thoughts on proposed bonus goals

I am happy to share I would have tackled them during the interview :).

## Possible evolutions and improvements

- Add more tests to test validation and edge cases (improve coverage)
- Improve naming consistency in the project
- Configure staging and production environment (using AWS AuroraDB, AWS Lambda)
- Finish configuring Github action for automated development
- Set-up a branch based workflow (dev, staging, live)
- Integrate authentication and authorization after having evaluated possible approaches
- Going through a security checklist
- Setup logging and monitoring
- Finish the work around DX environment (automated db launch and migration, a db for each use case, formatter for md files, ...)
- Improve documentation for developers (and fix typo if any, one could setup a checker)
- ... (I need to keep it brief)

## Other remarks

- I used this project to test `tsoa` and TypeORM. I would not have necessarily picked them for a real project, but this projects was the occasion to start benchmarking them.
