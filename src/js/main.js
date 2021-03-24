import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
	render() {
		return <div>hellooooooooooooopookawkpodkdjqwdkjfeqlk</div>;
	}
}
// Message Listener function
// tabs.onUpdated.addListener((request, sender, response) => {
// 	console.log('vhjjggvgjkkjkjlgufjkk');
// });
chrome.runtime.onMessage.addListener((request, sender, response) => {
	// If message is injectApp
	if (request.dark) {
		darken();
		console.log('dark true');
	}
	// if (request.checked)
	// 	if (document.location.hostname == 'www.facebook.com') document.location.href = 'https://esteghfaro.web.app';
	if (request.injectApp) {
		// Inject our app to DOM and send response
		injectApp();
		response({
			startedExtension: true
		});
	}
});

function darken() {
	console.log('darken!');
	document.querySelectorAll('*')[0].style.filter = 'invert(1) hue-rotate(180deg)';
}

function injectApp() {
	console.log('main host: ', document.location.hostname);
	const newDiv = document.createElement('div');
	newDiv.setAttribute('id', 'chromeExtensionReactApp');
	document.body.appendChild(newDiv);
	document.body.innerHTML += 'asdsadasdwqeqwewqfas';
	document.body.style.filter = 'invert(1);background:white;';
	ReactDOM.render(<App />, newDiv);
}

window.onload = () => {
	let check = false;
	chrome.storage.sync.get([ 'check' ], function(items) {
		if (items.check != undefined) {
			// document.getElementById('toggle').checked = items.check;
			check = items.check;
			if (check && document.location.hostname == 'www.facebook.com') {
				document.location.href = 'https://esteghfaro.web.app';
			}
		}
	});
	// document.getElementById('toggle').addEventListener('click', (event) => {
	// 	check = event.target.checked;
	// 	chrome.storage.sync.set({ check: check });
	// });
};
