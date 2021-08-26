A simple chrome extension that [requires only minimal configuration and tweaking](https://xkcd.com/1742/) and allows for one-click click-to-call for phone numbers. No copy/pasting, right-clicking, or keypad required! This project is based on an extension by [@jabelone](https://github.com/jabelone/grandstreamClickToCall).  
This extension scans the DOM for any clickable phone number links (an <a> tag with an href that starts with "tel:") and sends the phone number to an attached Grandstream phone when you click on that link.
This extension also registers a MutationObserver, so any <a> tags that are added to the page as you interact with it will also be updated.
#### Configuration and Installation
**1. Download**  
Click the green *Code ▼* button up above, choose *Download ZIP*, and extract the files where it's convenient.  
**2. Minimal Configuration and Tweaking**  
Open the extracted folder and open *calling.js* in your favorite text editor. Update line 2 with the IP address of your *Grandstream GXP2135* phone. You can get this address by pushing the up navigation arrow on the phone.  
Next, add the password for the phone's admin account to the array on line 5. For example, ["admin", "Admin"] => ["notadmin", "admin", "Admin"]. These passwords will be tried in a left to right order.  
**3. Load the extension**  
Navigate to *chrome://extensions* in Google Chrome. Make sure *Developer Mode* is enabled by activating the toggle in the upper right-hand corner. Click the *Load unpacked* button in the upper left-hand corner and navigate and open the folder you extracted earlier.  
Any open pages with phone numbers can now be refreshed for the extension to take effect.
