import { useRef, useEffect } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import * as THREE from "three";

export function Avatar(props) {
  const { animation } = props;
  const { headFollow, cursorFollow, wireframe } = useControls({
    headFollow: false,
    cursorFollow: false,
    wireframe: false,
  });
  const { nodes, materials } = useGLTF("models/655974529b792809cda9d180.glb");

  const groupRef = useRef();
  const { animations: typingAnimation } = useFBX("animations/Typing.fbx");
  const { animations: happyAnimation } = useFBX("animations/Happy.fbx");
  const { animations: pointingAnimation } = useFBX("animations/Pointing.fbx");
  const { animations: pacingAnimation } = useFBX("animations/Pacing.fbx");

  typingAnimation[0].name = "Typing";
  happyAnimation[0].name = "Happy";
  pointingAnimation[0].name = "Pointing";
  pacingAnimation[0].name = "Pacing";

  const { actions } = useAnimations(
    [
      typingAnimation[0],
      happyAnimation[0],
      pointingAnimation[0],
      pacingAnimation[0],
    ],
    groupRef
  );

  useFrame((state) => {
    if (headFollow) {
      groupRef.current.getObjectByName("Head").lookAt(state.camera.position);
    }
    if (cursorFollow) {
      const target = new THREE.Vector3(state.pointer.x, state.pointer.y, 1);
      groupRef.current.getObjectByName("Spine2").lookAt(target);
    }
  });

  useEffect(() => {
    const handleAnimationChange = () => {
      actions[animation].reset().fadeIn(0.005).play();
    };

    handleAnimationChange();

    return () => {
      actions[animation].fadeOut(1).reset();
    };
  }, [animation, actions]);

  useEffect(() => {
    Object.values(materials).forEach((material) => {
      material.wireframe = wireframe;
    });
  }, [wireframe]);

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <group rotation-x={-Math.PI / 2}>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/655974529b792809cda9d180.glb");
