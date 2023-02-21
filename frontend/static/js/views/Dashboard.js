import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }
    async getHtml() {
        return `
            <h1>Welcome back DOM </h1>
            <p>This is the dashboard page</p>
            <p>
                <a href = "/posts" data-link> View recent posts</a>
            </p>
        `;
    }
}