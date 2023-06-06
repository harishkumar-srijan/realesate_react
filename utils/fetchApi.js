import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
	const { data } = await axios.get(url, {
		headers: {
			'x-rapidapi-host': 'bayut.p.rapidapi.com',
			'X-RapidAPI-Key': 'd8b47caca2msh8f0725139aef2c9p18a0c4jsn30dc75d1b7ae',
			//'x-rapidapi-key': '494968244cmsh754a0aeefb899c9p19f33ajsn4881bd14a1de', // one month quata over
		},
	});

	return data;
};
