import axios from "axios";

const RANDOM = "https://dog.ceo/api/breeds/image/random";
const BREED = breed => `https://dog.ceo/api/breed/${breed}/images/random/10`;

export default {
    randomDog: function() {
        return axios.get(RANDOM);
    },
    searchBreed: function(hound) {
        return axios.get(BREED(hound));
    }
}