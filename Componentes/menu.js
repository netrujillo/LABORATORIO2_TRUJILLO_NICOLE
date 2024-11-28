class MenuComponent extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            nav {
                display: flex;
                justify-content: space-around;
                background-color: #212121;
                color: white;
                padding: 0.5rem;
            }
            nav a {
                color: white;
                text-decoration: none;
                font-size: 1.2rem;
                font-weight: bold;
            }
            nav a:hover {
                text-decoration: underline;
            }
        `;

        const nav = document.createElement('nav');
        nav.innerHTML = `
            <a href="#perfil" id="menu-perfil">PERFIL</a>
            <a href="#table" id="menu-table">TABLA</a>
            <a href="#gallery" id="menu-gallery">GALERÍA</a>
        `;

        shadow.appendChild(style);
        shadow.appendChild(nav);
    }

    connectedCallback() {
        this._setEventListeners();
    }

    _setEventListeners() {
        const perfilLink = this.shadowRoot.querySelector('#menu-perfil');
        const tableLink = this.shadowRoot.querySelector('#menu-table');
        const galleryLink = this.shadowRoot.querySelector('#menu-gallery');

        perfilLink.addEventListener('click', (event) => this._navigate(event, 'perfil'));
        tableLink.addEventListener('click', (event) => this._navigate(event, 'table'));
        galleryLink.addEventListener('click', (event) => this._navigate(event, 'gallery'));
    }

    _navigate(event, page) {
        event.preventDefault();

        // Eliminar la clase 'active' de todos los enlaces
        const links = this.shadowRoot.querySelectorAll('nav a');
        links.forEach(link => link.classList.remove('active'));

        // Añadir la clase 'active' al enlace que fue clickeado
        event.target.classList.add('active');

        // Emitir el evento de navegación con el nombre de la página a mostrar
        const pageEvent = new CustomEvent('navigate', { detail: { page } });
        this.dispatchEvent(pageEvent);
    }
}

window.customElements.define('mi-menu', MenuComponent);



