import QuestaoModel from '@/models/questao'
import Questao from '@/components/Questao'
import Botao from '@/components/Botao'
import styles from '@/styles/Questionario.module.css'

interface QuestionarioProps {
    questao: QuestaoModel
    ultima: boolean
    questaoRespondida: (questao: QuestaoModel) => void
    irPraProximoPasso: () => void
}

export default function Questionario(props: QuestionarioProps) {
    function respostaFornecida(indice: number) {
        if (!props.questao.respondida) {
            props.questaoRespondida(props.questao.responderCom(indice))
        }
    }

    return (
        <div className={styles.questionario}>
            {props.questao ? 
                <Questao
                    valor={props.questao}
                    tempoParaResposta={6}
                    respostaFornecida={respostaFornecida}
                    tempoEsgotado={props.irPraProximoPasso}
                    />
                : false
            }

            <Botao 
                onClick={props.irPraProximoPasso}
                texto={props.ultima ? 'Finalizar' : 'Próxima'}
                />
        </div>
    )
}