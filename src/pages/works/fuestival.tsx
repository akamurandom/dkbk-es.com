import React from 'react'

import Layout from '../../components/layout'
import { WorkDetail, TrackListItem, Demo, BackButton } from '../../components/work-detail'
import { links } from '../../consts'
import { fuestival as image, fuestivalSheets as sheetsImage } from '../../images/jaket'

const demoIframe = '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/114958704&color=ff5500"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/akamurandom" title="あかむら Akamura" target="_blank" style="color: #cccccc; text-decoration: none;">あかむら Akamura</a> · <a href="https://soundcloud.com/akamurandom/mtnxrj2zqatr" title="東方笛スティバル クロスフェードデモ" target="_blank" style="color: #cccccc; text-decoration: none;">東方笛スティバル クロスフェードデモ</a></div>'

const FuestivalPage = () => {
  return (
    <Layout
      headProps={{
        title: 'WORKS',
        description: 'これまでの作品紹介です。'
      }}
    >
      <WorkDetail
        title="東方笛スティバル"
        image={image}
        data={[
          {
            title: '初回頒布イベント',
            content: <>
              <a>東方紅楼夢9</a> (2013/10/13 @インテックス大阪)
            </>
          },
          {
            title: '説明',
            content: <>
              第9回人気投票の東方曲上位13曲中10曲をアレンジしてリコーダー四重奏（ソプラノ・アルト・テナー・バス）で演奏したCDです。<br />
              「誰でもやさしく聴ける」をコンセプトに、原曲のメロディを活かした様々なアレンジが詰まった1枚です。<br />
              リコーダー好きも、そうでない方にもオススメです！
            </>
          },
          {
            title: '収録曲',
            content: <>
              <ol>
                {[
                  {
                    title: '紅魔館の日常',
                    origin: '亡き王女の為のセプテット'
                  },
                  {
                    title: '緋色のメヌエット',
                    origin: 'U.N.オーエンは彼女なのか？'
                  },
                  {
                    title: '白き摩天楼　～ White Time Crisis',
                    origin: '感情の摩天楼　～ Cosmic Mind'
                  },
                  {
                    title: '幽雅に鳴らせ、墨染の笛',
                    origin: '幽雅に咲かせ、墨染の桜　～ Border of Life'
                  },
                  {
                    title: '黄昏の幻想郷',
                    origin: '神々が恋した幻想郷'
                  },
                  {
                    title: '古明地さとりの憂鬱',
                    origin: '少女さとり　～ 3rd eye'
                  },
                  {
                    title: '冥界ワルツ',
                    origin: 'ネクロファンタジア'
                  },
                  {
                    title: 'ニュークリア・フエジョン',
                    origin: '霊知の太陽信仰　～ Nuclear Fusion'
                  },
                  {
                    title: 'ムーンライト',
                    origin: '月まで届け、不死の煙'
                  },
                  {
                    title: '小雨の日のお散歩ケロちゃん',
                    origin: 'ネイティブフェイス'
                  },
                  {
                    title: '氷精さんの休日',
                    origin: '春の氷精、おてんば恋娘'
                  },
                ].map(track => <TrackListItem {...track} />)}
              </ol>
              <p className="is-size-7">※ Tr.11はプレス盤のみ収録。</p>
            </>
          },
          {
            title: 'アレンジ／演奏',
            content: 'あかむら'
          },
          {
            title: 'イラスト',
            content: <>
              <a href={links.pixiv.uruchi} target="_blank">うるち米</a>
            </>
          },
          {
            title: '通販',
            content: <>
              <a className="button is-link" href={links.booth.fuestival} target="_blank">BOOTH</a>
            </>
          },
          {
            title: 'DL販売',
            content: <>
              <a className="button is-link" href={links.melon.fuestival} target="_blank">メロンブックスDL</a>
            </>
          },
        ]}
      />
      <WorkDetail
        title="東方笛スティバル楽譜集"
        subtitle="～みんなで吹こう！東方人気曲リコーダー四重奏～"
        image={sheetsImage}
        data={[
          {
            title: '説明',
            content: <>
              東方のリコーダー楽譜の決定盤！<br />
              「東方笛スティバル」に使用した楽譜集です。<br />
              CDと同様10曲掲載。A4サイズで見やすくなっています。<br />
              発表会などに使うもよし、自分で吹いてみるのもよし。<br />
              「東方笛スティバル」を聴きながら眺めるのも面白いかもしれません。
            </>
          },
          {
            title: '通販',
            content: <>
              <a className="button is-link" href={links.booth.fuestivalSheets} target="_blank">BOOTH</a>
            </>
          }
        ]}
      />
      <Demo
        title="クロスフェードデモ"
        iframe={demoIframe}
      />
      <BackButton />
    </Layout>
  )
}

export default FuestivalPage
