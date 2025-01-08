export async function getGuilds() {
    const data = await fetch("http://127.0.0.1:3000/api/v1/guilds").json();

    console.log(data);
}