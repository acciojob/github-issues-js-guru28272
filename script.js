//your code here
let url = `https://api.github.com/repositories/1296269/issues?page=$%7BpageNumberHere%7D&per_page=5`;
const pgNum = document.querySelector(`#pgNum`);
const display = document.querySelector(`#display`);
const nxt = document.querySelector(`#load_next`);
const prev = document.querySelector(`#load_prev`);

pgNum.innerHTML = 1;
fetchData(1).then((res) => {
  // console.log(res);
  display.innerHTML = `<ol>
  <li><h4>Id : ${res[0].id}</h4></li>
  <li><h4>Draft : ${res[1].draft}</h4></li>
  <li><h4>UserLogin : ${res[1].user.login}</h4></li>
  <li><h4>UserId : ${res[1].user.id}</h4></li>
  <li><p><h4>Body : </h4>${res[3].body}</p></li>
</ol>`;
});

// -----nxt
async function next() {
  let value = pgNum.innerHTML;

  value++;

  pgNum.innerHTML = value;

  let res = await fetchData(value);
  // console.log(res);
  display.innerHTML = `<ol>
  <li><h4>Id : ${res[0].id}</h4></li>
  <li><h4>Draft : ${res[1].draft}</h4></li>
  <li><h4>UserLogin : ${res[1].user.login}</h4></li>
  <li><h4>UserId : ${res[1].user.id}</h4></li>
  <li><p><h4>Body : </h4>${res[3].body}</p></li>
</ol>`;
}

// ----prev
async function previous() {
  let value = pgNum.innerHTML;
  if (value == 1) {
    let res = await fetchData(value);
    display.innerHTML = `<ol>
  <li><h4>Id : ${res[0].id}</h4></li>
  <li><h4>Draft : ${res[1].draft}</h4></li>
  <li><h4>UserLogin : ${res[1].user.login}</h4></li>
  <li><h4>UserId : ${res[1].user.id}</h4></li>
  <li><p><h4>Body : </h4>${res[3].body}</p></li>
</ol>`;
  } else {
    value--;
  }

  pgNum.innerHTML = value;

  let res = await fetchData(value);
  display.innerHTML = `<ol>
  <li><h4>Id : ${res[0].id}</h4></li>
  <li><h4>Draft : ${res[1].draft}</h4></li>
  <li><h4>UserLogin : ${res[1].user.login}</h4></li>
  <li><h4>UserId : ${res[1].user.id}</h4></li>
  <li><p><h4>Body : </h4>${res[3].body}</p></li>
</ol>`;
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
