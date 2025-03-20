#! /usr/bin/env bash

node watcher.js &
npx http-server -o ./static/
