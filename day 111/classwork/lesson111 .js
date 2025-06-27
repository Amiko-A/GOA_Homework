let greeting = (name = "Amiko") => {

  const Name = name.trim() === "" ? "Amiko" : name;
  return `Hello, ${Name}!`;
};
