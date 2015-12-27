'use strict';
module.exports = (options) => {
    return [{
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            reply.view('index', {
                recordCount: options.data.length
            });
        }
    }, {
        method: 'GET',
        path: '/public/{param*}',
        handler: {
            directory: {
                path: 'public'
            }
        }
    }, {
        method: 'GET',
        path: '/babel/browser.min.js',
        handler: {
            file: 'node_modules/babel-core/browser.min.js'
        }
    }, {
        method: 'GET',
        path: '/output/{param*}',
        handler: {
            directory: {
                path: '../output'
            }
        }
    }];
};