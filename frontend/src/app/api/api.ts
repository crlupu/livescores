import {Simulate} from "react-dom/test-utils";

const api = {
    getLeagues,
    getMatches
}

async function getLeagues(date: Date | undefined) {
    return date ? getRequest("leagues/all?date=" + date.toISOString().slice(0, 10)) : getRequest("leagues/all");
}

async function getMatches(date: Date | undefined) {
    return date ? getRequest("matches/all?date=" + date.toISOString().slice(0, 10)) : getRequest("matches/all");
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