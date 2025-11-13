//define strings in en and de
const translations = {
  en: {
    title: "Games - Made in Javascript",
    settings: "Settings",
    RPS: "RPS",
    leaderboard: "Leaderboard",
  },
  de: {
    title: "Spiele - Erstellt in Javascript",
    settings: "Einstellungen",
    RPS: "SSP",
    leaderboard: "Rangliste",
  },
};

//define current active language
let currentLang = "en";

//define which html part will be targeted
const titleString = document.getElementById("title");
const settingsString = document.getElementById("settings");
const rpsString = document.getElementById("RPS");
const leaderboardString = document.getElementById("leaderbaord");

//define which button the funciton will listen to
const langBtn = document.querySelector(".language");

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "de" : "en";

  if (currentLang === "de") {
    console.log("Language: Deutsch");
    addMessage("Language: Deutsch"); //LIVECONSOLE TEST
  } else {
    addMessage("Language: English");
    console.log("Language: English");
  }

  titleString.textContent = translations[currentLang].title;
  settingsString.textContent = translations[currentLang].settings;
  rpsString.textContent = translations[currentLang].RPS;
  leaderboardString.textContent = translations[currentLang].leaderboard;
});
