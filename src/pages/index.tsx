import React, { ReactNode } from 'react'
import { Link } from 'gatsby'

import './styles.scss'
import Layout from '../components/layout'
import { links } from '../consts'
import nazrin from '../images/nazrin.jpg'
import rikakei from '../images/rikakei.jpg'

type ProfileProps = {
  image: string,
  name: string,
  color: string,
  link: {
    title: string,
    url: string
  },
  descriptions: ReactNode[],
  external: {
    message: string,
    link: {
      title: string,
      url: string
    }
  }
}

const Profile = (props: ProfileProps) => (
  <div className="card my-4">
    <div className="card-content">
      <div className="columns">
        <div className="column is-4">
          <figure className="image mx-0" style={{ maxWidth: 300 }}>
            <img src={props.image} alt={props.name} />
          </figure>
        </div>
        <div className="column is-8">
          <p className="title is-5" style={{ color: props.color }}>
            {props.name}
          </p>
          <p>
            <ul>
              {props.descriptions.map(description => (
                <li>{description}</li>
              ))}
            </ul>
          </p>
          <article className="message mt-5">
            <div className="message-body">
              <div className="is-flex is-align-items-center">
                <div>
                  {props.external.message}
                </div>
                <div className="ml-3">
                  <a className="button is-link" href={props.external.link.url} target="_blank">
                    {props.external.link.title}
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
)

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
        <h4 className="title is-4 mb-3">いらっしゃいませ！</h4>
        <div className="content">
          <p>ここは東方Projectを主とした音楽アレンジサークル『凸凹えんた～ていんめんとすたじお』（略称：『凸凹ES』）のほーむぺーじです。</p>
          <p>ゆっくりしていってね！</p>
          <h4 className="title is-4 mb-3">お知らせ</h4>
          <ul>
            <li>2021/08/15: HPをリニューアルしました。</li>
            <li>
              <a href={links.booth.home} target="_blank">BOOTH</a>で東方笛スティバル(プレス盤)を販売中です。
            </li>
            <li>
              <a href={links.melon.home} target="_blank">メロンブックスDL</a>で過去作品を販売中です。(そのうちBOOTHに移行するかも。)
            </li>
          </ul>
          <h5 className="title is-5 mb-3">次回参加予定のイベント</h5>
          <p>現在参加予定のイベントはありませんが、ゆったりと新譜制作中です。</p>
          <h5 className="title is-5 mb-3">前回参加したイベント</h5>
          <p>第14回博麗神社例大祭（2017年5月7日@東京ビッグサイト）にて、新譜『<Link to="/works/easterly-stones">Easterly Stones</Link>』を頒布いたしました。お越しいただいた皆様ありがとうございました。</p>
        </div>
      </section>
      <section className="section">
        <h4 className="title is-4 mb-3">当サークルについて</h4>
        <div className="content">
          <p>
            当サークル『<strong>凸凹えんた～ていんめんとすたじお</strong>』は東方を主とした音楽サークルです。<br />
            メンバーは基本2名で、ほそぼそとアレンジやらリコーダーやらやっています。
          </p>
          <article className="message is-info mt-5">
            <div className="message-body">
              <div className="is-flex is-align-items-center">
                <div>
                  これまでの作品紹介はこちらから。
                </div>
                <div className="ml-3">
                  <Link className="button is-info" to="works">
                    WORKS
                  </Link>
                </div>
              </div>
            </div>
          </article>
          <article className="message mt-5">
            <div className="message-body">
              ―<strong>こんなに長いサークル名</strong>で大丈夫か？<br />
              ―大丈夫じゃない、<strong>問題だ</strong>。
            </div>
          </article>
          <p>
            （ネタが古すぎる）<br />
            というわけで、『<strong>凸凹ES</strong>』という略称をよく用いています。
          </p>
          <h5 className="title is-5 mt-5 mb-3">メンバー</h5>
          <Profile
            image={nazrin}
            name="ほぃるん"
            color="gray"
            link={{
              title: '@foilune',
              url: links.twitter.foilune
            }}
            descriptions={[
              'メガネ。凸凹の不動のリーダー。',
              '8bit調アレンジなどの打ち込みがメイン。',
              'ナズーリンに似ているような気がする時期が彼にもありました。',
            ]}
            external={{
              message: 'ほぃるんのドット絵作品はこちらから。(Pixiv)',
              link: {
                title: 'Pixiv',
                url: links.pixiv.foilune
              }
            }}
          />
          <Profile
            image={rikakei}
            name="あかむら"
            color="mediumvioletred"
            link={{
              title: '@akamurandom',
              url: links.twitter.akamurandom
            }}
            descriptions={[
              'メガネ。凸凹ESの参謀および当HP管理人。',
              'リコーダーアレンジがメイン。',
              'りかけいのおとこが　しょうぶを　しかけてきた！',
            ]}
            external={{
              message: '着メロ作品はこちらから。(ゲーム音楽館、『赤紫』名義)',
              link: {
                title: 'ゲー音',
                url: links.gameMelody.akamurasaki
              }
            }}
          />
        </div>
      </section>
      <section className="section">
        <h4 className="title is-4 mb-3">お問い合わせ</h4>
        <p>当サークルへのお問い合わせはメール(<a href="mailto:jo3afv@yahoo.co.jp">jo3afv@yahoo.co.jp</a>)またはTwitter(<a href={links.twitter.akamurandom}>＠akamurandom</a>)までお願いします。</p>
      </section>
    </Layout>
  )
}

export default IndexPage
