import axios from "axios";

export const instance = axios.create({
	baseURL: "https://data.techart.ru/lab/json/"
});



