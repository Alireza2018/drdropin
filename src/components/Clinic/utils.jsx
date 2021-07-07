export const fetchClinics = (cb) => {
    const { REACT_APP_API_URL } = process.env;
    fetch(
        REACT_APP_API_URL,
        {
            method: "GET"
        }
    )
        .then(response => response.json())
        .then(response => {
            cb(undefined, response);
        })
        .catch(error => {
            cb(error, undefined);
        });
};

export const millisecondsToString = (milliseconds) => {
    return new Date(milliseconds).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
};

export const isAllDay = (from, to) => {
    const oneDay = 60 * 60 * 24 * 1000 //24 hours in milliseconds
    return ((to - from) === oneDay)
}