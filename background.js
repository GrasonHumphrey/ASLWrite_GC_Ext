//Setting up the function to open the new tab
function translate(info,tab)
{
  const { menuItemId } = info

  if (menuItemId === 'anyNameWillDo'){
	  // Translate action happens here
    chrome.tabs.create({url: "index.html?msg=" + info.selectionText.trim()});
	//chrome.tabs.create({url: "index.html"});
	
	}
};

//create context menu options.  the 'on click' command is no longer valid in manifest version 3

chrome.runtime.onInstalled.addListener(() => {
	  chrome.contextMenus.create({
	  title: "ASLWrite Translate",
	  id: "anyNameWillDo",
	  contexts: ["selection"]
	});
});

//This tells the context menu what function to run when the option is selected

chrome.contextMenus.onClicked.addListener(translate);

/*
function getTabId() { ... }

chrome.scripting
    .executeScript({
      target : {tabId : getTabId()},
      files : [ "script.js" ],
    })
    .then(() => console.log("script injected"));
	*/