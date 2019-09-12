<template>
  <div>
    <div class="text-sm"><fa-icon :icon="['far', 'calendar-alt']" /> September 12, 2019</div>
    <h2 class="page-title">Kicking the Tires on Github Actions</h2>
    <div class="content">
      <p>
        <img src="~/assets/img/gh-actions.png" class="h-64" alt="Github Actions" />
      </p>
      <p>
        I've been using GitHub for over 10 years now and I really think <a href="https://github.com/features/actions" target="_blank" rel="noopener">Github Actions</a>
        is one the biggest features to date. Github Actions is essentially an automation API that "enables
        you to create custom software development lifecycle workflows directly in your Github repo".
        Based on some event you specify (such as a push or issue creation or a new release), you're
        able to orchestrate workflows and have Github execute them for you. Workflows are described
        by a workflow file that lives in the root of your repository.
      </p>
      <p>
        There are endless possibilities with this. You could have a workflow to triage stale issues,
        setup code reviews, perform branch management, or automate new releases. But probably the most
        popular use for Actions is Continuous Integration and Deployment (CI/CD). So this means Github
        now offers native CI/CD that third party vendors like Travis CI and CircleCI have provided over
        the years. Github Actions support a plethora of languages, operating systems, and frameworks.
        They also offer matrix builds where you can test across multiple operating systems and language
        versions in parallel.
      </p>
      <p>
        This sounds exciting! For now, Github Actions is in beta and free for public repos so I wanted
        to convert one of my <a href="https://github.com/leesmith/decent_authentication" target="_blank" rel="noopener">open source Ruby on Rails apps</a>
        to use Github Actions for running the test suite on push. The test suite is pretty small and
        the only major dependency is PostgreSQL.
      </p>
      <p>
        To begin setting this up, my repo needs at least one workflow file. Workflow files are found in
        <code>.github/workflows</code> directory and are in YAML format.
      </p>
      <p>
        Here's what mine looks like:
      </p>
      <div class="code-wrap"><pre v-highlightjs><code class="yml"># ruby.yml

name: Build

on: [push]

jobs:
  build:
    runs-on: ubuntu-18.04

    services:
      postgres:
        image: postgres:11
        ports: ['5432:5432']
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5

    steps:
    - uses: actions/checkout@v1
    - name: Set up Ruby 2.6
      uses: actions/setup-ruby@v1
      with:
        ruby-version: 2.6.x
    - name: Build and test with Rake
      env:
        PGHOST: 127.0.0.1
        PGUSER: postgres
        RAILS_ENV: test
      run: |
        sudo apt-get -yqq install libpq-dev
        gem install bundler
        bundle install --jobs 4 --retry 3
        cp config/database.postgres.yml config/database.yml
        bundle exec rake db:test:prepare
        bundle exec rake spec</code></pre></div>
      <p>
        I've named this workflow "Build" and set it to run whenever I push to the repo.
        The <code>jobs</code> section is really the meat of the action. Jobs are made up of steps that
        are executed in the same virtual environment. I'm saying here that this job will run in an
        Ubuntu 18.04 VM and use the postgres service with PostgreSQL version set to 11. The steps
        first check out my repo and then sets up a ruby environment using two of Github's public actions.
        Next, I set some environment variables, install a development package, install my project's
        gem dependencies, and lastly run the test suite. Upon each push to the repo, Github executes
        this workflow for me and I can view the logs from the Actions tab of my project to see the output.
      </p>
      <p>
        I'm really excited to see what else they add to enhance Actions. For now, it looks like it will
        be a solid competitor to the other CI/CD services out there.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Kicking the Tires on Github Actions - LeeSmith.net",
      meta: [
        { hid: "description", name: "description", content: "Configuring and running a test suite for a Ruby on Rails and PostgreSQL app using Github Actions." }
      ]
    };
  }
};
</script>
