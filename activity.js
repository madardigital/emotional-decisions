"use strict";

const scenes = [
  {
    "contextTag": "السياق: الاستعداد لعرض بحثي",
    "signalTag": "المؤشر: أثر القلق على التفكير",
    "story": "تستعدين لتقديم عرض بحثي مهم غدًا أمام أستاذة المقرر والطالبات. أثناء مراجعتكِ للشرائح مساءً، لاحظتِ أنكِ متوترة وتنتقدين كل جملة كتبتِها، وبدأتِ تفكرين في حذف جزء كامل أعددتِه بعناية بحجة أنه \"غير كافٍ\".",
    "question": "أي تصرف يعكس «الوعي الذاتي» في هذه اللحظة؟",
    "bestRationale": "يركّز «الوعي الذاتي» على قراءة الداخل: إدراك الشعور القائم، وكشف كيف يغيّر نظرتنا للأمور، وموازنة ذلك بمعرفة نقاط قوتنا الفعلية دون التسرع في حذف جهد متقن.",
    "alternativesNote": "تشتيت الانتباه يؤجل مواجهة الفكرة دون فهم سببها، بينما طلب التطمين الخارجي يبحث عن حكم الآخرين بدل تمييز أثر القلق الشخصي.",
    "options": [
      {
        "key": "أ",
        "text": "إغلاق الملف فورًا والانتقال لمذاكرة مادة أخرى لتشتيت الانتباه عن هذا الشعور حتى يهدأ.",
        "feedback": "أخذ استراحة خيار شائع لتخفيف التوتر مؤقتًا، لكنه يتجاوز ملاحظة الشعور نفسه؛ فالوعي الذاتي يبدأ بالتعرّف على الانفعال وفهم أثره على أفكاركِ قبل الابتعاد."
      },
      {
        "key": "ب",
        "text": "التوقف قليلًا لتسمية شعور القلق من التقييم، وإدراك أنه السبب في تشكيككِ بجودة عملكِ رغم إتقانكِ للبحث.",
        "feedback": "اختيار دقيق؛ هنا طبّقتِ جوهر الوعي الذاتي بتحديد شعور القلق، وفهم تأثيره المباشر في أفكاركِ التشكيكية، مع استحضار نقطة قوتكِ الحقيقية وهي إتقان البحث."
      },
      {
        "key": "ج",
        "text": "إرسال الشرائح لصديقة في الشعبة وسؤالها إن كان العرض يبدو ضعيفًا ويحتاج إلى إعادة كتابة.",
        "feedback": "طلب رأي الزميلات مفيد أحيانًا، لكن اللجوء الفوري للتطمين الخارجي قبل إدراك مصدر التوتر الداخلي يعني الاعتماد على الآخرين لتقييم جهد تعرفين مسبقًا أنكِ أتقنتِه."
      }
    ],
    "best": 1,
    "pillar": {
      "id": "self-awareness",
      "title": "الوعي الذاتي",
      "definition": "القدرة على إدراك المرء مشاعره وتأثيرها في أفكاره وسلوكياته ومعرفة نقاط قوته وضعفه.",
      "takeaway": "تسمية الشعور لحظة حدوثه تمنع القلق العابر من تشويه تقييمنا لقدراتنا."
    }
  },
  {
    "contextTag": "السياق: تسليم تكليف جماعي",
    "signalTag": "المؤشر: ضغط الوقت والاندفاع",
    "story": "قبل موعد تسليم التكليف الجماعي بساعتين، اعتذرت إحدى زميلات المجموعة لظرفٍ طارئ، وبقي الجزء الخاص بها غير مكتمل. شعرتِ بضيقٍ حاد وضغطٍ مفاجئ لأن درجتكِ مرتبطة بالتسليم في الوقت المحدد.",
    "question": "أي استجابة تُجسّد «إدارة الذات» بصورة أدق؟",
    "bestRationale": "تقوم «إدارة الذات» على شقّين متكاملين: ضبط الانفعال الاندفاعي بطريقة صحية، والمرونة في التكيّف مع الظروف الطارئة لتحقيق الهدف بأفضل صورة ممكنة.",
    "alternativesNote": "رسالة العتاب تمثّل استجابة اندفاعية غير مثمرة، بينما الاكتفاء بإخلاء المسؤولية يفتقر لمرونة التكيّف وحل المشكلة في الوقت المتاح.",
    "options": [
      {
        "key": "أ",
        "text": "إرسال رسالة عتاب حادة في مجموعة الفريق توضّح حجم الإرباك الذي سبّبه هذا التأخير المفاجئ.",
        "feedback": "الشعور بالضيق مفهوم تحت ضغط الوقت، لكن التعبير المندفع عنه في تلك اللحظة يستهلك الوقت المتبقي ويزيد التوتر دون أن يحل مشكلة التسليم."
      },
      {
        "key": "ب",
        "text": "تسليم الملف ناقصًا كما هو مع كتابة ملاحظة للأستاذة تُخلي مسؤوليتكِ عن الجزء غير المكتمل.",
        "feedback": "توثيق المسؤولية قد يبدو حلًا وقائيًا، لكنه يميل إلى الجمود أمام ظرف طارئ بدل التكيّف المرن والبحث عن معالجة تحفظ جودة العمل الجماعي."
      },
      {
        "key": "ج",
        "text": "أخذ نفسٍ عميق لتهدئة التوتر، ثم إعادة ترتيب الأولويات لتغطية النقاط الأساسية في الجزء المتبقي قبل التسليم.",
        "feedback": "اختيار متّزن؛ يجمع بين السيطرة الصحية على الاندفاع العاطفي الأول، والتكيّف العملي السريع مع ظرف لم يكن في الحسبان."
      }
    ],
    "best": 2,
    "pillar": {
      "id": "self-management",
      "title": "إدارة الذات",
      "definition": "القدرة على السيطرة على المشاعر والسلوكيات الاندفاعية والمتهورة بطريقة صحية والتكيف مع الظروف الحياتية.",
      "takeaway": "تهدئة الاندفاع الأول تفتح المجال للتكيّف العملي مع الظروف المفاجئة."
    }
  },
  {
    "contextTag": "السياق: اجتماع فريق عن بُعد",
    "signalTag": "المؤشر: إشارات غير لفظية",
    "story": "خلال اجتماع عبر الإنترنت لمناقشة خطة البحث، لاحظتِ أن زميلتكِ التي عادةً ما تشارك بحماس، تكتفي اليوم بعبارات مقتضبة مثل \"اللي تشوفونه مناسب\"، وتبدو نبرة صوتها متعبة وغير مركّزة، دون أن تذكر وجود أي مشكلة.",
    "question": "ما التصرف الذي يُظهر «الوعي الاجتماعي» في هذا الموقف؟",
    "bestRationale": "يتمحور «الوعي الاجتماعي» حول قراءة ما وراء الكلمات: التقاط الإشارات الصوتية والسلوكية التي تدل على مشاعر الآخرين وحاجاتهم حتى حين لا يُفصحون عنها.",
    "alternativesNote": "الاستمرار في التوزيع يتجاوز الإشارة العاطفية تمامًا، بينما السؤال المباشر أمام الجميع يغفل حاجة الطرف الآخر للخصوصية والرفق.",
    "options": [
      {
        "key": "أ",
        "text": "الانتباه لتغيّر نبرتها وقلة تفاعلها بوصفهما إشارة لإرهاق أو انشغال، ومراعاة ذلك بتخفيف الضغط عنها أثناء الاجتماع.",
        "feedback": "اختيار يعكس حسًا اجتماعيًا ناضجًا؛ فقد التقطتِ الإشارات غير المباشرة في نبرة الصوت وأسلوب المشاركة، وتصرفتِ بمراعاة دون إحراجها."
      },
      {
        "key": "ب",
        "text": "تقدير موافقتها السريعة واستثمار الوقت في توزيع المهام المتبقية حتى ينتهي الاجتماع بسرعة.",
        "feedback": "الحرص على إنجاز الاجتماع سريعًا أمر عملي، لكن الأخذ بظاهر الموافقة هنا يتجاهل الإشارة الواضحة إلى أنها تمر بظرف أو إرهاق يمنعها من المشاركة المعتادة."
      },
      {
        "key": "ج",
        "text": "سؤالها مباشرة أمام بقية المجموعة عمّا إذا كانت منزعجة من توزيع المهام أو غير راضية عن الخطة.",
        "feedback": "المبادرة بالسؤال نابعة من الاهتمام، لكن طرحه علنًا أمام المجموعة قد يضعها في موقف محرج إذا كانت تمر بظرف خاص لا ترغب في كشفه للجميع."
      }
    ],
    "best": 0,
    "pillar": {
      "id": "social-awareness",
      "title": "الوعي الاجتماعي",
      "definition": "القدرة على فهم مشاعر الآخرين وحاجاتهم وهمومهم والتقاط إشارات تشير إلى هذه المشاعر.",
      "takeaway": "الانتباه لتغيّر نبرة الصوت أو قلة التفاعل يكشف حاجات لا يُصرّح بها الآخرون."
    }
  },
  {
    "contextTag": "السياق: تنسيق مستمر مع صديقة",
    "signalTag": "المؤشر: الحوار والتأثير البنّاء",
    "story": "تكرر تأخر زميلتكِ وصديقتكِ المقرّبة في إرسال أجزائها في أكثر من مقرر، مما يضعكِ في حرج مستمر عند التنسيق. ترغبين في معالجة الأمر بوضوح يحفظ علاقتكما الجيدة ويدفعها للالتزام مستقبلًا.",
    "question": "أي أسلوب حواري يعبّر عن «إدارة العلاقات» بفاعلية؟",
    "bestRationale": "تتجلّى «إدارة العلاقات» في القدرة على التواصل الصادق والمؤثر الذي يعالج المشكلات بمرونة، فيُصلح السلوك العملي دون أن يُفسد الود القائم.",
    "alternativesNote": "التحمّل الصامت يؤجل المشكلة ويُضعف العلاقة من الداخل، بينما اللوم المباشر يُثير الدفاعية بدل التأثير الإيجابي.",
    "options": [
      {
        "key": "أ",
        "text": "تحمّل التأخير بصمت وتعديل جدولكِ الشخصي لتغطية الفجوة، تجنبًا لأي حساسية قد تؤثر في صداقتكما.",
        "feedback": "الرغبة في تجنّب الحساسية مفهومة، لكن الصمت المستمر يراكم الضغط الداخلي ولا يبني تواصلًا صحيًا أو يغيّر السلوك المتكرر."
      },
      {
        "key": "ب",
        "text": "تذكيرها بالمرات السابقة التي تسبّب فيها تأخرها بضغطٍ عليكِ، ومطالبتها بالالتزام التام في المرات القادمة.",
        "feedback": "الوضوح مطلوب، لكن التركيز على استدعاء أخطاء الماضي بصيغة اللوم يدفع الطرف الآخر غالبًا للدفاع عن نفسه بدل التعاون لإيجاد حل."
      },
      {
        "key": "ج",
        "text": "التحدث معها بهدوء حول أثر التأخير على سير عملكما، واقتراح وضع مواعيد تسليم مبكرة تريح الطرفين.",
        "feedback": "اختيار يوازن بين الوضوح واللباقة؛ يعبّر عن الأثر بصدق دون هجوم، ويقترح آلية عملية تؤثر إيجابيًا في التزامها وتحافظ على الصداقة."
      }
    ],
    "best": 2,
    "pillar": {
      "id": "relationship-management",
      "title": "إدارة العلاقات",
      "definition": "تطوير العلاقات الجيدة والمحافظة عليها والقدرة على التواصل والتأثير في الآخرين بفاعلية.",
      "takeaway": "الحوار الهادئ الذي يركّز على الحلول المشتركة يحفظ العلاقة ويعزّز الالتزام."
    }
  }
];

const byId = (id) => document.getElementById(id);
const presentation = byId("presentation");
const stage = byId("stage");
const intro = byId("intro");
const activity = byId("activity");
const summary = byId("summary");
const choicesPanel = byId("choices-panel");
const feedback = byId("feedback");
const choices = byId("choices");
const steps = byId("steps");
const confirm = byId("confirm");
const previous = byId("previous");
const next = byId("next");
const sound = byId("sound");
const fullscreen = byId("fullscreen");
const ordinals = ["١", "٢", "٣", "٤"];
const drafts = Array(scenes.length).fill(null);
const answers = Array(scenes.length).fill(null);
let screen = -1;

function focusView(element) {
  element.focus({ preventScroll: true });
  element.scrollIntoView({ block: "nearest", behavior: "instant" });
}

function showScreen(index) {
  screen = index;
  intro.hidden = index !== -1;
  activity.hidden = index < 0 || index >= scenes.length;
  summary.hidden = index !== scenes.length;
  stage.dataset.screen = !activity.hidden ? "activity" : !summary.hidden ? "summary" : "intro";
  byId("navigation").hidden = !intro.hidden;
  byId("credits").hidden = !activity.hidden;
  if (!activity.hidden) renderScene();
  if (!summary.hidden) showSummary();
  renderProgress();
  presentation.scrollTop = 0;
  window.scrollTo({ top: 0, behavior: "instant" });
  const title = !activity.hidden
    ? answers[index] === null ? "scene-title" : "feedback-title"
    : !summary.hidden ? "summary-title" : "intro-title";
  if (title === "feedback-title") focusView(byId(title));
  else byId(title).focus({ preventScroll: true });
}

function renderProgress() {
  if (!activity.hidden) {
    byId("progress-label").textContent = `الموقف ${ordinals[screen]} من ٤`;
  } else if (!summary.hidden) {
    byId("progress-label").textContent = "الخلاصة";
  }
  steps.replaceChildren(...scenes.map((_, index) => {
    const item = document.createElement("li");
    item.textContent = ordinals[index];
    if (answers[index] !== null) item.className = "completed";
    if (index === screen) item.setAttribute("aria-current", "step");
    const status = answers[index] !== null ? "، تم" : "";
    item.setAttribute("aria-label", `الموقف ${ordinals[index]}${status}`);
    return item;
  }));
  previous.disabled = screen < 0;
  next.disabled = screen === scenes.length || (screen >= 0 && answers[screen] === null);
  next.hidden = screen === scenes.length;
  byId("next-label").textContent = screen === scenes.length - 1 ? "عرض الخلاصة التطبيقية" : "الانتقال للموقف التالي";
}

function showPillar(index) {
  const { title, definition } = scenes[index].pillar;
  byId("definition-title").textContent = title + ":";
  byId("definition-text").textContent = definition;
  [...byId("pillar-options").children].forEach((button, i) => {
    button.setAttribute("aria-pressed", String(i === index));
  });
}

byId("pillar-options").replaceChildren(...scenes.map(({ pillar }, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = pillar.title;
  button.addEventListener("click", () => showPillar(index));
  return button;
}));
showPillar(0);

function renderScene() {
  const scene = scenes[screen];
  byId("setting").textContent = scene.contextTag;
  byId("signal").textContent = scene.signalTag;
  byId("scene-title").textContent = scene.pillar.title;
  byId("story").textContent = scene.story;
  byId("hint").open = false;
  byId("hint-text").textContent = scene.pillar.definition;
  byId("question").textContent = scene.question;
  choices.replaceChildren(...scene.options.map((option, index) => {
    const label = document.createElement("label");
    label.className = "choice";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "decision";
    input.className = "sr-only";
    input.checked = drafts[screen] === index;
    input.addEventListener("keydown", (event) => event.stopPropagation());
    input.addEventListener("change", () => {
      drafts[screen] = index;
      confirm.disabled = false;
      play("slide");
    });

    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = option.key;
    letter.setAttribute("aria-hidden", "true");

    const action = document.createElement("span");
    action.textContent = option.text;
    label.append(input, letter, action);
    return label;
  }));
  renderAnswer();
}

function renderAnswer() {
  const selectedIndex = answers[screen];
  choicesPanel.hidden = selectedIndex !== null;
  feedback.hidden = selectedIndex === null;
  confirm.disabled = drafts[screen] === null;
  if (selectedIndex === null) return;
  const scene = scenes[screen];
  const selected = scene.options[selectedIndex];
  const optimal = selectedIndex === scene.best;
  byId("impact").classList.toggle("consider", !optimal);
  byId("confirmed-letter").textContent = selected.key;
  byId("confirmed-text").textContent = selected.text;
  byId("feedback").classList.toggle("consider", !optimal);
  byId("feedback-heading").textContent = optimal
    ? "استجابة متّزنة ومطابقة للمكوّن"
    : "توجّه شائع، ولننظر إلى الزاوية الأعمق";
  byId("selected-impact").textContent = selected.feedback;
  byId("best-option").textContent = scene.options[scene.best].text;
  byId("best-rationale").textContent = scene.bestRationale;
  byId("alternative-note").textContent = scene.alternativesNote;
}

function showSummary() {
  byId("copy-toast").textContent = "";
  byId("takeaways").replaceChildren(...scenes.map(({ pillar, best }, index) => {
    const card = document.createElement("article");
    const header = document.createElement("header");
    const title = document.createElement("h2");
    title.textContent = pillar.title;
    const badge = document.createElement("span");
    const optimal = answers[index] === best;
    badge.className = optimal ? "badge" : "badge consider";
    badge.textContent = optimal ? "وافق الاستجابة الأنسب" : "تمت مقارنة البدائل";
    header.append(title, badge);
    const definition = document.createElement("p");
    definition.textContent = pillar.definition;
    const label = document.createElement("strong");
    label.textContent = "القاعدة التطبيقية:";
    const takeaway = document.createElement("p");
    takeaway.className = "takeaway";
    takeaway.textContent = pillar.takeaway;
    card.append(header, definition, label, takeaway);
    return card;
  }));
}

function goForward() {
  if (screen >= scenes.length || (screen >= 0 && answers[screen] === null)) return;
  const nextScreen = screen + 1;
  showScreen(nextScreen);
  play(nextScreen === scenes.length ? "finish" : "slide");
}

function goBack() {
  if (screen < 0) return;
  showScreen(screen - 1);
  play("slide");
}

byId("start").addEventListener("click", goForward);
previous.addEventListener("click", goBack);
next.addEventListener("click", goForward);
confirm.addEventListener("click", () => {
  if (drafts[screen] === null || answers[screen] !== null) return;
  answers[screen] = drafts[screen];
  renderAnswer();
  renderProgress();
  focusView(byId("feedback-title"));
  play("answer");
});
byId("change").addEventListener("click", () => {
  answers[screen] = null;
  renderAnswer();
  renderProgress();
  focusView(choices.querySelector("input:checked"));
});
byId("restart").addEventListener("click", () => {
  drafts.fill(null);
  answers.fill(null);
  showScreen(-1);
  play("slide");
});
byId("copy-summary").addEventListener("click", async () => {
  const text = [
    "ملخص التطبيق العملي لمكونات الذكاء العاطفي (جامعة طيبة):",
    ...scenes.map(({ pillar }, i) => `${i + 1}. ${pillar.title}: ${pillar.takeaway}`)
  ].join("\n");
  try {
    await navigator.clipboard.writeText(text);
    byId("copy-toast").textContent = "تم نسخ ملخص القواعد التطبيقية بنجاح.";
  } catch {
    byId("copy-toast").textContent = "تعذر النسخ التلقائي، يمكنكِ تحديد النص يدويًا.";
  }
});

const AudioEngine = window.AudioContext || window.webkitAudioContext;
const tones = {
  slide: [440],
  answer: [523.25, 659.25],
  finish: [523.25, 659.25, 783.99]
};
let audio;
let soundEnabled = false;
let soundVersion = 0;
const playing = new Set();

function setSound(enabled) {
  soundEnabled = enabled;
  sound.setAttribute("aria-pressed", String(enabled));
  sound.title = enabled ? "كتم الصوت" : "تشغيل الصوت";
}

async function play(cue) {
  if (!soundEnabled || !audio) return;
  const version = soundVersion;
  try {
    if (audio.state !== "running") await audio.resume();
    if (!soundEnabled || version !== soundVersion || audio.state !== "running") return;
    tones[cue].forEach((pitch, index) => {
      const time = audio.currentTime + index * 0.09;
      const oscillator = audio.createOscillator();
      const volume = audio.createGain();
      oscillator.type = "sine";
      oscillator.frequency.value = pitch;
      volume.gain.setValueAtTime(0, time);
      volume.gain.linearRampToValueAtTime(0.065, time + 0.014);
      volume.gain.exponentialRampToValueAtTime(0.001, time + 0.16);
      oscillator.connect(volume).connect(audio.destination);
      playing.add(oscillator);
      oscillator.addEventListener("ended", () => {
        playing.delete(oscillator);
        oscillator.disconnect();
        volume.disconnect();
      }, { once: true });
      oscillator.start(time);
      oscillator.stop(time + 0.17);
    });
  } catch {
    setSound(false);
    byId("notice").textContent = "تعذّر تشغيل الصوت في هذا المتصفح.";
  }
}

sound.addEventListener("click", () => {
  soundVersion += 1;
  if (soundEnabled) {
    setSound(false);
    playing.forEach((oscillator) => oscillator.stop());
    playing.clear();
    return;
  }
  try {
    audio ||= new AudioEngine();
    setSound(true);
    play("answer");
  } catch {
    setSound(false);
    byId("notice").textContent = "تعذّر تشغيل الصوت في هذا المتصفح.";
  }
});

const nativeFullscreen = () => document.fullscreenElement || document.webkitFullscreenElement;
let expanded = false;
let fullscreenPending = false;

function updateFullscreen() {
  const active = Boolean(nativeFullscreen()) || expanded;
  fullscreen.setAttribute("aria-pressed", String(active));
  const label = active ? "خروج من ملء الشاشة" : "ملء الشاشة";
  fullscreen.title = label;
  fullscreen.querySelector(".tool-label").textContent = label;
}

function setExpanded(value) {
  expanded = value;
  presentation.classList.toggle("expanded", value);
  document.body.classList.toggle("expanded-body", value);
  updateFullscreen();
}

fullscreen.addEventListener("click", async () => {
  if (fullscreenPending) return;
  fullscreenPending = true;
  try {
    if (nativeFullscreen()) {
      const exit = document.exitFullscreen || document.webkitExitFullscreen;
      await exit.call(document);
    } else if (expanded) {
      setExpanded(false);
    } else {
      const enter = presentation.requestFullscreen || presentation.webkitRequestFullscreen;
      if (enter) await enter.call(presentation);
      else setExpanded(true);
    }
  } catch {
    if (!nativeFullscreen()) setExpanded(true);
  } finally {
    fullscreenPending = false;
    updateFullscreen();
  }
});
document.addEventListener("fullscreenchange", updateFullscreen);
document.addEventListener("webkitfullscreenchange", updateFullscreen);
document.addEventListener("keydown", (event) => {
  if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
  if (event.key === "Escape" && expanded) {
    setExpanded(false);
    return;
  }
  if (event.repeat || screen < 0) return;
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    goForward();
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    goBack();
  }
});

byId("start").disabled = false;
sound.disabled = !AudioEngine;
fullscreen.disabled = false;

const themeToggle = byId("theme-toggle");
const themeStorage = "etizan-theme";

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const dark = theme === "dark";
  const label = dark ? "التبديل إلى المظهر الفاتح" : "التبديل إلى المظهر الداكن";
  themeToggle.setAttribute("aria-label", label);
  themeToggle.title = label;
  document.querySelector('meta[name="theme-color"]').content = dark ? "#0e1619" : "#faf8f5";
}

try {
  const savedTheme = localStorage.getItem(themeStorage);
  if (savedTheme === "light" || savedTheme === "dark") applyTheme(savedTheme);
} catch {
  // The toggle still works when browser storage is unavailable.
}

themeToggle.disabled = false;
themeToggle.addEventListener("click", () => {
  const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(theme);
  try {
    localStorage.setItem(themeStorage, theme);
  } catch {
    // The current theme remains active without persistence.
  }
});
