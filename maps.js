const COLORS = ["#1e3a5f", "#3d5a40", "#8a4b2f", "#3a4f7a", "#5a3d5c", "#2f5d62", "#6b4f2d", "#4a5568", "#2c5282"];

let uid = 0;
function N(t, children, color) {
  return { id: "n" + ++uid, t, children: children || [], open: true, color: color || "" };
}
function leaves(arr, color) {
  return arr.map((t) => N(t, [], color));
}

const thinkTree = N("大学生创新思维知识体系", [
  N("一、基础理论", [
    N("创意、创造、创新与创业", leaves(["观念产生", "首次做出", "价值实现", "组织化事业"])),
    N("创新的基本特征", leaves(["新颖性", "适用性", "可行性", "价值性", "伦理性"])),
    N("创新形成条件", leaves(["领域知识", "思维能力", "内在动机", "个性特征", "团队环境", "外部资源"])),
    N("创新过程（Wallas）", leaves(["准备", "酝酿", "豁朗", "验证"])),
    N("创新思维障碍", leaves(["经验定势", "功能固着", "权威依赖", "从众心理", "过早评价", "风险回避", "AI依赖"]))
  ], COLORS[0]),
  N("二、问题认知", [
    N("问题敏感思维", leaves(["观察异常", "识别差距", "发现痛点", "隐性需求"])),
    N("问题重构思维", leaves(["改变对象", "改变边界", "改变目标", "改变约束", "改变评价标准"])),
    N("批判性思维", leaves(["事实与观点", "假设识别", "证据评价", "因果判断", "反例检验"]))
  ], COLORS[1]),
  N("三、创意生成", [
    N("发散思维", leaves(["流畅性", "变通性", "独创性", "精细性"])),
    N("联想思维", leaves(["相似联想", "对比联想", "因果联想", "强制联想"])),
    N("类比思维", leaves(["仿生类比", "结构类比", "功能类比", "跨行业类比"])),
    N("逆向思维", leaves(["功能反转", "顺序反转", "主客体反转", "缺点利用"])),
    N("横向思维", leaves(["假设突破", "视角转换", "随机刺激", "概念跳跃"]))
  ], COLORS[2]),
  N("四、结构组织", [
    N("系统思维", leaves(["系统边界", "构成要素", "要素关系", "输入输出", "反馈回路", "时间延迟"])),
    N("整合思维", leaves(["矛盾兼顾", "优势组合", "局部与整体", "短期与长期"])),
    N("跨学科思维", leaves(["知识迁移", "专业融合", "技术融合", "团队协同"]))
  ], COLORS[3]),
  N("五、判断与行动", [
    N("收敛思维", leaves(["价值判断", "可行性判断", "方案比较", "风险判断"])),
    N("实验思维", leaves(["提出假设", "设计实验", "获取数据", "修正方案"])),
    N("设计思维", leaves(["理解用户", "定义问题", "产生创意", "制作原型", "测试迭代"])),
    N("未来思维", leaves(["趋势识别", "情景分析", "风险预判", "未来倒推"]))
  ], COLORS[4]),
  N("六、训练与评价", [
    N("思维训练", leaves(["个人训练", "团队训练", "项目训练", "跨专业训练"])),
    N("过程评价", leaves(["问题质量", "创意数量", "创意类别", "方法迁移", "证据使用", "迭代次数"])),
    N("成果评价", leaves(["原创性", "实用性", "可行性", "社会价值", "伦理责任"])),
    N("反思提升", leaves(["失败复盘", "方法反思", "认知修正", "能力迁移"]))
  ], COLORS[5])
]);

const methodTree = N("大学生创新方法知识体系", [
  N("1 任务识别", [N("主要工具", leaves(["环境扫描", "文献调研", "专利检索", "趋势分析", "竞品分析", "利益相关者地图"])), N("输出", leaves(["创新任务说明书"]))], COLORS[0]),
  N("2 需求发现", [N("主要工具", leaves(["用户观察", "深度访谈", "问卷调查", "焦点小组", "用户画像", "同理心地图", "用户旅程图", "痛点分析"])), N("输出", leaves(["用户需求清单", "创新机会点"]))], COLORS[1]),
  N("3 问题定义", [N("主要工具", leaves(["5W2H", "5Why", "鱼骨图", "问题树", "因果链", "功能分析", "我们如何提问"])), N("输出", leaves(["标准化问题陈述"]))], COLORS[2]),
  N("4 创意生成", [N("主要工具", leaves(["头脑风暴", "书面头脑风暴", "六三五法", "思维导图", "随机词法", "强制联系法", "SCAMPER", "奥斯本检核表", "属性列举法", "六顶思考帽"])), N("输出", leaves(["原始创意库"]))], COLORS[3]),
  N("5 结构化求解", [N("主要工具", leaves(["形态分析", "TRIZ功能分析", "技术矛盾", "物理矛盾", "40项发明原理", "分离原理", "理想最终结果", "资源分析", "物场分析", "系统地图", "因果回路图", "情景规划"])), N("输出", leaves(["方案概念模型"]))], COLORS[4]),
  N("6 方案评价", [N("主要工具", leaves(["NUF评价", "价值—可行性矩阵", "Pugh决策矩阵", "加权评分", "成本效益分析", "风险矩阵", "用户价值评价", "伦理评价"])), N("输出", leaves(["优选方案", "风险清单"]))], COLORS[5]),
  N("7 原型设计", [N("主要工具", leaves(["手绘草图", "故事板", "纸面原型", "外观模型", "功能模型", "数字交互原型", "最小可行产品", "仿真模型"])), N("输出", leaves(["可测试原型"]))], COLORS[6]),
  N("8 测试迭代", [N("主要工具", leaves(["用户测试", "可用性测试", "对照实验", "A/B测试", "性能测试", "场景测试", "专家评审", "故障分析"])), N("输出", leaves(["测试数据", "迭代记录", "验证报告"]))], COLORS[7]),
  N("9 成果实施", [N("主要工具", leaves(["技术路线", "项目计划", "资源配置", "成本核算", "商业模式画布", "价值主张画布", "知识产权保护", "创新伦理审查", "项目路演", "成果转化"])), N("输出", leaves(["完整创新方案", "计划书", "专利或软著"]))], COLORS[8])
]);

const relTree = N("两套知识体系对照", [
  N("顶层支撑（Amabile）", leaves(["领域知识", "内在动机", "创新环境"], COLORS[0]), COLORS[0]),
  N("过程映射：思维 → 活动 → 方法", [
    N("发现问题", leaves(["思维：问题敏感", "方法：观察、访谈、用户旅程图"])),
    N("定义问题", leaves(["思维：问题重构与批判", "方法：5Why、鱼骨图、问题树"])),
    N("产生创意", leaves(["思维：发散、联想、类比、逆向、横向", "方法：头脑风暴、SCAMPER、六三五、检核表"])),
    N("构建方案", leaves(["思维：系统、整合与矛盾意识", "方法：形态分析、TRIZ、系统地图"])),
    N("筛选方案", leaves(["思维：收敛", "方法：Pugh、加权评分、风险矩阵"])),
    N("原型制作", leaves(["思维：设计思维取向", "方法：草图、模型、MVP、仿真"])),
    N("实验验证", leaves(["思维：实验", "方法：用户测试、A/B、对照实验"])),
    N("成果实施", leaves(["思维：未来与价值", "方法：商业模式、知识产权、路演"]))
  ], COLORS[3]),
  N("双向关系与反馈", [
    N("思维决定方法选择"),
    N("方法训练并外显思维"),
    N("测试迭代 → 问题定义"),
    N("方案评价 → 创意生成"),
    N("成果实施 → 需求发现"),
    N("实践数据修正判断")
  ], COLORS[5])
]);

function textWidth(t, fs) {
  const n = String(t).length;
  return Math.min(240, Math.max(72, Math.round(n * fs * 0.95 + 22)));
}

function visibleKids(node) {
  return node.open ? node.children || [] : [];
}

function measure(node, depth) {
  node.depth = depth;
  node.h = 30;
  node.w = textWidth(node.t, depth === 0 ? 14 : 12);
  const kids = visibleKids(node);
  if (!kids.length) {
    node.treeW = node.w;
    node.treeH = node.h;
    return;
  }
  kids.forEach((c) => measure(c, depth + 1));
  if (depth === 0) {
    const row = kids.reduce((s, c) => s + c.treeW, 0) + 18 * (kids.length - 1);
    node.treeW = Math.max(node.w, row);
    node.treeH = node.h + 44 + Math.max.apply(null, kids.map((c) => c.treeH));
  } else {
    node.treeW = Math.max(node.w, Math.max.apply(null, kids.map((c) => c.treeW)));
    node.treeH = node.h + 22 + kids.reduce((s, c) => s + c.treeH, 0) + 8 * (kids.length - 1);
  }
}

function place(node, x, y, depth) {
  node.x = x + (node.treeW - node.w) / 2;
  node.y = y;
  const kids = visibleKids(node);
  if (!kids.length) return;
  if (depth === 0) {
    const row = kids.reduce((s, c) => s + c.treeW, 0) + 18 * (kids.length - 1);
    let cx = x + (node.treeW - row) / 2;
    kids.forEach((c) => {
      place(c, cx, y + node.h + 44, depth + 1);
      cx += c.treeW + 18;
    });
  } else {
    let cy = y + node.h + 22;
    kids.forEach((c) => {
      place(c, x, cy, depth + 1);
      cy += c.treeH + 8;
    });
  }
}

function collect(node, boxes, links) {
  boxes.push(node);
  const kids = visibleKids(node);
  if (kids.length) {
    const px = node.x + node.w / 2;
    const py = node.y + node.h;
    if (node.depth === 0) {
      const ys = kids.map((c) => c.y);
      const bus = (py + Math.min.apply(null, ys)) / 2;
      links.push(`M${px},${py} V${bus}`);
      const xs = kids.map((c) => c.x + c.w / 2);
      links.push(`M${Math.min.apply(null, xs)},${bus} H${Math.max.apply(null, xs)}`);
      kids.forEach((c) => {
        const cx = c.x + c.w / 2;
        links.push(`M${cx},${bus} V${c.y}`);
      });
    } else {
      const spineX = node.x + 14;
      const last = kids[kids.length - 1];
      links.push(`M${px},${py} V${py + 10} H${spineX} V${last.y + last.h / 2}`);
      kids.forEach((c) => {
        const cy = c.y + c.h / 2;
        links.push(`M${spineX},${cy} H${c.x}`);
      });
    }
  }
  kids.forEach((c) => collect(c, boxes, links));
}

function colorOf(node, rootColor) {
  if (node.color) return node.color;
  if (node.depth === 0) return "#1e3a5f";
  if (node.depth === 1) return rootColor || "#3a4f7a";
  if (node.depth === 2) return "#4a5568";
  return "#fff";
}

function findById(node, id) {
  if (node.id === id) return node;
  for (const c of node.children || []) {
    const hit = findById(c, id);
    if (hit) return hit;
  }
  return null;
}

function collapseDeep(node, depth) {
  if (depth >= 2) node.open = false;
  (node.children || []).forEach((c) => collapseDeep(c, depth + 1));
}

collapseDeep(thinkTree, 0);
collapseDeep(methodTree, 0);
collapseDeep(relTree, 0);

function renderSvgTree(root, host, note) {
  measure(root, 0);
  place(root, 16, 12, 0);
  const boxes = [];
  const links = [];
  collect(root, boxes, links);
  let maxX = 0;
  let maxY = 0;
  boxes.forEach((n) => {
    maxX = Math.max(maxX, n.x + n.w + 24);
    maxY = Math.max(maxY, n.y + n.h + 24);
  });
  const paths = links
    .map((d) => `<path d="${d}" fill="none" stroke="#9aa7b5" stroke-width="1.6"/>`)
    .join("");
  const nodes = boxes
    .map((n) => {
      const has = (n.children || []).length > 0;
      const fill = n.depth >= 3 ? "#ffffff" : colorOf(n);
      const stroke = n.depth >= 3 ? colorOf(n.parent || n) : fill;
      const ink = n.depth >= 3 ? "#1c2430" : "#fff";
      const fs = n.depth === 0 ? 14 : 12;
      const mark = has ? (n.open ? "−" : "+") : "";
      const cursor = has ? "pointer" : "default";
      return `<g class="tnode" data-id="${n.id}" data-has="${has ? 1 : 0}" style="cursor:${cursor}">
        <rect x="${n.x}" y="${n.y}" width="${n.w}" height="${n.h}" rx="4" fill="${fill}" stroke="${n.depth >= 3 ? "#c5cdd6" : fill}"/>
        <text x="${n.x + n.w / 2}" y="${n.y + n.h / 2 + 4}" text-anchor="middle" fill="${ink}" font-size="${fs}" font-family="Microsoft YaHei, sans-serif">${escapeXml(n.t)}${mark ? " " + mark : ""}</text>
      </g>`;
    })
    .join("");
  host.innerHTML = `<div class="tree-scroll"><svg class="tree-svg" width="${maxX}" height="${maxY}" viewBox="0 0 ${maxX} ${maxY}" xmlns="http://www.w3.org/2000/svg">${paths}${nodes}</svg></div>${note ? `<p class="dash">${note}</p>` : ""}`;
}

function escapeXml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function attachToggle(host, root, note) {
  host.onclick = (e) => {
    const g = e.target.closest("g.tnode");
    if (!g || g.dataset.has !== "1") return;
    const node = findById(root, g.dataset.id);
    if (!node) return;
    node.open = !node.open;
    renderSvgTree(root, host, note);
    attachToggle(host, root, note);
  };
}

function draw(hostId, root, note) {
  const host = document.getElementById(hostId);
  renderSvgTree(root, host, note);
  attachToggle(host, root, note);
}

draw(
  "board-think",
  thinkTree,
  "树状层级：根节点在上，六大模块横向展开；再向下为思维类型与操作要点。点击带 ± 的节点展开或收起下级。"
);
draw(
  "board-method",
  methodTree,
  "树状层级：根节点在上，九段方法横向展开；再向下为工具与输出。点击带 ± 的节点展开或收起。反馈：测试迭代 → 问题定义；方案评价 → 创意生成；成果实施 → 需求发现。"
);
draw(
  "board-rel",
  relTree,
  "树状层级：对照根节点在上；一级为顶层支撑、过程映射、反馈。过程映射下每一活动再分出对应思维与方法。"
);

document.querySelectorAll(".map-tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".map-tab").forEach((b) => b.classList.remove("on"));
    document.querySelectorAll(".map-panel").forEach((p) => p.classList.remove("on"));
    btn.classList.add("on");
    document.getElementById("map-panel-" + btn.dataset.map).classList.add("on");
  });
});
