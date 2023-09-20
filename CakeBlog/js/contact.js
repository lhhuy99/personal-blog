function contactCheckName() {
    var checkName = document.getElementById("name");
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

function contactCheckEmail() {
    var checkEmail = document.getElementById("email");
    if (checkEmail.value.length == 0) {
        document.getElementById("checkEmail").innerHTML = "Please fill out your email.";
        return false;
    } else if (checkEmail.value.length > 100) {
        document.getElementById("checkEmail").innerHTML = "Your email should not exceed 100 characters.";
        return false;
    } else {
        document.getElementById("checkEmail").innerHTML = "";
    }
}

function contactCheckSubject() {
    var checkSubject = document.getElementById("subject");
    if (checkSubject.value.length == 0) {
        document.getElementById("checkSubject").innerHTML = "Please fill out the subject.";
        return false;
    } else if (checkSubject.value.length < 50) {
        document.getElementById("checkSubject").innerHTML = "Subject should not shorter than 50 characters.";
        return false;
    } else if (checkSubject.value.length > 250) {
        document.getElementById("checkSubject").innerHTML = "Subject should not exceed 250 characters.";
        return false;
    } else {
        document.getElementById("checkSubject").innerHTML = "";
    }
}

function contactCheckMessage() {
    var checkMessage = document.getElementById("message");
    if (trimfield(checkMessage.value) == "") {
        document.getElementById("checkMessage").innerHTML = "Please fill out the message.";
        return false;
    } else if (checkMessage.value.length > 500) {
        document.getElementById("checkMessage").innerHTML = "Message should not exceed 500 characters.";
        return false;
    } else {
        document.getElementById("checkMessage").innerHTML = "";
    }
}

function trimfield(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

function final() {
    if (contactCheckName() == false || contactCheckEmail() == false || contactCheckSubject() == false || contactCheckMessage() == false) {
        return false;
    }
}