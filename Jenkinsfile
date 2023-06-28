pipeline {
agent any
tools {nodejs "NodeJS20"}

stages {
    stage('cypress parallel tests') {
        parallel {
            stage('tester A') {
                steps {
                  sh "apt-get update"
                  sh "apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb"
                    sh "npm run cy:run"
                }
            }
        }
    }
}
}
