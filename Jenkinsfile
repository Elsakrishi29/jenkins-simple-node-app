pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Elsakrishi29/jenkins-simple-node-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test || true'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t todo-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker rm -f todo-app || true'
                sh 'docker run -d --name todo-app -p 3000:3000 todo-app'
            }
        }
    }
}
