package com.shivangi.springpractice.crudspringapp.repository;

import com.shivangi.springpractice.crudspringapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
