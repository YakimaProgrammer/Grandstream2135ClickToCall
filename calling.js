const PROTOCOL = "http";
const IP = "192.168.1.153";
const START_CALL = "/cgi-bin/api-make_call";
const USERNAME = "admin";
const PASSWORDS = ["Admin", "admin"];

//Build the request url based on the constants above.
const URL = PROTOCOL + "://" + IP + START_CALL;

async function callNumber(number) {
	for (var password of PASSWORDS) {
        
        //Do I need to use URLSearchParams?
        //No.
        //But it makes everything easier to read.
        var params = new URLSearchParams()
        
        params.add("phonenumber", number);
        params.add("account", USERNAME);
        params.add("password", password);
	    
        //Now for the moment we've all been waiting for! Send off the request!
		var resp = await fetch(URL + "?" + params.toString(), {
			method: "GET",  
			credentials: 'include', 
			mode: 'no-cors'
		});
		
		if (resp.status === 200) {
			break;
		}
	}
}

//Listen for when the user clicks on a telephone number link
chrome.runtime.onMessage.addListener(msg => callNumber(msg.number));