# jenkins-simple-node-app

## Run Jenkins using Docker Container

```bash
docker volume create jenkins_home

docker run -d \
  -p 8080:8080 -p 50000:50000 \
  -v jenkins_home:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  --name jenkins-cicd \
  jenkins/jenkins:lts

# Get Password

docker exec jenkins-cicd cat /var/jenkins_home/secrets/initialAdminPassword

docker exec -it --user root jenkins-cicd bash
apt update
apt install -y git


# Jenkins will run on:

http://localhost:8080

docker stop jenkins-cicd
docker rm jenkins-cicd

```

## Jenkins Unlock Password

```bash
docker exec -it jenkins cat /var/jenkins_home/secrets/initialAdminPassword
```

## Install Docker inside Jenkins container

```bash
docker exec -it jenkins bash
apt-get update
apt-get install -y docker.io
exit
```

## Create Pipeline Job in Jenkins

* Inside Jenkins UI:

1) New Item → Pipeline → Name: simple-node-app
2) Select GitHub repo as SCM
3) Select Jenkinsfile from Repo

## Build Pipeline

* In Jenkins:
Click `Build Now`

```bash
curl http://localhost:3000/
```