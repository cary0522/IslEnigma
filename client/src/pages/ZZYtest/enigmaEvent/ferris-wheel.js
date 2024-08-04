class FerrisWheel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.animate();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            width: 200px;
            height: 200px;
          }
          .ferris-wheel {
            width: 100%;
            height: 100%;
          }
          .wheel { stroke-width: 2; fill: none; }
          .spoke { stroke-width: 1; }
          .cabin { stroke-width: 1; }
          .support { stroke-width: 4; fill: none; }
        </style>
        <svg class="ferris-wheel" viewBox="0 0 200 300">
          <defs>
            <linearGradient id="wheelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:rgba(37, 98, 130, 0.5);stop-opacity:1" />
              <stop offset="100%" style="stop-color:rgba(102, 82, 133, 0.5);stop-opacity:1" />
            </linearGradient>
          </defs>
          <g id="wheel-structure" transform="translate(0, 30)">
            <circle class="wheel" cx="100" cy="100" r="98" stroke="url(#wheelGradient)"/>
            <circle class="wheel" cx="100" cy="100" r="90" stroke="url(#wheelGradient)"/>
            <circle class="wheel" cx="100" cy="100" r="80" stroke="url(#wheelGradient)"/>
          </g>
          <g id="spokes" transform="translate(0, 30)"></g>
          <g id="cabins" transform="translate(0, 30)"></g>
          <path class="support" d="M 50 260 C 70 230, 80 180, 100 130 C 120 180, 130 230, 150 260" stroke="url(#wheelGradient)"/>
          <path class="base" d="M 40 260 Q 100 250 160 260 L 160 270 L 40 270 Z" fill="url(#wheelGradient)"/>
        </svg>
      `;

        const spokes = this.shadowRoot.getElementById('spokes');
        const cabins = this.shadowRoot.getElementById('cabins');
        const cabinCount = 14;
        const radius = 98;

        for (let i = 0; i < cabinCount; i++) {
            const angle = (i / cabinCount) * 2 * Math.PI;
            const x = 100 + radius * Math.cos(angle);
            const y = 100 + radius * Math.sin(angle);

            spokes.innerHTML += `<line class="spoke" x1="100" y1="100" x2="${x}" y2="${y}" stroke="url(#wheelGradient)"/>`;
            cabins.innerHTML += `<circle class="cabin" cx="${x}" cy="${y}" r="8" fill="url(#wheelGradient)" stroke="url(#wheelGradient)"/>`;
        }
    }

    animate() {
        const wheel = this.shadowRoot.getElementById('wheel-structure');
        const cabins = this.shadowRoot.getElementById('cabins');

        const animate = () => {
            const rotation = performance.now() / 120;
            wheel.setAttribute("transform", `translate(0, 30) rotate(${rotation}, 100, 100)`);
            cabins.setAttribute("transform", `translate(0, 30) rotate(${-rotation}, 100, 100)`);
            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }
}

customElements.define('ferris-wheel', FerrisWheel);