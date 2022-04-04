function validation() {

	 

	var name = document.getElementById("name").value;
	var address = document.getElementById("address").value;
 	var phone = document.getElementById("phone").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	var error_message = document.getElementById("error_message");
	var text;

	 

	error_message.style.padding ="10px";

	if(name.length < 5 ){
		text = "Please Enter Valid Name";
		error_message.innerHTML =text;
		 
		return false;
	}

	if(address.length < 10){
		text = "Please Enter Proper Address";
		error_message.innerHTML =text;
		return false;
	}

	 

	if(phone.length <10){
		text = "Please Enter Valid phone number";
		error_message.innerHTML =text;
		return false;
	}

	if(email.indexOf("@") == -1 || email.length < 6){
		text = "Please Enter Valid Email";
		error_message.innerHTML =text;
		return false;
	}

	if (message.length <= 140)
	{
		text = "Message must be min 140 characters";
		error_message.innerHTML =text;
		return false;

	}
	alert("Details Submitted Successfully!! We will contact you as soon as possible.Thank you for getting in touch :)");

	return true;

	

}

function orderPlaced()
{
	alert("Order Placed!! Please wait for our call. Thank you for getting in touch :)");
}
 	
 