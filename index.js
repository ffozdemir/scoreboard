let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let home = 0;
let guest = 0;

function addHome1() {
  home += 1;
  homeScore.textContent = home;
}

function addHome2() {
  home += 2;
  homeScore.textContent = home;
}

function addHome3() {
  home += 3;
  homeScore.textContent = home;
}

function addGuest1() {
  guest += 1;
  guestScore.textContent = guest;
}

function addGuest2() {
  guest += 2;
  guestScore.textContent = guest;
}

function addGuest3() {
  guest += 3;
  guestScore.textContent = guest;
}
