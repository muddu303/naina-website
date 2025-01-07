document.getElementById("askButton").addEventListener("click", function() {
    document.getElementById("question").classList.add("hidden");
    document.getElementById("animation-container").classList.add("hidden");
    document.getElementById("answer").classList.remove("hidden");

    // Animation effect: Text fade-in
    let questionAsked = document.getElementById("question-asked");
    questionAsked.style.opacity = 0;
    setTimeout(() => {
        questionAsked.style.transition = "opacity 2s";
        questionAsked.style.opacity = 1;
    }, 100);
});

function showResponse(isYes) {
    document.getElementById("response").classList.remove("hidden");
    let responseText = document.getElementById("responseText");

    if (isYes) {
        responseText.innerHTML = "Yay! You made my day! Let's go for a beautiful walk in the park and make some memories together!";
    } else {
        responseText.innerHTML = "That's okay, Naina! I'm glad we had this moment. Maybe another time!";
    }

    // Make the response message appear with a delay
    responseText.style.opacity = 0;
    setTimeout(() => {
        responseText.style.transition = "opacity 2s";
        responseText.style.opacity = 1;
    }, 100);
}
