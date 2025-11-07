# jenkins-simple-node-app

## Run Jenkins using Docker Container

```bash
# Jenkins will run on:

http://localhost:8080
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