export function getHours() {
    return new Date().toLocaleTimeString();
};

setInterval(getHours, 1000);