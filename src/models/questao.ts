import { embaralhar } from "@/functions/arrays"
import RespostaModel from "./resposta"

export default class QuestaoModel {
    #id: number
    #enunciado: string
    #respostas: RespostaModel[]
    #acertou: boolean

    constructor (id: number, enunciado: string, respostas: RespostaModel[], acertou: boolean=false) {
        this.#id = id
        this.#enunciado = enunciado
        this.#respostas = respostas
        this.#acertou = acertou
    }

    get id() {
        return this.#id;
    }
    
    get enunciado() {
        return this.#enunciado;
    }
    
    get respostas() {
        return this.#respostas;
    }
    
    get acertou() {
        return this.#acertou;
    }

    get respondida() {
        return this.respostas.reduce((acumulador, resposta) => acumulador || resposta.revelada, false);
      }

    set respostas(resps: RespostaModel[]) {
        this.#respostas = resps
    }

    embaralharRespostas() {
        let respostasEmbaralhadas = embaralhar(this.#respostas)
        return new QuestaoModel(this.#id, this.#enunciado, respostasEmbaralhadas, this.#acertou)
    }

    responderCom(indice: number): QuestaoModel {
        const acertou = this.#respostas[indice]?.certa
        const respostas = this.#respostas.map((resposta, i) => {
            const respostaSelecionada = indice === i
            const deveRevelar = respostaSelecionada || resposta.certa
            return deveRevelar ? resposta.revelar() : resposta
        })
        return new QuestaoModel(this.id, this.enunciado, respostas, acertou)
    }

    static aPartirDoObj(obj: any): QuestaoModel {
        const respostas = obj.respostas.map(resp => RespostaModel.aPartirDoObj(resp))
        return new QuestaoModel(
            obj.id,
            obj.enunciado,
            respostas,
            obj.acertou
        )
    }

    paraObj() {
        return {
            id: this.#id,
            enunciado: this.#enunciado,
            respostas: this.#respostas.map(resposta => resposta.paraObj()),
            acertou: this.#acertou
        }
    }
      
}