import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	//console.log(req);
	res.send(req.headers);
});

app.listen(port, () => {
	console.log(`App running at port ${port}`);
});
