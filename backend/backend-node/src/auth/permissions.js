const hasPermission = (user, permission) => {
    if (!user.role) return false;

    return user.role.permissions.includes(permission);
};

module.exports = hasPermission;