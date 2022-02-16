<i18n>
## language=yaml
ja:
  title: ScalaMatsuri Tシャツショップ
  overview: |
    ScalaMatsuriTシャツのオンラインショップが、期間限定でオープンしました！
  ecshop_world_link: 世界中から注文可能なショップはこちら
en:
  title: ScalaMatsuri T-shirt shop
  overview: |
    ScalaMatsuri T-shirts online shop has been open for a limited period!
  ecshop_world_link: Worldwide Orders
</i18n>

<template>
  <section class="content pre-events">
    <div class="content_inner">
      <h2 class="content_title">
        {{ $t('title') }}
      </h2>
      <p class="content_text">
        <span v-html="$t('overview')" />
      </p>
      <p class="content_link">
        <a href="https://scalamatsuri-online-shop.myshopify.com/" target="_blank" rel="noopener">{{ $t('ecshop_world_link') }}</a><img v-lazy="require('~/assets/img/common/arrow-next-b.svg')">
      </p>
    </div>
  </section>
</template>
