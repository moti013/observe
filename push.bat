@REM refresh credentials
aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin 182515924836.dkr.ecr.eu-central-1.amazonaws.com

@REM build and push prod img
docker build -f dockerfile -t observe2 .
docker tag observe2:latest 182515924836.dkr.ecr.eu-central-1.amazonaws.com/observe2:latest
docker push 182515924836.dkr.ecr.eu-central-1.amazonaws.com/observe2:latest
aws ecs update-service --cluster mahuti-online-aws-prod --service observe2 --force-new-deployment --profile default --region eu-central-1 >conf/observe2%RANDOM%.json

@REM terminate prod img
docker rmi -f observe2
docker rmi -f 182515924836.dkr.ecr.eu-central-1.amazonaws.com/observe2:latest

@REM push to git
git add .
git commit -m "update%RANDOM%"
git push