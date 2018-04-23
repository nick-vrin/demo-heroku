// Example using HTTP POST operation

"use strict";
var page = require('webpage').create(),
    server = 'http://localhost:5000/demo',
    data = '';//email=hitesh.vrinsoft@gmail.com&password=12345678&is_phone=1&device_token=XYZ

page.open(server, 'post', data, function (status) {
    if (status !== 'success') {
        console.log('Unable to post!');
    } else {
        console.log(page.content);
    }
    phantom.exit();
});