import {DateValue} from "@nextui-org/react";

const api = {
    getLeagues,
    getMatches
}

async function getLeagues(date: DateValue) {
    return getRequest("leagues/all?date=" + date.toString().slice(0, 10));
}

async function getMatches(leagueId: string, date: DateValue) {
    console.log(date.toString().slice(0, 10));
    return getRequest(`matches/all?leagueId=${leagueId}&date=${date.toString().slice(0, 10)}`);
}

async function getRequest(requestPath: string) {
    try {
        const res = await fetch(`http://192.168.3.2:8080/${requestPath}`)
        if (!res.ok) {
            console.log('Failed to fetch data');
        }
        return res.json();
    } catch (error) {
        console.log('Failed to send request');
    }
}

export default api;