import React from 'react'

export function resolveSlidesNumber(perPage) {
  let result
  if (typeof perPage === 'number') {
    result = perPage
  } else if (typeof perPage === 'object') {
    result = 1
    if (window) {
      for (const viewport in perPage) {
        if (window.innerWidth >= viewport) {
          result = perPage[viewport]
        }
      }
    }
  }
  return result
}

export function setStyle(target, styles) {
  Object.keys(styles).forEach(attr => {
    target.style[attr] = styles[attr]
  })
}

function getZeroOrString(num = 0) {
  return num === 0 ? num : `${num}%`
}

export function getTranslateProperty(x = 0, y = 0, z = 0) {
  return {
    transform: `translate3d(${getZeroOrString(x)}, ${getZeroOrString(y)}, ${getZeroOrString(z)})`,
    WebkitTransform: `translate3d(${getZeroOrString(x)}, ${getZeroOrString(y)}, ${getZeroOrString(z)})`
  }
}

export function getStylingTransition(easing, duration = 0) {
  return {
    WebkitTransition: `all ${duration}ms ${easing}`,
    transition: `all ${duration}ms ${easing}`
  }
}

export const constants = {
  defaultResizeDebounce: 250,
  defaultTransitionDuration: 250
}

export function arrayShallowCompare(arr = [], arr2 = []) {
  if (arr.length !== arr2.length) {
    return false
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

export function cloneChildren(children, perPage) {
  return [
    ...children.slice(children.length - perPage, children.length),
    ...children,
    ...children.slice(0, perPage)
  ]
}

