function plusOne(number) {
    for (let i = number.length - 1; i >= 0; i--) {
        if (number[i] < 9) {
            number[i]++;
            return number;
        }
        number[i] = 0;
    }
    number.unshift(1);
    return number;
}
