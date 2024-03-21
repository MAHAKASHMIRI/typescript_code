var guests = ["maha", "sana", "manahil"];
var unableToAttend = "manahil";
console.log("".concat(unableToAttend, ", can't make it to dinner"));
var newGuest = "uzaiba";
guests[guests.indexOf(unableToAttend)] = newGuest;
guests.forEach(function (guest) {
    console.log("dear ".concat(guest, ",would you like to join me for dinner?"));
});
