class PageController{

    private constructor(){
        //should not be instantiated
    }
    
    static getInputAddEmail(): HTMLInputElement{
        return document.querySelector("#input_add_email")!;
    }

    static getInputAddName(): HTMLInputElement{
        return document.querySelector("#input_add_name")!;
    }

    static getInputAddGenre(): HTMLInputElement{
        return document.querySelector("#input_add_genre")!;
    }

    static getInputAddInstrument(): HTMLInputElement{
        return document.querySelector("#input_add_instrument")!;
    }

    static getAddButton(): HTMLButtonElement{
        return document.querySelector("#button_add")!;
    }

    static getInputSearchEmail(): HTMLInputElement{
        return document.querySelector("#input_search_email")!;
    }

    static getInputSearchGenre(): HTMLInputElement{
        return document.querySelector("#input_search_genre")!;
    }

    static getInputSearchInstrument(): HTMLInputElement{
        return document.querySelector("#input_search_instrument")!;
    }

    static getInputSearchCheck(): HTMLInputElement{
        return document.querySelector("#input_search_check")!;
    }

    static getSearchButton(): HTMLButtonElement{
        return document.querySelector("#button_search")!;
    }

    static getInputchangeEmail(): HTMLInputElement{
        return document.querySelector("#input_change_email")!;
    }

    static getInputChangeValue(): HTMLInputElement{
        return document.querySelector("#input_change_value")!;
    }

    static getInputChangeRadio(): NodeListOf<HTMLInputElement>{
        return <NodeListOf<HTMLInputElement>>document.getElementsByName("select")!;
    }

    static getInsertButton(): HTMLButtonElement{
        return document.querySelector("#button_insert")!;
    }

    static getRemoveButton(): HTMLButtonElement{
        return document.querySelector("#button_remove")!;
    }

    static getInputBandInstrument(): HTMLButtonElement{
        return document.querySelector("#input_band_instrument")!;
    }

    static getButtonAddBand(): HTMLButtonElement{
        return document.querySelector("#button_add_band")!;
    }

    static getTextAreaBand(): HTMLButtonElement{
        return document.querySelector("#text_area_band")!;
    }

    static getButtonFindBand(): HTMLButtonElement{
        return document.querySelector("#button_find_band")!;
    }
}

export {PageController}