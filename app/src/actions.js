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