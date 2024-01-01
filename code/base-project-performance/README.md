# Docker Build Steps

docker build -t ghiya6548/k6-sql:latest .
docker tag ghiya6548/k6-sql:latest ghiya6548/k6-sql:latest
docker push ghiya6548/k6-sql:latest


kubectl create configmap postgres-perf-test --from-file performance-script.js -n unoplat-db-sql


# issues with linkerd
https://github.com/grafana/k6-operator/pull/73/commits/b01e7511aaf4571e7ac38d7ef0d11fe36671be40