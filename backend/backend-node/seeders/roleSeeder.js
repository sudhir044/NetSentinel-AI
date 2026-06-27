require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = require("../src/config/db");

const Role = require("../src/models/Role");

const ROLES = require("../src/constants/roles");

const PERMISSIONS = require("../src/constants/permissions");

const defaultRoles = [
    {
        name: ROLES.USER,
        description: "Normal User",
        permissions: [
            PERMISSIONS.DASHBOARD_VIEW,
            PERMISSIONS.TOPOLOGY_VIEW,
            PERMISSIONS.ALERT_VIEW,
            PERMISSIONS.REPORT_VIEW,
            PERMISSIONS.AI_CHAT,
        ],
    },

    {
        name: ROLES.ADMIN,
        description: "Administrator",
        permissions: [
            PERMISSIONS.DASHBOARD_VIEW,
            PERMISSIONS.TOPOLOGY_VIEW,
            PERMISSIONS.ALERT_VIEW,
            PERMISSIONS.ALERT_MANAGE,
            PERMISSIONS.REPORT_VIEW,
            PERMISSIONS.REPORT_GENERATE,
            PERMISSIONS.SETTINGS_VIEW,
            PERMISSIONS.AI_CHAT,
            PERMISSIONS.AI_CONFIG,
        ],
    },

    {
        name: ROLES.SUPER_ADMIN,
        description: "Super Administrator",
        permissions: Object.values(PERMISSIONS),
    },
];

const seedRoles = async () => {
    try {
        await connectDB();

        for (const role of defaultRoles) {
            const exists = await Role.findOne({ name: role.name });

            if (!exists) {
                await Role.create(role);
                console.log(`Created role: ${role.name}`);
            } else {
                console.log(`Role already exists: ${role.name}`);
            }
        }

        console.log("Role seeding completed.");

        process.exit(0);

    } catch (error) {
        console.error(error);

        await mongoose.connection.close();
        process.exit(1);
    }
};

seedRoles();