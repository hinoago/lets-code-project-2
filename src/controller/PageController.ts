class PageController{
    
    static getAddEmail(): HTMLInputElement{
        return document.querySelector("#input_add_email")!;
    }

    static getAddGenre(): HTMLInputElement{
        return document.querySelector("#input_add_genre")!;
    }

    static getAddInstrument(): HTMLInputElement{
        return document.querySelector("#input_add_instrument")!;
    }

    static getAddButton(): HTMLButtonElement{
        return document.querySelector("#button_add")!;
    }

    static getSearchEmail(): HTMLInputElement{
        return document.querySelector("#input_search_email")!;
    }

    static getSearchGenre(): HTMLInputElement{
        return document.querySelector("#input_search_genre")!;
    }

    static getSearchInstrument(): HTMLInputElement{
        return document.querySelector("#input_search_instrument")!;
    }

    static getSearchCheck(): HTMLInputElement{
        return document.querySelector("#input_search_check")!;
    }

    static getSearchButton(): HTMLButtonElement{
        return document.querySelector("#button_search")!;
    }

    static getchangeEmail(): HTMLInputElement{
        return document.querySelector("#input_change_email")!;
    }

    static getChangeValue(): HTMLInputElement{
        return document.querySelector("#input_change_value")!;
    }

    static getChangeRadio(){
        return document.getElementsByName("select")!;
    }

    static getInsertButton(): HTMLButtonElement{
        return document.querySelector("#button_insert")!;
    }

    static getRemoveButton(): HTMLButtonElement{
        return document.querySelector("#button_remove")!;
    }
}

export {PageController}