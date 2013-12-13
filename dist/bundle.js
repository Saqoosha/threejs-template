;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
    var container, light,
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
    return window.addEventListener('resize', function() {
      _this.camera.aspect = window.innerWidth / window.innerHeight;
      _this.camera.updateProjectionMatrix();
      return _this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  };

  App.prototype.initObjects = function() {
    return this.scene.add(new THREE.Mesh(new THREE.SphereGeometry(100, 40, 20), new THREE.MeshLambertMaterial({
      color: 0xffffff,
      wireframe: true
    })));
  };

  App.prototype.animate = function() {
    requestAnimationFrame(this.animate);
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
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
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvaGlrby9Ecm9wYm94L0Rldi9KYXZhU2NyaXB0L1dvcmtzcGFjZS90aHJlZWpzLXRlbXBsYXRlL3NyYy9tYWluLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsR0FBQSxDQUFBO0dBQUEsK0VBQUE7O0FBQU0sQ0FBTjtDQUVlLENBQUEsQ0FBQSxVQUFBO0NBQ1gsd0NBQUE7Q0FBQSxnREFBQTtDQUFBLDRDQUFBO0NBQUEsR0FBQSxLQUFBO0NBQUEsR0FDQSxPQUFBO0NBREEsR0FFQSxHQUFBO0NBSEYsRUFBYTs7Q0FBYixFQU1XLE1BQVg7Q0FDRSxPQUFBLFFBQUE7T0FBQSxLQUFBO0NBQUEsQ0FBYyxDQUFBLENBQWQsQ0FBbUIsQ0FBbkIsSUFBMEMsQ0FBNUIsTUFBQTtDQUFkLEVBQ3FCLENBQXJCLEVBQU8sRUFBUztDQURoQixFQUdnQixDQUFoQixDQUFxQixDQUFMLEVBQWhCLEtBQWdCO0NBSGhCLEVBS2EsQ0FBYixDQUFBO0NBTEEsQ0FPNkMsQ0FBakMsQ0FBWixDQUFBLEdBQVksUUFBQTtDQVBaLENBUXNCLENBQXRCLENBQUEsQ0FBSyxHQUFTO0NBUmQsRUFTQSxDQUFBLENBQU07Q0FUTixDQVc0QyxDQUFoQyxDQUFaLENBQUEsR0FBWSxPQUFBO0NBWFosRUFZQSxDQUFBLENBQU07Q0FaTixFQWNnQixDQUFoQixDQUFxQixHQUFyQixLQUFnQjtDQUFvQixDQUFXLEdBQVgsQ0FBQSxHQUFBO0NBZHBDLEtBY2dCO0NBZGhCLENBZXFDLEVBQXJDLEVBQXdCLENBQXhCLENBQVMsRUFBVCxDQUFBO0NBZkEsRUFpQlksQ0FBWixJQUFvQixDQUFwQixFQUFZLEdBQUE7Q0FqQlosR0FrQkEsSUFBK0IsQ0FBdEIsQ0FBVCxDQUFBO0NBbEJBLEVBb0JhLENBQWIsQ0FBQTtDQXBCQSxHQXFCQSxDQUE0QixJQUFuQixDQUFULENBQUE7Q0FFTyxDQUEyQixDQUFBLEdBQTVCLEVBQU4sQ0FBa0MsRUFBbEMsS0FBQTtDQUNFLEVBQWlCLEVBQWhCLENBQUQsSUFBaUIsQ0FBakI7Q0FBQSxJQUNDLENBQUQsZ0JBQUE7Q0FDQyxDQUFvQyxHQUFwQyxDQUF1QixDQUF4QixDQUFTLEVBQVQsQ0FBQSxFQUFBO0NBSEYsSUFBa0M7Q0E5QnBDLEVBTVc7O0NBTlgsRUFvQ2EsTUFBQSxFQUFiO0NBQ0csQ0FDK0IsQ0FEaEMsQ0FBQyxDQUFLLE1BQU4sR0FDTSxLQUNBO0NBQTBCLENBQU8sR0FBUCxDQUFBLEVBQUE7Q0FBQSxDQUE0QixFQUE1QixFQUFpQixHQUFBO0NBRmxDLEtBRVQ7Q0F2Q1IsRUFvQ2E7O0NBcENiLEVBMkNTLElBQVQsRUFBUztDQUNQLEdBQUEsR0FBQSxjQUFBO0NBQUEsR0FDQSxFQUFBLEVBQVM7Q0FEVCxDQUV5QixFQUF6QixDQUFBLENBQUEsRUFBUztDQUNSLEdBQUEsQ0FBSyxDQUFOLEtBQUE7Q0EvQ0YsRUEyQ1M7O0NBM0NUOztDQUZGOztBQW9EQSxDQUFBLEdBQUcsQ0FBSCxHQUFXO0NBQ1QsQ0FBSSxDQUFBLENBQUE7RUFETixJQUFBO0NBR0UsQ0FBQSxNQUFRLFVBQVI7RUF2REYiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHBcblxuICBjb25zdHJ1Y3RvcjogLT5cbiAgICBAaW5pdFNjZW5lKClcbiAgICBAaW5pdE9iamVjdHMoKVxuICAgIEBhbmltYXRlKClcblxuXG4gIGluaXRTY2VuZTogPT5cbiAgICBAY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDYwLCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMSwgMTAwMClcbiAgICBAY2FtZXJhLnBvc2l0aW9uLnogPSA1MDBcblxuICAgIEBjb250cm9scyA9IG5ldyBUSFJFRS5PcmJpdENvbnRyb2xzKEBjYW1lcmEpXG5cbiAgICBAc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKVxuXG4gICAgbGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZiwgMC43KVxuICAgIGxpZ2h0LnBvc2l0aW9uLnNldCgxLCAxLCAxKVxuICAgIEBzY2VuZS5hZGQobGlnaHQpXG5cbiAgICBsaWdodCA9IG5ldyBUSFJFRS5IZW1pc3BoZXJlTGlnaHQoMHhmZmZmZmYsIDB4ODg4ODg4LCAwLjMpXG4gICAgQHNjZW5lLmFkZChsaWdodClcblxuICAgIEByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKGFudGlhbGlhczogZmFsc2UpXG4gICAgQHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcblxuICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChAcmVuZGVyZXIuZG9tRWxlbWVudClcblxuICAgIEBzdGF0cyA9IG5ldyBTdGF0cygpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKEBzdGF0cy5kb21FbGVtZW50KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgJ3Jlc2l6ZScsID0+XG4gICAgICBAY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgICBAY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKVxuICAgICAgQHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcblxuXG4gIGluaXRPYmplY3RzOiA9PlxuICAgIEBzY2VuZS5hZGQobmV3IFRIUkVFLk1lc2goXG4gICAgICBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMTAwLCA0MCwgMjApXG4gICAgICBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbChjb2xvcjogMHhmZmZmZmYsIHdpcmVmcmFtZTogdHJ1ZSlcbiAgICAgICkpXG5cblxuICBhbmltYXRlOiA9PlxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShAYW5pbWF0ZSlcbiAgICBAY29udHJvbHMudXBkYXRlKClcbiAgICBAcmVuZGVyZXIucmVuZGVyKEBzY2VuZSwgQGNhbWVyYSlcbiAgICBAc3RhdHMudXBkYXRlKClcblxuXG5pZiBEZXRlY3Rvci53ZWJnbFxuICBuZXcgQXBwKClcbmVsc2VcbiAgRGV0ZWN0b3IuYWRkR2V0V2ViR0xNZXNzYWdlKClcblxuIl19
;