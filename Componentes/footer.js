class Footer extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'open' });

        const estilo = document.createElement('style');
        estilo.textContent = `
            footer {
                background-color: #333;
                color: white;
                padding: 1rem;
                text-align: center;
                font-size: 0.9rem;
            }
        `;

        const template = document.createElement('template');
        template.innerHTML = `
            <footer>
                <p>© 2024 - Todos los derechos reservados</p>
            </footer>
        `;

        this.shadow.appendChild(estilo);
        this.shadow.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('mi-footer', Footer);
