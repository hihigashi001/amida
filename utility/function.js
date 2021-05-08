export const Random10 = () => {
    let random10 = ""
    for (let i = 0; i < 40; i++) {
        random10 = random10 + Math.floor(Math.random() * 2)
    }
    return random10
}
