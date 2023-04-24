import { createClient } from "redis";

const client = createClient({
  password: "72Sqzqna4yylEBFWli7U6oTLIWObrxES",
  socket: {
    host: "redis-11618.c212.ap-south-1-1.ec2.cloud.redislabs.com",
    port: 11618,
  },
});

client.connect();
client.on('connect',() => {
    console.log('Redis client connected');
})

export default client