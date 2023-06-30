import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';

import * as THREE from "three";
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { Observable, Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-model-object',
  templateUrl: './model-object.component.html',
  styleUrls: ['./model-object.component.scss']
})
export class ModelObjectComponent {
  @ViewChild('canvas') private canvasRef!: ElementRef;

  //* Stage Properties

  @Input() public fieldOfView: number = 3;

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
  private animateModel() {
    if (this.model) {
     var modelScreen = this.model.children[0].children[0].children[1];
    //  const { x, y } = this.getScreenPosition(this.model);
    //   this.updateAttachedDivPosition(x, y); 
     if (modelScreen.rotation.x > 3.1)
      modelScreen.rotation.x -= 0.005;
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
    this.controls.enableZoom = true;
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
    this.scene.background = new THREE.Color(0xffff)
    this.loaderGLTF.load('assets/laptop.glb', (gltf: GLTF) => {
      this.model = gltf.scene.children[0];
      this.model.children[0].children[0].children[1].rotation.x = 4.715;
     var color: string = "#1A191D";
      
      console.log(this.model.children[0].children[0].children[1].children[0]);
      var box = new THREE.Box3().setFromObject(this.model);
      
     box.getCenter(this.model.position); // this re-sets the mesh position 
     this.model.position.y = -9; 
     this.scene.add(this.model);
    });
    //*Camera
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPane,
      this.farClippingPane
    )
    this.camera.position.x = 0;
    this.camera.position.y = 60;
    this.camera.position.z = 500;
    this.ambientLight = new THREE.AmbientLight(0x00000, 50);
    this.scene.add(this.ambientLight);
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

  ngOnInit(): void {
    this.attachedDiv = document.querySelector('#hero-backup') as HTMLElement;
    // ...
  }
  
  // private getScreenPosition(object: THREE.Object3D): { x: number; y: number } {
  //   const vector = new THREE.Vector3();
  //   vector.setFromMatrixPosition(object.matrixWorld);
  //   vector.project(this.camera);
  //   const canvas = this.renderer.domElement;
  //   const widthHalf = canvas.width / 2;
  //   const heightHalf = canvas.height / 2;
  //   const x = (vector.x * widthHalf) + widthHalf;
  //   const y = -(vector.y * heightHalf) + heightHalf;
  //   return { x, y };
  // }
  
  private updateAttachedDivPosition(x: number, y: number): void {
    this.attachedDiv.style.left = `${x}px`;
    this.attachedDiv.style.top = `${y}px`;
  }
  constructor() { }
  // resize$!: Observable<Event>;
  // resizeSub$!: Subscription;


  ngAfterViewInit() {
    this.createScene();
    this.startRenderingLoop();
    this.createControls();
  }

}