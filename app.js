const zero = require('./redis-databases/0');
zero.worker.keys().then(keys => {
    console.log(keys);
})
zero.worker.save('key-001', { name: 'John', details: '...' });
zero.worker.keys().then(keys => {
    console.log(keys);
})