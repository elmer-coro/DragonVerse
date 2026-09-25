# 🐉 DragonVerse

> Aplicación web para explorar personajes y planetas del universo **Dragon Ball**, desarrollada con Astro, Tailwind CSS y JavaScript utilizando una API externa.

![DragonVerse](https://img.shields.io/badge/DragonDex-Dragon%20Ball-orange)
![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?logo=astro)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.x-06B6D4?logo=tailwindcss)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript)

---

## 📖 Descripción

**DragonVerse** es una aplicación web inspirada en el universo de Dragon Ball.

El proyecto consume información desde una API externa para mostrar de manera organizada y responsive:

* 👤 Personajes
* ⚡ Transformaciones
* 🌎 Planetas
* 🔎 Búsqueda
* 📄 Paginación
* 🔗 Relaciones entre personajes y planetas
* 📋 Información detallada de cada elemento

El objetivo del proyecto es practicar y aplicar conceptos de desarrollo web moderno, consumo de APIs REST, componentes reutilizables y diseño responsive.

---

## ✨ Características

### 🏠 Dashboard

La página principal muestra:

* Resumen de personajes disponibles.
* Cantidad de planetas.
* Cantidad de transformaciones.
* Personajes destacados.
* Accesos rápidos a las diferentes secciones.

### 👤 Personajes

Permite:

* Visualizar personajes.
* Buscar personajes por nombre.
* Navegar mediante paginación.
* Consultar información detallada.
* Ver raza, género, Ki y afiliación.
* Visualizar transformaciones.
* Acceder a la información relacionada.

### 🌎 Planetas

Permite:

* Visualizar planetas.
* Buscar planetas por nombre.
* Navegar mediante paginación.
* Consultar información detallada.
* Ver si un planeta está activo o destruido.
* Visualizar los personajes asociados al planeta.

### 📱 Diseño responsive

La interfaz está diseñada para adaptarse a:

* 📱 Móviles
* 📲 Tablets
* 💻 Laptops
* 🖥️ Monitores de escritorio

---

## 🛠️ Tecnologías utilizadas

| Tecnología                               | Uso                      |
| ---------------------------------------- | ------------------------ |
| [Astro](https://astro.build/)            | Framework principal      |
| [Tailwind CSS](https://tailwindcss.com/) | Diseño y estilos         |
| JavaScript                               | Lógica de la aplicación  |
| REST API                                 | Obtención de información |
| HTML5                                    | Estructura               |
| CSS3                                     | Estilos y responsive     |
| Git                                      | Control de versiones     |
| GitHub                                   | Repositorio              |

---

## 🔌 API

DragonVerse utiliza la API:

**Dragon Ball API**

```text
https://dragonball-api.com/api
```

### Recursos utilizados

#### Personajes

```http
GET /characters
```

```http
GET /characters/{id}
```

#### Planetas

```http
GET /planets
```

```http
GET /planets/{id}
```

La API proporciona información como:

* Nombre
* Imagen
* Raza
* Género
* Ki
* Ki máximo
* Afiliación
* Descripción
* Transformaciones
* Planeta de origen
* Personajes relacionados

---

## 📂 Estructura del proyecto

```text
DragonVerse/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── CharacterCard.astro
│   │   ├── CharacterGrid.astro
│   │   ├── Navbar.astro
│   │   ├── PlanetCard.astro
│   │   └── SearchBar.astro
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   │
│   │   ├── characters/
│   │   │   ├── index.astro
│   │   │   └── [id].astro
│   │   │
│   │   └── planets/
│   │       ├── index.astro
│   │       └── [id].astro
│   │
│   ├── services/
│   │   └── dragonball.js
│   │
│   └── styles/
│       └── global.css
│
├── .gitignore
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
├── README.md
└── tsconfig.json
```

---

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/elmer-coro/dragonverse.git
```

### 2. Entrar al proyecto

```bash
cd dragonverse
```

### 3. Instalar dependencias

El proyecto utiliza `pnpm`.

```bash
pnpm install
```

También puedes utilizar npm si lo necesitas:

```bash
npm install
```

### 4. Iniciar el servidor de desarrollo

Con pnpm:

```bash
pnpm dev
```

O con npm:

```bash
npm run dev
```

La aplicación estará disponible normalmente en:

```text
http://localhost:4321
```

---

## 🧑‍💻 Desarrollo

Para trabajar en modo desarrollo:

```bash
pnpm dev
```

Para generar la versión de producción:

```bash
pnpm build
```

Para comprobar la versión generada:

```bash
pnpm preview
```

---

## 🎨 Diseño

DragonVerse utiliza una interfaz inspirada en la estética de Dragon Ball:

* 🌑 Fondo oscuro.
* 🟠 Color naranja como color principal.
* 🐉 Elementos visuales inspirados en Dragon Ball.
* 🃏 Tarjetas con efectos hover.
* ✨ Gradientes y efectos de iluminación.
* 📱 Diseño responsive.

---

## 🧩 Componentes reutilizables

Uno de los objetivos del proyecto es evitar código duplicado.

Por ejemplo, `SearchBar.astro` puede utilizarse tanto para personajes como para planetas:

```astro
<SearchBar
  name={name}
  action="/characters"
  label="Buscar personaje"
  placeholder="Escribe el nombre del personaje..."
/>
```

Y para planetas:

```astro
<SearchBar
  name={name}
  action="/planets"
  label="Buscar planeta"
  placeholder="Escribe el nombre del planeta..."
/>
```

Esto permite mantener una interfaz consistente y facilitar futuras modificaciones.

---

## 📌 Estado del proyecto

🚧 **En desarrollo**

Actualmente DragonVerse cuenta con:

* [x] Dashboard principal
* [x] Navbar responsive
* [x] Listado de personajes
* [x] Búsqueda de personajes
* [x] Paginación de personajes
* [x] Detalle de personaje
* [x] Transformaciones de personajes
* [x] Listado de planetas
* [x] Búsqueda de planetas
* [x] Paginación de planetas
* [x] Detalle de planeta
* [x] Personajes relacionados con planetas
* [x] Componentes reutilizables
* [x] Diseño responsive
* [ ] Mejorar sección de transformaciones
* [ ] Estados de carga y errores
* [ ] Animaciones adicionales
* [ ] Optimización para producción
* [ ] Deployment

---

## 🗺️ Roadmap

Las próximas mejoras previstas son:

1. ⚡ Mejorar la sección de transformaciones.
2. 🧩 Crear más componentes reutilizables.
3. 🛡️ Agregar estados de error y carga.
4. 📱 Optimizar completamente la experiencia responsive.
5. ✨ Añadir animaciones y microinteracciones.
6. 🔎 Mejorar las opciones de búsqueda y filtrado.
7. 🚀 Preparar la aplicación para producción.
8. 🌐 Publicar DragonDex.

---

## 📚 Objetivo del proyecto

Este proyecto forma parte de mi aprendizaje y práctica en desarrollo web moderno.

Con DragonVerse estoy trabajando conceptos como:

* Consumo de APIs REST.
* Fetch y manejo de respuestas JSON.
* Routing dinámico con Astro.
* Componentes reutilizables.
* Renderizado dinámico.
* Parámetros de URL.
* Búsqueda y paginación.
* Diseño responsive.
* Tailwind CSS.
* Organización de proyectos.
* Git y GitHub.

---

## 👨‍💻 Autor

**Elmer Coro Huaman**

Proyecto personal desarrollado con fines de aprendizaje y práctica de desarrollo web.

---

## ⚠️ Aviso

DragonVerse es un proyecto de práctica y no está afiliado oficialmente con **Dragon Ball**, **Toei Animation**, **Shueisha** ni otras entidades relacionadas con la franquicia.

Los datos utilizados por la aplicación son obtenidos mediante una API externa.

---

⭐ Si este proyecto te resulta interesante, puedes darle una estrella al repositorio.
