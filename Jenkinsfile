pipeline {
agent any
tools {nodejs "NodeJS20"}

stages {
    stage('cypress parallel tests') {
        parallel {
            stage('tester A') {
                steps {
                    sh "npm run cy:run"
                }
            }
        }
    }
}
}
