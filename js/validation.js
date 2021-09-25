function validation() {

    var user = document.getElementById('fullname').value;
    var mobileNumber = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var itemName = document.getElementById('item-name').value;
    var quantity = document.getElementById('quantity').value;
    var deliveryAddress = document.getElementById('delivery-address').value;
    var date = document.getElementById('date').value;

    // var pass = document.getElementById('pass').value;
    // var confirmpass = document.getElementById('conpass').value;
    // var emails = document.getElementById('emails').value;





    if (user == "") {
        document.getElementById('error-fullname').innerHTML = "Please fill the username field";
        return false;
    } else {
        document.getElementById('error-fullname').innerHTML = null
    }
    if ((user.length <= 2) || (user.length > 30)) {
        document.getElementById('error-fullname').innerHTML = "Fullname lenght must be between 2 and 30";
        return false;
    } else {
        document.getElementById('error-fullname').innerHTML = null
    }
    if (!isNaN(user)) {
        document.getElementById('error-fullname').innerHTML = "only characters are allowed";
        return false;
    } else {
        document.getElementById('error-fullname').innerHTML = null
    }




    if (mobileNumber == "") {
        document.getElementById('error-phone').innerHTML = "Please fill the contact Number field";
        return false;
    } else {
        document.getElementById('error-phone').innerHTML = null
    }
    if (isNaN(mobileNumber)) {
        document.getElementById('error-phone').innerHTML = "user must write digits only not characters";
        return false;
    } else {
        document.getElementById('error-phone').innerHTML = null
    }
    if (mobileNumber.length != 11) {
        document.getElementById('error-phone').innerHTML = "Mobile Number must be 11 digits only";
        return false;
    } else {
        document.getElementById('error-phone').innerHTML = null
    }


    if (address == "") {
        document.getElementById('error-address').innerHTML = "Please fill the address field";
        return false;
    } else {
        document.getElementById('error-address').innerHTML = null
    }
    if ((address.length <= 10)) {
        document.getElementById('error-address').innerHTML = "Address lenght must be greater than 10";
        return false;
    } else {
        document.getElementById('error-address').innerHTML = null
    }


    if (itemName == "") {
        document.getElementById('error-item-name').innerHTML = "Please fill the address field";
        return false;
    } else {
        document.getElementById('error-item-name').innerHTML = null
    }
    if (!isNaN(itemName)) {
        document.getElementById('error-item-name').innerHTML = "Item name must write characters only";
        return false;
    } else {
        document.getElementById('error-item-name').innerHTML = null
    }
    if ((itemName.length <= 5)) {
        document.getElementById('error-item-name').innerHTML = "Item name lenght must be greater than 5";
        return false;
    } else {
        document.getElementById('error-item-name').innerHTML = null
    }
    

    if (quantity == "") {
        document.getElementById('error-quantity').innerHTML = "Please fill the quantity field";
        return false;
    } else {
        document.getElementById('error-quantity').innerHTML = null
    }
    if (isNaN(quantity)) {
        document.getElementById('error-quantity').innerHTML = "quantity must write digits only not characters";
        return false;
    } else {
        document.getElementById('error-quantity').innerHTML = null
    }




    if (deliveryAddress == "") {
        document.getElementById('error-delivery-address').innerHTML = "Please fill the delivery address field";
        return false;
    } else {
        document.getElementById('error-delivery-address').innerHTML = null
    }
    if ((deliveryAddress.length <= 10)) {
        document.getElementById('error-delivery-address').innerHTML = "Deliver Address lenght must be greater than 10";
        return false;
    } else {
        document.getElementById('error-delivery-address').innerHTML = null
    }


    if (date == "") {
        document.getElementById('error-date').innerHTML = "Please select the delivery date";
        return false;
    } else {
        document.getElementById('error-date').innerHTML = null
    }

    // if (pass == "") {
    //     document.getElementById('passwords').innerHTML = "Please fill the password field";
    //     return false;
    // }
    // if ((pass.length <= 5) || (pass.length > 20)) {
    //     document.getElementById('passwords').innerHTML = "Passwords lenght must be between  5 and 20";
    //     return false;
    // }


    // if (pass != confirmpass) {
    //     document.getElementById('confrmpass').innerHTML = "Password does not match the confirm password";
    //     return false;
    // }



    // if (confirmpass == "") {
    //     document.getElementById('confrmpass').innerHTML = "Please fill the confirmpassword field";
    //     return false;
    // }








    // if (emails == "") {
    //     document.getElementById('emailids').innerHTML = "Please fill the email idx` field";
    //     return false;
    // }
    // if (emails.indexOf('@') <= 0) {
    //     document.getElementById('emailids').innerHTML = "@ Invalid Position";
    //     return false;
    // }

    // if ((emails.charAt(emails.length - 4) != '.') && (emails.charAt(emails.length - 3) != '.')) {
    //     document.getElementById('emailids').innerHTML = ". Invalid Position";
    //     return false;
    // }
}