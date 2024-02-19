package com.ims.utils;

import com.ims.model.Employee;
import com.ims.model.EmployeeEntity;

public class Mapper {

    public static Employee toEmployee(EmployeeEntity employeeEntity) {
        Employee employee = new Employee();
        employee.setEmail(employeeEntity.getEmail());
        employee.setFirstName(employeeEntity.getFirstName());
        employee.setLastName(employeeEntity.getLastName());
        employee.setMobNo(employeeEntity.getMobNo());
        return employee;
    }

    public static EmployeeEntity toEmployeeEntity(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        employeeEntity.setEmail(employee.getEmail());
        employeeEntity.setFirstName(employee.getFirstName());
        employeeEntity.setLastName(employee.getLastName());
        employeeEntity.setMobNo(employee.getMobNo());
        return employeeEntity;
    }
}
