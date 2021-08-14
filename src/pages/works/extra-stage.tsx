import React from 'react'

import Layout from '../../components/layout'
import { WorkDetail, TrackListItem, Demo, BackButton } from '../../components/work-detail'
import { links } from '../../consts'
import { extra as image } from '../../images/jaket'

const demoIframe = '<iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb/sm14381807" scrolling="no" style="border:solid 1px #ccc;" frameborder="0"><a href="https://www.nicovideo.jp/watch/sm14381807">凸凹ExtraStage クロスフェードデモ</a></iframe>'

const ExtraStagePage = () => {
  return (
    <Layout
      headProps={{
        title: 'WORKS',
        description: 'これまでの作品紹介です。'
      }}
    >
      <WorkDetail
        title="凸凹ExtraStage"
        image={image}
        data={[
          {
            title: '初回頒布イベント',
            content: '例大祭8'
          },
          {
            title: '説明',
            content: '旧作から妖精大戦争まで、各作品のExtra、Phantasm曲の中から16曲＋αを選び、アレンジしたCDです。 ほぃるんが打ち込みメイン、あかむらがリコーダーメインの、ExPh縛りなのにまったく統一感の感じられない内容で、 楽しく聴ける大ボリュームの一枚に仕上がっております。'
          },
          {
            title: '収録曲',
            content: <ol>
              {[
                {
                  title: 'Field of Aliens Train',
                  origin: '平安のエイリアン'
                },
                {
                  title: '月まで届きますか？',
                  origin: '月まで届け、不死の煙'
                },
                {
                  title: '巫女の瞳紅く闇く ～ 二色蓮花蝶',
                  origin: '二色蓮花蝶　～ Ancients'
                },
                {
                  title: '雨の日のお散歩ケロちゃん',
                  origin: 'ネイティブフェイス'
                },
                {
                  title: '魔法少女達の百年祭',
                  origin: '魔法少女達の百年祭'
                },
                {
                  title: '夢幻と現界の境界',
                  origin: 'ネクロファンタジア'
                },
                {
                  title: 'フエフカナイト',
                  origin: 'メイガスナイト'
                },
                {
                  title: '幻想郷物語 ～夢幻世界の月と翼～',
                  origin: 'メイド幻想　～ Icemilk Magic／禁じざるをえない遊戯'
                },
                {
                  title: 'ExtraLove',
                  origin: 'エキストララブ'
                },
                {
                  title: 'the Grimoire of Alice',
                  origin: 'the Grimoire of Alice'
                },
                {
                  title: 'マジカルダンスフロア　～ an impassioned rhythm',
                  origin: '魔女達の舞踏会　～ Magus'
                },
                {
                  title: 'B.S.リコーダーは不要なのか？',
                  origin: 'U.N.オーエンは彼女なのか？'
                },
                {
                  title: '夜空のユー笛ーロマンス',
                  origin: '夜空のユーフォーロマンス'
                },
                {
                  title: '明日ハレの日、ケの昨日、今日リコーダー',
                  origin: '明日ハレの日、ケの昨日'
                },
                {
                  title: 'メイガスナイト',
                  origin: 'メイガスナイト'
                },
                {
                  title: 'フエルトマンの妖怪少女',
                  origin: 'ハルトマンの妖怪少女'
                },
              ].map(track => <TrackListItem {...track} />)}
            </ol>
          },
          {
            title: '頒布価格',
            content: '500円'
          },
          {
            title: 'アレンジ／演奏',
            content: <ul>
                <li>[Tr.1,3,5,10,11,15] アレンジ：ほぃるん</li>
                <li>[Tr.2,4,7,12,14,16] アレンジ／演奏：あかむら</li>
                <li>[Tr.6] アレンジ：ほぃるん、演奏：あかむら</li>
                <li>[Tr.8] アレンジ／コーラス：ほぃるん</li>
                <li>[Tr.9] アレンジ：あかむら</li>
                <li>[Tr.13] アレンジ／演奏：ほぃるん</li>
            </ul>
          },
          {
            title: 'イラスト',
            content: <>
              <a href={links.pixiv.taka} target="_blank">鷹</a>
            </>
          },
        ]}
      />
      <Demo
        iframe={demoIframe}
      />
      <BackButton />
    </Layout>
  )
}

export default ExtraStagePage
