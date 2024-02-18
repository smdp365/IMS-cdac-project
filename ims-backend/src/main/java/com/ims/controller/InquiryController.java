package com.ims.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ims.model.InquiryForm;
import com.ims.service.EmailService;

@RestController
public class InquiryController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/submitInquiry")
    public void submitInquiry(@RequestBody InquiryForm form) {
        // Process form data
        // Send email with form data
        String to = "rks70589@gmail.com";
        String subject = "New Inquiry Submitted";
        String text = "Name: " + form.getName() + "\nEmail: " + form.getEmail() + "\nMessage: " + form.getMessage();
        emailService.sendEmail(to, subject, text);
    }
}
