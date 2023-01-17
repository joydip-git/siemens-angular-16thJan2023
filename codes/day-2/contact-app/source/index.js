function displayTable(contact) {
    var tdName = document.createElement('td')
    tdName.innerText = contact.name

    var tdEmail = document.createElement('td')
    tdEmail.innerText = contact.emailId

    var tdMobile = document.createElement('td')
    tdMobile.innerText = contact.mobileNumber.toString()

    var newRow = document.createElement('tr')
    //newRow.className = 'table-dark'
    newRow.classList.add('table-dark')
    newRow.append(tdName, tdEmail, tdMobile)

    document.getElementById('tbody').appendChild(newRow)
}
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
    var divContacts = document.getElementById('divContacts')

    if (divContacts.hidden === true)
        divContacts.hidden = false

    displayTable(contactObj)
}

window.addEventListener(
    'DOMContentLoaded',
    function () {
        var btnObj = document.getElementById('btnAdd')
        btnObj.addEventListener('click', createContact)
    }
)