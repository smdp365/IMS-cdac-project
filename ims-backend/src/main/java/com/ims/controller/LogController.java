package com.ims.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ims.exception.AdminNotFound;
import com.ims.model.Login;
import com.ims.service.LoginService;

import static java.util.Objects.isNull;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
//	@RequestMapping(value="/api")
public class LogController {
    Logger logger = LoggerFactory.getLogger(getClass().getName());

    @Autowired
    private LoginService aservice;


    @PostMapping("/loginReal")
    public ResponseEntity<Boolean> loginAdmin(@Validated @RequestBody Login login) throws AdminNotFound {
        // check
        System.out.println(login.getEmail() + login.getPasswordHash());

        String email = login.getEmail();
        String password = login.getPasswordHash();

        Login a = aservice.loginAdmin(email);

        if (isNull(a)) {
            logger.info("User not found for this email :: " + email);
            return new ResponseEntity<>(false, HttpStatus.UNAUTHORIZED);
        }
        System.out.println(a.getEmail() + a.getPasswordHash());

        return new ResponseEntity<>(a.isAdmin(), HttpStatus.OK);
    }

}


