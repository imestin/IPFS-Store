//The data is on another IPFS peerId (another IPNS link)
let dataToFetch = 'https://ipfs.io/ipns/QmPPF1MM6NbzdZwHoPNy6nhSRcow7m744a5SUPxdpudL53';

export function nav(pressedButton) {
    return {
        type: "NAV",
        display: pressedButton,
    }
}

export function itemClicked(i) {
    return {
        type: "ITEM_CLICKED",
        item: i,
    }
}

export function buy(id) {
    return {
        type: "BUY",
        //Not specified, we are not here yet.
    }
}

export function fetchData() {
    return dispatch => {
        dispatch(fetchDataBegin());
        return fetch(dataToFetch)
        .then(res => res.json())
        .then(json => {
            //or json.something
            dispatch(fetchDataSuccess(json));
            return json;
        })
        .catch(error => dispatch(fetchDataFailure(error)));
    };
}

export const fetchDataBegin = () => ({
    type: "FETCH_DATA_BEGIN",
});

export const fetchDataSuccess = (products) => ({
    type: "FETCH_DATA_SUCCESS",
    //probably this is the json.something
    payload: { products },
});

export const fetchDataFailure = (error) => ({
    type: "FETCH_DATA_FAILURE",
    payload: { error },
})