var guests = ["maha", "manahil", "sana", "uzaiba"];
console.log("great news i have found a new table");
guests.unshift("iqra");
guests.splice(guests.length / 2, 0, "charles");
guests.push("rubab");
console.log("dear  ".concat(guests, " would you like to join us"));
