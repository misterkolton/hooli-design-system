/* Add more transitions here */
export const springTransition = {
  type: 'spring',
  damping: 12,
  mass: 0.6,
  stiffness: 80,
  restSpeed: 0.01,
  restDelta: 0.01,
  duration: 0.3,
}

export const softSpringTransition = {
  damping: 15,
  stiffness: 100,
  type: 'spring',
}
export const easeInOpacityTransition = {
  ease: 'easeIn',
  duration: 0.35,
  type: 'tween',
}
