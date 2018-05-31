// variables for welcome message.
var greeting = 'Hello ';
var name = 'Molly';
var message = ', please check your order.';
// concatenate the three variables above.
var welcome = greeting + name + message;

// variables to hold details about the sign.
var sign = 'Montagne House';
var tiles = sign.length;
var tileprice = 5;
var subTotal = tiles * tileprice;
var tileshippingcost = 0.50;
var shipping = tiles * tileshippingcost;
var grandTotal = subTotal + shipping;

// get the element that has an id of greeting;
var el = document.getElementById('greeting');
// Replace content of that element with the personalized welcome message.
el.textContent = welcome;

// get the element that has an id of userSign then update its contents.
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

// get the element that has an id of tiles and update its contents.
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

// get the elemenet that has an id of subTotal and update its contents.
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

// get the element that has an id of shipping and update its contents.
var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

// get the element that has an id of grandTotal and update its contents.
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;
