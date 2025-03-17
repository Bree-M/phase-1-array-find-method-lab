function superbowlWin(records) {
    let win = records.find(record => record.result === "W");
    return win ? win.Year : Undefined;
}

const records = [

    {Year:"2015", result:"W"},
    {Year: "2014" ,result:"N/A" },
    { Year: "2013", result: "L"},
];

console.log(superbowlWin(records));