const config = require('../app-config.json');
if (config.mode === 'dev') {
} else if (config.mode === 'prod') {
    //...
} else {
    //...
}