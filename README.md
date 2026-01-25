# 🕷️ Spider-Verse Landing Page

Una landing page interactiva e inmersiva dedicada al universo cinematográfico de Spider-Man, desde las películas de Sam Raimi hasta el Spider-Verse animado.

![Spider-Verse Preview](./preview.png)

## ✨ Características

- 🎬 **Loading Screen animado** con logo Spider-Man
- 🎥 **Video backgrounds** inmersivos
- 🎠 **Carrusel de personajes** con auto-rotación
- 📋 **Cronología completa** de todas las películas
- 🃏 **Modales informativos** con detalles de cada película
- 🎨 **Diseño glassmorphism** con efectos modernos
- 📱 **Totalmente responsive** para móviles y tablets
- ⚡ **Animaciones suaves** y transiciones fluidas

## 🚀 Demo en vivo

[Ver Demo](S-06X.github.io/mi-spider-verse) ← Actualiza con tu URL

## 🛠️ Tecnologías utilizadas

- **React** 18+ - Biblioteca de UI
- **Vite** - Build tool y dev server
- **CSS3** - Estilos con variables y animaciones
- **JavaScript ES6+** - Lógica moderna

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/S-06X/mi-spider-verse.git
cd mi-spider-verse
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 🏗️ Build para producción

```bash
npm run build
```

Los archivos optimizados estarán en la carpeta `dist/`

## 📁 Estructura del proyecto

```
mi-spider-verse/
├── public/
│   └── videos/           # Videos de fondo
├── src/
│   ├── assets/
│   │   └── images/       # Imágenes de personajes
│   ├── components/       # Componentes React
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Card.jsx
│   │   ├── CharactersSection.jsx
│   │   ├── MultiverseSection.jsx
│   │   ├── MovieModal.jsx
│   │   ├── LoadingScreen.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── spiderData.js # Datos de películas y personajes
│   ├── App.jsx
│   ├── index.css         # Estilos globales
│   └── main.jsx
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Características principales

### Loading Screen
Pantalla de carga temática con animación de logo Spider-Man y barra de progreso.

### Carrusel de Personajes
- Auto-rotación cada 3 segundos
- Navegación manual con flechas
- Indicadores de posición (dots)
- 8 personajes del Spider-Verse

### Cronología Interactiva
- Timeline completa de todas las sagas
- Modales con información detallada
- Sinopsis, reparto y curiosidades

### Video Backgrounds
- Hero section con video inmersivo
- Multiverse section con telaraña animada

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es solo con fines educativos y de portafolio. Todas las imágenes y personajes son propiedad de Marvel Characters, Inc. y Sony Pictures.

## 👨‍💻 Autor

**Sebastian PL**

- GitHub: [@S-06X](https://github.com/S-06X)

## 🙏 Agradecimientos

- Marvel Studios por el increíble universo Spider-Man
- Sony Pictures Animation por las películas del Spider-Verse
- Comunidad de React por las herramientas y recursos

---

⭐ Si te gustó este proyecto, dale una estrella en GitHub!