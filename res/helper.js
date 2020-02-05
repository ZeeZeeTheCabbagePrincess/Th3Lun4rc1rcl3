function test() {
    var request = new XMLHttpRequest();

    request.open("GET", "https://deckofcardsapi.com/api/deck/new/draw/?count=1");

    request.onload = function(){
        var data = JSON.parse(this.response);

        var image = data.cards[0].image;

        var imgElement = document.createElement("img");
        imgElement.setAttribute("src", image);

        document.getElementById("card").appendChild(imgElement);
    }

    request.send();
}