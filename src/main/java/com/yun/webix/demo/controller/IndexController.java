package com.yun.webix.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author zyj
 * @date 2019/9/12 10:10
 * @description
 */
@RestController
@RequestMapping("/webixdemo")
public class IndexController {

    @RequestMapping("/")
    public String index(){
        return null;
    }
}
