let saveFile = () => {
    // Get the data from each element on the form.
    const name = document.getElementById("name");
    const A1 = document.getElementById("A1");
    const A2 = document.getElementById("A2");
    const A3 = document.getElementById("A3");

    // This variable stores all the data.
    let data = " \r " + "Name: " + name.value + " \r\n " + "Answer 1: " + A1.value + " \r\n " + "Answer 2: " + A2.value + " \r\n " + "Answer 3: " + A3.value;
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