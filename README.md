# NDS Flashcart Index

This site aims to list every NDS flashcart in existence. It is based on [Universal-DB](https://github.com/Universal-Team/db)'s website files.

### Building the site locally

1. Install [Ruby 3.x](https://www.ruby-lang.org/) for your machine
1. Run `bundle config set --local path vendor/bundle` to ensure that dependency versions do not clash with other ruby projects
1. Run `bundle install` to install dependencies
1. Run `bundle exec jekyll serve`
    - This will build the site to `_site`, and host a simple web server at `127.0.0.1:4000`
