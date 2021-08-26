const PROTOCOL = "http";
const IP = "192.168.1.204";
const START_CALL = "/cgi-bin/api-make_call";
const LOGIN = "/cgi-bin/dologin";
const USERNAME = "admin";
const PASSWORDS = ["Admin", "admin"];

async function sha256(message) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);                    

    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string                  
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

async function callNumber(number) {

	
	for (var password of PASSWORDS) {
			//first, login
			/*
			await fetch(PROTOCOL + "://" + IP + LOGIN + "?phonenumber=" + number +
					"&account=" + USERNAME + "&password=" + password, {  
				method: 'POST', // or 'PUT'
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					username: USERNAME,
					password: await sha256(password)
				}),
				credentials: 'include'
			});
		*/
		
		var callUrl = PROTOCOL + "://" + IP + START_CALL + "?phonenumber=" + number +
			"&account=" + USERNAME + "&password=" + password + "&account=0";	
			
		var resp = await fetch(callUrl, {
			method: "GET",  
			credentials: 'include', 
			mode: 'no-cors',
			cookie: "session-role=admin;session-identity=51049240e1629943912;"
		});
		
		if (resp.status === 200) {
			break;
		}
	}
}


chrome.runtime.onMessage.addListener(msg => callNumber(msg.number));