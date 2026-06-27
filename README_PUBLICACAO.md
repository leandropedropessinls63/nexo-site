# Site Nexo Ocupacional

Este pacote contém a primeira versão estática e publicável do site institucional da Nexo Ocupacional.

## Como editar rapidamente

1. Abra `assets/js/main.js`.
2. Troque `5527000000000` pelo WhatsApp oficial da Nexo.
3. Troque e-mails, se necessário, em todos os arquivos `.html`.
4. Quando tiver CNPJ, endereço e responsável técnico, atualize o rodapé e página de contato.

## Como testar

Abra `index.html` no navegador.

## Como publicar sem hospedagem paga

Opção simples: publicar como site estático na Vercel.

Fluxo geral:
1. Criar conta na Vercel.
2. Criar um novo projeto.
3. Enviar estes arquivos ou conectar a um repositório GitHub.
4. Publicar.
5. No painel do projeto, adicionar o domínio `nexosst.com.br`.
6. Copiar os registros DNS indicados pela Vercel e cadastrar no Registro.br ou no provedor de DNS escolhido.

Observação: use sempre os registros DNS gerados pela própria Vercel no momento da publicação, pois eles podem variar por configuração.

## Estrutura

- `index.html` - página inicial.
- `sobre.html` - página institucional.
- `servicos.html` - página geral de serviços.
- `aso.html` - página de ASO.
- `programas.html` - página de programas e laudos.
- `empresas.html` - página para empresas.
- `contabilidades.html` - página para contabilidades.
- `downloads.html` - materiais informativos.
- `proposta.html` - formulário com envio por WhatsApp.
- `contato.html` - contato.
- `privacidade.html` - política preliminar.
- `assets/css/styles.css` - identidade visual do site.
- `assets/js/main.js` - interações, WhatsApp e formulário.
- `assets/img` - logo e favicon.
- `assets/docs` - PDFs informativos.

## Importante

A política de privacidade é preliminar e deve ser revisada juridicamente antes da publicação definitiva, especialmente quando houver coleta de dados de saúde.
