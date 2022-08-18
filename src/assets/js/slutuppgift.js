addEventListener("DOMContentLoaded", init);

function init() {
  //loadMessages();
  const form = document.querySelector('form[name="message-form"]');
  form.addEventListener("submit", (event) => {
    console.log(event);
    event.preventDefault();
  });
}

async function loadMessages() {
  const token =
    "N31fRWVMZCtwU0JeZnBQdVBjTmlOImRzcTAxfl08cz1xR2lyWGFJfmo5JC5RNSc=";
  const request = await fetch(
    "https://ha-slutuppgift-chat-do.westling.workers.dev/api/messages",
    {
      method: "POST",
      headers: {
        Authorization: "token ${token}",
      },
    }
  );

  const response = await request.json();

  console.log({
    request,
    response,
  });
}
