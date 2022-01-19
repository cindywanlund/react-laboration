export const fetchCharacters = async (characters) => {
    try {

        const response = await Promise.all(
            characters.map(url => fetch(url).then(res => res.json()))
        );

        let roles=new Array();
        for (let i=0; i< response.length; i++){
            roles.push(response[i].name) ;
        }

        roles = roles.sort();

        return roles;
    } catch (error) {
        console.log('Error', error);
    }
};

export const fetchData = async () => {
    try {

        const MAX_NUMBER = 7;

        let filmUrls= new Array();

        for (var i = 1; i < MAX_NUMBER; i++) {
            let aFilm = "https://swapi.dev/api/films/"+ i +"/";
            filmUrls.push(aFilm);
        }

        const response = await Promise.all(
            filmUrls.map(url => fetch(url).then(res => res.json()))
        );

        return response;
    } catch (error) {
        console.log('Error', error);
    }
};