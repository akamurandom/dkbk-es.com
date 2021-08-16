import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import * as Jaket from '../../images/jaket'

type Work = {
  title: string,
  image: string,
  description: string,
  link: string
}

const works: Work[] = [
  {
    title: 'Easterly Stones',
    image: Jaket.easterlyStones,
    description: '第14回東方例大祭で頒布。ゲストにMUISIN氏を迎え、ボーカルアレンジからリコーダー五重奏まで多様なジャンルの5曲を収録したミニアルバムです。',
    link: 'easterly-stones'
  },
  {
    title: '東方笛スティバル',
    image: Jaket.fuestival,
    description: '第9回東方紅楼夢で頒布。第9回東方人気投票音楽部門の上位曲をリコーダー四重奏で。A4サイズの楽譜集も同時頒布。',
    link: 'fuestival'
  },
  {
    title: '凸凹 Esoteric Society +(Plus)',
    image: Jaket.esotericPlus,
    description: '科学世紀のカフェテラス(2012)にて頒布。秘封オリジナル曲を中心に15曲をアレンジした凸凹CDです。',
    link: 'esoteric-society'
  },
  {
    title: '凸凹ExtraStage',
    image: Jaket.extra,
    description: '第8回東方例大祭にて頒布。旧作から妖精大戦争まで、各作品のExtra／Phantasm曲の中から16曲＋αを選び、アレンジしたCDです。',
    link: 'extra-stage'
  },
  {
    title: 'ふえあり～',
    image: Jaket.fuairy,
    description: '第7回東方紅楼夢にて頒布。妖精大戦争で使用されたBGM全曲をリコーダー五重奏用にアレンジし、一人で多重録音したものです。全10曲収録。B5サイズの楽譜集も同時頒布。',
    link: 'fuairy'
  },
]

const WorksPage = () => {
  return (
    <Layout
      headProps={{
        title: 'WORKS',
        description: 'これまでの作品紹介です。'
      }}
    >
      <section className="section">
        <h3 className="title is-3">これまでの作品</h3>
        <p className="is-size-7">各アイテムを押下すると詳細ページを表示します。</p>
        {works.map(work => (
          <Link to={work.link}>
            <div className="card my-4">
              <div className="card-content">
                <div className="columns">
                  <div className="column is-3">
                    <figure className="image">
                      <img src={work.image} alt={work.title} />
                    </figure>
                  </div>
                  <div className="column is-9">
                    <p className="title is-4">{work.title}</p>
                    <p>{work.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
      <section className="section">
        <article className="message is-primary">
          <div className="message-body">
            これより古い作品は<Link to="old">こちら</Link>から。
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default WorksPage
