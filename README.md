Amigo Secreto 🎁
Este proyecto es una aplicación web que permite realizar sorteos de "Amigo Secreto" de manera rápida y divertida. Fue desarrollado como parte del Challenge AMIGO SECRETO de Alura Latam ONE para fortalecer habilidades en lógica de programación y documentación.

🌟 Funcionalidades
Agregar nombres de participantes.
Mostrar la lista de participantes ingresados.
Realizar el sorteo de un "Amigo Secreto".
Reiniciar el sorteo para empezar de nuevo.
📸 Capturas de Pantalla
Página principal: Muestra el diseño inicial con los campos para ingresar los nombres.
Lista de nombres: Visualización de los nombres ingresados antes del sorteo.
Resultado del sorteo: Muestra al participante seleccionado.
Botones deshabilitados tras el sorteo: Indica que no se pueden realizar cambios hasta reiniciar.
Nota: Incluí capturas donde se aprecie el diseño responsivo y la interacción de los botones.

🛠️ Cómo instalar y ejecutar el proyecto
Clona este repositorio en tu máquina local:
bash
Copiar
Editar
git clone [URL del repositorio]
Abre el archivo index.html en tu navegador para ejecutar la aplicación.
📂 Estructura del proyecto
index.html: Contiene la estructura HTML principal del proyecto​
.
style.css: Incluye los estilos visuales, como colores, tipografías y diseño responsivo​
.
app.js: Archivo de lógica donde se implementan las funciones del sorteo, adición de participantes y reinicio​
.
🔧 Detalles técnicos
Lenguajes usados: HTML, CSS y JavaScript.
Diseño responsivo: Adaptable a dispositivos móviles y de escritorio.
Interactividad: Implementada con funciones JavaScript que manejan eventos del usuario.
📄 Funcionalidades clave del código
Agregar nombres:

Verifica que el nombre no esté vacío ni duplicado.
Actualiza la lista de participantes visibles en la página.
Realizar el sorteo:

Selecciona un nombre aleatorio de la lista.
Desactiva los botones de interacción hasta que se reinicie.
Reiniciar el sorteo:

Limpia la lista de participantes y el resultado.
Restaura los botones a su estado inicial.