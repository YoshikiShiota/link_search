/**
 * ページ内のリンクを取得
 * 
 * 除外するURLやパラメーターも設定
 */

// ページ内のリンクをすべて取得
let all_links = document.links;
// リンクの個数
const link_num = all_links.length;
// リンクの数の分だけループ
for (let i = 0; i < link_num; i++) {
  // 取得したhrefを格納
  let link = all_links[i].href;
  // リンクチェックして返す
  if (check_explode_link(link) === -1) {
    console.log(link);
  }
}

/**
 * 除外するリンクかどうか判定
 * @param   {* string} href       // リンクのurl
 * @returns {* int}    check_nume // -1以外の値なら除外
 */
function check_explode_link(href) {
  // リンクに特定のテキストを含むか判定
  let check_num = href.indexOf('不必要なドメインなど');

  return check_num;
}