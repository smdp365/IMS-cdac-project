package com.ims.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ims.model.InquiryForm;
import com.ims.service.EmailService;


@RestController
@CrossOrigin("http://localhost:5174")
public class InquiryController {

    @Autowired
    private EmailService emailService;
    
    Logger logger = LoggerFactory.getLogger(getClass().getName());

    @PostMapping("/submitInquiry")
    public void submitInquiry(@RequestBody InquiryForm form) {
    	logger.info("enquiry with email {}", form.getEmail());
        // Process form data
        // Send email with form data
        String to = "adityasinghyg@gmail.com";
        String subject = "New Inquiry Submitted";
        String text = "Name: " + form.getName() + "\nEmail: " + form.getEmail() + "\nMessage: " + form.getMessage();
        emailService.sendEmail(to, subject, text);
    }
}
