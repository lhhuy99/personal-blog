function orderCheckCakeName() {
    var checkCakeName = document.getElementById("cakename");
    console.log(checkCakeName.value);
    if (checkCakeName.value == 0) {
        document.getElementById("checkCakeName").innerHTML = "Please select our product.";
        return false;
    } else {
        document.getElementById("checkCakeName").innerHTML = "";
    }
}

function orderCheckName() {
    var checkName = document.getElementById("name");
    console.log(checkName.value.length);
    if (checkName.value.length == 0) {
        document.getElementById("checkName").innerHTML = "Please fill out your name.";
        return false;
    } else if (checkName.value.length > 100) {
        document.getElementById("checkName").innerHTML = "Your name should not exceed 100 characters.";
        return false;
    } else {
        document.getElementById("checkName").innerHTML = "";
    }
}

function orderCheckMessage() {
    var checkMessage = document.getElementById("message");
    console.log(checkMessage.value.length);
    if (checkMessage.value.length > 0) {
        if (checkMessage.value.length > 30) {
            document.getElementById("checkMessage").innerHTML = "Message should not exceed 30 characters.";
            return false;
        } else {
            document.getElementById("checkMessage").innerHTML = "";
        }
    } else {
        if (orderCheckCakeName() == false || orderCheckName() == false || orderCheckDate() == false || orderCheckDeliverTo() == false) {
            return false;
        }
    }
}

function orderCheckDate() {
    var checkDate = document.getElementById("deliverDate");
    var selectedDate = new Date(checkDate.value);
    var now = new Date();
    if (checkDate.value.length == 0) {
        document.getElementById("checkDate").innerHTML = "Please fill out the deliver date.";
        return false;
    } else {
        if (dateNoTime(selectedDate) < dateNoTime(now)) {
            document.getElementById("checkDate").innerHTML = "Date must be in the future";
            return false;
        } else {
            document.getElementById("checkDate").innerHTML = "";
        }
    }
}

function dateNoTime(thedate) {
    return thedate.setHours(0, 0, 0, 0);
}


function orderCheckDeliverTo() {
    var checkDeliverTo = document.getElementById("deliverTo");
    if (trimfield(checkDeliverTo.value) == "") {
        document.getElementById("checkDeliverTo").innerHTML = "Please fill out the address.";
        return false;
    } else if (checkDeliverTo.value.length > 500) {
        document.getElementById("checkDeliverTo").innerHTML = "Address should not exceed 500 characters.";
        return false;
    } else {
        document.getElementById("checkDeliverTo").innerHTML = "";
    }
}

function trimfield(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

function final() {
    if (orderCheckCakeName() == false || orderCheckName() == false || orderCheckMessage() == false || orderCheckDate() == false || orderCheckDeliverTo() == false) {
        return false;
    }
}