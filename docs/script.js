const IntroductionButton = document.getElementById('IntroductionButton');
const CommandsListButton = document.getElementById('CommandsListButton');
const ExtensionsButton = document.getElementById('ExtensionsButton');
const ErrorGuideButton = document.getElementById('ErrorGuideButton');
const AdvancedTopicsButton = document.getElementById('AdvancedTopicsButton');
const ChangeLogButton = document.getElementById('ChangeLogButton');
const ExamplesButton = document.getElementById('ExamplesButton');

IntroductionButton.addEventListener('click', function() {
    window.location.href = "introduction.html";
});

CommandsListButton.addEventListener('click', function() {
    window.location.href = "commandslist.html";
});

ExtensionsButton.addEventListener('click', function() {
    window.location.href = "extensions.html";
});

ErrorGuideButton.addEventListener('click', function() {
    window.location.href = "errorguide.html"
})

AdvancedTopicsButton.addEventListener('click', function() {
    window.location.href = "advancedtopics.html";
});

ChangeLogButton.addEventListener('click', function() {
    window.location.href = "changelog.html";
});

ExamplesButton.addEventListener('click', function() {
    window.location.href = "exampleprograms.html";
});