// =============================================
// Image Preview Logic
// =============================================
function setupImagePreview(inputId, imgId, containerId) {
    const input = document.getElementById(inputId);
    if (!input) return;
    input.addEventListener('change', function(event) {
        const file = event.target.files[0];
        const container = document.getElementById(containerId);
        const img = document.getElementById(imgId);
        if (file) {
            const reader = new FileReader();
            reader.onload = e => { img.src = e.target.result; container.style.display = 'flex'; };
            reader.readAsDataURL(file);
        } else {
            img.src = ''; container.style.display = 'none';
        }
    });
}

setupImagePreview('imgPreview',   'preview-img-preview',    'preview-container-preview');
setupImagePreview('imgHeadSouth', 'preview-img-head-south', 'preview-container-head-south');
setupImagePreview('imgHeadNorth', 'preview-img-head-north', 'preview-container-head-north');
setupImagePreview('imgHeadEast',  'preview-img-head-east',  'preview-container-head-east');
setupImagePreview('imgBodySouth', 'preview-img-body-south', 'preview-container-body-south');
setupImagePreview('imgBodyNorth', 'preview-img-body-north', 'preview-container-body-north');
setupImagePreview('imgBodyEast',  'preview-img-body-east',  'preview-container-body-east');

// =============================================
// ZIP Generation
// =============================================
document.getElementById('generateBtn').addEventListener('click', async () => {

    // --- 1. 기본 폼 데이터 수집 ---
    const modName       = document.getElementById('modName').value      || 'My Custom Race';
    const author        = document.getElementById('author').value       || 'Unknown';
    const defName       = document.getElementById('defName').value      || 'MyAlienRace';
    const raceLabel     = document.getElementById('raceLabel').value    || 'Alien';
    const description   = document.getElementById('description').value  || 'A custom race.';
    const moveSpeed     = document.getElementById('moveSpeed').value;
    const marketValue   = document.getElementById('marketValue').value;
    const minTemp       = document.getElementById('minTemp').value;
    const maxTemp       = document.getElementById('maxTemp').value;
    const healthScale   = document.getElementById('healthScale').value;
    const armorBlunt    = document.getElementById('armorBlunt').value;
    const armorSharp    = document.getElementById('armorSharp').value;
    const hungerRate    = document.getElementById('hungerRate').value;
    const diet          = document.getElementById('diet').value;
    const wildness      = document.getElementById('wildness').value;
    const meatAmount    = document.getElementById('meatAmount').value;
    const leatherAmount = document.getElementById('leatherAmount').value;

    // --- 2. 특성(Trait) 수집 ---
    const checkedTraits = [];
    document.querySelectorAll('.trait-item input[type="checkbox"]:checked').forEach(cb => {
        checkedTraits.push({
            defName: cb.dataset.defname,
            degree:  cb.dataset.degree
        });
    });

    const traitsXml = checkedTraits.length > 0
        ? `\n        <forcedRaceTraitEntries>\n` +
          checkedTraits.map(t =>
            `            <li>\n                <defName>${t.defName}</defName>\n                <degree>${t.degree}</degree>\n            </li>`
          ).join('\n') +
          `\n        </forcedRaceTraitEntries>`
        : '';

    // --- 3. 스킬 보정 수집 ---
    const skillNames = ['Shooting','Melee','Construction','Mining','Cooking','Plants','Animals','Crafting','Art','Medicine','Social','Intellectual'];
    const skillGains = {};
    skillNames.forEach(s => {
        const val = parseInt(document.getElementById('skill-' + s).value, 10);
        if (!isNaN(val) && val !== 0) skillGains[s] = val;
    });
    const hasSkillBonuses = Object.keys(skillGains).length > 0;

    // --- 4. 이미지 파일 ---
    const imgPreview   = document.getElementById('imgPreview').files[0];
    const imgHeadSouth = document.getElementById('imgHeadSouth').files[0];
    const imgHeadNorth = document.getElementById('imgHeadNorth').files[0];
    const imgHeadEast  = document.getElementById('imgHeadEast').files[0];
    const imgBodySouth = document.getElementById('imgBodySouth').files[0];
    const imgBodyNorth = document.getElementById('imgBodyNorth').files[0];
    const imgBodyEast  = document.getElementById('imgBodyEast').files[0];
    const hasHeadTex   = imgHeadSouth || imgHeadNorth || imgHeadEast;
    const hasBodyTex   = imgBodySouth || imgBodyNorth || imgBodyEast;

    const zip = new JSZip();
    const pkgAuthor  = author.replace(/[^a-zA-Z0-9]/g, '');
    const pkgDefName = defName.replace(/[^a-zA-Z0-9]/g, '');

    // =============================================
    // About/About.xml
    // =============================================
    zip.folder("About").file("About.xml", `<?xml version="1.0" encoding="utf-8"?>
<ModMetaData>
    <name>${modName}</name>
    <author>${author}</author>
    <packageId>${pkgAuthor}.${pkgDefName}</packageId>
    <supportedVersions>
        <li>1.4</li>
        <li>1.5</li>
    </supportedVersions>
    <modDependencies>
        <li>
            <packageId>erdelf.HumanoidAlienRaces</packageId>
            <displayName>Humanoid Alien Races</displayName>
            <steamWorkshopUrl>steam://url/CommunityFilePage/839005762</steamWorkshopUrl>
        </li>
    </modDependencies>
    <description>${description}</description>
</ModMetaData>`);

    // =============================================
    // Defs/ThingDefs_Races/[DefName].xml
    // =============================================
    const raceXml = `<?xml version="1.0" encoding="utf-8" ?>
<Defs>
  <AlienRace.ThingDef_AlienRace ParentName="BasePawn">
    <defName>${defName}</defName>
    <label>${raceLabel}</label>
    <description>${description}</description>
    <statBases>
      <MarketValue>${marketValue}</MarketValue>
      <MoveSpeed>${moveSpeed}</MoveSpeed>
      <ComfyTemperatureMin>${minTemp}</ComfyTemperatureMin>
      <ComfyTemperatureMax>${maxTemp}</ComfyTemperatureMax>
      <MeatAmount>${meatAmount}</MeatAmount>
      <LeatherAmount>${leatherAmount}</LeatherAmount>
      <ArmorRating_Blunt>${armorBlunt}</ArmorRating_Blunt>
      <ArmorRating_Sharp>${armorSharp}</ArmorRating_Sharp>
    </statBases>
    <race>
      <thinkTreeMain>Humanlike</thinkTreeMain>
      <thinkTreeConstant>HumanlikeConstant</thinkTreeConstant>
      <intelligence>Humanlike</intelligence>
      <makesFootprints>true</makesFootprints>
      <lifeExpectancy>80</lifeExpectancy>
      <diet>${diet}</diet>
      <wildness>${wildness}</wildness>
      <baseHungerRate>${hungerRate}</baseHungerRate>
      <baseBodySize>1.0</baseBodySize>
      <baseHealthScale>${healthScale}</baseHealthScale>
      <lifeStageAges>
        <li><def>HumanlikeBaby</def><minAge>0</minAge></li>
        <li><def>HumanlikeToddler</def><minAge>1.2</minAge></li>
        <li><def>HumanlikeChild</def><minAge>3</minAge></li>
        <li><def>HumanlikeTeenager</def><minAge>13</minAge></li>
        <li><def>HumanlikeAdult</def><minAge>18</minAge></li>
      </lifeStageAges>
      <soundMeleeHitPawn>Pawn_Melee_Punch_HitPawn</soundMeleeHitPawn>
      <soundMeleeHitBuilding>Pawn_Melee_Punch_HitBuilding</soundMeleeHitBuilding>
      <soundMeleeMiss>Pawn_Melee_Punch_Miss</soundMeleeMiss>
    </race>

    <alienRace>
      <generalSettings>
        <humanRecipeImport>true</humanRecipeImport>${traitsXml}
        <alienPartGenerator>
          <headTypes>
            <li>Male_AverageNormal</li>
            <li>Female_AverageNormal</li>
          </headTypes>
          <bodyTypes>
            <li>Male</li>
            <li>Female</li>
            <li>Thin</li>
            <li>Fat</li>
            <li>Hulk</li>
          </bodyTypes>${(hasHeadTex || hasBodyTex) ? `
          <colorChannels>
            <li>
              <name>skin</name>
              <first Class="ColorGenerator_Options">
                <options>
                  <li><weight>10</weight><only>RGBA(1,1,1,1)</only></li>
                </options>
              </first>
            </li>
          </colorChannels>` : ''}
        </alienPartGenerator>
      </generalSettings>
      <graphicPaths>
        ${hasBodyTex ? `<body>Things/Pawn/${defName}/Body/</body>` : '<!-- body texture path: Things/Pawn/${defName}/Body/ -->'}
        ${hasHeadTex ? `<head>Things/Pawn/${defName}/Head/</head>` : '<!-- head texture path: Things/Pawn/${defName}/Head/ -->'}
      </graphicPaths>
    </alienRace>
  </AlienRace.ThingDef_AlienRace>
</Defs>`;

    zip.folder("Defs").folder("ThingDefs_Races").file(`${defName}.xml`, raceXml);

    // =============================================
    // Defs/BackstoryDefs/[DefName]_Backstory.xml (스킬 보정이 있을 때만)
    // =============================================
    if (hasSkillBonuses) {
        const skillLinesXml = Object.entries(skillGains)
            .map(([skill, val]) => `        <${skill}>${val}</${skill}>`)
            .join('\n');

        const backstoryXml = `<?xml version="1.0" encoding="utf-8" ?>
<!--
  이 백스토리 파일은 ${modName} 종족의 스킬 보정을 적용하기 위한 파일입니다.
  종족 폰이 이 백스토리를 가질 때 스킬 보정이 적용됩니다.
  HAR에서 종족 전원에게 이 백스토리를 강제 적용하는 방법:
    → alienRace > generalSettings 에 아래를 추가하세요:
      <forcedBackstoryCategoryFilter>
        <categories><li>${defName}Origins</li></categories>
      </forcedBackstoryCategoryFilter>
-->
<Defs>
    <BackstoryDef>
        <defName>${defName}_RacialOrigin</defName>
        <title>${raceLabel} 출신</title>
        <titleShort>${raceLabel}</titleShort>
        <baseDesc>${raceLabel} 종족으로 태어나 그들만의 방식으로 성장했다.</baseDesc>
        <slot>Childhood</slot>
        <categoryOfPawn>${defName}Origins</categoryOfPawn>
        <skillGains>
${skillLinesXml}
        </skillGains>
    </BackstoryDef>
</Defs>`;
        zip.folder("Defs").folder("BackstoryDefs").file(`${defName}_Backstory.xml`, backstoryXml);
    }

    // =============================================
    // 이미지 파일 처리
    // =============================================
    if (imgPreview) {
        zip.folder("About").file("Preview.png", imgPreview);
    }

    if (hasHeadTex) {
        const headFolder = zip.folder("Textures").folder("Things").folder("Pawn").folder(defName).folder("Head");
        if (imgHeadSouth) {
            headFolder.file("Male_AverageNormal_south.png",   imgHeadSouth);
            headFolder.file("Female_AverageNormal_south.png", imgHeadSouth);
        }
        if (imgHeadNorth) {
            headFolder.file("Male_AverageNormal_north.png",   imgHeadNorth);
            headFolder.file("Female_AverageNormal_north.png", imgHeadNorth);
        }
        if (imgHeadEast) {
            headFolder.file("Male_AverageNormal_east.png",    imgHeadEast);
            headFolder.file("Female_AverageNormal_east.png",  imgHeadEast);
            headFolder.file("Male_AverageNormal_west.png",    imgHeadEast); // 게임이 자동 미러링
            headFolder.file("Female_AverageNormal_west.png",  imgHeadEast);
        }
    }

    if (hasBodyTex) {
        const bodyFolder = zip.folder("Textures").folder("Things").folder("Pawn").folder(defName).folder("Body");
        if (imgBodySouth) {
            bodyFolder.file("Naked_Male_south.png",   imgBodySouth);
            bodyFolder.file("Naked_Female_south.png", imgBodySouth);
        }
        if (imgBodyNorth) {
            bodyFolder.file("Naked_Male_north.png",   imgBodyNorth);
            bodyFolder.file("Naked_Female_north.png", imgBodyNorth);
        }
        if (imgBodyEast) {
            bodyFolder.file("Naked_Male_east.png",    imgBodyEast);
            bodyFolder.file("Naked_Female_east.png",  imgBodyEast);
            bodyFolder.file("Naked_Male_west.png",    imgBodyEast);
            bodyFolder.file("Naked_Female_west.png",  imgBodyEast);
        }
    }

    // =============================================
    // ZIP 다운로드
    // =============================================
    const btn = document.getElementById('generateBtn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '⏳ 압축 및 생성 중...';
    btn.disabled = true;

    try {
        const content = await zip.generateAsync({ type: "blob" });
        saveAs(content, `${modName.replace(/\s+/g, '_')}_RimWorldMod.zip`);
    } catch (e) {
        console.error(e);
        alert('모드 생성 중 오류가 발생했습니다: ' + e.message);
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
});
