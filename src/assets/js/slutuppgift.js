//addEventListener("DOMContentLoaded", init);
//updatedMessages();
init();

function init() {
  loadMessages();
  //appendMessages();
  //updateMessages();
  //setTimeout(updateMessages, 2000);
  /*const form = document.querySelector('form[name="message-form"]');
  form.addEventListener("submit", (event) => {
    console.log(event);
    event.preventDefault();
  });*/

  //addEventListener("DOMContentLoaded", ...);
}

let last_id = 0;

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

  /*response.last.forEach((item) => {
    console.log(renderLast(item));
  });*/

  console.log(response.last);
  last_id = response.last;
  updateMessages(last_id);

  response.messages.reverse().forEach((item) => {
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
  });

  response.messages.forEach((item) => {
    const article = document.createElement("article");

    article.classList.add("sidebar-item");
    article.innerHTML = nameTemplate(item);

    fragment.appendChild(article);
  });*/

  container.appendChild(fragment);
  //name.appendChild(fragment);
}

function messageTemplate({ user, message, timestamp }) {
  return `
      <header>
        <h3>${user}</h3>
      </header>
      <p>${message}${timestamp}</p>
    `;
}

function nameTemplate({ user }) {
  return `
        <article><p>${user}</p></article>
      `;
}

function renderLast({ last }) {
  //const test = await loadMessages();
  //console.log(last);
  return `
        <article><p>${last}</p></article>
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

  //console.log(last);
  console.log(response.updated);
  if (response.updated == false) {
    console.log("No new messages!");
    //const myTimeout = setTimeout(loadMessages, 2000);
    //clearTimeout(myTimeout);
  } else {
    console.log("Messages updated");
    setTimeout(updateMessages, 20000);
    location.reload();
  }
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
