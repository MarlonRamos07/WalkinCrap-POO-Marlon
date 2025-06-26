import { Random } from './Random'; 

export class Personagem {
    protected _nome: string;
    protected _forca: number;
    protected _habilidadeMental: number;
    protected _ataque: number; 
    protected _esquiva: number;
    protected _resistencia: number;
    protected _vida: number;
    protected _vidaMaxima: number;
    protected _poderDeAtaque: number; 

    constructor(
        nome: string,
        forca: number,
        habilidadeMental: number,
        ataque: number,
        esquiva: number,
        resistencia: number,
        vida: number,
        vidaMaxima: number
    ) {
        this._nome = nome;
        this._forca = forca;
        this._habilidadeMental = habilidadeMental;
        this._ataque = ataque; 
        this._esquiva = esquiva;
        this._resistencia = resistencia;
        this._vida = vida;
        this._vidaMaxima = vidaMaxima;
        this._poderDeAtaque = ataque; 
    }

    //Ação de Atacar (Implementada aqui para todos os personagens por padrão)
    public atacar(oponente: Personagem): void {
        // Lógica de ataque padrão: calcula um dano baseado no poderDeAtaque
        const danoMinimo = this._poderDeAtaque * 0.5; // Dano Padrão
        const danoMaximo = this._poderDeAtaque * 1.5; // Aqui é como se fosse um dano Crítico

        const danoCausado = Random.randomizar(Math.floor(danoMinimo), Math.ceil(danoMaximo));

        console.log(`${this.nome} ataca ${oponente.nome} causando ${danoCausado.toFixed(0)} de dano.`);
        oponente.receberDano(danoCausado);
    }

    public contraAtacar(oponente: Personagem): void {
        // Contra-ataque é uma versão reduzida do ataque.
        const danoContraAtaque = Random.randomizar(Math.floor(this._poderDeAtaque * 0.2), Math.ceil(this._poderDeAtaque * 0.8));
        console.log(`${this.nome} contra-ataca ${oponente.nome} causando ${danoContraAtaque.toFixed(0)} de dano.`);
        oponente.receberDano(danoContraAtaque);
    }

    public aprimorarHablidade(): void {
        // Função ainda não implementada
        console.log(`${this.nome} tenta aprimorar uma habilidade...`);
    }

    public recuperarVida(): void {
        // Aqui também não pensei nada
        console.log(`${this.nome} tenta recuperar vida...`);
    }

    public receberDano(dano: number): void {
        this._vida -= dano; 
        if (this._vida < 0) {
            this._vida = 0;
        }
        console.log(`${this.nome} recebeu ${dano.toFixed(0)} de dano. Vida atual: ${this._vida.toFixed(0)}/${this._vidaMaxima.toFixed(0)}`);
        if (this._vida === 0) {
            console.log(`${this.nome} foi derrotado.`);
        }
    }

    public get nome(): string { return this._nome; }
    public get forca(): number { return this._forca; }
    public get habilidadeMental(): number { return this._habilidadeMental; }
    public get ataque(): number { return this._ataque; }
    public get esquiva(): number { return this._esquiva; }
    public get resistencia(): number { return this._resistencia; }
    public get vida(): number { return this._vida; }
    public get vidaMaxima(): number { return this._vidaMaxima; }
}