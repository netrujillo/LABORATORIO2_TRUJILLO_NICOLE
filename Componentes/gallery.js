class Gallery extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        
        this.container = document.createElement('div');
        this.container.classList.add('gallery-container');

        this.estilo = document.createElement('style');
        this.estilo.textContent = `
            .gallery-container {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                gap: 20px;
                padding: 20px;
            }
            .pokemon-card {
                border: 1px solid #ddd;
                padding: 10px;
                border-radius: 8px;
                max-width: 200px;
                text-align: center;
            }
            .pokemon-img {
                width: 100%;
                max-width: 150px;
                border-radius: 8px;
            }
            .pokemon-name {
                font-weight: bold;
                margin-top: 10px;
            }
        `;

        // Plantilla para cada tarjeta de Pokémon
        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="pokemon-card">
                <img class="pokemon-img" />
                <div class="pokemon-name"></div>
            </div>
        `;

        this.shadowRoot.appendChild(this.estilo);
        this.shadowRoot.appendChild(this.container);
    }

    connectedCallback() {
        const endPoint = this.getAttribute('api-endpoint') || 'https://pokeapi.co/api/v2/pokemon?limit=25'; // Default endpoint
        this.fetchData(endPoint);
    }

    // Obtener datos desde la API
    fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            const pokemons = data.results || []; // Asegúrate de que los resultados sean un array
            this.render(pokemons);
        } catch (error) {
            console.error("Error con la API:", error);
            this.container.innerHTML = `
                <p class="error-alert">Error al cargar los datos</p>
            `;
        }
    };

    // Renderizar los datos de Pokémon
    render = (pokemons) => {
        this.container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevas tarjetas

        pokemons.forEach(pokemon => {
            // Clonar la plantilla para cada tarjeta
            const card = this.template.content.cloneNode(true);
            const img = card.querySelector("img");
            const name = card.querySelector(".pokemon-name");

            // Obtener los detalles de cada Pokémon (usamos el enlace 'url' para obtener más datos)
            this.loadPokemonImage(pokemon.url, img);

            name.textContent = pokemon.name; // Nombre del Pokémon

            // Agregar la tarjeta al contenedor
            this.container.appendChild(card);
        });
    };

    // Cargar la imagen del Pokémon
    loadPokemonImage = async (url, imgElement) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            imgElement.src = data.sprites.front_default;
            imgElement.alt = `Imagen de ${data.name}`;
        } catch (error) {
            console.error("Error al cargar la imagen del Pokémon:", error);
        }
    };
}

window.customElements.define('pokemon-gallery', Gallery);








