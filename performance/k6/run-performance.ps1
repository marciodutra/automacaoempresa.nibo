Write-Host "=============================="
Write-Host "LOGIN LOAD TEST"
Write-Host "=============================="

k6 run scenarios/login-load.js


Write-Host "=============================="
Write-Host "REGISTRATION LOAD TEST"
Write-Host "=============================="

k6 run scenarios/registration-load.js


Write-Host "=============================="
Write-Host "COMPANY LOAD TEST"
Write-Host "=============================="

k6 run scenarios/company-load.js