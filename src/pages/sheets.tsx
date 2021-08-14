import React from 'react'

import Layout from '../components/layout'
import { links } from '../consts'

type Sheet = {
  title: string,
  origin: string,
  inst: string,
  comment: string,
  link: {
    score?: string,
    part?: string
  }
}

const sheets: Sheet[] = [
  {
    title: '紅魔館の日常',
    origin: '亡き王女の為のセプテット',
    inst: 'S, A, T, B',
    comment: '『東方笛スティバル』より。跳ねるようなリズムのアレンジです。',
    link: {
      score: 'komakan_no_nichijo.pdf'
    }
  },
  {
    title: '緋色のメヌエット',
    origin: 'U.N.オーエンは彼女なのか？',
    inst: 'S, A, T, B	',
    comment: '『東方笛スティバル』より。某戀物語のEDを意識しています。',
    link: {
      score: 'menuet_of_scarlet.pdf'
    }
  },
  {
    title: '白き摩天楼　～ White Time Crisis',
    origin: '感情の摩天楼　～ Cosmic Mind',
    inst: 'S, A, T, B',
    comment: '『東方笛スティバル』より。原曲よりテンポが速いです。疾走感を大事にしましょう。',
    link: {
      score: 'white_time_crisis.pdf'
    }
  },
  {
    title: '天空の笛ニッジ',
    origin: '天空のグリニッジ',
    inst: 'Sn, S, A, T, B',
    comment: '運指が難しかったため短三度下に移調してあります。息継ぎ注意。',
    link: {
      score: 'tenku_no_fuenwich.pdf'
    }
  },
  {
    title: 'フエアリー大戦争　～ There is a Recorder',
    origin: '妖精大戦争　～ Fairy Wars',
    inst: 'Sn, S, A, T, B',
    comment: '『ふえあり～』より一曲。神主には珍しく長調の曲なので、明るい響きがリコーダーにピッタリです。',
    link: {
      score: 'fairy_wars.pdf'
    }
  },
  {
    title: '雨の日のお散歩ケロちゃん',
    origin: 'ネイティブフェイス',
    inst: 'S, A, T, B',
    comment: 'ネイティブフェイス＝鬼畜譜と見せかけて、全然そんなことはないゆっくりほのぼのアレンジです。',
    link: {
      score: 'osanpo_kerokero.pdf'
    }
  },
  {
    title: 'フエフカナイト',
    origin: 'メイガスナイト',
    inst: 'Sn, S, A, T, B',
    comment: '	転調してからの運指は半音をマスターしていないと鬼畜です。一瞬だけオリエンタルダークフライトのテーマが出てきます。',
    link: {
      score: 'fuefuka_score.pdf',
      part: 'fuefuka_part.pdf'
    }
  },
  {
    title: '笛色マジックスパーク',
    origin: '恋色マジック／恋色マスタースパーク',
    inst: 'Sn, S, A, A/T, T, B',
    comment: '原曲への挑戦。2パートでの掛け合いになっているので、シビアなタイミングが要求されます。AとTは一人持ち替えです。',
    link: {
      score: 'magicspark_score.pdf',
      part: 'magicspark_part.pdf'
    }
  },
  {
    title: '笛の器　～ Border of Recorder',
    origin: '星の器　～ Casket of Star',
    inst: 'Sn, S, A, T, B	',
    comment: '連符がありますがそこまで難しくはありません。後半はゆゆ様のテーマが出現します。',
    link: {
      score: 'Border_of_Recorder_score.pdf',
      part: 'Border_of_Recorder_part.pdf'
    }
  },
  {
    title: '明日ハレの日、ケの昨日、今日リコーダー',
    origin: '明日ハレの日、ケの昨日',
    inst: 'S, A, T, B',
    comment: 'この曲は特にリコーダーが合いますね。調号が多くなるところは運指に気をつけて。',
    link: {
      part: 'harenohi.pdf'
    }
  },
  {
    title: '麓の神社、手元のリコーダー',
    origin: '麓の神社',
    inst: 'S, A, T, B',
    comment: '難易度低めです。ソプラノの方は適宜装飾音符をつけると感じが出ます。',
    link: {
      score: 'humoto.pdf'
    }
  },
]

const SheetsPage = () => {
  return (
    <Layout
      headProps={{
        title: 'SHEETS',
        description: '東方のリコーダーアンサンブルの楽譜等を置いています。'
      }}
    >
      <section className="section">
        <h3 className="title is-3">楽譜置場</h3>
        <div className="content">
          <p>管理人の微アレンジによるリコーダーの楽譜とか気まぐれに置いていく予定です。</p>
          <p>とりあえずいくつか置いとくのでよろしければどうぞ。</p>
          <article className="message is-small">
            <div className="message-body">
              Sn：ソプラニーノリコーダー、S：ソプラノリコーダー、A：アルトリコーダー、T：テナーリコーダー、B：バスリコーダー
            </div>
          </article>
          <div className="box">
            <div className="table-container">
              <table className="table is-striped" style={{ minWidth: 1200 }}>
                <thead>
                  <tr>
                    <th>曲名</th>
                    <th>原曲</th>
                    <th>編成</th>
                    <th>コメント</th>
                    <th>PDF</th>
                  </tr>
                </thead>
                <tbody>
                  {sheets.map(sheet => (
                    <tr>
                      <th>{sheet.title}</th>
                      <td>{sheet.origin}</td>
                      <td>{sheet.inst}</td>
                      <td>{sheet.comment}</td>
                      <td className="is-vcentered">
                        <div className="field is-grouped">
                          {sheet.link.score &&
                            <p className="control">
                              <a className="button is-link" href={sheet.link.score} download>スコア</a>
                            </p>
                          }
                          {sheet.link.part &&
                            <p className="control">
                              <a className="button is-info" href={sheet.link.part} download>パート譜</a>
                            </p>
                          }
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <article className="message is-primary">
          <div className="message-header">
            <p>楽譜集を販売中です！</p>
          </div>
          <div className="message-body">
            <a href={links.booth.home} target="_blank">こちら</a>(BOOTH)からお買い求めいただけます。
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default SheetsPage
