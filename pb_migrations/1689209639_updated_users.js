migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4yyvbl132uze82a")

  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4yyvbl132uze82a")

  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
