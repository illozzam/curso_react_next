import Questionario from '@/components/Questionario'

import QuestaoModel from '@/models/questao'
import RespostaModel from '@/models/resposta'

import { useState, useEffect } from 'react'

const questaoMock = new QuestaoModel(1, 'Melhor cor?', [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Amarelo'),
  RespostaModel.errada('Azul'),
  RespostaModel.certa('Preto'),
])

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>(questaoMock)

  async function carregarIdsDasQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idsDasQuestoes = await resp.json()
    setIdsDasQuestoes(idsDasQuestoes)
  }

  async function carregarQuestao(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const questaoJson = await resp.json()
    const novaQuestao = QuestaoModel.aPartirDoObj(questaoJson)
    setQuestao(novaQuestao)
  }

  useEffect(() => {
    carregarIdsDasQuestoes()
  }, [])

  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])
  }, [idsDasQuestoes])


  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida)
  }

  function irPraProximoPasso() {

  }

  return (
    <Questionario
      questao={questao}
      ultima={false}
      questaoRespondida={questaoRespondida}
      irPraProximoPasso={irPraProximoPasso}
    />
  )
}
