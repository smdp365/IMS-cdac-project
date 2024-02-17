
package com.ims.exception;

import java.util.HashMap;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class ProductCategoryNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(ProductCategoryNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, String> exceptionHandlier(ProductCategoryNotFoundException exception){
        Map<String, String> errorMap = new HashMap<>();
        errorMap.put("MyErrorMessage", exception.getMessage());

        return errorMap;
    }



}
