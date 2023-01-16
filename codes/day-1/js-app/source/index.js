function createContact() {

    var txtNameObj = document.getElementById('txtName')
    var txtMobileObj = document.getElementById('txtMobile')
    var txtEmailObj = document.getElementById('txtEmail')

    // var name = txtNameObj.value
    // var mobileNumber = Number(txtMobileObj.value)
    // var emailId = txtEmailObj.value

    var contactObj = {
        name: txtNameObj.value,
        mobileNumber: Number(txtMobileObj.value),
        emailId: txtEmailObj.value
    }

    console.log(contactObj)
}