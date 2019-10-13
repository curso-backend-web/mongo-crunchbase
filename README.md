# Crunchbase Database

![](https://i.imgur.com/FqGd9jz.jpg)

## Introducción

Crearás una aplicación para realizar consultas a la base de datos __crunchbase__

__Crunchbase__ es el lugar de referencia para descubrir tendencias en la industria, inversiones y noticias sobre cientos de miles de compañías de todo el mundo. Está reconocido como la fuente principal de inteligencia empresarial por millones de usuarios, desde _start-ups_ hasta _Fortune 500s_.

## Consultas a Crunchbase

Dentro de la carpeta de _starter-code_ se encuentra el fichero __crunchdatabase__.

## Ejercicio

1. Importa la colección de `companies` en la bd `crunchbase`.
2. Crea un nuevo proyecto node e instala los package: `clear` y `mongodb`
3. Crea un módulo `connect.js` con la conexión a la bd.
4. Importa el módulo `connect.js` en un fichero `main.js` y realiza las siguientes funciones:
   - crea un interface `readLine` sobre los streams `stdin` y `stdout`
   - copia la función:

```javascript
  function printMenu(){
    console.log(`
  0.- Exit
  1.- List by name all companies.
  2.- How many companies are there?
  3.- How many companies were founded in 2004?
  4.- List by name all companies founded in february of 2004.
  5.- List by name all companies founded in the summer of 2004 (april to june) sorted by date.
  6.- What companies have offices in "Barcelona".
  7.- List the 10 companies with more employees sorted ascending (show name and employees).
  8.- Find the company with the name "Facebook"
  9.- How many employees has Facebook?
  10.- List the name of all the products of Facebook
  11.- List the people that are working at Facebook right now (check relationships field)
  12.- How many people are not working anymore at Facebook
  13.- List all the companies where "david-ebersman" has worked.
  14.- List by name the competitors of Facebook
  15.- Names of the companies that has "social-networking" in tag-list (be aware that the value of field is a string check regex operators)
  16.- How many companies that has "social-network" in tag-list and founded between 2002 and 2016 inclusive
  17.- Names and locations of companies that have offices in London
  18.- How many companies that has "social-network" in tag-list and founded between 2002 and 2016 inclusive and has offices in New York
  `);
  }
```

  - Crea la función mainMenu() que será un bucle infinito que se ejecutará hasta que se presione el 0 y termine el programa:

```javascript
      function mainMenu(){
        clear();
        printMenu();
        rl.question('Type an option: ', (option) => {
          switch(option){
            case "1":
              console.log('you typed 1');
              rl.question(`\nType enter to continue: `, (answer) => {mainMenu()});
              break;
            case "2":
              console.log('you typed 2');
              rl.question(`\nType enter to continue: `, (answer) => {mainMenu()});
              break;
            case "0":
              console.log(`👋👋👋👋 😞 \n`);
              db.close((error) => { process.exit(0) });
              break;
            default:
              mainMenu();
              break;
          }
        });
    }

      mainMenu();

    }
  });

  function printMenu(){
  ...
  }
  ```

5. __Ahora construye las queries:__

La primera query quedaría dentro del `case "1":` del switch, entre las líneas `console.log('you typed 1');` y `rl.question('\nType enter to continue: ', (answer) => {mainMenu()});`** 💣


```javascript
db.collection('companies').find({}, {name: 1, _id: 0}).toArray((error, result) => {
  if (error) {
    console.log(error);
    rl.question(`\nType enter to continue: `, (answer) => { mainMenu() });
  } else {
    console.log(result);
    rl.question(`\nType enter to continue: `, (answer) => { mainMenu() });
  }
})
```

Realiza las 17 consultas restantes

## Bonus track

Si estás extra motivad@ aquí tienes tres consultas más:

- Find all the distinct categories

- How many companies mention Google in their overview.

- Find companies founded in 2004 and having 5 or more rounds of funding, calculate the average amount raised.

