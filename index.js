let cursor = document.querySelector(".cursor");
    zero = document.querySelector(".zero");
    one = document.querySelector(".one");
    two = document.querySelector(".two");
    three = document.querySelector(".three");
    four = document.querySelector(".four");
    five = document.querySelector(".five");
    six = document.querySelector(".six");
    seven = document.querySelector(".seven");
    eight = document.querySelector(".eight");
    nine = document.querySelector(".nine");
    cancel = document.querySelector(".cancel");
    del = document.querySelector("#delete");
    

let counter = 0;
cursor.innerText = counter;

let Add0 = () => cursor.innerText = counter = 0
    Add1 = () => cursor.innerText = ++counter
    Add2 = () => cursor.innerText = counter += 2
    Add3 = () => cursor.innerText = counter += 3
    Add4 = () => cursor.innerText = counter += 4
    Add5 = () => cursor.innerText = counter += 5
    Add6 = () => cursor.innerText = counter += 6
    Add7 = () => cursor.innerText = counter += 7
    Add8 = () => cursor.innerText = counter += 8
    Add9 = () => cursor.innerText = counter += 9
    Reset = () => cursor.innerText = counter *= 0
    Delete = () => {
        let a = cursor.innerText = counter %= 10
        let b = cursor.innerText -= a
        return b
        //don't work
    }
    



zero.addEventListener("click", Add0);
one.addEventListener("click", Add1);
two.addEventListener("click", Add2);
three.addEventListener("click", Add3);
four.addEventListener("click", Add4);
five.addEventListener("click", Add5);
six.addEventListener("click", Add6);
seven.addEventListener("click", Add7);
eight.addEventListener("click", Add8);
nine.addEventListener("click", Add9);
cancel.addEventListener("click", Reset);
del.addEventListener("click", Delete);
