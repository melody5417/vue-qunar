module.exports = {
	devServer: {
		port: 8080,
		host: "0.0.0.0",
		https: false,
		open: true, // 自动启动浏览器
		proxy: {
			"/api": {
				target: "http://0.0.0.0:8080", //设置调用的接口域名和端口
				changeOrigin: false, //是否跨域
				ws:true,
				pathRewrite: {
					"^/api": "mock"	//请求的地址以api开头,则替换
				}
			}
		}
	}
}