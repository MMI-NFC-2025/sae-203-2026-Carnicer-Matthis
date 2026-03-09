import { artistesSorted, scenesName, artistesName, artisteID, sceneID, allartistebysceneId, allartistebysceneName, addArtiste, addScene, updateArtiste, updateScene } from './backend.mjs';


 //artistes par date
try {
    const records = await artistesSorted();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}
/*
// scenes par nom 
try {
    const records = await scenesName();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}


//artistes par nom
try {
    const records = await artistesName();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

// info d'un artiste par id
try { 
    const records = await artisteID('98ooe2t4ysjtthz'); 
    console.log(JSON.stringify(records, null, 2)); 
} catch (e) { 
    console.error(e);
}

// info d'une scene par id
try { 
    const records = await sceneID('9ldl3j6nbe04ses'); 
    console.log(JSON.stringify(records, null, 2)); 
} catch (e) { 
    console.error(e);
}

// artistes d'une scene par id de la scene et trié par date
try {
    const records = await allartistebysceneId('l4r9pch7xy3royx');
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

//  artistes d'une scene par nom de la scene et trié par date
try {
    const records = await allartistebysceneName('Reflets Stage');
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

//ajouter un artiste

try {
    const artisteData = {
        "nom": "Matthis Carnicer",
        "genre_musical": "Techno",
        "date_representation": "2026-07-21 20:00:00.000Z",
        "scene": "l4r9pch7xy3royx",
        "description": "Le meilleur artiste du monde",
        "photo_principale": "",
        "galerie_photos": []
    };
    const result = await addArtiste(artisteData);
    console.log("Artiste ajouté avec succès:", result.id);
} catch (e) {
    console.error(e);
}

// ajouter une scene
try {
    const sceneData = {
        "nom": "Izzy Stage",
        "artistes": ["xp82rp53ad28pl0", "e90zacla715ggps"],
        "description" : "scene pour les artistes les plus connus du festival",
}; 
    await addScene(sceneData);
} catch (e) {
    console.error(e);
}

//modifier un artiste
try {
    const data = {
        "nom": "Dis'cover",
        "date_representation": "2026-07-21 19:00:00.000Z",
        "scene": "l4r9pch7xy3royx",
        "description": "Adèpte des ré-interprétations de grands classiques dans des arrangements Soul / Pop.",
    };
    const record = await updateArtiste('98ooe2t4ysjtthz', data);
    console.log("Artiste mis à jour avec succès");
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}


 //modifier une scene
try {
    const data = {
        "nom": "Main Stage",
        "artistes": ["km1ydn444puw9oy", "98ooe2t4ysjtthz"],
        "description": "La scène principale du festival, accueillant les têtes d'affiche et les performances les plus attendues.",
    };
    const record = await updateScene('l4r9pch7xy3royx', data);
    console.log("Scène mise à jour avec succès");
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}
*/