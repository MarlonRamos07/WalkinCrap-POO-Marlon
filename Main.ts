import { Personagem } from './Personagem' 
import { Padre } from './Priest'
import { Guerreiro } from './Warrior'
import { Random } from './Random'
import prompt from 'prompt-sync'


const entrada = prompt()

// Espera o usuário teclar Enter para continuar
function esperarEnter(): void {
    entrada("Tecle Enter para rodar o próximo round\n")
}

// Mostra no console o status dos personagens que ainda estão vivos
function exibirStatusPersonagens(personagens: Personagem[]): void { // Aqui a função recebe uma lista de personagens
    const vivos = personagens.filter(p => p.vida > 0) // Essa linha cria uma nova lista chamada ' vivos ' que vai ter apenas os personagens que a vida seja maior que 0 
    if (vivos.length === 0){ //Se essa lista de vivos estiver vazia significa que todos morreram.
        console.log("===== Todos os personagens foram derrotados! =====")
    } else {
        console.log(`===== Personagens vivos (${vivos.length}) =====`)
        vivos.forEach(p =>{ // forEach vai percorrer cada personagem dentro dessa lista "vivos " e exibir essas informações no console
            console.log(`${p.nome}: ${p.vida.toFixed(0)} / ${p.vidaMaxima.toFixed(0)}`)
        })
    }
}

// Função principal que executa a batalha
async function iniciarBatalha(participantes: Personagem[]): Promise<void> { //Recebe uma lista de personagens que vão batalhar 
    
    // Esse if vai impedir a batalha de começar se a batalha tiver menos de dois participantes
    if (participantes.length < 2) {
        console.log("É necessário ao menos 2 personagens para que se tenha uma batalha");
        return;
    }

    let round = 1; // Começa no Round 1 ( pra contar os turnos)
    let personagensVivos = participantes.filter(p => p.vida > 0); // Aqui criei uma variável let que vai usar o filter para exibir apenas os personagens vivos

    console.log("\n--- Batalha Iniciada!! ---");
    exibirStatusPersonagens(personagensVivos); // É chamada a função de exibirStatus Criada lá em cima que recebe como parâmetro essa variável que acabei de criar 

    // Roda os rounds enquanto houver mais de um personagem vivo
    while (personagensVivos.length > 1) {
        console.log(`\n--- Round ${round} ---`);
        esperarEnter(); // Aqui chama a função de esperar enter pra cada round. 

        let atacante: Personagem;
        let defensor: Personagem;

        // Seleciona dois personagens aleatórios diferentes e também garante que não ataque a si mesmo por causa do -1
        do {
            atacante = personagensVivos[Random.randomizar(0, personagensVivos.length - 1)];
            defensor = personagensVivos[Random.randomizar(0, personagensVivos.length - 1)];
        } while (atacante === defensor);

        console.log(`${atacante.nome} ataca ${defensor.nome}!`);

        try {
            // Se o atacante for Padre, pode tentar converter o inimigo
            if (atacante instanceof Padre) {
                const converteu = atacante.atacar(defensor);
                if (converteu) { // Aqui se a const converteu for true, encerra a batalha e vence.
                    console.log(`Batalha encerrada! ${atacante.nome} venceu convertendo o oponente ${defensor.nome}`);
                    personagensVivos = [atacante]; // Só o vencedor é mostrado no final.
                    break;
                }
            } else {
                // Já se for guerreiro..
                atacante.atacar(defensor); // Usa o poder de ataque do personagem
            }

            // Se o defensor ainda estiver vivo, faz o contra-ataque
            if (defensor.vida > 0) {
                console.log(`${defensor.nome} contra-ataca ${atacante.nome}!`);

                if (defensor instanceof Padre) {
                    // Padre pode tentar converter no contra-ataque
                    const converteuNoContraAtaque = defensor.contraAtacar(atacante);
                    if (converteuNoContraAtaque) {
                        console.log(`Batalha encerrada! ${defensor.nome} venceu convertendo ${atacante.nome}.`);
                        personagensVivos = [defensor];
                        break;
                    }
                } else {
                    // Contra-ataque comum do guerreiro
                    defensor.contraAtacar(atacante);
                }
            }
        } catch (e: any) { // Captura qualquer erro que ocorrer dentro do Try, o e:any significa que esse erro pode ser de qualquer tipo ( string, objeto, etc) 
            console.log(`[Batalha Info] ${e.message}`); // Exibe o erro, se houver.
        }

        // Atualiza a lista de personagens vivos
        personagensVivos = participantes.filter(p => p.vida > 0);

        // Exibe status atualizado
        exibirStatusPersonagens(personagensVivos);
        round++;
    }

    // Final da batalha
    console.log("\n--- Batalha Encerrada! ---");
    if (personagensVivos.length === 1) {
        console.log(`O vencedor foi ${personagensVivos[0].nome}!`);
    } else {
        console.log("Nenhum vencedor claro. Todos foram derrotados ou a batalha foi interrompida.");
    }
}

// ==============================================================================================================
// Criando personagens ( O objetivo geral daqui é permitir que o usuário crie o seu personagem e inicie uma batalha, sendo que já crio por padrão um guerreiro chamado Ragnar pra garantir que essa lista nunca fique vazia e ocorra algum erro)
// ==============================================================================================================

// Lista com todos os personagens inseridos pelo usuário
const personagensDoUsuario: Personagem[] = [];

// Adiciona o personagem padrão mencionado acima
personagensDoUsuario.push(new Guerreiro("Ragnar", 900, 30, 70, 10000));
console.log("Personagem padrão 'Ragnar Warrior' adicionado.");

// Loop para o usuário inserir novos personagens
while (true) {
    const inserirPerson = entrada("Deseja inserir um novo personagem? (s/n) ").toLowerCase(); // Validação de Lower Case para que não haja nenhum problema digitar GUERREIRO ou PADRE

    if (inserirPerson === "s") {
        const nomePerson = entrada("Digite o nome do personagem: ");
        let tipoPerson: string;

        // Validação do tipo de personagem ( garante que o usuário vai digitar um tipo válido antes de continuar)
        do {
            tipoPerson = entrada("Digite o tipo do personagem (guerreiro/padre): ").toLowerCase();
            if (tipoPerson !== "guerreiro" && tipoPerson !== "padre") {
                console.log("Tipo de personagem inválido. Por favor, digite 'guerreiro' ou 'padre'.");
            }
        } while (tipoPerson !== "guerreiro" && tipoPerson !== "padre");

        try {
            if (tipoPerson === "guerreiro") {
                // Aqui são gerados atributos aleatórios (e válidos) para um guerreiro, e ele depois vai para a lista 
                const forcaPerson = Random.randomizar(1, 1000);
                const esquivaPerson = Random.randomizar(0, 50);
                const resistenciaPerson = Random.randomizar(0, 90);
                const vidaMaximaPerson = Random.randomizar(1, 40000);

                personagensDoUsuario.push(new Guerreiro(
                    nomePerson,
                    forcaPerson,
                    esquivaPerson,
                    resistenciaPerson,
                    vidaMaximaPerson
                ));
                console.log(`${nomePerson} Warrior criado com sucesso!`);

            } else if (tipoPerson === "padre") {
                // Gera a vida do Padre dentro dos limites estipulados 
                const vidaMaximaPadre = Random.randomizar(1, 8000);
                personagensDoUsuario.push(new Padre(nomePerson, vidaMaximaPadre));
                console.log(`${nomePerson} Priest criado com sucesso!`);
            }
        } catch (e: any) { // Mesma coisa, captura erros de qualquer tipo e exibe.
            console.error(`Erro ao criar personagem: ${e.message}`);
        }
    } else {
        break; // Sai do loop se o usuário não quiser adicionar mais personagens
    }
}

// Inicia a batalha com os personagens criados
iniciarBatalha(personagensDoUsuario);
