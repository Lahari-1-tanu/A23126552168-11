const Log = require("../logging-middleware/logger");

app.listen(3000, () => {
    Log(
        "backend",
        "info",
        "service",
        "Notification service started"
    );
});