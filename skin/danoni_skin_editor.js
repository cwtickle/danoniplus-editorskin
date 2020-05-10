`use strict`;
/**
 * Dancing☆Onigiri スキンjsファイル
 * Editorスキン
 * 
 * Source by tickle
 * Created : 2020/05/09
 * Revised :
 * 
 * https://github.com/cwtickle/danoniplus-editorskin
 */
const g_editorVersion = `Ver 0.0.0`;
const g_editorRevisedDate = `2020/05/09`;

/**
 * タイトル画面 [Scene: Title / Melon]
 */
function skinTitleInit() {

}

/**
 * オプション画面(初期表示) [Scene: Option / Lime]
 */
function skinOptionInit() {

    // エディターボタン描画
    const btnEditor = createCssButton({
        id: `btnEditor`,
        name: `Editor`,
        x: g_sWidth / 3,
        y: g_sHeight - 50,
        width: g_sWidth / 3,
        height: C_BTN_HEIGHT,
        fontsize: C_LBL_BTNSIZE,
        align: C_ALIGN_CENTER,
        animationName: (g_initialFlg ? `` : `smallToNormalY`),
        class: g_cssObj.button_Tweet,
    }, _ => {
        createEditorWindow();
    });
    divRoot.appendChild(btnEditor);
}

/**
 * エディター子画面の作成
 */
function createEditorWindow() {
    const editorRoot = createSprite(`divRoot`, `editorRoot`, 0, 0, g_sWidth, g_sHeight);
    editorRoot.style.background = `#ffffff`;

    editorRoot.appendChild(createImg(`editorTitle`, `../img/editor/title.png`, g_sWidth / 2 - 150, 20, 300, 110));


    // エディターを閉じる
    const btnEditorClose = createCssButton({
        id: `btnEditorClose`,
        name: `X`,
        x: 10,
        y: 10,
        width: 30,
        height: 30,
        fontsize: 20,
        align: C_ALIGN_CENTER,
        class: g_cssObj.button_Start,
    }, _ => {
        divRoot.removeChild(editorRoot);
        divRoot.removeChild(btnEditorClose);
    });
    divRoot.appendChild(btnEditorClose);
}

/**
 * 表示変更(初期表示) [Scene: Settings-Display / Lemon]
 */
function skinSettingsDisplayInit() {

}

/**
 * キーコンフィグ画面(初期表示) [Scene: KeyConfig / Orange]
 */
function skinKeyConfigInit() {

}

/**
 * ロード画面（楽曲読込後）
 */
function skinPreloadingInit() {

}

/**
 * メイン画面(初期表示) [Scene: Main / Banana]
 */
function skinMainInit() {

}

/**
 * 結果画面(初期表示) [Scene: Result / Grape]
 */
function skinResultInit() {

}