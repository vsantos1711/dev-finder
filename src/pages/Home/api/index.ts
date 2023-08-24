import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com/'
});
export async function getData(githubUsername: string){
  return (await api.get(`users/${githubUsername}`)).data

}