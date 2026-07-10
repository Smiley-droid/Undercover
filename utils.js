// Fonctions utilitaires partagées + état global de l'application (setup, game, screen).


/* ---------------------------------------------------------
   ÉTAT
--------------------------------------------------------- */
let setup = {
  count: 6,
  names: ["","","","","",""],
  undercoverCount: 1,
  mrWhite: false,
  detective: false,
  jester: false,
  lovers: false,
  protector: false,
  avenger: false,
  wordSource: "random", // "random" | "custom"
  categories: Object.keys(WORD_CATEGORIES), // catégories sélectionnées pour le tirage aléatoire
  customCivil: "",
  customUndercover: "",
};

let game = null; // objet de partie une fois lancée
let screen = "setup"; // "setup" | "game"

/* ---------------------------------------------------------
   UTILITAIRES
--------------------------------------------------------- */
function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}
function normalize(str){
  return (str||"").toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
}
function el(html){
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstChild;
}
function render(){
  const app = document.getElementById('app');
  app.innerHTML = "";
  app.appendChild(screen === "setup" ? renderSetup() : renderGame());
}
