import * as React from 'react';
import * as THREE from 'three'
import { GLView } from 'expo-gl';
import { Renderer, TextureLoader } from 'expo-three';
import OrbitControlsView from 'expo-three-orbit-controls';
import texturesHardWood2Diffuse from '../public/textures/hardwood2_diffuse.jpg'
import texturesSkyNx from '../public/textures/skybox/nx.jpg'
import texturesSkyNy from '../public/textures/skybox/ny.jpg'
import texturesSkyNz from '../public/textures/skybox/nz.jpg'
import texturesSkyPx from '../public/textures/skybox/px.jpg'
import texturesSkyPy from '../public/textures/skybox/py.jpg'
import texturesSkyPz from '../public/textures/skybox/pz.jpg'

export default class OrbitControlScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      camera: null
    };
  }
  _onGLContextCreate = async (gl) => {
    const renderer = new Renderer({ gl });
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

    const skybox = [
      new THREE.MeshBasicMaterial({ map: new TextureLoader().load(texturesSkyNx) }),
      new THREE.MeshBasicMaterial({ map: new TextureLoader().load(texturesSkyPx) }),
      new THREE.MeshBasicMaterial({ map: new TextureLoader().load(texturesSkyPy) }),
      new THREE.MeshBasicMaterial({ map: new TextureLoader().load(texturesSkyNy) }),
      new THREE.MeshBasicMaterial({ map: new TextureLoader().load(texturesSkyNz) }),
      new THREE.MeshBasicMaterial({ map: new TextureLoader().load(texturesSkyPz) })
    ];
    for (let i = 0; i < 6; i++)
      skybox[i].side = THREE.BackSide;

    const textureLoader = new TextureLoader();
    const floorMat = new THREE.MeshStandardMaterial(
      { roughness: 0.8, color: 0xffffff, metalness: 0.2, bumpScale: 0.0005 }
    );
    textureLoader.load(texturesHardWood2Diffuse, function (map) {
      map.wrapS = THREE.RepeatWrapping;
      map.wrapT = THREE.RepeatWrapping;
      map.anisotropy = 4;
      map.repeat.set(10, 24);
      map.encoding = THREE.sRGBEncoding;
      floorMat.map = map;
      floorMat.needsUpdate = true;
    });

    const scene = new THREE.Scene();
    const skyboxGeometry = new THREE.BoxGeometry(1000, 1000, 1000);
    const skyboxMesh = new THREE.Mesh(skyboxGeometry, skybox);
    scene.add(skyboxMesh);

    const floorGeometry = new THREE.PlaneGeometry(20, 20);
    const floorMesh = new THREE.Mesh(floorGeometry, floorMat);
    floorMesh.receiveShadow = true;
    floorMesh.rotation.x = - Math.PI / 2.0;
    scene.add(floorMesh);
    scene.add(new THREE.AmbientLight(0x666666));

    const camera = new THREE.PerspectiveCamera(75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000);
    camera.position.x = - 4;
    camera.position.z = 4;
    camera.position.y = 2;
    this.setState({ camera: camera })

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      gl.endFrameEXP();
    }
    animate();
  };
  render() {
    return (
      <OrbitControlsView style={{ flex: 1 }} camera={this.state.camera}>
        <GLView
          style={{ flex: 1 }}
          onContextCreate={this._onGLContextCreate}
        />
      </OrbitControlsView>
    )
  }
}
