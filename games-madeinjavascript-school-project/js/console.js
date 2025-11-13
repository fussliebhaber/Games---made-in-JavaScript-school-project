const liveConsole = document.getElementById("live-console");

function addMessage(messageText) {
  const messageDiv = document.createElement("div");

  messageDiv.textContent = messageText;

  liveConsole.appendChild(messageDiv);

  messageDiv.scrollIntoView({ behavior: "smooth", block: "end" });
}

//addMessage("Hello world!"); USE WHEN WANTING TO LOG
