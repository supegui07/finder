import { useState, useEffect } from "react"
import mojs from "mo-js";

export const useClapAnimation = ({
  timelineDuration,
  bounceElement,
  fadeElement,
  burstElement
}) => {
  console.log('animating...')
  const [ animationTimeline, setAnimationTimeline ] = useState( new mojs.Timeline())

  useEffect(() => {
    if (!bounceElement || !fadeElement || !burstElement) {
      return
    }

    const triangleBurst = new mojs.Burst({
      parent: burstElement,
      radius: { 50: 95 },
      count: 5,
      angle: 30,
      children: {
        shape: 'polygon',
        radius: { 6: 0 },
        scale: 1,
        stroke: 'rgba(211,84,0 ,0.5)',
        strokeWidth: 2,
        angle: 210,
        delay: 30,
        speed: 0.2,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
        duration: timelineDuration
      }
    });

    const circleBurst = new mojs.Burst({
      parent: burstElement,
      radius: { 50: 75 },
      angle: 25,
      duration: timelineDuration,
      children: {
        shape: 'circle',
        fill: 'rgba(149,165,166 ,0.5)',
        delay: 30,
        speed: 0.2,
        radius: { 3: 0 },
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
      }
    });

    const countAnimation = new mojs.Html({
      el: bounceElement,
      isShowStart: false,
      isShowEnd: true,
      y: { 0: -30 },
      opacity: { 0: 1 },
      duration: timelineDuration
    }).then({
      opacity: { 1: 0 },
      y: -80,
      delay: timelineDuration / 2
    })

    const countTotalAnimation = new mojs.Html({
      el: fadeElement,
      isShowStart: false,
      isShowEnd: true,
      opacity: { 0: 1 },
      delay: (3 * timelineDuration) / 2,
      duration: timelineDuration,
      y: { 0: 75 },
      x: { 0: -10 }
    })

    const scaleButton = new mojs.Html({
      el: burstElement,
      duration: timelineDuration,
      scale: { 1.3: 1 },
      easing: mojs.easing.out
    })

    burstElement.style.transform = 'scale(1, 1)'

    const updatedAnimationTimeline = animationTimeline.add([
      countAnimation,
      countTotalAnimation,
      scaleButton,
      circleBurst,
      triangleBurst
    ])

    setAnimationTimeline(updatedAnimationTimeline)
  },
  [timelineDuration, animationTimeline, bounceElement, fadeElement, burstElement])

  return animationTimeline;
}