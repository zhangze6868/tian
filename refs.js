const refs = [
  { n: 1, group: "国内政策、课程与教学研究", text: "国务院办公厅. 关于深化高等学校创新创业教育改革的实施意见[Z]. 国办发〔2015〕36号, 2015.", links: [{ label: "打开原文", href: "https://www.gov.cn/zhengce/content/2015-05/13/content_9740.htm" }] },
  { n: 2, group: "国内政策、课程与教学研究", text: "教育部办公厅. 普通本科学校创业教育教学基本要求（试行）[Z]. 教高厅〔2012〕4号, 2012.", links: [{ label: "打开原文", href: "https://www.moe.gov.cn/srcsite/A08/s5672/201208/t20120801_140455.html" }] },
  { n: 3, group: "国内政策、课程与教学研究", text: "华东师范大学创新创业学院. 创新思维训练和创业进阶实训教学大纲[EB/OL]. (2020)[2026-09-20].", links: [{ label: "打开PDF", href: "https://sie.ecnu.edu.cn/_upload/article/files/3a/f2/ea4be9cd4ba787e5f9162f6c4279/e7222874-5b2d-48b7-b65b-4e0fab72a0d6.pdf" }] },
  { n: 4, group: "国内政策、课程与教学研究", text: "国家高等教育智慧教育平台. 创新思维与方法[EB/OL]. [2026-09-20].", links: [{ label: "打开课程", href: "https://higher.smartedu.cn/course/65de6786bb5c5a802544a2b8" }] },
  { n: 5, group: "国内政策、课程与教学研究", text: "中国大学MOOC. 创新思维与方法[EB/OL]. [2026-09-20].", links: [{ label: "打开课程", href: "https://www.icourse163.org/course/detail.htm?cid=1003535086" }] },
  { n: 6, group: "国内政策、课程与教学研究", text: "中国社会科学院大学. 创新思维与创业实践课程大纲[EB/OL]. [2026-09-20].", links: [{ label: "打开PDF", href: "https://jw.ucass.edu.cn/kcdg/tsjyk/29chuangxinsiweiyuchuangyeshijian.pdf" }] },
  { n: 7, group: "国内政策、课程与教学研究", text: "赵国库, 宁树实. 专创融合的教学案例设计与实践[J]. 创新教育研究, 2023, 11(7): 1727-1732.", links: [{ label: "打开DOI", href: "https://doi.org/10.12677/CES.2023.117257" }] },
  { n: 8, group: "创新思维基础理论", text: "GUILFORD J P. Creativity[J]. American Psychologist, 1950, 5(9): 444-454.", note: "发散思维、创造力结构、能力可训练性。", links: [{ label: "打开DOI", href: "https://doi.org/10.1037/h0063487" }] },
  { n: 9, group: "创新思维基础理论", text: "MEDNICK S A. The associative basis of the creative process[J]. Psychological Review, 1962, 69(3): 220-232.", note: "联想、远距离联想、概念重组。", links: [{ label: "打开DOI", href: "https://doi.org/10.1037/h0048850" }] },
  { n: 10, group: "创新思维基础理论", text: "AMABILE T M. Componential theory of creativity[R]. Boston: Harvard Business School, 2012.", note: "领域知识、创新过程、内在动机与社会环境。", links: [{ label: "打开PDF", href: "https://www.hbs.edu/ris/Publication%20Files/12-096.pdf" }] },
  { n: 11, group: "创新思维基础理论", text: "RUNCO M A, ACAR S. Divergent thinking as an indicator of creative potential[J]. Creativity Research Journal, 2012, 24(1): 66-75.", links: [{ label: "打开DOI", href: "https://doi.org/10.1080/10400419.2012.652929" }] },
  { n: 12, group: "创新思维基础理论", text: "DE BONO E. Lateral thinking: creativity step by step[M]. New York: Harper & Row, 1970.", note: "横向思维、视角转换、随机刺激、概念跳跃。", links: [{ label: "检索图书", href: "https://scholar.google.com/scholar?q=De+Bono+Lateral+Thinking+Creativity+Step+by+Step+1970" }] },
  { n: 13, group: "创新思维基础理论", text: "FACIONE P A. Critical thinking: a statement of expert consensus for purposes of educational assessment and instruction[R]. Millbrae: California Academic Press, 1990.", links: [{ label: "打开ERIC", href: "https://eric.ed.gov/?id=ED315423" }] },
  { n: 14, group: "创新思维基础理论", text: "SENGE P M. The fifth discipline: the art and practice of the learning organization[M]. New York: Doubleday, 1990.", links: [{ label: "检索图书", href: "https://scholar.google.com/scholar?q=Senge+The+Fifth+Discipline+1990" }] },
  { n: 15, group: "创新思维基础理论", text: "CSIKSZENTMIHALYI M. Creativity: flow and the psychology of discovery and invention[M]. New York: HarperCollins, 1996.", links: [{ label: "检索图书", href: "https://scholar.google.com/scholar?q=Csikszentmihalyi+Creativity+Flow+1996" }] },
  { n: 16, group: "创新思维基础理论", text: "OECD. PISA 2022 results, volume III: creative minds, creative schools[R]. Paris: OECD Publishing, 2024.", links: [{ label: "打开报告", href: "https://www.oecd.org/en/publications/pisa-2022-results-volume-iii_765ee8c2-en.html" }] },
  { n: 17, group: "创新方法、设计思维与TRIZ", text: "OSBORN A F. Applied imagination: principles and procedures of creative problem-solving[M]. New York: Charles Scribner’s Sons, 1953.", links: [{ label: "检索图书", href: "https://scholar.google.com/scholar?q=Osborn+Applied+Imagination+1953" }] },
  { n: 18, group: "创新方法、设计思维与TRIZ", text: "BROWN T. Design thinking[J]. Harvard Business Review, 2008, 86(6): 84-92.", links: [{ label: "打开HBR", href: "https://hbr.org/2008/06/design-thinking" }] },
  { n: 19, group: "创新方法、设计思维与TRIZ", text: "RAZZOUK R, SHUTE V. What is design thinking and why is it important?[J]. Review of Educational Research, 2012, 82(3): 330-348.", links: [{ label: "打开DOI", href: "https://doi.org/10.3102/0034654312457429" }] },
  { n: 20, group: "创新方法、设计思维与TRIZ", text: "STANFORD d.school. Design thinking bootleg[EB/OL]. (2018)[2026-09-20].", links: [{ label: "打开工具包", href: "https://dschool.stanford.edu/resources/design-thinking-bootleg" }, { label: "备用入口", href: "https://dschool.stanford.edu/tools/design-thinking-bootleg" }] },
  { n: 21, group: "创新方法、设计思维与TRIZ", text: "DESIGN COUNCIL. The double diamond[EB/OL]. [2026-09-20].", links: [{ label: "打开原文", href: "https://www.designcouncil.org.uk/our-resources/the-double-diamond/" }] },
  { n: 22, group: "创新方法、设计思维与TRIZ", text: "ALTSHULLER G. The innovation algorithm: TRIZ, systematic innovation and technical creativity[M]. Worcester: Technical Innovation Center, 1999.", links: [{ label: "检索图书", href: "https://scholar.google.com/scholar?q=Altshuller+The+Innovation+Algorithm+TRIZ+1999" }] },
  { n: 23, group: "创新方法、设计思维与TRIZ", text: "ILEVBARE I M, PROBERT D, PHAAL R. A review of TRIZ, and its benefits and challenges in practice[J]. Technovation, 2013, 33(2-3): 30-37.", links: [{ label: "打开DOI", href: "https://doi.org/10.1016/j.technovation.2012.09.003" }] },
  { n: 24, group: "创新方法、设计思维与TRIZ", text: "SCOTT G, LERITZ L E, MUMFORD M D. The effectiveness of creativity training: a quantitative review[J]. Creativity Research Journal, 2004, 16(4): 361-388.", links: [{ label: "打开DOI", href: "https://doi.org/10.1207/S15326934CRJ1604_3" }] },
  { n: 25, group: "原型验证、项目实施与人工智能", text: "RIES E. The lean startup[M]. New York: Crown Business, 2011.", links: [{ label: "检索图书", href: "https://scholar.google.com/scholar?q=Ries+The+Lean+Startup+2011" }] },
  { n: 26, group: "原型验证、项目实施与人工智能", text: "OSTERWALDER A, PIGNEUR Y. Business model generation[M]. Hoboken: John Wiley & Sons, 2010.", links: [{ label: "检索图书", href: "https://scholar.google.com/scholar?q=Osterwalder+Pigneur+Business+Model+Generation+2010" }] },
  { n: 27, group: "原型验证、项目实施与人工智能", text: "OSTERWALDER A, PIGNEUR Y, BERNARDA G, et al. Value proposition design[M]. Hoboken: John Wiley & Sons, 2014.", links: [{ label: "检索图书", href: "https://scholar.google.com/scholar?q=Value+Proposition+Design+Osterwalder+2014" }] },
  { n: 28, group: "原型验证、项目实施与人工智能", text: "UNESCO. Guidance for generative AI in education and research[R]. Paris: UNESCO, 2023.", links: [{ label: "打开报告", href: "https://unesdoc.unesco.org/ark:/48223/pf0000386693" }] },
  { n: 29, group: "补充文献（国内方法学与过程模型）", text: "WALLAS G. The art of thought[M]. London: Jonathan Cape, 1926.", note: "准备—酝酿—豁朗—验证。", links: [{ label: "检索图书", href: "https://scholar.google.com/scholar?q=Wallas+The+Art+of+Thought+1926" }] },
  { n: 30, group: "补充文献（国内方法学与过程模型）", text: "教育部高等学校创新方法教学指导分委员会. 大学生创新基础[M]. 北京: 高等教育出版社.", links: [{ label: "高教社书目", href: "https://xuanshu.hep.com.cn/front/book/findBookDetails?bookId=59cf5b2bba9eb884cf8226b4" }] },
  { n: 31, group: "补充文献（国内方法学与过程模型）", text: "冯林, 等. 创造性思维与创新方法[M]. 北京: 高等教育出版社.", links: [{ label: "高教社书目", href: "https://xuanshu.hep.com.cn/front/book/findBookDetails?bookId=59ceba3eba9eb884cf81e5cc" }] },
  { n: 32, group: "补充文献（国内方法学与过程模型）", text: "教育部高等学校创新方法教学指导分委员会. 创新工程知识体系与系列课程建设方案[M]. 北京: 高等教育出版社, 2023.", links: [{ label: "高教社书目", href: "https://xuanshu.hep.com.cn/front/book/findBookDetails?bookId=636a8b77938b7cc2960ef4f5" }] },
  { n: 33, group: "补充文献（国内方法学与过程模型）", text: "刘燕华, 李孟刚. 创新方法学[M]. 3版. 北京: 高等教育出版社, 2015.", links: [{ label: "检索图书", href: "https://scholar.google.com/scholar?q=%E5%88%98%E7%87%95%E5%8D%8E+%E6%9D%8E%E5%AD%9F%E5%88%9A+%E5%88%9B%E6%96%B0%E6%96%B9%E6%B3%95%E5%AD%A6" }] },
  { n: 34, group: "补充文献（国内方法学与过程模型）", text: "蔡文, 杨春燕, 等. 可拓学及可拓创新方法相关著作[M].", links: [{ label: "可拓学介绍", href: "https://extenics.gdut.edu.cn/" }] },
  { n: 35, group: "补充文献（国内方法学与过程模型）", text: "DE BONO E. Six thinking hats[M]. Boston: Little, Brown and Company, 1985.", links: [{ label: "检索图书", href: "https://scholar.google.com/scholar?q=De+Bono+Six+Thinking+Hats+1985" }] },
  { n: 36, group: "补充文献（国内方法学与过程模型）", text: "GORDON W J J. Synectics: the development of creative capacity[M]. New York: Harper & Row, 1961.", links: [{ label: "检索图书", href: "https://scholar.google.com/scholar?q=Gordon+Synectics+1961" }] },
  { n: 37, group: "补充文献（国内方法学与过程模型）", text: "PARNES S J. Creative behavior guidebook[M]. New York: Scribner, 1967.", links: [{ label: "检索图书", href: "https://scholar.google.com/scholar?q=Parnes+Creative+Behavior+Guidebook" }] }
];

function renderRefs() {
  const root = document.getElementById("ref-list");
  if (!root) return;
  let last = "";
  const frag = document.createDocumentFragment();
  refs.forEach((item) => {
    if (item.group !== last) {
      const h = document.createElement("h3");
      h.textContent = item.group;
      frag.appendChild(h);
      last = item.group;
    }
    const el = document.createElement("article");
    el.className = "ref";
    el.id = "r" + item.n;
    const links = (item.links || [])
      .map((l) => `<a class="btn" href="${l.href}" target="_blank" rel="noopener noreferrer">${l.label}</a>`)
      .join("");
    el.innerHTML = `<p><span class="num">[${item.n}]</span> ${item.text}</p>${item.note ? `<p class="note">${item.note}</p>` : ""}<p class="btns">${links}</p>`;
    frag.appendChild(el);
  });
  root.appendChild(frag);
}

renderRefs();
