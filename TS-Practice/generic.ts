function print<T>(text: T): T {
  console.log(text);
  return text;
}

print<string>("Hello");
