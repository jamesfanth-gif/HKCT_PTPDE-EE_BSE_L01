function escapeHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

const typeLabels = {
  trace: '<span class="q-type q-type-trace">📊 Calculation & Trace</span>',
  compare: '<span class="q-type q-type-compare">⚖️ Comparative Analysis</span>',
  scenario: '<span class="q-type q-type-scenario">🎯 Scenario & Application</span>',
  concept: '<span class="q-type q-type-concept">💭 Concept & Fundamentals</span>',
  explain: '<span class="q-type q-type-explain">🔍 Engineering Synthesis</span>'
};

const lessonLabels = {
  L1: 'L1 Space Heating & Energy Recovery'
};

// =======================================================
// 12 TOPICS WITH HIGH-PRECISION SCADA ANIMATED SCHEMATICS
// =======================================================
const notesData = [
  {
    id: 't1', icon: '1', title: 'Direct vs Indirect Space Heating Methods',
    titleZh: '直接局部供熱 vs 間接集中供熱',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <!-- Left: Direct Heating -->
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#e67e22" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#f39c12">DIRECT (Local) Heating (直接局部供熱)</text>
        <rect x="30" y="50" width="280" height="100" fill="#1a252f" stroke="#e67e22" rx="4"/>
        <rect x="130" y="80" width="80" height="55" fill="#78281f" stroke="#e74c3c" rx="4"/>
        <!-- Flame animation -->
        <path d="M 170 125 C 150 105, 190 105, 170 90 C 160 80, 180 80, 170 65" fill="none" stroke="#f1c40f" stroke-width="4"/>
        <text x="170" y="148" text-anchor="middle" font-size="8.5" fill="#fff" font-weight="bold">Firebox / Burner in Room</text>
        <!-- Local flue vent -->
        <path d="M 170 65 L 170 38 L 220 38" fill="none" stroke="#7f8c8d" stroke-width="3" stroke-dasharray="3 2"/>
        <text x="255" y="42" font-size="8" fill="#bdc3c7">Flue Gas Vent</text>
        <rect x="20" y="165" width="300" height="85" fill="#111" stroke="#e67e22" rx="4"/>
        <text x="170" y="185" text-anchor="middle" font-size="10" fill="#f39c12" font-weight="bold">Fuel consumed inside occupied space:</text>
        <text x="170" y="205" text-anchor="middle" font-size="8.5" fill="#ecf0f1">• Open fire, closed stoves, gas-fired natural convectors</text>
        <text x="170" y="222" text-anchor="middle" font-size="8.5" fill="#bdc3c7">• Instant heat generation, but poor multizone control</text>
        <text x="170" y="238" text-anchor="middle" font-size="8.5" fill="#e74c3c">• Risk of indoor combustion products (CO, NOx, soot)</text>
      </g>
      <!-- Right: Indirect Central Heating -->
      <g class="scada-unit" transform="translate(385, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#16a085" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#1abc9c">INDIRECT (Central) Heating (間接集中供熱)</text>
        <!-- Remote Boiler in Basement -->
        <rect x="25" y="55" width="90" height="80" fill="#78281f" stroke="#c0392b" rx="4"/>
        <text x="70" y="90" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Remote</text>
        <text x="70" y="105" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Boiler Plant</text>
        <!-- Distribution Supply / Return -->
        <path d="M 115 75 L 240 75" stroke="#e74c3c" stroke-width="4" class="flow-hot-water"/>
        <text x="175" y="68" text-anchor="middle" font-size="8" fill="#e74c3c" font-weight="bold">Supply Pipe</text>
        <path d="M 240 115 L 115 115" stroke="#2980b9" stroke-width="4" class="flow-return-water"/>
        <text x="175" y="130" text-anchor="middle" font-size="8" fill="#2980b9" font-weight="bold">Return Pipe</text>
        <!-- Room Radiator -->
        <rect x="240" y="60" width="75" height="70" fill="#1a252f" stroke="#16a085" rx="3"/>
        <text x="277" y="95" text-anchor="middle" font-size="9" fill="#1abc9c" font-weight="bold">Room</text>
        <text x="277" y="110" text-anchor="middle" font-size="8.5" fill="#fff">Radiator</text>
        <rect x="20" y="165" width="300" height="85" fill="#111" stroke="#16a085" rx="4"/>
        <text x="170" y="185" text-anchor="middle" font-size="10" fill="#1abc9c" font-weight="bold">Fuel consumed remotely in plant room:</text>
        <text x="170" y="205" text-anchor="middle" font-size="8.5" fill="#ecf0f1">• Energy transported via medium: Warm air, water, steam</text>
        <text x="170" y="222" text-anchor="middle" font-size="8.5" fill="#bdc3c7">• Centralized flue emissions and automated control</text>
        <text x="170" y="238" text-anchor="middle" font-size="8.5" fill="#abebc6">• Keeps combustion hazards out of occupied spaces</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 1: Heating methods: Direct local combustion (fuel consumed inside room) vs Indirect central heating (heat generated remotely and delivered via water/air/steam)',
    sections: [
      {
        title: 'Two Fundamental Space Heating Categories / 兩大空間供熱方式',
        zh: '<p>空間供熱方法依燃料燃燒位置分為兩大類[cite: 13]：</p><ul><li><strong>直接 (Direct / Local) 供熱</strong>：燃料直接在需要加熱的空間內部燃燒[cite: 13]。例如明火壁爐 (open fire)、密閉火爐 (closed stove) 及燃氣自然對流取暖器[cite: 13]。優點是發熱即時，但燃燒廢氣（CO、NOx、煙塵）直接釋放在室內，且難以實現多區域精準溫控[cite: 13]；</li><li><strong>間接 (Indirect / Central) 供熱</strong>：燃料在遠離起居空間的專用機房（如地庫鍋爐房）集中燃燒，熱能透過「加熱傳熱介質」輸送到各個房間的散熱終端[cite: 13]。常見介質為<strong>暖風 (warm-air)、熱水 (hot-water) 與蒸汽 (steam)</strong>[cite: 13]。燃燒產物集中排放，安全性高、控制靈活[cite: 13]。</li></ul>',
        en: '<p>Space heating is grouped into two distinct categories[cite: 13]:</p><ul><li><strong>Direct (Local) heating</strong>: Fuel is consumed directly inside the space being heated (open fire, closed stove, gas-fired natural convectors)[cite: 13]. Instantaneous heat, but introduces indoor combustion hazards and poor multizone modulation[cite: 13];</li><li><strong>Indirect (Central) heating</strong>: Fuel is burnt in a remote plant room; thermal energy is carried to terminal units via a heat-transfer medium (<strong>warm-air, hot-water, or steam</strong>)[cite: 13]. Isolate flue gases from occupants while allowing centralized automation[cite: 13].</li></ul>'
      }
    ]
  },
  {
    id: 't2', icon: '2', title: 'Warm-Air Heating Systems & Basement Furnaces',
    titleZh: '暖風供熱系統與地庫加熱風道佈置',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Warm-Air Heating System Infrastructure (暖風供熱系統幾何佈置)</text>
        <line x1="40" y1="160" x2="660" y2="160" stroke="#7f8c8d" stroke-width="2" stroke-dasharray="6 3"/>
        <text x="60" y="152" font-size="9" fill="#bdc3c7">Ground Level (地面)</text>
        <!-- Basement Furnace Room -->
        <rect x="60" y="170" width="140" height="75" fill="#1a252f" stroke="#e67e22" stroke-width="2" rx="4"/>
        <text x="130" y="195" text-anchor="middle" font-size="10" fill="#f39c12" font-weight="bold">Basement Furnace</text>
        <circle cx="170" cy="215" r="14" fill="#34495e"/>
        <text x="170" y="219" text-anchor="middle" font-size="7.5" fill="#fff">Blower</text>
        <!-- Main Supply Trunk Duct -->
        <path d="M 200 215 L 620 215" stroke="#e67e22" stroke-width="8" class="flow-air-stream"/>
        <text x="380" y="235" text-anchor="middle" font-size="9" fill="#f39c12">Under-floor / In-wall Main Ducts</text>
        <!-- Risers into 3 Rooms -->
        <path d="M 270 215 L 270 120" stroke="#e67e22" stroke-width="5" class="flow-air-stream"/>
        <rect x="240" y="70" width="60" height="50" fill="#1b4f72" stroke="#3498db" rx="3"/>
        <text x="270" y="95" text-anchor="middle" font-size="8" fill="#fff">Room A</text>
        
        <path d="M 420 215 L 420 120" stroke="#e67e22" stroke-width="5" class="flow-air-stream"/>
        <rect x="390" y="70" width="60" height="50" fill="#1b4f72" stroke="#3498db" rx="3"/>
        <text x="420" y="95" text-anchor="middle" font-size="8" fill="#fff">Room B</text>

        <path d="M 570 215 L 570 120" stroke="#e67e22" stroke-width="5" class="flow-air-stream"/>
        <rect x="540" y="70" width="60" height="50" fill="#1b4f72" stroke="#3498db" rx="3"/>
        <text x="570" y="95" text-anchor="middle" font-size="8" fill="#fff">Room C</text>
        
        <!-- Summary Callout -->
        <rect x="40" y="45" width="180" height="85" fill="#111" stroke="#f39c12" rx="4"/>
        <text x="130" y="65" text-anchor="middle" font-size="9.5" fill="#f39c12" font-weight="bold">Characteristics &amp; Limits:</text>
        <text x="10" y="82" font-size="8" fill="#fff">• Simple &amp; direct heat delivery</text>
        <text x="10" y="96" font-size="8" fill="#ecf0f1">• Airflow driven by gravity or fan</text>
        <text x="10" y="110" font-size="8" fill="#e74c3c">• Bulky ducts consume floor space</text>
        <text x="10" y="124" font-size="8" fill="#f1c40f">• Used ONLY in small 1-2 family houses</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 2: Warm-air heating layout: Basement furnace and centrifugal blower delivering air through under-floor risers; strictly restricted to small low-rise houses',
    sections: [
      {
        title: 'Warm-Air System Infrastructure / 暖風系統運作與利弊',
        zh: '<p><strong>暖風系統 (Warm-air system)</strong> 在通常設於地庫的燃燒爐房 (Furnace room) 內利用暖風爐加熱空氣，隨後透過地底或牆體夾層內的大型風管 (Ducts) 輸送至各房間[cite: 13]。氣流可由<strong>重力熱壓效應 (gravity effect)</strong> 自然循環，或由<strong>送風風機 (fan)</strong> 強制驅動[cite: 13]。</p>',
        en: '<p>In a <strong>warm-air system</strong>, air heated in a furnace room (typically basement) is conveyed via under-floor or in-wall ducts, propelled by gravity or a fan[cite: 13].</p>'
      },
      {
        title: 'Application Boundaries & Limitations / 應用局限',
        zh: '<div class="key-point"><strong>嚴格建築限制（Slide 4）：</strong><br>• <strong>優點</strong>：系統構造簡單、直接[cite: 13]；<br>• <strong>缺點</strong>：空氣容積比熱容極小，<strong>風管尺寸極為龐大 (Bulky duct sizes)</strong>，嚴重佔用建築淨高；且氣流<strong>傳熱距離較短 (relatively short distance)</strong>[cite: 13]；<br>• <strong>適用範圍</strong>：<strong>僅適用於一戶或兩戶的小型低層住宅 (small buildings such as 1–2 family houses)</strong>，絕對無法應用於大型高層商業建築[cite: 13]。</div>',
        en: '<div class="key-point"><strong>Key Constraints (Slide 4):</strong><br>• <strong>Pros</strong>: Simple and direct[cite: 13];<br>• <strong>Cons</strong>: Bulky duct sizes and short transport distance[cite: 13];<br>• <strong>Application</strong>: Used <strong>only in small buildings such as one- or two-family residential houses</strong>[cite: 13].</div>'
      }
    ]
  },
  {
    id: 't3', icon: '3', title: 'Hot-Water Heating Systems & Rapid Response',
    titleZh: '熱水供熱系統循環與熱負荷快速響應優勢',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Hydronic Hot-Water System Architecture (熱水供熱管網循環)</text>
        <!-- Boiler -->
        <rect x="50" y="70" width="100" height="110" fill="#78281f" stroke="#c0392b" stroke-width="2" rx="4"/>
        <text x="100" y="115" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold">BOILER</text>
        <text x="100" y="135" text-anchor="middle" font-size="9" fill="#f5b7b1">鍋爐</text>
        <!-- Pump -->
        <circle cx="185" cy="160" r="15" fill="#16a085"/>
        <text x="185" y="164" text-anchor="middle" font-size="8.5" fill="#fff" font-weight="bold">Pump</text>
        <!-- Supply Pipe (Top) -->
        <path d="M 150 85 L 640 85" stroke="#e74c3c" stroke-width="5" class="flow-hot-water"/>
        <text x="370" y="75" text-anchor="middle" font-size="9.5" fill="#e74c3c" font-weight="bold">Hot Water Supply Main (70–90 °C)</text>
        <!-- Return Pipe (Bottom) -->
        <path d="M 640 160 L 200 160" stroke="#2980b9" stroke-width="5" class="flow-return-water"/>
        <text x="370" y="178" text-anchor="middle" font-size="9.5" fill="#2980b9" font-weight="bold">Cool Water Return Main</text>
        <!-- Terminal Radiators -->
        <g transform="translate(250, 95)">
          <rect x="0" y="0" width="55" height="55" fill="#1a252f" stroke="#e74c3c" rx="3"/>
          <text x="27" y="32" text-anchor="middle" font-size="8" fill="#fff">Rad 1</text>
        </g>
        <g transform="translate(390, 95)">
          <rect x="0" y="0" width="55" height="55" fill="#1a252f" stroke="#e74c3c" rx="3"/>
          <text x="27" y="32" text-anchor="middle" font-size="8" fill="#fff">Rad 2</text>
        </g>
        <g transform="translate(530, 95)">
          <rect x="0" y="0" width="55" height="55" fill="#1a252f" stroke="#e74c3c" rx="3"/>
          <text x="27" y="32" text-anchor="middle" font-size="8" fill="#fff">Rad 3</text>
        </g>
        <rect x="40" y="195" width="620" height="50" fill="#111" stroke="#1abc9c" rx="4"/>
        <text x="350" y="215" text-anchor="middle" font-size="10" fill="#1abc9c" font-weight="bold">Three Advantages of Hot-Water over Warm-Air (Slide 5):</text>
        <text x="350" y="233" text-anchor="middle" font-size="9" fill="#ecf0f1">1. Pipes occupy far less space than ducts | 2. Responds quickly &amp; uniformly to load changes | 3. Economical output matching (minimizes overheating).</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 3: Closed hot-water system: Boiler and circulation pump distributing hot water to space heating terminals with rapid response and compact pipework',
    sections: [
      {
        title: 'Hot-Water System Mechanics & Three Advantages / 熱水系統運作與三大優勢',
        zh: '<p>鍋爐將水加熱後，由水泵透過密閉管網輸送至房間內的散熱末端設備（如散熱器 Radiator、對流器 Convector 或輻射板 Panel）[cite: 13]。</p><div class="key-point"><strong>相較於暖風系統的三大顯著優勢（Slide 5）：</strong><br>1. <strong>管路佔用空間極小 (Pipes occupy smaller space than ducts)</strong>，節省天花與豎井建築面積[cite: 13]；<br>2. <strong>響應迅速且均勻 (Responds quickly and uniformly)</strong>，對室內熱負荷波動靈敏調整[cite: 13]；<br>3. <strong>易於經濟配對負荷需求</strong>，能有效防止室內過熱 (overheating minimised)，大幅節省燃料[cite: 13]。</div>',
        en: '<p>Hot water generated in a central boiler is pumped through piping to terminal heat emitters[cite: 13].</p><div class="key-point"><strong>Three Major Advantages (Slide 5):</strong><br>1. Water pipes occupy significantly <strong>smaller space than bulky warm-air ducts</strong>[cite: 13];<br>2. The hydronic system <strong>responds quickly and uniformly</strong> to thermal load variations[cite: 13];<br>3. It is highly <strong>economical to match heat output to actual demand</strong>, minimizing overheating[cite: 13].</div>'
      }
    ]
  },
  {
    id: 't4', icon: '4', title: 'Hot Water Classification by Design Temperature',
    titleZh: '熱水系統按水溫四大分級與管徑耐壓取捨',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">System Classification by Design Temperature Range (熱水系統四個溫度等級)</text>
        <g transform="translate(30, 45)">
          <rect x="0" y="0" width="640" height="30" fill="#f39c12" opacity="0.6"/>
          <text x="15" y="20" font-size="10" fill="#fff" font-weight="bold">(a) Low Temperature Warm Water: 40 °C – 70 °C</text>
          <text x="620" y="20" font-size="9" fill="#111" text-anchor="end">Floor panels / Heat pumps</text>
          
          <rect x="0" y="38" width="640" height="30" fill="#e67e22" opacity="0.8"/>
          <text x="15" y="58" font-size="10" fill="#fff" font-weight="bold">(b) Low Temperature Hot Water (LTHW): 70 °C – 100 °C</text>
          <text x="620" y="58" font-size="9" fill="#111" text-anchor="end">Standard building radiators</text>

          <rect x="0" y="76" width="640" height="30" fill="#c0392b" opacity="0.85"/>
          <text x="15" y="96" font-size="10" fill="#fff" font-weight="bold">(c) Medium Temperature Hot Water (MTHW): 110 °C – 130 °C</text>
          <text x="620" y="96" font-size="9" fill="#fff" text-anchor="end">District circulation / Factories</text>

          <rect x="0" y="114" width="640" height="30" fill="#8e44ad" opacity="0.9"/>
          <text x="15" y="134" font-size="10" fill="#fff" font-weight="bold">(d) High Temperature Hot Water (HTHW): 140 °C – 180 °C</text>
          <text x="620" y="134" font-size="9" fill="#fff" text-anchor="end">Long distance multigroup campus</text>
        </g>
        <rect x="30" y="195" width="640" height="50" fill="#111" stroke="#f1c40f" rx="4"/>
        <text x="350" y="215" text-anchor="middle" font-size="10.5" fill="#f1c40f" font-weight="bold">Engineering Trade-off (Slide 6): Higher Temperature ➔ Stores more heat per kg ➔ Smaller pipe diameter!</text>
        <text x="350" y="233" text-anchor="middle" font-size="9.5" fill="#ecf0f1">Penalty: Requires heavier, thicker pipe walls and high-pressure fittings to resist elevated saturation working pressures.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 4: Four water heating temperature bands: Higher operating temperatures maximize heat carrying density per kg, enabling smaller pipe bores for long-distance district distribution',
    sections: [
      {
        title: 'Four Design Temperature Bands / 四個溫度範圍標準',
        zh: '<p>根據供水設計溫度，熱水系統分為四大等級[cite: 13]：</p><div class="formula-block">(a) 低溫暖水 (Low temperature warm water):   40 – 70  °C\n(b) 低溫熱水 (Low temperature hot water):    70 – 100 °C\n(c) 中溫熱水 (Medium temperature hot water): 110 – 130 °C\n(d) 高溫熱水 (High temperature hot water):   140 – 180 °C</div>',
        en: '<p>Water systems are grouped by design operating temperature[cite: 13]:</p><div class="formula-block">(a) Low temperature warm water:      40 – 70  °C\n(b) Low temperature hot water:       70 – 100 °C\n(c) Medium temperature hot water:   110 – 130 °C\n(d) High temperature hot water:     140 – 180 °C</div>'
      },
      {
        title: 'Thermal & Structural Trade-offs / 水力與結構權衡',
        zh: '<div class="key-point"><strong>工程取捨（Slide 6）：</strong> 水溫越高，每千克水所蓄含的熱量越多，因此輸送相同熱量所需的<strong>管道直徑更小 (smaller pipe sizes)</strong>[cite: 13]。但由於高於 100°C 的水處於受壓過熱狀態，<strong>管材必須加厚加重 (heavier pipes)</strong> 以抵抗高工作壓力[cite: 13]。中溫與高溫系統廣泛應用於大型集中建築群或校園的長途輸送管網[cite: 13]。</div>',
        en: '<div class="key-point"><strong>Trade-off (Slide 6):</strong> Higher temperatures allow water to store more heat per kg, enabling <strong>smaller pipe diameters</strong>[cite: 13]. However, <strong>heavier, thick-walled pipes</strong> are required to contain high working pressures[cite: 13]. Used for long-distance multi-building circulation[cite: 13].</div>'
      }
    ]
  },
  {
    id: 't5', icon: '5', title: 'Radiator Piping: Single-Pipe vs Two-Pipe Reverse-Return',
    titleZh: '單管串聯遞減 vs 雙管同程水力自平衡管路',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <!-- Left: Single-Pipe Series -->
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#e74c3c" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#e74c3c">Single-Pipe Circuit (單管串聯回路)</text>
        <rect x="30" y="120" width="40" height="50" fill="#78281f" stroke="#c0392b" rx="2"/>
        <text x="50" y="150" text-anchor="middle" font-size="8" fill="#fff">Boiler</text>
        <!-- Single Loop -->
        <path d="M 70 130 L 120 130 L 120 65 L 180 65 M 180 65 L 240 65 M 240 65 L 300 65 L 300 170 L 70 170" fill="none" stroke="#e74c3c" stroke-width="3.5" class="flow-hot-water"/>
        <!-- Radiators with drop temps -->
        <rect x="120" y="70" width="35" height="35" fill="#1a252f" stroke="#e74c3c"/>
        <text x="137" y="90" text-anchor="middle" font-size="8" fill="#fff">Rad A</text>
        <text x="137" y="120" text-anchor="middle" font-size="7.5" fill="#e74c3c">100°C</text>
        <rect x="180" y="70" width="42" height="35" fill="#1a252f" stroke="#e67e22"/>
        <text x="201" y="90" text-anchor="middle" font-size="8" fill="#fff">Rad B</text>
        <text x="201" y="120" text-anchor="middle" font-size="7.5" fill="#f39c12">85°C</text>
        <rect x="240" y="70" width="50" height="35" fill="#1a252f" stroke="#3498db"/>
        <text x="265" y="90" text-anchor="middle" font-size="8" fill="#fff">Rad C</text>
        <text x="265" y="120" text-anchor="middle" font-size="7.5" fill="#3498db">70°C</text>
        <rect x="20" y="180" width="300" height="70" fill="#111" stroke="#e74c3c" rx="4"/>
        <text x="170" y="200" text-anchor="middle" font-size="9.5" fill="#f5b7b1" font-weight="bold">Water cools progressively along pipe:</text>
        <text x="170" y="218" text-anchor="middle" font-size="8.5" fill="#ecf0f1">Cool return water re-enters common pipe.</text>
        <text x="170" y="235" text-anchor="middle" font-size="8.5" fill="#f1c40f">Later radiators MUST be larger for equal output!</text>
      </g>
      <!-- Right: Two-Pipe Reverse-Return -->
      <g class="scada-unit" transform="translate(385, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#2ecc71" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#2ecc71">Two-Pipe Reverse-Return (雙管同程回路)</text>
        <rect x="30" y="120" width="40" height="50" fill="#78281f" stroke="#c0392b" rx="2"/>
        <text x="50" y="150" text-anchor="middle" font-size="8" fill="#fff">Boiler</text>
        <!-- Supply Header -->
        <path d="M 70 130 L 110 130 L 110 60 L 290 60" fill="none" stroke="#e74c3c" stroke-width="3" class="flow-hot-water"/>
        <!-- Reverse-Return Header -->
        <path d="M 130 115 L 130 140 L 290 140 L 310 140 L 310 170 L 70 170" fill="none" stroke="#2980b9" stroke-width="3" class="flow-return-water"/>
        <!-- Parallel Radiators with same temp -->
        <rect x="130" y="75" width="40" height="40" fill="#1a252f" stroke="#2ecc71"/>
        <text x="150" y="98" text-anchor="middle" font-size="8" fill="#fff">Rad A</text>
        <rect x="190" y="75" width="40" height="40" fill="#1a252f" stroke="#2ecc71"/>
        <text x="210" y="98" text-anchor="middle" font-size="8" fill="#fff">Rad B</text>
        <rect x="250" y="75" width="40" height="40" fill="#1a252f" stroke="#2ecc71"/>
        <text x="270" y="98" text-anchor="middle" font-size="8" fill="#fff">Rad C</text>
        <rect x="20" y="180" width="300" height="70" fill="#111" stroke="#2ecc71" rx="4"/>
        <text x="170" y="200" text-anchor="middle" font-size="9.5" fill="#2ecc71" font-weight="bold">Parallel Feed + Equal Total Length:</text>
        <text x="170" y="218" text-anchor="middle" font-size="8.5" fill="#ecf0f1">Every radiator receives identical supply water temp.</text>
        <text x="170" y="235" text-anchor="middle" font-size="8.5" fill="#f1c40f">Total friction loss equal ➔ Natural flow balancing!</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 5: Single-pipe series (water temperature drops along loop, requiring larger downstream units) vs Two-pipe reverse-return (equal circuit lengths, identical supply temperature, self-balancing)',
    sections: [
      {
        title: 'Single-Pipe Circuit / 單管回路特徵與缺陷',
        zh: '<p><strong>單管系統 (Single-pipe circuit)</strong> 由單一管道串聯所有散熱器[cite: 13]：</p><p>前端散熱器 A 散熱後的冷卻水重新匯入主幹管，導致水溫沿流向<strong>逐級下降</strong>[cite: 13]。若要維持每個房間相同的供暖輸出，<strong>後續的散熱器 B、C 物理面積必須逐級加大 (successive radiators must be larger)</strong>[cite: 13]。</p>',
        en: '<p>A <strong>single-pipe system</strong> connects all radiators in series on a single pipe[cite: 13]. Cooled water from each radiator dumps back into the main line, so water temperature drops progressively[cite: 13]. Later radiators must be sized progressively <strong>larger</strong> to deliver equal capacity[cite: 13].</p>'
      },
      {
        title: 'Two-Pipe Reverse-Return / 雙管同程回路自平衡優勢',
        zh: '<p><strong>雙管同程系統 (Two-pipe reverse-return circuit)</strong> 將所有散熱器並聯在供水管與回水管之間[cite: 13]：</p><div class="key-point"><strong>水力自平衡特性（Slide 9）：</strong> 供水管先送到的散熱器，其回水管順延至最遠端再匯總折返（First fed, last returned）[cite: 13]。使每個散熱器迴路的<strong>總管長完全相等、管阻相同，流量自然平衡 (flow rate balances naturally)</strong>，且各散熱器接收完全相同的鍋爐出水溫度[cite: 13]。</div>',
        en: '<p>In a <strong>two-pipe reverse-return system</strong>, radiators are piped in parallel[cite: 13].</p><div class="key-point"><strong>Self-Balancing (Slide 9):</strong> Each loop has the same total pipe length, creating equal friction loss so flow balances naturally while delivering identical supply temperatures[cite: 13].</div>'
      }
    ]
  },
  {
    id: 't6', icon: '6', title: 'Steam Heating Systems: Gravity Returns & District CHP',
    titleZh: '低壓蒸汽供熱系統、乾濕回流與區域熱電聯產',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Low-Pressure Steam Heating: Dry vs Wet Gravity Return &amp; District CHP (蒸汽供熱管網)</text>
        <!-- Steam Boiler & Radiators -->
        <rect x="40" y="80" width="80" height="85" fill="#78281f" stroke="#c0392b" rx="4"/>
        <text x="80" y="115" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Steam Boiler</text>
        <line x1="80" y1="135" x2="80" y2="135" stroke="#3498db" stroke-width="3"/>
        <text x="80" y="148" text-anchor="middle" font-size="7.5" fill="#5dade2">Water Line</text>
        <!-- Overhead Steam Main -->
        <path d="M 80 80 L 80 50 L 620 50" stroke="#ecf0f1" stroke-width="5" class="flow-steam"/>
        <text x="350" y="42" text-anchor="middle" font-size="9" fill="#ecf0f1" font-weight="bold">Steam Supply Pipe (Sensible + Latent Heat)</text>
        <!-- Condensate Dry Return Line (Above water line) -->
        <path d="M 620 100 L 120 100" stroke="#2980b9" stroke-width="3.5" class="flow-return-water"/>
        <text x="350" y="93" text-anchor="middle" font-size="8.5" fill="#5dade2">Dry Return: Condensate pipe ABOVE boiler water line</text>
        <!-- Condensate Wet Return Line (Below water line) -->
        <path d="M 620 155 L 120 155" stroke="#2980b9" stroke-width="3.5" stroke-dasharray="4 2"/>
        <text x="350" y="170" text-anchor="middle" font-size="8.5" fill="#abebc6">Wet Return: Condensate pipe BELOW boiler water line</text>
        <!-- District CHP Box -->
        <rect x="40" y="195" width="620" height="55" fill="#111" stroke="#1abc9c" rx="4"/>
        <text x="350" y="215" text-anchor="middle" font-size="10.5" fill="#fff"><strong>District Heating &amp; Combined Heat and Power (CHP):</strong> Utility companies supply bulk steam to populated urban districts.</text>
        <text x="350" y="235" text-anchor="middle" font-size="9.5" fill="#f1c40f">Pros: Massive latent heat capacity allows long-distance transport. Cons: Condensate disposal &amp; air elimination from pipelines.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 6: Low-pressure steam systems: Overhead steam main, Dry return (above boiler water line), Wet return (below water line), and District CHP networks',
    sections: [
      {
        title: 'Steam System Mechanics & Return Arrangements / 蒸汽供熱與乾濕回流',
        zh: '<p>蒸汽供熱利用鍋爐產生蒸汽輸送至末端，利用相變<strong>汽化潛熱 (Latent heat)</strong> 進行高效放熱[cite: 13]。常見低壓蒸汽系統包含單管與雙管重力回流[cite: 13]：</p><ul><li><strong>乾回流 (Dry return)</strong>：凝結水回收管路敷設在<strong>鍋爐正常水位線之上</strong>[cite: 13]；</li><li><strong>濕回流 (Wet return)</strong>：凝結水回收管路敷設在<strong>鍋爐正常水位線之下</strong>，管內始終充滿凝結水[cite: 13]。</li></ul>',
        en: '<p>Steam systems utilize the latent heat of condensation for space heating[cite: 13]:</p><ul><li><strong>Dry return</strong>: Condensate piping is installed <strong>above the boiler water level</strong>[cite: 13];</li><li><strong>Wet return</strong>: Condensate piping is located <strong>below the boiler water level</strong>[cite: 13].</li></ul>'
      },
      {
        title: 'District Heating (CHP) Pros & Cons / 區域供熱熱電聯產利弊',
        zh: '<p>在<strong>區域供熱 (District heating)</strong> 或<strong>熱電聯產 (Combined heat and power, CHP)</strong> 模式下，公用電力公司發電後的餘熱蒸汽由管網統一輸送至周邊建築，建築物無需自建鍋爐與煙囪[cite: 13]。</p><p><strong>優點</strong>：蒸汽所載潛熱巨大，長途輸送能力遠強於水，規模效益顯著[cite: 13]。<strong>缺點</strong>：長距離管道內的<strong>凝結水排除 (Condensate disposal)</strong> 與<strong>管網排氣</strong>是兩大工程難題[cite: 13]。</p>',
        en: '<p>In <strong>district heating / CHP</strong>, utility plants export cogenerated steam to buildings, eliminating local boilers and flues[cite: 13].</p><p><strong>Pros</strong>: Exceptional energy-carrying density suited for long-distance circulation[cite: 13]. <strong>Cons</strong>: Condensate drainage and air venting across extensive pipework[cite: 13].</p>'
      }
    ]
  },
  {
    id: 't7', icon: '7', title: 'Heat Emitting Equipment: Panels, Radiators & Convectors',
    titleZh: '散熱設備四大家族：輻射板、散熱器、對流器與嵌入板',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="25" width="160" height="235" fill="#243342" stroke="#e74c3c" stroke-width="2" rx="6"/>
        <text x="80" y="16" text-anchor="middle" font-size="11" font-weight="bold" fill="#e74c3c">1. Radiant Panel</text>
        <rect x="25" y="45" width="110" height="70" fill="#1a252f" stroke="#e74c3c"/>
        <text x="80" y="80" text-anchor="middle" font-size="8.5" fill="#fff">Steel Panel</text>
        <text x="80" y="95" text-anchor="middle" font-size="8" fill="#f1c40f">100–150 °C</text>
        <rect x="10" y="130" width="140" height="115" fill="#111" stroke="#e74c3c" rx="3"/>
        <text x="80" y="150" text-anchor="middle" font-size="8.5" fill="#f5b7b1">• <strong>60% Rad + 40% Conv</strong></text>
        <text x="80" y="170" text-anchor="middle" font-size="8" fill="#ecf0f1">• High-bay factories</text>
        <text x="80" y="190" text-anchor="middle" font-size="8" fill="#ecf0f1">• Medium/High hot water</text>
      </g>
      <g class="scada-unit" transform="translate(190, 20)">
        <rect x="0" y="25" width="170" height="235" fill="#243342" stroke="#f39c12" stroke-width="2" rx="6"/>
        <text x="85" y="16" text-anchor="middle" font-size="11" font-weight="bold" fill="#f39c12">2. Radiator (Window)</text>
        <rect x="25" y="45" width="120" height="70" fill="#1a252f" stroke="#f39c12"/>
        <text x="85" y="80" text-anchor="middle" font-size="8.5" fill="#fff">Cast iron / Steel</text>
        <text x="85" y="95" text-anchor="middle" font-size="8" fill="#abebc6">Under Window</text>
        <rect x="10" y="130" width="150" height="115" fill="#111" stroke="#f39c12" rx="3"/>
        <text x="85" y="150" text-anchor="middle" font-size="8.5" fill="#feca57">• <strong>70% Conv + 30% Rad</strong></text>
        <text x="85" y="170" text-anchor="middle" font-size="8" fill="#ecf0f1">• Best placed under window</text>
        <text x="85" y="190" text-anchor="middle" font-size="7.5" fill="#bdc3c7">• Cancels cold downdraft</text>
      </g>
      <g class="scada-unit" transform="translate(375, 20)">
        <rect x="0" y="25" width="165" height="235" fill="#243342" stroke="#16a085" stroke-width="2" rx="6"/>
        <text x="82" y="16" text-anchor="middle" font-size="11" font-weight="bold" fill="#1abc9c">3. Convector</text>
        <rect x="25" y="45" width="115" height="70" fill="#1a252f" stroke="#1abc9c"/>
        <text x="82" y="75" text-anchor="middle" font-size="8.5" fill="#fff">Finned Tube</text>
        <text x="82" y="95" text-anchor="middle" font-size="8" fill="#f1c40f">Chimney Effect</text>
        <rect x="10" y="130" width="145" height="115" fill="#111" stroke="#1abc9c" rx="3"/>
        <text x="82" y="150" text-anchor="middle" font-size="8.5" fill="#abebc6">• <strong>Pure Convective</strong></text>
        <text x="82" y="170" text-anchor="middle" font-size="8" fill="#ecf0f1">• Rising buoyant plume</text>
        <text x="82" y="190" text-anchor="middle" font-size="8" fill="#bdc3c7">• Forced type adds fan</text>
      </g>
      <g class="scada-unit" transform="translate(555, 20)">
        <rect x="0" y="25" width="170" height="235" fill="#243342" stroke="#9b59b6" stroke-width="2" rx="6"/>
        <text x="85" y="16" text-anchor="middle" font-size="11" font-weight="bold" fill="#bb86fc">4. Embedded Panel</text>
        <rect x="25" y="45" width="120" height="70" fill="#1a252f" stroke="#9b59b6"/>
        <text x="85" y="75" text-anchor="middle" font-size="8.5" fill="#fff">Pipes in Floor</text>
        <text x="85" y="95" text-anchor="middle" font-size="8" fill="#f1c40f">27 °C – 50 °C</text>
        <rect x="10" y="130" width="150" height="115" fill="#111" stroke="#9b59b6" rx="3"/>
        <text x="85" y="150" text-anchor="middle" font-size="8.5" fill="#d7bde2">• Large thermal mass</text>
        <text x="85" y="170" text-anchor="middle" font-size="8" fill="#ecf0f1">• Very uniform heating</text>
        <text x="85" y="190" text-anchor="middle" font-size="7.5" fill="#bdc3c7">• Emits heat after off</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 7: Heat emitting equipment comparison: Radiant panel (100–150°C), Traditional Radiator (70% conv/30% rad), Natural convector (chimney effect), and Embedded floor panel (27–50°C)',
    sections: [
      {
        title: 'Four Families of Heat Emitters / 散熱設備四大家族特性',
        zh: '<ul><li><strong>金屬輻射板 (Metal radiant panel)</strong>：鋼板焊接管束，表面溫度高達 <strong>100–150 °C</strong>，熱量傳遞為 <strong>60% 輻射 + 40% 對流</strong>，專用於高大廠房 (factories)[cite: 13]；</li><li><strong>散熱器 (Radiator)</strong>：鑄鐵或鋼製，熱量分佈為 <strong>70% 對流 + 30% 輻射</strong>[cite: 13]。<strong>最佳安裝位置為窗台下方</strong>，以暖正輻射及上升對流抵消外窗冷負輻射與冷風下沉，平衡室內垂直溫度梯度[cite: 13]；</li><li><strong>對流器 (Convector)</strong>：外殼底部裝鰭片管，依靠<strong>煙囪效應 (chimney effect)</strong> 抽吸室內冷空氣形成純對流[cite: 13]；</li><li><strong>嵌入式板 (Embedded panel)</strong>：低溫水管埋於地板或牆身，表面溫度僅 <strong>27–50 °C</strong>，大面積均勻散熱，熱慣性大[cite: 13]。</li></ul>',
        en: '<ul><li><strong>Metal radiant panel</strong>: <strong>100–150 °C</strong> surface; <strong>60% radiation + 40% convection</strong>; suitable for high factories[cite: 13];</li><li><strong>Radiator</strong>: <strong>70% convection + 30% radiation</strong>[cite: 13]; <strong>placed under windows</strong> to counteract cold glass downdrafts and negative radiation[cite: 13];</li><li><strong>Natural convector</strong>: Enclosed finned element operating via <strong>chimney effect</strong>[cite: 13];</li><li><strong>Embedded floor/ceiling panel</strong>: Surface temperature <strong>27–50 °C</strong>; large thermal mass provides heat long after source shutdown[cite: 13].</li></ul>'
      }
    ]
  },
  {
    id: 't8', icon: '8', title: 'Electric Duct Heaters & 8 Mandatory Safety Interlocks',
    titleZh: '通風管道電加熱器八大強制性安全控制規範',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Electric Duct Heater Mandatory Safety Interlocks (電加熱器八大安全法規)</text>
        <!-- Duct Section -->
        <rect x="40" y="55" width="620" height="70" fill="#1a252f" stroke="#7f8c8d" stroke-width="2"/>
        <!-- Heater Elements in Middle -->
        <rect x="300" y="60" width="50" height="60" fill="#78281f" stroke="#e74c3c" stroke-width="2"/>
        <path d="M 315 65 L 315 115 M 325 65 L 325 115 M 335 65 L 335 115" stroke="#f1c40f" stroke-width="2"/>
        <text x="325" y="90" text-anchor="middle" font-size="7.5" fill="#fff">Heater</text>
        <!-- 1000 mm No Insulation Zone -->
        <rect x="180" y="57" width="120" height="15" fill="#e74c3c" opacity="0.3"/>
        <rect x="350" y="57" width="120" height="15" fill="#e74c3c" opacity="0.3"/>
        <text x="240" y="48" font-size="8" fill="#f5b7b1">Min 1000 mm No-Insulation</text>
        <text x="410" y="48" font-size="8" fill="#f5b7b1">Min 1000 mm No-Insulation</text>
        <!-- Overheat stat at max 600 mm -->
        <circle cx="410" cy="90" r="10" fill="#f39c12"/>
        <text x="410" y="93" text-anchor="middle" font-size="7" fill="#111" font-weight="bold">Stat</text>
        <text x="410" y="112" text-anchor="middle" font-size="7.5" fill="#f39c12">≤600mm / 50°C / 90s</text>
        <!-- Sail switch -->
        <polygon points="460,90 475,80 475,100" fill="#3498db"/>
        <text x="480" y="93" font-size="7.5" fill="#5dade2">Sail switch</text>
        <!-- Summary Matrix of 8 Rules -->
        <rect x="40" y="140" width="620" height="105" fill="#111" stroke="#1abc9c" rx="4"/>
        <text x="50" y="158" font-size="9" fill="#ecf0f1">1. <strong>1000 mm Clearance</strong>: No internal acoustic/thermal duct insulation within 1000 mm of heater.</text>
        <text x="50" y="174" font-size="9" fill="#ecf0f1">2. <strong>Sequence Interlock</strong>: Heater cannot be energized before the fan motor starts.</text>
        <text x="50" y="190" font-size="9" fill="#f1c40f">3. <strong>3-Minute Fan Delay</strong>: On fan shut-off, heater cuts off instantly, fan runs ≥ 3 mins to clear heat.</text>
        <text x="50" y="206" font-size="9" fill="#ecf0f1">4. <strong>Emergency Stop Button</strong>: Mushroom head with manual reset overrides time delay for instant shut-off.</text>
        <text x="50" y="222" font-size="9" fill="#ecf0f1">5. <strong>Airflow Failure &amp; Overheat Stat</strong>: Fail-safe sail switch + stat within 600 mm (trips at 50°C ± 10% in ≤90 s).</text>
        <text x="50" y="238" font-size="8.5" fill="#abebc6">6. <strong>≤ 2 kW Exemption</strong>: FCUs with electric heater ≤ 2 kW require only sequence interlock &amp; overheat stat.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 8: Mechanical ventilation electric heater mandatory safety interlocks: 1 m uninsulated zone, 3-min fan rundown timer, and fail-safe airflow/overheat cut-offs',
    sections: [
      {
        title: '8 Mandatory Safety Interlocks / 八大法定安全聯鎖要求',
        zh: '<p>根據香港及國際通風法規，風管電加熱器必須具備八項嚴格聯鎖[cite: 13]：</p><ol><li><strong>1000 mm 禁保溫區</strong>：電加熱器前後 <strong>1000 mm 範圍內嚴禁安裝風管內部保溫層</strong>[cite: 13]；</li><li><strong>順序聯鎖</strong>：風扇未開動前，電加熱器絕不能通電[cite: 13]；</li><li><strong>3 分鐘延時停機</strong>：關閉風機時，電加熱器立即斷電，但<strong>風機必須持續運轉至少 3 分鐘</strong>以散盡餘熱[cite: 13]；</li><li><strong>緊急停機按鈕</strong>：靠近電機設蘑菇頭手動復位急停掣，可強制凌駕延時電路即時切斷電源[cite: 13]；</li><li><strong>氣流失效控制</strong>：設風帆開關 (sail switch) 或差壓開關，無風即斷電[cite: 13]；</li><li><strong>過熱溫控器</strong>：距電熱器<strong>最遠 600 mm</strong> 處設過熱溫控器，風管均溫超過 <strong>50 °C ± 10%</strong> 時<strong>必須在 90 秒內斷電</strong>[cite: 13]；</li><li><strong>失效安全 (Fail-safe)</strong>：控制迴路失電時，加熱元件必須自動斷開[cite: 13]；</li><li><strong>≤ 2 kW 小型 FCU 豁免</strong>：電熱總功率不超過 2 kW 時，安全要求簡化為順序聯鎖與過熱溫控[cite: 13]。</li></ol>',
        en: '<p>Statutory mechanical ventilation safety rules for electric duct heaters[cite: 13]:</p><ol><li><strong>1000 mm insulation clearance</strong>: No internal acoustic/thermal lining within 1000 mm[cite: 13];</li><li><strong>Sequence interlock</strong>: Heaters cannot energize before the supply fan starts[cite: 13];</li><li><strong>3-minute fan rundown delay</strong>: On fan shut-off, heater cuts instantly while fan runs &ge; 3 min[cite: 13];</li><li><strong>Emergency stop button</strong>: Mushroom head with manual reset overrides time delay[cite: 13];</li><li><strong>Airflow failure control</strong>: Fail-safe sail switch de-energizes elements on zero flow[cite: 13];</li><li><strong>Overheat stat</strong>: Located &le; <strong>600 mm</strong>, trips in &le; <strong>90 s</strong> if temp exceeds <strong>50 °C &plusmn; 10%</strong>[cite: 13];</li><li><strong>Fail-safe feature</strong>: Drops out upon loss of control circuit power[cite: 13];</li><li><strong>&le; 2 kW relaxation</strong>: Small FCUs require only sequence interlock and overheat stat[cite: 13].</li></ol>'
      }
    ]
  },
  {
    id: 't9', icon: '9', title: 'Heat Pipe Heat Exchangers: Phase-Change & Tilt Angle',
    titleZh: '熱管換熱器：毛細相變循環、重力傾角與顯熱局限',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Heat Pipe Heat Exchanger (熱管內部毛細相變循環與隔板矩陣)</text>
        <!-- Single Tube Cutaway (Left) -->
        <g transform="translate(30, 45)">
          <rect x="0" y="20" width="280" height="55" fill="#1a252f" stroke="#ecf0f1" stroke-width="2" rx="27"/>
          <path d="M 0 47 A 27 27 0 0 1 70 20 L 70 75 A 27 27 0 0 1 0 47 Z" fill="#e74c3c" opacity="0.4"/>
          <text x="35" y="52" text-anchor="middle" font-size="8" fill="#f5b7b1" font-weight="bold">Evaporator</text>
          <path d="M 210 20 L 210 75 A 27 27 0 0 0 280 47 A 27 27 0 0 0 210 20 Z" fill="#2980b9" opacity="0.4"/>
          <text x="245" y="52" text-anchor="middle" font-size="8" fill="#5dade2" font-weight="bold">Condenser</text>
          <line x1="75" y1="35" x2="205" y2="35" stroke="#f1c40f" stroke-width="2" stroke-dasharray="4 2"/>
          <text x="140" y="32" text-anchor="middle" font-size="7.5" fill="#f1c40f">Vapour Flow ➔</text>
          <line x1="205" y1="60" x2="75" y2="60" stroke="#2ecc71" stroke-width="2" stroke-dasharray="4 2"/>
          <text x="140" y="70" text-anchor="middle" font-size="7" fill="#2ecc71">⮜ Capillary Liquid Return</text>
          <text x="140" y="95" text-anchor="middle" font-size="8.5" fill="#fff">Standard diameters: 15, 25, 32, 40, 50 mm</text>
        </g>
        <!-- Counterflow Matrix with Sealed Partition (Right) -->
        <g transform="translate(360, 45)">
          <rect x="0" y="0" width="310" height="100" fill="#111" stroke="#3498db" rx="4"/>
          <!-- Sealed partition in center -->
          <line x1="155" y1="0" x2="155" y2="100" stroke="#e74c3c" stroke-width="3"/>
          <text x="155" y="-5" text-anchor="middle" font-size="8" fill="#e74c3c" font-weight="bold">Sealed Partition</text>
          <path d="M 20 25 L 140 25" stroke="#e74c3c" stroke-width="3" class="flow-hot-water"/>
          <text x="80" y="18" font-size="8" fill="#e74c3c">Hot Exhaust Gas</text>
          <path d="M 290 75 L 170 75" stroke="#2980b9" stroke-width="3" class="flow-return-water"/>
          <text x="230" y="90" font-size="8" fill="#5dade2">Cold Fresh Air</text>
          <text x="155" y="55" text-anchor="middle" font-size="8.5" fill="#2ecc71" font-weight="bold">Zero Cross-Contamination</text>
        </g>
        <rect x="30" y="160" width="640" height="85" fill="#111" stroke="#1abc9c" rx="4"/>
        <text x="350" y="182" text-anchor="middle" font-size="10.5" fill="#fff" font-weight="bold">Gravity-Assisted Inclination: Sloped with hot end below horizontal (5.7° / 10% slope or 90° vertical) boosts return rate.</text>
        <text x="350" y="202" text-anchor="middle" font-size="10" fill="#f1c40f">Pros: No moving parts, indefinite life, no external power, highly reliable independent tubes, compact geometry.</text>
        <text x="350" y="222" text-anchor="middle" font-size="10.5" fill="#e74c3c" font-weight="bold">THE SINGLE DISADVANTAGE: Transfers SENSIBLE heat only — cannot recover or transfer latent moisture!</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 9: Heat pipe working cycle: Evaporation, vapor migration, condensation, and capillary return in a counterflow bundle separated by a sealed partition',
    sections: [
      {
        title: 'Heat Pipe Operating Cycle & Architecture / 熱管運作相變原理',
        zh: '<p><strong>熱管換熱器 (Heat pipe)</strong> 係真空封入特選工質並附有<strong>毛細芯 (capillary wick)</strong> 的密封金屬管[cite: 13]：</p><ol><li><strong>蒸發段 (Evaporator)</strong>：高溫廢氣加熱使工質蒸發，產生較高蒸氣壓[cite: 13]；</li><li><strong>蒸氣遷移</strong>：蒸氣沿中心通道流向冷凝端[cite: 13]；</li><li><strong>冷凝段 (Condenser)</strong>：向冷空氣釋放<strong>汽化潛熱</strong>凝結成液體[cite: 13]；</li><li><strong>毛細回流</strong>：凝液沿內壁毛細芯抽回蒸發段，形成無外接動力、無活動部件的自驅動連續循環[cite: 13]。</li></ol>',
        en: '<p>A <strong>heat pipe</strong> is an evacuated, sealed tube with an internal <strong>capillary wick</strong> and working fluid[cite: 13]:</p><ol><li>Heat at the evaporator vaporizes liquid[cite: 13];</li><li>Pressure drives vapor to the cold end[cite: 13];</li><li>Vapor condenses, releasing latent heat[cite: 13];</li><li>Capillary wick pumps liquid back continuously without moving parts or external power[cite: 13].</li></ol>'
      },
      {
        title: 'Tilt Angles & Critical Limitation / 傾角增效與最大缺點',
        zh: '<div class="key-point"><strong>重力輔助傾角與致命缺陷（Slide 29–30）：</strong><br>• <strong>傾角增效</strong>：將熱端向下傾斜 <strong>5.7°（10% 斜度）或 90°（垂直管）</strong>，重力輔助凝液回流，傳熱量倍增[cite: 13]；<br>• <strong>管徑規格</strong>：標準管徑為 <strong>15, 25, 32, 40 及 50 mm</strong>[cite: 13]；<br>• <strong>零交叉污染</strong>：排氣與新風由<strong>密封隔板 (sealed partition)</strong> 完全隔離[cite: 13]；<br>• <strong>唯一重大缺陷</strong>：<strong>只能傳遞顯熱 (Sensible heat only)，完全不能回收或傳遞潛熱 (Moisture)</strong>[cite: 13]！</div>',
        en: '<div class="key-point"><strong>Gravity Assistance &amp; Limitation (Slide 29–30):</strong><br>• <strong>Inclination</strong>: Sloping the hot end downward at <strong>5.7° (10% slope) or 90° (vertical)</strong> uses gravity to boost capacity[cite: 13];<br>• <strong>Standard diameters</strong>: <strong>15, 25, 32, 40, 50 mm</strong>[cite: 13];<br>• <strong>Zero cross-contamination</strong>: Guaranteed by a solid sealed partition[cite: 13];<br>• <strong>Major Disadvantage</strong>: Transmits <strong>sensible heat ONLY</strong>—does nothing for latent heat[cite: 13]!</div>'
      }
    ]
  },
  {
    id: 't10', icon: '10', title: 'Enthalpy Wheels: Total Energy Recovery & Purge Sector',
    titleZh: '轉輪式全熱交換器：70%–90% 焓回收與防串氣吹洗',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Enthalpy Wheel (Rotary Heat Regenerator) Operation (轉輪式全熱交換器與吹洗區)</text>
        <!-- Wheel casing -->
        <g transform="translate(40, 45)">
          <rect x="0" y="0" width="360" height="135" fill="#1a252f" stroke="#1abc9c" stroke-width="2" rx="4"/>
          <!-- Counterflow Ducts -->
          <rect x="10" y="15" width="340" height="40" fill="#78281f" stroke="#c0392b"/>
          <text x="50" y="38" font-size="8.5" fill="#fff" font-weight="bold">Hot Moist Exhaust Air ➔➔</text>
          <rect x="10" y="80" width="340" height="40" fill="#1b4f72" stroke="#3498db"/>
          <text x="310" y="103" text-anchor="end" font-size="8.5" fill="#fff" font-weight="bold">⮜⮜ Cold Fresh Supply Air</text>
          <!-- Central Rotating Matrix -->
          <circle cx="180" cy="67" r="50" fill="#16a085" opacity="0.4" stroke="#12806d" stroke-width="3"/>
          <circle cx="180" cy="67" r="10" fill="#111"/>
          <!-- Purge Sector -->
          <path d="M 180 67 L 205 25 A 50 50 0 0 1 228 45 Z" fill="#f1c40f" stroke="#d4ac0d"/>
          <text x="240" y="35" font-size="8" fill="#f1c40f" font-weight="bold">Purge</text>
        </g>
        <g transform="translate(430, 45)">
          <rect x="0" y="0" width="250" height="135" fill="#111" stroke="#f1c40f" rx="4"/>
          <text x="125" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#f1c40f">Performance &amp; Drawbacks:</text>
          <text x="12" y="42" font-size="9" fill="#2ecc71" font-weight="bold">• 70% to 90% Total Heat Recovery</text>
          <text x="20" y="56" font-size="8" fill="#abebc6">(Both sensible and latent moisture!)</text>
          <text x="12" y="74" font-size="8.5" fill="#e74c3c">• Bulky: 2×2 m to 5×5 m cross-section</text>
          <text x="12" y="92" font-size="8.5" fill="#ecf0f1">• Complex bent ductwork arrangements</text>
          <text x="12" y="110" font-size="8.5" fill="#f5b7b1">• Slight cross-contamination (purged)</text>
          <text x="12" y="126" font-size="8.5" fill="#bdc3c7">• Corrosion risk &amp; drive maintenance</text>
        </g>
        <rect x="30" y="195" width="650" height="50" fill="#111" stroke="#1abc9c" rx="4"/>
        <text x="350" y="215" text-anchor="middle" font-size="10.5" fill="#fff">Slowly rotating porous honeycomb matrix coated with desiccant absorbs both heat and moisture from exhaust,</text>
        <text x="350" y="233" text-anchor="middle" font-size="9.5" fill="#f1c40f">transferring both to the incoming supply air stream. Purge section uses clean air to flush cells before exposure to supply.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 10: Enthalpy wheel operation: Rotating desiccant honeycomb matrix transferring both sensible and latent heat (70%–90% efficiency) with a purge sector',
    sections: [
      {
        title: 'Enthalpy Wheel Mechanics & Efficiency / 焓輪全熱回收機制',
        zh: '<p><strong>焓輪 (Enthalpy wheel / Heat regenerator)</strong> 是一個慢速旋轉的圓輪，輪芯填充有多孔蜂窩狀蓄熱吸濕材料（如矽膠分子篩）[cite: 13]：</p><div class="key-point"><strong>全熱回收能力（Slide 33）：</strong> 焓輪可同時吸收並釋放<strong>顯熱與潛熱 (Sensible and latent heat)</strong>，全熱回收效率高達 <strong>70% 至 90%</strong>，是熱能回收效率最高的設備[cite: 13]！</div>',
        en: '<p>An <strong>enthalpy wheel (heat wheel/regenerator)</strong> slowly rotates a porous desiccant-coated matrix between counterflowing airstreams[cite: 13]:</p><div class="key-point"><strong>High Efficiency (Slide 33):</strong> Recovers <strong>70% to 90% of exhaust energy—both sensible and latent heat</strong>[cite: 13].</div>'
      },
      {
        title: 'Purge Section & Five Engineering Drawbacks / 吹洗區與五大工程缺陷',
        zh: '<p><strong>吹洗區 (Purge section)</strong> 利用乾淨新風反向吹除輪孔內殘留的排氣，顯著減少交叉污染[cite: 13]。</p><p><strong>五大工程缺點（Slide 34）</strong>：① <strong>體積龐大 (Bulky)</strong>：截面通常達 <strong>2×2 m 至 5×5 m</strong>[cite: 13]；② <strong>風管佈置複雜</strong>：進排風管需扭轉靠近，彎頭多、阻力大[cite: 13]；③ <strong>仍有微量交叉污染風險</strong>[cite: 13]；④ 輪體材料薄弱易受煙氣<strong>腐蝕 (Corrosion)</strong>[cite: 13]；⑤ 含有電機皮帶軸承，需<strong>常規維護保養</strong>[cite: 13]。</p>',
        en: '<p>A <strong>purge section</strong> flushes residual contaminants off the wheel[cite: 13].</p><p><strong>Disadvantages (Slide 34)</strong>: Bulky (<strong>2×2 m to 5×5 m</strong>); complex ductwork with multiple bends; minor cross-contamination risk; corrosion of delicate matrix; requires regular mechanical maintenance[cite: 13].</p>'
      }
    ]
  },
  {
    id: 't11', icon: '11', title: 'Run-Around Coils & Double-Bundle Reclaim Condensers',
    titleZh: '環形雙盤管液體循環與冷水機雙束冷凝器廢熱回收',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <!-- Left: Run-Around Coils -->
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#3498db" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#3498db">(a) Run-Around Coils (環形雙盤管)</text>
        <rect x="30" y="45" width="120" height="50" fill="#78281f" stroke="#e74c3c"/>
        <text x="90" y="75" text-anchor="middle" font-size="8.5" fill="#fff">Exhaust Coil 1</text>
        <rect x="190" y="45" width="120" height="50" fill="#1b4f72" stroke="#3498db"/>
        <text x="250" y="75" text-anchor="middle" font-size="8.5" fill="#fff">Supply Coil 2</text>
        <!-- Connecting Loop with Pump -->
        <path d="M 90 95 L 90 140 L 250 140 L 250 95" fill="none" stroke="#2ecc71" stroke-width="3" class="flow-refrigerant"/>
        <circle cx="170" cy="140" r="14" fill="#16a085"/>
        <text x="170" y="144" text-anchor="middle" font-size="8" fill="#fff">Pump</text>
        <rect x="20" y="165" width="300" height="85" fill="#111" stroke="#3498db" rx="4"/>
        <text x="170" y="185" text-anchor="middle" font-size="10" fill="#5dade2" font-weight="bold">Closed Hydronic Loop (Water/Glycol):</text>
        <text x="170" y="202" text-anchor="middle" font-size="8.5" fill="#ecf0f1">• Sensible heat efficiency up to <strong>70%</strong></text>
        <text x="170" y="218" text-anchor="middle" font-size="9" fill="#2ecc71" font-weight="bold">• Coils can be located completely FAR APART!</text>
        <text x="170" y="235" text-anchor="middle" font-size="8" fill="#bdc3c7">Ideal for retrofits and hospital exhaust isolation.</text>
      </g>
      <!-- Right: Double-Bundle Heat Reclaim Condenser -->
      <g class="scada-unit" transform="translate(385, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#e67e22" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#f39c12">(b) Double-Bundle Condenser (雙束冷凝器)</text>
        <circle cx="170" cy="95" r="55" fill="#1a252f" stroke="#ecf0f1" stroke-width="2"/>
        <line x1="170" y1="40" x2="170" y2="150" stroke="#7f8c8d" stroke-width="2" stroke-dasharray="3 2"/>
        <rect x="125" y="65" width="35" height="60" fill="#78281f" stroke="#e74c3c"/>
        <text x="142" y="98" text-anchor="middle" font-size="7.5" fill="#fff" transform="rotate(-90 142 98)">Heating</text>
        <rect x="180" y="65" width="35" height="60" fill="#1b4f72" stroke="#3498db"/>
        <text x="197" y="98" text-anchor="middle" font-size="7.5" fill="#fff" transform="rotate(-90 197 98)">Tower</text>
        <rect x="20" y="165" width="300" height="85" fill="#111" stroke="#e67e22" rx="4"/>
        <text x="170" y="185" text-anchor="middle" font-size="10" fill="#f1c40f" font-weight="bold">Simultaneous Cooling and Heating:</text>
        <text x="170" y="202" text-anchor="middle" font-size="8.5" fill="#ecf0f1">• Heating bundle delivers reclaimed heat to perimeter coils</text>
        <text x="170" y="218" text-anchor="middle" font-size="8.5" fill="#ecf0f1">• Tower bundle sheds surplus heat to cooling tower</text>
        <text x="170" y="235" text-anchor="middle" font-size="8.5" fill="#abebc6">Auxiliary heater tops up hot water temperature if needed.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 11: Run-around coil system (remote coils linked by pumped water/glycol loop) and Chiller double-bundle heat reclaim condenser',
    sections: [
      {
        title: 'Run-Around Coil Heat Recovery / 環形雙盤管特點',
        zh: '<p><strong>環形盤管系統 (Run-around coil / Twin coil)</strong> 由安裝於排氣管與新風管內的兩組盤管組成，中間由充注<strong>水或乙二醇防凍液</strong>的閉式管路連通，由循環水泵驅動循環，回收顯熱效率最高約 <strong>70%</strong>[cite: 13]。</p><div class="key-point"><strong>空間靈活性極致優勢：</strong> 兩個盤管可以<strong>相距非常遙遠 (coils can be placed far apart)</strong>（例如分別位於天台排風與地庫新風），無需將龐大風管引至一處，靈活度遠高於焓輪[cite: 13]。</div>',
        en: '<p>A <strong>run-around coil system</strong> links two coils in separate air ducts via a closed water or glycol loop with a circulating pump, achieving up to <strong>70% sensible heat efficiency</strong>[cite: 13].</p><div class="key-point"><strong>Spatial Flexibility:</strong> The two coils can be located <strong>completely far apart</strong> without complex ductwork re-routing[cite: 13].</div>'
      },
      {
        title: 'Heat Reclaim Condensers / 雙束冷凝器廢熱回收',
        zh: '<p><strong>雙束冷凝器 (Double-bundle condenser)</strong> 將冷水機冷凝器殼體內部的換熱管束分為兩組[cite: 13]：</p><ul><li><strong>供熱管束 (Heating bundle)</strong>：將製冷劑冷凝廢熱回收，直接輸送至建築周邊區域的供暖或熱水盤管[cite: 13]；</li><li><strong>冷卻塔管束 (Tower bundle)</strong>：在供熱負荷不足時將多餘熱量排入冷卻塔散入大氣[cite: 13]；</li><li>若回收熱水溫度不夠，可加裝電加熱或蒸汽<strong>輔助加熱器 (Auxiliary heater)</strong> 提升水溫[cite: 13]。</li></ul>',
        en: '<p>A <strong>double-bundle condenser chiller</strong> provides simultaneous cooling and space heating by splitting condenser tubes into[cite: 13]:</p><ul><li><strong>Heating bundle</strong>: Circulates recovered waste heat to perimeter heating coils[cite: 13];</li><li><strong>Tower bundle</strong>: Rejects surplus heat to the atmospheric cooling tower[cite: 13];</li><li>An <strong>auxiliary heater</strong> can boost hot water temperature if necessary[cite: 13].</li></ul>'
      }
    ]
  },
  {
    id: 't12', icon: '12', title: 'Heat Pumps, COP Equations & Cascade Heating Systems',
    titleZh: '熱泵熱力循環、COP 性能系數與 48–82°C 串級供熱',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Heat Pump Thermodynamic Cycle &amp; COP Performance (熱泵循環原理與能效)</text>
        <!-- Low Temp Source -->
        <rect x="40" y="80" width="120" height="75" fill="#1b4f72" stroke="#3498db" rx="4"/>
        <text x="100" y="115" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">Cold Source T2</text>
        <text x="100" y="132" text-anchor="middle" font-size="8" fill="#5dade2">River / Ambient Air</text>
        <!-- Heat Pump Module -->
        <circle cx="350" cy="117" r="45" fill="#1a252f" stroke="#16a085" stroke-width="3"/>
        <text x="350" y="112" text-anchor="middle" font-size="11" fill="#1abc9c" font-weight="bold">HEAT PUMP</text>
        <text x="350" y="128" text-anchor="middle" font-size="8.5" fill="#fff">熱泵機組</text>
        <!-- High Temp Sink -->
        <rect x="540" y="80" width="130" height="75" fill="#78281f" stroke="#e74c3c" rx="4"/>
        <text x="605" y="115" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">Hot Sink T1</text>
        <text x="605" y="132" text-anchor="middle" font-size="8" fill="#f5b7b1">Space Heating Load</text>
        <!-- Energy arrows -->
        <path d="M 160 117 L 305 117" stroke="#3498db" stroke-width="5" class="flow-return-water"/>
        <text x="232" y="107" text-anchor="middle" font-size="10" fill="#3498db" font-weight="bold">Q2 Absorbed</text>
        <path d="M 350 45 L 350 72" stroke="#f1c40f" stroke-width="4"/>
        <text x="350" y="40" text-anchor="middle" font-size="9" fill="#f1c40f" font-weight="bold">Work Input W (Electricity)</text>
        <path d="M 395 117 L 540 117" stroke="#e74c3c" stroke-width="5" class="flow-hot-water"/>
        <text x="467" y="107" text-anchor="middle" font-size="10" fill="#e74c3c" font-weight="bold">Q1 Delivered</text>
        <rect x="40" y="180" width="630" height="65" fill="#111" stroke="#1abc9c" rx="4"/>
        <text x="350" y="202" text-anchor="middle" font-size="12" fill="#f1c40f" font-family="Consolas" font-weight="bold">COP_hp = Q1 / W = Q1 / (Q1 - Q2)   |   Rule of Thumb: COP ≈ 3.0</text>
        <text x="350" y="222" text-anchor="middle" font-size="9.5" fill="#ecf0f1">1 J electricity delivers ~3 J heat (vs Electric resistance heater COP = 1.0 strictly 1-for-1).</text>
        <text x="350" y="238" text-anchor="middle" font-size="8.5" fill="#abebc6">Cascade Chiller-Heat Pump combines chiller condenser as HP heat source, delivering 48 °C to 82 °C hot water.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 12: Heat pump thermodynamics: Upgrading low-temperature heat Q2 into high-temperature delivery Q1 with COP ≈ 3.0, and high-temperature cascade configuration (48–82°C)',
    sections: [
      {
        title: 'Heat Pump Thermodynamic Cycle & COP / 熱泵原理與性能系數',
        zh: '<p><strong>熱泵 (Heat pump)</strong> 輸入電功 $W$，從低溫熱源（河流、大氣、工業廢水，溫度 $T_2$）提取低位熱量 $Q_2$，並將其「品位提升」為高溫熱量 $Q_1$ 釋放給供熱空間[cite: 13]：</p><div class="formula-block">COP_{hp} = \frac{Q_1}{W} = \frac{Q_1}{Q_1 - Q_2}</div><div class="key-point"><strong>性能系數經驗法則（Slide 39）：</strong><br>• <strong>熱泵經驗 COP 值約為 3.0 ($COP_{hp} \approx 3$)</strong>：即每消耗 1 焦耳電功，可產出約 3 焦耳熱量[cite: 13]；<br>• 對比之下，<strong>電阻暖爐轉換率永遠嚴格為 1:1 ($COP=1$)</strong>[cite: 13]；<br>• 儘管熱泵初始安裝造價較高，但運行動力電費極低，在燃料昂貴地區具備極強競爭力[cite: 13]。</div>',
        en: '<p>A <strong>heat pump</strong> uses work $W$ to upgrade low-grade heat $Q_2$ at $T_2$ to deliver high-temperature heat $Q_1$ at $T_1$[cite: 13]:</p><div class="formula-block">COP_{hp} = \frac{Q_1}{W} = \frac{Q_1}{Q_1 - Q_2}</div><div class="key-point"><strong>COP Rule of Thumb (Slide 39):</strong><br>• <strong>$COP_{hp} \approx 3.0$</strong>: Delivers 3 Joules of heat for every 1 Joule of electrical power input[cite: 13];<br>• In contrast, electric resistance heating is strictly <strong>1-for-1 ($COP=1.0$)</strong>[cite: 13];<br>• High capital installation cost, but very low running costs[cite: 13].</div>'
      },
      {
        title: 'Reversible & Cascade Systems / 可逆轉與串級系統',
        zh: '<ul><li><strong>可逆轉熱泵 (Reversible heat pump)</strong>：利用<strong>四通閥 (4-way valve)</strong> 逆向切換冷媒流向，夏季作製冷機冷氣運行，冬季作熱泵暖氣運行[cite: 13]；</li><li><strong>串級冷暖系統 (Cascade chiller-heat pump)</strong>：將傳統冷水機與熱泵串聯[cite: 13]。<strong>冷水機的冷凝器排熱直接作為熱泵的蒸發熱源</strong>，熱泵冷凝器可穩定輸出 <strong>48 °C 至 82 °C</strong> 之高溫熱水供應暖氣盤管，多餘熱量排入冷卻塔[cite: 13]。</li></ul>',
        en: '<ul><li><strong>Reversible heat pump</strong>: Uses a <strong>4-way valve</strong> to toggle between summer cooling and winter heating[cite: 13];</li><li><strong>Cascade chiller-heat pump</strong>: Stacks a chiller and heat pump together; chiller condenser heat becomes the heat source for the heat pump, delivering hot water at <strong>48 °C to 82 °C</strong> to heating coils[cite: 13].</li></ul>'
      }
    ]
  }
];

// ==========================================
// 25 MULTIPLE CHOICE QUESTIONS (L01)
// ==========================================
const mcData = [
  {
    question: "Which of the following is an example of a DIRECT (local) space heating method?",
    options: [
      "Gas-fired natural convector inside the room",
      "Warm-air furnace located in the basement",
      "Central hot-water boiler piping to radiators",
      "Steam pipe network from a district CHP plant"
    ],
    answer: 0,
    explanation: "Slide 3: Direct heating consumes fuel directly in the space being heated (e.g. open fire, closed stove, gas-fired natural convectors). Warm air, hot water, and steam are indirect methods.",
    lesson: "L1"
  },
  {
    question: "A central warm-air heating system is most suitable for which type of building?",
    options: [
      "Large commercial high-rise towers",
      "Small one- or two-family residential buildings",
      "Industrial manufacturing plants with high ceilings",
      "Airport passenger terminals"
    ],
    answer: 1,
    explanation: "Slide 4: Warm-air systems are used only in small buildings such as one- or two-family residential houses due to bulky ducts and short reach.",
    lesson: "L1"
  },
  {
    question: "Which of the following is NOT listed as an advantage of a hot-water heating system over a warm-air system (Slide 5)?",
    options: [
      "Water pipes occupy smaller space than warm-air ducts",
      "System responds quickly and uniformly to thermal load changes",
      "Heat output matches load to minimize overheating",
      "It completely eliminates the need for pipe insulation"
    ],
    answer: 3,
    explanation: "Slide 5: The three advantages are compact pipe size, quick/uniform response, and load matching to minimize overheating. Insulation is still required.",
    lesson: "L1"
  },
  {
    question: "LOW TEMPERATURE HOT WATER (LTHW) is officially defined as operating within what design temperature range?",
    options: [
      "40 °C – 70 °C",
      "70 °C – 100 °C",
      "110 °C – 130 °C",
      "140 °C – 180 °C"
    ],
    answer: 1,
    explanation: "Slide 6: Low temperature hot water is 70–100 °C. (40–70 °C is low-T warm water; 110–130 °C is medium-T; 140–180 °C is high-T).",
    lesson: "L1"
  },
  {
    question: "Why are medium or high temperature hot water systems (110–180 °C) utilized for long-distance circulation?",
    options: [
      "They allow water to store more heat per kg, enabling smaller pipe diameters",
      "They operate at atmospheric pressure without pumps",
      "They eliminate thermal expansion stresses",
      "They can use flexible PVC plastic pipes"
    ],
    answer: 0,
    explanation: "Slide 6: Storing more heat per kg allows smaller pipe sizes, though heavier pipes are needed to resist the elevated working pressure.",
    lesson: "L1"
  },
  {
    question: "In a SINGLE-PIPE radiator heating circuit, what happens to the water temperature as it travels further away from the boiler?",
    options: [
      "Water temperature increases",
      "Water temperature drops progressively because cooled return water re-enters the same pipe",
      "Water temperature stays exactly constant",
      "Water turns into high-pressure steam"
    ],
    answer: 1,
    explanation: "Slide 7-8: In a single-pipe system, cooled water exiting each radiator returns into the same pipe, causing progressive temperature drops downstream.",
    lesson: "L1"
  },
  {
    question: "To deliver equal heating capacity in a single-pipe radiator series, how must successive downstream radiators be sized?",
    options: [
      "They must be sized smaller",
      "They must be sized identical to the first",
      "They must be sized progressively larger",
      "They require no change in size"
    ],
    answer: 2,
    explanation: "Slide 8: Because water is progressively cooler downstream, the physical surface area of successive radiators must be increased to deliver equal output.",
    lesson: "L1"
  },
  {
    question: "What is the primary hydraulic benefit of a TWO-PIPE REVERSE-RETURN hot-water circuit?",
    options: [
      "Water travel distance to each radiator is equal, providing natural flow balancing",
      "It halves the total footage of pipework compared to single-pipe",
      "It eliminates the circulation pump",
      "It allows mixing of steam and water"
    ],
    answer: 0,
    explanation: "Slide 9: In reverse-return piping, total circuit length to and from each terminal is identical, resulting in equal friction loss and natural flow balancing.",
    lesson: "L1"
  },
  {
    question: "In a low-pressure two-pipe steam heating system, a DRY RETURN designates that:",
    options: [
      "Condensate pipework is located above the boiler water level",
      "Condensate pipework is located below the boiler water level",
      "No condensate is formed in the system",
      "Superheated steam fills the return line"
    ],
    answer: 0,
    explanation: "Slide 12-13: Dry return means condensate pipework is above the boiler water level; Wet return is below the water level.",
    lesson: "L1"
  },
  {
    question: "What are the two major engineering drawbacks associated with long-distance steam heating pipelines?",
    options: [
      "Bulky duct dimensions and fan noise",
      "Disposal of condensate and elimination of air from lengthy pipelines",
      "Low latent heat carrying capacity",
      "Need for mechanical draft cooling towers"
    ],
    answer: 1,
    explanation: "Slide 13: The disposal of condensate and elimination of air from lengthy steam pipelines are the two major engineering problems.",
    lesson: "L1"
  },
  {
    question: "A METAL RADIANT PANEL is characterized by which operating parameters (Slide 15)?",
    options: [
      "Aluminium panel, surface 27–50 °C, 100% convection",
      "Fabricated from steel, surface 100–150 °C, ~60% radiation + ~40% convection",
      "Finned tube with chimney effect, 90% convection",
      "Electric cable embedded in floor screed"
    ],
    answer: 1,
    explanation: "Slide 15: Metal radiant panels are steel panels operating at 100–150 °C, transferring heat by approx. 60% radiation and 40% convection in factories.",
    lesson: "L1"
  },
  {
    question: "What is the approximate heat emission split for a traditional cast-iron/steel RADIATOR?",
    options: [
      "30% convection + 70% radiation",
      "70% convection + 30% radiation",
      "50% convection + 50% radiation",
      "10% convection + 90% radiation"
    ],
    answer: 1,
    explanation: "Slide 17: In a radiator, heat is emitted by approx. 70% convection and 30% radiation.",
    lesson: "L1"
  },
  {
    question: "Why are radiators best placed UNDER WINDOWS in occupied rooms?",
    options: [
      "To allow fresh air for combustion",
      "Window is the point of maximum heat loss; hot positive radiation cancels cold negative radiation, reducing temperature gradient",
      "To keep pipes out of sight",
      "To illuminate the radiator"
    ],
    answer: 1,
    explanation: "Slide 17: Windows are the point of maximum heat loss; rising warm convection and positive radiation cancel cold drafts and negative radiation from cold glass.",
    lesson: "L1"
  },
  {
    question: "What is the typical surface temperature range of an EMBEDDED floor/ceiling heating panel?",
    options: ["15 °C – 20 °C", "27 °C – 50 °C", "70 °C – 90 °C", "100 °C – 150 °C"],
    answer: 1,
    explanation: "Slide 19: Embedded panel surface temperature is in the range of 27–50 °C, providing uniform low-temperature radiation.",
    lesson: "L1"
  },
  {
    question: "Under mechanical ventilation safety regulations, what is the MINIMUM distance from an electric duct heater assembly where internal duct insulation is prohibited?",
    options: ["300 mm", "600 mm", "1000 mm (1 metre)", "2000 mm"],
    answer: 2,
    explanation: "Slide 23-24: Duct internal insulation (acoustic or thermal) shall not be installed within 1000 mm of the electric heater assembly.",
    lesson: "L1"
  },
  {
    question: "When switching off an electrically heated ventilation fan, how long MUST the fan motor continue to run to dissipate residual heat?",
    options: ["30 seconds", "1 minute", "Minimum of 3 minutes", "10 minutes"],
    answer: 2,
    explanation: "Slide 24: A heavy-duty timer delay must keep the fan motor running continuously for a minimum of three minutes after heater power is cut off.",
    lesson: "L1"
  },
  {
    question: "What are the location and tripping specifications for the duct OVERHEAT THERMOSTAT on an electric heater?",
    options: [
      "Within 1000 mm, trips at 100 °C in 10 seconds",
      "Max distance 600 mm, trips when mean duct temp exceeds 50 °C ± 10% within 90 seconds",
      "Inside the furnace room, trips at 250 °C",
      "Directly on the fan blades, trips at 35 °C"
    ],
    answer: 1,
    explanation: "Slide 25: The overheat thermostat must be within max 600 mm from the heater and switch off elements when mean duct temp exceeds 50 °C ± 10% within 90 seconds.",
    lesson: "L1"
  },
  {
    question: "For fan coil units (FCUs) with electric heaters rated at total power ≤ 2 kW, which safety controls are strictly required?",
    options: [
      "All 8 controls including sail switch and emergency stop",
      "Only sequence interlocking control and overheat thermostat control",
      "No safety controls are required",
      "Only the 3-minute timer delay"
    ],
    answer: 1,
    explanation: "Slide 25: For FCUs with electric heaters not exceeding 2 kW, safety requirements are reduced to sequence interlocking and overheat thermostat controls.",
    lesson: "L1"
  },
  {
    question: "How does a HEAT PIPE transfer thermal energy between its evaporator and condenser ends?",
    options: [
      "By an external electric oil pump",
      "By a continuous closed-loop evaporation and condensation cycle with liquid returned by an internal capillary wick",
      "By high-frequency magnetic induction",
      "By rotational mechanical friction"
    ],
    answer: 1,
    explanation: "Slide 28: Heat vaporizes working fluid at the evaporator; vapor migrates to the condenser, releases latent heat, and the capillary wick returns the liquid passively.",
    lesson: "L1"
  },
  {
    question: "Why is there ZERO cross-contamination between gas streams in a heat pipe heat exchanger?",
    options: [
      "Both air streams are pressurized equally",
      "A solid sealed partition physically isolates the exhaust stream from the fresh air supply stream",
      "The working fluid absorbs all odors",
      "The heat pipes are porous to gases"
    ],
    answer: 1,
    explanation: "Slide 27: A sealed partition separates the two fluid streams, preventing any cross-contamination while heat pipes span across both.",
    lesson: "L1"
  },
  {
    question: "Why are industrial heat pipes often installed tilted with the hot end BELOW the horizontal (e.g. 5.7° or 90°)?",
    options: [
      "To prevent soot buildup",
      "To allow gravity to assist condensed liquid draining back to the evaporator end",
      "To reduce noise generation",
      "To match the roof architectural pitch"
    ],
    answer: 1,
    explanation: "Slide 29: Sloping the hot end below horizontal uses gravity to assist condensate return, substantially increasing heat transport capacity.",
    lesson: "L1"
  },
  {
    question: "What is the SINGLE MAJOR DISADVANTAGE of heat pipe heat exchangers according to Slide 30?",
    options: [
      "High electrical power consumption",
      "They can only transfer sensible heat and can do nothing for latent heat",
      "Frequent mechanical bearing failures",
      "High rate of cross-contamination"
    ],
    answer: 1,
    explanation: "Slide 30: The distinct disadvantage of heat pipes is that they can only transfer sensible heat, and do nothing for the latent moisture of the exhaust.",
    lesson: "L1"
  },
  {
    question: "What is the claimed energy recovery efficiency range of an ENTHALPY WHEEL (heat regenerator)?",
    options: ["20% to 40%", "50% to 60%", "70% to 90%", "99% to 100%"],
    answer: 2,
    explanation: "Slide 33: Enthalpy wheels are claimed to recover 70% to 90% of the energy from the exhaust stream, transferring both sensible and latent heat.",
    lesson: "L1"
  },
  {
    question: "What is the primary advantage of a RUN-AROUND COIL system compared to an enthalpy wheel or heat pipe?",
    options: [
      "It transfers latent moisture with 95% efficiency",
      "The two coils can be located far apart in separate ductwork, connected only by hydronic pipes",
      "It requires no pump or electric power",
      "It eliminates the need for air filters"
    ],
    answer: 1,
    explanation: "Slide 35: In a run-around coil system, the two coils are linked by a pumped water/glycol loop and can be placed completely far apart in the building.",
    lesson: "L1"
  },
  {
    question: "In a heat pump operating with heat delivered Q1 and electrical work input W, how is the COP defined and what is its typical rule-of-thumb value?",
    options: [
      "COP = W / Q1 ≈ 0.33",
      "COP = Q1 / W = Q1 / (Q1 - Q2) ≈ 3.0",
      "COP = Q2 / Q1 ≈ 1.0",
      "COP = (Q1 - Q2) / W ≈ 0.8"
    ],
    answer: 1,
    explanation: "Slide 39: COP_hp = Q1 / W = Q1 / (Q1 - Q2). As a rule of thumb, a COP of approximately 3.0 can be assumed (delivering 3 J heat per 1 J electrical work).",
    lesson: "L1"
  }
];

// ==========================================
// 5 SHORT ANSWER QUESTIONS (L01)
// ==========================================
const shortData = [
  {
    type: "compare",
    lesson: "L1",
    question: "Compare the SINGLE-PIPE and TWO-PIPE REVERSE-RETURN radiator piping arrangements (Slide 7–9). Discuss: (a) how terminal radiators are piped in the circuit, (b) the water supply temperature received by successive radiators, (c) how radiator sizing must compensate, and (d) why reverse-return piping provides natural hydraulic balance.",
    modelAnswer: "(a) Circuit Connection:\n• Single-pipe circuit: All radiators are connected in SERIES on a single loop of pipe[cite: 13].\n• Two-pipe reverse-return: Radiators are connected in PARALLEL between a separate supply main and a reverse-return main[cite: 13].\n\n(b) Water Supply Temperature:\n• Single-pipe: Water cools progressively downstream[cite: 13]. Radiator A receives full boiler water temperature, but cooled return water from A dumps back into the main pipe, so Radiators B and C receive progressively cooler water[cite: 13].\n• Two-pipe: Ideally, assuming well-insulated pipes, every single radiator receives water at the exact same supply temperature leaving the boiler[cite: 13].\n\n(c) Radiator Sizing Compensation:\n• Single-pipe: To deliver the same heat output, downstream radiators (B, C) must be sized physically LARGER to compensate for lower mean water temperature (ΔT)[cite: 13].\n• Two-pipe: Radiators of identical capacity can be sized identically[cite: 13].\n\n(d) Natural Hydraulic Balance in Reverse-Return:\n• In a reverse-return arrangement, the first radiator fed by the supply main is the LAST to return into the return header (First fed, last returned)[cite: 13].\n• As a result, the total combined length of supply and return piping is virtually IDENTICAL for every radiator loop[cite: 13]. Equal pipe length means equal friction pressure drop, so the water flow rate balances naturally across all terminal units without laborious manual balancing[cite: 13].",
    tips: "Highlight series vs parallel, progressive temperature decay, sizing compensation, and explain why first fed / last returned yields equal loop friction[cite: 13]."
  },
  {
    type: "explain",
    lesson: "L1",
    question: "Explain the operating cycle and engineering characteristics of a HEAT PIPE heat exchanger (Slide 27–30). (a) Describe the internal thermodynamic phase-change cycle within a bare heat pipe. (b) Explain why an array of heat pipes achieves zero cross-contamination. (c) Explain how tilting the pipe enhances performance, and state the major thermodynamic limitation of heat pipes.",
    modelAnswer: "(a) Internal Thermodynamic Phase-Change Cycle (Slide 28):\n1. Evaporation: Heat from hot exhaust gas enters the evaporator end, causing liquid working fluid in the internal capillary wick to boil and vaporize[cite: 13].\n2. Vapor Migration: The resulting high vapor pressure forces vapor through the central core to the cooler condenser end[cite: 13].\n3. Condensation: At the condenser, cooler fresh air cools the pipe wall; vapor condenses back into liquid, giving up its latent heat of vaporization[cite: 13].\n4. Capillary Return: The capillary wick structure pulls the condensed liquid back to the evaporator end[cite: 13]. The cycle is completely passive, sealed, and continuous with no moving parts or external power[cite: 13].\n\n(b) Zero Cross-Contamination:\n• In a counterflow heat exchanger bundle, a solid, permanently SEALED PARTITION plate separates the hot exhaust duct from the cold supply duct[cite: 13].\n• Heat pipes span across both ducts through the partition, transferring only pure thermal energy through their sealed walls without any fluid or odor mixing[cite: 13].\n\n(c) Tilting and Major Limitation:\n• Tilting: Sloping the heat pipe with the evaporator (hot end) BELOW the horizontal (commonly at 5.7° / 10% slope or 90° vertical) allows gravity to assist liquid return to the hot end, substantially boosting heat transport capacity[cite: 13].\n• Major Limitation: Heat pipes can transfer SENSIBLE HEAT ONLY; they cannot recover or transfer latent heat (moisture) between air streams[cite: 13].",
    tips: "Trace evaporation ➔ migration ➔ condensation ➔ capillary return, explain the sealed partition plate, and state the sensible-only limitation[cite: 13]."
  },
  {
    type: "scenario",
    lesson: "L1",
    question: "An air handling unit (AHU) in a commercial hospital incorporates an electric duct heater (Slide 23–25). Detail at least SIX statutory safety precautions and control requirements mandated for this installation, including physical clearance dimensions, timing sequences, and the exemption rule for small units.",
    modelAnswer: "Mandatory statutory safety rules for electric duct heaters (Slide 24–25):\n1. 1000 mm Insulation Clearance: Duct internal acoustic or thermal insulation must NOT be installed within 1000 mm of the electric heater assembly[cite: 13].\n2. Sequence Interlock: A control interlock must ensure the electric heater CANNOT be energized before the supply fan motor is confirmed running[cite: 13].\n3. 3-Minute Fan Delay: When the fan is turned off, heater power must cut off instantly, but the fan motor must run continuously for at least 3 minutes to clear residual duct heat[cite: 13].\n4. Emergency Stop Push Button: A mushroom-head button with manual reset located adjacent to the fan must override the timer delay to shut down the fan instantly[cite: 13].\n5. Airflow Failure Control: A fail-safe sail switch or differential pressure switch must instantly de-energize the heater if airflow is lost[cite: 13].\n6. Overheat Thermostat: A duct overheat thermostat (fail-safe, manual reset) placed within 600 mm of the heater must trip within 90 seconds if mean duct temperature exceeds 50 °C ± 10%[cite: 13].\n7. Fail-Safe Principle: All safety switches must automatically de-energize the heating elements upon loss of control power ('no power' condition)[cite: 13].\n8. ≤ 2 kW Exemption: For small FCUs with electric heaters not exceeding 2 kW, safety requirements are relaxed to sequence interlock and overheat thermostat only[cite: 13].",
    tips: "Cover 1000 mm insulation clearance, sequence interlock, 3-min fan overrun, emergency stop, sail switch, overheat stat (600 mm, 50°C, 90s), and the ≤2 kW FCU exemption[cite: 13]."
  },
  {
    type: "trace",
    lesson: "L1",
    question: "A heat pump is installed to heat an office zone (Slide 38–39). During a test cycle, the heat pump absorbs Q2 = 200 J of heat from outdoor ambient air and consumes W = 100 J of electrical compressor work. (a) State the First Law of Thermodynamics energy balance and calculate the heat delivered Q1. (b) Calculate the Coefficient of Performance (COP_hp). (c) Compare this performance with an electric resistance heater delivering the same heat output.",
    modelAnswer: "(a) First Law Energy Balance and Delivered Heat Q1:\n• Energy Conservation: Energy leaving the heat pump = Energy entering the heat pump\n• Formula: Q1 = Q2 + W[cite: 13]\n• Calculation: Q1 = 200 J + 100 J = 300 J of useful heat delivered at temperature T1[cite: 13].\n\n(b) Coefficient of Performance (COP_hp):\n• Formula: COP_hp = Q1 / W = Q1 / (Q1 - Q2)[cite: 13]\n• Calculation: COP_hp = 300 J / 100 J = 3.0[cite: 13]\n• This matches the standard rule-of-thumb value of COP ≈ 3.0 for space heating heat pumps[cite: 13].\n\n(c) Comparison with Electric Resistance Heating:\n• An electric resistance heater converts electrical energy directly into heat strictly on a 1-for-1 basis (COP = 1.0)[cite: 13].\n• To deliver 300 J of heat, an electric resistance heater must consume 300 J of electrical energy[cite: 13].\n• The heat pump consumes only 100 J of electricity to deliver 300 J of heat, reducing electrical energy consumption by 66.7% (delivering 3 times more heat per Joule of electricity)[cite: 13].",
    tips: "Show Q1 = Q2 + W = 300 J, calculate COP = Q1/W = 3.0, and contrast with electric heater 1-for-1 (COP = 1.0) consuming 300 J[cite: 13]."
  },
  {
    type: "compare",
    lesson: "L1",
    question: "Compare THREE heat emitting units (Slide 15–19): (1) Metal Radiant Panel, (2) Traditional Radiator under a window, and (3) Embedded Floor Panel. For each, discuss: (a) typical operating surface temperature, (b) heat transfer mechanism ratio (radiation vs convection), and (c) primary building application.",
    modelAnswer: "1. Metal Radiant Panel (Slide 15):\n• (a) Surface Temperature: High operating temperature, typically 100 °C to 150 °C[cite: 13].\n• (b) Heat Transfer Split: Approx. 60% radiation + 40% convection[cite: 13].\n• (c) Application: Large factory halls, industrial workshops, and high-bay warehouses using medium/high-temperature hot water or steam[cite: 13].\n\n2. Traditional Radiator under Window (Slide 17):\n• (a) Surface Temperature: Warm to touch, typically 70 °C to 85 °C (low-temperature hot water)[cite: 13].\n• (b) Heat Transfer Split: Approx. 70% convection + 30% radiation[cite: 13].\n• (c) Application: Residential rooms, schools, and offices[cite: 13]. Best placed directly under windows to counteract cold downdrafts and negative radiation from cold glazing[cite: 13].\n\n3. Embedded Floor Panel (Slide 19):\n• (a) Surface Temperature: Low surface temperature, typically 27 °C to 50 °C (safe for bare skin/feet)[cite: 13].\n• (b) Heat Transfer Split: Highly uniform low-temperature radiant emission with gentle natural convection across a large surface area[cite: 13].\n• (c) Application: Modern residential living rooms, hospitals, and kindergartens requiring invisible heating and high thermal mass (retains and emits heat long after boiler shut-off)[cite: 13].",
    tips: "Structure systematically across surface temp (100-150°C vs 70-85°C vs 27-50°C), radiation/convection ratio (60/40 vs 30/70), and application[cite: 13]."
  }
];

// ==========================================
// RENDER & DOM BINDINGS
// ==========================================
function renderNotes() {
  const c = document.getElementById('notesContainer');
  c.innerHTML = '';
  notesData.forEach(topic => {
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.id = topic.id;
    let sectionsHTML = '';
    topic.sections.forEach(sec => {
      sectionsHTML += `
        <h3 style="margin-top:18px;margin-bottom:6px;color:#34495e;font-size:16px;border-bottom:1px dashed #dce1e6;padding-bottom:4px;">${escapeHtml(sec.title)}</h3>
        <div class="lang-pair">
          <div class="lang-cell zh">
            <div class="lang-label">中文重點 / Cantonese &amp; Chinese</div>
            ${sec.zh}
          </div>
          <div class="lang-cell en">
            <div class="lang-label">English Notes</div>
            ${sec.en}
          </div>
        </div>`;
    });
    let diagramHTML = '';
    if (topic.diagram) {
      diagramHTML = `
        <div class="diagram-block">
          <div class="diagram-title">⚡ SCADA Interactive Schematic / 工業級動態供熱原理圖</div>
          ${topic.diagram}
          ${topic.diagramCaption ? '<div class="diagram-caption">' + escapeHtml(topic.diagramCaption) + '</div>' : ''}
        </div>`;
    }
    card.innerHTML = `
      <div class="topic-header">
        <div class="topic-icon">${topic.icon}</div>
        <div class="topic-title">
          <h2>${escapeHtml(topic.title)} <span style="color:#7f8c8d;font-weight:normal;font-size:14px;">/ ${escapeHtml(topic.titleZh)}</span></h2>
        </div>
      </div>
      ${sectionsHTML}
      ${diagramHTML}`;
    c.appendChild(card);
  });
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const shuffledAnswers = {};
function renderMC() {
  const container = document.getElementById('mcContainer');
  container.innerHTML = '';
  mcData.forEach((q, index) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.id = 'mc-q' + index;
    const indices = q.options.map((_, i) => i);
    shuffleArray(indices);
    const newAnswerIndex = indices.indexOf(q.answer);
    shuffledAnswers[index] = newAnswerIndex;
    let optionsHTML = '';
    indices.forEach((origIdx, displayIdx) => {
      const opt = q.options[origIdx];
      const safeOpt = escapeHtml(opt);
      optionsHTML += `
        <label id="mc-q${index}-opt${displayIdx}">
          <input type="radio" name="mc${index}" value="${displayIdx}" onchange="recordAnswer(${index}, ${displayIdx})">
          ${safeOpt}
        </label>`;
    });
    card.innerHTML = `
      <div class="q-header">
        <span class="q-number">Q${index + 1}</span>
        <span class="q-tag">${lessonLabels[q.lesson] || q.lesson}</span>
      </div>
      <div class="q-text">${escapeHtml(q.question)}</div>
      <div class="options">${optionsHTML}</div>
      <div class="explanation" id="mc-exp${index}">
        <strong>Explanation / 詳細解釋：</strong>${escapeHtml(q.explanation)}
      </div>`;
    container.appendChild(card);
  });
}

function renderShort() {
  const c = document.getElementById('shortContainer');
  c.innerHTML = '';
  shortData.forEach((q, index) => {
    const card = document.createElement('div');
    card.className = 'question-card short-q';
    card.id = 'short-q' + index;
    const typeTag = typeLabels[q.type] || '';
    const lessonTag = `<span class="q-tag">${lessonLabels[q.lesson] || q.lesson}</span>`;
    const safeQuestion = escapeHtml(q.question).replace(/\n/g, '<br>');
    card.innerHTML = `
      <div class="q-header">
        <span class="q-number">S${index + 1}</span>
        ${typeTag}
        ${lessonTag}
      </div>
      <div class="q-text">${safeQuestion}</div>
      <textarea id="short-input${index}" placeholder="Type your calculations or space heating analysis here / 喺度輸入你的計算或工程分析答案..."></textarea>
      <div class="answer-tips">💡 Tip / 提示：${escapeHtml(q.tips || 'Key engineering concepts')}</div>
      <div class="model-answer" id="short-ans${index}">
        <strong>📝 Model Answer / 規範參考答案：</strong>
        <pre></pre>
      </div>`;
    card.querySelector('pre').textContent = q.modelAnswer;
    c.appendChild(card);
  });
}

let userAnswers = {};
let timerInterval;
let timeLeft = 90 * 60;

function recordAnswer(qIndex, optIndex) {
  userAnswers[qIndex] = optIndex;
  updateStats();
}

function updateStats() {
  const answered = Object.keys(userAnswers).length;
  const total = mcData.length;
  document.getElementById('answeredCount').textContent = answered + '/' + total;
  const percent = (answered / total) * 100;
  document.getElementById('progressBar').style.width = percent + '%';
}

function showSection(section) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (section === 'notes') {
    document.getElementById('notesSection').classList.add('active');
    document.querySelectorAll('.tab-btn')[0].classList.add('active');
  } else if (section === 'part1') {
    document.getElementById('part1Section').classList.add('active');
    document.querySelectorAll('.tab-btn')[1].classList.add('active');
  } else if (section === 'part2') {
    document.getElementById('part2Section').classList.add('active');
    document.querySelectorAll('.tab-btn')[2].classList.add('active');
  }
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function submitMC() {
  let correct = 0;
  let reviewHTML = '';
  mcData.forEach((q, index) => {
    const userAnswer = userAnswers[index];
    const correctDisplayAnswer = shuffledAnswers[index];
    const isCorrect = userAnswer === correctDisplayAnswer;
    const card = document.getElementById('mc-q' + index);
    const explanation = document.getElementById('mc-exp' + index);
    explanation.style.display = 'block';
    if (isCorrect) {
      correct++;
      card.classList.add('answered');
      if (userAnswer !== undefined) document.getElementById('mc-q' + index + '-opt' + userAnswer).classList.add('correct');
      reviewHTML += `<div class="review-item correct">Q${index + 1} ✓ — ${escapeHtml(q.question.substring(0, 45))}…</div>`;
    } else {
      card.classList.add('wrong');
      if (userAnswer !== undefined) document.getElementById('mc-q' + index + '-opt' + userAnswer).classList.add('incorrect');
      document.getElementById('mc-q' + index + '-opt' + correctDisplayAnswer).classList.add('correct');
      reviewHTML += `<div class="review-item wrong">Q${index + 1} ✗ — ${escapeHtml(q.question.substring(0, 45))}…</div>`;
    }
  });
  const percent = Math.round((correct / mcData.length) * 100);
  document.getElementById('finalScore').textContent = percent + '%';
  document.getElementById('scoreCircle').style.setProperty('--percent', percent);
  let msg = '';
  if (percent >= 80) msg = '🎉 卓越！你已經徹底掌握空間供熱、管網配置與熱能回收系統的核心精髓！';
  else if (percent >= 60) msg = '👍 做得好！請仔細閱讀答錯題目的詳細分析與計算題解。';
  else if (percent >= 50) msg = '✅ 及格。建議重溫雙管同程平衡、電加熱器安全法規與熱泵 COP 計算。';
  else msg = '📚 繼續努力！點擊 Notes 重新溫習相應供熱章節後再試一次。';
  document.getElementById('resultMsg').textContent = msg;
  document.getElementById('scoreDisplay').textContent = percent + '%';
  document.getElementById('reviewSection').innerHTML = `<h3>MC Result: ${correct}/${mcData.length} (${percent}%)</h3><div>${reviewHTML}</div>`;
  document.getElementById('resultPanel').style.display = 'block';
  document.getElementById('resultPanel').scrollIntoView({ behavior: 'auto' });
  clearInterval(timerInterval);
}

function showAnswers() {
  shortData.forEach((q, index) => {
    document.getElementById('short-ans' + index).style.display = 'block';
  });
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    document.getElementById('timer').textContent = String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
    if (timeLeft <= 0) { clearInterval(timerInterval); alert('Time is up!'); submitMC(); }
    if (timeLeft <= 300) document.getElementById('timer').style.color = '#e74c3c';
  }, 1000);
}

document.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') setTimeout(() => e.target.blur(), 100);
});

window.onload = function() {
  renderNotes();
  renderMC();
  renderShort();
  startTimer();
  updateStats();
};

window.addEventListener('scroll', function() {
  const btn = document.getElementById('toTop');
  if (!btn) return;
  if (window.pageYOffset > 400) btn.classList.add('show');
  else btn.classList.remove('show');
});
