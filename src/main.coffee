class App

  constructor: ->
    @initScene()
    @initObjects()
    @animate()


  initScene: =>
    @camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000)
    @camera.position.z = 500

    @controls = new THREE.OrbitControls(@camera)

    @scene = new THREE.Scene()

    light = new THREE.DirectionalLight(0xffffff, 0.7)
    light.position.set(1, 1, 1)
    @scene.add(light)

    light = new THREE.HemisphereLight(0xffffff, 0x888888, 0.3)
    @scene.add(light)

    @renderer = new THREE.WebGLRenderer(antialias: false)
    @renderer.setSize(window.innerWidth, window.innerHeight)

    container = document.getElementById('container')
    container.appendChild(@renderer.domElement)

    @stats = new Stats()
    container.appendChild(@stats.domElement)

    @composer = new THREE.EffectComposer(@renderer)
    @composer.addPass(new THREE.RenderPass(@scene, @camera))
    effect = new THREE.ShaderPass(THREE.DotScreenShader)
    effect.uniforms['scale'].value = 4
    @composer.addPass(effect)

    effect = new THREE.ShaderPass(THREE.RGBShiftShader)
    console.log effect.uniforms
    effect.uniforms['amount'].value *= 0.3
    effect.renderToScreen = true
    @composer.addPass(effect)

    window.addEventListener 'resize', =>
      @camera.aspect = window.innerWidth / window.innerHeight
      @camera.updateProjectionMatrix()
      @renderer.setSize(window.innerWidth, window.innerHeight)
      @composer.setSize(window.innerWidth, window.innerHeight)


  initObjects: =>
    @scene.add(new THREE.Mesh(
      new THREE.SphereGeometry(100, 40, 20)
      new THREE.MeshLambertMaterial(color: 0xffffff, wireframe: false)
      ))


  animate: =>
    requestAnimationFrame(@animate)
    @controls.update()
    @composer.render()
    @stats.update()


if Detector.webgl
  new App()
else
  Detector.addGetWebGLMessage()

