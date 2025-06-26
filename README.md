# Walking in Crap

> **Projeto de Programação Orientada a Objetos com TypeScript**

## 🎯 Objetivo

Este projeto tem como objetivo exercitar os conceitos de **herança**, **polimorfismo**, **encapsulamento** e **boas práticas de programação** orientada a objetos, simulando um sistema de batalha entre personagens de um jogo fictício chamado **Walking in Crap**.

---

## 🕹️ Missão

A empresa **Crap Games** deseja desenvolver um novo jogo. Sua missão é construir a **estrutura de classes** dos personagens do game, utilizando boas práticas de codificação. Os personagens principais do jogo são:

- 🛡️ Guerreiro (`Warrior`)
- ✝️ Padre (`Priest`)

---

## 📌 Estrutura do Projeto

```
.
├── Main.ts
├── Personagem.ts
├── Warrior.ts
├── Priest.ts
├── Random.ts
├── package.json
├── tsconfig.json
└── .gitignore
```

---

## 🧬 Tarefa 0 - Classe Base: `Personagem`

A superclasse `Personagem` serve de base para as demais classes especializadas.

### ✅ Características

- `nome`
- `forca`
- `habilidadeMental`
- `poderDeAtaque`
- `esquiva`
- `resistencia`
- `vidaAtual`
- `vidaMaxima`

### ⚔️ Ações

- `atacar(personagem: Personagem): void`
- `contraAtacar(personagem: Personagem): void`
- `aprimorarHabilidadePrincipal(): void`
- `regenerarVida(): void`

---

## 🛡️ Tarefa 1 e 2 - Classe `Warrior`

### ✅ Características

- `nome`: Deve conter o sufixo `" Warrior"`
- `forca`: entre 1 e 1000
- `habilidadeMental`: sempre 0
- `poderDeAtaque`: forca * 10
- `esquiva`: entre 0 e 50
- `resistencia`: entre 0 e 90 (% de absorção de dano)
- `vidaMaxima`: entre 1 e 40000
- `vidaAtual`

### ⚔️ Ações

- `atacar()`: Ataque com cálculo de chance baseado na esquiva do oponente e redução do dano com base na resistência.
- `contraAtacar()`: Mesmo funcionamento do ataque.
- `aprimorarHabilidadePrincipal()`: Aumenta a força em 10%.
- `regenerarVida()`: Recupera 5% da vida máxima.

---

## ✝️ Tarefa 3 e 4 - Classe `Priest`

### ✅ Características

- `nome`: Deve conter o sufixo `" Priest"`
- `forca`: sempre 0
- `habilidadeMental`: sempre 0
- `poderDeAtaque`: sempre 0
- `esquiva`: sempre 0
- `resistencia`: sempre 0
- `vidaMaxima`: entre 1 e 8000
- `vidaAtual`

### ⚔️ Ações

- `atacar()`: 40% de chance de converter o inimigo (encerra a batalha com vitória).
- `contraAtacar()`: Mesmo funcionamento do ataque.
- `aprimorarHabilidadePrincipal()`: Deve lançar erro `"Este personagem não pode executar esta ação"`.
- `regenerarVida()`: Recupera 10% da vida máxima.

---

## 🎲 Tarefa 5 - Validação

No arquivo `Main.ts`, são criados **N personagens** aleatórios que batalham entre si com lógica definida aleatoriamente (utilizando a classe `Random.ts`).

---

## 💡 Tecnologias Utilizadas

- TypeScript
- Node.js (ambiente de execução)
- POO (Programação Orientada a Objetos)

---

## 🚀 Como Executar

1. Clone o repositório:

```bash
git clone <URL_DO_REPO>
cd walking-in-crap
```

2. Instale as dependências:

```bash
npm install
```

3. Compile o projeto:

```bash
tsc
```

4. Execute o jogo:

```bash
node dist/Main.js
```

---

## 📌 Observações

- O projeto foi desenvolvido como exercício acadêmico.
- Foco total em boas práticas e estruturação OOP.
- Getters e setters foram utilizados conforme a necessidade.

---

## 👨‍💻 Autor

Marlon Ramos da Costa  
Desenvolvedor e Estudante de Análise e Desenvolvimento de Sistemas

[Portfólio](https://portfolio-marlon-umber.vercel.app)
