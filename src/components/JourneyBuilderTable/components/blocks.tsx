import React from 'react';


export function ConditionBlock(props: any) {
  const data = props;
  const yes = props.yes
  const no = props.no
  return (
    <div>
      <p> Condition Block </p>
      {yes && <NormalBlock structure={data.yes}/>}
      {no && <NormalBlock structure={data.no}/>}
    </div>
  )
}

interface NormalBlockProp {
  data: {
    method: string,
    data: object,
    next: NormalBlockProp,
  },
  onClick: () => void
}

export function NormalBlock(props: any) {
  console.log(props);
  const {method, data, next, yes, no} = props.structure;
  return (
    <div>
      <p> Type: {method} </p>
      {/* {next && next.method === 'condition' && <ConditionBlock onClick={props.onClick} structure={next}/>} */}
      {next && <NormalBlock onClick={props.onClick} structure={data.next}/>}
    </div>
  )
}