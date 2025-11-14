"use strict";

function View() {
    var display = document.getElementById("display"),
        button0 = document.getElementById("0"),
        button1 = document.getElementById("1"),
        button2 = document.getElementById("2"),
        button3 = document.getElementById("3"),
        button4 = document.getElementById("4"),
        button5 = document.getElementById("5"),
        button6 = document.getElementById("6"),
        button7 = document.getElementById("7"),
        button8 = document.getElementById("8"),
        button9 = document.getElementById("9"),
        buttonC = document.getElementById("C"),
        buttonEquals = document.getElementById("equals"),
        bankFee = document.getElementById("fee"),
        toCurrency = document.getElementById("to"),
        toCurrencyName,
        fromCurrency = document.getElementById("from"),
        fromCurrencyName,
        apply = document.getElementById("apply"),
        img = document.getElementById("icon"),
        div = document.getElementById("hamburger"),
        bigDiv = document.getElementById("grid");

    this.setbutton0 = function (callback) {
        button0.addEventListener("click", callback);
    };
    this.setbutton1 = function (callback) {
        button1.addEventListener("click", callback);
    };
    this.setbutton2 = function (callback) {
        button2.addEventListener("click", callback);
    };
    this.setbutton3 = function (callback) {
        button3.addEventListener("click", callback);
    };
    this.setbutton4 = function (callback) {
        button4.addEventListener("click", callback);
    };
    this.setbutton5 = function (callback) {
        button5.addEventListener("click", callback);
    };
    this.setbutton6 = function (callback) {
        button6.addEventListener("click", callback);
    };
    this.setbutton7 = function (callback) {
        button7.addEventListener("click", callback);
    };
    this.setbutton8 = function (callback) {
        button8.addEventListener("click", callback);
    };
    this.setbutton9 = function (callback) {
        button9.addEventListener("click", callback);
    };
    this.setbuttonC = function (callback) {
        buttonC.addEventListener("click", callback);
    };
    this.setbuttonEquals = function (callback) {
        buttonEquals.addEventListener("click", callback);
    };
    this.setApply = function (callback) {
        apply.addEventListener("click", callback);
    };
    this.showDisplay = function (num, cur) {
        display.innerHTML = num + " " + cur;
    };
    this.getTo = function () {
        return toCurrency.value;
    };
    this.getFromName = function () {
        return fromCurrencyName;
    };
    this.getToName = function () {
        return toCurrencyName;
    };
    this.getFrom = function () {
        return fromCurrency.value;
    };
    this.getFee = function () {
        return bankFee.value;
    };
    this.setTo = function (to) {
        toCurrency = to;
    };
    this.setFrom = function (from) {
        fromCurrency = from;
    };
    this.setFee = function (fee) {
        bankFee = fee;
    };

    this.fromIndex = function () {
        return fromCurrency.selectedIndex;
    };
    this.toIndex = function () {
        return toCurrency.selectedIndex;
    };
    this.feeIndex = function () {
        return bankFee.selectedIndex;
    };

    this.setValues = function () {
        if (localStorage.getItem('toCur') === null) {
            toCurrency.selectedIndex = 0;
            fromCurrency.selectedIndex = 6;
            bankFee.selectedIndex = 0;
        } else {
            toCurrency.selectedIndex = localStorage.getItem('toCur');
            fromCurrency.selectedIndex = localStorage.getItem('fromCur');
            bankFee.selectedIndex = localStorage.getItem('fee');
        }
    };
    this.setCurNames = function() {
        fromCurrencyName = fromCurrency[fromCurrency.selectedIndex].className;
        toCurrencyName = toCurrency[toCurrency.selectedIndex].className;
    };

    this.showDiv = function () {
        if (div.style.visibility === "visible"){
            div.style.visibility = "hidden";
            bigDiv.style.visibility = "visible";
            img.src = "hamburger.png";
            div.id = "hamburgerHidden";
        } else {
            div.style.visibility = "visible";
            bigDiv.style.visibility ="hidden";
            img.src = "cross.png";
            div.id = "hamburger";
        }
    };


}

function openMenu() {
    document.getElementById("hamburger").style.width = "100%";
    document.getElementById("openMenu").style.visibility = "hidden";
    document.getElementById("closeMenu").style.visibility = "visible";

}
function closeMenu() {
    document.getElementById("hamburger").style.width = "0";
    document.getElementById("openMenu").style.visibility = "visible";
    document.getElementById("closeMenu").style.visibility = "hidden";
}
