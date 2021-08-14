import React from 'react'

import Layout from '../../components/layout'
import { WorkDetail, TrackListItem, Demo, BackButton } from '../../components/work-detail'
import { links } from '../../consts'
import { esotericPlus as image } from '../../images/jaket'

const demoIframe = '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/301522260&color=00cc11"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/akamurandom" title="あかむら Akamura" target="_blank" style="color: #cccccc; text-decoration: none;">あかむら Akamura</a> · <a href="https://soundcloud.com/akamurandom/ccdlqkjuam4q" title="秋の帰り道 / 『凸凹 Esoteric Society +(Plus)』より" target="_blank" style="color: #cccccc; text-decoration: none;">秋の帰り道 / 『凸凹 Esoteric Society +(Plus)』より</a></div>'

const EsotericSocietyPage = () => {
  return (
    <Layout
      headProps={{
        title: 'WORKS',
        description: 'これまでの作品紹介です。'
      }}
    >
      <WorkDetail
        title="凸凹 Esoteric Society +(Plus)"
        image={image}
        data={[
          {
            title: '初回頒布イベント',
            content: '科学世紀のカフェテラス(2012)'
          },
          {
            title: '説明',
            content: '秘封オリジナル曲(一部例外あり)から15曲をアレンジしたCDです。 生演奏や打ち込み色々ありの凸凹した一枚に仕上がっております。'
          },
          {
            title: '収録曲',
            content: <ol>
              {[
                {
                  title: '月面から大空への行進',
                  origin: '月面ツアーへようこそ／大空魔術　～ Magical Astronomy'
                },
                {
                  title: 'Moonlight Legend Dendera',
                  origin: '夜のデンデラ野を逝く'
                },
                {
                  title: '笛莱伝説',
                  origin: '蓬莱伝説'
                },
                {
                  title: 'くるまいすのみらいうちゅう',
                  origin: '車椅子の未来宇宙'
                },
                {
                  title: 'Eternal Esoteric Emotion',
                  origin: '少女秘封倶楽部'
                },
                {
                  title: '月夜に浮かぶ幻想郷',
                  origin: '宇宙に浮かぶ幻想郷'
                },
                {
                  title: '天空の笛ニッジ',
                  origin: '天空のグリニッジ'
                },
                {
                  title: 'じー ふりー',
                  origin: 'G Free'
                },
                {
                  title: '緑のサナトリコーダー',
                  origin: '緑のサナトリウム'
                },
                {
                  title: 'とろやぐんのみつりん',
                  origin: 'トロヤ群の密林'
                },
                {
                  title: 'ノスタルジオの空',
                  origin: 'レトロスペクティブ京都'
                },
                {
                  title: '未知の旅路',
                  origin: '未知の花 魅知の旅／無間の鐘　～ Infinite Nightmare／明日ハレの日、ケの昨日'
                },
                {
                  title: '最も澄みわたらない笛と鍵',
                  origin: '最も澄みわたる空と海'
                },
                {
                  title: 'Neo Local-Express Hiroshige',
                  origin: 'ヒロシゲ36号　～ Neo Super-Express'
                },
                {
                  title: '秋の帰り道',
                  origin: '童祭　～ Innocent Treasures'
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
                <li>[Tr.1,7,13,15] アレンジ／演奏：あかむら</li>
                <li>[Tr.2,4,6,8,10,11,12,14] アレンジ：ほぃるん</li>
                <li>[Tr.3,9] アレンジ：ほぃるん、演奏：あかむら</li>
                <li>[Tr.5] アレンジ：あかむら</li>
            </ul>
          },
          {
            title: 'イラスト',
            content: <>
              <a href={links.pixiv.horo} target="_blank">椎矢ほろ</a>
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

export default EsotericSocietyPage
