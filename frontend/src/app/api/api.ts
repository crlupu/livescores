const api = {
    getLeagues,
    getMatches
}

async function getLeagues() {
    return getRequest("leagues");
}

async function getMatches() {
    return getRequest("matches");
}

async function getRequest(requestPath: string) {
    const res = await fetch(`http://localhost:8080/${requestPath}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
}

export default api;