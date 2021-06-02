import * as React from 'react';
import * as THREE from 'three'
import { GLView } from 'expo-gl';
import { Renderer } from 'expo-three';
import OrbitControlsView from 'expo-three-orbit-controls';

export default class TreeJsCubeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      camera: null
    };
  }
  _onGLContextCreate = async (gl) => {
    const renderer = new Renderer({ gl });
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000
    );
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;
    camera.lookAt(cube.position);
    this.setState({
      camera: camera
    })

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.07;
      cube.rotation.y += 0.04;
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
