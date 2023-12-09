// export function scrollToSection(targetSection, routeName) {

//   if (routeName == '/') {
//     const section = document.getElementById(targetSection);

//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   } else {
//     window.location.href = `/#${targetSection}`;
//   }
// }

export function scrollToSection(targetSection) {
  console.log('en la funcion');
  const section = document.getElementById(targetSection);

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    console.log('scroll');

  } else {
    // Si el elemento no se encuentra en la página actual, realiza una redirección a la página que contiene el elemento.
    window.location.href = `/#${targetSection}`;
    console.log('directo');
  }
}