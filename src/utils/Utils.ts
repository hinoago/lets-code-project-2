class Utils{
    static createModal(modalContent: string, closeButtonText: string){
        const modal = document.createElement("div");
        const background = document.createElement("div");
        const button = document.createElement("button");

        modal.innerHTML = modalContent;
        button.innerText = closeButtonText;
        button.addEventListener("click", this.removeModal);
        modal.id = "modal";
        background.id = "background";
        button.id = "btn_modal";
        modal.appendChild(button);
        background.appendChild(modal);
        document.body.appendChild(background);
    }
    
    static removeModal(){
        document.querySelector("#background")?.remove();
        document.querySelector("#modal")?.remove();
    }

    static capitalize(string: string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

export {Utils}