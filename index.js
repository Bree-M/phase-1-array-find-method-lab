function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
}

const record1 = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L" }
];

const record2 = [
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L" }
];

console.log(superbowlWin(record1));
console.log(superbowlWin(record2));






