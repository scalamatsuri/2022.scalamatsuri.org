<i18n>
## language=yaml
ja:
  title: プログラム
  overview: |
    3月19日はカンファレンス、3月20日は飛び入りカンファレンスを開催します。
  link_text: タイムテーブルはこちら
en:
  title: Program
  overview: |
    19th Mar. is a conference day. 20th Mar. is an open mic conference day.
  link_text: Here is our timetable.

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
        <nuxt-link :to="localePath('program')">
          {{ $t('link_text') }}
        </nuxt-link>
        <img v-lazy="require('~/assets/img/common/arrow-next-b.svg')">
      </p>
    </div>
  </section>
</template>
