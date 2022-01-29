# Weather Now

## Objetivo

Implementar uma aplicação para exibir a temperatura atual de 3 cidades diferentes.

## Requisitos técnicos

A aplicação deve respeitar os seguintes requisitos técnicos:

- Exibir as condições climáticas das seguintes cidades: Nuuk/GL, Urubici/BR e Nairobi/KE;
- Temperatura deve ser exibidas em graus Celsius;
- Umidade deve ser exibida em percentual;
- Pressão deve ser exibida em hectoPascal;
- Temperaturas igual ou abaixo de 5 graus devem ser exibidas em azul;
- Temperaturas acima de 5 graus e igual ou abaixo de 25 devem ser exibidas
em laranja;
- Temperaturas acima de 25 graus devem ser exibidas em vermelho;
- As condições climáticas devem ser atualizadas a cada 10 minutos;
- As condições climáticas devem ser cacheadas no front-end por 10 minutos;
- Utilizando a seguinte API: https://openweathermap.org;
- A fonte da aplicação deve ser Helvetica, utilizando Arial ou qualquer outra fonte sem serifa como fallback;
- A topbar deve permanecer fixa ao rolar a página;

O visual da aplicação e as informações climáticas a serem exibidas devem respeitar os mockups apresentados no [Marvel](https://marvelapp.com/prototype/13gd240g/screen/55669566?sign_up_origin=player) do projeto.

## Autora

- [Marília Cegalla Aldrighi](https://www.linkedin.com/in/marilia-aldrighi/)

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar a seguinte variável de ambiente no seu .env

`REACT_APP_APIKEY`

## Para rodar Localmente

Clone o projeto

```bash
  git clone git@github.com:maricegalla/Weather-Now.git
```

Abra o diretório do projeto

```bash
  cd weather-now
```

Instale as dependências do projeto

```bash
  npm install
```

Inicie a Aplicação

```bash
  npm start
```
## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm test
```

Para verificar a cobertura dos testes, rode o seguinte comando

```bash
  npm run test-coverage
```
## Stack utilizada

**Front-End:** ReactJS & Styled Components.

## Screenshot

![Captura de tela de 2022-01-28 07-00-30](https://user-images.githubusercontent.com/76533793/151604121-3e58b902-1056-4df1-a64b-835dde14d64a.png)

## Deploy

A aplicação está diponível na seguinte URL: https://weather-now-cyan.vercel.app/

