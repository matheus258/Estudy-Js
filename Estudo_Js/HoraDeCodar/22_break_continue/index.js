for (let x = 0; x < 10; x++) {
  console.log(x);

  if (x === 5) {
    console.log("BREAK");
    break;
  }
}

let y = 0;

while (y < 200) {
  y += 20;

  if (y === 80 || y === 140) {
    console.log("CONTINUE");
    continue;
  }
  console.log(`Value the code: ${y}`);
}
