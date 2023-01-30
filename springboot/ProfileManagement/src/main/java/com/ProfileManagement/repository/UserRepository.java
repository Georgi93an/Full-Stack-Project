package com.ProfileManagement.repository;

import org.springframework.data.repository.CrudRepository;

import com.ProfileManagement.entity.User;

public interface UserRepository extends CrudRepository<User, Long>{

}
