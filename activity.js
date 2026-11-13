"use strict";

const scenes = [
  {
    theme: "self-awareness",
    setting: "بروفة العرض",
    title: "ملاحظة بقيت في بالك",
    story: "بعد البروفة، أثنت زميلتك على الأمثلة وقالت إن فكرتك الرئيسة ظهرت متأخرة. العرض غدًا، وفكّرتِ فورًا في حذف الشريحة الأولى. لاحظتِ أنكِ تذكّرتِ الملاحظة ونسيتِ ما قالته عن الأمثلة.",
    cue: "«يمكن من البداية شرحي كله ما كان واضح.»",
    question: "ما الذي يساعدك على فهم رد فعلك أولًا؟",
    skill: "الوعي الذاتي",
    takeaway: "سمّي ما تشعرين به ولاحظي أثره في تفسيرك للموقف.",
    options: [
      {
        action: "أعيد مشاهدة المقدمة لأحدد أين تأخرت الفكرة الرئيسة.",
        label: "مراجعة المقدمة",
        effect: "تساعدك المراجعة في تحديد ما يحتاج إلى تعديل، وقد يبقى سبب رغبتك في حذف الشريحة كلها غامضًا.",
        compare: "تفحص ترتيب العرض، وتترك أثر الشعور في حكمك دون فحص."
      },
      {
        action: "أسمّي شعوري وأسأل نفسي كيف أثّر في حكمي على الشريحة.",
        label: "تسمية الشعور",
        effect: "قد تلاحظين أن الإحراج أو القلق جعلك تعمّمين ملاحظة عن ترتيب الفكرة على شرحك كله. يساعدك ذلك على تحديد ما يستحق المراجعة.",
        compare: "هذا أنسب أولًا لأن رغبتك في الحذف جاءت مع تعميم ملاحظة محددة على العرض."
      },
      {
        action: "أسأل زميلتي عن أول موضع تشتّت فيه انتباهها أثناء العرض.",
        label: "طلب مثال محدد",
        effect: "قد تحصلين على ملاحظة مفيدة، لكنك ستفهمين تجربتها هي قبل أن تتبيني كيف قرأتِ أنتِ تعليقها.",
        compare: "يوضح تجربة الزميلة ويصلح خطوة تالية لتحسين العرض."
      }
    ],
    best: 1
  },
  {
    theme: "social-awareness",
    setting: "قبل النقاش عبر الإنترنت",
    title: "حين قلّت مشاركتها",
    story: "قبل النقاش بدقائق، صارت زميلتك التي شاركت بحماس في البروفة تردّ بجمل قصيرة. حاولت بدء مداخلتها مرتين، وتوقفت حين دخلت أصوات أخرى. ثم قالت إن ترتيب المداخلات مناسب لها.",
    cue: "«إيه، عادي. كمّلوا.»",
    question: "كيف تتبينين ما تحتاجه في هذه اللحظة؟",
    skill: "الوعي الاجتماعي",
    takeaway: "انتبهي إلى الإشارات واسألي لتتحققي مما قد تعنيه.",
    options: [
      {
        action: "أسألها على الخاص إن كانت ترغب أن أترك لها مساحة لتكمل فكرتها.",
        label: "سؤال خاص ومحدد",
        effect: "محاولتا الكلام تستحقان الانتباه. السؤال الخاص يتيح لها أن توضّح إن كانت تريد فرصة للكلام أو تفضّل متابعة النقاش.",
        compare: "هذا أنسب لأن السؤال يستند إلى محاولتي الكلام ويترك لها حرية توضيح ما تحتاجه."
      },
      {
        action: "أعطيها الدور في أول النقاش حتى تتمكن من طرح فكرتها كاملة.",
        label: "تقديم دورها",
        effect: "قد يساعدها الدور المبكر إذا كانت المشكلة في المقاطعة. وقد يضعها تحت ضغط إذا كانت تفضّل وقتًا أطول أو تودّ الإبقاء على الترتيب.",
        compare: "يوفّر فرصة للكلام بناءً على افتراض أن تقديم دورها هو ما تريده."
      },
      {
        action: "ألتزم بالترتيب الذي وافقت عليه، وأتأكد أن لكل طالبة وقتها.",
        label: "الإبقاء على الترتيب",
        effect: "تحترمين موافقتها وتحفظين وقتها في النقاش. يبقى سبب تراجع مشاركتها أثناء الاستعداد للنقاش غير واضح.",
        compare: "يحترم الموافقة، وتبقى محاولتا الكلام المتوقفتان دون متابعة."
      }
    ],
    best: 0
  },
  {
    theme: "self-management",
    setting: "قبل التسليم بعشر دقائق",
    title: "ردّ على وشك الإرسال",
    story: "كتبت زميلة في المجموعة أن تأخّر الرفع بسبب الجزء الذي تعملين عليه. تتذكرين أنكِ أرسلتِ نسختك صباحًا، وسجل الرسائل أمامك. كتبتِ ردًا حادًا وشعرتِ برغبة في إرساله فورًا.",
    cue: "«إلى الآن ما وصلنا الجزء المطلوب.»",
    question: "كيف تتصرفين مع ضيق الوقت ورغبتك في الرد؟",
    skill: "إدارة الذات",
    takeaway: "امنحي نفسك وقفة قصيرة ثم اختاري ردًا يناسب الوقت والهدف.",
    options: [
      {
        action: "أرسل النسخة من جديد، وأترك توضيح ما حدث إلى ما بعد التسليم.",
        label: "إعادة الإرسال فقط",
        effect: "تساعدين الفريق على استلام النسخة سريعًا. ومن دون توضيح قد تُفهم إعادة الإرسال على أنها نسخة جديدة، فيبقى سبب التأخير ملتبسًا.",
        compare: "يوفّر الملف فورًا، ويؤجل توضيح أنه النسخة المرسلة صباحًا."
      },
      {
        action: "أوضح في المجموعة أنني أرسلت الملف صباحًا، وأطلب منهن مراجعته.",
        label: "التوضيح الفوري",
        effect: "تصححين المعلومة بسرعة، لكن الطلب يترك للفريق مهمة البحث عن الملف. ومع الغضب قد تخرج الرسالة بلهجة أشد مما تقصدين.",
        compare: "يوضح وقت الإرسال، ويترك العثور على الملف للفريق تحت ضغط الموعد."
      },
      {
        action: "أتمهّل لحظات، وأتحقق من الإرسال، ثم أعيد الملف مع توضيح مختصر.",
        label: "وقفة ثم توضيح",
        effect: "تعطيك الوقفة فرصة لضبط نبرة الرد. والتحقق ثم إعادة الملف مع توضيح قصير يحلان الالتباس ويدعمان التسليم في الوقت المتبقي.",
        compare: "هذا أنسب لأن الوقفة قصيرة ويمكنك خلالها الانتقال من رد حاد إلى إجراء يحل المشكلة."
      }
    ],
    best: 2
  },
  {
    theme: "relationship-management",
    setting: "بعد لقاء فريق المبادرة",
    title: "توزيع العمل من جديد",
    story: "في مبادرة طلابية، تكرر أن تُعِدّ زميلتان المواد نفسها فيما تبقى مهمة أخرى دون متابعة. إحداهما شعرت بأن جهدها ضاع، والأخرى تقول إن الرسائل لم تحدد صاحبة كل مهمة. أمامكن أسبوع قبل الفعالية.",
    cue: "«حسبت إن التصميم عليّ. ما أدري متى اتفقنا على غير كذا.»",
    question: "كيف تعالجين سبب التوتر مع الحفاظ على تعاون الفريق؟",
    skill: "إدارة العلاقات",
    takeaway: "اسمعي الأطراف المعنية واتفقي معها على خطوة واضحة يمكن متابعتها.",
    options: [
      {
        action: "أرسل جدولًا مقترحًا للمهام، وأطلب من كل واحدة تأكيد دورها في المجموعة.",
        label: "جدول وتأكيد مكتوب",
        effect: "الجدول يوضح المسؤوليات. وقد تؤكد الزميلتان أدوارهما من غير أن يتضح للفريق كيف تكرر الالتباس أو كيف أثر فيهما.",
        compare: "ينظم العمل المقبل، لكنه يترك أثر التداخل السابق دون نقاش."
      },
      {
        action: "أجمع المعنيّات لدقائق، ونراجع أين تداخل العمل ثم نتفق على المسؤوليات.",
        label: "مراجعة واتفاق مشترك",
        effect: "تسمعين كيف فهمت كل زميلة دورها وتعترفين بالجهد الذي تكرر، ثم تتفقن على توزيع يمكن للفريق الرجوع إليه. والأسبوع المتبقي يتيح هذا الحوار.",
        compare: "هذا أنسب لأن التداخل تكرر وأثر في التعاون، والوقت يسمح بسماع الأطراف والاتفاق."
      },
      {
        action: "أقابل كل زميلة على حدة، ثم أوزع المهام وفق ما فهمته من الحديثين.",
        label: "حديثان منفصلان",
        effect: "قد يكون الحديث الفردي مريحًا ويكشف تفاصيل مفيدة. توزيعك للمهام بعدها يترك الاتفاق معتمدًا على تفسيرك وحدك لما حدث.",
        compare: "يفتح مساحة للحديث، بينما تبقى المسؤوليات قرارًا تتخذينه وحدك."
      }
    ],
    best: 1
  }
];

const byId = (id) => document.getElementById(id);
const intro = byId("intro");
const activity = byId("activity");
const summary = byId("summary");
const choicesPanel = byId("choices-panel");
const feedback = byId("feedback");
const choices = byId("choices");
const steps = byId("steps");
const alternatives = byId("alternatives");
const ordinals = ["١", "٢", "٣", "٤"];
const letters = ["أ", "ب", "ج"];

let sceneIndex = 0;
let decisionMade = false;

function openSection(section, title) {
  for (const screen of [intro, activity, summary]) {
    screen.hidden = screen !== section;
  }
  window.scrollTo({ top: 0, behavior: "instant" });
  title.focus({ preventScroll: true });
}

function renderProgress() {
  byId("progress-label").textContent = `الموقف ${ordinals[sceneIndex]} من ٤`;
  steps.replaceChildren(...scenes.map((_, index) => {
    const item = document.createElement("li");
    item.textContent = ordinals[index];
    item.className = index < sceneIndex || (index === sceneIndex && decisionMade) ? "completed" : "";
    if (index === sceneIndex) item.setAttribute("aria-current", "step");
    const status = index < sceneIndex || (index === sceneIndex && decisionMade) ? "، تم" : "";
    item.setAttribute("aria-label", `الموقف ${ordinals[index]}${status}`);
    return item;
  }));
}

function renderScene() {
  const scene = scenes[sceneIndex];
  decisionMade = false;
  renderProgress();
  byId("workspace").dataset.theme = scene.theme;
  byId("setting").textContent = scene.setting;
  byId("scene-title").textContent = scene.title;
  byId("story").textContent = scene.story;
  byId("cue").textContent = scene.cue;
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

    const arrow = document.createElement("span");
    arrow.className = "choice-arrow";
    arrow.textContent = "←";
    arrow.setAttribute("aria-hidden", "true");

    button.append(letter, action, arrow);
    button.addEventListener("click", () => revealDecision(index));
    return button;
  }));
  choicesPanel.hidden = false;
  feedback.hidden = true;
  openSection(activity, byId("scene-title"));
}

function bestTag() {
  const tag = document.createElement("span");
  tag.className = "best";
  tag.textContent = "الأنسب هنا";
  return tag;
}

function revealDecision(selectedIndex) {
  if (decisionMade) return;
  decisionMade = true;
  const scene = scenes[sceneIndex];
  const selected = scene.options[selectedIndex];
  byId("feedback-skill").textContent = scene.skill;
  const selectedAction = byId("selected-action");
  selectedAction.textContent = `قرارك · ${selected.label}`;
  if (selectedIndex === scene.best) selectedAction.append(bestTag());
  byId("selected-impact").textContent = selected.effect;
  alternatives.replaceChildren(...scene.options.map((option, index) => {
    if (index === selectedIndex) return null;
    const row = document.createElement("li");
    const label = document.createElement("strong");
    label.textContent = option.label;

    if (index === scene.best) {
      label.append(bestTag());
    }

    const explanation = document.createElement("span");
    explanation.className = "comparison";
    explanation.textContent = option.compare;
    row.append(label, explanation);
    return row;
  }).filter(Boolean));
  byId("next-label").textContent = sceneIndex === scenes.length - 1 ? "إلى الخلاصة" : "الموقف التالي";
  renderProgress();
  feedback.hidden = false;
  choicesPanel.hidden = true;
  const title = byId("feedback-title");
  title.focus({ preventScroll: true });
  title.scrollIntoView({ block: "nearest", behavior: "instant" });
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
  openSection(summary, byId("summary-title"));
}

byId("start").addEventListener("click", () => {
  sceneIndex = 0;
  renderScene();
});
byId("next").addEventListener("click", () => {
  if (!decisionMade) return;
  sceneIndex += 1;
  if (sceneIndex === scenes.length) {
    decisionMade = false;
    showSummary();
    return;
  }
  renderScene();
});
byId("restart").addEventListener("click", () => {
  sceneIndex = 0;
  renderScene();
});
byId("start").disabled = false;
