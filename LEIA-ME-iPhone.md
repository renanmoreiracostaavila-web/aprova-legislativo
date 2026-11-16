# Aprova Legislativo no iPhone

Esta pasta é a versão PWA do app: ele é instalado na Tela de Início do iPhone, abre em tela cheia como um app e funciona offline.

## 1. Publicar a pasta (uma vez, cerca de 2 minutos)
O iPhone só instala um app web que esteja em um endereço https. A forma mais simples:

1. No computador, abra **https://app.netlify.com/drop** e crie uma conta gratuita.
2. Arraste esta pasta inteira (**ios-pwa**) para a página.
3. O Netlify gera um endereço como `https://nome-aleatorio.netlify.app`. Você pode trocar o nome nas configurações do site.

Outra opção é o GitHub Pages, com os arquivos em um repositório público.

## 2. Instalar no iPhone
1. Abra o endereço no **Safari** do iPhone.
2. Toque em **Compartilhar** (o quadrado com a seta para cima).
3. Toque em **Adicionar à Tela de Início** e depois em **Adicionar**.

O ícone "Aprova" aparece na Tela de Início. Abra o app uma vez com internet para que ele fique disponível offline.

## 3. Levar seu progresso para o iPhone
1. No app online (claude.ai), vá em **Início → Backup do progresso → Copiar backup**.
2. Envie o texto para o iPhone, por exemplo por mensagem para você mesmo ou pela área de transferência do iCloud.
3. No app do iPhone, abra **Início → Restaurar backup**, cole o texto e toque em **Restaurar agora**.

## O que muda nesta versão
- O progresso fica salvo **no próprio iPhone**. Faça backup de vez em quando com "Baixar arquivo de backup".
- Os recursos com Claude (gerar flashcards e questões, corrigir a discursiva) só funcionam na versão online, porque dependem da sua conta Claude. O banco com 84 questões, os flashcards, o Pomodoro, a discursiva e o restante funcionam normalmente.
- O Pomodoro calcula o tempo pelo horário de término, então continua certo mesmo com a tela bloqueada. O aviso sonoro só toca com o app aberto.

## Atualizar
Quando sair uma versão nova, arraste a pasta atualizada no mesmo site do Netlify (aba **Deploys**). O app do iPhone se atualiza na próxima vez que for aberto com internet.
