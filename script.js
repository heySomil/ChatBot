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

        // Auto-scroll to the bottom
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

function handleChatLogic(userInput) {
    var chatBody = document.getElementById('chatBody');
    var response = getResponse(userInput);

    // Append the chatbot's response to the chat body
    chatBody.innerHTML += '<img src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"></img>' + 'SciAstra Bot: ' + response;

    // Auto-scroll to the bottom
    chatBody.scrollTop = chatBody.scrollHeight;
}

function getResponse(userInput) {
    // Simple switch statement for responses
    switch (userInput.toLowerCase()) {
        case "hello":
        case "hi":
            return "Hi there! How can I assist you?";
        case "services":
            return "SciAstra provides a range of services, including...";
        case "courses":
            return "SciAstra offers various courses, such as...";
        case "team":
            return "SciAstra's team consists of experts in...";
        case "contact":
            return "You can contact SciAstra at contact@sciastra.com.";
        case "selections":
            return "SciAstra has an impressive track record of selections...";
        case "merchandise":
            return "SciAstra currently does offer merchandise for sale.";
        case "recognition":
            return "SciAstra is recognized in...";
        case "jee and neet":
            return "Yes, SciAstra provides coaching for JEE and NEET exams.";
        case "app":
            return "Yes, SciAstra has a dedicated mobile app for a better learning experience.";
        case "students":
            return "SciAstra has taught a significant number of students...";
        case "selected":
            return "Many students have been successfully selected through SciAstra.";
        case "recorded classes":
            return "Yes, SciAstra provides recorded classes for flexible learning.";
        default:
            return "I'm sorry, I didn't understand that. Please ask another question.";
    }
}

