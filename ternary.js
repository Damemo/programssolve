function checkEligibleAgeforVoting() {
    let age = document.getElementById("age").value;
    let eligible = (age < 18) ? "Not eligible":"Eligible enough";
    document.getElementById("vote").innerHTML = eligible + " to vote.";
  }