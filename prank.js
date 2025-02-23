let messageIndex = 0;

document.getElementById("prankButton").addEventListener("click", function() {
    let messages = [
            "Can you not read?",
            "Did you really just click that?",
            "Attention everyone: We got a genius here!",
            "Bro, your IQ just dropped like 20 points.",
            "That's if you had any to begin with.",
            "Error 404: Common sense not found.",
            "I bet you also microwave ice cream.",
            "STOP. Just stop. Go touch grass.",
            "Be for real, you’re not that dumb.",
            "I take that back, you are.",
            "Looking for signs of brain cells...",
            "...still looking.",
            "Imagine failing an IQ test with one question.",
            "You’re the reason we have warning labels.",
            "Allow it man, just allow it.",
            "I’m sorry, I can’t help you.",
            "I’m not mad, just disappointed.",
            "You’re a special kind of stupid.",
            "I’m not saying you’re dumb...",
            "but it seems your brain's existence is..."
    ];
    
    let prankMessage = document.getElementById("prankMessage");
    prankMessage.innerText = messages[messageIndex];
    prankMessage.style.display = "block";

    messageIndex++;

    let flash = setInterval(() => {
        prankMessage.style.visibility = (prankMessage.style.visibility === "hidden") ? "visible" : "hidden";
    }, 200);
    
    setTimeout(() => {
        clearInterval(flash);
        prankMessage.style.visibility = "visible";
    }, 3000);
});