from ubuntu:24.04

# COPY entrypoint.sh .
# COPY package.json .
# COPY watcher.js .
# COPY static/ .
COPY . .

RUN apt-get update && \
apt-get install -y nodejs npm
RUN npm install

CMD ["./entrypoint.sh"]
