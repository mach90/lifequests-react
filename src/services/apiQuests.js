const apiURL = import.meta.env.VITE_API_URL;

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