package com.ims.utils;

import com.ims.model.EmployeeEntity;

public class Mapper {

    public static EmployeeEntity toEmployee(EmployeeEntity employeeEntity) {
        EmployeeEntity employee = new EmployeeEntity();
        employee.setEmail(employeeEntity.getEmail());
        employee.setFirstName(employeeEntity.getFirstName());
        employee.setLastName(employeeEntity.getLastName());
        employee.setMobNo(employeeEntity.getMobNo());
        return employee;
    }

    public static EmployeeEntity toEmployeeEntity(EmployeeEntity employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        employeeEntity.setEmail(employee.getEmail());
        employeeEntity.setFirstName(employee.getFirstName());
        employeeEntity.setLastName(employee.getLastName());
        employeeEntity.setMobNo(employee.getMobNo());
        return employeeEntity;
    }
}
