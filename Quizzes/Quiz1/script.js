let saveFile = () => {
    // Get the data from each element on the form.
    const name = document.getElementById("name");
    const A1 = document.getElementById("A1");
    const A2 = document.getElementById("A2");
    const A3 = document.getElementById("A3");
    const A4 = document.getElementById("A4");
    const A5 = document.getElementById("A5");
    const A6 = document.getElementById("A6");
    const A7 = document.getElementById("A7");
    const A8 = document.getElementById("A8");
    const A9 = document.getElementById("A9");
    const A10 = document.getElementById("A10");

    // This variable stores all the data.
    let data = " \r " + "Name: " + name.value + " \r\n " + "Answer 1: " + A1.value + " \r\n " + "Answer 2: " + A2.value + " \r\n " + "Answer 3: " + A3.value + " \r\n " + "Answer 4: " + A4.value + " \r\n " + "Answer 5: " + A5.value + " \r\n " + "Answer 6: " + A6.value + " \r\n " + "Answer 7: " + A7.value + " \r\n " + "Answer 8: " + A8.value + " \r\n " + "Answer 9: " + A9.value + " \r\n " + "Answer 10: " + A10.value;
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