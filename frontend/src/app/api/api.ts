import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const api = {
    getLeagues,
    getMatches
}

async function getLeagues() {
    return getRequest("leagues/all");
}

async function getMatches() {
    return getRequest("matches/all");
}

async function getRequest(requestPath: string) {
    try {
        const res = await fetch(`http://localhost:8080/${requestPath}`)
        if (!res.ok) {
            console.log('Failed to fetch data');
        }
        return res.json();
    } catch (error) {
        console.log('Failed to send request');
    }
}

export default api;