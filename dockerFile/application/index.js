const app = require('./app');
const main = async() => {
    const port = process.env.PORT || 3000;
    app.listen(port,()=>{console.log(`application is listening on port: ${port}`);})
}
main();