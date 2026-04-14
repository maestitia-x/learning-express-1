export function homeHandler (req, res) {
    res.send("Ana Sayfa")
}

export function healthHandler(req, res) {
    res.send("Server Ayakta")
}

export function adminHandler(req, res) {
    res.send("Welcome to the admin page")
}

export function crashHandler (req, res) {
    throw new Error("Beklenmedik bir hata!")
}