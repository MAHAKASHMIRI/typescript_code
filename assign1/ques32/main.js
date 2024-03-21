var current_user = ["admin", "user1", "user2", "user3", "user4"];
var new_user = ["user3", "user4", "user5"];
new_user.forEach(function (new_user) {
    if (current_user.some(function (current_user) {
        return current_user.toLocaleLowerCase() ===
            new_user.toLocaleLowerCase();
    })) {
        console.log("the username ".concat(new_user, " is not available"));
    }
    else {
        console.log("".concat(new_user, " is available"));
    }
});
