export default () => {
    try {
        return localStorage.getItem("access_token")
    } catch (err) {
        return ""
    }
}