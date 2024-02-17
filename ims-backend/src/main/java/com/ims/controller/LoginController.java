package com.ims.controller;

import com.ims.model.Login;
import com.ims.repository.LoginRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:5173")
@Slf4j
public class LoginController {

    @Autowired
    private LoginRepository loginRepository;

    @PostMapping("/login")
    ResponseEntity<String> login(@RequestBody Login newLogin){
//        loginRepository.save(newLogin);
        log.info("hiiiiiiii {}", newLogin.getEmail());
        if(newLogin.getEmail().startsWith("pos")){
            return new ResponseEntity<>( "Login Successful", HttpStatus.OK);
        }else if(newLogin.getEmail().startsWith("neg")){
            return new ResponseEntity<>( "Invalid credentials", HttpStatus.UNAUTHORIZED);
        }else if(newLogin.getEmail().startsWith("war")){
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.badRequest().body("bad request");
    }

//    @PostMapping("/register")
//    Void registerLogin(@RequestBody Login newLogin){
//        loginRepository.save(newLogin);
//        return null;
//    }



}
