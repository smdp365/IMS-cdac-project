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
public class LoginController {
    Logger logger = LoggerFactory.getLogger(getClass().getName());

    @Autowired
    private LoginService loginService;


    @PostMapping("/login")
    public ResponseEntity loginAdmin(@Validated @RequestBody Login login) throws AdminNotFound {

        String email = login.getEmail();
        String password = login.getPasswordHash();

        logger.info("user login with email - {}", email);

        Login login1 = loginService.loginAdmin(email);

        if (isNull(login1)) {
            logger.info("User not found for this email :: " + email);
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        if (!login1.getPasswordHash().equals(login.getPasswordHash())) {
            logger.info("TODO :: " + email);
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        if (login1.isAdmin() != login.isAdmin()) {
            logger.info("TODO :: " + email);
            return new ResponseEntity<>("ashjas", HttpStatus.UNAUTHORIZED);
        }

        return new ResponseEntity<>("Logged in successfully", HttpStatus.OK);
    }

}


