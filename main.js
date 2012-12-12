(function() {
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

}).call(this);
