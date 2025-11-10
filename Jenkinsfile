pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Elsakrishi29/jenkins-simple-node-app.git'
            }
        }
        stage('Install Dependencies') {
            steps { sh 'npm install' }
        }
        stage('Build Docker Image') {
            steps { sh "docker build -t jenkins-simple-node-app:${env.BUILD_ID} ." }
        }
        stage('Run Docker Container') {
            steps {
                sh "docker rm -f simple-app || true"
                sh "docker run -d -p 3000:3000 --name simple-app jenkins-simple-node-app:${env.BUILD_ID}"
            }
        }
    }
}