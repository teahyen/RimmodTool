// ====================================================
// ① 유전자 데이터 정의 (FINAL MASTER EDITION)
// ====================================================

// --- 1. 식성 및 영양 (Diet) ---
const DIET_GENES = [
    { id: 'Carnivore', ko: '완전 육식', emoji: '🥩', desc: '고기만 먹을 수 있습니다.', cpx: 1, met: 3, extra: '<foodBias>MeatOnly</foodBias>' },
    { id: 'Herbivore', ko: '완전 채식', emoji: '🥦', desc: '식물성 음식만 먹을 수 있습니다.', cpx: 1, met: 3, extra: '<foodBias>PlantsOnly</foodBias>' },
    { id: 'StrongStomach', ko: '강한 위장', emoji: '🍖', desc: '날고기나 썩은 음식에도 배탈이 나지 않습니다.', cpx: 1, met: 0, extra: '<foodPoisoningChanceFactor>0</foodPoisoningChanceFactor>' },
    { id: 'Hemogenic', ko: '생혈 의존', emoji: '🧛', desc: '주기적으로 피를 마셔야 생존할 수 있습니다.', cpx: 3, met: -2, extra: '<minBloodConsumptionPerDay>0.2</minBloodConsumptionPerDay>' },
    { id: 'LowHunger', ko: '낮은 허기', emoji: '🍞', desc: '음식 섭취가 40% 적게 필요합니다.', cpx: 2, met: 2, extra: '<statFactors><HungerRateMultiplier>0.6</HungerRateMultiplier></statFactors>' },
];

// --- 2. 정신 및 본능 (Mind & Psychic) ---
const MIND_GENES = [
    { id: 'PsychicSensHigh', ko: '정신력 과민', emoji: '🧠', desc: '정신적 감응도가 대폭 상승합니다.', cpx: 2, met: -2, extra: '<statOffsets><PsychicSensitivity>1.0</PsychicSensitivity></statOffsets>' },
    { id: 'PsychicImmune', ko: '정신적 불감', emoji: '🕯️', desc: '모든 정신적 영향에 면역입니다.', cpx: 2, met: -1, extra: '<statOffsets><PsychicSensitivity>-1.0</PsychicSensitivity></statOffsets>' },
    { id: 'Aggressive', ko: '호전적 본능', emoji: '⚔️', desc: '쉽게 화를 내며 근접 피해가 높습니다.', cpx: 1, met: 2, extra: '<statOffsets><MeleeDamageFactor>0.15</MeleeDamageFactor></statOffsets>' },
    { id: 'Kind', ko: '친절한 본성', emoji: '💖', desc: '타인을 비난하지 않고 칭찬만 합니다.', cpx: 2, met: -1, extra: '<statOffsets><SocialImpact>0.1</SocialImpact></statOffsets>' },
    { id: 'DeadlyVisage', ko: '죽음의 얼굴', emoji: '💀', desc: '주변 사람들에게 공포심을 유발합니다.', cpx: 2, met: 0, extra: '<statOffsets><SocialImpact>-0.2</SocialImpact></statOffsets>' },
];

// --- 3. 기술 소질 (Aptitudes) ---
const APTITUDE_GENES = [
    { id: 'GreatShooting', ko: '사격의 전설', emoji: '🎯', desc: '사격 레벨 +8 보너스.', cpx: 1, met: -3, extra: '<aptitudes><li><skill>Shooting</skill><level>8</level></li></aptitudes>' },
    { id: 'GreatMelee', ko: '근접의 달인', emoji: '🤺', desc: '근접 레벨 +8 보너스.', cpx: 1, met: -3, extra: '<aptitudes><li><skill>Melee</skill><level>8</level></li></aptitudes>' },
    { id: 'GreatIntellectual', ko: '초천재', emoji: '🎓', desc: '연구 레벨 +8 보너스.', cpx: 1, met: -3, extra: '<aptitudes><li><skill>Intellectual</skill><level>8</level></li></aptitudes>' },
    { id: 'GreatCrafting', ko: '신의 손재주', emoji: '🔨', desc: '제작 레벨 +8 보너스.', cpx: 1, met: -3, extra: '<aptitudes><li><skill>Crafting</skill><level>8</level></li></aptitudes>' },
    { id: 'AwfulAnimals', ko: '동물 기피', emoji: '🐾', desc: '동물 핸들링 -4 페널티.', cpx: 1, met: 1, extra: '<aptitudes><li><skill>Animals</skill><level>-4</level></li></aptitudes>' },
    { id: 'AwfulMedicine', ko: '의술 조작꾼', emoji: '💊', desc: '의학 레벨 -4 페널티.', cpx: 1, met: 1, extra: '<aptitudes><li><skill>Medicine</skill><level>-4</level></li></aptitudes>' },
];

// --- 4. 저항 및 취약성 (Resist & Weak) ---
const RESIST_GENES = [
    { id: 'FireProof', ko: '완전 내열', emoji: '🔥', desc: '화염 피해를 입지 않습니다.', cpx: 2, met: -2, extra: '<statOffsets><FireResistance>1.0</FireResistance></statOffsets>' },
    { id: 'ToxImmune', ko: '독성 무효', emoji: '☢️', desc: '독소와 낙진을 완전히 무시합니다.', cpx: 2, met: -1, extra: '<statOffsets><ToxicEnvironmentResistance>1.0</ToxicEnvironmentResistance></statOffsets>' },
    { id: 'WeakFire', ko: '화염 취약', emoji: '🕯️', desc: '불에 매우 약합니다!! 대사 포인트 +4.', cpx: 1, met: 4, extra: '<statOffsets><FireResistance>-1.0</FireResistance></statOffsets>' },
    { id: 'WeakCold', ko: '추위 취약', emoji: '❄️', desc: '추운 곳에서 생존이 어렵습니다.', cpx: 1, met: 2, extra: '<statOffsets><ComfyTemperatureMin>20</ComfyTemperatureMin></statOffsets>' },
    { id: 'UVWeak', ko: '햇빛 공포', emoji: '☀️', desc: '낮 동안 야외에서 큰 고통을 느낍니다.', cpx: 2, met: 3, extra: '<statOffsets><Mood>-10</Mood></statOffsets>' },
];

// --- 5. 액티브 능력 (Abilities) ---
const ABILITY_GENES = [
    { id: 'FireBreath', ko: '지옥의 숨결', emoji: '👿', desc: '강력한 불꽃을 내뿜습니다.', cpx: 3, met: -2, abil: 'FireBreath' },
    { id: 'Resurrection', ko: '부활 술식', emoji: '👼', desc: '죽은 자를 되살립니다.', cpx: 5, met: -5, abil: 'Resurrection' },
    { id: 'Longjump', ko: '초월적 도약', emoji: '🚀', desc: '반경 내 어디든 순상 이동합니다.', cpx: 1, met: -1, abil: 'Longjump' },
    { id: 'AnimalWarcall', ko: '동물 지배', emoji: '🐾', desc: '동물들을 즉시 광분시켜 공격하게 합니다.', cpx: 2, met: -1, abil: 'AnimalWarcall' },
    { id: 'Invisibility', ko: '스텔스', emoji: '🌫️', desc: '일시적으로 모습을 감춥니다.', cpx: 4, met: -3, abil: 'Invisibility' },
];

// --- 6. 아키타이트 및 생존 (Archite) ---
const ARCHITE_GENES = [
    { id: 'Deathless', ko: '영원불멸', emoji: '♾️', desc: '심장만 있다면 죽지 않고 재생합니다.', cpx: 5, met: -5, arch: true, extra: '<deathless>true</deathless>' },
    { id: 'Ageless', ko: '영원한 젊음', emoji: '👶', desc: '18세 이후로 늙지 않습니다.', cpx: 2, met: 0, arch: true, extra: '<statOffsets><AgaingRateMultiplier>0</AgaingRateMultiplier></statOffsets>' },
    { id: 'SuperHealing', ko: '초월적 치유', emoji: '🩹', desc: '부상이 눈 깜짝할 새 나아버립니다.', cpx: 3, met: -2, arch: true, extra: '<statOffsets><InjuryHealingFactor>2.0</InjuryHealingFactor></statOffsets>' },
];

// --- 7. 신체 및 기타 (Misc) ---
const MISC_GENES = [
    { id: 'Tail', ko: '꼬리', emoji: '🦎', hediff: { defName: 'X_Tail', label: 'tail' }, cpx: 0, met: 0 },
    { id: 'Wings', ko: '날개', emoji: '🕊️', hediff: { defName: 'X_Wings', label: 'wings' }, cpx: 2, met: -1, statXml: '<statOffsets><MoveSpeed>0.3</MoveSpeed></statOffsets>' },
    { id: 'FastAge', ko: '초고속 성장', emoji: '🐣', desc: '아이들이 순식간에 성인이 됩니다.', cpx: 1, met: 2, extra: '<biologicalAgeTickFactor>3.0</biologicalAgeTickFactor>' },
    { id: 'PerfectImmunity', ko: '완전 면역', emoji: '🛡️', desc: '모든 질병에 자연 저항합니다.', cpx: 2, met: -2, extra: '<statOffsets><ImmunityGainSpeed>1.0</ImmunityGainSpeed></statOffsets>' },
];

const TRAITS = [
    { id:'Tough', ko:'강인함', defName:'Tough' },
    { id:'Psychopath', ko:'사이코패스', defName:'Psychopath' },
    { id:'Optimist', ko:'낙천주의자', defName:'Optimist' },
];

// ====================================================
// ② 대사 균형 및 렌더링 엔진
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
        card.innerHTML = `<input type="checkbox" id="${prefix}-${g.id}" data-met="${g.met || 0}" class="gene-checkbox"><div class="gene-card-inner"><div class="gene-emoji">${g.emoji}</div><div class="gene-name">${g.ko}</div><div class="gene-badges"><span class="badge ${g.met < 0 ? 'badge-met-neg' : 'badge-met-pos'}">대사 ${(g.met > 0 ? '+': '') + (g.met || 0)}</span></div></div>`;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderGenes('dietGrid', DIET_GENES, 'die');
    renderGenes('mindGrid', MIND_GENES, 'min');
    renderGenes('aptitudeGrid', APTITUDE_GENES, 'apt');
    renderGenes('resistGrid', RESIST_GENES, 'res');
    renderGenes('abilityGrid', ABILITY_GENES, 'abi');
    renderGenes('architeGrid', ARCHITE_GENES, 'arc');
    renderGenes('miscGrid', MISC_GENES, 'mis');
    
    document.getElementById('traitGrid').innerHTML = TRAITS.map(t => `<label class="trait-item"><input type="checkbox" id="trait-${t.id}"><span>${t.ko}</span></label>`).join('');

    document.addEventListener('change', e => {
        if(e.target.classList.contains('gene-checkbox')) {
            totalMet += e.target.checked ? parseInt(e.target.dataset.met || 0) : -parseInt(e.target.dataset.met || 0);
            updateMetDisplay();
        }
    });
    
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
// ③ ZIP 및 XML 생성 엔진
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
    const categoryMapping = [
        {list: DIET_GENES, pre: 'die'}, {list: MIND_GENES, pre: 'min'},
        {list: APTITUDE_GENES, pre: 'apt'}, {list: RESIST_GENES, pre: 'res'},
        {list: ABILITY_GENES, pre: 'abi'}, {list: ARCHITE_GENES, pre: 'arc'},
        {list: MISC_GENES, pre: 'mis'}
    ];

    categoryMapping.forEach(cat => {
        getChecked(cat.list, cat.pre).forEach(g => {
            const gdName = `${defName}_Gene_${g.id}`;
            geneRefs.push(gdName);
            let inner = (g.extra || '') + (g.statXml || '');
            if(g.abil) inner += `<abilities><li>${g.abil}</li></abilities>`;
            if(g.hediff) {
                const hdName = `${defName}_Hediff_${g.id}`;
                inner += `<hediffGivers><li><hediff>${hdName}</hdiff><partsToAffect><li>Torso</li></partsToAffect></li></hediffGivers>`;
                hediffDefs.push(`<HediffDef><defName>${hdName}</defName><label>${g.hediff.label}</label><hediffClass>HediffWithComps</hediffClass></HediffDef>`);
            }
            geneDefs.push(`<GeneDef><defName>${gdName}</defName><label>${g.ko}</label><biostatCpx>${g.cpx || 1}</biostatCpx><biostatMet>${g.met || 0}</biostatMet>${inner}</GeneDef>`);
        });
    });

    // 강제 특성
    TRAITS.forEach(t => {
        if(document.getElementById(`trait-${t.id}`).checked) {
            const gtName = `${defName}_Gene_Trait_${t.id}`;
            geneRefs.push(gtName);
            geneDefs.push(`<GeneDef><defName>${gtName}</defName><label>${t.ko} 특성</label><biostatMet>0</biostatMet><forcedTraits><li><def>${t.defName}</def></li></forcedTraits></GeneDef>`);
        }
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

    zip.folder("About").file("About.xml", `<?xml version="1.0" encoding="utf-8"?><ModMetaData><name>${document.getElementById('modName').value}</name><author>${document.getElementById('author').value}</author><packageId>${document.getElementById('author').value}.${defName}</packageId><supportedVersions><li>1.4</li><li>1.5</li></supportedVersions><description>Custom Xenotype Mod</description></ModMetaData>`);

    const iconFile = document.getElementById('imgIcon').files[0];
    if(iconFile) {
        const buf = await iconFile.arrayBuffer();
        zip.folder("Textures").folder("Things").folder("Xenotype").file(`${defName}.png`, buf);
    }

    const content = await zip.generateAsync({type:"blob"});
    saveAs(content, `${defName}_FinalMod.zip`);
    btn.disabled = false; btn.textContent = '🧬 제노타입 모드 생성 (.zip)';
});
