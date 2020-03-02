
import React, { useState, useRef } from 'react';
import Konva from 'konva';
import {Rect, Circle, Line} from 'react-konva';

interface BoxProp {
  point: {
    x: number,
    y: number
  }
}

const center = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
}

export default function Box2(props: BoxProp) {

  let { x, y } = props.point;
  const width = 50;
  const height = 50;

  const rectRef = useRef<Konva.Rect>(null);
  const [point, setPoint] = useState({x, y});
  const strokeWidth = 3;

  function findAnchor() {
    return {
      x: point.x + width / 2,
      y: point.y - 10
    }
  }

  function onHandleMouseMove(e: any) {
    const target: Konva.Rect = e.currentTarget;
    let { x, y } = target.attrs;
    setPoint({x, y});
  }

  function onHandleDragEnd(e: any) {
    console.log('drag end: ', e);
  }

  function onHandleAnchorDown(e: any) {
    console.log('anchor down: ', e);
  }

  function onHandleAnchorUp(e: any) {
    console.log('anchor up: ', e);
  }

  return (
    <React.Fragment>
      <Line
        points={[center.x, center.y, findAnchor().x, findAnchor().y]}
        stroke="black"
      />
      <Circle
        x={findAnchor().x}
        y={findAnchor().y}
        radius={5}
        fill="black"
        onMouseDown={(e) => onHandleAnchorDown(e)}
        onDragEnd={(e) => onHandleAnchorUp(e)}
      />
      <Rect
        ref={rectRef}
        x={point.x}
        y={point.y}
        width={width}
        height={height}
        stroke="black"
        fill="white"
        strokeWidth={strokeWidth}
        draggable
        onDragMove={(e: any) => onHandleMouseMove(e)}
        onDragEnd={(e: any) => onHandleDragEnd(e)}
      />
    </React.Fragment>
  )
}