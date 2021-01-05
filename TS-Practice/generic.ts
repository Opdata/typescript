function print<T>(text: T): T {
  console.log(text);
  return text;
}

print<string>("Hello");

/*  */

function ExamplePrint<T>(text: T): T {
  console.log(text);
  return text;
}

ExamplePrint<string>("aaaaabbbbbbcccc"); // String
ExamplePrint<number>(100); // Number
