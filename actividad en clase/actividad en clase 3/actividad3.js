
const numbers = [];
for (let i = 0; i < 1000; i++) {
  numbers.push(Math.floor(Math.random() * 21));
}

const counts = {};
for (let i = 0; i < numbers.length; i++) {
    if (counts[numbers[i]]) {
        counts[numbers[i]]++;
    } else {
        counts[numbers[i]] = 1;
    }
    }


console.log(counts);

//codigo del profe  


