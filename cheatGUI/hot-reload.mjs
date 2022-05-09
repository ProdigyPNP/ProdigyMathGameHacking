import fs from "fs";
import { Server } from "socket.io";
import http from "http";
import { exec } from "child_process";

const app = http.createServer();

const io = new Server(app, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
	}
});

fs.watch("./src/", { recursive: true }, () => {
	exec("npx webpack --mode development", (error, stdout) => {
		if (error) {
			console.log(stdout);
			throw error;
		}
		fs.readFile("./dist/bundle.js", (err, data) => {
			if (err) throw err;
			io.emit("update", data.toString());
		});
	});
});

app.listen(3001, () => console.log("Listening on port 3001"));
