import React from 'react'

type Props = {
  title: string,
  origin: string
}

const TrackListItem = (props: Props) => {
  return (
    <li>
      <span><strong>{props.title}</strong></span>
      <br />
      <span className="is-size-7">原曲：{props.origin}</span>
    </li>
  )
}

export default TrackListItem
