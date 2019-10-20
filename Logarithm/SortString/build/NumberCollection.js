"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NumberCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    // مقارنه الاندكس الاول والثاني
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}
exports.NumberCollection = NumberCollection;
