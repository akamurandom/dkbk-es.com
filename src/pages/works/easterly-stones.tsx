import React from 'react'

import Layout from '../../components/layout'
import { WorkDetail, TrackListItem, Demo, BackButton } from '../../components/work-detail'
import { links } from '../../consts'
import { easterlyStones as image } from '../../images/jaket'

const demoIframe = '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/321582625&color=00cc11"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/akamurandom" title="あかむら Akamura" target="_blank" style="color: #cccccc; text-decoration: none;">あかむら Akamura</a> · <a href="https://soundcloud.com/akamurandom/easterly-stones" title="『Easterly Stones』 クロスフェードデモ" target="_blank" style="color: #cccccc; text-decoration: none;">『Easterly Stones』 クロスフェードデモ</a></div>'

const EasterlyStonesPage = () => {
  return (
    <Layout
      headProps={{
        title: 'WORKS',
        description: 'これまでの作品紹介です。'
      }}
    >
      <WorkDetail
        title="Easterly Stones"
        image={image}
        data={[
          {
            title: '初回頒布イベント',
            content: '例大祭14 (2017/5/7@東京ビッグサイト)'
          },
          {
            title: '説明',
            content: '約3年ぶりとなる新譜。スペシャルゲストのMUISINさん (@MUISIN_2016)によるアレンジ2曲に加え、 ほぃるん・あかむらによる打ち込みとリコーダー生演奏の入り乱れた5曲を収録したCDです。'
          },
          {
            title: '収録曲',
            content: <ol>
              {[
                {
                  title: 'シャイニーサニーフレクション',
                  origin: 'サニールチルフレクション、妖精大戦争　～ Fairy Wars'
                },
                {
                  title: '氷精さんの休日',
                  origin: '春の氷精、ルーネイトエルフ、おてんば恋娘'
                },
                {
                  title: 'This world was… ～ハルトマンの妖怪少女',
                  origin: 'ハルトマンの妖怪少女'
                },
                {
                  title: 'Pray ～神さびた古戦場～ Suwa Foughten Field',
                  origin: '神さびた古戦場　～ Suwa Foughten Field'
                },
                {
                  title: 'FACE☆CUSHION',
                  origin: 'ネイティブフェイス'
                },
              ].map(track => <TrackListItem {...track} />)}
            </ol>
          },
          {
            title: '頒布価格',
            content: '300円'
          },
          {
            title: 'アレンジ／演奏',
            content: <ul>
                <li>[Tr.1] アレンジ：ほぃるん</li>
                <li>[Tr.2] アレンジ／リコーダー：あかむら</li>
                <li>[Tr.3] アレンジ：MUISIN</li>
                <li>[Tr.4] アレンジ：西方詩神／MUISIN、詞：MUISIN、ボーカル：佐古友紀</li>
                <li>[Tr.5] アレンジ／リコーダー：あかむら</li>
            </ul>
          },
          {
            title: 'ゲスト',
            content: <>
              MUISIN (<a href={links.twitter.muisin} target="_blank">@MUISIN_2016</a>)
            </>
          },
          {
            title: 'イラスト',
            content: <>
              かげ (<a href={links.twitter.kage} target="_blank">@numa_kage</a>)
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

export default EasterlyStonesPage
