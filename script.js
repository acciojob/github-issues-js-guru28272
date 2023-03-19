//your code here
let url = `https://api.github.com/repositories/1296269/issues?page=$%7BpageNumberHere%7D&per_page=5`;
const pgNum = document.querySelector(`#pgNum`);
const display = document.querySelector(`#display`);
const nxt = document.querySelector(`#nxt`);
const prev = document.querySelector(`#prev`);

pgNum.innerHTML = 1;
fetchData(1).then((res) => {
  // console.log(res);
  display.innerHTML = `<h4>Id : ${res[0].id}</h4><h4>Draft : ${res[1].draft}</h4><h4>UserLogin : ${res[1].user.login}</h4><h4>UserId : ${res[1].user.id}</h4><p><h4>Body : </h4>${res[3].body}</p>`;
});

// -----nxt
async function next() {
  let value = pgNum.innerHTML;

  value++;

  pgNum.innerHTML = value;

  let res = await fetchData(value);
  // console.log(res);
  display.innerHTML = `<h4>Id : ${res[0].id}</h4><h4>Draft : ${res[1].draft}</h4><h4>UserLogin : ${res[1].user.login}</h4><h4>UserId : ${res[1].user.id}</h4><p><h4>Body : </h4>${res[3].body}</p>`;
}

// ----prev
async function previous() {
  let value = pgNum.innerHTML;
  if (value == 1) {
    let res = await fetchData(value);
    display.innerHTML = `<h4>Id : ${res[0].id}</h4><h4>Draft : ${res[1].draft}</h4><h4>UserLogin : ${res[1].user.login}</h4><h4>UserId : ${res[1].user.id}</h4><p><h4>Body : </h4>${res[3].body}</p>`;
  } else {
    value--;
  }

  pgNum.innerHTML = value;

  let res = await fetchData(value);
  display.innerHTML = `<h4>Id : ${res[0].id}</h4><h4>Draft : ${res[1].draft}</h4><h4>UserLogin : ${res[1].user.login}</h4><h4>UserId : ${res[1].user.id}</h4><p><h4>Body : </h4>${res[3].body}</p>`;
}

async function fetchData(value) {
  let res = await fetch(
    `https://api.github.com/repositories/1296269/issues?page=${value}&per_page=5`
  );
  let data = await res.json();

  return data;
}

nxt.addEventListener(`click`, next);
prev.addEventListener(`click`, previous);
