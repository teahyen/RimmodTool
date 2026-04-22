// ====================================================
// ① 유전자 데이터 정의 (공식 카테고리 기반)
// ====================================================

// --- 1. 생리 및 생존 (Physiology) ---
const PHYSIOLOGY_GENES = [
    { id: 'SleepLow', ko: '하급 수면', emoji: '💤', desc: '더 적은 수면이 필요합니다.', cpx: 1, met: -1, extra: '<statOffsets><RestRateMultiplier>0.8</RestRateMultiplier></statOffsets>' },
    { id: 'SleepNever', ko: '수면 상실', emoji: '🚫', desc: '더 이상 잠을 자지 않습니다.', cpx: 3, met: -5, extra: '<forcedHair>None</forcedHair><statOffsets><RestRateMultiplier>0</RestRateMultiplier></statOffsets>' },
    { id: 'HealFast', ko: '빠른 상처 회복', emoji: '🩹', desc: '치료 속도와 회복량이 증가합니다.', cpx: 1, met: -1, extra: '<statOffsets><InjuryHealingFactor>0.5</InjuryHealingFactor></statOffsets>' },
    { id: 'ImmuneSuper', ko: '완전 면역', emoji: '🛡️', desc: '모든 감염에 저항력이 대단히 높습니다.', cpx: 2, met: -2, extra: '<statOffsets><ImmunityGainSpeed>0.5</ImmunityGainSpeed></statOffsets>' },
    { id: 'StrongStomach', ko: '강한 위장', emoji: '🍖', desc: '날것이나 썩은 음식을 먹어도 식중독에 걸리지 않습니다.', cpx: 1, met: 0, extra: '<foodPoisoningChanceFactor>0</foodPoisoningChanceFactor>' },
    { id: 'LowHunger', ko: '낮은 허기', emoji: '🍞', desc: '허기 소모 속도가 감소합니다.', cpx: 1, met: 1, extra: '<statFactors><HungerRateMultiplier>0.7</HungerRateMultiplier></statFactors>' },
    { id: 'NoAging', ko: '노화 정지', emoji: '⏳', desc: '노화와 관련된 질병에 걸리지 않습니다.', cpx: 2, met: 0, extra: '<noAging>true</noAging>' },
];

// --- 2. 전투 및 성능 (Combat) ---
const COMBAT_GENES = [
    { id: 'MoveFast', ko: '빠른 속도', emoji: '🏃', desc: '이동 속도가 대폭 상승합니다.', cpx: 1, met: -1, extra: '<statOffsets><MoveSpeed>0.4</MoveSpeed></statOffsets>' },
    { id: 'MeleeStrong', ko: '근접 전문가', emoji: '⚔️', desc: '근접 공격력과 명중률이 상승합니다.', cpx: 1, met: -1, extra: '<statOffsets><MeleeHitChance>4</MeleeHitChance><MeleeDamageFactor>1.25</MeleeDamageFactor></statOffsets>' },
    { id: 'ShootingExpert', ko: '사격 전문가', emoji: '🔫', desc: '사격 명중률과 조준 속도가 상승합니다.', cpx: 1, met: -1, extra: '<statOffsets><ShootingAccuracyPawn>4</ShootingAccuracyPawn><AimingDelayFactor>-0.1</AimingDelayFactor></statOffsets>' },
    { id: 'Robust', ko: '전투적 견고함', emoji: '💪', desc: '받는 피해를 25% 경감합니다.', cpx: 2, met: -2, extra: '<damageRawFactor>0.75</damageRawFactor>' },
    { id: 'ToxicResist', ko: '독성 저항', emoji: '☣️', desc: '독소와 낙진에 대한 피해를 입지 않습니다.', cpx: 1, met: 0, extra: '<statOffsets><ToxicEnvironmentResistance>1.0</ToxicEnvironmentResistance></statOffsets>' },
    { id: 'PainReduced', ko: '고통 완화', emoji: '💊', desc: '고통을 덜 느낍니다.', cpx: 1, met: 1, extra: '<statFactors><PainFactor>0.5</PainFactor></statFactors>' },
];

// --- 3. 사교 및 외관 (Social) ---
const SOCIAL_GENES = [
    { id: 'BeautySuper', ko: '빼어난 미모', emoji: '✨', desc: '모든 사람에게 호감을 삽니다.', cpx: 1, met: -1, extra: '<statOffsets><PawnBeauty>2</PawnBeauty></statOffsets>' },
    { id: 'SocialImpactHigh', ko: '사교적 천재', emoji: '💬', desc: '사교적 영향력이 강해집니다.', cpx: 1, met: -1, extra: '<statOffsets><SocialImpact>0.2</SocialImpact></statOffsets>' },
    { id: 'Ugly', ko: '불쾌한 외모', emoji: '👹', desc: '타인에게 혐오감을 줍니다.', cpx: 1, met: 2, extra: '<statOffsets><PawnBeauty>-2</PawnBeauty></statOffsets>' },
    { id: 'MoodHappy', ko: '낙천적 기분', emoji: '😊', desc: '항상 기분이 좋습니다.', cpx: 1, met: -2, extra: '<statOffsets><Mood>8</Mood></statOffsets>' },
    { id: 'Kind', ko: '친절한 본성', emoji: '💕', desc: '타인을 비난하지 않고 칭찬만 합니다.', cpx: 1, met: -1, extra: '<statOffsets><SocialImpact>0.1</SocialImpact></statOffsets>' },
];

// --- 4. 액티브 능력 (Active Abilities) - NEW ---
const ABILITY_GENES = [
    { id: 'FireBreath', ko: '화염 숨결', emoji: '🔥', desc: '전방에 화염을 뿜습니다.', cpx: 2, met: -2, abil: 'FireBreath' },
    { id: 'AcidSpit', ko: '산성 침', emoji: '🤢', desc: '목표물에게 부식성 산을 뱉습니다.', cpx: 2, met: -1, abil: 'AcidSpit' },
    { id: 'FoamSpray', ko: '거품 분사', emoji: '🫧', desc: '화재 진압용 거품을 분사합니다.', cpx: 1, met: 0, abil: 'FoamSpray' },
    { id: 'Longjump', ko: '강력한 도약', emoji: '🚀', desc: '먼 거리를 단숨에 도약합니다.', cpx: 1, met: -1, abil: 'Longjump' },
    { id: 'PiercingSpine', ko: '가시 발사', emoji: '🎯', desc: '등에서 가시를 발사하여 적을 공격합니다.', cpx: 2, met: -1, abil: 'PiercingSpine' },
    { id: 'Coagulate', ko: '응고 능력', emoji: '🩸', desc: '상처를 즉시 응고시켜 지혈합니다.', cpx: 1, met: -1, abil: 'Coagulate' },
];

// --- 5. 신체 부위 및 미용 (Body Parts) ---
const BODY_PART_GENES = [
    { id: 'Tail', ko: '상징적인 꼬리', emoji: '🦎', desc: '균형 발달형 꼬리입니다.', cpx: 0, met: 0, hediff: { defName: 'XENO_Hediff_Tail', label: 'tail', desc: 'A functional or cosmetic tail.' } },
    { id: 'Horns', ko: '악마의 뿔', emoji: '😈', desc: '위협적인 뿔입니다.', cpx: 1, met: 0, statXml: '<statOffsets><MeleeHitChance>1</MeleeHitChance></statOffsets>', hediff: { defName: 'XENO_Hediff_Horns', label: 'horns', desc: 'Bony horns.' } },
    { id: 'Wings', ko: '장식용 날개', emoji: '🕊️', desc: '비행 불능이지만 이속이 상승합니다.', cpx: 2, met: -1, statXml: '<statOffsets><MoveSpeed>0.2</MoveSpeed></statOffsets>', hediff: { defName: 'XENO_Hediff_Wings', label: 'vestigial wings', desc: 'Feathered wings.' } },
    { id: 'PointyEars', ko: '요정 귀', emoji: '🧝', desc: '길쭉하고 뾰족한 귀입니다.', cpx: 0, met: 0, hediff: { defName: 'XENO_Hediff_Ears', label: 'pointed ears', desc: 'Elven ears.' } },
    { id: 'Scales', ko: '용의 비늘', emoji: '🧶', desc: '단단한 피부 방어력.', cpx: 2, met: 0, statXml: '<statOffsets><ArmorRating_Sharp>0.1</ArmorRating_Sharp></statOffsets>', hediff: { defName: 'XENO_Hediff_Scales', label: 'scales', desc: 'Tough skin scales.' } },
];

// --- 6. 아키타이트 및 특수 (Archite) ---
const ARCHITE_GENES = [
    { id: 'Deathless', ko: '불사신', emoji: '♾️', desc: '절대로 죽지 않고 상처를 재생합니다.', cpx: 5, met: -5, arch: true, extra: '<deathless>true</deathless>' },
    { id: 'Bloodfeeder', ko: '생혈 흡식', emoji: '🧛', desc: '흡혈귀처럼 피를 마셔야 합니다.', cpx: 3, met: -3, arch: false, extra: '<minBloodConsumptionPerDay>0.2</minBloodConsumptionPerDay>' },
    { id: 'Ageless', ko: '불로', emoji: '👶', desc: '육체 나이가 18세에서 영원히 멈춥니다.', cpx: 2, met: 0, arch: true, extra: '<statOffsets><AgaingRateMultiplier>0</AgaingRateMultiplier></statOffsets>' },
    { id: 'PsychicImmune', ko: '정신력 투명', emoji: '🕯️', desc: '모든 정신적 영향에 면역입니다.', cpx: 2, met: -1, extra: '<statOffsets><PsychicSensitivity>-1.0</PsychicSensitivity></statOffsets>' },
];

const TRAITS = [
    { id:'Tough', ko:'강인함', defName:'Tough', cpx:1, met:0 },
    { id:'FastLearner', ko:'빠른 학습자', defName:'FastLearner', cpx:1, met:0 },
    { id:'Cannibal', ko:'식인', defName:'Cannibal', cpx:1, met:0 },
    { id:'Kind', ko:'친절함', defName:'Kind', cpx:1, met:0 },
    { id:'Brawler', ko:'싸움꾼', defName:'Brawler', cpx:0, met:0 },
];

// ====================================================
// ② 대사 균형 및 렌더링 로직
// ====================================================
let totalMet = 0;

function updateMetDisplay() {
    const numEl = document.getElementById('metNum');
    const fillEl = document.getElementById('metFill');
    const hintEl = document.getElementById('metHint');
    numEl.textContent = (totalMet > 0 ? '+' : '') + totalMet;
    const capped = Math.max(-6, Math.min(6, totalMet));
    fillEl.style.left = (capped < 0 ? (50 - Math.abs(capped)*8) : 50) + '%';
    fillEl.style.width = (Math.abs(capped)*8) + '%';
    if (totalMet < 0) { fillEl.style.background = '#818cf8'; } else if (totalMet > 0) { fillEl.style.background = '#fbbf24'; } else { fillEl.style.background = '#94a3b8'; }
    const hints = ['생존 불가능','극한 소모','과도한 식탐','식량 필요','균형','효율적 생존','절식의 대가'];
    hintEl.textContent = hints[Math.min(6, Math.max(0, totalMet + 3))];
}

function renderGenes(containerId, list, prefix) {
    const container = document.getElementById(containerId);
    if(!container) return;
    list.forEach(g => {
        const metSign = g.met > 0 ? '+' : '';
        const archTag = g.arch ? '<span class="badge badge-archite">♦ 아키타이트</span>' : '';
        const card = document.createElement('label');
        card.className = 'gene-card';
        card.innerHTML = `
            <input type="checkbox" id="${prefix}-${g.id}" data-met="${g.met}" class="gene-checkbox">
            <div class="gene-card-inner">
                <div class="gene-emoji">${g.emoji}</div>
                <div class="gene-name">${g.ko}</div>
                <div class="gene-badges"><span class="badge ${g.met < 0 ? 'badge-met-neg' : 'badge-met-pos'}">대사 ${metSign}${g.met}</span>${archTag}</div>
            </div>`;
        container.appendChild(card);
    });
}

function renderTraitGrid() {
    const container = document.getElementById('traitGrid');
    TRAITS.forEach(t => {
        const el = document.createElement('label');
        el.className = 'trait-item';
        el.innerHTML = `<input type="checkbox" id="trait-${t.id}" data-met="${t.met}" class="gene-checkbox"><span>${t.ko}</span>`;
        container.appendChild(el);
    });
}

function renderSkillGrid() {
    const container = document.getElementById('skillGrid');
    const skills = ['Shooting','Melee','Construction','Mining','Cooking','Plants','Animals','Crafting','Art','Medicine','Social','Intellectual'];
    skills.forEach(s => {
        const div = document.createElement('div');
        div.className = 'skill-row';
        div.innerHTML = `<div class="skill-name">${s}</div><div class="skill-input-wrap"><input type="number" id="skill-${s}" value="0" class="skill-input"></div>`;
        container.appendChild(div);
    });
}

// ====================================================
// ③ 초기화 및 대사 추적
// ====================================================
document.addEventListener('DOMContentLoaded', () => {
    renderGenes('physiologyGrid', PHYSIOLOGY_GENES, 'phy');
    renderGenes('combatGrid', COMBAT_GENES, 'com');
    renderGenes('socialGrid', SOCIAL_GENES, 'soc');
    renderGenes('abilityGrid', ABILITY_GENES, 'abi');
    renderGenes('bodyPartGrid', BODY_PART_GENES, 'bpt');
    renderGenes('architeGrid', ARCHITE_GENES, 'arc');
    renderTraitGrid();
    renderSkillGrid();

    document.addEventListener('change', e => {
        if(e.target.classList.contains('gene-checkbox')) {
            const m = parseInt(e.target.dataset.met || 0);
            totalMet += e.target.checked ? m : -m;
            updateMetDisplay();
        }
    });

    const imgSetup = (i, p, c) => {
        const input = document.getElementById(i);
        input.addEventListener('change', () => {
            const f = input.files[0];
            if(f){ const r = new FileReader(); r.onload = v => { document.getElementById(p).src = v.target.result; document.getElementById(c).style.display = 'flex'; }; r.readAsDataURL(f); }
        });
    };
    imgSetup('imgIcon', 'preview-img-icon', 'preview-container-icon');
    imgSetup('imgPreview', 'preview-img-preview', 'preview-container-preview');
});

// ====================================================
// ④ 모드 파일 생성 (XML)
// ====================================================
document.getElementById('generateBtn').addEventListener('click', async () => {
    const btn = document.getElementById('generateBtn');
    btn.disabled = true; btn.textContent = '생성 중...';

    const modName = document.getElementById('modName').value;
    const author = document.getElementById('author').value;
    const defName = document.getElementById('defName').value;
    const xeLabel = document.getElementById('xeLabel').value;
    const desc = document.getElementById('description').value;

    const zip = new JSZip();
    const geneRefs = [];
    const geneDefs = [];
    const hediffDefs = [];

    const getChecked = (list, prefix) => list.filter(g => document.getElementById(`${prefix}-${g.id}`).checked);

    const allSelected = [
        ...getChecked(PHYSIOLOGY_GENES, 'phy'),
        ...getChecked(COMBAT_GENES, 'com'),
        ...getChecked(SOCIAL_GENES, 'soc'),
        ...getChecked(ABILITY_GENES, 'abi'),
        ...getChecked(BODY_PART_GENES, 'bpt'),
        ...getChecked(ARCHITE_GENES, 'arc')
    ];

    allSelected.forEach(g => {
        const gDefName = `${defName}_Gene_${g.id}`;
        geneRefs.push(gDefName);

        let body = '';
        if (g.extra) body += `\n        ${g.extra}`;
        if (g.statXml) body += `\n        ${g.statXml}`;
        if (g.abil) body += `\n        <abilities><li>${g.abil}</li></abilities>`;
        if (g.hediff) {
            const hDefName = `${defName}_Hediff_${g.id}`;
            body += `\n        <hediffGiversCanAnimate>true</hediffGiversCanAnimate>\n        <hediffGivers><li><hediff>${hDefName}</hediff><partsToAffect><li>Torso</li></partsToAffect></li></hediffGivers>`;
            hediffDefs.push(`<HediffDef><defName>${hDefName}</defName><label>${g.hediff.label}</label><description>${g.hediff.desc}</description><hediffClass>HediffWithComps</hediffClass><isBad>false</isBad></HediffDef>`);
        }

        geneDefs.push(
`<GeneDef>
    <defName>${gDefName}</defName>
    <label>${g.ko}</label>
    <description>${g.desc}</description>
    <biostatCpx>${g.cpx}</biostatCpx>
    <biostatMet>${g.met}</biostatMet>${body}
</GeneDef>`);
    });

    // 강제 특성
    const selTraits = getChecked(TRAITS, 'trait');
    selTraits.forEach(t => {
        const gtName = `${defName}_Gene_Trait_${t.id}`;
        geneRefs.push(gtName);
        geneDefs.push(`<GeneDef><defName>${gtName}</defName><label>${t.ko} 특성</label><biostatMet>${t.met}</biostatMet><forcedTraits><li><def>${t.defName}</def></li></forcedTraits></GeneDef>`);
    });

    // 외형 색상
    if(document.getElementById('useSkinColor').checked) {
        const c = document.getElementById('skinColor').value;
        const r=(parseInt(c.slice(1,3),16)/255).toFixed(2), g=(parseInt(c.slice(3,5),16)/255).toFixed(2), b=(parseInt(c.slice(5,7),16)/255).toFixed(2);
        geneRefs.push(`${defName}_Gene_Skin`);
        geneDefs.push(`<GeneDef><defName>${defName}_Gene_Skin</defName><label>피부색</label><skinColorBase>(${r},${g},${b})</skinColorBase></GeneDef>`);
    }

    // ZIP 파일 구성
    const defFolder = zip.folder("Defs");
    defFolder.folder("XenotypeDefs").file(`${defName}.xml`, `<?xml version="1.0" encoding="utf-8"?><Defs><XenotypeDef><defName>${defName}</defName><label>${xeLabel}</label><description>${desc}</description><iconPath>Things/Xenotype/${defName}</iconPath><genes>${geneRefs.map(r=>`<li>${r}</li>`).join('')}</genes></XenotypeDef></Defs>`);
    defFolder.folder("GeneDefs").file(`${defName}_Genes.xml`, `<?xml version="1.0" encoding="utf-8"?><Defs>${geneDefs.join('')}</Defs>`);
    if(hediffDefs.length) defFolder.folder("HediffDefs").file(`${defName}_Hediffs.xml`, `<?xml version="1.0" encoding="utf-8"?><Defs>${hediffDefs.join('')}</Defs>`);

    zip.folder("About").file("About.xml", `<?xml version="1.0" encoding="utf-8"?><ModMetaData><name>${modName}</name><author>${author}</author><packageId>${author}.${defName}</packageId><supportedVersions><li>1.4</li><li>1.5</li></supportedVersions><description>${desc}</description></ModMetaData>`);

    const iconFile = document.getElementById('imgIcon').files[0];
    if(iconFile) {
        const buf = await iconFile.arrayBuffer();
        zip.folder("Textures").folder("Things").folder("Xenotype").file(`${defName}.png`, buf);
    }

    const content = await zip.generateAsync({type:"blob"});
    saveAs(content, `${modName}.zip`);
    btn.disabled = false; btn.textContent = '🧬 제노타입 모드 생성 (.zip)';
});
