let messageIndex = 0;

document.getElementById("prankButton").addEventListener("click", function() {
    let messages = [
            "Can you not read?",
            "Did you really just click that?",
            "Attention everyone: We got a genius here!",
            "Bro, your IQ just dropped like 20 points.",
            "That is if you had any to begin with.",
            "Error 404: Common sense not found.",
            "I bet you also microwave ice cream.",
            "STOP. Just stop. Go touch grass.",
            "I’d explain it to you, but I left my crayons at home.",
            "Looking for brain cells... still loading.",
            "Imagine failing an IQ test with one question.",
            "You’re the reason we have warning labels.",
            "I’m sorry, I can’t help you.",
            "I’m not mad, just disappointed.",
            "You’re a special kind of stupid.",
            "I’m not saying you’re dumb, but...",
            "your brain is defined by what will be displayed next"
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