async function showFact() {
  const numberInput = document.getElementById("numberInput").value;
  const response = await fetch("facts.json");
  const facts = await response.json();
  let fact;

  if (numberInput % 2 === 0) {
    // Input is even, pick a random fact from 10 to 19
    const evenIndex = Math.floor(Math.random() * 10) + 10;
    fact = facts[evenIndex];
  } else {
    // Input is odd, pick a random fact from 0 to 9
    const oddIndex = Math.floor(Math.random() * 10);
    fact = facts[oddIndex];
  }

  document.getElementById("factText").innerText = fact.fact;
  document.getElementById("factImage").src = fact.image;
  document.getElementById("factContainer").style.display = "block";
}
