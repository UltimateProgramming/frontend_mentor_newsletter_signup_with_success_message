function applyErrorWhenWrongEmailPattern(element) {
  let text = element.value;
  const regex = new RegExp(
    /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/
  );
  console.log(regex.test(regex));
  if (regex.test(text)) {
    element.classList.remove("error");
    document.getElementById("subscribe").removeAttribute("disabled");
    return;
  }
  element.classList.add("error");
  document.getElementById("subscribe").setAttribute("disabled", "");
}
