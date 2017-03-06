#!/bin/bash

rsync -r --exclude='node_modules' ../tiny-hh-wedding root@milotowers.com:/root/
ssh root@milotowers.com "cd /root; npm run build"
