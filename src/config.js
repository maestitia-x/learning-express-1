const config = {
    PORT : Number(process.env.PORT || 3000),
    APP_NAME : process.env.APP_NAME || 'MyApp',
    MONGO_URI: process.env.MONGO_URI
}

export default config
