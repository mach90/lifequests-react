const apiURL = import.meta.env.VITE_API_URL;

export async function getGuilds() {
    try {
        let response = await fetch(`${apiURL}/guilds`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let data = await response.json();

        return data.data.data;

    } catch(error) {
        console.error("Error fetching guilds:", error);
        throw new Error("Guilds could not be fetched");
    }
}

export async function getGuild(id) {
    try {
        let response = await fetch(`${apiURL}/guilds/${id}`);

        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let data = await response.json();

        return data.data.data;

    } catch(error) {
        console.error("Error fetching guild", error);
        throw new Error("Guild could not be fetched");   
    }
}