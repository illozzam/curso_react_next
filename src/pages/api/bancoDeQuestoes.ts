import QuestaoModel from "@/models/questao"
import RespostaModel from "@/models/resposta"

const questoes: QuestaoModel[] = [
    new QuestaoModel(
        1,
        'Qual bicho transmite a Doença de Chagas?',
        [
            RespostaModel.errada('Abelha'),
            RespostaModel.errada('Mosca'),
            RespostaModel.errada('Besouro'),
            RespostaModel.certa('Barbeiro'),
        ]
    ),
    new QuestaoModel(
        2,
        'Qual a fruta conhecida no Norte e Nordeste como Jerimum?',
        [
            RespostaModel.errada('Maçã'),
            RespostaModel.errada('Morango'),
            RespostaModel.errada('Caju'),
            RespostaModel.certa('Abóbora'),
        ]
    ),
    new QuestaoModel(
        3,
        'Qual o coletivo de cães?',
        [
            RespostaModel.errada('Manada'),
            RespostaModel.errada('Alcatéia'),
            RespostaModel.errada('Rebanho'),
            RespostaModel.certa('Matilha'),
        ]
    ),
    new QuestaoModel(
        4,
        'Que nome se dá a um triângulo que possui seus 3 lados de tamanhos diferentes?',
        [
            RespostaModel.errada('Equilátero'),
            RespostaModel.errada('Isóceles'),
            RespostaModel.errada('Trapézio'),
            RespostaModel.certa('Escaleno'),
        ]
    )
]

export default questoes