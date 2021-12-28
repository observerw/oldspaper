import React, { useEffect } from "react"
import * as THREE from "three"

export default () => {
    const WIDTH = window.innerWidth
    const HEIGHT = window.innerHeight

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
        alpha: true,
    });

    const cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
    const cubeMaterial = new THREE.MeshBasicMaterial({
        color: 0xff0000
    })
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

    useEffect(() => {
        renderer.setSize(WIDTH, HEIGHT)

        camera.position.x = 10
        camera.position.y = 10
        camera.position.z = 30
        camera.lookAt(scene.position)
        scene.add(cube)
    }, [])

    return <div>
        114514
    </div>
}