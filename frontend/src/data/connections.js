
export const connections = [
    // Delhi Hub connections
    { from: 1, to: 10 },  // Delhi → Lucknow
    { from: 1, to: 11 },  // Delhi → Srinagar
    { from: 1, to: 7 },   // Delhi → Ahmedabad
    { from: 1, to: 14 },  // Delhi → Patna

    // Mumbai DC connections
    { from: 2, to: 8 },   // Mumbai → Pune
    { from: 2, to: 7 },   // Mumbai → Ahmedabad
    { from: 2, to: 4 },   // Mumbai → Hyderabad

    // Bengaluru Hub connections
    { from: 3, to: 5 },   // Bengaluru → Chennai
    { from: 3, to: 9 },   // Bengaluru → Kochi
    { from: 3, to: 4 },   // Bengaluru → Hyderabad

    // Hyderabad Branch connections
    { from: 4, to: 13 },  // Hyderabad → Vizag

    // Chennai Edge connections
    { from: 5, to: 13 },  // Chennai → Vizag

    // Kolkata Branch connections
    { from: 6, to: 14 },  // Kolkata → Patna
    { from: 6, to: 12 },  // Kolkata → Guwahati

    // Lucknow Hub connections
    { from: 10, to: 14 }, // Lucknow → Patna
    { from: 10, to: 6 },  // Lucknow → Kolkata

    // Pune DC connections
    { from: 8, to: 3 },   // Pune → Bengaluru

    // Patna Hub connections
    { from: 14, to: 12 }, // Patna → Guwahati
]