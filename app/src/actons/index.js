import studios from '../studio.json';

export const REQUEST_STUDIOS = 'REQUEST_STUDIOS';
export const RECIEVE_STUDIOS = 'RECIEVE_STUDIOS';

export const fetchStudios = (searchKeyWords)  => {
    return (dispatch) => {
        dispatch(requestStudios());

        let fetchEmulationPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(studios.studios);
            }, 200);
        })

        fetchEmulationPromise.then(
            (studios) => {
                dispatch(recieveStudios(studios));
            },
            (error) => {
                dispatch(recieveStudios([]));
                console.log(error);
            }
        )
    }
}

export const requestStudios = () => {
    return {
        type: REQUEST_STUDIOS
    }
}

export const recieveStudios = (studios) => {
    return {
        type: RECIEVE_STUDIOS,
        studios
    }
}