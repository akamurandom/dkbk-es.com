import React from 'react'
import { Link } from 'gatsby'

import './styles.scss'
import Layout from '../components/layout'

const links = {
  booth: 'https://dkbk-es.booth.pm/',
  melon: 'https://www.melonbooks.com/index.php?main_page=maker_info&makers_id=MK0000021467'
}

const IndexPage = () => {
  return (
    <Layout>
      <section className="hero is-primary is-medium">
        <div className="hero-body">
          <p className="title">
            凸凹えんた～ていんめんとすたじお
          </p>
          <p className="subtitle">
            同人音楽サークル (東方Project等)
          </p>
        </div>
      </section>
      <section className="section">
        <h4 className="title is-4">いらっしゃいませ！</h4>
        <div className="content">
          <p>ここは東方Projectを主とした音楽アレンジサークル『凸凹えんた～ていんめんとすたじお』（略称：『凸凹ES』）のほーむぺーじです。</p>
          <p>ゆっくりしていってね！</p>
        </div>
      </section>
      <section className="section">
        <h4 className="title is-4">お知らせ</h4>
        <div className="content">
          <ul>
            <li>2021/08/12: HPを更新しました。</li>
            <li>
              <a href={links.booth} target="_blank">BOOTH</a>で東方笛スティバル(プレス盤)を販売中です。
            </li>
            <li>
              <a href={links.melon} target="_blank">メロンブックスDL</a>で過去作品を販売中です。随時追加していきます。
            </li>
          </ul>
        </div>
        <h5 className="title is-5">次回参加予定のイベント</h5>
        <div className="content">
          <p>現在参加予定のイベントはありませんが、ゆったりと新譜制作中です。</p>
        </div>
        <h5 className="title is-5">前回参加したイベント</h5>
        <div className="content">
          <p>第14回博麗神社例大祭（2017年5月7日@東京ビッグサイト）にて、新譜『<Link to="/works/easterly-stones">Easterly Stones</Link>』を頒布いたしました。お越しいただいた皆様ありがとうございました。</p>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
