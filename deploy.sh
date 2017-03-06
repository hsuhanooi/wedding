#!/bin/bash

rsync -r --exclude='node_modules' ../tiny-hh-wedding root@50.116.9.133:/root/
ssh root@50.116.9.133 "cd /root/tiny-hh-wedding; npm install; npm run build"
