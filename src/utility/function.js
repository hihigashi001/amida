export const Random10 = () => {
    let random10 = ""
    for (let i = 0; i < 40; i++) {
        random10 = random10 + Math.floor(Math.random() * 2)
    }
    return random10
}

export const RandomURL = () => {
    var l = 16;
    var c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var cl = c.length;
    var randomURL = "";
    for (var i = 0; i < l; i++) {
        randomURL += c[Math.floor(Math.random() * cl)];
    }
    return randomURL
}


export const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    for (let i = array.length; i !== 10; i++) {
        array.push("")
    }
    return array;
}