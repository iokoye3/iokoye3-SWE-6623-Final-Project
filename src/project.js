var submitform = document.getElementById("submitform");
submitform.addEventListener('click', myBookings);

function myBookings() {

	var type = document.getElementById('type').value;
	var company = document.getElementById('company').value;
	var reservation = document.getElementById('reservation').value;
	var firstname = document.getElementById('firstname').value;
	var lastname = document.getElementById('lastname').value;
	var startdate = document.getElementById('startdate').value;
	var enddate = document.getElementById('enddate').value;
	var starttime = document.getElementById('starttime').value;
	var endtime = document.getElementById('endtime').value;
	
	if(!type || !reservation || !lastname || !startdate || !enddate || !starttime || !endtime) {
		alert("Fill all required fields.");
		return;
	}
	var bookings = document.getElementById("bookings");
	
	var row = 1;
	
	var bookingRow = bookings.insertRow(row);
	
	var cell1 = bookingRow.insertCell(0);
	var cell2 = bookingRow.insertCell(1);
	var cell3 = bookingRow.insertCell(2);
	var cell4 = bookingRow.insertCell(3);
	var cell5 = bookingRow.insertCell(4);
	var cell6 = bookingRow.insertCell(5);
	var cell7 = bookingRow.insertCell(6);
	var cell8 = bookingRow.insertCell(7);
	var cell9 = bookingRow.insertCell(8);
	
	cell1.innerHTML = type;
	cell2.innerHTML = company;
	cell3.innerHTML = reservation;
	cell4.innerHTML = firstname;
	cell5.innerHTML = lastname;
	cell6.innerHTML = startdate;
	cell7.innerHTML = enddate;
	cell8.innerHTML = starttime;
	cell9.innerHTML = endtime;
	
	row++;
}

	