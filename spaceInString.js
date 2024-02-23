const removeSpace = (text) => {
  const words = text.split(" ");
  return words.join("");
};

const message = "hello good morning. Have a nice day.";
console.log(removeSpace(message));
