const cluster = require('cluster')

if (cluster.isMaster) {

    // Count the machine's CPUs
    var cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }
} else {

    const express = require('express')
    const app = express()
    const path = require('path')

    // Serve static assets
    app.use(express.static(path.resolve(__dirname, '..', 'build')));

    // Always return the main index.html, so react-router render the route in the client
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
    });

    module.exports = app;

    const PORT = process.env.PORT || 9000;
    console.log(PORT)

    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    });
}