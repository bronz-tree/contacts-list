import axios from 'axios';


const api = {
  fetchSingleContact: function(){

    const  url = 'https://randomuser.me/api/';
    console.log("url: "+url);
    axios.get(url)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
  }
}

module.exports = api;
