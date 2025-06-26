import { Personagem } from './Personagem'

export class Padre extends Personagem{

    constructor(
        nome: string,
        vidaMaxima: number
    )
    {

        if( vidaMaxima < 1 || vidaMaxima > 8000) {
            throw new Error("Vida Máxima do Padre deve ser entre 1 e 8000")
        }



     super(
        `${nome} Priest`,
        0,
        0,
        0,
        0,
        0,
        vidaMaxima,
        vidaMaxima
     )
 }


     public atacar(oponente: Personagem): boolean {
        console.log(`${this._nome} tenta converter ${oponente.nome}`)
        const chanceDeConverter = 0.40
        const rolagem = Math.random()

        if(rolagem < chanceDeConverter){
            return true;
        } else {
            return false
        }
     }

     public contraAtacar(oponente: Personagem): boolean {
        return this.atacar(oponente)
     }

     public aprimorarHabilidade(): void {
        throw new Error('Este personagem não pode fazer isso.')
     }

     public recuperarVida(): void {
        const cura = this._vidaMaxima * 0.10 
        this._vida += cura
        if(this._vida > this._vidaMaxima){
            this._vida = this._vidaMaxima
        }
     }
    
     public receberDano(dano: number): void {
        this._vida -= dano
        if(this._vida < 0 ){
            this._vida = 0 
        }
     }

}