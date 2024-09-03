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
    const A11 = document.getElementById("A11");
    const A12 = document.getElementById("A12");
    const A13 = document.getElementById("A13");
    const A14 = document.getElementById("A14");
    const A15 = document.getElementById("A15");
    const A16 = document.getElementById("A16");
    const A17 = document.getElementById("A17");
    const A18 = document.getElementById("A18");
    const A19 = document.getElementById("A19");
    const A20 = document.getElementById("A20");
    const A21 = document.getElementById("A21");
    const A22 = document.getElementById("A22");
    const A23 = document.getElementById("A23");
    const A24 = document.getElementById("A24");
    const A25 = document.getElementById("A25");
    const A26 = document.getElementById("A26");

    // This variable stores all the data.
    let data = " \r " + "Name: " + name.value + " \r\n " + "Answer 1: " + A1.value + " \r\n " + "Answer 2: " + A2.value + " \r\n " + "Answer 3: " + A3.value + " \r\n " + "Answer 4: " + A4.value + " \r\n " + "Answer 5: " + A5.value + " \r\n " + "Answer 6: " + A6.value + " \r\n " + "Answer 7: " + A7.value + " \r\n " + "Answer 8: " + A8.value + " \r\n " + "Answer 9: " + A9.value + " \r\n " + "Answer 10: " + A10.value + " \r\n " + "Answer 11: " + A11.value + " \r\n " + "Answer 12: " + A12.value + " \r\n " + "Answer 13: " + A13.value + " \r\n " + "Answer 14: " + A14.value + " \r\n " + "Answer 15: " + A15.value + " \r\n " + "Answer 16: " + A16.value + " \r\n " + "Answer 17: " + A17.value + " \r\n " + "Answer 18: " + A18.value + " \r\n " + "Answer 19: " + A19.value + " \r\n " + "Answer 20: " + A20.value + " \r\n " + "Answer 21: " + A21.value + " \r\n " + "Answer 22: " + A22.value + " \r\n " + "Answer 23: " + A23.value + " \r\n " + "Answer 24: " + A24.value + " \r\n " + "Answer 25: " + A25.value + " \r\n " + "Answer 26: " + A26.value;
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