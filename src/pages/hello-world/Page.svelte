<script>
  import { loadJSON } from "../hello-iterator/weather";
  import Nested from "./Nested.svelte";

  const MY_APP_ID = "919947247447c728e0406c2abce9e8b1";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=${MY_APP_ID}`;

  const weatherData = loadJSON(url);
  let city = "";
  let temp;
  weatherData.then((wd) => {
    city = wd.name;
    temp = wd.main.temp;
  });
  // const city = weatherData.name;
  // const temp = weatherData.main.temp;

  console.log(weatherData);

</script>

<style>
  p {
    color: purple;
    font-family: "Comic Sans MS", cursive;
    font-size: 2em;
  }

</style>

<p>Hello, world!</p>
<Nested />
<div>{city}</div>
<div>{temp}</div>
