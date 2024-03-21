var guests = ["maha", "sana", "manahil", "uzaiba"];
while (guests.length > 2) {
    var removedguest = guests.pop();
    console.log("sorry ".concat(removedguest, " i can't invite you all"));
}
;
guests.forEach(function (guest) {
    console.log("dear ".concat(guest, ",you are still invited"));
});
guests.splice(0, guests.length);
console.log(guests);
