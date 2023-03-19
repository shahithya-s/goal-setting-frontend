const { createProxyMiddleware } = require('http-proxy-middleware');

const CLIENT_URL = process.env.REACT_APP_CLIENT_URL

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: CLIENT_URL,
            changeOrigin: true,
            secure: false
        })
    );
};
