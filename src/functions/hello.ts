export const handle = async (event) => {
    console.log("Acess event");
    return {
        statusCode: 201,
        body: JSON.stringify({
            message: "Hello World Ignite Serverless"
        }),
        headers: {
            "Content-Type": "application/json",
        }
    }
}