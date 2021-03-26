function catchErrors(error, displayError) {
    let errorMsg;
    if (error.response) {
        // 4XX or 5XX response
        errorMsg = error.response.data
        console.log("Error response", errorMsg)

        // cloudinary
        if (error.response.data.error) {
            errorMsg = error.response.data.error.message
        }
    } else if (error.request) {
        // no response received
        errorMsg = error.request
        console.log("Error request", errorMsg)
    } else {
        errorMsg = error.message
        console.log("Error message", errorMsg)
    }
    displayError(errorMsg)
}

export default catchErrors