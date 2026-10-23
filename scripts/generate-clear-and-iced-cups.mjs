import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import fs from 'fs';
import path from 'path';

class NodeFileReader {
  async readAsArrayBuffer(blob) {
    this.result = await blob.arrayBuffer();
    if (this.onloadend) this.onloadend();
  }
}
globalThis.FileReader = NodeFileReader;

const outputDir = path.resolve('public/models');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

function exportScene(scene, filename) {
  const exporter = new GLTFExporter();
  exporter.parse(
    scene,
    (gltf) => {
      const outputPath = path.join(outputDir, filename);
      fs.writeFileSync(outputPath, Buffer.from(gltf));
      console.log(`Generated: ${outputPath} (${(gltf.byteLength / 1024).toFixed(1)} KB)`);
    },
    (err) => console.error(err),
    { binary: true }
  );
}

// 1. Clear Plastic Takeaway Cup
function createClearCup() {
  const scene = new THREE.Scene();
  const group = new THREE.Group();
  group.name = 'SipAndBrew_ClearCup';

  const height = 1.35;
  const topRadius = 0.45;
  const bottomRadius = 0.30;
  const radialSegments = 64;

  const plasticMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xFFFFFF,
    transmission: 0.92,
    opacity: 1,
    transparent: true,
    roughness: 0.08,
    ior: 1.48,
    thickness: 0.04,
    side: THREE.DoubleSide,
    name: 'Mat_Clear_Plastic'
  });

  const bodyGeo = new THREE.CylinderGeometry(topRadius, bottomRadius, height, radialSegments, 16, true);
  const body = new THREE.Mesh(bodyGeo, plasticMaterial);
  group.add(body);

  const rimGeo = new THREE.TorusGeometry(topRadius - 0.005, 0.02, 16, radialSegments);
  rimGeo.rotateX(Math.PI / 2);
  const rim = new THREE.Mesh(rimGeo, plasticMaterial);
  rim.position.y = height / 2;
  group.add(rim);

  const baseGeo = new THREE.CircleGeometry(bottomRadius, radialSegments);
  baseGeo.rotateX(-Math.PI / 2);
  const base = new THREE.Mesh(baseGeo, plasticMaterial);
  base.position.y = -height / 2;
  group.add(base);

  const lidGeo = new THREE.CylinderGeometry(topRadius + 0.015, topRadius + 0.01, 0.05, radialSegments);
  const lid = new THREE.Mesh(lidGeo, plasticMaterial);
  lid.position.y = height / 2 + 0.03;
  group.add(lid);

  scene.add(group);
  exportScene(scene, 'sip-brew-clear-cup.glb');
}

// 2. Iced Drink Cup (with layered espresso, cold foam & ice cubes)
function createIcedCup() {
  const scene = new THREE.Scene();
  const group = new THREE.Group();
  group.name = 'SipAndBrew_IcedCup';

  const height = 1.35;
  const topRadius = 0.45;
  const bottomRadius = 0.30;
  const radialSegments = 64;

  const plasticMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xFFFFFF,
    transmission: 0.90,
    opacity: 1,
    transparent: true,
    roughness: 0.08,
    ior: 1.48,
    thickness: 0.04,
    side: THREE.DoubleSide,
    name: 'Mat_Clear_Plastic'
  });

  const bodyGeo = new THREE.CylinderGeometry(topRadius, bottomRadius, height, radialSegments, 16, true);
  const body = new THREE.Mesh(bodyGeo, plasticMaterial);
  group.add(body);

  const rimGeo = new THREE.TorusGeometry(topRadius - 0.005, 0.02, 16, radialSegments);
  rimGeo.rotateX(Math.PI / 2);
  const rim = new THREE.Mesh(rimGeo, plasticMaterial);
  rim.position.y = height / 2;
  group.add(rim);

  const baseGeo = new THREE.CircleGeometry(bottomRadius, radialSegments);
  baseGeo.rotateX(-Math.PI / 2);
  const base = new THREE.Mesh(baseGeo, plasticMaterial);
  base.position.y = -height / 2;
  group.add(base);

  const espressoGeo = new THREE.CylinderGeometry(0.35, bottomRadius - 0.01, 0.45, radialSegments);
  const espressoMat = new THREE.MeshStandardMaterial({
    color: 0x2A1810,
    roughness: 0.2,
    metalness: 0.05
  });
  const espresso = new THREE.Mesh(espressoGeo, espressoMat);
  espresso.position.y = -height / 2 + 0.225;
  group.add(espresso);

  const latteGeo = new THREE.CylinderGeometry(0.40, 0.35, 0.45, radialSegments);
  const latteMat = new THREE.MeshStandardMaterial({
    color: 0xD9C2A7,
    roughness: 0.3,
    metalness: 0.05
  });
  const latte = new THREE.Mesh(latteGeo, latteMat);
  latte.position.y = -height / 2 + 0.225 + 0.45;
  group.add(latte);

  const foamGeo = new THREE.CylinderGeometry(0.42, 0.40, 0.25, radialSegments);
  const foamMat = new THREE.MeshStandardMaterial({
    color: 0xFAF6EF,
    roughness: 0.6,
    metalness: 0.0
  });
  const foam = new THREE.Mesh(foamGeo, foamMat);
  foam.position.y = -height / 2 + 0.225 + 0.45 + 0.30;
  group.add(foam);

  const iceMat = new THREE.MeshPhysicalMaterial({
    color: 0xE8F4F8,
    transmission: 0.85,
    opacity: 0.9,
    transparent: true,
    roughness: 0.12,
    ior: 1.31
  });

  const icePositions = [
    [-0.12, 0.35, 0.10, 0.3, 0.5, 0.2],
    [0.14, 0.38, -0.08, -0.4, 0.2, 0.6],
    [-0.05, 0.42, -0.15, 0.2, -0.3, 0.4],
    [0.10, 0.32, 0.12, -0.5, 0.1, -0.3]
  ];

  icePositions.forEach(([x, y, z, rx, ry, rz], idx) => {
    const cubeGeo = new THREE.BoxGeometry(0.14, 0.14, 0.14);
    const cube = new THREE.Mesh(cubeGeo, iceMat);
    cube.position.set(x, y, z);
    cube.rotation.set(rx, ry, rz);
    cube.name = `Ice_Cube_${idx + 1}`;
    group.add(cube);
  });

  const lidGeo = new THREE.CylinderGeometry(topRadius + 0.015, topRadius + 0.01, 0.05, radialSegments);
  const lid = new THREE.Mesh(lidGeo, plasticMaterial);
  lid.position.y = height / 2 + 0.03;
  group.add(lid);

  scene.add(group);
  exportScene(scene, 'sip-brew-iced-cup.glb');
}

createClearCup();
createIcedCup();
