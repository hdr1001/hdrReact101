"use strict"

document.addEventListener('DOMContentLoaded', () => {
   const divVanillaJs = document.getElementById('vanillaJs');
   
   const strTn = 'Vanilla Javascript can be used to manipulate the DOM.';

   if(divVanillaJs) {
      const p = document.createElement('p');
      const textNode = document.createTextNode(strTn);

      p.appendChild(textNode);
      divVanillaJs.appendChild(p);
   }
});
