
function validateform() {
    /*document.getElementById('book').disabled = true;*/
    var name = document.myform.name1.value;
    var phno = document.myform.phno1.value;
    var city = document.myform.city1.value;
    var state = document.myform.state1.value;

    if (name == null || name == "") {
        alert("Name can't be blank");
        return false;

    }

    if (name.length != "") {
        var regex = /^(?=.[A-z])/;
        if (regex.test(name) === false) {
            alert("Please enter a valid Name");
            return false;
        }
    }

    if (phno.length != 10) {
        alert("Please enter a valid phone number");
        return false;
    }

    if (city.length != "") {
        var regex = /^(?=.[A-z])/;
        if (regex.test(city) === false) {
            alert("Please enter a valid City Name");
            return false;
        }
    }

    if (state.length != "") {
        var regex = /^(?=.[A-z])/;
        if (regex.test(state) === false) {
            alert("Please enter a valid State Name");
            return false;
        }
    }

}

window.addEventListener("load", start, false);
function start() {
    document.getElementById("myform").addEventListener("submit", submitfun, false);
}
function submitfun() {
    window.alert("Are you Sure to submit");
    window.alert("Thank you");
}
