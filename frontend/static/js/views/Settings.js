import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Settings");
    }
    async getHtml() {
        return `
            <h1>Settings!!!!!!!!!!!!!!</h1>
            <p>You are viewing Settings</p>
            <p>
                <a href = "/settings" data-link> View recent settings</a>
            </p>
        `;
    }
}