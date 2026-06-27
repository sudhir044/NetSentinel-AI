require("dotenv").config();

const bcrypt = require("bcryptjs");

const connectDB = require("../src/config/db");

const User = require("../src/models/User");

const Role = require("../src/models/Role");

const ROLES = require("../src/constants/roles");


const seedSuperAdmin = async () => {
    try {
        await connectDB();

        // Find Super Admin Role
        const superAdminRole = await Role.findOne({
            name: ROLES.SUPER_ADMIN,
        });

        if (!superAdminRole) {
            console.log("Super Admin role not found.");
            process.exit(1);
        }

        // Check if Super Admin already exists
        const existingSuperAdmin = await User.findOne({
            email: process.env.SUPER_ADMIN_EMAIL,
        });

        if (existingSuperAdmin) {
            console.log(" Super Admin already exists.");
            process.exit(0);
        }

        // Hash Password
        const hashedPassword = await bcrypt.hash(
            process.env.SUPER_ADMIN_PASSWORD,
            12
        );

        // Create Super Admin
        await User.create({
            firstName: process.env.SUPER_ADMIN_FIRST_NAME,
            lastName: process.env.SUPER_ADMIN_LAST_NAME,

            username: process.env.SUPER_ADMIN_USERNAME,

            email: process.env.SUPER_ADMIN_EMAIL,

            password: hashedPassword,

            role: superAdminRole._id,

            status: "active",

            isVerified: true,

            organization: "NetSentinel",

            department: "System Administration",

            designation: "Super Administrator",
        });

        console.log("Super Admin Created Successfully");

        process.exit(0);

    } catch (error) {

        console.error(error);

        process.exit(1);

    }
};

seedSuperAdmin();