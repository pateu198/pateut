const discord_id = "449250687868469258";
document.getElementById("discord-icon").setAttribute("href", `https://discord.com/users/${discord_id}`);

function get(url) {
	return new Promise((resolve) => {
		let req = new XMLHttpRequest();
		req.open("GET", url);
		req.send();
		req.onload = (e) => {
			resolve(e.target.response);
		};
	});
}

async function update() {
	let startData = JSON.parse(await get("https://api.lanyard.rest/v1/users/" + discord_id)).data;
	const status = document.getElementById("discord-status");
	const activity = document.getElementById("discord-activity");
	// document
	// 	.getElementById("discord-avatar")
	// 	.setAttribute("src", `https://cdn.discordapp.com/avatars/${discord_id}/${startData.discord_user.avatar}`);
	switch (startData.discord_status) {
		case "offline":
			status.style.display = "none";
			break;
		case "dnd":
			status.style.background = "#f04747";
			break;
		case "idle":
			status.style.background = "#faa61a";
			break;
		case "online":
			status.style.background = "#43b581";
			break;
	}

	if (startData.listening_to_spotify) {
		activity.innerHTML = `Listening to <code>${startData.spotify.song}</code> by <code>${startData.spotify.artist.replaceAll(
			"; ",
			", "
		)}</code>`;
	} else {
		const targetActivity = startData.activities.find((f) => f.type === 0);
		if (startData.activities.length === 0 || !targetActivity) {
			if (startData.discord_status === "offline") {
				activity.innerHTML = "";
			} else {
				activity.innerHTML = "Online on Discord";
			}
		} else {
			activity.innerHTML = `${targetActivity.name}${targetActivity.details?.length > 0 ? " | " + targetActivity.details : ""}`;
		}
	}
}
update();
setInterval(update, 60_000);
