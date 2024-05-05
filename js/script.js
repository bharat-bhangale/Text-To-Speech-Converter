/**
 * Initializes speech synthesis and sets up event listeners
 */
let speech = new SpeechSynthesisUtterance();

/**
 * List of available voices
 */
let voices = [];

/**
 * Dropdown to select the voice
 */
let voiseSelect = document.querySelector("select");

/**
 * Populates the voice dropdown with available voices
 */
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];  // set the default voice

    voices.forEach((voice, i) => {
        voiseSelect.options[i] = new Option(voice.name, i);  // add options to the dropdown
    });
}

/**
 * Update the selected voice when the dropdown value changes
 */
voiseSelect.addEventListener("change", () => {
    speech.voice = voices[voiseSelect.value];  // set the selected voice
});

/**
 * Triggers speech synthesis when the play button is clicked
 */
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;  // set the text to be spoken
    window.speechSynthesis.speak(speech);  // start speech synthesis
});
