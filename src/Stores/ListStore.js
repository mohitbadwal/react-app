/**
 * Created by mohit.badwal on 5/26/2018.
 */

import { EventEmitter } from "events";

import dispatcher from "../Dispatcher";

class  ListStore extends EventEmitter{

    constructor()
    {
        super();
        this.list=[
            {
                id:13231313131,
                heading:"First Heading",
                subheading:"First Subheading"
            },
            {   id:435546758658,
                heading:"Second Heading",
                subheading:"Second Subheadingsss"
            }
        ];
    }
    createItem(text) {
        console.log("reached create item");

        const id = Date.now();
        const r = text.split(",");
        this.list.push({
            id:id,
            heading:r[0],
            subheading: r[1],
        });
        console.log("From store",this.list);
        this.emit("change");
    }


    handleActions(action) {
        console.log("reached store");
        switch(action.type) {
            case "CREATE_ITEM": {
                this.createItem(action.text);
                break;
            }
            case "RECEIVE_TODOS": {
                this.todos = action.todos;
                this.emit("change");
                break;
            }
        }
    }

    getAll() {
        return this.list;
    }
}

const listStore = new ListStore;
dispatcher.register(listStore.handleActions.bind(listStore));
export default listStore;
