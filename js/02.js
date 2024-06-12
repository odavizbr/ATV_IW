function cre() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    const scnt = nums([num1, num2]);

    document.getElementById('rest').innerHTML = `Em ordem crescente: ${scnt[0]} e ${scnt[1]}`;
}

function nums(array) {
    array.sort((a, b) => a - b);
    return array;
}
