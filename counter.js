function myFunction(val) {
    var count = parseInt(document.getElementById("counter").value);

    if (val == "decrement") {
        if (count <= 0) {
            alert("Counter can not be in negative");
        } else count = count - 1;
        document.getElementById("counter").value = count;
    } else if (val == "increment") {
        count = count + 1;
        document.getElementById("counter").value = count;
    } else {
        document.getElementById("counter").value = 0;
    }
}