import React from 'react'

import Layout from '../../components/layout'
import { WorkDetail, TrackListItem, BackButton } from '../../components/work-detail'
import { links } from '../../consts'
import { fuairy as image, fuairySheets as sheetsImage } from '../../images/jaket'

const FuairyPage = () => {
  return (
    <Layout
      headProps={{
        title: 'WORKS',
        description: 'これまでの作品紹介です。'
      }}
    >
      <WorkDetail
        title="ふえあり～"
        image={image}
        data={[
          {
            title: '初回頒布イベント',
            content: '東方紅楼夢7'
          },
          {
            title: '説明',
            content: '妖精大戦争で使用されたBGM全曲をリコーダー五重奏（ソプラニーノ・ソプラノ・アルト・テナー・バス）用にアレンジし、 多重録音したCDです。全10曲。オリジナルアレンジのマーチ「氷精さんの休日」も収録されております。'
          },
          {
            title: '頒布価格',
            content: '300円'
          },
          {
            title: 'アレンジ／演奏',
            content: 'あかむら'
          },
          {
            title: 'イラスト',
            content: <>
              <a href={links.pixiv.taka} target="_blank">鷹</a>
            </>
          },
        ]}
      />
      <WorkDetail
        title="妖精大戦争全曲 リコーダーアンサンブル楽譜集"
        subtitle="～ソプラニーノからバスの五本で吹ける～"
        image={sheetsImage}
        data={[
          {
            title: '説明',
            content: '『ふえあり～』で使用した楽譜をまとめて一冊の楽譜集にまとめてみたものです。'
          },
          {
            title: 'イラスト',
            content: <>
              <a href={links.pixiv.horo} target="_blank">椎矢ほろ</a>
            </>
          }
        ]}
      />
      <BackButton />
    </Layout>
  )
}

export default FuairyPage
