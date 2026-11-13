"use strict";

const scenes = [
  {
    theme: "self-awareness",
    setting: "الاستعداد لعرض بحثي",
    title: "قبل حذف الشريحة",
    story: "عرض بحثكِ غدًا أمام أستاذة المقرر والطالبات. خلال مراجعة الشرائح مساءً، بدأتِ تنتقدين كل جملة وتفكرين في حذف جزء أعددتِه بعناية.",
    cue: "«أحسّ إن هالجزء مو كافي.»",
    question: "ما الخطوة الأولى لفهم سبب رغبتكِ في الحذف؟",
    skill: "الوعي الذاتي",
    takeaway: "سمّي الشعور ولاحظي كيف يؤثر في تقييمكِ لعملكِ.",
    options: [
      {
        action: "آخذ استراحة قصيرة وأعود لقراءة الجزء بعد أن يخف التوتر.",
        label: "الاستراحة ثم المراجعة",
        effect: "قد تخفّ حدة التوتر بعد الاستراحة، لكن سبب حكمكِ على الجزء قد يبقى غير واضح.",
        compare: "تخفف التوتر وتؤجل فحص أثره في الحكم على الجزء."
      },
      {
        action: "أسمّي قلقي من التقييم وأسأل نفسي كيف غيّر حكمي على الجزء.",
        label: "فهم أثر القلق",
        effect: "تنتبهين إلى أن القلق قد يجعل نقدكِ أشد من المعتاد، فتراجعين الجزء وفق ما يدعمه في البحث.",
        compare: "يكشف صلة القلق بالنقد المفاجئ ويهيئ لمراجعة الجزء بهدوء."
      },
      {
        action: "أرسل الجزء لزميلة وأطلب منها تحديد ما يحتاج إلى مراجعة.",
        label: "طلب رأي زميلة",
        effect: "قد تكشف ملاحظتها خللًا محددًا. يبقى سؤال مختلف: ما الذي جعلكِ تفكرين في حذف الجزء كله؟",
        compare: "يفيد في تحرير الشرائح، ويعطيكِ رأيًا خارجيًا قبل فحص حكمكِ."
      }
    ],
    best: 1
  },
  {
    theme: "social-awareness",
    setting: "اجتماع فريق عن بُعد",
    title: "حين تغيّرت نبرتها",
    story: "أثناء مناقشة خطة البحث، اكتفت زميلتكِ، التي عادةً تشارك بحماس، بردود قصيرة. بدت نبرتها متعبة، ولم تذكر أن لديها مشكلة. ما زال الفريق يوزع المهام.",
    cue: "«اللي تشوفونه مناسب.»",
    question: "كيف تراعين تغيّر مشاركتها قبل تثبيت المهام؟",
    skill: "الوعي الاجتماعي",
    takeaway: "التقطي الإشارات واسألي بلطف للتحقق مما قد تعنيه.",
    options: [
      {
        action: "أستكمل النقاش وأسألها على الخاص إن كانت تفضّل وقتًا قبل تأكيد دورها.",
        label: "سؤال على الخاص",
        effect: "تعطينها فرصة لتوضح ما تحتاجه وتحفظين خصوصيتها. تغيّر النبرة يدعو للسؤال، وقد تكون له أسباب مختلفة.",
        compare: "يراعي الإشارة ويمنحها فرصة لتحديد حاجتها بنفسها."
      },
      {
        action: "أخفف عنها المهمة في هذه الجولة وأوضح للفريق أن التوزيع قابل للمراجعة.",
        label: "تخفيف المهمة",
        effect: "قد يفيدها تخفيف المهمة لو كانت مرهقة، وقد يحرمها من دور تريده إذا كان سبب قلة مشاركتها مختلفًا.",
        compare: "يخفف العبء بناءً على قراءة قد لا تعكس ما تريده."
      },
      {
        action: "أبقي التوزيع كما هو، وأمنح الجميع وقتًا للتعليق قبل تثبيته.",
        label: "فتح المجال للجميع",
        effect: "تضمنين فرصة متساوية للتعليق، لكن الزميلة قد تفضّل توضيح احتياجها بعيدًا عن المجموعة.",
        compare: "يفتح باب التعليق وتبقى الخصوصية عاملًا في قدرتها على الكلام."
      }
    ],
    best: 0
  },
  {
    theme: "self-management",
    setting: "قبل التسليم بساعتين",
    title: "جزء لم يكتمل",
    story: "اعتذرت زميلتكِ عن إكمال جزئها من التكليف الجماعي لظرف طارئ. بقيت ساعتان، والجزء الناقص له نقاط أساسية يمكن تغطيتها في الوقت المتاح. شعرتِ بالضيق وبدأتِ تكتبين رسالة عتاب.",
    question: "كيف تتعاملين مع اندفاعكِ وتستفيدين من الوقت؟",
    skill: "إدارة الذات",
    takeaway: "خذي وقفة قصيرة ثم عدّلي خطتكِ وفق ما يمكن إنجازه.",
    options: [
      {
        action: "أبدأ بتغطية الجزء وحدي فورًا، وأطلب من الفريق مراجعة ما أكتبه لاحقًا.",
        label: "العمل الفردي فورًا",
        effect: "تبدئين العمل بسرعة، لكن تحمل المهمة وحدكِ قد يزيد الضغط وتضيق معه فرصة توزيع الجهد.",
        compare: "يبدأ الإنجاز سريعًا وقد يحمّلكِ عملًا يستطيع الفريق تقاسمه."
      },
      {
        action: "أراسل الأستاذة لطلب تمديد، وأطلب من الفريق مراجعة الأجزاء الجاهزة.",
        label: "طلب تمديد",
        effect: "قد يخف الضغط إذا وافقت الأستاذة، لكن مراجعة المكتمل تترك الجزء الناقص معلقًا حتى يصل الرد.",
        compare: "يعتمد على رد خارجي، مع أن النقاط الأساسية قابلة للإنجاز في الوقت المتاح."
      },
      {
        action: "أتمهّل قبل إرسال الرد، ثم أتفق مع الفريق على تغطية النقاط الأساسية.",
        label: "وقفة وترتيب للأولويات",
        effect: "تتيح لكِ الوقفة ضبط نبرة الرد. ويساعد تقسيم النقاط الأساسية على تكييف الخطة مع الساعتين المتبقيتين.",
        compare: "يجمع بين ضبط الاندفاع وتغيير الخطة بما يناسب الوقت المتاح."
      }
    ],
    best: 2
  },
  {
    theme: "relationship-management",
    setting: "عمل متكرر مع صديقة",
    title: "موعد يتأخر كل مرة",
    story: "تأخرت صديقتكِ في إرسال أجزائها في أكثر من مقرر، فبقي تنسيق العمل عليكِ في آخر لحظة. أمامكما أسبوع قبل التكليف التالي، وترغبين في معالجة تكرار التأخير.",
    question: "كيف تحمين سير العمل وعلاقتكما في الوقت نفسه؟",
    skill: "إدارة العلاقات",
    takeaway: "وضّحي أثر المشكلة واتّفقي مع الطرف الآخر على خطوة قابلة للمتابعة.",
    options: [
      {
        action: "أضع موعدًا داخليًا مبكرًا للجميع وأرسل تذكيرًا قبل الموعد بيوم.",
        label: "موعد موحّد وتذكير",
        effect: "تضيفين وقتًا احتياطيًا للتنسيق، وقد يستمر التأخير إذا كان سببه عائقًا لا يحله التذكير.",
        compare: "يفيد في التنظيم، لكن سبب تكرار التأخير قد يظل قائمًا."
      },
      {
        action: "أوضح لها أثر التأخير وأسمع ما يعطّلها، ثم نتفق على موعد مبكر.",
        label: "حوار واتفاق مشترك",
        effect: "يفهم كل طرف أثر التأخير وما يعطّل العمل. ويساعد الاتفاق المشترك على اختيار موعد تستطيعان الالتزام به.",
        compare: "يعالج تكرار التأخير بالحديث عن أثره وسبب حدوثه والاتفاق على حل."
      },
      {
        action: "أعيد توزيع المهام بحيث أستطيع تنسيق الملف قبل أن ترسل جزءها.",
        label: "تعديل توزيع العمل",
        effect: "قد يقلّ اعتماد التنسيق على توقيت إرسالها، لكن ذلك قد ينقل العبء إلى طرف آخر ويؤجل النقاش بينكما.",
        compare: "يخفف أثر التأخير على التنسيق ويترك نمط العمل بينكما بلا اتفاق."
      }
    ],
    best: 1
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
const alternatives = byId("alternatives");
const previous = byId("previous");
const next = byId("next");
const sound = byId("sound");
const fullscreen = byId("fullscreen");
const ordinals = ["١", "٢", "٣", "٤"];
const letters = ["أ", "ب", "ج"];
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
  byId("next-label").textContent = screen === scenes.length - 1 ? "الخلاصة" : "التالي";
}

function renderScene() {
  const scene = scenes[screen];
  activity.dataset.theme = scene.theme;
  byId("setting").textContent = scene.setting;
  byId("scene-title").textContent = scene.title;
  byId("story").textContent = scene.story;
  const cue = byId("cue");
  cue.textContent = scene.cue || "";
  cue.hidden = !scene.cue;
  byId("question").textContent = scene.question;
  choices.replaceChildren(...scene.options.map((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = letters[index];
    letter.setAttribute("aria-hidden", "true");
    const action = document.createElement("span");
    action.textContent = option.action;
    button.append(letter, action);
    button.addEventListener("click", () => {
      if (answers[screen] !== null) return;
      answers[screen] = index;
      renderAnswer();
      renderProgress();
      focusView(byId("feedback-title"));
      play("answer");
    });
    return button;
  }));
  renderAnswer();
}

function bestTag() {
  const tag = document.createElement("span");
  tag.className = "best";
  tag.textContent = "الأنسب هنا";
  return tag;
}

function renderAnswer() {
  const selectedIndex = answers[screen];
  choicesPanel.hidden = selectedIndex !== null;
  feedback.hidden = selectedIndex === null;
  if (selectedIndex === null) return;
  const scene = scenes[screen];
  const selected = scene.options[selectedIndex];
  byId("feedback-skill").textContent = scene.skill;
  const selectedAction = byId("selected-action");
  selectedAction.textContent = `قرارك · ${selected.label}`;
  if (selectedIndex === scene.best) selectedAction.append(bestTag());
  byId("selected-impact").textContent = selected.effect;
  alternatives.replaceChildren(...scene.options.flatMap((option, index) => {
    if (index === selectedIndex) return [];
    const row = document.createElement("li");
    const label = document.createElement("strong");
    label.textContent = option.label;
    if (index === scene.best) label.append(bestTag());
    const explanation = document.createElement("span");
    explanation.className = "comparison";
    explanation.textContent = option.compare;
    row.append(label, explanation);
    return [row];
  }));
}

function showSummary() {
  byId("takeaways").replaceChildren(...scenes.map((scene) => {
    const card = document.createElement("article");
    card.dataset.theme = scene.theme;
    const title = document.createElement("h2");
    title.textContent = scene.skill;
    const takeaway = document.createElement("p");
    takeaway.textContent = scene.takeaway;
    card.append(title, takeaway);
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
byId("change").addEventListener("click", () => {
  const selectedIndex = answers[screen];
  answers[screen] = null;
  renderAnswer();
  renderProgress();
  focusView(choices.children[selectedIndex]);
});
byId("restart").addEventListener("click", () => {
  answers.fill(null);
  showScreen(0);
  play("slide");
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
