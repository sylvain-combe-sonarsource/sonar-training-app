# sonar-training-app

This is an example Javascript application suitable for demonstrating the analysis features of SonarQube.

## Build requirements
There is no build per se. However for analysis to succeed you'll need `node.js` installed.

### Building with Jenkins
Note the named dependencies in the `Jenkinsfile` for SonarQube, the SonarScanner, and NodeJS. Appropriate global tools must be installed. For NodeJS, use the [Jenkins plugin](https://plugins.jenkins.io/nodejs/) to add the global tool.

## Making changes/showing New Code scans
* __Please fork the repository! Do not change this one!__
* The file `myserver.js` in the root directory contains a commented-out code block. Uncomment, commit, and on a fresh scan you'll have New Code results including a vulnerability.

[![Quality Gate Status](https://sycolatest.eu.ngrok.io/api/project_badges/measure?project=github-actions-sonar-training-app&metric=alert_status&token=sqb_9852c36b0bef680eb1439c599a081b7b3e9e7bdb)](https://sycolatest.eu.ngrok.io/dashboard?id=github-actions-sonar-training-app)



