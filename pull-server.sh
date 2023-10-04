#!/bin/bash
npm run build
git add .

read message
echo "Mensagem do commit: "
git commit -am "$message"
git push
ssh 35.198.35.159 \
  'git -C /home/mauriciohbcorrea/api ' \
  'pull origin master && ' \
  'pm2 restart api && systemctl restart nginx'
