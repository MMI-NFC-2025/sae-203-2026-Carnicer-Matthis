/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_306139441")

  // remove field
  collection.fields.removeById("geoPoint3218329231")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_306139441")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "geoPoint3218329231",
    "name": "localisation",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "geoPoint"
  }))

  return app.save(collection)
})
