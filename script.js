let tg = window.Telegram.WebApp;
tg.expand(); // Fullscreen

const user = tg.initDataUnsafe.user;
document.getElementById("userInfo").innerHTML =
  `<p>Welcome, ${user.first_name}</p>`;

function orderProduct(product) {
  const message = `User ${user.username || user.first_name} ordered: ${product}`;
  fetch(`https://api.telegram.org/bot7569196503:AAE4k8OMdaZEx0w-C7xLQxS66bdinTp1fGQ/sendMessage`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: user.id,
      text: message
    })
  })
  .then(res => res.json())
  .then(data => alert("Order Sent!"))
  .catch(err => alert("Error sending order"));
}