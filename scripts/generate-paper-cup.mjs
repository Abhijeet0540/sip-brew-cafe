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

const cupGroup = new THREE.Group();
cupGroup.name = 'SipAndBrew_PaperCup';

const radialSegments = 64;
const sleeveHeight = 1.25;
const topRadius = 0.44;
const sleeveBottomRadius = 0.325;

const sleeveGeo = new THREE.CylinderGeometry(
  topRadius,
  sleeveBottomRadius,
  sleeveHeight,
  radialSegments,
  32,
  true
);

const uvAttr = sleeveGeo.attributes.uv;
for (let i = 0; i < uvAttr.count; i++) {
  let u = uvAttr.getX(i);
  u = (u + 0.25) % 1.0;
  uvAttr.setX(i, u);
}
uvAttr.needsUpdate = true;

const paperMat = new THREE.MeshStandardMaterial({
  color: 0xEADCCB,
  roughness: 0.84,
  metalness: 0.03,
  side: THREE.DoubleSide,
  name: 'Mat_SipBrew_PrintedPaper'
});

const sleeveMesh = new THREE.Mesh(sleeveGeo, paperMat);
sleeveMesh.position.y = 0.06;
sleeveMesh.name = 'Cup_Outer_Sleeve';
sleeveMesh.castShadow = true;
sleeveMesh.receiveShadow = true;
cupGroup.add(sleeveMesh);

const rimRadius = topRadius - 0.005;
const rimTube = 0.024;
const rimGeo = new THREE.TorusGeometry(rimRadius, rimTube, 20, radialSegments);
rimGeo.rotateX(Math.PI / 2);
const whitePaperMat = new THREE.MeshStandardMaterial({
  color: 0xFAF6EF,
  roughness: 0.78,
  metalness: 0.02,
  name: 'Mat_White_Paper_Rim'
});
const rimMesh = new THREE.Mesh(rimGeo, whitePaperMat);
rimMesh.position.y = sleeveHeight / 2 + 0.06;
rimMesh.name = 'Cup_Rolled_Rim';
cupGroup.add(rimMesh);

const baseStepHeight = 0.14;
const baseStepRadius = 0.305;
const baseStepGeo = new THREE.CylinderGeometry(
  sleeveBottomRadius - 0.008,
  baseStepRadius,
  baseStepHeight,
  radialSegments,
  8,
  true
);
const baseMesh = new THREE.Mesh(baseStepGeo, whitePaperMat);
baseMesh.position.y = -sleeveHeight / 2 + 0.06 - baseStepHeight / 2 + 0.01;
baseMesh.name = 'Cup_Stepped_Base';
cupGroup.add(baseMesh);

const bottomDiscGeo = new THREE.CircleGeometry(baseStepRadius - 0.01, radialSegments);
bottomDiscGeo.rotateX(-Math.PI / 2);
const bottomDiscMesh = new THREE.Mesh(bottomDiscGeo, whitePaperMat);
bottomDiscMesh.position.y = -sleeveHeight / 2 + 0.06 - baseStepHeight + 0.03;
bottomDiscMesh.name = 'Cup_Bottom_Disc';
cupGroup.add(bottomDiscMesh);

const innerTopRadius = topRadius - 0.014;
const innerBottomRadius = baseStepRadius - 0.005;
const innerHeight = sleeveHeight + baseStepHeight - 0.03;
const innerGeo = new THREE.CylinderGeometry(
  innerTopRadius,
  innerBottomRadius,
  innerHeight,
  radialSegments,
  16,
  true
);
const innerMat = new THREE.MeshStandardMaterial({
  color: 0xF5F0E6,
  roughness: 0.88,
  metalness: 0.02,
  side: THREE.BackSide,
  name: 'Mat_Inner_Cup'
});
const innerMesh = new THREE.Mesh(innerGeo, innerMat);
innerMesh.position.y = 0.02;
innerMesh.name = 'Cup_Inner_Lining';
cupGroup.add(innerMesh);

const liquidRadius = topRadius * 0.90;
const liquidGeo = new THREE.CircleGeometry(liquidRadius, radialSegments);
liquidGeo.rotateX(-Math.PI / 2);
const liquidMat = new THREE.MeshStandardMaterial({
  color: 0x241510,
  roughness: 0.18,
  metalness: 0.08,
  name: 'Mat_Coffee_Liquid'
});
const liquidMesh = new THREE.Mesh(liquidGeo, liquidMat);
liquidMesh.position.y = sleeveHeight / 2 + 0.06 - 0.15;
liquidMesh.name = 'Coffee_Surface';
cupGroup.add(liquidMesh);

const cremaGeo = new THREE.RingGeometry(liquidRadius * 0.35, liquidRadius * 0.82, 48);
cremaGeo.rotateX(-Math.PI / 2);
const cremaMat = new THREE.MeshStandardMaterial({
  color: 0x96684E,
  roughness: 0.38,
  metalness: 0.03,
  name: 'Mat_Coffee_Crema'
});
const cremaMesh = new THREE.Mesh(cremaGeo, cremaMat);
cremaMesh.position.y = sleeveHeight / 2 + 0.06 - 0.148;
cremaMesh.name = 'Crema_Ring';
cupGroup.add(cremaMesh);

const scene = new THREE.Scene();
scene.add(cupGroup);

const outputDir = path.resolve('public/models');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const outputPath = path.join(outputDir, 'sip-brew-paper-cup.glb');
const exporter = new GLTFExporter();
exporter.parse(
  scene,
  (gltf) => {
    if (gltf instanceof ArrayBuffer) {
      fs.writeFileSync(outputPath, Buffer.from(gltf));
      console.log(`Generated: ${outputPath} (${(gltf.byteLength / 1024).toFixed(1)} KB)`);
    }
  },
  (err) => console.error(err),
  { binary: true }
);
