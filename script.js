// ====================================================
// ① 유전자 데이터 정의 (ULTIMATE Edition)
// ====================================================

// --- 1. 번식 및 성장 (Reproduction) - NEW ---
const REPRO_GENES = [
    { id: 'Sterile', ko: '완전 불임', emoji: '🚫', desc: '자연 임신이 거의 불가능해집니다.', cpx: 1, met: 2, extra: '<statOffsets><Fertility>-1.0</Fertility></statOffsets>' },
    { id: 'FertileHigh', ko: '높은 번식력', emoji: '🥚', desc: '임신 확률이 대폭 상승합니다.', cpx: 1, met: -1, extra: '<statOffsets><Fertility>0.5</Fertility></statOffsets>' },
    { id: 'LibidoLow', ko: '낮은 성욕', emoji: '🧊', desc: '성관계 빈도가 낮아집니다.', cpx: 1, met: 1, extra: '<statFactors><LibidoOffset>-0.5</LibidoOffset></statFactors>' },
    { id: 'LibidoHigh', ko: '높은 성욕', emoji: '🔥', desc: '성관계 빈도가 높아집니다.', cpx: 1, met: -1, extra: '<statFactors><LibidoOffset>1.0</LibidoOffset></statFactors>' },
    { id: 'AgeFast', ko: '조기 성장', emoji: '🕒', desc: '성인까지 성장하는 속도가 빠릅니다.', cpx: 1, met: 2, extra: '<biologicalAgeTickFactor>2.0</biologicalAgeTickFactor>' },
    { id: 'AgeSlow', ko: '느린 성장', emoji: '🍼', desc: '노화와 신체 성장이 매우 느립니다.', cpx: 2, met: -2, extra: '<biologicalAgeTickFactor>0.5</biologicalAgeTickFactor>' },
];

// --- 2. 생리 및 생존 (Physiology) ---
const PHYSIOLOGY_GENES = [
    { id: 'SleepLow', ko: '하급 수면', emoji: '💤', desc: '적은 수면으로도 활동 가능합니다.', cpx: 1, met: -1, extra: '<statOffsets><RestRateMultiplier>0.8</RestRateMultiplier></statOffsets>' },
    { id: 'SleepNever', ko: '수면 상실', emoji: '🚫', desc: '잠을 자지 않습니다.', cpx: 3, met: -5, extra: '<statOffsets><RestRateMultiplier>0</RestRateMultiplier></statOffsets>' },
    { id: 'HealFast', ko: '빠른 회복', emoji: '🩹', desc: '부상 치유 속도가 상승합니다.', cpx: 1, met: -1, extra: '<statOffsets><InjuryHealingFactor>0.5</InjuryHealingFactor></statOffsets>' },
    { id: 'ImmuneSuper', ko: '완전 면역', emoji: '🛡️', desc: '질병 저항력이 대단히 높습니다.', cpx: 2, met: -2, extra: '<statOffsets><ImmunityGainSpeed>0.5</ImmunityGainSpeed></statOffsets>' },
    { id: 'StrongStomach', ko: '강한 위장', emoji: '🍖', desc: '식중독에 걸리지 않습니다.', cpx: 1, met: 0, extra: '<foodPoisoningChanceFactor>0</foodPoisoningChanceFactor>' },
    { id: 'LowHunger', ko: '낮은 허기', emoji: '🍞', desc: '허기 소모가 감소합니다.', cpx: 1, met: 1, extra: '<statFactors><HungerRateMultiplier>0.7</HungerRateMultiplier></statFactors>' },
];

// --- 3. 전투 및 성능 (Combat) ---
const COMBAT_GENES = [
    { id: 'MoveFast', ko: '빠른 이동', emoji: '🏃', desc: '이동 속도가 상승합니다.', cpx: 1, met: -1, extra: '<statOffsets><MoveSpeed>0.4</MoveSpeed></statOffsets>' },
    { id: 'MeleeStrong', ko: '근접 전문가', emoji: '⚔️', desc: '근접전 능력이 대폭 강화됩니다.', cpx: 1, met: -1, extra: '<statOffsets><MeleeHitChance>4</MeleeHitChance><MeleeDamageFactor>1.25</MeleeDamageFactor></statOffsets>' },
    { id: 'ShootingExpert', ko: '사격 전문가', emoji: '🔫', desc: '사격 능력이 강화됩니다.', cpx: 1, met: -1, extra: '<statOffsets><ShootingAccuracyPawn>4</ShootingAccuracyPawn></statOffsets>' },
    { id: 'Robust', ko: '견고함', emoji: '💪', desc: '모든 피해를 25% 덜 받습니다.', cpx: 2, met: -2, extra: '<damageRawFactor>0.75</damageRawFactor>' },
];

// --- 4. 사교 및 외관 (Social) ---
const SOCIAL_GENES = [
    { id: 'BeautySuper', ko: '빼어난 미모', emoji: '✨', desc: '타인에게 큰 호감을 줍니다.', cpx: 1, met: -1, extra: '<statOffsets><PawnBeauty>2</PawnBeauty></statOffsets>' },
    { id: 'MoodHappy', ko: '낙천적', emoji: '😊', desc: '항상 높은 기분을 유지합니다.', cpx: 1, met: -2, extra: '<statOffsets><Mood>8</Mood></statOffsets>' },
];

// --- 5. 액티브 능력 (Abilities) ---
const ABILITY_GENES = [
    { id: 'FireBreath', ko: '화염 숨결', emoji: '🔥', desc: '불을 뿜습니다.', cpx: 2, met: -2, abil: 'FireBreath' },
    { id: 'AcidSpit', ko: '산성 침', emoji: '🤢', desc: '산을 뱉습니다.', cpx: 2, met: -1, abil: 'AcidSpit' },
    { id: 'Longjump', ko: '도약 능력', emoji: '🚀', desc: '먼 거리를 점프합니다.', cpx: 1, met: -1, abil: 'Longjump' },
];

// --- 6. 신체 부위 (Body Parts) ---
const BODY_PART_GENES = [
    { id: 'Tail', ko: '꼬리', emoji: '🦎', desc: '기본적 꼬리입니다.', cpx: 0, met: 0, hediff: { defName: 'XENO_Hediff_Tail', label: 'tail' } },
    { id: 'Horns', ko: '뿔', emoji: '😈', desc: '위협적인 뿔입니다.', cpx: 1, met: 0, statXml: '<statOffsets><MeleeHitChance>1</MeleeHitChance></statOffsets>', hediff: { defName: 'XENO_Hediff_Horns', label: 'horns' } },
    { id: 'Wings', ko: '날개', emoji: '🕊️', desc: '비행 불가지만 이속이 증가합니다.', cpx: 2, met: -1, statXml: '<statOffsets><MoveSpeed>0.2</MoveSpeed></statOffsets>', hediff: { defName: 'XENO_Hediff_Wings', label: 'wings' } },
];

// --- 7. 아키타이트 (Archite) ---
const ARCHITE_GENES = [
    { id: 'Deathless', ko: '불사신', emoji: '♾️', desc: '죽지 않고 재생합니다.', cpx: 5, met: -5, arch: true, extra: '<deathless>true</deathless>' },
    { id: 'Ageless', ko: '불로', emoji: '👶', desc: '나이를 먹지 않습니다.', cpx: 2, met: 0, arch: true, extra: '<statOffsets><AgeRateMultiplier>0</AgeRateMultiplier></statOffsets>' },
];

const TRAITS = [
    { id:'Tough', ko:'강인함', defName:'Tough', cpx:1, met:0 },
    { id:'FastLearner', ko:'빠른 학습자', defName:'FastLearner', cpx:1, met:0 },
];

// ====================================================
// ② 대사 균형 및 렌더링
// ====================================================
let totalMet = 0;

function updateMetDisplay() {
    const numEl = document.getElementById('metNum');
    const fillEl = document.getElementById('metFill');
    const hintEl = document.getElementById('metHint');
    numEl.textContent = (totalMet > 0 ? '+' : '') + totalMet;
    const capped = Math.max(-6, Math.min(6, totalMet));
    fillEl.style.width = (Math.abs(capped)*8) + '%';
    fillEl.style.left = (capped < 0 ? (50 - Math.abs(capped)*8) : 50) + '%';
    const hints = ['생존 불가','극한 소모','과도한 식탐','식량 필요','균형','효율적 생존','절식의 대가'];
    hintEl.textContent = hints[Math.min(6, Math.max(0, totalMet + 3))];
    fillEl.style.background = totalMet < 0 ? '#818cf8' : totalMet > 0 ? '#fbbf24' : '#94a3b8';
}

function renderGenes(containerId, list, prefix) {
    const container = document.getElementById(containerId);
    if(!container) return;
    list.forEach(g => {
        const card = document.createElement('label');
        card.className = 'gene-card';
        card.innerHTML = `<input type="checkbox" id="${prefix}-${g.id}" data-met="${g.met}" class="gene-checkbox"><div class="gene-card-inner"><div class="gene-emoji">${g.emoji}</div><div class="gene-name">${g.ko}</div><div class="gene-badges"><span class="badge ${g.met < 0 ? 'badge-met-neg' : 'badge-met-pos'}">대사 ${(g.met > 0 ? '+': '') + g.met}</span></div></div>`;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderGenes('reproGrid', REPRO_GENES, 'rep');
    renderGenes('physiologyGrid', PHYSIOLOGY_GENES, 'phy');
    renderGenes('combatGrid', COMBAT_GENES, 'com');
    renderGenes('socialGrid', SOCIAL_GENES, 'soc');
    renderGenes('abilityGrid', ABILITY_GENES, 'abi');
    renderGenes('bodyPartGrid', BODY_PART_GENES, 'bpt');
    renderGenes('architeGrid', ARCHITE_GENES, 'arc');
    
    document.getElementById('traitGrid').innerHTML = TRAITS.map(t => `<label class="trait-item"><input type="checkbox" id="trait-${t.id}"><span>${t.ko}</span></label>`).join('');
    document.getElementById('skillGrid').innerHTML = ['Shooting','Melee','Social','Medicine'].map(s => `<div class="skill-row"><div class="skill-name">${s}</div><div class="skill-input-wrap"><input type="number" id="skill-${s}" value="0" class="skill-input"></div></div>`).join('');

    document.addEventListener('change', e => {
        if(e.target.classList.contains('gene-checkbox')) {
            totalMet += e.target.checked ? parseInt(e.target.dataset.met || 0) : -parseInt(e.target.dataset.met || 0);
            updateMetDisplay();
        }
    });
    
    // 이미지 처리
    const setupImg = (i, p, c) => {
        const el = document.getElementById(i);
        el.addEventListener('change', () => {
            const f = el.files[0];
            if(f) { const r = new FileReader(); r.onload = e => { document.getElementById(p).src = e.target.result; document.getElementById(c).style.display = 'flex'; }; r.readAsDataURL(f); }
        });
    };
    setupImg('imgIcon', 'preview-img-icon', 'preview-container-icon');
});

// ====================================================
// ③ ZIP 및 XML 생성
// ====================================================
document.getElementById('generateBtn').addEventListener('click', async () => {
    const btn = document.getElementById('generateBtn');
    btn.disabled = true; btn.textContent = '생성 중...';

    const defName = document.getElementById('defName').value;
    const xeLabel = document.getElementById('xeLabel').value;
    const isInheritable = document.getElementById('isInheritable').checked;
    const bodyType = document.querySelector('input[name="bodyType"]:checked').value;

    const zip = new JSZip();
    const geneRefs = [];
    const geneDefs = [];
    const hediffDefs = [];

    const getChecked = (list, prefix) => list.filter(g => document.getElementById(`${prefix}-${g.id}`).checked);
    const selected = [
        ...getChecked(REPRO_GENES, 'rep'), ...getChecked(PHYSIOLOGY_GENES, 'phy'),
        ...getChecked(COMBAT_GENES, 'com'), ...getChecked(SOCIAL_GENES, 'soc'),
        ...getChecked(ABILITY_GENES, 'abi'), ...getChecked(BODY_PART_GENES, 'bpt'),
        ...getChecked(ARCHITE_GENES, 'arc')
    ];

    selected.forEach(g => {
        const gdName = `${defName}_Gene_${g.id}`;
        geneRefs.push(gdName);
        let inner = (g.extra || '') + (g.statXml || '');
        if(g.abil) inner += `<abilities><li>${g.abil}</li></abilities>`;
        if(g.hediff) {
            const hdName = `${defName}_Hediff_${g.id}`;
            inner += `<hediffGivers><li><hediff>${hdName}</hediff><partsToAffect><li>Torso</li></partsToAffect></li></hediffGivers>`;
            hediffDefs.push(`<HediffDef><defName>${hdName}</defName><label>${g.hediff.label}</label><hediffClass>HediffWithComps</hediffClass></HediffDef>`);
        }
        geneDefs.push(`<GeneDef><defName>${gdName}</defName><label>${g.ko}</label><biostatCpx>${g.cpx || 0}</biostatCpx><biostatMet>${g.met || 0}</biostatMet>${inner}</GeneDef>`);
    });

    // 바디 타입 고정
    if(bodyType !== 'None') {
        const bgName = `${defName}_Gene_Body_${bodyType}`;
        geneRefs.push(bgName);
        geneDefs.push(`<GeneDef><defName>${bgName}</defName><label>${bodyType} 체격</label><bodyType>${bodyType}</bodyType></GeneDef>`);
    }

    const defs = zip.folder("Defs");
    defs.folder("XenotypeDefs").file(`${defName}.xml`, `<?xml version="1.0" encoding="utf-8"?><Defs><XenotypeDef><defName>${defName}</defName><label>${xeLabel}</label><inheritable>${isInheritable}</inheritable><genes>${geneRefs.map(r=>`<li>${r}</li>`).join('')}</genes></XenotypeDef></Defs>`);
    defs.folder("GeneDefs").file(`${defName}_Genes.xml`, `<?xml version="1.0" encoding="utf-8"?><Defs>${geneDefs.join('')}</Defs>`);
    if(hediffDefs.length) defs.folder("HediffDefs").file(`${defName}_Hediffs.xml`, `<?xml version="1.0" encoding="utf-8"?><Defs>${hediffDefs.join('')}</Defs>`);

    const iconFile = document.getElementById('imgIcon').files[0];
    if(iconFile) {
        const buf = await iconFile.arrayBuffer();
        zip.folder("Textures").folder("Things").folder("Xenotype").file(`${defName}.png`, buf);
    }

    const content = await zip.generateAsync({type:"blob"});
    saveAs(content, `${defName}_Mod.zip`);
    btn.disabled = false; btn.textContent = '🧬 제노타입 모드 생성 (.zip)';
});
