'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Hello World!';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
/*
    - hapi là 1 module cho phép chúng ta tạo 1 localhost để  thiết lập 1 server
    - Đầu tiền chúng ta sẽ require đến hapi (tham chiếu đến hapi), sau đó
    khởi tạo 1 biến server = Hapi.server() để tạo cổng, và tên host (nên đặt host name là: localhost)
    => Và thế là ta đã tạo được 1 server cho mình    
*/