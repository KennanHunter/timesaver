// import urls from "blockedpages.json"

/*
Open a new tab, and load "index.html" into it.
*/
function openMyPage(requestDetails) {
	console.log(urls);
	let url = requestDetails.url;
	browser.tabs.update({
		url: "../page/index.html#" + encodeURIComponent(url),
	});
}

/*
Add openMyPage() as a listener to clicks on the browser action.
*/
browser.webRequest.onBeforeRequest.addListener(openMyPage, {
	urls: ["<all_urls>"],
});
