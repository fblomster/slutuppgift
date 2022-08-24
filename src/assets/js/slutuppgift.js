//addEventListener("DOMContentLoaded", init);
//updatedMessages();
init();

function init() {
  loadMessages();
  //appendMessages();
  updateMessages();
  setTimeout(updateMessages, 5000);
  /*const form = document.querySelector('form[name="message-form"]');
  form.addEventListener("submit", (event) => {
    console.log(event);
    event.preventDefault();
  });*/

  //addEventListener("DOMContentLoaded", ...);
}

async function loadMessages() {
  //const token =
  // "N31fRWVMZCtwU0JeZnBQdVBjTmlOImRzcTAxfl08cz1xR2lyWGFJfmo5JC5RNSc=";
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

  response.messages.forEach((item) => {
    console.log(messageTemplate(item));
  });

  const fragment = new DocumentFragment();

  const container = document.querySelector(".chat-card");
  const name = document.querySelector(".sidebar-item");

  response.messages.forEach((item) => {
    const article = document.createElement("article");

    article.classList.add("chat-card");
    article.innerHTML = messageTemplate(item);

    fragment.appendChild(article);
  });

  /*response.messages.forEach((item) => {
    const article = document.createElement("article");

    article.classList.add("sidebar-item");
    article.innerHTML = nameTemplate(item);

    fragment.appendChild(article);
  });*/

  container.appendChild(fragment);
  name.appendChild(fragment);
}

function messageTemplate({ user, message }) {
  return `
      <header>
        <h3>${user}</h3>
      </header>
      <p>${message}</p>
    `;
}

function nameTemplate({ user }) {
  return `
        <article><p>${user}</p></article>
      `;
}

async function updateMessages() {
  const request = await fetch(
    "https://ha-slutuppgift-chat-do.westling.workers.dev/api/messages/updated",
    {
      method: "post",
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
  //loadMessages();
}

function appendMessages(message) {
  const form = document.querySelector('form[name="message-form"]');

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const user = "Frida";
    //const form = event.target;
    //const formData = new FormData(form);
    //const message = Object.fromEntries(formData);
    const params = {
      user: user,
      message: message,
    };
    //const url = new URL(form.action);
    const request = await fetch(
      "https://ha-slutuppgift-chat-do.westling.workers.dev/api/messages/append",
      {
        //`${baseurl}${url.pathname}`, {
        method: form.method,
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer N31fRWVMZCtwU0JeZnBQdVBjTmlOImRzcTAxfl08cz1xR2lyWGFJfmo5JC5RNSc=",
        },
        body: JSON.stringify(params),
        /*body: JSON.stringify({
          user: "Frida",
          message,
        }),*/
      }
    );
    const response = await request.text();

    console.log(response);
  });
}
