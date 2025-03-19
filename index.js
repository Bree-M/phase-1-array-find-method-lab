function superbowlWin(records) {
    const win = records.find(game => game.result === "W");
    return win ? win.Year : undefined;
}

const superbowlRecords = [

    {Year:2018, result: "L"},
    {Year: 2019 ,result:"W" },
    { Year: 2020, result: "L"}
];

console.log(superbowlWin(superbowlRecords));

const noWinRecorded = [
    { Year: 2018, result: "L"},
    { Year: 2020, result: "L" }

];

console.log(superbowlWin(noWinRecorded));

