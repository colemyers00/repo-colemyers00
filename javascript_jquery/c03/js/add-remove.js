var hotel = {
    name: 'Park',
    rooms: 500,
    booked: 250
};

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

var elHotel = document.getElementById('hotel');
elHotel.textContent = hotel.name;

var elGym = document.getElementById('gym');
elGym.className = hotel.gym;

var elPool = document.getElementById('pool');
elPool.className = hotel.pool;

