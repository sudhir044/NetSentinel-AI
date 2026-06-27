export const nodes = [
    {
        id: 1,
        name: "Delhi Hub",
        x: 50,
        y: 10,
        status: "healthy",
    },

    {
        id: 2,
        name: "Mumbai DC",
        x: 20,
        y: 35,
        status: "healthy",
    },

    {
        id: 3,
        name: "Kolkata Branch",
        x: 80,
        y: 35,
        status: "warning",
    },

    {
        id: 4,
        name: "Bengaluru Hub",
        x: 50,
        y: 60,
        status: "healthy",
    },

    {
        id: 5,
        name: "Chennai Edge",
        x: 30,
        y: 88,
        status: "healthy",
    },

    {
        id: 6,
        name: "Hyderabad",
        x: 70,
        y: 88,
        status: "critical",
    },
];

export const links = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 4 },
    { from: 4, to: 5 },
    { from: 4, to: 6 },
];