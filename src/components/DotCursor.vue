<template>
  <div class="hidden lg:block">
    <!-- Dot Cursor -->
    <div class="cursor-dot"></div>
    <div class="cursor-dot-outline"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.initCursor();
  },
  methods: {
    initCursor() {
      var cursor = {
        delay: 8,
        _x: 0,
        _y: 0,
        endX: (window.innerWidth / 2),
        endY: (window.innerHeight / 2),
        cursorVisible: true,
        cursorEnlarged: false,
        $dot: document.querySelector('.cursor-dot'),
        $outline: document.querySelector('.cursor-dot-outline'),

        init: function() {
          // Set up element sizes
          this.dotSize = this.$dot.offsetWidth;
          this.outlineSize = this.$outline.offsetWidth;

          this.setupEventListeners();
          this.animateDotOutline();
        },

        setupEventListeners: function() {
          var self = this;

          // Anchor hovering
          document.querySelectorAll('a').forEach(function(el) {
            el.addEventListener('mouseover', function() {
              self.cursorEnlarged = true;
              self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function() {
              self.cursorEnlarged = false;
              self.toggleCursorSize();
            });
          });

          // Click events
          document.addEventListener('mousedown', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
          });
          document.addEventListener('mouseup', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
          });

          // Show/hide cursor on mouse enter/leave
          document.addEventListener('mouseenter', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
          });

          document.addEventListener('mouseleave', function(e) {
            self.cursorVisible = false;
            self.toggleCursorVisibility();
          });

          // Move cursor on mouse move
          document.addEventListener('mousemove', function(e) {
            // Show the cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            // Position the dot
            self.endX = e.pageX;
            self.endY = e.pageY;
            self.$dot.style.top = self.endY + 'px';
            self.$dot.style.left = self.endX + 'px';
          });
        },

        animateDotOutline: function() {
          var self = this;

          self._x += (self.endX - self._x) / self.delay;
          self._y += (self.endY - self._y) / self.delay;
          self.$outline.style.top = self._y + 'px';
          self.$outline.style.left = self._x + 'px';

          requestAnimationFrame(this.animateDotOutline.bind(self));
        },

        toggleCursorSize: function() {
          var self = this;

          if (self.cursorEnlarged) {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
          } else {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
          }
        },

        toggleCursorVisibility: function() {
          var self = this;

          if (self.cursorVisible) {
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
          } else {
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
          }
        }
        
      };

      cursor.init();
    }
  }
};
</script>

<style scoped lang="scss">

$primary: #22d3ee;
$primary-ultralight: mix(white, $primary, 80%);
$primary-light: mix(white, $primary, 25%);
$primary-dark: mix(black, $primary, 25%);
$primary-ultradark: mix(black, $primary, 80%);
$black: #333333;
$white: #eeeeee;



.cursor-dot,
.cursor-dot-outline {
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  opacity: 0;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease-in-out,
              transform 0.3s ease-in-out;
}

.cursor-dot {
  $size: 8px;
  width: $size;
  height: $size;
  background-color: $primary;
}

.cursor-dot-outline {
  $size: 40px;
  width: $size;
  height: $size;
  background-color: rgba($primary-light, 0.5);
}
</style>