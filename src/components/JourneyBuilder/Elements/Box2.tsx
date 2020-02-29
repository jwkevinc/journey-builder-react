
import React, { useState, useRef } from 'react';
import Konva from 'konva';
import {Rect, Circle} from 'react-konva';

interface BoxProp {
  point: {
    x: number,
    y: number
  }
}

export default function Box2(props: BoxProp) {

  let { x, y } = props.point;
  const width = 50;
  const height = 50;

  const rectRef = useRef<Konva.Rect>(null);
  const [point, setPoint] = useState({x, y});
  const [opacity, setOpacity] = useState(1);
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
    setOpacity(0.5);
    setPoint({x, y});
  }

  function onHandleDragEnd(e: any) {
    console.log('drag ended: ', e);
  }

  function onHandleAnchorDown(e: any) {
    console.log(e);
  }

  function onHandleAnchorUp(e: any) {
    console.log(e);
  }

  return (
    <React.Fragment>
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
        opacity={opacity}
        strokeWidth={strokeWidth}
        draggable
        onDragMove={(e: any) => onHandleMouseMove(e)}
        onDragEnd={(e: any) => onHandleDragEnd(e)}
      />
    </React.Fragment>
  )
}