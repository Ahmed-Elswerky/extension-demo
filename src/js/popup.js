window.onload = () => {
	const $startButton = document.querySelector('.start');
	let check = false;
	chrome.storage.sync.get([ 'check' ], function(items) {
		if (items.check != undefined) {
			document.getElementById('toggle').checked = items.check;
			check = items.check;
		}
	});
	// if (document.getElementById('toggle') != undefined) check = document.getElementById('toggle').checked;
	// func(check);
	document.getElementById('toggle').addEventListener('click', (event) => {
		check = event.target.checked;
		chrome.storage.sync.set({ check: check });
	});
	let dark = false;
	document.getElementById('toggle1').addEventListener('click', (event) => {
		dark = event.target.checked;
		chrome.storage.sync.set({ dark: dark });
		chrome.tabs.query(
			{
				active: true,
				currentWindow: true
			},
			(tabs) => {
				// Send message to script file
				chrome.tabs.sendMessage(
					tabs[0].id,
					{ injectApp: true, dark: dark }
					// , (response) => window.close()
				);
			}
		);
	});

	$startButton.onclick = () => {
		// Get active tab
		chrome.tabs.query(
			{
				active: true,
				currentWindow: true
			},
			(tabs) => {
				// Send message to script file
				chrome.tabs.sendMessage(
					tabs[0].id,
					{ injectApp: true, checked: check }
					// , (response) => window.close()
				);
			}
		);
	};
};
