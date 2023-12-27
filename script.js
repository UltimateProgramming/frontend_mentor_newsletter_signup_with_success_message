let emailAddress = "test";

function applyErrorWhenWrongEmailPattern(element) {
  let text = element.value;
  const regex = new RegExp(
    /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/
  );
  if (regex.test(text)) {
    element.classList.remove("error");
    document.getElementById("subscribe").removeAttribute("disabled");
    return;
  }
  element.classList.add("error");
  document.getElementById("subscribe").setAttribute("disabled", "");
}

function onSubscribeClick() {
  emailAddress = document.getElementById("email").value;
  let successCard = document.getElementsByClassName("success-card")[0];
  successCard.style.display = "grid";
  let text = successCard.getElementsByTagName("p")[0];
  text.innerText = text.innerText.replace("{email}", emailAddress);
  document.getElementsByClassName("card")[0].remove();
}
