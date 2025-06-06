const allBooks = [];

const createBook = () => {
 const title = prompt("Introduce el titulo del libro")

 if(title.length === 0) {
  alert("El titulo no puede estar vacio")
  return;
 }

  const autor = prompt("Introduce el autor del libro")

 if(autor.length === 0 || !isNaN(autor)) {
  alert("El autor no puede estar vacio o ser un numero")
  return;
 }

  const gender = prompt("Introduce el genero del libro")

 if(gender.length === 0 || !isNaN(gender)) {
  alert("El genero no puede estar vacio y no puede ser un numero")
  return;
 }

  const pages = prompt("Introduce el numero de paginas del libro")
  const pagesNumber = parseInt(pages)

 if(pagesNumber <= 0 || isNaN(pagesNumber)) {
  alert("Introduce un numero de paginas valido")
  return;
 }

  const year = prompt("Introduce la fecha del libro")
  const yearNumber = parseInt(year)

 if(yearNumber <= 1400 || isNaN(yearNumber)) {
  alert("Introduce un año valido")
  return;
 }

 const book = {
  title:title,
  autor:autor,
  gender:gender,
  pages:pagesNumber,
  year:yearNumber
 }

 allBooks.push(book)

 alert("Libro creado correctamente")

}

const showAll = () => {
if(allBooks.length === 0 ) {
  alert("La lista esta vacia")
  return
} 

  allBooks.forEach((book) => {
    alert(`El titulo del libro es ${book.title}
      El autor del libro es ${book.autor}
      El genero del libro es ${book.gender}
      El numero de paginas del libro es de ${book.pages}
      El año del libro es ${book.year}`)
  }
)}

const findBookTitle = () => {
  const seachTitle = prompt("Introducce el titulo del libro a buscar")

  const book = allBooks.find(book => book.title === seachTitle)

   if (!book) {
    alert("Libro no encontrado");
    return;
  }

  alert(`El libro buscado es ${book.title}
     El autor del libro es ${book.autor}
     El genero del libro es ${book.gender}
     El numero de paginas del libro es ${book.pages}
     El año del libro es ${book.year}`)
}

const deleteBookTitle = () => {
  const seachTitle = prompt("Introducce El titulo del libro a eliminar")
  const index = allBooks.findIndex(book => book.title === seachTitle)

    if (index == -1) {
    alert("Libro no encontrado");
    return;
  }

  const book = allBooks[index];

  allBooks.splice(index, 1);

   alert(`El libro eliminado era ${book.title}
     El autor del libro era ${book.autor}
     El genero del libro era ${book.gender}
     El numero de paginas del libro era de ${book.pages}
     El año del libro era ${book.year}`)
}

const oldBookRegister = () => {
  if(allBooks.length === 0) {
    alert("No hay libros registrados")
    return;
  }
  const bookOrder = allBooks.slice().sort((a,b) => a.year -  b.year)
  const oldBook = bookOrder[0];

  alert(`El titulo del libro mas antiguo es: ${oldBook.title}
        El autor del libro mas antiguo es: ${oldBook.autor}
        El genero del libro mas antiguo es: ${oldBook.gender}
        El año del libro mas antiguo es:  ${oldBook.year}`)
}

const countBooksGender = () => {
  if (allBooks.length === 0) {
    alert("No hay libros para contar.");
    return;
  }

  const counts = {};

  for (const book of allBooks) {
    const gender = book.gender || "Sin género";

    if (!counts[gender]) {
      counts[gender] = 1;
    } else {
      counts[gender]++;
    }
  }

  let result = "Cantidad de libros por género:\n";
  for (const gender in counts) {
    result += `${gender}: ${counts[gender]}\n`;
  }

  alert(result);
};

const showAveragePages = () => {

  if (allBooks.length === 0) {
    alert("No hay libros para calcular el promedio de páginas.");
    return;
  }

  const totalPages = allBooks.reduce((acumulator, current) => {
    return acumulator + (current.pages);
  }, 0);

  const averagePages = totalPages / allBooks.length;

  alert(`El promedio de páginas es ${averagePages}`);
};

let menu;
let menuNumber;

do {
  menu  = prompt( `-----------------------
           1: Crear libro
           2: mostrar todos los libros
           3: Buscar por titulo
           4: Eliminar libro por titulo
           5: mostar libro mas antiguo registrado
           6: contar libros por genero
           7: mostrar promedio de paginas de libros registrados
           8: salir`)

  menuNumber = parseInt(menu)

     switch(menuNumber) {
      case 1: createBook();
      break;
      case 2: showAll();
      break;
      case 3: findBookTitle();
      break;
      case 4: deleteBookTitle();
      break; 
      case 5: oldBookRegister();
      break;
      case 6: countBooksGender();
      break;
      case 7: showAveragePages();
      break;
      case 8: alert("Saliendo del programa")
      break;
      default: alert("Introducce una opcion valida")
      break;
     }

} while(menuNumber !== 8)