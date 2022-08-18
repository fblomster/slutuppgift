//addEventListener("DOMContentLoaded", init);
//updatedMessages();
init();

function init() {
  loadMessages();
  const form = document.querySelector('form[name="message-form"]');
  form.addEventListener("submit", (event) => {
    console.log(event);
    event.preventDefault();
  });

  //addEventListener("DOMContentLoaded", ...);
}

/*const data = JSON.stringify({
  success: true,
  messages: {
    id: 1,
    user: 1,
    message: 1,
    timestamp: 1,
  },
  last: 1,
});*/

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
      //data,
    }
  );

  const response = await request.json();

  console.log({
    request,
    response,
  });

  response.messages.forEach((item) => {
    console.log(messageTemplate(item));
  });

  const fragment = new DocumentFragment();
  const container = document.querySelector(".chat-card");

  response.messages.forEach((item) => {
    const article = document.createElement("article");

    //article.classList.add("portfolio-card");
    //article.classList.add("portfolio-projects-item");
    article.classList.add("chat-card");
    article.innerHTML = messageTemplate(item);

    fragment.appendChild(article);
  });

  container.appendChild(fragment);
}

function messageTemplate({ user, message }) {
  return `
      <header>
        <h3>${user}</h3>
      </header>
      <p>${message}</p>
    `;
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
