import { Component, OnInit, AfterViewInit, OnDestroy, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import * as THREE from "three";
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import * as Aos from 'aos';

@Component({
  selector: 'app-model-object',
  templateUrl: './model-object.component.html',
  styleUrls: ['./model-object.component.scss']
})
export class ModelObjectComponent {
  @ViewChild('canvas') private canvasRef!: ElementRef;

  @Input() public fieldOfView: number = 5;

  @Input('nearClipping') public nearClippingPane: number = 1;

  @Input('farClipping') public farClippingPane: number = 1000;

  //? Scene properties
  private camera!: THREE.PerspectiveCamera;

  private controls!: OrbitControls;

  private ambientLight!: THREE.AmbientLight;

  private light1!: THREE.PointLight;

  private light2!: THREE.PointLight;

  private light3!: THREE.PointLight;

  private light4!: THREE.PointLight;

  private model: any;

  private directionalLight!: THREE.DirectionalLight;

  //? Helper Properties (Private Properties);

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private loaderGLTF = new GLTFLoader();

  private renderer!: THREE.WebGLRenderer;

  private scene!: THREE.Scene;
  /**
   *Animate the model
   *
   * @private
   * @memberof ModelComponent
   */
  routing: boolean = false;



  private animateModel() {
    if (this.model) {

      var modelScreen = this.model.children[0].children[0].children[1];
      if (this.model.position.x < 0) {
        this.model.position.x += 0.5;
        this.model.rotation.z += 0.0785;
      }

      if (modelScreen.rotation.x > 3.1 && this.model.position.x == 0) {
        modelScreen.rotation.x -= 0.02;

      }
      if (modelScreen.rotation.x <= 3.1 && this.routing == false) {
        this.routing = true;
      }
      if(this.routing && this.camera.fov > 1.2) {
        this.camera.fov -= 0.05;
        this.camera.updateProjectionMatrix();
      }
    }
    if (this.camera.fov <=1.2 ) {

      setTimeout(()=> {
          this.router.navigate(['/portfolio']);

      },100);

    }
  }

  /**
   *create controls
   *
   * @private
   * @memberof ModelComponent
   */
  private createControls = () => {
    const renderer = new CSS2DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0px';
    document.body.appendChild(renderer.domElement);
    this.controls = new OrbitControls(this.camera, renderer.domElement);
    this.controls.autoRotate = false;
    this.controls.enableZoom = false;
    this.controls.enablePan = false;
    this.controls.update();
  };

  /**
   * Create the scene
   *
   * @private
   * @memberof CubeComponent
   */
  private createScene() {
    //* Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x999999)
    this.loaderGLTF.load('assets/laptop.glb', (gltf: GLTF) => {
      this.model = gltf.scene.children[0];
      this.model.children[0].children[0].children[1].rotation.x = 4.715;

      console.log(this.model.position);
      var box = new THREE.Box3().setFromObject(this.model);

      box.getCenter(this.model.position); // this re-sets the mesh position 
      this.model.position.y = -9;
      this.model.position.x = -40;
      this.model.children[0].children[0].children[1].children[0].material.emissiveIntensity = -5;
      this.model.children[0].children[0].children[1].children[0].material.color.set("black");
      this.model.children[0].children[0].children[0].children[0].material.color.set(0x4b371c);


      this.scene.add(this.model);
    });
    //*Camera
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPane,
      this.farClippingPane
    );
    this.camera.position.x = 0;
    this.camera.position.y = 60;
    this.camera.position.z = 500;
    this.directionalLight = new THREE.DirectionalLight(0x2a2a2a, 0.4);
    this.directionalLight.position.set(0, 1, 0);
    this.directionalLight.castShadow = true;
    this.scene.add(this.directionalLight);
    this.light1 = new THREE.PointLight(0x2a2a2a, 10);
    this.light1.position.set(0, 200, 400);
    this.scene.add(this.light1);
    this.light2 = new THREE.PointLight(0x4b371c, 10);
    this.light2.position.set(500, 100, 0);
    this.scene.add(this.light2);
    this.light3 = new THREE.PointLight(0x4b371c, 10);
    this.light3.position.set(0, 100, -500);
    this.scene.add(this.light3);
    this.light4 = new THREE.PointLight(0x4b371c, 10);
    this.light4.position.set(-500, 300, 500);
    this.scene.add(this.light4);
  }

  private getAspectRatio() {
    return (this.canvas.clientWidth) / (this.canvas.clientHeight);
  }

  /**
 * Start the rendering loop
 *
 * @private
 * @memberof CubeComponent
 */
  private startRenderingLoop() {
    //* Renderer
    // Use canvas element in template
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    let component: ModelObjectComponent = this;
    (function render() {
      component.renderer.render(component.scene, component.camera);
      component.animateModel();
      requestAnimationFrame(render);
    }());
  }
  private attachedDiv!: HTMLElement;

  ngOnInit() {

    Aos.init();
    
  }

  setFov() {
    if (window.innerWidth < 700) {
      this.camera.fov = 8;
    }
    if (window.innerWidth < 450) {
      this.camera.fov = 13;
    }
  }

  private aspectRatio: number = 1; // Initialize with a default aspect ratio

  constructor(private router: Router) {
    // Listen to window resize event to handle responsiveness
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  /**
   * Update camera aspect ratio and renderer size on window resize
   */
  private onWindowResize() {
    this.aspectRatio = this.getAspectRatio();
    this.setFov();
    // Limit the maximum size of the canvas to prevent performance issues on large screens
    const maxCanvasWidth = 1920; // You can adjust this value according to your needs
    const maxCanvasHeight = 1080; // You can adjust this value according to your needs
    const clientWidth = Math.min(window.innerWidth, maxCanvasWidth);
    const clientHeight = Math.min(window.innerHeight, maxCanvasHeight);

    this.camera.aspect = this.aspectRatio;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(clientWidth, clientHeight);
    this.controls.update();
  }


  ngAfterViewInit() {
    this.createScene();
    this.startRenderingLoop();
    this.setFov();
    this.createControls();
    this.onWindowResize(); // Call onWindowResize on component initialization
  }

  ngOnDestroy(): void {
    // Clean up the Three.js scene and resources here
    this.disposeScene();
    // Remove the window resize event listener
    window.removeEventListener('resize', this.onWindowResize);
  }

  disposeScene(): void {
    // Dispose of the WebGL renderer and remove its DOM element
    this.renderer.dispose();
    this.renderer.domElement.remove();

    // Dispose of any other resources related to the scene, such as textures, materials, geometries, etc.
    // ...

    // Remove the laptop model from the scene
    if (this.model) {
      this.scene.remove(this.model);
      this.model.traverse((object: THREE.Object3D) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material instanceof THREE.Material) {
            object.material.dispose();
          } else if (Array.isArray(object.material)) {
            object.material.forEach((material: THREE.Material) => material.dispose());
          }
        }
      });
    }

    // Clean up other properties and set them to null or default values
    this.model = null;
    this.routing = false;
    this.camera.fov = 5;
    this.camera.updateProjectionMatrix();
  }


}
