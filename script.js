function convertToJson() {
    let form = document.getElementById("dataForm");
    let formData = {};
    for (let i = 0; i < form.elements.length; i++) {
        let element = form.elements[i];
        if (element.type !== "submit") {
            formData[element.name] = element.value;
        }
    }
    let jsonData = JSON.stringify(formData);
    let jsonOutput = document.getElementById("jsonOutput");
    jsonOutput.innerHTML = "<pre>" + jsonData +"<br>"+ "</pre>";
}
window.onbeforeunload = function() {
    localStorage.setItem("name", $('#name').val());
    localStorage.setItem("email", $('#email').val());
}

window.onload = function() {

    // If sessionStorage is storing default values (ex. name), exit the function and do not restore data
    if (sessionStorage.getItem('name') == "name") {
        return;
    }

    // If values are not blank, restore them to the fields
    var name = sessionStorage.getItem('name');
    if (name !== null) $('#name').val(name);

    var email = sessionStorage.getItem('email');
    if (email !== null) $('#email').val(email);
}

// Before refreshing the page, save the form data to sessionStorage
window.onbeforeunload = function() {
    sessionStorage.setItem("name", $('#name').val());
    sessionStorage.setItem("email", $('#email').val());
}



let saveFile = () => {
    // Get the data from each element on the form.
    const name = document.getElementById("name");
    const email = document.getElementById("email");

    // This variable stores all the data.
    let data = " \r " + "Name: " + name.value + " \r\n " + "Email: " + email.value;
    console.log(data); //printing form data into the console
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: "text/plain" });
    let newLink = document.createElement("a");
    newLink.download = name.value+".txt";

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
};