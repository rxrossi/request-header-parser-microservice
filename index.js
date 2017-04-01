import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	const answer = {
		IP: req.headers["x-forwarded-for"],
		OS: req.headers["user-agent"].split(" (")[1].split(") ")[0],
		Language: req.headers["accept-language"].split(",")[0],
	};
	res.send(answer);
});

app.listen(port, () => {
	console.log(`App running at port ${port}`);
});
