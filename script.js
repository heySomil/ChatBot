const sciAstraQuestions = [
    "What services does SciAstra provide?",
    "Tell me about SciAstra's team.",
    "How can I contact SciAstra?",
    // ... add more questions
];

function toggleChatbot() {
    var chatbot = document.querySelector('.chatbot');
    chatbot.classList.toggle('open');
}

function sendMessage(event) {
    if (event.key === 'Enter') {
        var userInput = document.getElementById('userInput').value;
        var chatBody = document.getElementById('chatBody');

        // Append user message to chat body
        chatBody.innerHTML += '<p>User: ' + userInput + '</p>';

        // Call a function to handle the chat logic
        handleChatLogic(userInput);

        // Clear the input field
        document.getElementById('userInput').value = '';
    }
}

function handleChatLogic(userInput) {
    var chatBody = document.getElementById('chatBody');
    var response = getResponse(userInput);

    // Append the chatbot's response to the chat body
    chatBody.innerHTML += '<img src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"></img>' + 'SciAstra Bot: ' + response ;
}

function getResponse(userInput) {
    // Simple switch statement for responses
    switch (userInput.toLowerCase()) {
        case "hello":
        case "hi":
            return "Hi there! How can I assist you?";
        case "services":
            return "SciAstra provides a range of services, including...";
        case "team":
            return "SciAstra's team consists of experts in...";
        case "contact":
            return "You can contact SciAstra at contact@sciastra.com.";
        // Add more cases for other questions
        default:
            return "I'm sorry, I didn't understand that. Please ask another question.";
    }
}
