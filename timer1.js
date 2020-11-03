const args = process.argv;
let times = args.slice(2, args.length);

for (const time of times) {
  // make sure the time provided is not negative and a valid number
  if (!(time < 0 || isNaN(time))) {
    setTimeout(() => {
      process.stdout.write("\x07");
      // un comment if you want to see the numbers as they beep
      //process.stdout.write(time);
    }, time * 1000);
  }
}
