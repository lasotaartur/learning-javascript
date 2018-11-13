// Expression bodies
const evens = [1,2,3,4,5];
const odds = evens.map(v => v + 1);
const nums = evens.map((v, i) => v + i);
const pairs = evens.map(v => ({even: v, odd: v + 1}));
console.log(evens);
console.log(odds);
console.log(nums);
console.log(pairs);

// Statement bodies
const fives = [];
nums.forEach(v => {
    if (v % 5 === 0)
        fives.push(v);
});
console.log(fives);

// Lexical this
const bob = {
    _name: "Bob",
    _friends: ["Jon"],
    printFriends() {
        this._friends.forEach(f =>
            console.log(this._name + " knows " + f));
    }
};
bob.printFriends();
