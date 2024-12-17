document.addEventListener("DOMContentLoaded", function() {
    const sendBtn = document.getElementById("send-btn");
    const messageInput = document.getElementById("message-input");
    const chatBox = document.getElementById("chat-box");

    // Send message function
    sendBtn.addEventListener("click", sendMessage);
    messageInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText !== "") {
            displayMessage(messageText, "sent");
            messageInput.value = ""; // Clear input field

            // Generate a response based on the user's message
            const response = generateResponse(messageText);
            displayMessage(response, "received");
        }
    }

    function displayMessage(text, type) {
        const message = document.createElement("div");
        message.classList.add("message", type);
        message.innerHTML = text;
        chatBox.appendChild(message);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message
    }

    // Generate a meaningful response based on the user's message
    function generateResponse(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();

        if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
            return "Hello! How can I assist you today?";
        } else if (lowerCaseMessage.includes("how are you")) {
            return "I'm doing great, thank you! How about you?";
        } else if (lowerCaseMessage.includes("what is your name")) {
            return "I am your friendly chat assistant!";
        } else if (lowerCaseMessage.includes("bye") || lowerCaseMessage.includes("goodbye")) {
            return "Goodbye! Have a wonderful day!";
        } else if (lowerCaseMessage.includes("weather")) {
            return "I don't have access to weather data right now, but you can check your local forecast.";
        } else if (lowerCaseMessage.includes("time")) {
            const currentTime = new Date().toLocaleTimeString();
            return `The current time is ${currentTime}`;
        } else if (lowerCaseMessage.includes("help")) {
            return "Sure! How can I help you? You can ask about my name, the weather, or just chat!";
        } else {
            return "That's interesting! Tell me more.";
        }
    }
});
