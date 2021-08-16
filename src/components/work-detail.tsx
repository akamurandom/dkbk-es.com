import React, { ReactNode } from 'react'
import { Link } from 'gatsby'

type WorkDetailProps = {
  title: string,
  subtitle?: string,
  image: string,
  data: {
    title: string,
    content: string | ReactNode
  }[]
}

export const WorkDetail = (props: WorkDetailProps) => {
  return <>
    <section className="section">
      <h3 className="title is-3">{props.title}</h3>
      {props.subtitle &&
        <h5 className="subtitle is-5">{props.subtitle}</h5>
      }
      <div className="content">
        <figure className="image mx-0" style={{ maxWidth: 600 }}>
          <img src={props.image} alt={props.title} />
        </figure>
      </div>
      {props.data.map(data => (
        <div className="content">
          <h5 className="title is-5">{data.title}</h5>
          <p className="subtitle is-6">{data.content}</p>
        </div>
      ))}
    </section>
  </>
}

type TrackListItemProps = {
  title: string,
  origin: string
}

export const TrackListItem = (props: TrackListItemProps) => {
  return (
    <li>
      <span><strong>{props.title}</strong></span>
      <br />
      <span className="is-size-7">原曲：{props.origin}</span>
    </li>
  )
}

type DemoProps = {
  title?: string,
  iframe: string
}

export const Demo = (props: DemoProps) => {
  return <>
    <section className="section">
      <h4 className="title is-4">{props.title || 'デモ'}</h4>
      <div dangerouslySetInnerHTML={{ __html: props.iframe }} />
    </section>
  </>
}

export const BackButton = () => {
  return <>
    <section className="section">
      <Link to="..">
        <button className="button">前のページに戻る</button>
      </Link>
    </section>
  </>
}
