package com.ims.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;

@Entity
@Getter
public class EmployeeEntity {

    @Id
    @GeneratedValue
    private Long id;	
    private String firstName;
    private String lastName;
    private String email;
    private String mobNo;

    public EmployeeEntity(Long id, String firstName, String lastName, String email, String mobNo) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.mobNo = mobNo;
    }

    public EmployeeEntity() {
    }
//
//    public Long getId() {
//        return id;
//    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", mobNo='" + mobNo + '\'' +
                '}';
    }

    public String getMobNo() {
        return mobNo;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setMobNo(String mobNo) {
        this.mobNo = mobNo;
    }
}
