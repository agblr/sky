package org.takeback.mvc.controller.core;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.takeback.core.schema.Schema;

@RestController
public class SchemaLocator {

    @RequestMapping(value = "/**/{id}.sc", method = RequestMethod.GET)
    public Schema get(@PathVariable String id){

        return null;
    }
}
