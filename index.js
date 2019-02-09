const { ShardingManager } = require('discord.js');

const shards = new ShardingManager('./server.js', {
    token: process.env.SECRET,
    totalShards: 'auto'
});

shards.on('launch', shard => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] Launched shard #${shard.id}`);
});

shards.on('message', (shard, msg) => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] #${shard.id} | ${msg._eval} | ${msg._result}`);
});

shards.spawn(this.totalShards, 5000);