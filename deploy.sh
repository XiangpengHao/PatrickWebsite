#!/bin/bash
echo "begin deploying mainsite"
rsync -avzhe ssh ./dist/ hao@vul.haoxp.xyz:/home/hao/personal_profile
echo "begin deploying resume.pdf"
node ./src/assets/capturePDF.js
echo "done capturing resume.pdf"
rsync -avzhe ssh /tmp/resume.pdf hao@vul.haoxp.xyz:/home/hao/file_server