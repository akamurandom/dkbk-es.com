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
    title: 'Easterly Stones',
    image: Jaket.easterlyStones,
    description: '第14回東方例大祭で頒布。ゲストにMUISIN氏を迎え、ボーカルアレンジからリコーダー五重奏まで多様なジャンルの5曲を収録したミニアルバムです。',
    link: 'easterly-stones'
  },
  {
    title: 'Easterly Stones',
    image: Jaket.easterlyStones,
    description: '第14回東方例大祭で頒布。ゲストにMUISIN氏を迎え、ボーカルアレンジからリコーダー五重奏まで多様なジャンルの5曲を収録したミニアルバムです。',
    link: 'easterly-stones'
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
        {works.map(work => (
          <Link to={work.link}>
            <div className="card my-4">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-128x128">
                      <img src={work.image} alt={work.title} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">{work.title}</p>
                    <p className="subtitle is-6">{work.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </Layout>
  )
}

export default WorksPage
