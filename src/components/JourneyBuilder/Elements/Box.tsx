
import React from 'react';

import {Rect, Line, Circle, Text} from 'react-konva';

interface IProp {
  level: number,
  isLeftChild?: boolean,
  isRightChild?: boolean
}

// A simple binary tree expander?
// we should be able to branch from current tree to the next infinitely if allowed
export default function Box(props: IProp) {

  const level = props.level + 1;

  const offset = 150;
  const offsetMultiplier =
    props.isLeftChild
      ? -1
      : props.isRightChild
        ? 1
        : 0;

  const offsetX = offset * offsetMultiplier;

  const margin = 60,
        rectWidth = 200,
        rectHeight = 100,
        rectX = window.innerWidth / 2 - (rectWidth / 2) + offsetX,
        rectY = (100 * level) + margin * props.level,
        centeredX = (rectX + rectWidth / 2),
        lineY = rectY + rectHeight,
        circleY = lineY + 40,
        textX = centeredX - 9,
        textY = lineY + 26,
        strokeWidth = 1;

  return (
    <React.Fragment>
      <Rect
        x={rectX}
        y={rectY}
        width={rectWidth}
        height={rectHeight}
        stroke="black"
        strokeWidth={strokeWidth}
      />
      <Line
        x={centeredX}
        y={lineY}
        points={[0, 0, 0, 20]}
        tension={0.2}
        stroke="black"
        closed
        strokeWidth={strokeWidth}
      />
      <React.Fragment>
        <Circle
          x={centeredX}
          y={circleY}
          stroke="black"
          radius={20}
          strokeWidth={strokeWidth}
          onMouseOver={(e) => console.log('mouse over, apply some style to it')}
        />
        <Text
          x={textX}
          y={textY}
          text='+'
          fontSize={30}
          fill="green"
          strokeWidth={5}
          align="center"
        />
      </React.Fragment>
    </React.Fragment>
  )
}