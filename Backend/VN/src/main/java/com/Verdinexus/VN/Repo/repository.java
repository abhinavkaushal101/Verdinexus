package com.Verdinexus.VN.Repo;

import com.Verdinexus.VN.Model.data;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface repository extends JpaRepository<data, Long> {


}
