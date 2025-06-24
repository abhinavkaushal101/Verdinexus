package com.Verdinexus.VN.Controller;


import com.Verdinexus.VN.Model.data;
import com.Verdinexus.VN.Service.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class controller {

    private service s;

    @Autowired
    private data d;

    @Autowired
    public controller(service s) {
        this.s = s;
    }

    @GetMapping("/show")
    public List<data> show(){
        return s.show();
    }

    @PostMapping("/get")
    public void getData(@RequestBody data e){
        System.out.println(e.toString());
        s.getData(e);
    }
}
