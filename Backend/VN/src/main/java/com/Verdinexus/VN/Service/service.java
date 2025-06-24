package com.Verdinexus.VN.Service;

import com.Verdinexus.VN.Model.data;
import com.Verdinexus.VN.Repo.repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class service {


    @Autowired
    private repository r;




    public List<data> show() {
        return r.findAll();
    }

    public void getData(data e) {
            r.save(e);
    }
}
