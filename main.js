const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', sendMessage);

messageInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const messageText = messageInput.value.trim();
  if (messageText !== '') {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'sent');
    messageElement.textContent = messageText;
    chatMessages.appendChild(messageElement);
    scrollToBottom();
    messageInput.value = '';
    createBubbles();
  }
}

function scrollToBottom() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function createBubbles() {
  const bubblesContainer = document.createElement('div');
  bubblesContainer.classList.add('bubbles');

  for (let i = 0; i < 9; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubblesContainer.appendChild(bubble);
  }

  document.body.appendChild(bubblesContainer);

  setTimeout(() => {
    bubblesContainer.remove();
  }, 4000);
}
