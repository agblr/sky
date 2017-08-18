package org.takeback.core.user;


import org.takeback.core.organ.OrganController;
import org.takeback.core.organ.Organization;
import org.takeback.core.role.Role;
import org.takeback.core.role.RoleController;

public class AccountCenter {
    public static User getUser(String id) {
        return UserController.instance().get(id);
    }

    public static Role getRole(String id) {
        return RoleController.instance().get(id);
    }

    public static Organization getOrgan(String id) {
        return OrganController.instance().get(id);

    }

    public static void reloadUser(String id) {
        UserController.instance().reload(id);
    }

}
