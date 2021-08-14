import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import * as Jaket from '../../images/jaket'

type Work = {
  title: string,
  image?: string,
  description: string,
  tracks: string,
  artists: string
}

const works: Work[] = [
  {
    title: 'Electronic Fairy',
    image: Jaket.electoronicFairy,
    description: '紅楼夢7で頒布。例大祭9にて増版というか改訂版を頒布。新たな試みを取り入れたような 妖精オンリーチップチューンアレンジ。',
    tracks: '①ふぇありーぼうけんたん　②ねんじゅうむきゅうのこうきしん　③るーねいとえるふ 　④まよなかのふぇありーだんす　⑤おてんばこいむすめのぼうけん　⑥さにーるちるふれくしょん 　⑦ようせいだいせんそう　⑧せつげつおうかのくに',
    artists: 'アレンジ：ほぃるん、イラスト：harika'
  },
  {
    title: '風神雑奏',
    description: 'C83にて頒布。「1st grow」の②を演奏してみた、などなど。',
    tracks: '①乙女心のなく頃に　②厄神の森　③幼怪の山　④少女が見た日本の宴　⑤後の祭り',
    artists: 'アレンジ／演奏：ほぃるん'
  },
  {
    title: 'Electronic Magus',
    image: Jaket.electoronicMagus,
    description: '紅楼夢6にて頒布。当日に2曲分のデータが消失しもはや幻となりかけたが、 ほぃるんの本気により奇跡の生還を遂げたファミコンアレンジCD。',
    tracks: '①恋色マジック　②Dim Dream　③星の器　④魔法使いの憂鬱　⑤メイガスナイト',
    artists: 'アレンジ：ほぃるん、イラスト：Acunos'
  },
  {
    title: '縦笛マスタースパーク',
    image: Jaket.maspa,
    description: '紅楼夢6にて頒布。魔理沙のテーマから、原曲を重視してアレンジしたものをリコーダーで一人で吹いて多重録音したものです。',
    tracks: '①笛の器　～ Border of Recorder　②フエフカナイト　③笛色マジックスパーク　④笛の色は茶色　⑤リコーダー吹きの憂鬱',
    artists: 'アレンジ／演奏：あかむら、イラスト：鷹'
  },
  {
    title: 'カ笛テラス',
    image: Jaket.cafet,
    description: '地元京都の秘封オンリーイベント、科学世紀のカフェテラス(2011)にて頒布。ほぃるんが最近始めたウインドシンセサイザーの多重録音。 に加えて留年離脱必死のあかむらによる少しのピアノとリコーダー。もっとがんばりましょう。',
    tracks: '①大空魔笛　②最も澄み渡らない笛と鍵盤　③笛椅子の未来宇宙　④最も澄み渡らない笛と鍵盤(Acoustic)',
    artists: 'アレンジ／演奏：ほぃるん／あかむら、イラスト：ほぃるん妹の友達様'
  },
  {
    title: 'Electronic doll',
    image: Jaket.electoronicDoll,
    description: 'C77で訳あって急遽頒布することになった作品。かなり急な話だったので原曲のコピーをそのまま8bit調に仕上げただけというなんとも手抜き感溢れる作品。 委託先がアリス島だったのでアリスのテーマ曲が中心。',
    tracks: '①The Grimoire of Alice　②人形裁判　③Romantic Children　④恋色マジック',
    artists: 'アレンジ：ほぃるん、イラスト：Acunos'
  },
  {
    title: '1st grow',
    image: Jaket.firstGrow,
    description: '例大祭7にて頒布。西方詩神氏との実験的企画でしたが、本格的なヴォーカルアレンジになりました。サークル名も別になっております。',
    tracks: '①神さびた古戦場　～ Burst Attacker　②少女が見た妖怪の宴　③厄神の森　④神さびた古戦場　～ Burst Attacker【off vocal】',
    artists: 'アレンジ：西方詩神／ほぃるん、イラスト：音無ミノル'
  },
  {
    title: '東方裏孔唾',
    image: Jaket.rikouda,
    description: '例大祭7にて頒布。リコーダー+αで風神録から数曲をできるだけ原曲に近い形で演奏。失敗。"とうほうりこうだ"と読みます。',
    tracks: '①リコ田姫様に叱られるから　②少女が見たリコーダーの原風景　③リコーダーの山　～ Misterious Moutain 　④明日ハレの日、ケの昨日、今日リコーダー　⑤麓の神社、手元のリコーダー',
    artists: 'アレンジ／演奏：ほぃるん／あかむら、イラスト：音無ミノル'
  },
]

const OldWorksPage = () => {
  return (
    <Layout
      headProps={{
        title: 'WORKS',
        description: 'これまでの作品紹介です。'
      }}
    >
      <section className="section">
        <h3 className="title is-3">より古い作品たち</h3>
        {works.map(work => (
          <div className="card my-4">
            <div className="card-content">
              <div className="columns is-vcentered">
                <div className="column is-4">
                  {work.image ? (
                    <figure className="image">
                      <img src={work.image} alt={work.title} />
                    </figure>
                  ) : (
                    <div className="has-text-centered">
                      <strong>NO IMAGE</strong>
                    </div>
                  )}
                </div>
                <div className="column is-8">
                  <p className="title is-4">{work.title}</p>
                  <p>{work.description}</p>
                  <p className="is-size-7 mt-2">{work.tracks}</p>
                  <p className="is-size-7 mt-2">{work.artists}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="section">
        <Link to="..">
          <button className="button">前のページに戻る</button>
        </Link>
      </section>
    </Layout>
  )
}

export default OldWorksPage
