import {camera} from '../index'

function screenXY(vec3){

  var vector = vec3.clone()

  var widthHalf = (window.innerWidth/2)
  var heightHalf = (window.innerHeight/2)

  vector.project(camera)

  vector.x = ( vector.x * widthHalf ) + widthHalf
  vector.y = - ( vector.y * heightHalf ) + heightHalf

  return vector

}

const screenXYclamped = (vec3) => {
  const screenPosition = screenXY(vec3)
  return {
    x: Math.min(Math.max(10, screenPosition.x), window.innerWidth - 10),
    y: Math.min(Math.max(10, screenPosition.y), window.innerHeight - 10),
    z: screenPosition.z
  }
}

export {screenXY, screenXYclamped}