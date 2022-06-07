const instance = require('../services/redis-service')
const worker = require('../workers/redis-worker');
const cl = instance(0);
module.exports = {
    worker: worker(cl)
}