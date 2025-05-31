<script setup>
import MainHeader from "@/components/MainComponents/MainHeader.vue";
</script>

<template>
  <div class="sky-container">
    <canvas id="canvas"></canvas>
    <div class="hot-air-balloon balloon-1">
      <img src="@/assets/images/balloon.svg" alt="Hot Air Balloon" />
    </div>
    <div class="hot-air-balloon balloon-2">
      <img src="@/assets/images/balloon2.svg" alt="Hot Air Balloon" />
    </div>
    <div class="hot-air-balloon balloon-3">
      <img src="@/assets/images/balloon3.svg" alt="Hot Air Balloon" />
    </div>
    <div class="hot-air-balloon balloon-4">
      <img src="@/assets/images/balloon4.svg" alt="Hot Air Balloon" />
    </div>
    <div class="hot-air-balloon balloon-5">
      <img src="@/assets/images/balloon5.svg" alt="Hot Air Balloon" />
    </div>

    <div id="cloud">
      <div id="cloud_layer1"></div>
      <div id="cloud_layer2"></div>
    </div>
    <main>
      <section>
        <div>
          <h1 class="BlackMango text-sky-900 font-semibold" style="font-size: 60px;">Beyond</h1>
          <p class="text-blue-700 font-medium">За пределами заучивания — к настоящему пониманию</p>
        </div>
        <div class="arrows">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </main>
  </div>
  <main-header />
  <div class="auth">
  
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Asap&display=swap");

.sky-container {
  position: relative;
  width: 100vw;
  height: 90vh;
  overflow: hidden;
  font-family: "Asap", sans-serif;
  color: black;
  text-align: center;
  font-size: clamp(13px, 5.5vw, 30px);
  background: linear-gradient(to bottom,
      #0d97ff,
      /* насыщенный синий */
      #3eacff,
      /* насыщенный синий */
      #60bafd 30%,
      /* голубой */
      #b0e0e6 65%,
      /* светло-голубой */
      #ffffff 100%
      /* белый туман */
    );
}

.hot-air-balloon {
  position: absolute;
  width: 80px;
  height: auto;
  z-index: 2;
  pointer-events: none;
  opacity: 0.85;
  animation: float 6s ease-in-out infinite, drift 20s linear infinite;
  will-change: transform;
}

.balloon-1 {
  top: 15%;
  left: 5%;
  animation-delay: 0s, 0s;
  transform: scale(0.9);
}

.balloon-2 {
  top: 20%;
  left: 30%;
  animation-delay: 1s, -5s;
  transform: scale(1.1);
}

.balloon-3 {
  top: 30%;
  left: 85%;
  animation-delay: 2s, -10s;
  transform: scale(0.8);
}

.balloon-4 {
  top: 60%;
  left: 35%;
  animation-delay: 3s, -15s;
  transform: scale(1);
}

.balloon-5 {
  top: 33%;
  left: 60%;
  animation-delay: 1.5s, -7s;
  transform: scale(0.95);
}


@keyframes float {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-35px);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes drift {
  0% {
    transform: translateX(0) rotate(0deg);
  }

  25% {
    transform: translateX(10px) rotate(1deg);
  }

  50% {
    transform: translateX(20px) rotate(2deg);
  }

  75% {
    transform: translateX(10px) rotate(1deg);
  }

  100% {
    transform: translateX(0) rotate(-1deg);
  }
}



canvas {
  user-select: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#cloud div::before,
#cloud div::after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(https://raw.githubusercontent.com/happy358/misc/main/image/cloud_X.png);
  background-repeat: repeat-x;
  animation: cloud var(--duration) linear infinite forwards;

  --duration: 25s;
  --lowHeight: 35vh;
  --highHeight: 85vh;
  --layerNum: 4;
  --index: 0;
  --opacity: 0.5;
  --moveX: 300px;

  animation-delay: calc((var(--duration) / var(--layerNum)) * var(--index) * -1);
  opacity: 0;
}

#cloud div::before {
  --index: 0;
}

#cloud div::after {
  --index: 2;
  transform: scaleX(-1);
}

#cloud_layer2::before,
#cloud_layer2::after {
  background-image: url(https://raw.githubusercontent.com/happy358/misc/main/image/cloud.png);
}

#cloud_layer2::before {
  --index: 3;
}

#cloud_layer2::after {
  --index: 1;
}

@keyframes cloud {
  0% {
    opacity: 0;
    background-position: right var(--moveX) bottom calc(-1 * var(--lowHeight));
    background-size: calc(1 * var(--lowHeight)) var(--lowHeight);
  }

  5% {
    opacity: var(--opacity);
  }

  80% {
    opacity: var(--opacity);
  }

  100% {
    opacity: 0;
    background-position: right bottom;
    background-size: calc(3 * var(--highHeight)) var(--highHeight);
  }
}

main {
  position: relative;
  mix-blend-mode: overlay;
  height: 100%;
}

section {
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.arrows {
  position: absolute;
  bottom: 0.5rem;
  text-align: center;
  mix-blend-mode: overlay;
}

.arrows div {
  --arrowSize: 1.3rem;
  --arrowColor: currentColor;

  width: var(--arrowSize);
  height: var(--arrowSize);
  margin: calc(var(--arrowSize) * -1.5) 0;
  background: transparent;
  border: calc(var(--arrowSize) * 0.11) solid;
  border-color: transparent transparent var(--arrowColor) var(--arrowColor);
  transform: rotate(-45deg);
  animation: arrow 2s infinite linear;
}

.arrows div:nth-of-type(3) {
  animation-delay: -0.8s;
}

.arrows div:nth-of-type(2) {
  animation-delay: -0.4s;
}

.arrows div:nth-of-type(1) {
  animation-delay: 0s;
}

@keyframes arrow {

  0%,
  100% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }

  80% {
    opacity: 0;
  }
}
</style>
