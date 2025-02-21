/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS API URL FROM ENV
//////////////////////////////////////////////////////////////////////////////////////////////////// */
const apiURL = import.meta.env.VITE_API_URL;

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
GET ALL GUILDS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export async function getGuilds(params = {}) {
    try {
        if (params.sortBy) {
            const [field, direction] = params.sortBy.split('-');
            params.sort = direction === 'desc' ? `-${field}` : field;
            delete params.sortBy;
        }

        const queryString = new URLSearchParams(params).toString();
        const url = `${apiURL}/guilds${queryString ? `?${queryString}` : ''}`;

        let response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let data = await response.json();

        return data.data.data;

    } catch(error) {
        throw new Error("Guilds could not be fetched");
    }
}

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
GET GUILD BY ID (GUILD ID)
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export async function getGuild(id) {
    try {
        let response = await fetch(`${apiURL}/guilds/${id}`);

        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let data = await response.json();

        return data.data.data;

    } catch(error) {
        throw new Error("Guild could not be fetched");   
    }
}

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
GET ALL THE GUILD'S QUEST (GUILD ID)
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export async function getAllGuildQuests(id) {
    try {
        let response = await fetch(`${apiURL}/guilds/${id}/quests`);

        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let data = await response.json();

        return data.data.quests;

    } catch(err) {
        throw new Error("Guild's quests could not be fetched");   
    }
}