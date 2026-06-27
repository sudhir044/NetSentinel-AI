const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        // Personal Information
        firstName: {
            type: String,
            required: true,
            trim: true,
        },

        lastName: {
            type: String,
            required: true,
            trim: true,
        },

        username: {
            type: String,
            required: true,

            lowercase: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,

            lowercase: true,
            trim: true,
        },



        // Authentication
        password: {
            type: String,
            required: true,
        },

        isVerified: {
            type: Boolean,
            default: false,
        },

        lastLogin: {
            type: Date,
            default: null,
        },

        // Organization
        organization: {
            type: String,
            default: "",
        },

        department: {
            type: String,
            default: "",
        },

        designation: {
            type: String,
            default: "",
        },

        // Role Reference
        role: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role",
            required: true,
        },

        // Account Status
        status: {
            type: String,
            enum: ["active", "inactive", "blocked"],
            default: "active",
        },
    },
    {
        timestamps: true,
    }
);

userSchema.index({ email: 1 }, { unique: true });

userSchema.index({ username: 1 }, { unique: true });

userSchema.index({ role: 1 });

userSchema.index({ status: 1 });

module.exports = mongoose.model("User", userSchema);