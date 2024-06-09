(function fairyDustCursor() {
    var span = document.createElement('span');
    span.id = 'star';
    span.style.userSelect = 'none';
    document.body.appendChild(span);

    var possibleColors = ["#FFFF00", "#FF00FF", "#00FFFF", "#FF9900", "#FF0099", "#99FF00", "#9900FF", "#00FF99", "#0099FF"];
    var cursor = {};
    var particles = [];
    var flag = true;

    function init() {
        bindEvents();
        loop();
    }

    // Bind events that are needed
    function bindEvents() {
        document.addEventListener('mousemove', onMouseMove);
    }

    function onMouseMove(e) {
        cursor.x = e.clientX;
        cursor.y = e.clientY;
        if (flag) {
            addParticle(cursor.x, cursor.y, possibleColors[Math.floor(Math.random() * possibleColors.length)]);
        }
        flag = !flag;
    }

    function addParticle(x, y, color) {
        var particle = new Particle();
        particle.init(x, y, color);
        particles.push(particle);
    }

    function updateParticles() {
        // Updated
        for (var i = 0; i < particles.length; i++) {
            particles[i].update();
        }

        // Remove dead particles
        for (var i = particles.length - 1; i >= 0; i--) {
            if (particles[i].lifeSpan < 0) {
                particles[i].die();
                particles.splice(i, 1);
            }
        }
    }

    function loop() {
        requestAnimationFrame(loop);
        updateParticles();
    }

    /**
     * Particles
     */
    function Particle() {
        this.character = "*";
        this.lifeSpan = 120; //ms
        this.initialStyles = {
            "position": "fixed",
            "display": "inline-block",
            "top": "-25px",
            "left": "-18px",
            "pointerEvents": "none",
            "touch-action": "none",
            "z-index": "10000000",
            "fontSize": "22px",
            "will-change": "transform"
        };

        // Init, and set properties
        this.init = function (x, y, color) {
            this.velocity = {
                x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
                y: 1
            };

            this.position = { x: x + 10, y: y + 10 };
            this.initialStyles.color = color;

            this.element = document.createElement('span');
            this.element.innerHTML = this.character;
            applyProperties(this.element, this.initialStyles);
            this.update();

            document.querySelector('#star').appendChild(this.element);
        };

        this.update = function () {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            this.lifeSpan--;
            this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px, 0) scale(" + (this.lifeSpan / 120) + ")";
        }

        this.die = function () {
            this.element.parentNode.removeChild(this.element);
        }
    }

    /**
     * Utils
     */

    // Applies css `properties` to an element.
    function applyProperties(target, properties) {
        for (var key in properties) {
            target.style[key] = properties[key];
        }
    }

    if (!('ontouchstart' in window || navigator.msMaxTouchPoints)) init();
})();
