//キャッシュ関連の共通処理を記載する
//https://zenn.dev/ttani/articles/next-materialui-setup

import createCache from '@emotion/cache'

export default function createEmotionCache() {
  return createCache({ key: 'css', prepend: true })
}
