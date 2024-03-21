var usernames = ["admin", "user1", "user2", "user3", "user4"];
usernames.forEach(function (username) {
    if (username === "admin") {
        console.log("hello admin would you like you see the report");
    }
    else {
        console.log("hey ".concat(username, " thanks for logging in"));
    }
});
