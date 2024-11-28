class SocialProfile extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.container = document.createElement("div");
        this.container.classList.add("perfil-usuario");

        this.estilo = document.createElement("style");
        this.estilo.textContent = `
            .perfil-usuario {
                display: flex;
                flex-direction: column;
                align-items: center;
                font-family: Arial, sans-serif;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 8px;
                max-width: 280px;
                margin: 100px auto;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                
            }
            .profile-pic {
                width: 120px;
                height: 120px;
                border-radius: 50%;
                margin-bottom: 10px;
            }
            .username {
                font-size: 1.2em;
                font-weight: bold;
                margin-bottom: 5px;
            }
            .bio {
                font-size: 0.9em;
                color: #666;
                margin-bottom: 15px;
                text-align: center;
            }
            .follow-button, .message-button {
                padding: 8px 12px;
                margin: 5px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 0.9em;
            }
            .follow-button {
                background-color: #26a69a;
                color: white;
            }
            .message-button {
                background-color: #ffca28;
                color: white;
            }
            .follow-button:hover {
                background-color: #00897b;
            }
            .message-button:hover {
                background-color: #ffa000;
            }
        `;

        this.shadowRoot.appendChild(this.estilo);
        this.shadowRoot.appendChild(this.container);
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const profilePic = './Imagen/foto_usuario.jpg';
        const username = 'Nicole Trujillo';
        const bio = "Ecuatoriana de 23 años<br>Estudiante de TI<br>Pasatiempo: Tomar fotografias";

        this.container.innerHTML = `
            <img src="${profilePic}" alt="Foto del usuario" class="profile-pic">
            <div class="username">${username}</div>
            <div class="bio">${bio}</div>
            <div class="button-container">
                <button class="follow-button">Seguir</button>
                <button class="message-button">Mensaje</button>
            </div>
        `;
    }
}

window.customElements.define("social-profile", SocialProfile);