package com.uoa.AirBnB.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

public class Helpers {

    public static String convertToJson(Object ob) throws JsonProcessingException {
        DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
        ObjectMapper mapper = new ObjectMapper();
        mapper.enable(SerializationFeature.INDENT_OUTPUT);
        mapper.setDateFormat(df);
        return mapper.writerWithDefaultPrettyPrinter().writeValueAsString(ob);
    }
}
