// create close(x) button and attach to each list item
var myList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myList[i].appendChild(span);
}

// display today's date
function getCurrentDate() {
  let date;
  let dateTime;
  date = new Date();
  dateTime = date.toISOString().split("T")[0];
  document.querySelector("#display-present-date").textContent =
    "Date : " + dateTime;
}
getCurrentDate();

// hide the list item when clicking on close button
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// add checked symbol when clicking on a list item and toggle
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (unclick) {
    if (unclick.target.tagName === "LI") {
      unclick.target.classList.toggle("checked");
    }
  },
  false
);

// create a new list item when clicking add button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var typeText = document.createTextNode(inputValue);
  li.appendChild(typeText);
  if (inputValue === "") {
    alert("Please add new task!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  // delete a list item by clicking (x)
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
