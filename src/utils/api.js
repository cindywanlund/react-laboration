function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

export const fetchData = async () => {
    try {

        const MAX_NUMBER = 7;

        //sleep(1000);

        let filmUrls= new Array();

        for (var i = 1; i < MAX_NUMBER; i++) {
            let aFilm = "https://swapi.dev/api/films/"+ i +"/";
            filmUrls.push(aFilm);
        }

        const response = await Promise.all(
            filmUrls.map(url => fetch(url).then(res => res.json()))
        );

        //console.log(response);
        return response;
    } catch (error) {
        console.log('Error', error);
    }
};
