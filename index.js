"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateISBN = void 0;
const validateISBN = (data) => {
    let sum = 0;
    if ((data.substring(data.length - 1, data.length)) === "X") {
        for (let i = 0; i < data.length - 1; i++) {
            sum = sum + (parseInt(data.substring(i, i + 1))) * (i + 1);
        }
        sum = sum + 10 * 10;
        if (sum % 11 === 0) {
            console.log("true");
        }
        else {
            console.log("false");
        }
    }
    else {
        for (let i = 0; i < data.length; i++) {
            // console.log(parseInt(data.substring(i, i+1)))
            sum = sum + (parseInt(data.substring(i, i + 1))) * (i + 1);
        }
        console.log(sum);
        if (sum % 11 === 0) {
            console.log("true");
        }
        else {
            console.log("false");
        }
    }
};
exports.validateISBN = validateISBN;
(0, exports.validateISBN)("X123456788");
