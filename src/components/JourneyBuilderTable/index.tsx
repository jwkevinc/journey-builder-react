
import React, { useState, useRef } from 'react';

import { NormalBlock, ConditionBlock } from './components/blocks';

import './journeyBuilder.scss';

export default function JourneyBuilderTable() {

  const structure = {
    method: 'trigger',
    data: {
    },
    next: {
      method: 'email',
      data: {
      },
      next: {
        method: 'condition',
        data: {
        },
        yes: {
          method: 'email',
          data: {
          }
        },
        no: {
          method: 'delay',
          data: {
          }
        }
      }
    }
  }

  function onHandleClick() {
    console.log('handle clicked');
  }

  return (
    <div>
      <NormalBlock
        structure={structure}
        onClick={onHandleClick}/>
    </div>
  )
}