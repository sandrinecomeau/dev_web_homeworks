var suggestions = ["black", "silver", "gray", "white", "maroon", "red", "purple", "fuchsia", "green", "lime",
    "olive", "yellow", "navy", "blue", "teal", "aqua", "aquamarine", "blueviolet", "crimson", "deeppink", "hotpink", "orange"];

function showSuggestions(str) {
    var filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(str.toLowerCase()));
    var suggestionsHTML = "";

    for (var i = 0; i < filteredSuggestions.length; i++) {
        suggestionsHTML += `<div class="choice" onclick="selectSuggestion(this)">${filteredSuggestions[i]}</div>`;
    }

    document.getElementById("suggestions").innerHTML = suggestionsHTML;
    if (filteredSuggestions.length == 0) {
        document.getElementById("suggestions").innerHTML = `<div class="NoResults"> No Matching Results</div>`;
    }

    document.getElementById("suggestions").style.display = "block";
}

function selectSuggestion(selection){
    document.getElementById('dropbtn').textContent = selection.textContent;
    document.getElementById('input').value = null;
    document.getElementById("suggestions").innerHTML = null;
    document.getElementById("dropdown").style.display = "none";

}

function changeColor(){
    let inputText = document.getElementById('dropbtn')
    var h1Elements = document.getElementsByTagName("h1");

    for(var i = 0; i < h1Elements.length; i++) {
        h1Elements[i].style.color = inputText.textContent;
    }
    if (inputText.textContent === "white")  {
        document.body.style.backgroundColor = "black";
    }else{
        document.body.style.backgroundColor = "white";
    }
}

function resetSuggestions(){
    var suggestionsHTML = "";

    for (var i = 0; i < suggestions.length; i++) {
        suggestionsHTML += `<div class="choice" onclick="selectSuggestion(this)">${suggestions[i]}</div>`;
    }
    document.getElementById("suggestions").innerHTML = suggestionsHTML;
    document.getElementById("suggestions").style.display = "block";
}


function buttonClick(){
    if (document.getElementById("dropdown").style.display === "none"){
        document.getElementById("dropdown").style.display = "inline-block";
    }else {
        document.getElementById("dropdown").style.display = "none";
    }

    var suggestionsHTML = "";

    for (var i = 0; i < suggestions.length; i++) {
        suggestionsHTML += `<div class="choice" onclick="selectSuggestion(this)">${suggestions[i]}</div>`;
    }
    document.getElementById("suggestions").innerHTML = suggestionsHTML;


}