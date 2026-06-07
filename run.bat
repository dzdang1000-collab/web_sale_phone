@echo off
chcp 65001 > nul
echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║                                                                ║
echo ║            🌐 PhoneStore - Website Bán Điện Thoại             ║
echo ║                                                                ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python không được cài đặt hoặc không trong PATH
    echo.
    echo 💡 Hãy cài đặt Python từ: https://www.python.org/downloads/
    echo.
    pause
    exit /b 1
)

echo ✅ Đang khởi động server...
echo.

REM Start Python HTTP Server
python -m http.server 8000

echo.
echo ✅ Server đã dừng.
pause
