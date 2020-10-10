const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware("/hoge.php", { target: "http://192.168.2.124" }));
};