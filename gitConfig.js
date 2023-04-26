/* 

Criar atalhos para os comandos abaixo no Git para agilizar no desenvolvimento

git status
git commit -m
git log

git config --list
- Mostra todos as configurações do git na máquina local 

Existem 3 níveis de config no Git.
- Configuração global. git config --system 
- Configuração do seu usuário. git config --global
- Configuração apenas do projeto. git config --local

Para editar, basta adicionar a flag --edit ao fim de cada comando.
Esse comando abrirá no editor VIM, o que não é muito amigável.
Para abrir e editar o arquivo no VSCODE, digite o seguinte comando:

git config --global core.editor code

Após abrir suas configurações no VSCODE, recomenda-se adicionar uma flag --wait,
para que quando você abra seu arquivo, o git carregue todas as informações necessárias
antes de abrir o editor, caso contrário o arquivo poderá vir vazio.  

Agora você irá criar uma nova configuração para o git, no arquivo que foi aberto no editor, reduzindo o esforço repetitivo de comandos.
Copie e cole os comandos abaixo:

[alias]
	s = !git status -s
	c = !git add --all && git commit -m
	l = !git log --pretty=format:'%h %d%s - %cn, %cr'

- Sempre que você utilizar "git s", simplesmente você terá o resultado igual de 
"git status -s", que seria uma versão reduzida e mais legível do "git status"

- Adicionando o alias "c", você simplesmente terá que digitar 
"git c "Mensagem do commit" ", o que seria o mesmo resultado se você digitasse
"git add . && git commit -m "Mensagem do commit" ". Isso já reduz muita carga 
repetitiva de trabalho manual. 

- Já com o "git l", você traria um resultado formatado, legível, colorido e organizado de
"git log --pretty=format:'%C(blue)%h%C(red)%d %C(white)%s - %C(cyan)%cn, %C(green)%cr"

%C() - Cores (Azul, Vermelho)
%h - hash reduzida
%d - branch
%s - mensagem do commit
%cn - pessoa que fez o commit
%cr - data relativa

Conventional Commits - Padronizar mensagem do commit.
Sempre que for comitar algo, siga essa convenção de padronizar seu projeto
Exemplos:
  git c chore: "new features add"
  git c fix: "resolving bug"
  git c chore: "adding json.config"

feat - feature nova
fix - bug fix
chore - quando adiciona alguma configuração nova
Não usar letras maíusculas. 
Verbos sempre no imperativo.

*/
