const MONGO_URI = process.env.MONGO_URI

if (!MONGO_URI) {
    throw new Error("MONGO_URI enviroment variable is not defined")
}

const config = {
    PORT : Number(process.env.PORT || 3000),
    APP_NAME : process.env.APP_NAME || 'MyApp',
    MONGO_URI: MONGO_URI
}

export default config
