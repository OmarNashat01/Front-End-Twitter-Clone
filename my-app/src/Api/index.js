import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/",
});
//BASE URL FOR API CALLS

api.defaults.headers.common["Authorization"] = "AUTH TOKEN";
// PUTTING THE AUTH TOKEN IN EVERY HEADER

//THESE ARE THE DEFAULTS FOR EVERY API CALL AND THEY ARE CONFIGURED ACCORDINGLY

//////////////////////////////////////////////////////////////////////

async function getExample() {
  try {
    let res = await api.get("/example");

    //handle success
    console.log("success");
  } catch (error) {
    //handle error
    console.log(`ERROR ${error}`);
  }
}

async function postExample(entryData) {
  try {
    let res = await api.get("/example", {
      entry1: "example",
      entry2: entryData,
      id: 3,
    });

    //handle success
    console.log("success");
  } catch (error) {
    //handle error
    console.log(`ERROR ${error}`);
  }
}

export { getExample, postExample };
