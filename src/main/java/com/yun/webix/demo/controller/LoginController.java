package com.yun.webix.demo.controller;

import com.alibaba.fastjson.JSONObject;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author zyj
 * @date 2019/9/12 10:18
 * @description
 */
@RestController
@RequestMapping("/webixdemo")
public class LoginController {

    @RequestMapping("/login")
    public String login(){
        return ResponseCode.ok().toJson();
    }

    private static class ResponseCode {
        public int code;
        public String message;

        public ResponseCode(int code,String message){
            this.code = code;
            this.message = message;
        }

        static ResponseCode ok(){
            return new ResponseCode(0,"成功");
        }
        String toJson(){
            return JSONObject.toJSONString(this);
        }
    }
}
