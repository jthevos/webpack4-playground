const name = 'JA';

console.log('webpack testing');

console.log('This should throw tons of warnings, but no errors.');

if (1 == 0) {
  console.log('this should be fine bc `eqeqeq` is set to off');
}

// console.log("this will error out because I'm using double quotes");
console.log('this wont error out because Im using single quotes');

// console.log('no semi colon')

// console.log("Hello ${name}! ", "- this should throw an error");
console.log(`Hello ${name}! `, '- this should throw an error');
