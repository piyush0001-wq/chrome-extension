chrome.commands.onCommand.addListener((command) => {
  switch (command) {
    case "open-youtube":
      openYouTube();
      break;
    case "open-github":
      openGithub();
      break;
    default: alert(`invalid ${command} command`)
  }
})

function openYouTube() {
  const query = { active: true, currentWindow: true }
  chrome.tabs.query(query, (tabs) => {
    chrome.tabs.create({ url: "https://www.youtube.com/", active: true })
  })
}

function openGithub() {
  const query = { active: true, currentWindow: true }
  chrome.tabs.query(query, (tabs) => {
    chrome.tabs.create({ url: "https://github.com/piyush0001-wq", active: true })
  })
}