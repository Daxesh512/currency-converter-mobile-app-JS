"use strict";

function Model() {
    var currentVal = 0;
    var toCurrency = 0;
    var fromCurrency = 0;


    this.getCurrentValue = function () {
        return currentVal;
    };

    this.getToCurrency = function() {
        return toCurrency;
    }

    this.setCurrencies = function(toCur, fromCur) {
        toCurrency = toCur;
        fromCurrency = fromCur;
    };
    this.clear = function() {
        currentVal = 0;
    };

    this.changeValue = function (num) {
        if (currentVal.toString().length < 6) {
            if (currentVal === 0 && num === 0) {
                //do nothing
            } else if (currentVal === 0 && num !== 0) {
                currentVal = num;
            } else {
                currentVal = parseInt(currentVal + "" + num);
            }
        }
    };

    this.convert = function (fee) {
        currentVal = Math.floor(((currentVal/fromCurrency) * toCurrency) + (fee * (currentVal/fromCurrency) * toCurrency));
    };


}