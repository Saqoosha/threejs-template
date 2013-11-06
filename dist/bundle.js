;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
var App,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

App = (function() {
  function App() {
    this.animate = __bind(this.animate, this);
    this.initObjects = __bind(this.initObjects, this);
    this.initScene = __bind(this.initScene, this);
    this.initScene();
    this.initObjects();
    this.animate();
  }

  App.prototype.initScene = function() {
    var container, effect, light,
      _this = this;
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    this.camera.position.z = 500;
    this.controls = new THREE.OrbitControls(this.camera);
    this.scene = new THREE.Scene();
    light = new THREE.DirectionalLight(0xffffff, 0.7);
    light.position.set(1, 1, 1);
    this.scene.add(light);
    light = new THREE.HemisphereLight(0xffffff, 0x888888, 0.3);
    this.scene.add(light);
    this.renderer = new THREE.WebGLRenderer({
      antialias: false
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    container = document.getElementById('container');
    container.appendChild(this.renderer.domElement);
    this.stats = new Stats();
    container.appendChild(this.stats.domElement);
    this.composer = new THREE.EffectComposer(this.renderer);
    this.composer.addPass(new THREE.RenderPass(this.scene, this.camera));
    effect = new THREE.ShaderPass(THREE.DotScreenShader);
    effect.uniforms['scale'].value = 4;
    this.composer.addPass(effect);
    effect = new THREE.ShaderPass(THREE.RGBShiftShader);
    console.log(effect.uniforms);
    effect.uniforms['amount'].value *= 0.3;
    effect.renderToScreen = true;
    this.composer.addPass(effect);
    return window.addEventListener('resize', function() {
      _this.camera.aspect = window.innerWidth / window.innerHeight;
      _this.camera.updateProjectionMatrix();
      _this.renderer.setSize(window.innerWidth, window.innerHeight);
      return _this.composer.setSize(window.innerWidth, window.innerHeight);
    });
  };

  App.prototype.initObjects = function() {
    return this.scene.add(new THREE.Mesh(new THREE.SphereGeometry(100, 40, 20), new THREE.MeshLambertMaterial({
      color: 0xffffff,
      wireframe: false
    })));
  };

  App.prototype.animate = function() {
    requestAnimationFrame(this.animate);
    this.controls.update();
    this.composer.render();
    return this.stats.update();
  };

  return App;

})();

if (Detector.webgl) {
  new App();
} else {
  Detector.addGetWebGLMessage();
}


},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvaGlrby9Ecm9wYm94L0Rldi9KYXZhU2NyaXB0L1dvcmtzcGFjZS90aHJlZWpzLXRlbXBsYXRlL3NyYy9tYWluLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsR0FBQSxDQUFBO0dBQUEsK0VBQUE7O0FBQU0sQ0FBTjtDQUVlLENBQUEsQ0FBQSxVQUFBO0NBQ1gsd0NBQUE7Q0FBQSxnREFBQTtDQUFBLDRDQUFBO0NBQUEsR0FBQSxLQUFBO0NBQUEsR0FDQSxPQUFBO0NBREEsR0FFQSxHQUFBO0NBSEYsRUFBYTs7Q0FBYixFQU1XLE1BQVg7Q0FDRSxPQUFBLGdCQUFBO09BQUEsS0FBQTtDQUFBLENBQWMsQ0FBQSxDQUFkLENBQW1CLENBQW5CLElBQTBDLENBQTVCLE1BQUE7Q0FBZCxFQUNxQixDQUFyQixFQUFPLEVBQVM7Q0FEaEIsRUFHZ0IsQ0FBaEIsQ0FBcUIsQ0FBTCxFQUFoQixLQUFnQjtDQUhoQixFQUthLENBQWIsQ0FBQTtDQUxBLENBTzZDLENBQWpDLENBQVosQ0FBQSxHQUFZLFFBQUE7Q0FQWixDQVFzQixDQUF0QixDQUFBLENBQUssR0FBUztDQVJkLEVBU0EsQ0FBQSxDQUFNO0NBVE4sQ0FXNEMsQ0FBaEMsQ0FBWixDQUFBLEdBQVksT0FBQTtDQVhaLEVBWUEsQ0FBQSxDQUFNO0NBWk4sRUFjZ0IsQ0FBaEIsQ0FBcUIsR0FBckIsS0FBZ0I7Q0FBb0IsQ0FBVyxHQUFYLENBQUEsR0FBQTtDQWRwQyxLQWNnQjtDQWRoQixDQWVxQyxFQUFyQyxFQUF3QixDQUF4QixDQUFTLEVBQVQsQ0FBQTtDQWZBLEVBaUJZLENBQVosSUFBb0IsQ0FBcEIsRUFBWSxHQUFBO0NBakJaLEdBa0JBLElBQStCLENBQXRCLENBQVQsQ0FBQTtDQWxCQSxFQW9CYSxDQUFiLENBQUE7Q0FwQkEsR0FxQkEsQ0FBNEIsSUFBbkIsQ0FBVCxDQUFBO0NBckJBLEVBdUJnQixDQUFoQixDQUFxQixHQUFyQixNQUFnQjtDQXZCaEIsQ0F3QitDLEVBQS9DLENBQTJCLENBQUwsQ0FBdEIsQ0FBUyxFQUFhO0NBeEJ0QixFQXlCYSxDQUFiLENBQWtCLENBQWxCLElBQWEsS0FBQTtDQXpCYixFQTBCaUMsQ0FBakMsQ0FBQSxDQUFNLENBQVUsQ0FBQTtDQTFCaEIsR0EyQkEsRUFBQSxDQUFBLENBQVM7Q0EzQlQsRUE2QmEsQ0FBYixDQUFrQixDQUFsQixJQUFhLElBQUE7Q0E3QmIsRUE4QkEsQ0FBQSxFQUFrQixDQUFYLENBQVA7Q0E5QkEsRUFBQSxDQStCQSxDQUFBLENBQU0sRUFBVTtDQS9CaEIsRUFnQ3dCLENBQXhCLEVBQU0sUUFBTjtDQWhDQSxHQWlDQSxFQUFBLENBQUEsQ0FBUztDQUVGLENBQTJCLENBQUEsR0FBNUIsRUFBTixDQUFrQyxFQUFsQyxLQUFBO0NBQ0UsRUFBaUIsRUFBaEIsQ0FBRCxJQUFpQixDQUFqQjtDQUFBLElBQ0MsQ0FBRCxnQkFBQTtDQURBLENBRXFDLEdBQXBDLENBQUQsQ0FBQSxDQUFTLEVBQVQsQ0FBQTtDQUNDLENBQW9DLEdBQXBDLENBQXVCLENBQXhCLENBQVMsRUFBVCxDQUFBLEVBQUE7Q0FKRixJQUFrQztDQTFDcEMsRUFNVzs7Q0FOWCxFQWlEYSxNQUFBLEVBQWI7Q0FDRyxDQUMrQixDQURoQyxDQUFDLENBQUssTUFBTixHQUNNLEtBQ0E7Q0FBMEIsQ0FBTyxHQUFQLENBQUEsRUFBQTtDQUFBLENBQTRCLEdBQTVCLENBQWlCLEdBQUE7Q0FGbEMsS0FFVDtDQXBEUixFQWlEYTs7Q0FqRGIsRUF3RFMsSUFBVCxFQUFTO0NBQ1AsR0FBQSxHQUFBLGNBQUE7Q0FBQSxHQUNBLEVBQUEsRUFBUztDQURULEdBRUEsRUFBQSxFQUFTO0NBQ1IsR0FBQSxDQUFLLENBQU4sS0FBQTtDQTVERixFQXdEUzs7Q0F4RFQ7O0NBRkY7O0FBaUVBLENBQUEsR0FBRyxDQUFILEdBQVc7Q0FDVCxDQUFJLENBQUEsQ0FBQTtFQUROLElBQUE7Q0FHRSxDQUFBLE1BQVEsVUFBUjtFQXBFRiIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcFxuXG4gIGNvbnN0cnVjdG9yOiAtPlxuICAgIEBpbml0U2NlbmUoKVxuICAgIEBpbml0T2JqZWN0cygpXG4gICAgQGFuaW1hdGUoKVxuXG5cbiAgaW5pdFNjZW5lOiA9PlxuICAgIEBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNjAsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAxLCAxMDAwKVxuICAgIEBjYW1lcmEucG9zaXRpb24ueiA9IDUwMFxuXG4gICAgQGNvbnRyb2xzID0gbmV3IFRIUkVFLk9yYml0Q29udHJvbHMoQGNhbWVyYSlcblxuICAgIEBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpXG5cbiAgICBsaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmLCAwLjcpXG4gICAgbGlnaHQucG9zaXRpb24uc2V0KDEsIDEsIDEpXG4gICAgQHNjZW5lLmFkZChsaWdodClcblxuICAgIGxpZ2h0ID0gbmV3IFRIUkVFLkhlbWlzcGhlcmVMaWdodCgweGZmZmZmZiwgMHg4ODg4ODgsIDAuMylcbiAgICBAc2NlbmUuYWRkKGxpZ2h0KVxuXG4gICAgQHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoYW50aWFsaWFzOiBmYWxzZSlcbiAgICBAcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuXG4gICAgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKEByZW5kZXJlci5kb21FbGVtZW50KVxuXG4gICAgQHN0YXRzID0gbmV3IFN0YXRzKClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoQHN0YXRzLmRvbUVsZW1lbnQpXG5cbiAgICBAY29tcG9zZXIgPSBuZXcgVEhSRUUuRWZmZWN0Q29tcG9zZXIoQHJlbmRlcmVyKVxuICAgIEBjb21wb3Nlci5hZGRQYXNzKG5ldyBUSFJFRS5SZW5kZXJQYXNzKEBzY2VuZSwgQGNhbWVyYSkpXG4gICAgZWZmZWN0ID0gbmV3IFRIUkVFLlNoYWRlclBhc3MoVEhSRUUuRG90U2NyZWVuU2hhZGVyKVxuICAgIGVmZmVjdC51bmlmb3Jtc1snc2NhbGUnXS52YWx1ZSA9IDRcbiAgICBAY29tcG9zZXIuYWRkUGFzcyhlZmZlY3QpXG5cbiAgICBlZmZlY3QgPSBuZXcgVEhSRUUuU2hhZGVyUGFzcyhUSFJFRS5SR0JTaGlmdFNoYWRlcilcbiAgICBjb25zb2xlLmxvZyBlZmZlY3QudW5pZm9ybXNcbiAgICBlZmZlY3QudW5pZm9ybXNbJ2Ftb3VudCddLnZhbHVlICo9IDAuM1xuICAgIGVmZmVjdC5yZW5kZXJUb1NjcmVlbiA9IHRydWVcbiAgICBAY29tcG9zZXIuYWRkUGFzcyhlZmZlY3QpXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAncmVzaXplJywgPT5cbiAgICAgIEBjYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAgIEBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpXG4gICAgICBAcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuICAgICAgQGNvbXBvc2VyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcblxuXG4gIGluaXRPYmplY3RzOiA9PlxuICAgIEBzY2VuZS5hZGQobmV3IFRIUkVFLk1lc2goXG4gICAgICBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMTAwLCA0MCwgMjApXG4gICAgICBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbChjb2xvcjogMHhmZmZmZmYsIHdpcmVmcmFtZTogZmFsc2UpXG4gICAgICApKVxuXG5cbiAgYW5pbWF0ZTogPT5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoQGFuaW1hdGUpXG4gICAgQGNvbnRyb2xzLnVwZGF0ZSgpXG4gICAgQGNvbXBvc2VyLnJlbmRlcigpXG4gICAgQHN0YXRzLnVwZGF0ZSgpXG5cblxuaWYgRGV0ZWN0b3Iud2ViZ2xcbiAgbmV3IEFwcCgpXG5lbHNlXG4gIERldGVjdG9yLmFkZEdldFdlYkdMTWVzc2FnZSgpXG5cbiJdfQ==
;