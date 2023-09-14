document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var startTime = document.getElementById("startTime").value;
    var endTime = document.getElementById("endTime").value;
    var guests = document.getElementById("guests").value;
  
    // Display reservation details
    alert("Reservation details:\nName: " + name + "\nDate: " + date + "\nStart Time: " + startTime + "\nEnd Time: " + endTime + "\nGuests: " + guests);
  });