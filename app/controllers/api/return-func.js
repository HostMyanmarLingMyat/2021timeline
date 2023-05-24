export const returnFunc = (error, data, response) => {
    if (error) throw error
    response.write(data)
    response.end()
}