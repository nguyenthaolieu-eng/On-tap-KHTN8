const topics = {
  physics: {title:"Vật lí", color:"#df3549", topics:[
    {name:"Khối lượng riêng và áp suất",desc:"Khái niệm khối lượng riêng, áp suất và ứng dụng.",ids:["p1","p2"]},
    {name:"Tác dụng làm quay của lực",desc:"Mômen lực và tác dụng làm quay.",ids:["p3"]},
    {name:"Điện và mạch điện",desc:"Một số kiến thức cơ bản về điện.",ids:["p4"]},
    {name:"Nhiệt",desc:"Truyền năng lượng nhiệt và sự nở vì nhiệt.",ids:["p5"]}
  ]},
  chemistry:{title:"Hóa học", color:"#168b58", topics:[
    {name:"Phản ứng hóa học",desc:"Dấu hiệu, diễn biến và phương trình hóa học.",ids:["c1","c2"]},
    {name:"Mol và tính toán hóa học",desc:"Khái niệm mol và khối lượng mol.",ids:["c3"]},
    {name:"Dung dịch và nồng độ",desc:"Nồng độ phần trăm và nồng độ mol.",ids:["c4"]},
    {name:"Acid – Base – Oxide – Muối",desc:"Nhận biết và tính chất cơ bản.",ids:["c5"]}
  ]},
  biology: {title:"Sinh học", color:"#e8ad00", topics:[
    {name:"Hệ vận động ở người",desc:"Xương, khớp, cơ và bảo vệ hệ vận động.",ids:["b1"]},
    {name:"Dinh dưỡng và tiêu hóa",desc:"Chất dinh dưỡng và hoạt động tiêu hóa.",ids:["b2"]},
    {name:"Máu và hệ tuần hoàn",desc:"Thành phần máu và vai trò tuần hoàn.",ids:["b3"]},
    {name:"Hệ hô hấp và bài tiết",desc:"Trao đổi khí và loại bỏ chất thải.",ids:["b4"]}
  ]}
};

const questions = [
 {id:"p1",subject:"Vật lí",topic:"Khối lượng riêng và áp suất",q:"Công thức tính khối lượng riêng là công thức nào?",a:["D = m/V","D = V/m","D = m × V","D = F/S"],correct:0,explain:"Khối lượng riêng bằng khối lượng chia cho thể tích: D = m/V."},
 {id:"p2",subject:"Vật lí",topic:"Khối lượng riêng và áp suất",q:"Áp suất được tính bằng công thức nào?",a:["p = F × S","p = F/S","p = S/F","p = m/V"],correct:1,explain:"Áp suất bằng áp lực vuông góc tác dụng lên mặt bị ép chia cho diện tích mặt bị ép: p = F/S."},
 {id:"p3",subject:"Vật lí",topic:"Tác dụng làm quay của lực",q:"Đại lượng đặc trưng cho tác dụng làm quay của lực quanh một trục là gì?",a:["Khối lượng riêng","Công suất","Mômen lực","Nhiệt độ"],correct:2,explain:"Mômen lực đặc trưng cho tác dụng làm quay của lực quanh một trục."},
 {id:"p4",subject:"Vật lí",topic:"Điện và mạch điện",q:"Trong sơ đồ mạch điện, ampe kế dùng để đo đại lượng nào?",a:["Hiệu điện thế","Cường độ dòng điện","Điện trở","Công suất"],correct:1,explain:"Ampe kế dùng để đo cường độ dòng điện và được mắc nối tiếp trong mạch."},
 {id:"p5",subject:"Vật lí",topic:"Nhiệt",q:"Nhiệt truyền từ vật nào sang vật nào khi hai vật tiếp xúc?",a:["Từ vật lạnh sang vật nóng","Từ vật có khối lượng nhỏ sang lớn","Từ vật nóng hơn sang vật lạnh hơn","Luôn từ vật lớn sang vật nhỏ"],correct:2,explain:"Nhiệt tự truyền từ vật có nhiệt độ cao hơn sang vật có nhiệt độ thấp hơn."},
 {id:"c1",subject:"Hóa học",topic:"Phản ứng hóa học",q:"Hiện tượng nào sau đây có thể là dấu hiệu xảy ra phản ứng hóa học?",a:["Nước đá tan","Đường được nghiền nhỏ","Xuất hiện chất khí mới","Nước bay hơi"],correct:2,explain:"Sự xuất hiện chất khí, kết tủa, đổi màu hoặc tỏa/thu nhiệt có thể là dấu hiệu phản ứng hóa học."},
 {id:"c2",subject:"Hóa học",topic:"Phản ứng hóa học",q:"Trong phản ứng hóa học, tổng khối lượng các chất được bảo toàn theo định luật nào?",a:["Định luật bảo toàn năng lượng","Định luật bảo toàn khối lượng","Định luật Ohm","Định luật Archimedes"],correct:1,explain:"Theo định luật bảo toàn khối lượng, tổng khối lượng chất tham gia bằng tổng khối lượng sản phẩm."},
 {id:"c3",subject:"Hóa học",topic:"Mol và tính toán hóa học",q:"Một mol chất chứa khoảng bao nhiêu hạt (nguyên tử, phân tử hoặc ion)?",a:["6,02 × 10²³","3,00 × 10⁸","9,81 × 10²","1,60 × 10⁻¹⁹"],correct:0,explain:"Một mol chứa số Avogadro, xấp xỉ 6,02 × 10²³ hạt."},
 {id:"c4",subject:"Hóa học",topic:"Dung dịch và nồng độ",q:"Công thức tính nồng độ phần trăm của dung dịch là gì?",a:["C% = m dung môi/m dung dịch × 100%","C% = m chất tan/m dung dịch × 100%","C% = V/n","C% = m/V"],correct:1,explain:"Nồng độ phần trăm bằng khối lượng chất tan chia khối lượng dung dịch rồi nhân 100%."},
 {id:"c5",subject:"Hóa học",topic:"Acid – Base – Oxide – Muối",q:"Dung dịch acid làm giấy quỳ tím chuyển sang màu gì?",a:["Xanh","Đỏ","Không màu","Vàng"],correct:1,explain:"Dung dịch acid làm quỳ tím chuyển đỏ."},
 {id:"b1",subject:"Sinh học",topic:"Hệ vận động ở người",q:"Bộ phận nào nối cơ với xương?",a:["Dây chằng","Gân","Sụn khớp","Tủy xương"],correct:1,explain:"Gân nối cơ với xương; dây chằng nối các xương với nhau tại khớp."},
 {id:"b2",subject:"Sinh học",topic:"Dinh dưỡng và tiêu hóa",q:"Chất dinh dưỡng nào là nguồn cung cấp năng lượng chủ yếu cho cơ thể?",a:["Carbohydrate","Vitamin","Nước","Muối khoáng"],correct:0,explain:"Carbohydrate là nguồn cung cấp năng lượng quan trọng, chủ yếu trong khẩu phần ăn."},
 {id:"b3",subject:"Sinh học",topic:"Máu và hệ tuần hoàn",q:"Thành phần máu nào có vai trò vận chuyển oxygen chủ yếu?",a:["Tiểu cầu","Bạch cầu","Hồng cầu","Huyết tương בלבד"],correct:2,explain:"Hồng cầu chứa hemoglobin, có khả năng liên kết và vận chuyển oxygen."},
 {id:"b4",subject:"Sinh học",topic:"Hệ hô hấp và bài tiết",q:"Trao đổi khí ở phổi diễn ra chủ yếu tại đâu?",a:["Khí quản","Phế quản","Phế nang","Thanh quản"],correct:2,explain:"Phế nang có thành mỏng và mạng mao mạch dày đặc, thuận lợi cho trao đổi khí."},
 {id:"x1",subject:"Tổng hợp",topic:"Thi thử",q:"Đơn vị thường dùng của áp suất trong hệ SI là gì?",a:["Newton","Pascal","Joule","Watt"],correct:1,explain:"Đơn vị SI của áp suất là pascal (Pa), tương đương N/m²."},
 {id:"x2",subject:"Tổng hợp",topic:"Thi thử",q:"Chất nào sau đây là đơn chất?",a:["Nước","Carbon dioxide","Oxygen","Muối ăn"],correct:2,explain:"Oxygen chỉ gồm một nguyên tố hóa học nên là đơn chất."},
 {id:"x3",subject:"Tổng hợp",topic:"Thi thử",q:"Cơ quan nào là nơi diễn ra phần lớn quá trình hấp thụ chất dinh dưỡng?",a:["Dạ dày","Ruột non","Thực quản","Ruột già"],correct:1,explain:"Ruột non có diện tích bề mặt lớn, là nơi hấp thụ phần lớn chất dinh dưỡng."}
];

const theory = [
 {title:"Vật lí – Công thức cần nhớ",text:"Khối lượng riêng: D = m/V. Áp suất: p = F/S. Khi ôn tập, cần ghi rõ đại lượng, đơn vị và đổi đơn vị trước khi tính toán."},
 {title:"Hóa học – Phản ứng hóa học",text:"Phản ứng hóa học là quá trình biến đổi chất này thành chất khác. Khi lập phương trình hóa học, cần viết đúng công thức hóa học và cân bằng số nguyên tử mỗi nguyên tố."},
 {title:"Sinh học – Cơ thể người",text:"Các hệ cơ quan phối hợp hoạt động để duy trì sự sống. Ăn uống hợp lí, vận động thường xuyên, vệ sinh cá nhân và môi trường giúp bảo vệ sức khỏe."},
 {title:"Cách học hiệu quả",text:"Đọc tóm tắt, tự trả lời câu hỏi, kiểm tra đáp án và ghi lại câu sai. Các câu hỏi trong website là bộ mẫu minh họa; giáo viên nên bổ sung câu hỏi bám sát nội dung từng bài."}
];

const stateKey="khtn8-progress-v1";
let state=loadState(), timerHandle=null, remaining=1200, activeQuestions=[], currentMode="practice";
function loadState(){try{return JSON.parse(localStorage.getItem(stateKey))||{attempts:0,best:0,completed:{},scores:[]}}catch(e){return {attempts:0,best:0,completed:{},scores:[]}}}
function saveState(){localStorage.setItem(stateKey,JSON.stringify(state));renderSideProgress()}
function el(id){return document.getElementById(id)}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function go(view){
 clearInterval(timerHandle);timerHandle=null;
 el("dashboard").classList.add("hidden");el("workspace").classList.remove("hidden");
 const title={theory:"Ôn lý thuyết",physics:"Vật lí",chemistry:"Hóa học",biology:"Sinh học",exam:"Thi thử tổng hợp",progress:"Tiến độ học tập"}[view]||"Ôn tập";
 el("viewTitle").textContent=title;el("viewDescription").textContent="KHTN lớp 8 · Kết nối tri thức với cuộc sống";
 if(view==="theory")renderTheory();
 else if(["physics","chemistry","biology"].includes(view))renderTopics(view);
 else if(view==="exam")startQuiz(shuffle(questions).slice(0,15),"exam");
 else if(view==="progress")renderProgress();
 window.scrollTo({top:0,behavior:"smooth"});
}
function home(){clearInterval(timerHandle);el("workspace").classList.add("hidden");el("dashboard").classList.remove("hidden");window.scrollTo({top:0,behavior:"smooth"})}
function renderTheory(){el("viewContent").innerHTML=theory.map(t=>`<div class="theory-block"><h3>${t.title}</h3><p>${t.text}</p></div>`).join("")+`<p class="muted small">Lưu ý: Phần lý thuyết hiện là bản tóm tắt khởi đầu, không thay thế sách giáo khoa hoặc kế hoạch dạy học chính thức.</p>`}
function renderTopics(subject){
 const data=topics[subject];
 el("viewContent").innerHTML=`<div class="topic-grid">${data.topics.map((t,i)=>`<article class="topic-card"><h3>${t.name}</h3><p>${t.desc}</p><p><b>${t.ids.length}</b> câu hỏi mẫu</p><button class="primary" onclick="practiceTopic('${subject}',${i})">Luyện tập</button></article>`).join("")}</div>`;
}
function practiceTopic(subject,index){const t=topics[subject].topics[index];let qs=questions.filter(q=>t.ids.includes(q.id));if(!qs.length)qs=questions.filter(q=>q.subject===topics[subject].title);startQuiz(qs,"practice")}
function startQuiz(qs,mode){
 currentMode=mode;activeQuestions=qs;remaining=1200;
 const isExam=mode==="exam";
 el("viewTitle").textContent=isExam?"Thi thử tổng hợp":"Luyện tập trắc nghiệm";
 el("viewDescription").textContent=`${qs.length} câu hỏi · ${isExam?"20 phút":"Làm bài và xem giải thích sau khi nộp"}`;
 el("viewContent").innerHTML=`${isExam?'<div class="timer" id="timer">⏱ Thời gian còn lại: 20:00</div>':''}<form id="quizForm">${qs.map((q,i)=>`<div class="question-card" data-q="${i}"><div class="question-meta">CÂU ${i+1} · ${q.subject}</div><h3>${q.q}</h3>${q.a.map((a,j)=>`<label class="answer-option"><input type="radio" name="q${i}" value="${j}"><span>${String.fromCharCode(65+j)}. ${a}</span></label>`).join("")}<div class="explanation hidden" id="explain${i}"></div></div>`).join("")}<button class="primary" type="submit">${isExam?"Nộp bài thi":"Chấm điểm"}</button></form><div id="quizResult"></div>`;
 el("quizForm").addEventListener("submit",e=>{e.preventDefault();gradeQuiz()});
 if(isExam)timerHandle=setInterval(()=>{remaining--;const m=Math.floor(remaining/60),s=remaining%60;const node=el("timer");if(node)node.textContent=`⏱ Thời gian còn lại: ${m}:${String(s).padStart(2,"0")}`;if(remaining<=0){clearInterval(timerHandle);gradeQuiz()}},1000);
}
function gradeQuiz(){
 if(el("quizForm").dataset.graded==="yes")return;
 el("quizForm").dataset.graded="yes";clearInterval(timerHandle);
 let score=0;
 activeQuestions.forEach((q,i)=>{const selected=document.querySelector(`input[name="q${i}"]:checked`);const correct=selected&&Number(selected.value)===q.correct;if(correct)score++;document.querySelectorAll(`input[name="q${i}"]`).forEach(x=>x.disabled=true);const ex=el("explain"+i);ex.classList.remove("hidden");ex.innerHTML=`<b>${correct?"✓ Chính xác!":"Đáp án đúng: "+String.fromCharCode(65+q.correct)+"."}</b> ${q.explain}`});
 const percent=Math.round(score/activeQuestions.length*100);
 state.attempts++;state.best=Math.max(state.best,percent);state.scores.push({date:new Date().toLocaleDateString("vi-VN"),score:percent,correct:score,total:activeQuestions.length,mode:currentMode});
 const subj=activeQuestions[0]?.subject;if(subj&&subj!=="Tổng hợp")state.completed[subj]=(state.completed[subj]||0)+1;
 saveState();
 el("quizResult").innerHTML=`<div class="result-box"><div class="result-score">${score}/${activeQuestions.length}</div><h3>${percent>=80?"Rất tốt!":percent>=50?"Em đang tiến bộ!":"Hãy ôn lại kiến thức nhé!"}</h3><p>Điểm số: <b>${percent}/100</b></p><p>Đã lưu kết quả trên trình duyệt của thiết bị này.</p><button class="primary" onclick="home()">Về trang chủ</button> <button class="secondary" onclick="go('progress')">Xem tiến độ</button></div>`;
 el("quizResult").scrollIntoView({behavior:"smooth",block:"center"});
}
function renderProgress(){
 const total=state.attempts, best=state.best;
 el("viewContent").innerHTML=`<div class="result-box"><div class="result-score">${best}/100</div><h3>Điểm cao nhất</h3><p>Tổng lượt làm bài: ${total}</p></div><h3>Kết quả theo môn</h3>${["Vật lí","Hóa học","Sinh học"].map(s=>{const n=state.completed[s]||0;return `<div class="progress-row"><div class="progress-label"><span>${s}</span><b>${n} lượt luyện tập</b></div><div class="bar"><span style="width:${Math.min(100,n*10)}%"></span></div></div>`}).join("")}<h3>Lịch sử làm bài</h3>${state.scores.length?`<div class="topic-card">${state.scores.slice(-10).reverse().map(s=>`<p>📅 ${s.date} · ${s.mode==="exam"?"Thi thử":"Luyện tập"} · <b>${s.score}/100</b> (${s.correct}/${s.total} câu)</p>`).join("")}</div>`:"<p class='muted'>Chưa có kết quả. Hãy làm một bài trắc nghiệm để bắt đầu theo dõi tiến độ.</p>"}`;
}
function renderSideProgress(){
 const arr=["Vật lí","Hóa học","Sinh học"];
 el("sideProgress").innerHTML=arr.map(s=>{const n=state.completed[s]||0;const pct=Math.min(100,n*10);return `<div class="progress-row"><div class="progress-label"><span>${s}</span><span>${pct}%</span></div><div class="progress-label"><span>${n} lượt luyện tập</span></div><div class="bar"><span style="width:${pct}%"></span></div></div>`}).join("");
 el("totalAttempts").textContent=state.attempts;el("bestScore").textContent=state.best;el("completedTopics").textContent=Object.values(state.completed).reduce((a,b)=>a+b,0);
}
document.querySelectorAll("[data-view]").forEach(node=>node.addEventListener("click",()=>go(node.dataset.view)));
el("backHome").addEventListener("click",home);
el("themeToggle").addEventListener("click",()=>document.body.classList.toggle("dark"));
el("resetProgress").addEventListener("click",()=>{if(confirm("Bạn có chắc muốn xóa toàn bộ tiến độ đã lưu trên thiết bị này?")){state={attempts:0,best:0,completed:{},scores:[]};saveState();renderSideProgress();alert("Đã xóa tiến độ trên thiết bị này.")}});
renderSideProgress();
