class Header extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'open' });

        const estilo = document.createElement('style');
        estilo.textContent = `
            header {
                background-color: #795548;
                color: white;
                padding: 0.2rem;
                text-align: center;
                font-size: 1rem;
            }
        `;

        const template = document.createElement('template');
        template.innerHTML = `
            <header>
                <h1>Laboratorio 2 - Trujillo Nicole</h1>
            </header>
        `;

        this.shadow.appendChild(estilo);
        this.shadow.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('mi-header', Header);
