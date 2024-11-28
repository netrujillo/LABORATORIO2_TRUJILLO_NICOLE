# LABORATORIO2_TRUJILLO_NICOLE

## Componentes

### 1. `mi-header`
Este componente representa el encabezado de la página. Muestra el título del laboratorio y el nombre de la persona que lo realizó.

**Funcionalidad**:
- Muestra el título del laboratorio "Laboratorio 2 - Trujillo Nicole" en el encabezado.
- Utiliza el Shadow DOM para encapsular los estilos y la estructura.

---

### 2. `mi-footer`
Este componente muestra el pie de página con un mensaje de derechos reservados.

**Funcionalidad**:
- Muestra un mensaje de copyright con el texto "© 2024 - Todos los derechos reservados".
- Utiliza el Shadow DOM para encapsular los estilos.

---

### 3. `mi-main`
Este componente es el contenedor principal de la página. Permite la inserción dinámica de contenido mediante un `<slot>`.

**Funcionalidad**:
- Utiliza un `slot` para mostrar el contenido dinámico que se inserta desde otros componentes.
- El contenido se puede actualizar dependiendo de la navegación.

---

### 4. `mi-menu`
Este componente representa un menú de navegación. Permite a los usuarios navegar entre diferentes secciones de la página, como "Perfil", "Tabla" y "Galería".

**Funcionalidad**:
- Ofrece enlaces de navegación que, al hacer clic, emiten un evento de navegación para cambiar el contenido visible.
- Utiliza el Shadow DOM para encapsular los estilos del menú.

---

### 5. `social-profile`
Este componente muestra un perfil de usuario con su foto, nombre, biografía y botones de interacción.

**Funcionalidad**:
- Muestra una imagen de perfil, el nombre del usuario y una biografía.
- Incluye botones de "Seguir" y "Mensaje" que pueden estar vinculados a funcionalidades de interacción.

---

### 6. `custom-table`
Este componente muestra una tabla con datos obtenidos desde una API externa, como por ejemplo una lista de usuarios.

**Funcionalidad**:
- Se conecta a una API para obtener datos y los muestra en una tabla.
- La tabla incluye funcionalidades básicas como la visualización de los datos y un mensaje de error si los datos no se pueden cargar.

