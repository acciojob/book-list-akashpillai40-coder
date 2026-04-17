//your JS code here. If required.
const submitBtn = document.getElementById("submit");
const bookList = document.getElementById("book-list");

submitBtn.addEventListener("click", function(e){
	e.preventDefault();
	//fetching user input from form to table

	const title = document.getElementById("title").value;
	const author = document.getElementById("author").value;
	const isbn = document.getElementById("isbn").value;
	
	//create later if fields are empty on form
	const tr = document.createElement("tr");



tr.innerHTML = `
<td>${title}</td>;
<td>${author}</td>
<td>${isbn}</td>
<td>const tr = document.createElement("tr")</td>
`;

 bookList.appendChild(tr)
//clear commands
document.getElementById("title").value="";
document.getElementById("author").value="";
document.getElementById("isbn").value="";

});
// Delete row (event delegation)
bookList.addEventListener("click", function(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
});