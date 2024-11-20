document.documentElement.innerHTML = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      margin: 0;
      height: 100vh;
      background: linear-gradient(to bottom, #001a33, #000510);
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Arial, sans-serif;
    }

    .container {
      position: relative;
      width: 100%;
      height: 100%;
    }

    /* Thunderbolt Animation */
    .thunder-bolt {
      position: absolute;
      width: 120px;
      height: 240px;
      opacity: 0;
      filter: drop-shadow(0 0 50px rgba(173, 216, 230, 0.8));
      animation: thunderFlash 4s infinite ease-in-out;
      will-change: transform, opacity;
      transform: translateZ(0);
    }

    .thunder-bolt:nth-child(1) { left: 15%; animation-delay: 0.5s; }
    .thunder-bolt:nth-child(2) { left: 45%; animation-delay: 2s; }
    .thunder-bolt:nth-child(3) { left: 75%; animation-delay: 3.5s; }

    /* Image of Flute with Feather */
    .flute-with-feather {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 300px;
      height: auto;
      filter: drop-shadow(0 0 20px rgba(173, 216, 230, 0.8));
      animation: glow 2s infinite ease-in-out;
    }

    /* Text Animation */
    .text {
      position: absolute;
      bottom: 20%;
      left: 50%;
      transform: translateX(-50%);
      color: #E0FFFF;
      font-size: 2.5rem;
      text-align: center;
      text-shadow: 0 0 20px rgba(135, 206, 250, 0.8);
      animation: textGlow 2s infinite;
      will-change: opacity, text-shadow;
    }

    /* Animations */
    @keyframes thunderFlash {
      0% { opacity: 0; transform: scale(0.8) translateY(-100%); }
      0.5% { opacity: 1; transform: scale(1) translateY(0); }
      1% { opacity: 0.3; }
      1.5% { opacity: 1; }
      2% { opacity: 0; transform: scale(0.8) translateY(0); }
      100% { opacity: 0; transform: scale(0.8) translateY(0); }
    }

    @keyframes glow {
      0% { filter: drop-shadow(0 0 10px rgba(173, 216, 230, 0.8)); }
      50% { filter: drop-shadow(0 0 30px rgba(135, 206, 250, 1)); }
      100% { filter: drop-shadow(0 0 10px rgba(173, 216, 230, 0.8)); }
    }

    @keyframes textGlow {
      0% { opacity: 0.8; }
      50% { opacity: 1; text-shadow: 0 0 30px rgba(135, 206, 250, 1); }
      100% { opacity: 0.8; }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Thunder Bolts -->
    <svg class="thunder-bolt" viewBox="0 0 120 240">
      <path d="M70,0 L50,90 L75,90 L20,240 L35,140 L15,140 L55,0" 
            fill="url(#thunderGradient)" />
      <defs>
        <linearGradient id="thunderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#fff"/>
          <stop offset="50%" style="stop-color:#87CEFA"/>
          <stop offset="100%" style="stop-color:#1E90FF"/>
        </linearGradient>
      </defs>
    </svg>
    <svg class="thunder-bolt" viewBox="0 0 120 240">
      <use href="#thunder" />
    </svg>
    <svg class="thunder-bolt" viewBox="0 0 120 240">
      <use href="#thunder" />
    </svg>

    <!-- Flute with Feather -->
    <img class="flute-with-feather" src="https://realkrishna10.github.io/D/1000082343_prev_ui.png" alt="Flute with Feather">

    <!-- Krishna Text -->
    <div class="text">॥ जय श्रीकृष्ण ॥<br>THIS WEBSITE IS HACKED BY SMALLBOY</div>
  </div>
</body>
</html>`;
