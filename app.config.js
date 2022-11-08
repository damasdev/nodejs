module.exports = {
    apps: [{
        name: "app",
        script: "src/server.js",
        instances: "max",
        exec_mode: "cluster",
        autorestart: true,
        watch: false,
        time: true,
    }]
}