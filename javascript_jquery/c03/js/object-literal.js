// object set-up
var hotel = {
    name: 'Quay',
    rooms: 40,
    booked: 25,
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
};

var hotel_two = {
    name: 'Park',
    rooms: 500,
    booked: 354,
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
};

//Update HTML
var elName = document.getElementById('hotelName'); // Get element
elName.textContent = hotel_two.name; // Update element

var elRooms = document.getElementById('rooms'); // Get element
elRooms.textContent = hotel_two.checkAvailability(); // Update element