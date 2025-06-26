import { Personagem } from './Personagem'

export class Guerreiro extends Personagem {
    constructor(
        nome: string,
        forca: number,
        esquiva: number,
        resistencia: number,
        vidaMaxima: number
    )
    {

        if (forca < 1 || forca > 1000){
            throw new Error("Força do Guerreiro deve ser entre 1 e 1000")
        }

        if (esquiva < 0 || esquiva > 50 ){
            throw new Error("Esquiva do Guerreiro deve ser entre 0 e 50.")
        }

        if (resistencia < 0 || resistencia > 90) {
            throw new Error("Resistência do Guerreiro deve ser entre 0 e 90.")
        }

        if (vidaMaxima < 1 || vidaMaxima > 40000){
            throw new Error("Vida máxima do Guerreiro deve ser entre 1 e 40000")
        }

        super(
            `${nome} Warrior `,
            forca,
            0,
            forca * 10,
            esquiva,
            resistencia,
            vidaMaxima,
            vidaMaxima
        )
        this._forca = forca
        this._poderDeAtaque = forca * 10
    }
}