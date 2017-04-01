import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	const answer = {
		ip: req.headers[x-fowarded-for],
	};
	res.send(answer);
});

app.listen(port, () => {
	console.log(`App running at port ${port}`);
});
