# README

Initial setup
* `bundle install`
* `yarn install` (`brew install yarn` first if you are using `npm`)
* `rails db:create`
* `rails db:migrate`
* `rails s`
* in a new terminal tab: `./bin/webpack-dev-server`
* navigate to `localhost:3000`

The current build has an admin environment. In order to access it during development, log in via root path. Once you see your name on the page from the automatic (or manual) facebook login, do the following:

*  enter the database and look at your user object.
*  Copy the `uid` and save it in your `.env` file in the root directory as ADMIN_UID.
  * At this point you should have access to the form to create an article and all of the admin containers as they are created
