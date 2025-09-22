let string = "";
let memory = 0; // میموری کے لیے ویری ایبل
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerHTML;

    if (value === "=") {
      try {
        string = eval(string).toString();  // expression calculate کرے گا
        document.querySelector("input").value = string;
      } catch {
        document.querySelector("input").value = "Error";
        string = "";
      }
    } 
    else if (value === "C") {
      string = "";  // کلئیر بٹن
      document.querySelector("input").value = string;
    } 
    else if (value === "M+") {
      memory += Number(string) || 0;  // موجودہ نمبر میموری میں add کرے گا
    } 
    else if (value === "M-") {
      memory -= Number(string) || 0;  // موجودہ نمبر میموری میں سے minus کرے گا
    } 
    else if (value === "MC") {
      string = memory.toString();     // میموری والا نمبر واپس input میں ڈالے گا
      document.querySelector("input").value = string;
    } 
    else {
      string += value;   // باقی سب input string میں add ہوگا
      document.querySelector("input").value = string;
    }
  });
});