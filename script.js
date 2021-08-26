function updateAnchors() {
    for(var anchor of document.getElementsByTagName("a")) {
        //Is this a phone number?
        if (anchor.href.startsWith("tel:")) {
            //First, extract the phone number part
            let tel = anchor.href.split(":").pop();
            
            //Then set the href to '#' so the webbrowser won't try to open the link on click
            anchor.href = "#";
            
            //Then pass the number off to the extension's background script
            //This allows me to access http:// sites from https://
            anchor.addEventListener("click", () => chrome.runtime.sendMessage({number: tel}));
        }
    }
}

//Check the page to see if there are any links I can update
window.addEventListener("load", updateAnchors);

//Now, watch for DOM changes in the future and respond by rechecking for unupdated anchors
const observer = new MutationObserver(updateAnchors);
window.addEventListener("load", () => observer.observe(
    document.body,
    { /* attributes: true, */ childList: true, subtree: true }
));