import session from "models/session";
import {plugins} from "webix-jet";
import "./styles/app.css";
import { JetApp } from "webix-jet";
import { webix_zh_CN } from "locales/webix/zh.js";

export default class App extends JetApp{
	constructor(config){
		const defaults = {
			id 		: APPNAME,
			version : VERSION,
			debug 	: !PRODUCTION,
			start 	: "/top/index",
			css:"/styles/app.css",
			ping:1,
		};
		super({ ...defaults, ...config });

		this.use(plugins.User, { model: session });
		webix.i18n.locales["zh-CN"] = webix_zh_CN;
		webix.i18n.setLocale("zh-CN");
	}
}

export {App};