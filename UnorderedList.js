//Create Unordered List <ul>
let myUlList = document.createElement("ul");

//Append The Unordered List <ul> To The Header
header.appendChild(myUlList);

//Styling The Unordered List <ul>
myUlList.style.cssText = "width: 200px; display: flex; justify-content: space-between;";

//Create The Lists <li><a href="#">[text]</a></li>
function myList(text, theLink){
    let anchor = document.createElement("a");
    let li = document.createElement("li");
    anchor.setAttribute("href", theLink);
    anchor.textContent = text;
    li.appendChild(anchor);
    //Styling The Anchor <a href="">
    anchor.style.cssText = "font-size: 12px; color: #7e7e7e; text-decoration: none;";
    //Styling The List <li>
    li.style.listStyle = "none";
    return li;
}

function appendChildren (parent, children){
    children.forEach((child) => {
        parent.appendChild(child);
    });
}
let items = [
    myList("Home", "#"),
    myList("About", "#"),
    myList("Service", "#"),
    myList("Contact", "#")
]

// Append The <li> To The <ul>
appendChildren(myUlList, items);