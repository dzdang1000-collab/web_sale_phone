# PhoneStore - Website Bán Điện Thoại
# Run this script to start the development server

Write-Host ""
Write-Host "╔════════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║                                                                ║" -ForegroundColor Cyan
Write-Host "║            🌐 PhoneStore - Website Bán Điện Thoại             ║" -ForegroundColor Cyan
Write-Host "║                                                                ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Check if Python is installed
try {
    $pythonVersion = python --version 2>&1
    Write-Host "✅ Python detected: $pythonVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Python không được cài đặt hoặc không trong PATH" -ForegroundColor Red
    Write-Host ""
    Write-Host "💡 Hãy cài đặt Python từ: https://www.python.org/downloads/" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Nhấn Enter để thoát"
    exit 1
}

Write-Host ""
Write-Host "⏳ Đang khởi động server..." -ForegroundColor Yellow
Write-Host ""

# Get the script directory
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

# Change to script directory
Push-Location $scriptDir

try {
    # Start Python HTTP Server
    Write-Host "🌐 Server sẽ chạy tại: http://localhost:8000" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "📱 Các trang có sẵn:" -ForegroundColor Cyan
    Write-Host "   • Trang chủ: http://localhost:8000/index.html" -ForegroundColor White
    Write-Host "   • Giỏ hàng: http://localhost:8000/cart.html" -ForegroundColor White
    Write-Host "   • Chi tiết sản phẩm: http://localhost:8000/product-detail.html?id=1" -ForegroundColor White
    Write-Host ""
    Write-Host "💡 Để dừng server, nhấn Ctrl+C" -ForegroundColor Yellow
    Write-Host ""
    
    python -m http.server 8000
} finally {
    Pop-Location
}

Write-Host ""
Write-Host "✅ Server đã dừng." -ForegroundColor Green
Write-Host ""
Read-Host "Nhấn Enter để thoát"
