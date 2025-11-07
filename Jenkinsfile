pipeline {
    agent any

    environment {
        IMAGE_NAME = "jenkins-simple-node-app"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Elsakrishi29/jenkins-simple-node-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${IMAGE_NAME}:${env.BUILD_ID} ."
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh "docker rm -f simple-app || true"
                    sh "docker run -d -p 3000:3000 --name simple-app ${IMAGE_NAME}:${env.BUILD_ID}"
                }
            }
        }
    }

    post {
        always {
            echo "Pipeline completed!"
        }
    }
}
