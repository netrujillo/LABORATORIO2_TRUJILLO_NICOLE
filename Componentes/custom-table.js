class CustomTable extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'open' });
        this.tableContainer = document.createElement('div');
        this.tableContainer.classList.add('table-container');

        this.estilo = document.createElement('style');
        this.estilo.textContent = `
            .table-container {
                margin: 20px;
                font-family: 'Arial', sans-serif;
                background-color: #fff;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                width: auto;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                margin-left: auto;
                margin-right: auto;
            }
            table th, table td {
                padding: 12px 16px;
                border: 1px solid #ddd;
                text-align: left;
                font-size: 1rem;
            }
            table th {
                background-color: #34495e;
                color: white;
                font-weight: bold;
                text-transform: uppercase;
                letter-spacing: 1px;
                text-align: center;
            }
            table tbody tr:nth-child(even) {
                background-color: #f5f5f5;
            }
            table tbody tr:hover {
                background-color: #f7dc6f ;
                color: white;
                cursor: pointer;
            }
            .error-alert {
                color: red;
                text-align: center;
                font-size: 1.2rem;
                margin-top: 20px;
            }
        `;

        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Ciudad</th>
                            <th>Compañia</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                <p class="error-alert" style="display: none;"></p>
            </div>
        `;

        this.shadow.appendChild(this.estilo);
        this.shadow.appendChild(this.template.content.cloneNode(true));
        this.tableBody = this.shadowRoot.querySelector('tbody');
        this.errorAlert = this.shadowRoot.querySelector('.error-alert');
    }

    connectedCallback() {
        const endPoint = this.getAttribute('api-endpoint') || 'https://jsonplaceholder.typicode.com/users';
        this.fetchData(endPoint);
    }

    fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            this.render(data);
        } catch (error) {
            console.log("Error con la API", error);
            this.errorAlert.textContent = 'Error al cargar los datos';
            this.errorAlert.style.display = 'block';
        }
    }

    render = (users) => {
        this.tableBody.innerHTML = ''; // Limpiar la tabla antes de mostrar nuevos datos
        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.address.city}</td>
                <td>${user.company.name}</td>
            `;
            this.tableBody.appendChild(row);
        });
    }
}

window.customElements.define('custom-table', CustomTable);


