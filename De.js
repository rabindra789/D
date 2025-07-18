document.documentElement.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>System Compromised</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: #000;
            color: #00ff00;
            font-family: 'Courier New', monospace;
            overflow: hidden;
            position: relative;
        }

        .matrix-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        }

        .container {
            position: relative;
            z-index: 10;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .glitch {
            font-size: 4rem;
            font-weight: bold;
            text-transform: uppercase;
            position: relative;
            color: #00ff00;
            letter-spacing: 3px;
            animation: glitch 1s infinite linear alternate-reverse;
        }

        .glitch::before,
        .glitch::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .glitch::before {
            animation: glitch-top 1s infinite linear alternate-reverse;
            color: #ff0000;
            clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
        }

        .glitch::after {
            animation: glitch-bottom 1s infinite linear alternate-reverse;
            color: #0000ff;
            clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
        }

        @keyframes glitch {
            0%, 100% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
        }

        @keyframes glitch-top {
            0%, 100% { transform: translate(0); }
            20% { transform: translate(-2px, -2px); }
            40% { transform: translate(-2px, 2px); }
            60% { transform: translate(2px, -2px); }
            80% { transform: translate(2px, 2px); }
        }

        @keyframes glitch-bottom {
            0%, 100% { transform: translate(0); }
            20% { transform: translate(2px, 2px); }
            40% { transform: translate(2px, -2px); }
            60% { transform: translate(-2px, 2px); }
            80% { transform: translate(-2px, -2px); }
        }

        .subtitle {
            font-size: 1.5rem;
            margin-top: 20px;
            opacity: 0;
            animation: fadeIn 2s ease-in-out 1s forwards;
        }

        .terminal {
            background: rgba(0, 0, 0, 0.8);
            border: 2px solid #00ff00;
            border-radius: 10px;
            padding: 20px;
            margin-top: 30px;
            width: 80%;
            max-width: 600px;
            opacity: 0;
            animation: slideUp 1s ease-out 2s forwards;
        }

        .terminal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid #00ff00;
        }

        .terminal-title {
            font-size: 1.2rem;
            color: #00ff00;
        }

        .terminal-buttons {
            display: flex;
            gap: 5px;
        }

        .btn {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #ff0000;
        }

        .btn.yellow { background: #ffff00; }
        .btn.green { background: #00ff00; }

        .terminal-content {
            font-size: 1rem;
            line-height: 1.6;
        }

        .command-line {
            opacity: 0;
            animation: typewriter 0.5s ease-in-out forwards;
        }

        .command-line:nth-child(1) { animation-delay: 3s; }
        .command-line:nth-child(2) { animation-delay: 3.5s; }
        .command-line:nth-child(3) { animation-delay: 4s; }
        .command-line:nth-child(4) { animation-delay: 4.5s; }
        .command-line:nth-child(5) { animation-delay: 5s; }
        .command-line:nth-child(6) { animation-delay: 5.5s; }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes typewriter {
            from { opacity: 0; transform: translateX(-10px); }
            to { opacity: 1; transform: translateX(0); }
        }

        .warning {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(255, 0, 0, 0.2);
            border: 2px solid #ff0000;
            border-radius: 5px;
            padding: 10px 20px;
            font-size: 1rem;
            color: #ff0000;
            animation: pulse 2s infinite;
            z-index: 20;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        .skull {
            font-size: 2rem;
            margin: 20px 0;
            animation: bounce 2s infinite;
        }

        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .scanline {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #00ff00, transparent);
            animation: scan 3s infinite;
            z-index: 15;
        }

        @keyframes scan {
            0% { top: 0; }
            100% { top: 100%; }
        }

        .particle {
            position: absolute;
            width: 2px;
            height: 2px;
            background: #00ff00;
            animation: particle 4s infinite linear;
        }

        @keyframes particle {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }

        .flash {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #00ff00;
            opacity: 0;
            animation: flash 0.1s ease-in-out 0.5s;
            z-index: 5;
        }

        @keyframes flash {
            0%, 100% { opacity: 0; }
            50% { opacity: 0.1; }
        }

        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }

        @media (max-width: 768px) {
            .glitch {
                font-size: 2.5rem;
            }
            
            .terminal {
                width: 95%;
                padding: 15px;
            }
            
            .subtitle {
                font-size: 1.2rem;
            }
        }
    </style>
</head>
<body>
    <canvas class="matrix-bg"></canvas>
    <div class="flash"></div>
    <div class="scanline"></div>
    
    <div class="warning">
        ⚠️ SECURITY BREACH DETECTED
    </div>

    <div class="container">
        <div class="glitch" data-text="HACKED BY SMALLBOY">
            HACKED BY SMALLBOY
        </div>
        
        <div class="subtitle">
            🔥 SYSTEM COMPROMISED 🔥
        </div>
        
        <div class="skull">💀</div>
        
        <div class="terminal">
            <div class="terminal-header">
                <div class="terminal-title">root@target:~#</div>
                <div class="terminal-buttons">
                    <div class="btn"></div>
                    <div class="btn yellow"></div>
                    <div class="btn green"></div>
                </div>
            </div>
            <div class="terminal-content">
                <div class="command-line">$ sudo chmod 777 /system/*</div>
                <div class="command-line">$ access granted: root privileges</div>
                <div class="command-line">$ bypassing firewall...</div>
                <div class="command-line">$ extracting sensitive data...</div>
                <div class="command-line">$ backdoor installed successfully</div>
                <div class="command-line">$ connection established - smallboy@hacknet</div>
            </div>
        </div>
    </div>

    <script>
        class HackerDemo {
            constructor() {
                this.canvas = document.querySelector('.matrix-bg');
                this.ctx = this.canvas.getContext('2d');
                this.particles = [];
                this.matrixChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
                this.drops = [];
                
                this.init();
                this.createParticles();
                this.startMatrix();
                this.addSoundEffects();
            }

            init() {
                this.resizeCanvas();
                window.addEventListener('resize', () => this.resizeCanvas());
                
                const columns = Math.floor(this.canvas.width / 14);
                for (let i = 0; i < columns; i++) {
                    this.drops[i] = 1;
                }
            }

            resizeCanvas() {
                this.canvas.width = window.innerWidth;
                this.canvas.height = window.innerHeight;
            }

            createParticles() {
                for (let i = 0; i < 50; i++) {
                    this.createParticle();
                }
            }

            createParticle() {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * window.innerWidth + 'px';
                particle.style.animationDelay = Math.random() * 4 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
                document.body.appendChild(particle);

                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 6000);
            }

            startMatrix() {
                setInterval(() => {
                    this.drawMatrix();
                }, 50);

                setInterval(() => {
                    this.createParticle();
                }, 200);
            }

            drawMatrix() {
                this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
                this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

                this.ctx.fillStyle = '#00ff00';
                this.ctx.font = '14px monospace';

                for (let i = 0; i < this.drops.length; i++) {
                    const text = this.matrixChars[Math.floor(Math.random() * this.matrixChars.length)];
                    const x = i * 14;
                    const y = this.drops[i] * 14;

                    this.ctx.fillText(text, x, y);

                    if (y > this.canvas.height && Math.random() > 0.975) {
                        this.drops[i] = 0;
                    }
                    this.drops[i]++;
                }
            }

            addSoundEffects() {
                const terminalLines = document.querySelectorAll('.command-line');
                terminalLines.forEach((line, index) => {
                    setTimeout(() => {
                        this.typeText(line);
                    }, 3000 + (index * 500));
                });

                setInterval(() => {
                    if (Math.random() < 0.1) {
                        this.triggerGlitch();
                    }
                }, 2000);
            }

            typeText(element) {
                const text = element.textContent;
                element.textContent = '';
                element.style.opacity = '1';
                
                let i = 0;
                const typeTimer = setInterval(() => {
                    if (i < text.length) {
                        element.textContent += text.charAt(i);
                        i++;
                    } else {
                        clearInterval(typeTimer);
                    }
                }, 50);
            }

            triggerGlitch() {
                const glitchElement = document.querySelector('.glitch');
                glitchElement.style.animation = 'none';
                setTimeout(() => {
                    glitchElement.style.animation = 'glitch 1s infinite linear alternate-reverse';
                }, 10);

                if (Math.random() < 0.3) {
                    const flash = document.querySelector('.flash');
                    flash.style.animation = 'flash 0.1s ease-in-out';
                    setTimeout(() => {
                        flash.style.animation = '';
                    }, 100);
                }
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            new HackerDemo();
        });

        document.addEventListener('click', (e) => {
            const ripple = document.createElement('div');
            ripple.style.position = 'fixed';
            ripple.style.left = e.clientX + 'px';
            ripple.style.top = e.clientY + 'px';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.background = 'rgba(0, 255, 0, 0.5)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            ripple.style.zIndex = '100';
            
            document.body.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    </script>
</body>
</html>`;
