
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-body-landing',
  templateUrl: './body-landing.component.html',
  styleUrls: ['./body-landing.component.css']
})
export class BodyLandingComponent implements OnInit {
  
  @ViewChild('canvas') canvasRef!: ElementRef;
  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGLRenderer;
  particles!: THREE.Group;

  ngOnInit() {
    this.initScene();
    this.createParticles();
    this.animate();
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvasRef.nativeElement });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  createParticles() {
    this.particles = new THREE.Group();

    const width = window.innerWidth;
    const height = window.innerHeight;

    for (let i = 0; i < 500; i++) {
      const geometry = new THREE.SphereGeometry(0.1, 16, 8);
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
      const particle = new THREE.Mesh(geometry, material);
      particle.position.x = Math.random() * width - width / 2;
      particle.position.y = Math.random() * height - height / 2;
      particle.position.z = Math.random() * 2 - 1;
      this.particles.add(particle);
    }

    this.scene.add(this.particles);
  }

  animate() {
    requestAnimationFrame(this.animate);

    this.particles.rotation.x += 0.01;
    this.particles.rotation.y += 0.01;

    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    
this.renderer.setSize(window.innerWidth, window.innerHeight);
  }


}
