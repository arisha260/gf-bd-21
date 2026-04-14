import { useEffect, useRef, useState } from "react";
import { ClickIcon } from "./icons/click-icon";
import { Heart1 } from "./icons/heart1";
import { Heart2 } from "./icons/Heart2";
import { Heart3 } from "./icons/Heart3";
import { Heart4 } from "./icons/Heart4";
import { Heart5 } from "./icons/Heart5";

interface Props {
  clickCount: number,
}

type IconType = {
  id: number
  x: number
  y: number
  dx: number
  dy: number
}

export function FirstStage({clickCount}: Props) {

  const fz = 128 + clickCount*10;

  const [iconsRef] = useState<IconType[]>(() =>
    Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
    }))
  )

  const elementsRef = useRef<HTMLDivElement[]>([])

  const hearts = [Heart1, Heart2, Heart3, Heart4, Heart5]

  useEffect(() => {

    const animate = () => {

      iconsRef.forEach((icon, i) => {
        icon.x += icon.dx
        icon.y += icon.dy

        const el = elementsRef.current[i]
        if (!el) return

        const rect = el.getBoundingClientRect()

        if (icon.x < 0 || icon.x + rect.width > window.innerWidth) {
          icon.dx *= -1
        }

        if (icon.y < 0 || icon.y + rect.height > window.innerHeight) {
          icon.dy *= -1
        }

        el.style.transform = `translate(${icon.x}px, ${icon.y}px)`
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [iconsRef])

  return (
    <div className="stage first-stage">
      <div className="icons">
        <div className="icons-container">

          {/* первые 5 — компоненты */}
          {iconsRef.slice(0, 5).map((icon, i) => {
            const Component = hearts[i]

            return (
              <div className="icon-wrapper"
                key={icon.id}
                ref={el => {
                  if (el) {
                    (elementsRef.current[i] = el)
                  }}}
                >
                <Component />
              </div>
            )
          })}

          {/* вторые 5 — div с bg */}
          {iconsRef.slice(5, 10).map((icon, i) => (
            <div className="icon-wrapper"
              key={icon.id}
              ref={el => {
                  if (el) {
                    (elementsRef.current[i+5] = el)
                  }}}
                >
              <div
                className={`first-stage-icon first-stage-icon_${i + 6}`}
              />
            </div>
          ))}

        </div>
      </div>
        <div className="text first-stage-text" style={{ fontSize: `${fz}px` }}>
          {clickCount >= 1 ? <p>ТЫК!</p> : <p>ТЫКАЙ!</p>}
          <ClickIcon />
        </div>
    </div>
  )
}