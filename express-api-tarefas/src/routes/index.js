const root = require("./root");
const tarefas = require("./tarefas");

module.exports = (app) => {
    app.route("/api")
        .get(root.get)
        .post(root.post)
        .put(root.put)
        .delete(root.delete);

    app.route("/api/tarefas")
        .get(tarefas.get)
        .post(tarefas.post)
        .put(tarefas.put)
        .delete(tarefas.delete);
}