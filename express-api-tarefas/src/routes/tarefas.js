const handle = (req, res) => res.json({
    status: "OK",
    title: "Rota /api/tarefas ON"
});

exports.post = handle;
exports.get = handle;
exports.put = handle;
exports.delete = handle;