React

## 08/03/2024

# Render Patterns
- SPA: Single Page Application
- SSR: Server Side Render

# Bundlers & Compilers
- Compilers: Babel
- Bundlers: webpack, Hoje em dia a maioria dos browsers já aceitam o es modules
- Vite: tem o próprio Compiler e Bundler

# DOM
- Document Object Model

# Component
- Desacoplar um pedaço da interface, que pode ser repetida varias vezes
- Função que retorna HTML
- JSX = Javascript + XML

# Propriedades
- Informações que posso passar para dentro do componente

# Img
- Não colocar ALT em imagens que você não sabe o conteúdo

# CSS3
- object-fit: cover; Deixa a imagem com qualidade centralizada mas corta as bordas
- SEMPRE usar REM, por que é a medida para o usuário baseado no tamanho de fonte que ele escolheu
- 1 REM = 16px
- box-sizing: initial; Não deforma oque esta dentro mesmo com o padding auto

## 09/03/2024

# HTML
- Tag Time para exibir datas ao invés do span

# CSS
- .post + .post : Estiliza apenas aquele que tem um post acima deles.

```css
   :focus {
      outline: transparent;
      box-shadow: 0 0 0 2px var(--green-500);
    }
```
  Retira o focus padrão do navegador e adiciona um focus customizado com a cor que você quiser

- .commentForm:focus-within footer: Essa propriedade CSS permite que apenas quando um button ou input, 
  textarea esteja em focus essa propriedade qua estão abaixo sejam colocadas em pratica

# HTML
- Sempre colocar um title nos botões que são apenas ícones para os leitores de tela conseguirem identificar

# CSS 
- Ao colocar flex 1 em uma div que tem outra div com display flex por cima, essa div com flex 1 vai esticar o máximo possível 
- Em um botão com apenas ícone, para retirar o espaço que sobre dentro do botão, colocar line-height 0

# React
- Todas as imagens que são importadas no react viram SVG

# Programação Imperativa

O QUE DEVE SER FEITO (passo-a-passo)

- Receita de bolo
1. Ligar o forno a 180.
2. Abrir a porta do forno.
3. Colocar a massa numa forma.
4. Colocar a forma com a massa dentro do forno.

# Programação Declarativa

Quais as condições para eu ter o resultado final.

- Receita de bolo
1. O forno precisa estar a 180.
2. Quando o forno estiver quente, eu posso colocar a massa para assar.
3. Quando a massa estiver pronta, eu posso retira-la do forno.

# key no React

## Por que única?

3 momentos em que um componente é renderizado novamente no React.

1. Quando o estado altera;
2. Quando a propriedade altera;
3. Quando um componente pai renderiza novamente;

## Por que não posso usar o índice do array como key ?

Por que o react vai se confundir caso os valores do array mudem.


# Imutabilidade no React
- As variáveis não sofrem mutação, nós criamos um novo valor (um novo espaço na memória)
- Permite ser mais performático

# CSS

```css
  .commentForm button[type=submit]:not(:disabled):hover {
    background: var(--green-300);
  }

  .commentForm button[type=submit]:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
```

Código para tratar botões disabled


# Closures no React
- Toda vez que é feito a atualização de um estado, o react que cria 2 contextos para aquele componente
o contexto antes de atualizar e o de depois. o contexto de depois só vale apos a reestruturação da tela, é por isso que 

count = 0
setState(count + 1);
console.log(count); // 0
setState(count + 1);

é 1 e não 2.

Sempre que você for atualizar uma informação e essa informação depende dela mesma sempre use o 

setState(state => state + 1);