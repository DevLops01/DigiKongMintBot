console.log(document.getElementById("start-mint"));

document.getElementById("start-mint").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let amount = document.getElementById("mint-amount").value;

    chrome.tabs.sendMessage(
      tabs[0].id,
      { msg: "start", amount: amount },
      function (response) {
        console.log(response.msg);
      }
    );
  });
});
