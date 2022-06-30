const app = require("./controller/app");

const hostname = 'localhost';
const port = 3000;

app.listen(port, hostname, () => {
    console.log(`Server started and accessible via http://${hostname}:${port}/`);
});
