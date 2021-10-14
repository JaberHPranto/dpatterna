// @ts-ignore
exports.__esModule = true;
const MY_APP_ID = "919947247447c728e0406c2abce9e8b1";
const url = `https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=${MY_APP_ID}`;

import unfetch from "unfetch";

export async function loadJSON(url: string) {
  try {
    const fetch = unfetch;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// export const data = loadJSON(url);

// data.then((res) => console.log(res)).catch((err) => console.log(err));

// console.log(data);
