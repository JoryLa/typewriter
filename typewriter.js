const sentence = 'hello there from lighthouse labs\n';

let numOfSeconds = 500;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, numOfSeconds);
  numOfSeconds += 500;
} 