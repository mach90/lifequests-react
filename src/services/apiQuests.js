const apiURL = import.meta.env.VITE_API_URL;

export async function getQuests(params = {}) {
    try {
        if (params.sortBy) {
            const [field, direction] = params.sortBy.split('-');
            params.sort = direction === 'desc' ? `-${field}` : field;
            delete params.sortBy;
        }

        // Convert params object to URL query string
        const queryString = new URLSearchParams(params).toString();
        const url = `${apiURL}/quests${queryString ? `?${queryString}` : ''}`;

        let response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let data = await response.json();

        return data.data.data;
        
    } catch (error) {
        throw new Error("Quests could not be fetched");
    }
}

export async function getQuest(id) {
    try {
        let response = await fetch(`${apiURL}/quests/${id}`);

        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let data = await response.json();

        // console.log("GETQUESTAPI", data.data.data);
        return data.data.data;

    } catch(error) {
        throw new Error("Quest could not be fetched");   
    }
}