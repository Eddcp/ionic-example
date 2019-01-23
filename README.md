# Rastreabilidade

Projeto rastreabilidade desenvolvido com Ionic

## Instalação

### node

O node foi utilizado nesse projeto. Pra instalá-lo acesse [node](https://nodejs.org/en/) (Fazendo esse passo o gerenciador de pacotes [npm](https://www.npmjs.com;/) também é instalado).

### Ionic

[Ionic](https://ionicframework.com/) é um framework para desenvolvimento mobile híbrido utilizando tecnologias web (HTML5, CSS/SASS e Angular):

	$ npm install -g ionic

A [documentação do ionic](https://ionicframework.com/docs/) é bem esclarecedora.

## Uso

Após realizar os passos anteriores, dentro da pasta do projeto baixe as dependências com o comando:

	$ npm install

E depois, digite o comando:

	$ ionic serve

## Estrutura do projeto

O Ionic é um framework para desenvolvimento de aplicações mobile híbridas, que foi construído em cima do Angular e do Cordova. Dessa forma os arquivos são divididos em HTML (semântica da página), CSS(SASS) e Angular (Typescript)

Na pasta src temos: pages (páginas), providers (chamados de serviços REST), assets(ícones e imagens)

O Ionic provê um CLI pra facilitar o desenvolvimento, dessa forma pra criar uma nova página basta digitar:
	
	$ ionic generate page nomedapagina

Para criar um novo provider basta digitar
	
	$ ionic generate provider nomedoprovider

Para criar um novo componente

  $ ionic generate component nomedocomponente

Lembre-se sempre de adicionar seu novo componente (página, provider, etc) no arquivo app.module.ts. Assim que criar uma nova página você pode adicionar ela como Modulo colocando ela no objeto "imports" do arquivo app.module.ts, ou adicionar a página nos componentes de entrada (entryComponents) e nas declarations. Nesse projeto foi executada da segunda forma, conforme visto em demais projetos feitos utilizando Ionic.

#Autenticação JWT

Como estamos utilizando JWT para autenticação, após feito o login do usuário o token JWT retornado é salvo no localStorage. Após isso, todas chamadas feitas devem passar o token no parâmetro Authorization do cabeçalho da requisição, isso está desenvolvido no provider "token-interceptor" onde ele intercepta todas requisições e adiciona o token no header

## Gerar APK

Primeira é necessário adicionar a plataforma android ao seu aplicativo com o seguinte comando:
	
	$ ionic cordova platform add android

Um arquivo config.xml é gerado, para buidar o apk para produção digite o comando:

	$ ionic cordova build android --prod

## Variáveis de ambiente

Garanta que as variáveis de ambiente do Android SDK e do Gradle estejam configuradas pra evitar erros na hora de buildar o apk:

  ```
  export ANDROID_HOME=/home/{nomedoseuusuario}/Android/Sdk
  PATH=$PATH:$ANDROID_HOME/tools
  PATH=$PATH:$ANDROID_HOME/platform-tools
  PATH=$PATH:/opt/android-studio/gradle/gradle-4.6
  ```
  
Veja mais em: [Variáveis de ambiente](https://stackoverflow.com/questions/36198165/failed-to-find-android-home-environment-variable)

## Erros comuns

* "You have not accepted the license agreements of the following sdk components [Android SDK Platform 26/27/]". 
Solução: No Android Studio utilizando o SDK Manager instale a versão que aparece no erro.

* "Error: Could not find an installed version of Gradle." 
[Solução](https://stackoverflow.com/questions/43356833/cordova-android-requirements-failed-could-not-find-an-installed-version-of-gra): Caso use Linux, basta adicionar a variável de ambiente do graddle no seu arquivo .bashrc

## Curso 

[Curso de Ionic](https://www.udemy.com/ionic-3-para-iniciantes/) gratuito na Udemy.

## Mais Informações

[Entendo Promises](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)

