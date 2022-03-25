enum Shoes {
  Nike = "nike",
  Adidas = "adidas",
}

const myShoes = Shoes.Nike;
console.log(myShoes); // 0

enum Answer {
  Yes = "Yes",
  No = "No",
}

const getQuestion = (answer: Answer) => {
  if (answer === Answer.Yes) {
    console.log("yes");
  } else if (answer === Answer.No) {
    console.log("no");
  }
};

getQuestion(Answer.Yes);
