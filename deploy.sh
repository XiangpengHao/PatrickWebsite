#!/bin/bash
echo "begin deploying mainsite"
rsync -avzhe ssh ./dist/ hao@vul.haoxp.xyz:/home/hao/personal_profile
echo "begin deploying resume.pdf"
node ./src/assets/capturePDF.js
echo "done capturing resume.pdf"
rsync -avzhe ssh /tmp/resume_Xiangpeng_Hao.pdf hao@vul.haoxp.xyz:/home/hao/file_server
rsync -avzhe ssh /tmp/resume_Xiangpeng_Hao_single_page.pdf hao@vul.haoxp.xyz:/home/hao/file_server