chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
  console.log(response.farewell);
});

const mintButton = document.querySelectorAll("button");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );

  if (request.msg === "start") {
    if (!request.amount || request.amount <= 0) return;

    let i = 0;

    while (i < request.amount) {
      mintButton[3].click();

      function delay(time) {
        return new Promise(function (resolve) {
          setTimeout(resolve, time);
        });
      }
      delay(1000);

      i++;
    }

    sendResponse({ msg: "done" });
  }
});
