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
var g_editorVersion = `Ver 0.3.0`;
var g_editorRevisedDate = `2020/05/10`;
var g_keyDownEvent;

var g_editorObj = {
    bpm: 180,
    firstNumber: 200,
    interval: 10,
    page: 1,
};

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
        g_keyDownEvent = document.onkeydown;
        document.onkeydown = _ => { };
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
 * テキストボックスの作成
 * @param {string} _id 
 * @param {number} _x 
 * @param {number} _y 
 * @param {number} _width 
 */
function createTextBox(_id, _x, _y, _width, _text = ``) {
    const input = document.createElement(`input`);
    input.id = _id;
    input.type = `text`;
    input.style.position = `absolute`;
    input.style.left = `${_x}px`;
    input.style.top = `${_y}px`;
    input.style.width = `${_width}px`;
    input.value = _text;

    return input;
}

/**
 * エディタータイトル画面の作成
 */
function createEditorWindow() {
    const editorRoot = createSprite(`divRoot`, `editorRoot`, 0, 0, g_sWidth, g_sHeight);
    editorRoot.style.background = `#ffffff`;
    editorRoot.appendChild(createImg(`editorTitle`, `../img/editor/title.png`, g_sWidth / 2 - 150, 20, 300, 110));

    editorRoot.appendChild(createDivCssLabel(`lblBpmNew`, g_sWidth / 4, g_sHeight - 160, 50, 20, 14, `BPM`, `editor_base`));
    const txtBpmNew = createTextBox(`txtBpmNew`, g_sWidth / 4 + 50, g_sHeight - 160, 100);
    editorRoot.appendChild(txtBpmNew);

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
        g_editorObj.bpm = setVal(txtBpmNew.value, 180, C_TYP_NUMBER);
        g_editorObj.interval = 1800 / g_editorObj.bpm;
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
        document.onkeydown = g_keyDownEvent;
        divRoot.removeChild(editorRoot);
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

    createEditorMain();
    createSideBar();

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

function createEditorMain() {
    const mainEditorRoot = createSprite(`editorRoot`, `mainEditorRoot`, 0, 0, g_sWidth - 150, g_sHeight);
    createLine(mainEditorRoot);

}

function createLine(_obj) {
    const lineBase = document.createElement(`canvas`);
    lineBase.id = `editorLine`;
    lineBase.width = `${g_sWidth - 300}`;
    lineBase.height = `${g_sHeight - 40}`;
    lineBase.style.left = `100px`;
    lineBase.style.top = `20px`;
    lineBase.style.position = `absolute`;
    lineBase.style.background = `#ffffff`;

    const context = lineBase.getContext(`2d`);

    for (let j = 0; j <= 64; j += 16) {
        drawEditorLine(context, j, `main`, 2);
        for (let k = 0; k < 16; k++) {
            drawEditorLine(context, (j + k), `sub`, 2);
        }
    }
    _obj.appendChild(lineBase);
}

/**
 * グラフ上に目盛を表示
 * @param {object} _context 
 * @param {number} _posy 
 * @param {string} _lineType 
 * @param {number} _fixed
 */
function drawEditorLine(_context, _posy, _lineType, _fixed = 0) {
    const lineY = _posy * 7 + 5;
    _context.beginPath();
    _context.moveTo(0, lineY);
    _context.lineTo(g_sWidth - 250, lineY);
    _context.lineWidth = 1;

    if (_lineType === `main`) {
        _context.strokeStyle = `#000000`;
    } else {
        _context.strokeStyle = `#646464`;
    }
    _context.stroke();
}

/**
 * メイン画面・サイドバー表示
 */
function createSideBar() {
    const sideBarRoot = createSprite(`editorRoot`, `sideBarRoot`, g_sWidth - 150, 0, 150, g_sHeight);

    // ページ表示
    const lblPage = createEditorLabel(`lblPage`, 45, 50, 50, 20, 14, g_editorObj.page, C_ALIGN_CENTER);
    sideBarRoot.appendChild(lblPage);
    sideBarRoot.appendChild(makePageButton(`lnkPage`, `R`, 95, 50, _ => {
        g_editorObj.page = (g_editorObj.page === 100 ? 1 : ++g_editorObj.page);
        lblPage.innerHTML = g_editorObj.page;
    }));
    sideBarRoot.appendChild(makePageButton(`lnkPage`, `L`, 25, 50, _ => {
        g_editorObj.page = (g_editorObj.page === 1 ? 100 : --g_editorObj.page);
        lblPage.innerHTML = g_editorObj.page;
    }));
    sideBarRoot.appendChild(makePageButton(`lnkPage`, `RR`, 120, 50, _ => {
        g_editorObj.page = (g_editorObj.page === 100 ? 1 : (g_editorObj.page >= 100 - 5 ? 100 : g_editorObj.page + 5));
        lblPage.innerHTML = g_editorObj.page;
    }));
    sideBarRoot.appendChild(makePageButton(`lnkPage`, `LL`, 0, 50, _ => {
        g_editorObj.page = (g_editorObj.page === 1 ? 100 : (g_editorObj.page <= 5 ? 1 : g_editorObj.page - 5));
        lblPage.innerHTML = g_editorObj.page;
    }));

    // 基本項目の表示
    [`firstNumber`, `interval`, `bpm`].forEach((item, j) => {
        sideBarRoot.appendChild(createEditorLabel(`lbl${toCapitalize(item)}`, 0, 200 + j * 40, 100, 20, 14, `${toCapitalize(item)}`));
        sideBarRoot.appendChild(createTextBox(`txt${toCapitalize(item)}`, 0, 220 + j * 40, 100, g_editorObj[item]));
    })

    // 譜面出力
    const btnEditorPrint = createCssButton({
        id: `btnEditorPrint`,
        name: `GO!`,
        x: 0,
        y: 80,
        width: 70,
        height: 50,
        fontsize: 30,
        align: C_ALIGN_CENTER,
        class: g_cssObj.button_Next,
    }, _ => {
        console.log(`Print`);
    });
    sideBarRoot.appendChild(btnEditorPrint);

    // セーブ出力
    const btnEditorSave = createCssButton({
        id: `btnEditorSave`,
        name: `Save`,
        x: 70,
        y: 100,
        width: 70,
        height: 30,
        fontsize: 20,
        align: C_ALIGN_CENTER,
        class: g_cssObj.button_Setting,
    }, _ => {
        console.log(`Save`);
    });
    sideBarRoot.appendChild(btnEditorSave);
}

function createEditorLabel(_id, _x, _y, _width, _height, _fontsize, _text, _align = C_ALIGN_LEFT) {
    const lbl = createDivCssLabel(_id, _x, _y, _width, _height, _fontsize, _text, `editor_base`);
    lbl.style.textAlign = _align;
    return lbl;
}

function makePageButton(_id, _directionFlg, _x, _y, _func) {
    const miniButton = createCssButton({
        id: _id + _directionFlg,
        name: eval(`C_LBL_SETMINI${_directionFlg}`),
        x: _x,
        y: _y - 5,
        width: 20,
        height: 30,
        fontsize: 16,
        align: C_ALIGN_CENTER,
        class: g_cssObj.button_Mini,
    }, _func);

    return miniButton;
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