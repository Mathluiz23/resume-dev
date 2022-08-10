# Congigurando Prettier no settings.json para ajustar identação automaticamente

Criar pasta .vscode e dentro dela criar o arquivo settings.json
Dentro do arquivo settings.json colar a seguinte estrutura:

# IMPORTANTE: ter instalado o Prettier nas extensões do VS Code

{
​"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"[html]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"prettier.tabWidth": 4,
"prettier.useTabs": true
}
