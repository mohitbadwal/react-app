/**
 * Created by mohit.badwal on 5/26/2018.
 */

import dispatcher from "../Dispatcher";

export function createItem(text) {
    console.log("Reached the action");
    dispatcher.dispatch({
        type: "CREATE_ITEM",
        text,
    });
}