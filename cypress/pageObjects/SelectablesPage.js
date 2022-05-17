import BasePage from "./BasePage";

class SelectablesPage extends BasePage {
    static get url() {
        return "/selectable";
    }

    static get selectableElement() {
        //return cy.get(".mt-2");
        return cy.get(".list-group-item");
    }
    static get gridTab() {
        return cy.get("#demo-tab-grid");
    }
    static get gridContainerChildren() {
        return cy.get("#gridContainer").children().children();
    }
    

}


export default SelectablesPage;