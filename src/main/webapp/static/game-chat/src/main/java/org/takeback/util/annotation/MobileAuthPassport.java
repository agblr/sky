package org.takeback.util.annotation;

import java.lang.annotation.*;

@Inherited
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface MobileAuthPassport {
	MobileAuthPassportType value() default MobileAuthPassportType.APP;
}
