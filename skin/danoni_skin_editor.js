`use strict`;
/**
 * Dancing☆Onigiri スキンjsファイル
 * Editorスキン
 * 
 * Source by tickle
 * Created : 2020/05/09
 * Revised : 2020/05/10
 * 
 * https://github.com/cwtickle/danoniplus-editorskin
 */
const g_editorVersion = `Ver 0.1.0`;
const g_editorRevisedDate = `2020/05/10`;

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
 * エディター用の画面クリア関数
 */
function clearEditorWindow() {
    deleteChildspriteAll(`editorRoot`);
}

/**
 * エディタータイトル画面の作成
 */
function createEditorWindow() {
    const editorRoot = createSprite(`divRoot`, `editorRoot`, 0, 0, g_sWidth, g_sHeight);
    editorRoot.style.background = `#ffffff`;
    editorRoot.appendChild(createImg(`editorTitle`, `../img/editor/title.png`, g_sWidth / 2 - 150, 20, 300, 110));

    // スタートボタン描画
    const btnNew = createCssButton({
        id: `btnNew`,
        name: `新規作成 New`,
        x: g_sWidth / 4,
        y: g_sHeight - 125,
        width: g_sWidth / 2,
        height: C_BTN_HEIGHT / 2,
        fontsize: C_LBL_BTNSIZE * 2 / 3,
        align: C_ALIGN_CENTER,
        class: g_cssObj.button_Next,
    }, _ => {
        clearEditorWindow();
        mainEditorInit();
    });
    editorRoot.appendChild(btnNew);

    // ロードボタン描画
    const btnLoad = createCssButton({
        id: `btnLoad`,
        name: `ふっかつのじゅもん Load`,
        x: g_sWidth / 4,
        y: g_sHeight - 90,
        width: g_sWidth / 2,
        height: C_BTN_HEIGHT / 2,
        fontsize: C_LBL_BTNSIZE * 2 / 3,
        align: C_ALIGN_CENTER,
        class: g_cssObj.button_Setting,
    }, _ => {
        clearEditorWindow();
        loadEditorInit();
    });
    editorRoot.appendChild(btnLoad);

    const lnkEVersion = createCssButton({
        id: `lnkVersion`,
        name: `&copy; ${g_revisedDate.slice(0, 4)} ティックル, CW-Editor ${g_editorVersion}`,
        x: 10,
        y: g_sHeight - 20,
        width: g_sWidth - 20,
        height: 16,
        fontsize: 12,
        align: C_ALIGN_RIGHT,
        class: g_cssObj.button_Tweet,
    }, _ => window.open(`https://github.com/cwtickle/danoniplus-editorskin`, `_blank`));
    editorRoot.appendChild(lnkEVersion);

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
        if (window.confirm(`エディターを終了します。よろしいですか？`)) {
            divRoot.removeChild(editorRoot);
            divRoot.removeChild(btnEditorClose);
        }
    });
    editorRoot.appendChild(btnEditorClose);
}

/**
 * ロード画面
 */
function loadEditorInit() {

    // タイトルへ戻る
    const btnEditorBack = createCssButton({
        id: `btnEditorBack`,
        name: `<`,
        x: 10,
        y: 10,
        width: 30,
        height: 30,
        fontsize: 20,
        align: C_ALIGN_CENTER,
        class: g_cssObj.button_Back,
    }, _ => {
        clearEditorWindow();
        createEditorWindow();
    });
    editorRoot.appendChild(btnEditorBack);

}

/**
 * メイン画面
 */
function mainEditorInit() {

    // タイトルへ戻る
    const btnEditorBack = createCssButton({
        id: `btnEditorBack`,
        name: `<`,
        x: 10,
        y: 10,
        width: 30,
        height: 30,
        fontsize: 20,
        align: C_ALIGN_CENTER,
        class: g_cssObj.button_Back,
    }, _ => {
        if (window.confirm(`エディターを終了します。よろしいですか？`)) {
            clearEditorWindow();
            createEditorWindow();
        }
    });
    editorRoot.appendChild(btnEditorBack);
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