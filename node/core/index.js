'use strict';
const Path = require('path');

function core(server, options, next) {
    server.route(require('./routes')(options));

    // CONFIGURE HAPI TO USE HANDLEBARS
    server.views({
        engines: {
            html: require('handlebars')
        },
        path: Path.join(`${__dirname}/../views`)
    });

    server.register({
        register: require('./main'),
        options: {
            data: options.data
        }
    }, error => {
        if(error) {
            console.log('There was an error loading the main plugin');
            server.log('error', `Error: ${error}`);
        }
    });

    return next();
}

core.attributes = {
    name: 'core',
    dependencies : ['inert', 'vision']
};

module.exports = core;
