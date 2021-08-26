var anchors = document.getElementsByTagName("a");

for(let i = 0; i < anchors.length; i++) {
    if(anchors[i].getAttribute("href").startsWith("tel:")) {
        let tel = anchors[i].getAttribute("href").split(":").pop();
        console.log("Grandstream CTC: Replaced " + tel);
        anchors[i].setAttribute("href", "#");

        anchors[i].addEventListener("click", function () {
            console.log("Grandstream CTC: Calling " + tel);
			chrome.runtime.sendMessage({number: tel});
        });
    }
}