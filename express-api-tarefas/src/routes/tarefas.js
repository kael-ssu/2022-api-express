let tarefas = [
	{
		id: 1,
		title: "Criar a infraestrutura do projeto da API Restful",
		state: 1,
	},
	{
		id: 2,
		title: "Criar a rota root /api",
		state: 1,
	},
	{
		id: 3,
		title: "Criar a rota tarefas /api/tarefas",
		state: 0,
	},
	{
		id: 4,
		title: "Criar a estrutura de usuários e vincular tarefas",
		state: 0,
	},
	{
		id: 5,
		title: "Criar autenticação e autorização",
		state: 0,
	},
];

const handle = (req, res) => res.json({
    status: "OK",
    message: `Rota /api/tarefas com método ${req.method}`,
});

const handle_by_id = (req, res) => {
	let tarefa_id = parseInt(req.params.id);
	let tarefa = tarefas.filter(tarefa => tarefa.id === tarefa_id);
    console.log(tarefa)
	if (tarefa.length === 0) {
		res.json({
			status: "NOK",
			message: `Tarefa (${tarefa_id}) não encontrada`,
		});
	} else {
        res.json({
            status: "OK",
            message: `Rota /api/tarefas/:id (${req.params.id})`,
            data: tarefa[0],
        });
    }
};

exports.delete = handle_by_id;
exports.get = (req, res) =>
	res.json({
		status: "OK",
		message: "Tarefas",
		data: tarefas,
	});
exports.get_by_id = handle_by_id;
exports.post = handle;
exports.put = handle_by_id;