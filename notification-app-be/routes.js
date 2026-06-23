router.get("/notifications", async (req, res) => {
    Log(
        "backend",
        "info",
        "route",
        "GET /notifications called"
    );

    res.send("Success");
});