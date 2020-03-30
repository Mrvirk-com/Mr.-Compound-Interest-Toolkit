exponentsCalculator();

userInputForm.oninput = function(event) {
  event.preventDefault();
  exponentsCalculator();
};

function exponentsCalculator() {
  const form = document.forms.userInputForm;
  let n = form.elements.n.value; //exponent
  let x = form.elements.x.value; //base
  let e = Math.pow(x, n);
  form.elements.e.value = e;
}