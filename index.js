function broncosSuperbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.Year : undefined;
}

const record = [
    { year: 2015, result: "W" },
    { year: 2014, result: `N/A` },
    { year: 2013, result: `L` }
];

console.log(broncosSuperbowlWin(record));

const noWinRecorded = [
    { Year: 2014, result: `L`},
    { Year: 2013, result: `L` }

];

console.log(broncosSuperbowlWin(noWinRecorded));

