var message = "Sign up to receive our newsletter for 10% off!";
var message_two = "Sign up to receive our newsletter for 20% off!";
var date = new Date();
var month = date.getMonth();
function updateMessage() {
    var el = document.getElementById('message');
    if (month < 5) {
        el.textContent = message_two;
    } else {
        el.textContent = message;
    }
}

updateMessage();