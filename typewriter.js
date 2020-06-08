/* eslint-disable */
const sentence = "hello there from lighthouse labs";
// loop over the sentence and print it out animated
for (let i = 0; i < sentence.length; i++) {
  const char = sentence[i];
  setTimeout(() => {
    if (i === sentence.length - 1) {
      process.stdout.write(char + '\n');
    } else return process.stdout.write(char);
  }, i * 50);
}
