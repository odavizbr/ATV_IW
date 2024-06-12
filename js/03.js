function ordena() {

    let nums = [];

    for (let i = 0; i < 3; i++) {
        let num = parseFloat(prompt(`Digite o ${i + 1}º número:`));
        
        nums.push(num);
    }

    nums.sort((a, b) => a - b);

    console.log("Array ordenado em ordem crescente:", nums);
}

ordena();
