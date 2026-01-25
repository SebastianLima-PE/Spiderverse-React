// src/data/spiderData.js

import milesImg from '../assets/images/Miles-Morales.jpg';
import gwenImg from '../assets/images/gwen-stacy.jpg';
import miguelImg from '../assets/images/MiguelO-Hara.jpg';
import PeterBImg from '../assets/images/PeterB-Parker.jpg';
import PunkImg from '../assets/images/Hobart-Brown.jpg';
import PeniImg from '../assets/images/Peni-Parker.jpg';
import MayImg from '../assets/images/May.jpg';
import PavitrImg from '../assets/images/Pavitr-Prabhakar.jpg';

export const SPIDER_TIMELINE = [
  {
    era: "Trilogía de Sam Raimi (Tobey Maguire)",
    movies: [
      { 
        year: "2002", 
        title: "Spider-Man", 
        desc: "La película oficial de Marvel que conquistó corazones en todo el mundo.",
        director: "Sam Raimi",
        rating: 5,
        synopsis: "Peter Parker es un estudiante tímido que vive con su tío Ben y su tía May. Un día, durante una excursión escolar, es mordido por una araña genéticamente modificada. Al poco tiempo, desarrolla poderes sobrenaturales: fuerza colosal, capacidad para trepar paredes y un 'sentido arácnido'. Tras la trágica muerte de su tío, Peter decide usar sus poderes para combatir el crimen como Spider-Man.",
        cast: ["Tobey Maguire", "Willem Dafoe", "Kirsten Dunst", "James Franco"],
        trivia: [
          "Primera película de Spider-Man en imagen real",
          "Recaudó más de $821 millones en taquilla mundial",
          "La escena del beso bajo la lluvia se convirtió en icónica"
        ]
      },
      { 
        year: "2004", 
        title: "Spider-Man 2", 
        desc: "Considerada una de las mejores películas de superhéroes de todos los tiempos.",
        director: "Sam Raimi",
        rating: 5,
        synopsis: "Peter Parker lucha por equilibrar su vida como estudiante universitario y como Spider-Man. Cuando el brillante científico Otto Octavius se convierte en el villano Doctor Octopus tras un experimento fallido, Peter debe enfrentarlo mientras cuestiona si puede seguir siendo el héroe que la ciudad necesita.",
        cast: ["Tobey Maguire", "Alfred Molina", "Kirsten Dunst", "James Franco"],
        trivia: [
          "Ganó el Óscar a Mejores Efectos Visuales",
          "La escena del tren es considerada una de las mejores en cine de superhéroes",
          "Alfred Molina improvisó varias líneas de Doctor Octopus"
        ]
      },
      { 
        year: "2007", 
        title: "Spider-Man 3", 
        desc: "La última entrega de esta exitosa saga que cierra la historia de Peter Parker.",
        director: "Sam Raimi",
        rating: 3,
        synopsis: "Peter Parker planea proponerle matrimonio a Mary Jane cuando un simbionte alienígena se adhiere a su traje, amplificando sus poderes pero también su lado oscuro. Mientras tanto, debe enfrentarse a Sandman y a su mejor amigo Harry Osborn, quien busca venganza.",
        cast: ["Tobey Maguire", "Thomas Haden Church", "Topher Grace", "Kirsten Dunst"],
        trivia: [
          "La escena de baile de Peter se volvió un meme viral",
          "Fue la película más cara de la trilogía con $258 millones",
          "Venom casi no aparece en la película original"
        ]
      }
    ]
  },
  {
    era: "The Amazing Spider-Man (Andrew Garfield)",
    movies: [
      { 
        year: "2012", 
        title: "The Amazing Spider-Man", 
        desc: "Una muy buena película con una interpretación fresca del héroe.",
        director: "Marc Webb",
        rating: 4,
        synopsis: "Peter Parker investiga la misteriosa desaparición de sus padres mientras explora su nueva identidad como Spider-Man. Su búsqueda lo lleva a Oscorp y al Dr. Curt Connors, cuyo experimento fallido lo transforma en el peligroso Lagarto.",
        cast: ["Andrew Garfield", "Emma Stone", "Rhys Ifans", "Denis Leary"],
        trivia: [
          "Primera película en mostrar los lanzaredes mecánicos",
          "Andrew Garfield hizo muchas de sus propias acrobacias",
          "La química entre Garfield y Stone era real, se enamoraron en el set"
        ]
      },
      { 
        year: "2014", 
        title: "The Amazing Spider-Man 2: Rise of Electro", 
        desc: "Peter enfrenta a Electro en esta entrega cargada de acción.",
        director: "Marc Webb",
        rating: 3,
        synopsis: "Peter Parker se enfrenta a una nueva amenaza: Electro, un antiguo empleado de Oscorp que ganó poderes eléctricos. Al mismo tiempo, su amigo Harry Osborn regresa y descubre un oscuro secreto familiar que amenaza con destruir todo.",
        cast: ["Andrew Garfield", "Emma Stone", "Jamie Foxx", "Dane DeHaan"],
        trivia: [
          "La muerte de Gwen Stacy fue uno de los momentos más emotivos",
          "Se planearon spin-offs que nunca se realizaron",
          "Hans Zimmer compuso la icónica música de Electro"
        ]
      }
    ]
  },
  {
    era: "Universo Cinematográfico de Marvel (Tom Holland)",
    movies: [
      { 
        year: "2017", 
        title: "Spider-Man: Homecoming", 
        desc: "El esperado reinicio que integra a Spidey en el universo de los Avengers.",
        director: "Jon Watts",
        rating: 5,
        synopsis: "Después de ayudar a Tony Stark en Civil War, Peter Parker regresa a casa donde intenta equilibrar su vida como estudiante de preparatoria con sus responsabilidades como Spider-Man. Cuando el Buitre emerge como un nuevo villano, Peter debe demostrar que es más que solo el traje.",
        cast: ["Tom Holland", "Michael Keaton", "Zendaya", "Robert Downey Jr."],
        trivia: [
          "Primera película de Spider-Man producida por Marvel Studios",
          "Tom Holland tenía 19 años durante el rodaje",
          "Michael Keaton interpretó a Batman y ahora al Buitre"
        ]
      },
      { 
        year: "2019", 
        title: "Spider-Man: Lejos de Casa", 
        desc: "Una aventura internacional tras los eventos de Endgame.",
        director: "Jon Watts",
        rating: 4,
        synopsis: "Peter Parker intenta tomarse unas vacaciones en Europa, pero Nick Fury lo recluta para enfrentarse a Mysterio y las amenazas Elementales. Peter debe decidir si responder al llamado del deber o disfrutar de su viaje escolar con sus amigos.",
        cast: ["Tom Holland", "Jake Gyllenhaal", "Zendaya", "Samuel L. Jackson"],
        trivia: [
          "Primera película del MCU después de Avengers: Endgame",
          "La escena post-créditos cambió todo para Spider-Man",
          "Filmada en múltiples países europeos"
        ]
      },
      { 
        year: "2021", 
        title: "Spider-Man: Sin Camino a Casa", 
        desc: "La obra que continúa el legado reuniendo a diversas generaciones del héroe.",
        director: "Jon Watts",
        rating: 5,
        synopsis: "Después de que Mysterio revelara su identidad, Peter recurre al Doctor Strange para borrar el conocimiento público. El hechizo sale mal, abriendo el multiverso y trayendo villanos de otras realidades. Peter debe encontrar una forma de enviarlos de regreso antes de que destruyan su mundo.",
        cast: ["Tom Holland", "Zendaya", "Benedict Cumberbatch", "Tobey Maguire", "Andrew Garfield"],
        trivia: [
          "Reunió a los tres Spider-Man de acción real",
          "Recaudó más de $1.9 mil millones en taquilla",
          "Los actores mantuvieron el secreto de las apariciones durante meses"
        ]
      }
    ]
  },
  {
    era: "Saga Animada del Spider-Verse (Miles Morales)",
    movies: [
      { 
        year: "2018", 
        title: "Spider-Man: Un Nuevo Universo", 
        desc: "Una obra maestra animada que explora la diversa gama de Spidermans.",
        director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
        rating: 5,
        synopsis: "Miles Morales se convierte en Spider-Man y descubre que no es el único: el colisionador de Kingpin abre portales a otras dimensiones, trayendo a diferentes versiones de Spider-Man. Juntos deben detener a Kingpin y encontrar la manera de regresar a sus universos.",
        cast: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld", "Mahershala Ali"],
        trivia: [
          "Ganó el Óscar a Mejor Película Animada",
          "Revolucionó la animación con su estilo único",
          "Cada Spider-Person tiene su propia tasa de fotogramas"
        ]
      },
      { 
        year: "2023", 
        title: "Spider-Man: A través del Spider-Verso", 
        desc: "Todo un equipo de héroes arácnidos encargados de proteger la existencia misma del Multiverso.",
        director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
        rating: 5,
        synopsis: "Miles Morales regresa para una aventura épica que lo transportará a través del Multiverso para unirse con Gwen Stacy y un nuevo equipo de Spider-People. Juntos enfrentan a un villano más poderoso que cualquiera que hayan encontrado antes, mientras Miles descubre que proteger a quienes ama puede significar romper las reglas del Spider-Verso.",
        cast: ["Shameik Moore", "Hailee Steinfeld", "Oscar Isaac", "Jake Johnson", "Issa Rae"],
        trivia: [
          "Presenta más de 280 personajes únicos del Spider-Verso",
          "Tiene 6 estilos de animación diferentes dependiendo del universo",
          "La producción tardó 5 años en completarse",
          "Cada cuadro fue pintado a mano digitalmente",
          "Miguel O'Hara (Spider-Man 2099) lidera la Spider-Society"
        ]
      }
    ]
  }
];

export const SPIDER_PEOPLE = [
  {
    id: 1,
    name: "Miles Morales",
    image: milesImg,
    description: "Un joven héroe de Brooklyn que redefine el significado de llevar la máscara."
  },
  {
    id: 2,
    name: "Gwen Stacy",
    image: gwenImg,
    description: "La Spider-Woman de la Tierra-65, experta en combate y aliada inseparable."
  },
  {
    id: 3,
    name: "Miguel O'Hara",
    image: miguelImg,
    description: "Spider-Man 2099, el imponente líder de la Spider-Society."
  },
  {
    id: 4,
    name: "Peter B. Parker",
    image: PeterBImg,
    description: "Un Spider-Man experimentado y mentor de Miles en el multiverso."
  },
  {
    id: 5,
    name: "Spider-Punk",
    image: PunkImg,
    description: "Hobie Brown, el rebelde anarquista del universo punk rock."
  },
  {
    id: 6,
    name: "Peni Parker",
    image: PeniImg,
    description: "Joven piloto de un robot araña del futuro alternativo."
  },
  {
    id: 7,
    name: "Tia May",
    image: MayImg,
    description: "La tía de Peter Parker que tiene un rol importante en su vida."
  },
  {
    id: 8,
    name: "Pavitr Prabhakar",
    image: PavitrImg,
    description: "Pavitr Prabhakar, el arácnido de la India."
  }
];