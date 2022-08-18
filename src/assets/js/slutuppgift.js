addEventListener("DOMContentLoaded", init);
//updatedMessages();

function init() {
  loadMessages();
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
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer N31fRWVMZCtwU0JeZnBQdVBjTmlOImRzcTAxfl08cz1xR2lyWGFJfmo5JC5RNSc=",
      },
    }
  );

  const response = await request.json();

  console.log({
    request,
    response,
  });
}

async function updatedMessages() {
  const token =
    "N31fRWVMZCtwU0JeZnBQdVBjTmlOImRzcTAxfl08cz1xR2lyWGFJfmo5JC5RNSc=";
  const request = await fetch(
    "https://ha-slutuppgift-chat-do.westling.workers.dev/api/messages/updated",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "N31fRWVMZCtwU0JeZnBQdVBjTmlOImRzcTAxfl08cz1xR2lyWGFJfmo5JC5RNSc=",
      },
    }
  );

  const response = await request.json();

  console.log({
    request,
    response,
  });
}
