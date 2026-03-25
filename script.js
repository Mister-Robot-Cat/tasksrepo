function summaryRange(list){
    let res = [];
    let start = list[0];

    for (let i = 1; i <= list.length; i++) {
        if (list[i] !== list[i - 1] + 1) {
            if (start === list[i - 1]) {
                res.push(`${start}`)
            } else{
                res.push(`${start} -> ${list[i -1]}`)
            }
            start = list[i];
        }

        
    }
    return res;
}
console.log(summaryRange([1,2,3,4,6,7,8,32]))