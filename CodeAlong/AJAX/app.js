// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener("load", function () {
//   const data = JSON.parse(this.responseText);
//   for (let planet of data.results) {
//     console.log(planet.name);
//   }

//   const nextUrl = data.next;
//   const secondReq = new XMLHttpRequest();
//   secondReq.addEventListener("load", function () {
//     console.log("SUCCESS!!!");
//     const data = JSON.parse(this.responseText);
//     for (let planet of data.results) {
//       console.log(planet.name);
//     }
//   });
//   secondReq.addEventListener("error", function () {
//     console.log("ERROR!!!");
//   });
//   secondReq.open("GET", nextUrl);
//   secondReq.send();
//   console.log("Just sent 2nd request!");
// });
// firstReq.addEventListener("error", () => {
//   console.log("ERROR!!!");
// });
// firstReq.open("GET", "https://swapi.dev/api/planets/");
// firstReq.send();
// console.log("SENDING REQUEST......");

// ********************* //
//         AXIOS         //
// ********************* //

// async function getData() {
//   const response = await axios.get("https://swapi.dev/api/planets/");
//   const { next, results } = response.data;
//   for (let planet of results) {
//     console.log(planet.name);
//   }
//   const response2 = await axios.get(next);
//   const results2 = response2.data.results;
//   for (let planet of results2) {
//     console.log(planet.name);
//   }
// }

// getData();
// console.log("I happen after getData()");

// async function getLaunches() {
//   const res = await axios.get(
//     "https://api.spacexsdata.com/v3/launches/upcoming"
//   );
//   const ul = document.querySelector("#launches");
//   for (let launch of res.data) {
//     const newLI = document.createElement("LI");
//     newLI.innerText = `Mission Name: ${launch.mission_name} Rocket Name: ${launch.rocket.rocket_name}`;
//     ul.append(newLI);
//   }
// }

// function renderLaunces(launches) {
//   const ul = document.querySelector("#launches");
//   for (let launch of res.data) {
//     ul.append(makeLaunchLI(launch));
//   }
// }

// function makeLaunchLI(launch) {
//   const newLI = document.createElement("LI");
//   newLI.innerText = `Mission Name: ${launch.mission_name} Rocket Name: ${launch.rocket.rocket_name}`;
//   return newLI;
// }

// document.querySelector("#get_launches").addEventListener("click", () => {
//   const ul = document.querySelector("#launches");
//   while (ul.hasChildNodes()) {
//     ul.removeChild(ul.firstChild);
//   }
//   getLaunches();
// });

// async function getRandomDog() {
//   const res = await axios.get("https://dog.ceo/api/breeds/image/random");
//   const img = document.querySelector("#dog");
//   img.src = res.data.message;
// }

// async function getDogByBreed(breed) {
//   try {
//     const res = await axios.get(
//       `https://dog.ceo/api/breed/${breed}/images/random`
//     );
//     const img = document.querySelector("#dog");
//     img.src = res.data.message;
//   } catch (e) {
//     alert("BREED NOT FOUND!");
//     getRandomDog();
//   }
// }

// const form = document.querySelector("#searchform");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   let breed = document.querySelector("#search");
//   getDogByBreed(breed.value);
//   breed.value = "";
// });

// async function getJoke(firstName, lastName) {
//   let res = await axios.get(`http://api.icndb.com/jokes/random`, {
//     params: { firstName, lastName },
//   });
//   console.log(res.data.value.joke);
// }

// getJoke("Mark", "Lurton");

// async function getUser() {
//   const res = await axios.get("https://reqres.in/api/users");
//   console.log(res);
// }

// async function createUser() {
//   const res = await axios.post("https://reqres.in/api/users", {
//     username: "ButtersTheChicken",
//     email: "butters@gmail.com",
//     age: 1,
//   });
//   console.log(res);
// }

// createUser();

async function getUsers(token) {
  const res = await axios.get("https://hack-or-snooze-v3.herokuapp.com/users", {
    params: {
      token,
    },
  });
  console.log(res);
}

async function signUp(username, password, name) {
  const res = await axios.post(
    "https://hack-or-snooze-v3.herokuapp.com/signup",

    {
      user: {
        name,
        username,
        password,
      },
    }
  );
  console.log(res);
}

async function login(username, password) {
  const res = await axios.post(
    "https://hack-or-snooze-v3.herokuapp.com/login",
    {
      user: { username, password },
    }
  );
  console.log(res);
  return res.data.token;
}

async function getUsersWithAuth() {
  const token = await login("markymark", "lort17");
  getUsers(token);
}

async function createStory() {
  const token = await login("markymark", "lort17");
  const newStory = {
    token,
    story: {
      author: "Mark",
      title: "Baby shoes for sale. Never worn.",
      url: "https://babyshoes4lyfe.com",
    },
  };
  const res = await axios.post(
    "https://hack-or-snooze-v3.herokuapp.com/stories",
    newStory
  );
  console.log(res);
}
createStory();
