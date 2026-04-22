# 🛸 RimWorld Mod Builder — 사용 가이드

> **대상**: RimWorld 1.4 / 1.5 + HAR(Humanoid Alien Races) 모드  
> **도구 링크**: [https://teahyen.github.io/RimmodTool/](https://teahyen.github.io/RimmodTool/)

---

## 📋 사전 준비

이 도구로 만든 모드를 사용하려면 RimWorld에 아래 모드가 **반드시** 먼저 설치되어 있어야 합니다.

| 필수 모드 | 링크 |
|-----------|------|
| **Humanoid Alien Races (HAR)** | [스팀 워크샵](https://steamcommunity.com/sharedfiles/filedetails/?id=839005762) |

> ⚠️ **모드 로드 순서**: `[HAR]` → `[만든 종족 모드]` 순서로 배치하세요.

---

## 1단계 — 모드 기본 정보 입력

| 항목 | 설명 | 예시 |
|------|------|------|
| **모드 이름 (Mod Name)** | 게임 내 모드 리스트에 표시될 이름 | `Cyber Alien Race`, `블루 엘프 종족` |
| **제작자 (Author)** | 모드 제작자 이름 (영문 권장) | `YourName` |

> 📌 제작자 이름은 내부 `packageId` 생성에도 사용됩니다.  
> 예) `YourName.MyAlienRace`

---

## 2단계 — 종족 정보 입력

| 항목 | 설명 |
|------|------|
| **종족 고유 ID (DefName)** | XML 내부에서 종족을 식별하는 코드. **영문+숫자만** 사용, 공백·특수문자 불가 |
| **게임 내 표시 이름 (Label)** | 폰의 이름 옆에 표시되는 종족 이름. 한글 사용 가능 |
| **종족 설명 (Description)** | 게임 내 종족 정보창에 표시되는 설명 문구 |

```
✅ 올바른 DefName: CyberAlien, BlueElf, MyCustomRace
❌ 잘못된 DefName: Cyber Alien, 블루엘프, My-Race
```

---

## 3단계 — 능력치 및 스탯 설정

각 항목의 기본값은 **인간(Human)과 동일한 수치**입니다.

| 항목 | 인간 기본값 | 설명 |
|------|------------|------|
| **기본 이동속도** | `4.6` | 높을수록 빠름 (최대 권장: 7.0) |
| **시장 가치 (은)** | `1750` | 폰 1명의 거래 가격 |
| **최소 쾌적 온도** | `16°C` | 이 온도 미만이면 추위 디버프 |
| **최대 쾌적 온도** | `32°C` | 이 온도 초과면 더위 디버프 |
| **체력 배율** | `1.0` | 1.5 = 더 질긴 종족 |
| **갑옷 방어력 (둔탁/날카로움)** | `0.0` | 0.0~1.0 권장. 예) 0.2 = 20% 피해 감소 |
| **허기 발생률** | `1.0` | 낮을수록 덜 굶음. 예) 0.7 |

---

## 4단계 — 생태 및 습성 설정

| 항목 | 옵션 | 설명 |
|------|------|------|
| **식성 (Diet)** | `잡식` / `육식` / `초식` | 해당 음식만 섭취 가능 |
| **야성 (Wildness)** | `0.0 ~ 1.0` | 0.0 = 완전 길듦, 1.0 = 완전 야생 |
| **도축 시 고기량** | `90` (인간 기준) | 이 종족 도축 시 획득 고기량 |
| **도축 시 가죽량** | `50` (인간 기준) | 이 종족 도축 시 획득 가죽량 |

> 💡 **플레이어블 종족**이라면 야성 값을 `0.0 ~ 0.2`로 설정하세요.  
> 야성 값이 높으면 마을 주민으로 스폰되지 않습니다.

---

## 5단계 — 특성 / 트레이트 설정

체크한 특성은 이 종족의 **모든 폰에게 강제 부여**됩니다.  
게임 내에서 삭제하거나 변경할 수 없습니다.

| 특성 | 효과 |
|------|------|
| **강인함 (Tough)** | 체력 영향치 +50%, 부상에 강함 |
| **빠른 학습자 (Fast Learner)** | 모든 스킬 XP 획득 +50% |
| **근면성실 (Industrious)** | 전체 작업 속도 +35% |
| **기민함 (Nimble)** | 갑옷 이동속도 패널티 무시 |
| **싸움꾼 (Brawler)** | 근접 +20%, 원거리 무기 거부 |
| **신중한 사격수 (Careful Shooter)** | 명중률 ↑, 발사 후 딜레이 +20% |
| **친절함 (Kind)** | 사교 능력 +10%, 타인 기분 +6 |
| **낙관론자 (Optimist)** | 기분 기준선 +6 (업무 출력 ↑) |
| **정신적 민감 (Psychically Sensitive)** | 정신력 민감도 +25%, 심리 공격 취약↑ |
| **야행성 (Night Owl)** | 야간 기분 +15, 수면 필요↓ |

> ⚠️ **강인함 + 근면성실 + 빠른 학습자**를 모두 주면 매우 강력한 종족이 됩니다. 밸런스를 고려하세요.

---

## 6단계 — 스킬 보정 설정

종족이 특정 스킬에 보너스 / 패널티를 가지도록 설정합니다.

| 값 | 의미 |
|----|------|
| `0` | 보정 없음 (기본값) |
| `+` 양수 | 해당 스킬 시작값 증가 |
| `-` 음수 | 해당 스킬 시작값 감소 |
| 권장 범위 | `-20 ~ +20` |

**예시:**
```
사격 +8, 근접 -4  →  원거리 전투 특화 종족
의학 +10, 사교 +5  →  치료사 종족
```

> 📁 스킬 보정은 ZIP 파일 내 `Defs/BackstoryDefs/[종족명]_Backstory.xml`로 출력됩니다.  
> 이 백스토리를 종족의 기본 백스토리로 배정해야 적용됩니다.

---

## 7단계 — 텍스처 (이미지) 설정

각 방향별 **PNG 이미지**가 필요합니다.

### 얼굴 (Head) 텍스처

| 방향 | 설명 |
|------|------|
| **South (남쪽/정면)** | 폰이 아래를 볼 때 표시됨 (가장 많이 보임) |
| **North (북쪽/뒷면)** | 폰이 위를 볼 때 표시됨 |
| **East (동쪽/우측)** | 폰이 오른쪽을 볼 때 표시됨 |
| **West (서쪽/좌측)** | East 이미지를 자동으로 좌우 반전하여 적용 |

### 몸통 (Body) 텍스처

| 방향 | 설명 |
|------|------|
| **South (남쪽/정면)** | 정면 몸통 |
| **North (북쪽/뒷면)** | 뒷면 몸통 |
| **East (동쪽/우측)** | 옆면 몸통 |
| **West (서쪽/좌측)** | East 이미지를 자동으로 좌우 반전 |

### 이미지 규격

| 항목 | 요구사항 |
|------|----------|
| **파일 형식** | `.png` (반드시 **투명 배경**) |
| **권장 해상도** | `64×64px` 또는 `128×128px` |
| **파일 크기** | 1MB 이하 권장 |

### 모드 미리보기 (Preview)

- JPG/PNG 모두 가능 (배경 불투명해도 됨)
- 권장 해상도: `600×400px`

> ✅ **이미지 없이도 모드 생성은 가능합니다.**  
> 이미지 없는 경우 바닐라 인간 텍스처를 그대로 사용합니다.

---

## 모드 생성 및 설치 방법

### STEP 1. 모드 생성

[🚀 모드 생성 및 다운로드] 버튼 클릭  
→ 브라우저가 `.zip` 파일을 자동으로 다운로드합니다.

### STEP 2. ZIP 파일 압축 해제

압축 해제하면 `[ModName]_RimWorldMod` 폴더가 생성됩니다.

### STEP 3. RimWorld 모드 폴더에 복사

**로컬 저장 경로:**
```
C:\Users\[사용자명]\AppData\LocalLow\Ludeon Studios\RimWorld by Ludeon Studios\Mods\
```

**스팀 기준 경로:**
```
C:\Program Files (x86)\Steam\steamapps\common\RimWorld\Mods\
```

### STEP 4. 게임에서 모드 활성화

RimWorld 실행 → **Mods** 메뉴 → 방금 추가한 모드 활성화

### STEP 5. 모드 로드 순서 확인

```
[Humanoid Alien Races] → [내 종족 모드]
```

순서가 잘못되면 종족이 정상적으로 로드되지 않습니다.

### STEP 6. 게임 재시작 후 확인

게임을 저장 후 재시작 → 새 게임에서 종족 확인

---

## ZIP 파일 내부 구조

```
[ModName]_RimWorldMod/
├── About/
│   ├── About.xml               ← 모드 메타데이터
│   └── Preview.png             ← 모드 미리보기 (업로드 시만 포함)
│
├── Defs/
│   ├── ThingDefs_Races/
│   │   └── [DefName].xml       ← 종족 메인 정의 파일
│   │
│   └── BackstoryDefs/          ← 스킬 보정이 있을 때만 생성
│       └── [DefName]_Backstory.xml
│
└── Textures/                   ← 이미지 업로드 시에만 생성
    └── Things/Pawn/[DefName]/
        ├── Head/
        │   ├── Male_AverageNormal_south.png
        │   ├── Male_AverageNormal_north.png
        │   ├── Male_AverageNormal_east.png
        │   ├── Male_AverageNormal_west.png
        │   └── Female_AverageNormal_*.png
        └── Body/
            ├── Naked_Male_south.png
            ├── Naked_Male_north.png
            ├── Naked_Male_east.png
            ├── Naked_Male_west.png
            └── Naked_Female_*.png
```

---

## ❓ 자주 묻는 질문 (FAQ)

### Q. 모드가 로드는 되는데 종족이 게임에 안 나와요.
**A.** HAR 모드가 내 종족 모드보다 먼저 로드되고 있는지 확인하세요.  
모드 로드 순서: `HAR → 내 종족 모드`

---

### Q. 텍스처가 분홍색(오류)으로 표시돼요.
**A.** 이미지 파일 경로나 이름이 잘못된 것입니다.  
파일명의 대소문자까지 정확한지 확인하세요.  
예) `Naked_Male_south.png` (s는 **소문자**)

---

### Q. 종족이 게임에 스폰되지 않아요.
**A.** 야성(Wildness) 값을 `0.0 ~ 0.1`로 낮춰보세요.  
야성 값이 너무 높으면 마을 사람으로 스폰되지 않습니다.

---

### Q. 스킬 보정이 게임에서 적용이 안 돼요.
**A.** 스킬 보정은 `BackstoryDef` 파일로 생성됩니다.  
해당 백스토리를 종족에 직접 배정해야 활성화됩니다.  
HAR의 `forcedBackstoryCategoryFilter` 옵션을 사용하세요.  
(생성된 XML 파일 내 주석 참고)

---

### Q. 이미지 파일 업로드가 잘 안 돼요.
**A.** 이 도구는 GitHub Pages에 호스팅되어 있으며 이미 HTTP 환경에서 동작 중입니다.  
업로드가 안 된다면 아래를 확인해 보세요:
- 브라우저가 최신 버전인지 확인 (Chrome / Edge 권장)
- 파일 형식이 `.png`인지 확인 (Head / Body 텍스처는 PNG만 가능)
- 파일 크기가 너무 크지 않은지 확인 (1MB 이하 권장)

> 💡 **로컬에서 직접 파일을 열어서 (file://) 실행하면 보안 오류가 발생합니다.**  
> 반드시 [https://teahyen.github.io/RimmodTool/](https://teahyen.github.io/RimmodTool/) 링크로 접속하세요.

---

## 🔧 고급 편집 Tips

생성된 XML 파일을 직접 편집하면 더 많은 기능을 추가할 수 있습니다.

| 기능 | 방법 |
|------|------|
| **종족 스킨 색상 범위 설정** | `colorChannels`의 `ColorGenerator_Options` 옵션 추가 |
| **특수 신체 부위 추가** (뿔, 꼬리 등) | `alienPartGenerator > bodyAddons` 항목 활용 |
| **특정 의복 착용 불가 설정** | `alienRace > raceRestriction > disallowedClothes` |
| **관계 설정** (적대/우호 종족) | `alienRace > relations` 항목 활용 |

📖 자세한 HAR 공식 문서: [https://github.com/erdelf/AlienRaces/wiki](https://github.com/erdelf/AlienRaces/wiki)

---

> 이 도구에 대한 문의나 개선 요청은 제작자에게 해주세요.  
> **RimWorld Mod Builder** | GitHub: [teahyen/RimmodTool](https://github.com/teahyen/RimmodTool)
