const poems = [
  [1, "天智天皇", "秋の田の かりほの庵の とまをあらみ", "わが衣手は 露にぬれつつ"],
  [2, "持統天皇", "春過ぎて 夏来にけらし 白妙の", "衣ほすてふ 天の香具山"],
  [3, "柿本人麻呂", "足引きの 山鳥の尾の しだり尾の", "ながながし夜を ひとりかも寝む"],
  [4, "山部赤人", "田子の浦に 打出でてみれば 白妙の", "富士の高嶺に 雪は降りつつ"],
  [5, "猿丸大夫", "奥山に 紅葉ふみ分け 鳴く鹿の", "声聞く時ぞ 秋は悲しき"],
  [6, "中納言家持", "かささぎの 渡せる橋に 置く霜の", "白きを見れば 夜ぞ更けにける"],
  [7, "阿倍仲麻呂", "天の原 ふりさけ見れば 春日なる", "三笠の山に 出でし月かも"],
  [8, "喜撰法師", "わが庵は 都のたつみ しかぞ住む", "世をうぢ山と 人はいふなり"],
  [9, "小野小町", "花の色は 移りにけりな いたづらに", "わが身世にふる ながめせしまに"],
  [10, "蝉丸", "これやこの 行くも帰るも 別れては", "知るも知らぬも 逢坂の関"],
  [11, "参議篁", "わたの原 八十島かけて 漕ぎ出でぬと", "人には告げよ あまの釣舟"],
  [12, "僧正遍昭", "天つ風 雲の通ひ路 吹きとぢよ", "乙女の姿 しばしとどめむ"],
  [13, "陽成院", "筑波嶺の 峰より落つる みなの川", "恋ぞつもりて 淵となりぬる"],
  [14, "河原左大臣", "陸奥の しのぶもぢずり 誰ゆゑに", "乱れそめにし 我ならなくに"],
  [15, "光孝天皇", "君がため 春の野に出でて 若菜つむ", "わが衣手に 雪は降りつつ"],
  [16, "中納言行平", "立ち別れ いなばの山の 峰に生ふる", "まつとし聞かば 今帰り来む"],
  [17, "在原業平朝臣", "ちはやぶる 神代も聞かず 竜田川", "から紅に 水くくるとは"],
  [18, "藤原敏行朝臣", "住の江の 岸に寄る波 よるさへや", "夢の通ひ路 人目よくらむ"],
  [19, "伊勢", "難波潟 短き芦の ふしの間も", "逢はでこの世を 過ぐしてよとや"],
  [20, "元良親王", "わびぬれば 今はた同じ 難波なる", "身をつくしても 逢はむとぞ思ふ"],
  [21, "素性法師", "今来むと いひしばかりに 長月の", "有明の月を 待ち出でつるかな"],
  [22, "文屋康秀", "吹くからに 秋の草木の しをるれば", "むべ山風を あらしといふらむ"],
  [23, "大江千里", "月見れば 千々に物こそ 悲しけれ", "わが身ひとつの 秋にはあらねど"],
  [24, "菅家", "このたびは 幣も取りあへず 手向山", "紅葉の錦 神のまにまに"],
  [25, "三条右大臣", "名にし負はば 逢坂山の さねかづら", "人に知られで 来るよしもがな"],
  [26, "貞信公", "小倉山 峰のもみぢ葉 心あらば", "今ひとたびの みゆき待たなむ"],
  [27, "中納言兼輔", "みかの原 わきて流るる 泉川", "いつ見きとてか 恋しかるらむ"],
  [28, "源宗于朝臣", "山里は 冬ぞ寂しさ まさりける", "人目も草も かれぬと思へば"],
  [29, "凡河内躬恒", "心あてに 折らばや折らむ 初霜の", "置きまどはせる 白菊の花"],
  [30, "壬生忠岑", "有明の つれなく見えし 別れより", "暁ばかり 憂きものはなし"],
  [31, "坂上是則", "朝ぼらけ 有明の月と 見るまでに", "吉野の里に 降れる白雪"],
  [32, "春道列樹", "山川に 風のかけたる しがらみは", "流れもあへぬ 紅葉なりけり"],
  [33, "紀友則", "久方の 光のどけき 春の日に", "しづ心なく 花の散るらむ"],
  [34, "藤原興風", "誰をかも 知る人にせむ 高砂の", "松も昔の 友ならなくに"],
  [35, "紀貫之", "人はいさ 心も知らず ふるさとは", "花ぞ昔の 香ににほひける"],
  [36, "清原深養父", "夏の夜は まだ宵ながら 明けぬるを", "雲のいづこに 月宿るらむ"],
  [37, "文屋朝康", "白露に 風の吹きしく 秋の野は", "つらぬきとめぬ 玉ぞ散りける"],
  [38, "右近", "忘らるる 身をば思はず 誓ひてし", "人の命の 惜しくもあるかな"],
  [39, "参議等", "浅茅生の 小野の篠原 しのぶれど", "あまりてなどか 人の恋しき"],
  [40, "平兼盛", "しのぶれど 色に出でにけり わが恋は", "ものや思ふと 人の問ふまで"],
  [41, "壬生忠見", "恋すてふ わが名はまだき 立ちにけり", "人知れずこそ 思ひそめしか"],
  [42, "清原元輔", "契りきな かたみに袖を しぼりつつ", "末の松山 波こさじとは"],
  [43, "権中納言敦忠", "逢ひ見ての 後の心に くらぶれば", "昔はものを 思はざりけり"],
  [44, "中納言朝忠", "逢ふことの 絶えてしなくば なかなかに", "人をも身をも 恨みざらまし"],
  [45, "謙徳公", "あはれとも いふべき人は 思ほえで", "身のいたづらに なりぬべきかな"],
  [46, "曽禰好忠", "由良のとを 渡る舟人 かぢを絶え", "ゆくへも知らぬ 恋の道かな"],
  [47, "恵慶法師", "八重むぐら しげれる宿の さびしきに", "人こそ見えね 秋は来にけり"],
  [48, "源重之", "風をいたみ 岩うつ波の おのれのみ", "くだけてものを 思ふころかな"],
  [49, "大中臣能宣朝臣", "みかきもり 衛士のたく火の 夜は燃え", "昼は消えつつ ものをこそ思へ"],
  [50, "藤原義孝", "君がため 惜しからざりし 命さへ", "長くもがなと 思ひけるかな"],
  [51, "藤原実方朝臣", "かくとだに えやはいぶきの さしも草", "さしも知らじな 燃ゆる思ひを"],
  [52, "藤原道信朝臣", "明けぬれば 暮るるものとは 知りながら", "なほ恨めしき 朝ぼらけかな"],
  [53, "右大将道綱母", "嘆きつつ ひとり寝る夜の 明くる間は", "いかに久しき ものとかは知る"],
  [54, "儀同三司母", "忘れじの 行く末までは かたければ", "今日を限りの 命ともがな"],
  [55, "大納言公任", "滝の音は 絶えて久しく なりぬれど", "名こそ流れて なほ聞こえけれ"],
  [56, "和泉式部", "あらざらむ この世のほかの 思ひ出に", "今ひとたびの 逢ふこともがな"],
  [57, "紫式部", "めぐり逢ひて 見しやそれとも わかぬ間に", "雲隠れにし 夜半の月かな"],
  [58, "大弐三位", "有馬山 ゐなの笹原 風吹けば", "いでそよ人を 忘れやはする"],
  [59, "赤染衛門", "やすらはで 寝なましものを 小夜更けて", "傾くまでの 月を見しかな"],
  [60, "小式部内侍", "大江山 いく野の道の 遠ければ", "まだふみも見ず 天の橋立"],
  [61, "伊勢大輔", "いにしへの 奈良の都の 八重桜", "今日九重に 匂ひぬるかな"],
  [62, "清少納言", "夜をこめて 鳥のそら音は はかるとも", "世に逢坂の 関はゆるさじ"],
  [63, "左京大夫道雅", "今はただ 思ひ絶えなむ とばかりを", "人づてならで 言ふよしもがな"],
  [64, "権中納言定頼", "朝ぼらけ 宇治の川霧 絶え絶えに", "あらはれ渡る 瀬々の網代木"],
  [65, "相模", "恨みわび ほさぬ袖だに あるものを", "恋に朽ちなむ 名こそ惜しけれ"],
  [66, "前大僧正行尊", "もろともに あはれと思へ 山桜", "花よりほかに 知る人もなし"],
  [67, "周防内侍", "春の夜の 夢ばかりなる 手枕に", "かひなく立たむ 名こそ惜しけれ"],
  [68, "三条院", "心にも あらで憂き世に ながらへば", "恋しかるべき 夜半の月かな"],
  [69, "能因法師", "嵐吹く 三室の山の もみぢ葉は", "竜田の川の 錦なりけり"],
  [70, "良暹法師", "寂しさに 宿を立ち出でて ながむれば", "いづこも同じ 秋の夕暮"],
  [71, "大納言経信", "夕されば 門田の稲葉 おとづれて", "芦のまろやに 秋風ぞ吹く"],
  [72, "祐子内親王家紀伊", "音に聞く 高師の浜の あだ波は", "かけじや袖の ぬれもこそすれ"],
  [73, "権中納言匡房", "高砂の 尾の上の桜 咲きにけり", "外山の霞 立たずもあらなむ"],
  [74, "源俊頼朝臣", "うかりける 人を初瀬の 山おろしよ", "はげしかれとは 祈らぬものを"],
  [75, "藤原基俊", "契りおきし させもが露を 命にて", "あはれ今年の 秋もいぬめり"],
  [76, "法性寺入道前関白太政大臣", "わたの原 漕ぎ出でて見れば 久方の", "雲居にまがふ 沖つ白波"],
  [77, "崇徳院", "瀬をはやみ 岩にせかるる 滝川の", "われても末に 逢はむとぞ思ふ"],
  [78, "源兼昌", "淡路島 通ふ千鳥の 鳴く声に", "幾夜寝覚めぬ 須磨の関守"],
  [79, "左京大夫顕輔", "秋風に たなびく雲の 絶え間より", "もれ出づる月の 影のさやけさ"],
  [80, "待賢門院堀河", "長からむ 心も知らず 黒髪の", "乱れて今朝は ものをこそ思へ"],
  [81, "後徳大寺左大臣", "ほととぎす 鳴きつる方を ながむれば", "ただ有明の 月ぞ残れる"],
  [82, "道因法師", "思ひわび さても命は あるものを", "憂きにたへぬは 涙なりけり"],
  [83, "皇太后宮大夫俊成", "世の中よ 道こそなけれ 思ひ入る", "山の奥にも 鹿ぞ鳴くなる"],
  [84, "藤原清輔朝臣", "長らへば またこのごろや しのばれむ", "憂しと見し世ぞ 今は恋しき"],
  [85, "俊恵法師", "夜もすがら もの思ふころは 明けやらで", "ねやのひまさへ つれなかりけり"],
  [86, "西行法師", "嘆けとて 月やはものを 思はする", "かこち顔なる わが涙かな"],
  [87, "寂蓮法師", "村雨の 露もまだひぬ 槙の葉に", "霧立ちのぼる 秋の夕暮"],
  [88, "皇嘉門院別当", "難波江の 芦のかり寝の ひとよゆゑ", "身をつくしてや 恋ひわたるべき"],
  [89, "式子内親王", "玉の緒よ 絶えなば絶えね 長らへば", "忍ぶることの 弱りもぞする"],
  [90, "殷富門院大輔", "見せばやな 雄島のあまの 袖だにも", "濡れにぞ濡れし 色は変はらず"],
  [91, "後京極摂政前太政大臣", "きりぎりす 鳴くや霜夜の さむしろに", "衣かたしき ひとりかも寝む"],
  [92, "二条院讃岐", "わが袖は 潮干に見えぬ 沖の石の", "人こそ知らね 乾く間もなし"],
  [93, "鎌倉右大臣", "世の中は 常にもがもな 渚こぐ", "あまの小舟の 綱手かなしも"],
  [94, "参議雅経", "み吉野の 山の秋風 小夜更けて", "ふるさと寒く 衣うつなり"],
  [95, "前大僧正慈円", "おほけなく 憂き世の民に おほふかな", "わが立つ杣に 墨染の袖"],
  [96, "入道前太政大臣", "花さそふ 嵐の庭の 雪ならで", "ふりゆくものは わが身なりけり"],
  [97, "権中納言定家", "来ぬ人を まつほの浦の 夕なぎに", "焼くや藻塩の 身もこがれつつ"],
  [98, "従二位家隆", "風そよぐ 楢の小川の 夕暮は", "みそぎぞ夏の しるしなりける"],
  [99, "後鳥羽院", "人もをし 人も恨めし あぢきなく", "世を思ふゆゑに もの思ふ身は"],
  [100, "順徳院", "ももしきや 古き軒端の しのぶにも", "なほあまりある 昔なりけり"],
].map(([id, poet, upper, lower]) => ({ id, poet, upper, lower }));

const kanjiNumbers = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
const els = {
  score: document.querySelector("#score"),
  accuracy: document.querySelector("#accuracy"),
  range: document.querySelector("#range"),
  shuffle: document.querySelector("#shuffle"),
  reset: document.querySelector("#reset"),
  poemNumber: document.querySelector("#poem-number"),
  poet: document.querySelector("#poet"),
  upper: document.querySelector("#upper"),
  choices: document.querySelector("#choices"),
  feedback: document.querySelector("#feedback"),
  next: document.querySelector("#next"),
  showAnswer: document.querySelector("#show-answer"),
  remaining: document.querySelector("#remaining"),
  streak: document.querySelector("#streak"),
  missedList: document.querySelector("#missed-list"),
};

const state = {
  pool: [],
  current: null,
  answered: false,
  total: 0,
  correct: 0,
  streak: 0,
  missed: new Set(JSON.parse(localStorage.getItem("missedPoems") || "[]")),
};

function toKanjiNumber(number) {
  if (number <= 10) return kanjiNumbers[number];
  if (number < 20) return `十${kanjiNumbers[number - 10]}`;
  const tens = Math.floor(number / 10);
  const ones = number % 10;
  if (number === 100) return "百";
  return `${kanjiNumbers[tens]}十${ones ? kanjiNumbers[ones] : ""}`;
}

function shuffleArray(items) {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getRangePoems() {
  const value = els.range.value;
  if (value === "all") return poems;
  if (value === "missed") {
    const missed = poems.filter((poem) => state.missed.has(poem.id));
    return missed.length ? missed : poems;
  }
  const [start, end] = value.split("-").map(Number);
  return poems.filter((poem) => poem.id >= start && poem.id <= end);
}

function buildPool() {
  state.pool = shuffleArray(getRangePoems());
  updateStats();
}

function nextQuestion() {
  if (!state.pool.length) buildPool();
  state.current = state.pool.pop();
  state.answered = false;
  els.poemNumber.textContent = toKanjiNumber(state.current.id);
  els.poet.textContent = state.current.poet;
  els.upper.textContent = state.current.upper;
  els.feedback.innerHTML = "<p>下の句を選んでください。</p>";
  els.next.disabled = true;
  renderChoices();
  updateStats();
}

function renderChoices() {
  const wrongs = shuffleArray(poems.filter((poem) => poem.id !== state.current.id))
    .slice(0, 3)
    .map((poem) => poem.lower);
  const choices = shuffleArray([state.current.lower, ...wrongs]);
  els.choices.innerHTML = "";
  choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    button.textContent = choice;
    button.addEventListener("click", () => answer(choice, button));
    els.choices.append(button);
  });
}

function answer(choice, button) {
  if (state.answered) return;
  state.answered = true;
  const isCorrect = choice === state.current.lower;
  state.total += 1;
  if (isCorrect) {
    state.correct += 1;
    state.streak += 1;
    state.missed.delete(state.current.id);
    els.feedback.innerHTML = `<p>正解です。${state.current.poet}の歌です。</p>`;
  } else {
    state.streak = 0;
    state.missed.add(state.current.id);
    els.feedback.innerHTML = `<p>惜しい。正解は「${state.current.lower}」です。</p>`;
  }
  localStorage.setItem("missedPoems", JSON.stringify([...state.missed]));
  markChoices(button, isCorrect);
  els.next.disabled = false;
  updateStats();
}

function markChoices(selected, isCorrect) {
  [...els.choices.children].forEach((button) => {
    button.disabled = true;
    if (button.textContent === state.current.lower) button.classList.add("correct");
  });
  if (!isCorrect) selected.classList.add("wrong");
}

function showAnswer() {
  if (state.answered) return;
  state.answered = true;
  state.total += 1;
  state.streak = 0;
  state.missed.add(state.current.id);
  localStorage.setItem("missedPoems", JSON.stringify([...state.missed]));
  els.feedback.innerHTML = `<p>答えは「${state.current.lower}」です。間違えた札に追加しました。</p>`;
  const correctButton = [...els.choices.children].find((button) => button.textContent === state.current.lower);
  markChoices(correctButton, true);
  els.next.disabled = false;
  updateStats();
}

function updateStats() {
  els.score.textContent = `${state.correct} / ${state.total}`;
  const rate = state.total ? Math.round((state.correct / state.total) * 100) : 0;
  els.accuracy.textContent = `正答率 ${rate}%`;
  els.remaining.textContent = getRangePoems().length;
  els.streak.textContent = state.streak;
  renderMissed();
}

function renderMissed() {
  const missedPoems = poems.filter((poem) => state.missed.has(poem.id));
  els.missedList.innerHTML = "";
  if (!missedPoems.length) {
    const li = document.createElement("li");
    li.textContent = "まだありません";
    els.missedList.append(li);
    return;
  }
  missedPoems.forEach((poem) => {
    const li = document.createElement("li");
    li.textContent = `${poem.id}. ${poem.upper} / ${poem.lower}`;
    els.missedList.append(li);
  });
}

els.next.addEventListener("click", nextQuestion);
els.showAnswer.addEventListener("click", showAnswer);
els.shuffle.addEventListener("click", () => {
  buildPool();
  nextQuestion();
});
els.range.addEventListener("change", () => {
  buildPool();
  nextQuestion();
});
els.reset.addEventListener("click", () => {
  state.total = 0;
  state.correct = 0;
  state.streak = 0;
  state.missed.clear();
  localStorage.removeItem("missedPoems");
  updateStats();
});

buildPool();
nextQuestion();
