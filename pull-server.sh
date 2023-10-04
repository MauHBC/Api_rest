#!/bin/bash
npm run build
git add .

read message
echo "Mensagem do commit: "
git commit -am "$message"
git push
ssh dominioparateste.com \
  'git -C /home/mauriciohbcorrea/api ' \
  'pull origin master && ' \
  'pm2 restart api && systemctl restart nginx'
