package com.example.photo_nest.repository;

import com.example.photo_nest.model.Share;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShareRepo extends JpaRepository<Share, Long> {

}
