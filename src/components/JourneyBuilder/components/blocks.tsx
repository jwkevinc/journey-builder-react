import React from 'react';

import './blocks.scss';

export function ConditionBlock(props: any) {
  const { yes, no } = props;
  return (
    <React.Fragment>
      <div className="block-condition">
        <div className="block-condition__branch yes">
          {yes && <Block key={yes.id} {...props} structure={yes}/>}
        </div>
        <div className="block-condition__branch no">
          {no && <Block key={no.id} {...props} structure={no}/>}
        </div>
      </div>
    </React.Fragment>
  )
}

export function Block(props: any) {
  const { method, next, yes, no, id } = props.structure;
  return (
    <React.Fragment>
      {/* Block Info */}
      <div className="block">
        <div className="block__content">
          <p className="delete" onClick={() => props.onDelete(id)}> X </p>
          <p> {method} </p>
        </div>
        {/* Connector */}
        {method === 'condition' ? (
          <div className="add-condition">
            <div className="add-condition__choice yes" onClick={() => props.onAdd(id, 'yes')}>Yes +</div>
            <div className="add-condition__choice no" onClick={() => props.onAdd(id, 'no')}>No +</div>
          </div>
        ) : (
          <div className="add" onClick={() => props.onAdd(id, 'next')}>+</div>
        )}
      </div>
      {/* Recursive Chain Call */}
      {method === 'condition' && <ConditionBlock key={id} {...props} yes={yes} no={no}/>}
      {method !== 'condition' && next && <Block key={next.id} {...props} structure={next}/>}
    </React.Fragment>
  )
}
