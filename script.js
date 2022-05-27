let container = document.getElementById("container");

for (i = 1; i <= 100; i++) {

    let box = document.getElementById("container").appendChild(document.createElement("div"));
    box.className = "box";
    box.innerHTML = i;

    if (i % 3 == 0) {
        box.className = "box box2";
        box.innerHTML = "Fizz";
    }

    if (i % 5 == 0 ) {
        box.className = "box box3";
        box.innerHTML = "Buzz";
    }

    if ((i % 3 == 0) && (i % 5 == 0)) {
        box.className = "box box4";
        box.innerHTML = "FizzBuzz";
    }

}