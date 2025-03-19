function superbowlWin(records) {
    let win = records.find(game => game.result === "W");
    return win ? win.Year : "The School did not win!";
}

const records = [

    {Year:"2015", result:"W"},
    {Year: "2014" ,result:"N/A" },
    { Year: "2013", result: "L"}
];

console.log(superbowlWin(records));

const noWinRecorded = [
    { Year: "2014", result: "N/A" },
    { Year: "2013", result: "L" }

];

console.log(superbowlWin(noWinRecorded));