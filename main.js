// number 1
function convertFahrToCelcius(x) {

    if (typeof x === 'number') {

        let result = Number(((x - 32) * (5 / 9)).toFixed(4));
        return result;

    } else if (Array.isArray(x) === true) {

        console.error('[' + x + '] is not a vaild number it is an array');

    } else if (typeof x === 'object') {
        // how to change object to string JSON.stringify(obj)
        console.error('Sorry ' + JSON.stringify(x) + ' is not a vaild numebr its an object');

    }
};

const conversion = convertFahrToCelcius(1);
console.log(conversion);

// number 2
function checkYuGiOh(n) {
    const arr = [];
    const resultarr = [];

    // if else to decide whether the program runs or not
    if (typeof n === 'number') {
        for (t = 0; t < n; t++) {

        // if else for assessment of numbers
        // Numebr is divisble by two with no remiender is represented by (Number % 2 == 0)
            arr.push(n - t);
            if (arr[t] % 2 == 0 && arr[t] % 3 == 0 && arr[t] % 5 == 0) {
                resultarr[t] = 'yu-gi-oh';
            } else if (arr[t] % 2 == 0 && arr[t] % 5 == 0) {
                resultarr[t] = 'yu-oh';
            } else if (arr[t] % 3 == 0 && arr[t] % 5 == 0) {
                resultarr[t] = 'gi-oh';
            } else if (arr[t] % 2 == 0 && arr[t] % 3 == 0) {
                resultarr[t] = 'yu-gi';
            } else if (arr[t] % 2 == 0) {
                resultarr[t] = 'Yu';
            } else if (arr[t] % 5 == 0) {
                resultarr[t] = 'oh';
            } else if (arr[t] % 3 == 0) {
                resultarr[t] = 'gi';
            } else {
                resultarr[t] = arr[t];
            }
        }
    } else {
        console.error('invaild parameter: "' + n + '"');
    }
    return resultarr;
};
console.log(checkYuGiOh(30));

