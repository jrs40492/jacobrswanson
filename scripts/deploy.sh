#!/bin/bash

echo "$1" | docker login registry.gitlab.com -u gitlab-ci-token --password-stdin
docker stop portfolio
docker rm portfolio

docker run \
-d \
--restart always \
--name portfolio \
--net nginx-proxy 
registry.gitlab.com/jrs40492/portfolio:$2

docker image prune -a --force --filter "until=168h"
