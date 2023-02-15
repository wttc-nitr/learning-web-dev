const _ths = document.getElementsByTagName("th");
const _tds = document.getElementsByTagName("td");

let Display = document.getElementsByClassName("display");
Display = Display[0];
Display.innerHTML = "0";

function Press() {
  let Key = this.innerHTML;
  if (Key == '=') {
    Display.innerHTML = eval(Display.innerHTML);
  }
  else if (Key == 'C')
    Display.innerHTML = "";
  else {
    Display.innerHTML = Display.innerHTML + Key;
  }
}

for (let i=0; i < _ths.length; i++)
  _ths[i].addEventListener("click", Press);

for (let i=0; i < _tds.length; i++) 
  _tds[i].addEventListener("click", Press);
