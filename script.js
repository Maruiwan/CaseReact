const steps = [
  {
    tag: "接诊场景",
    title: "急诊电话打来：62岁男性，口服乙蒜素约10小时",
    time: "入院 00:00",
    monitor: { hr: "99", bp: "156/96", spo2: "96%", rr: "20" },
    risk: "中危，气道需盯紧",
    text:
      "患者清醒，急性痛苦面容。主诉咽喉部、胸骨后烧灼痛，气喘气促，恶心呕吐。当地卫生院曾催吐，随后呕出少许暗红色液体。现在你是首诊值班医生，第一步怎么做？",
    actual:
      "实际情况：急诊先予激素、PPI等处理后，患者自觉呼吸困难较前改善，咽喉部疼痛有所减轻，但仍因腐蚀性农药中毒风险被收住院继续观察。",
    choices: [
      {
        title: "抢救条件下先分层气道风险",
        detail: "记录平卧、发声、吞咽、喘鸣；同步吸氧、监护、静脉通路和抢救车准备。",
        score: 2,
        tone: "ok",
        feedback:
          "关键在分层。患者生命体征尚可，但咽喉痛、胸骨后烧灼痛和气喘提示上气道与消化道腐蚀伤可能进展，第一步应把气道窗口和抢救环境守住。",
        clue: "入口即按腐蚀性农药中毒处理，气道风险置顶。"
      },
      {
        title: "先用检查结果决定收治层级",
        detail: "患者清醒、血氧尚可，先查血常规、生化、凝血和胸腹影像，判断穿孔、出血或脏器损伤。",
        score: 0,
        tone: "warn",
        feedback:
          "检查当然需要，但这个方案把“检查结果”放在了气道风险之前。腐蚀性上气道水肿可能延迟加重，早期胸片和化验正常也不能说明安全。",
        clue: "早期生命体征尚可，但咽喉刺激症状明显。"
      },
      {
        title: "会诊后评估去污染窗口",
        detail: "核对剂型和误服量，请中毒/消化会诊，讨论洗胃、吸附剂、导泻或内镜适应证。",
        score: -1,
        tone: "warn",
        feedback:
          "会诊和毒物信息很有价值，但“去污染窗口”在腐蚀性摄入中要非常谨慎。若先把注意力放在洗胃、催吐或导泻，可能增加二次灼伤、误吸、出血和穿孔风险。",
        clue: "腐蚀性摄入后去污染措施要谨慎，不能压过气道评估。"
      }
    ]
  },
  {
    tag: "病史追问",
    title: "病人能说话，但声音发紧。家属手里有农药瓶",
    time: "入院 00:20",
    monitor: { hr: "104", bp: "150/92", spo2: "95%", rr: "22" },
    risk: "气道风险上升",
    text:
      "你需要在不耽误处理的前提下追问关键病史。哪些信息最影响下一步判断？",
    actual:
      "实际情况：家属可提供农药包装瓶；误服乙蒜素约8g，约6-8 ml，距离入院约10小时。既往有甲状腺术后病史，这会让后续气道处理更值得警惕。",
    choices: [
      {
        title: "追问气道受累和颈部手术史",
        detail: "声嘶、吞咽、流涎、呛咳、能否说完整句；同时确认剂量浓度、时间、混服和催吐史。",
        score: 2,
        tone: "ok",
        feedback:
          "这组问题最能改变处置优先级。声嘶、吞咽困难、流涎、喘鸣和呛咳提示气道受累；甲状腺术后会影响困难气道预案。",
        clue: "既往甲状腺术后；误服约6-8 ml，约10小时前。"
      },
      {
        title: "优先厘清毒物成分和剂量",
        detail: "让家属带瓶或拍照，咨询中毒信息中心，明确商品名、浓度、剂型、服后处理和系统毒性。",
        score: 1,
        tone: "warn",
        feedback:
          "这是有用信息，但还不够。只锁定毒物成分容易漏掉当下最危险的动态气道线索；应同时追问声嘶、吞咽、流涎、喘鸣和既往颈部手术。",
        clue: "可见乙蒜素包装瓶，但症状进展同样关键。"
      },
      {
        title: "优先评估自伤和混服背景",
        detail: "追问服毒动机、饮酒、合并药物、家属看护条件，判断是否需要精神心理会诊。",
        score: 0,
        tone: "warn",
        feedback:
          "这些信息会影响后续安全管理，但此刻不能替代急性中毒分层。若没有追问气道进展和腐蚀伤线索，可能低估数小时后的喉头水肿。",
        clue: "需补充服毒动机，但不能延误气道风险识别。"
      }
    ]
  },
  {
    tag: "检查决策",
    title: "化验提示白细胞升高、血红蛋白184 g/L，胸腹平片暂未见穿孔",
    time: "入院 00:55",
    monitor: { hr: "110", bp: "146/88", spo2: "94%", rr: "24" },
    risk: "需动态复评",
    text:
      "患者仍诉咽喉疼痛、胸骨后灼痛，偶有胸闷气促。急诊已用激素、PPI。你下一步如何安排检查和监测？",
    actual:
      "实际情况：血常规提示白细胞12.8 × 10^9/L、中性粒细胞比例91.7%、血红蛋白184 g/L；生化有低钙、尿素氮升高。胸腹平片暂未见肺实质病变、肠梗阻或消化道穿孔征象。",
    choices: [
      {
        title: "动态复评气道并早请ICU/耳鼻喉",
        detail: "复查血气、电解质、凝血；必要时床旁喉镜，内镜时机由气道安全和穿孔风险共同决定。",
        score: 2,
        tone: "ok",
        feedback:
          "这是更稳的分层。胸腹片未见穿孔只是一个截面，不能排除上气道水肿进展；同时血液浓缩、低钙、出血和酸碱变化也需要动态复查。",
        clue: "急诊检查未见穿孔；低钙、血液浓缩、疑似消化道出血。"
      },
      {
        title: "优先早期内镜评估腐蚀伤",
        detail: "胸骨后烧灼痛和暗红色呕吐物提示食管胃损伤，内镜分级可指导禁食和营养策略。",
        score: 1,
        tone: "warn",
        feedback:
          "内镜评估有价值，但这个方案容易把消化道分级放到气道安全之前。若喉头水肿正在进展，转运、镇静和检查刺激都可能放大风险。",
        clue: "消化道评估重要，但气道优先级更高。"
      },
      {
        title: "影像未见穿孔，普通病区严密观察",
        detail: "继续禁食、PPI、黏膜保护和补液，若胸痛、腹痛、发热或气促加重再升级。",
        score: 0,
        tone: "warn",
        feedback:
          "这个方案比完全放任安全，但仍偏被动。腐蚀性摄入后的突发风险不只穿孔，还包括上气道水肿；普通病区未必具备困难气道处理条件。",
        clue: "影像暂正常不等于病情稳定。"
      }
    ]
  },
  {
    tag: "治疗决策",
    title: "入院数小时后，患者突然气促明显，咽喉肿胀，吸气费力",
    time: "入院 03:40",
    monitor: { hr: "128", bp: "168/100", spo2: "89%", rr: "32" },
    risk: "高危，濒临窒息",
    text:
      "护士呼叫你到床旁。患者烦躁，讲话困难，吸气性呼吸困难加重。你需要马上决定处理策略。",
    actual:
      "实际情况：患者入院几个小时后出现呼吸困难、喉头水肿和窒息风险，气管插管困难，最终紧急气管插管后转入ICU。",
    choices: [
      {
        title: "启动困难气道流程并备气切",
        detail: "给氧、监护、抢救车到位；麻醉/ICU/耳鼻喉同场，避免反复盲插，尽快控制气道。",
        score: 2,
        tone: "ok",
        feedback:
          "这是关键判断。低氧、吸气费力、讲话困难和咽喉肿胀提示气道窗口正在关闭，必须把困难插管和紧急气切预案提前摆到床旁。",
        clue: "数小时后出现喉头水肿、窒息风险，最终气管插管转ICU。"
      },
      {
        title: "先强化抗水肿治疗并短时观察",
        detail: "追加激素、雾化、抬高床头和高流量吸氧，若SpO₂和呼吸功不改善再通知麻醉/ICU。",
        score: 0,
        tone: "warn",
        feedback:
          "药物可以同步使用，但不能作为主要策略。患者已经出现低氧和吸气性呼吸困难，等待药物起效可能错过最容易插管的时间窗。",
        clue: "激素不能保证阻止喉头水肿进展。"
      },
      {
        title: "先无创通气或镇静减轻呼吸做功",
        detail: "患者烦躁、呼吸急促，先降低耗氧和呼吸肌疲劳，再判断是否需要有创气道。",
        score: -1,
        tone: "danger",
        feedback:
          "这个选择风险很高。上气道机械性水肿不是单纯通气不足，无创通气可能延误气道控制；镇静还可能削弱自主保护和加重梗阻。",
        clue: "濒危上气道不适合先镇静或依赖无创通气。"
      }
    ]
  },
  {
    tag: "经验总结",
    title: "病例复盘：真正致命的，不只是“中毒”两个字",
    time: "转入 ICU",
    monitor: { hr: "116", bp: "142/84", spo2: "97%", rr: "18" },
    risk: "气道已控制",
    text:
      "患者最终经历插管困难后转入 ICU。现在回到复盘桌前，把这个病例沉淀成下一次值班能直接用的经验。",
    choices: [
      {
        title: "查看复盘总结",
        detail: "整理接诊、追问、检查、治疗和科室协作要点。",
        score: 0,
        tone: "ok",
        feedback: "",
        clue: "完成推演。"
      }
    ]
  }
];

const summary = [
  "<strong>入口诊断：</strong>乙蒜素误服按腐蚀性农药中毒处理，重点不只是毒物吸收，还有咽喉、食管、胃黏膜损伤。",
  "<strong>第一优先级：</strong>出现咽痛、声嘶、喘鸣、流涎、吞咽困难、吸气费力时，把喉头水肿和困难气道放到最高级别。",
  "<strong>禁忌提醒：</strong>腐蚀性摄入后避免催吐、盲目洗胃和反复刺激，防止二次灼伤、误吸、出血或穿孔。",
  "<strong>检查策略：</strong>胸腹平片正常不能排除气道水肿；动态复查血气、电解质、凝血、血常规，内镜时机应服从气道安全。",
  "<strong>治疗协作：</strong>制酸、黏膜保护、抗炎消肿、补液促排只是底盘；一旦气道进展，尽早叫麻醉、ICU、耳鼻喉，准备困难插管和气切预案。",
  "<strong>系统教训：</strong>所有中毒统一收消化科会稀释风险识别。腐蚀性中毒患者应按“毒物 + 气道 + 消化道损伤”分层，必要时直接 ICU 或抢救区管理。"
];

let currentStep = 0;
let selected = [];

const patientToggle = document.querySelector("#patientToggle");
const patientBoard = document.querySelector("#patientBoard");
const patientSummaryEl = document.querySelector("#patientSummary");
const patientToggleHintEl = document.querySelector("#patientToggleHint");
const hrEl = document.querySelector("#hrValue");
const bpEl = document.querySelector("#bpValue");
const spo2El = document.querySelector("#spo2Value");
const rrEl = document.querySelector("#rrValue");
const cluesEl = document.querySelector("#clues");
const stepTagEl = document.querySelector("#stepTag");
const decisionHintEl = document.querySelector("#decisionHint");
const sceneTitleEl = document.querySelector("#sceneTitle");
const sceneTextEl = document.querySelector("#sceneText");
const feedbackEl = document.querySelector("#feedback");
const choicesEl = document.querySelector("#choices");
const backBtn = document.querySelector("#backBtn");
const restartBtn = document.querySelector("#restartBtn");

function renderMonitor(step) {
  patientSummaryEl.textContent =
    currentStep === 0
      ? "男，62岁；口服乙蒜素约6-8 ml，约10小时前"
      : `${step.tag}｜${step.time}｜${step.risk}`;
  hrEl.textContent = step.monitor.hr;
  bpEl.textContent = step.monitor.bp;
  spo2El.textContent = step.monitor.spo2;
  rrEl.textContent = step.monitor.rr;
}

function renderClues() {
  const baseClues = [
    "男，62岁；口服乙蒜素约8g，约6-8 ml。",
    "咽喉部、胸骨后烧灼疼痛，伴气喘气促、恶心呕吐。",
    "催吐后呕少许暗红色液体，提示腐蚀伤和出血风险。"
  ];
  const learned = selected
    .map((item) => item.clue)
    .filter(Boolean)
    .filter((item, index, arr) => arr.indexOf(item) === index);
  cluesEl.innerHTML = [...baseClues, ...learned]
    .map((clue) => `<li>${clue}</li>`)
    .join("");
}

function renderFeedback(choice) {
  if (!choice || !choice.feedback) {
    feedbackEl.hidden = true;
    feedbackEl.innerHTML = "";
    feedbackEl.className = "feedback";
    return;
  }
  const step = steps[currentStep];
  feedbackEl.hidden = false;
  feedbackEl.className = `feedback ${choice.tone || ""}`.trim();
  feedbackEl.innerHTML = `
    <div class="feedback-block">
      <strong>选择提示</strong>
      <p>${choice.feedback}</p>
    </div>
    ${
      step.actual
        ? `<div class="feedback-block actual-block">
            <strong>病例实际情况</strong>
            <p>${step.actual}</p>
          </div>`
        : ""
    }
  `;
}

function renderChoices(step) {
  const picked = selected[currentStep];
  if (currentStep === steps.length - 1) {
    choicesEl.innerHTML = `<ul class="summary-list">${summary
      .map((item) => `<li>${item}</li>`)
      .join("")}</ul>`;
    decisionHintEl.textContent = "复盘完成";
    return;
  }

  if (picked) {
    choicesEl.innerHTML = `
      <button id="continueBtn" class="continue-btn" type="button">确认，进入下一步</button>
    `;
    document.querySelector("#continueBtn").addEventListener("click", () => {
      currentStep += 1;
      render();
    });
    return;
  }

  choicesEl.innerHTML = step.choices
    .map(
      (choice, index) => `
        <button class="choice-btn" type="button" data-choice="${index}">
          <span class="choice-key">${String.fromCharCode(65 + index)}</span>
          <span class="choice-copy">
            <strong>${choice.title}</strong>
            <span>${choice.detail}</span>
          </span>
        </button>
      `
    )
    .join("");

  choicesEl.querySelectorAll(".choice-btn").forEach((button) => {
    button.addEventListener("click", () => {
      choose(Number(button.dataset.choice));
    });
  });
}

function render() {
  const step = steps[currentStep];
  const picked = selected[currentStep];
  renderMonitor(step);
  renderClues();
  stepTagEl.textContent = step.tag;
  sceneTitleEl.textContent = step.title;
  sceneTextEl.textContent = step.text;
  decisionHintEl.textContent =
    currentStep === steps.length - 1
      ? "复盘完成"
      : picked
        ? "已记录选择"
        : "请选择下一步处理";
  renderFeedback(picked);
  renderChoices(step);
  backBtn.disabled = currentStep === 0;
}

function choose(choiceIndex) {
  const choice = steps[currentStep].choices[choiceIndex];
  selected[currentStep] = choice;
  selected = selected.slice(0, currentStep + 1);
  render();
}

backBtn.addEventListener("click", () => {
  if (currentStep === 0) return;
  currentStep -= 1;
  selected = selected.slice(0, currentStep);
  render();
});

restartBtn.addEventListener("click", () => {
  currentStep = 0;
  selected = [];
  render();
});

patientToggle.addEventListener("click", () => {
  const willExpand = patientBoard.hidden;
  patientBoard.hidden = !willExpand;
  patientToggle.setAttribute("aria-expanded", String(willExpand));
  patientToggleHintEl.textContent = willExpand
    ? "点击收起病例信息"
    : "点击展开生命体征和病例线索";
});

render();
