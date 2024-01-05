migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("93zhayhzxsw5p1d")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "joalkb04",
    "name": "stocked",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("93zhayhzxsw5p1d")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "joalkb04",
    "name": "stoked",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
