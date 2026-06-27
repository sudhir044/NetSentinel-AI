const User = require("../models/User");

const getUsers = async (query) => {

    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const skip = (page - 1) * limit;

    const filter = {};

    // Search
    if (query.search) {

        filter.$or = [

            {
                firstName: {
                    $regex: query.search,
                    $options: "i"
                }
            },

            {
                lastName: {
                    $regex: query.search,
                    $options: "i"
                }
            },

            {
                email: {
                    $regex: query.search,
                    $options: "i"
                }
            }

        ];

    }

    // Status Filter
    if (query.status) {
        filter.status = query.status;
    }

    const users = await User.find(filter)

        .populate("role")

        .select("-password")

        .skip(skip)

        .limit(limit)

        .sort({ createdAt: -1 });

    const total = await User.countDocuments(filter);

    return {

        users,

        pagination: {

            total,

            page,

            limit,

            pages: Math.ceil(total / limit)

        }

    };

};

const getAllUsers = async () => {

    const users = await User.find()
        .populate("role")
        .select("-password");

    return users;
};



module.exports = {

    getUsers, getAllUsers



};