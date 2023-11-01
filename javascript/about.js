let init = document.getElementById('init');
function afficherInfo(initiative) {
    var infos;

    if (initiative === 1) {
        infos = "Projet Vert est notre initiative pour la protection de l'environnement. Nous plantons un arbre pour chaque meuble vendu.";
    } 
    else if (initiative === 2) {
        infos = "Projet Communautaire vise à soutenir les communautés locales. Nous collaborons avec des organisations locales pour créer des opportunités d'emploi et de développement.";
    }

    document.getElementById("info").innerHTML = infos;
    document.getElementById('info').style.background='#f3dda1';
}
