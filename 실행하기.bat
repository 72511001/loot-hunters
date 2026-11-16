@echo off
chcp 65001 > nul
title Loot Hunters v3.67 PC Standalone Server

echo ========================================================
echo   Loot Hunters v3.67 (PC 버전) 로컬 서버를 시작합니다...
echo ========================================================
echo.

cd /d "%~dp0"

echo [1/2] 브라우저 실행 중...
start http://localhost:3670

echo [2/2] 게임 웹 서버 가동 중 (종료하려면 이 창을 닫으세요)...
node -e "eval(require('fs').readFileSync('server.js', 'utf8'))"

pause
