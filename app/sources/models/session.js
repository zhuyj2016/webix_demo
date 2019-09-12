/* 
Code here is a stub, 
DO NOT USE IT IN PRODUCTION

When you have the actual server side delete the stub code below
and create custom functions, like the next

function status(){
	return webix.ajax().post("server/login.php?status")
		.then(a => a.json());
}

function login(user, pass){
	return webix.ajax().post("server/login.php", {
		user, pass
	}).then(a => a.json());
}

function logout(){
	return webix.ajax().post("server/login.php?logout")
		.then(a => a.json());
}

*/
function status(){
	return new webix.promise((resolve,reject) => {
		var token = window.localStorage.getItem("token");

		//TODO 正式会删掉
		token = 1;

		if (!token){
			reject({});
		}else {
			webix.ajax().headers({
				"Content-type":"application/json",
				"x-token":token
			}).post(serverPath+"/login", {
			}).then(data => {
				if(data.json().code==0){
					console.log("登录成功！"+ new Date().toLocaleString());
					resolve(data.json());
				}else {
					console.log("登录失败！"+ new Date().toLocaleString());
					reject(data.json());
				}
			});
		}
	});
}

export default {
	status
};