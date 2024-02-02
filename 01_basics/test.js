const myDate = new Date()
console.log(myDate.toString()); // Fri Feb 02 2024 08:03:44 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString()); // 2/2/2024, 8:03:44 AM
console.log(myDate.toDateString());   // Fri Feb 02 2024
console.log(myDate.toISOString());    // 2024-02-02T02:33:44.364Z
console.log(myDate.toJSON());          // 2024-02-02T02:33:44.364Z
console.log(myDate.toLocaleDateString());  // 2/2/2024
console.log(myDate.toTimeString());  // 08:03:44 GMT+0530 (India Standard Time)
console.log(myDate.toUTCString());  // Fri, 02 Feb 2024 02:33:44 GMT