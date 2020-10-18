// svelte.config.js
const preprocess = require('svelte-preprocess');

module.exports = {
    preprocess: preprocess({
        defaults: {
            script: 'typescript'
        }
    }),
    // ...other svelte options could go here
};

