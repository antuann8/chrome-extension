const helpButton = document.querySelector(".help-page");
if (helpButton) {
  helpButton.addEventListener("click", (e) => {
    const url = chrome.runtime.getURL("/html/hello.html");
    chrome.tabs.create({ url });
    window.close();
  });
}

const clockCheckbox = document.querySelector(".clock-ckeckbox");

chrome.storage.sync.get(["showPlugin"], (result) => {
  clockCheckbox.checked = result.showPlugin;
  if (result.showPlugin) {
    chrome.action.setBadgeText({ text: "ON" });
  }
});

if (clockCheckbox) {
  clockCheckbox.addEventListener("click", async (e) => {
    const checked = e.target.checked;
    console.log(checked);
    chrome.action.setBadgeText({ text: checked ? "ON" : "" });
    //chrome.alarms.create({delayInMinutes: minutes});
    chrome.storage.sync.set({ showPlugin: checked });
  });
}
