var view = document.getElementById('view');
var non1 = document.getElementById('non1');
var non2 = document.getElementById('non2');
var non3 = document.getElementById('non3');
var hav = 0;
non3.setAttribute('style', 'display:none;');
non2.setAttribute('style', 'display:none;');
non1.setAttribute('style', 'display:none;');

function delall() {
    view.innerText = '';
    non1.innerText = '';
    non2.innerText = '';
    non3.innerText = '';
    hav = 0;
}

function delallif() {

    if (view.innerText.indexOf('N') > -1 || view.innerText.indexOf('n') > -1) {
        delall();
    }
}

function add_number(num) {
    delallif();
    if (hav > 0) {
        hav = 0;
        delall();
    }
    //    if()
    if (view.innerText.length < 15) {
        if (num > 0 || view.innerText.length > 0) {
            view.innerText += num;

            var nshan = 0
            for (var z = 0; z < view.innerText.length; z++) {
                if (view.innerText[z] === '/' || view.innerText[z] === '*' || view.innerText[z] === '+' || view.innerText[z] === '-') {
                    nshan++;
                }
            }
            if (nshan > 0) {
                non1.innerText += num;
            } else {
                non2.innerText += num;
            }
        }
    }
}


function add_zero() {
    if (view.innerText[view.innerText.length - 1] === "/" || view.innerText[view.innerText.length - 1] === "*" || view.innerText[view.innerText.length - 1] === "+" || view.innerText[view.innerText.length - 1] === "-") {
        //          view.innerText+='0.';
    } else {
        add_number(0);
    }
}






function add_dot() {
    delallif();
    var cicle_dot = 0;
    for (var i = 0; i < view.innerText.length; i++) {
        if (view.innerText[i] === '.') {
            cicle_dot++;
        }
    }
    if (cicle_dot < 1) {
        if (view.innerText === '') {
            view.innerText += '0.';
        } else {
            view.innerText += '.';
        }
    }
    var nshan = 0;
    var ket1 = 0;
    var ket2 = 0;
    for (var z = 0; z < view.innerText.length; z++) {
        if (view.innerText[z] === '/' || view.innerText[z] === '*' || view.innerText[z] === '+' || view.innerText[z] === '-') {
            nshan++;
        }
    }

    if (nshan > 0) {
        for (var i = 0; i < non1.innerText.length; i++) {
            ket++;
        }
        if (ket1 < 1) {
            non1.innerText += ".";
        }

    } else {
        for (var i = 0; i < non2.innerText.length; i++) {
            ket2++;
        }
        if (ket2 < 1) {
            non2.innerText += ".";
        }
    }
}

function backspace() {
    if (view.innerText === "NaN" || view.innerText === 'Infinity') {
        dellall();
    } else {
        var view1 = view.innerText.substring(0, view.innerText.length - 1);
        view.innerText = view1;
    }
}

function square() {
    hav++;
    for (var i = 0; i < view.innerText.length; i++) {
        if (view.innerText[view.innerText.length - 1] === '/' || view.innerText[view.innerText.length - 1] === '*' || view.innerText[view.innerText.length - 1] === '+' || view.innerText[view.innerText.length - 1] === '-') {
            view.innerText = view.innerText.substring(0, view.innerText.length - 1);
        }
    }

    if (view.innerText != "") {
        teghadrum("");
        view.innerText = view.innerText * view.innerText;
    }
}


function teghadrum(a) {
    for (var i = 0; i < view.innerText.length; i++) {
        if (view.innerText[i] === '/') {
            view.innerText = parseInt(non2.innerText) / parseInt(non1.innerText);
            non2.innerText = view.innerText;
            delallif();
            view.innerText += a;
            non1.innerText = "";
            delallif();
            break;
        }
        if (view.innerText[i] === '*') {
            view.innerText = parseInt(non1.innerText) * parseInt(non2.innerText);
            non2.innerText = view.innerText;
            delallif();
            view.innerText += a;
            non1.innerText = "";
            delallif();
            break;
        }
        if (view.innerText[i] === '-') {
            view.innerText = parseInt(non2.innerText) - parseInt(non1.innerText);
            non2.innerText = view.innerText;
            delallif();
            view.innerText += a;
            non1.innerText = "";
            delallif();
            break;
        }
        if (view.innerText[i] === '+') {
            view.innerText = parseInt(non1.innerText) + parseInt(non2.innerText);
            non2.innerText = view.innerText;
            delallif();
            view.innerText += a;
            non1.innerText = "";
            delallif();
            break;
        }
    }
}

function equ() {
    hav++;
    non3.innerText = '';
    teghadrum('');
}

function matbaz() {
    delallif();
    var multipl = 0;
    for (var i = 0; i < view.innerText.length; i++) {
        if (view.innerText[i] === '/' || view.innerText[i] === '*' || view.innerText[i] === '+' || view.innerText[i] === '-') {
            if (non1.innerText === '') {
                view.innerText = non2.innerText + "*";
                non3.innerText = "*";
                break;
            }
            multipl++;
            non3.innerText = view.innerText[i];
        }
    }

    if (view.innerText > 0 && multipl < 1) {
        view.innerText += '*';
        non3.innerText += "*"
    } else {
        if (multipl === 1) {
            teghadrum("*");
        }
    }
}

function mathan() {
    delallif();
    var multipl = 0;
    for (var i = 0; i < view.innerText.length; i++) {
        if (view.innerText[i] === '/' || view.innerText[i] === '*' || view.innerText[i] === '+' || view.innerText[i] === '-') {
            if (non1.innerText === '') {
                view.innerText = non2.innerText + "-";
                non3.innerText = "-";
                break;
            }
            multipl++;
            non3.innerText = view.innerText[i];
        }
    }

    if (view.innerText > 0 && multipl < 1) {
        view.innerText += "-";
        non3.innerText += "-"
    } else {
        if (multipl === 1) {
            teghadrum("-");
        }
    }
}


function matgum() {
    delallif();
    var multipl = 0;
    for (var i = 0; i < view.innerText.length; i++) {
        if (view.innerText[i] === '/' || view.innerText[i] === '*' || view.innerText[i] === '+' || view.innerText[i] === '-') {
            if (non1.innerText === '') {
                view.innerText = non2.innerText + "+";
                non3.innerText = "+";
                break;
            }
            multipl++;
            non3.innerText = view.innerText[i];
        }
    }

    if (view.innerText > 0 && multipl < 1) {
        view.innerText += "+";
        non3.innerText += "+"
    } else {
        if (multipl === 1) {
            teghadrum("+");
        }
    }
}

function matbaj() {
    delallif();
    var multipl = 0;
    for (var i = 0; i < view.innerText.length; i++) {
        if (view.innerText[i] === '/' || view.innerText[i] === '*' || view.innerText[i] === '+' || view.innerText[i] === '-') {
            if (non1.innerText === '') {
                view.innerText = non2.innerText + "/";
                non3.innerText = "/";
                break;
            }
            multipl++;
            non3.innerText = view.innerText[i];
        }
    }

    if (view.innerText > 0 && multipl < 1) {
        view.innerText += "/";
        non3.innerText = "/";
    } else {
        if (multipl === 1) {
            teghadrum("/");
        }
    }
}
//
//
//function fact(n) {
//    var z = 1;
//    for (var x = n; x > 0; x--) {
//        z *= x;
//        console.log(z);
//    }
//}     
console.log("ok");
console.log("ok");
console.log("ok");
console.log("ok");
