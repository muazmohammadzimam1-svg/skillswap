# SkillSwap Deployment Script
Set-Location "d:\471 project\SkillSwap-main"

Write-Host "🚀 Starting Full Deployment Process..." -ForegroundColor Green

# Step 1: Git Commit and Push
Write-Host "`n📝 Committing changes..." -ForegroundColor Cyan
git add -A
git commit -m "Production: Update API and CORS for Vercel deployment"
git push origin main

# Step 2: Deploy Backend to Vercel
Write-Host "`n🔧 Deploying Backend to Vercel..." -ForegroundColor Cyan
Set-Location "d:\471 project\SkillSwap-main\backend"
npx vercel --prod --yes --token $env:VERCEL_TOKEN

# Step 3: Deploy Frontend to Vercel
Write-Host "`n🎨 Deploying Frontend to Vercel..." -ForegroundColor Cyan
Set-Location "d:\471 project\SkillSwap-main\client"
npx vercel --prod --yes --token $env:VERCEL_TOKEN

Write-Host "`n✅ Deployment Complete!" -ForegroundColor Green
Write-Host "Frontend: https://skillswap-eta-seven.vercel.app" -ForegroundColor Yellow
Write-Host "Backend: https://backend-2wzfmyh4k-muaz-mohammad-zimams-projects.vercel.app" -ForegroundColor Yellow
