document.addEventListener("DOMContentLoaded", function () {
    let btn = document.createElement("button");
    btn.id = "btnSing";
    let btnText = document.createTextNode("Sing!");
    btn.appendChild(btnText);
    document.body.appendChild(btn);

    btn.addEventListener("click", function () {
        sing();
    });


});

function sing() {

    let friends = ["Britain", "Ryan", "Keith", "Doug", "Jason"];

    for (let friend of friends) {
        let friendDiv = document.createElement("div");
        friendDiv.className = "friend";
        let friendTitle = document.createElement("h3");
        let friendName = document.createTextNode(friend.toUpperCase());
        friendTitle.appendChild(friendName);
        friendDiv.appendChild(friendTitle);
        document.body.appendChild(friendDiv); 
        console.log(friend.toUpperCase() + ":");
        for (let i = 99; i > 0; i--) {
            //console.log(i + " lines of code in the file, " + i + " lines of code; " + friend + " strikes one out, clears it all out, " + (i - 1) + " lines of code in the file");
            let lyricP = document.createElement("p");
            let lyricLine = document.createTextNode(i + " lines of code in the file, " + i + " lines of code; " + friend + " strikes one out, clears it all out, " + (i - 1) + " lines of code in the file")
            lyricP.appendChild(lyricLine);
            friendDiv.appendChild(lyricP);

        }
    }

}

