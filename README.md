# Biblioteca de Componentes en React

Este proyecto es una aplicación simple de React que demuestra el uso de componentes reutilizables como `Header`, `Footer`, `Button`, `Input` y `Card` dentro de un diseño. La aplicación utiliza TailwindCSS para el estilizado y tiene como objetivo proporcionar una estructura de interfaz de usuario (UI) responsiva, mientras muestra la composición básica de componentes en React.

## Tabla de Contenidos

- [Biblioteca de Componentes en React](#biblioteca-de-componentes-en-react)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Descripción General](#descripción-general)
  - [Estructura del Proyecto](#estructura-del-proyecto)
    - [Componente App](#componente-app)
    - [Componente Button](#componente-button)
    - [Componente Card](#componente-card)
    - [Componente Footer](#componente-footer)
    - [Componente Header](#componente-header)
    - [Componente Input](#componente-input)
  - [Estilos](#estilos)
    - [Colores](#colores)
    - [Logo](#logo)
    - [Fuentes](#fuentes)

## Descripción General

Este proyecto en React consta de una página funcional que utiliza varios componentes clave para estructurar la interfaz. Los componentes están diseñados para ser reutilizables y personalizables. El proyecto incorpora TailwindCSS para el estilizado basado en utilidades, lo que facilita la modificación del diseño sin necesidad de reglas CSS complejas.

## Estructura del Proyecto

### Componente App

El componente `App` es el componente raíz que contiene la estructura de la página. Este renderiza los componentes `Header`, `Footer`, `Button`, `Input` y `Card`.

### Componente Button

El componente `Button` permite crear un botón con una etiqueta. Utiliza el hook `useState` para gestionar el estado de "presionado" del botón y dar retroalimentación visual al hacer clic.

### Componente Card

El componente `Card` muestra una imagen con un título y una descripción. Está estilizado con TailwindCSS para proporcionar un diseño limpio y responsivo.

### Componente Footer

El componente `Footer` ofrece información básica de derechos de autor y contacto. Utiliza flexbox para crear un diseño responsivo con tres secciones.

### Componente Header

El componente `Header` incluye una barra de navegación con enlaces, un logotipo y un campo de búsqueda. El estado del campo de búsqueda se gestiona mediante `useState` de React.

### Componente Input

El componente `Input` es un campo de entrada reutilizable que soporta diferentes estados (`default`, `success`, `error`, y `warning`). Utiliza las propiedades del componente para aplicar los estilos correspondientes.

## Estilos

En este proyecto se utiliza **TailwindCSS** para los estilos, lo que permite una gran flexibilidad y rapidez en el desarrollo del diseño. Hemos optado por una paleta de colores personalizada que se alinea con la identidad visual de la marca, proporcionando una experiencia visual coherente y atractiva.

### Colores

Los colores elegidos reflejan una imagen moderna y profesional, adecuada para una empresa digital enfocada en la innovación y la creatividad.

- **Color Primario (`#00ffff`)**: Este color representa frescura y tecnología. Es un tono vibrante de cian que se asocia con la innovación y la fluidez, elementos clave de la marca EvolucionaX, que se dedica a ofrecer soluciones digitales avanzadas.
- **Color Secundario (`#4b0082`)**: El morado es un color asociado con la creatividad, la sabiduría y la estabilidad. Se ha utilizado para darle un toque sofisticado al diseño, transmitiendo confianza y profesionalismo.
- **Color Complementario (`#d9fff9`)**: Este color suave y claro actúa como un fondo neutro que hace resaltar los colores más intensos, sin ser demasiado invasivo. Proporciona un balance visual y facilita la lectura.
- **Colores de Estado (Success, Error, Warning, Danger)**: Hemos incluido estos colores para brindar una experiencia interactiva más rica. Los colores de éxito, error, advertencia y peligro permiten al usuario identificar de manera rápida y clara el estado de las acciones dentro de la interfaz.

### Logo

El logo de **EvolucionaX** es un componente clave de la identidad visual de la marca. Se eligió un diseño simple pero simbólico que refleja el enfoque de la empresa en la evolución tecnológica. El logotipo incluye un ícono abstracto que simboliza el crecimiento y la transformación, acompañado de un tipo de letra limpio y moderno para garantizar legibilidad y profesionalismo.

Optamos por un diseño minimalista para asegurar que el logo sea fácilmente reconocible y funcione bien tanto en dispositivos móviles como en escritorio. El logo refleja el propósito de la marca: ayudar a las empresas a evolucionar en el ámbito digital.

### Fuentes

Las fuentes utilizadas en el proyecto también tienen un propósito específico:

- **Fuente Primaria (`font-body-m`)**: Se ha seleccionado una tipografía moderna y limpia que facilita la lectura en dispositivos de cualquier tamaño. La fuente es versátil, proporcionando una sensación de accesibilidad y claridad.
- **Fuente Secundaria (`font-bold`)**: Para los textos más destacados, como los botones y los títulos, se eligió una fuente en negrita para garantizar que el usuario pueda identificar rápidamente los elementos importantes en la interfaz.

Las fuentes fueron elegidas para mantener la coherencia visual con los valores de la marca y garantizar que la experiencia del usuario sea fluida, clara y atractiva.

En resumen, los colores, el logo y las fuentes han sido cuidadosamente seleccionados para crear una experiencia visual que refleje la misión de **EvolucionaX**: ser una empresa dinámica, confiable e innovadora, lista para ayudar a las marcas a evolucionar y crecer en el mundo digital.

Para obtener más detalles sobre el diseño visual, los wireframes y los componentes utilizados en este proyecto, puedes acceder al sistema de diseño completo en Figma. Allí encontrarás todos los elementos gráficos, las paletas de colores, los componentes y las interacciones que hemos diseñado para este proyecto.

Accede al [Sistema de Diseño en Figma](https://www.figma.com/design/AiOuO7rcsDgk0U0Ae2N05d/EvolucionaX?node-id=51-87&t=Npq53P5rzmFUeZ8k-1) para explorar los detalles visuales y los componentes que forman parte de la interfaz de usuario de EvolucionaX.

