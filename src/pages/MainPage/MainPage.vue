<script setup>
import MainHeader from "@/components/MainComponents/MainHeader.vue";
</script>

<template>
<!--  <header class="fixed top-0 w-full z-10">-->
<!--    <main-header />-->
<!--  </header>-->
  <div class="sky-container">
    <canvas id="canvas"></canvas>
    <div id="cloud">
      <div id="cloud_layer1"></div>
      <div id="cloud_layer2"></div>
    </div>
    <main>
      <section>
        <div>
          <h1>Beyond</h1>
          <p>За пределами заучивания — к настоящему пониманию</p>
        </div>
        <div class="arrows">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Asap&display=swap");

.sky-container {
  position: relative;
  width: 100vw;
  height: 85vh;
  overflow: hidden;
  font-family: "Asap", sans-serif;
  color: black;
  text-align: center;
  font-size: clamp(13px, 5.5vw, 30px);
  background: linear-gradient(
      to bottom,
      #0d97ff,       /* насыщенный синий */
      #3eacff,       /* насыщенный синий */
      #60bafd 30%,   /* голубой */
      #b0e0e6 65%,   /* светло-голубой */
      #ffffff 100%   /* белый туман */
  );
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

  animation-delay: calc(
      (var(--duration) / var(--layerNum)) * var(--index) * -1
  );
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
