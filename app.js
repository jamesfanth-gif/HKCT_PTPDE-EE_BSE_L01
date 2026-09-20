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
// 12 FULLY DEBUGGED PURE-SVG SCHEMATICS (ZERO HTML TAGS)
// =======================================================
const notesData = [
  {
    id: 't1', icon: '1', title: 'Direct vs Indirect Space Heating Methods',
    titleZh: '直接局部供熱 vs 間接集中供熱',
    diagram: `<svg viewBox="0 0 760 330" xmlns="http://www.w3.org/2000/svg" width="100%">
      <!-- Left: Direct Heating -->
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="25" width="350" height="275" fill="#243342" stroke="#e67e22" stroke-width="2" rx="8"/>
        <text x="175" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#f39c12">DIRECT (Local) Heating (直接局部供熱)</text>
        <rect x="25" y="45" width="300" height="135" fill="#1a252f" stroke="#e67e22" rx="4"/>
        <text x="175" y="65" text-anchor="middle" font-size="10" fill="#ffffff">Fuel burnt IN the room (燃料在室內燃燒)</text>
        <rect x="130" y="80" width="90" height="65" fill="#78281f" stroke="#e74c3c" rx="4"/>
        <path d="M 175 130 C 155 105, 195 105, 175 90 C 165 75, 185 75, 175 60" fill="none" stroke="#f1c40f" stroke-width="4"/>
        <text x="175" y="140" text-anchor="middle" font-size="8" fill="#ffffff" font-weight="bold">Fireplace / Stove</text>
        <path d="M 175 60 L 175 35 L 230 35" fill="none" stroke="#bdc3c7" stroke-width="3" stroke-dasharray="3 2"/>
        <text x="270" y="38" font-size="8.5" fill="#bdc3c7">Flue gas to room</text>
        <rect x="15" y="195" width="320" height="95" fill="#111111" stroke="#e67e22" rx="4"/>
        <text x="175" y="215" text-anchor="middle" font-size="10" fill="#f39c12" font-weight="bold">Characteristics and Hazards:</text>
        <text x="25" y="235" font-size="9" fill="#ffffff">• Open fires, closed stoves, gas convectors</text>
        <text x="25" y="253" font-size="9" fill="#ecf0f1">• Instant heat, but high combustion risk (CO, NOx, soot)</text>
        <text x="25" y="271" font-size="9" fill="#ff7675">• Lack of centralized zonal thermal regulation</text>
      </g>
      <!-- Right: Indirect Central Heating -->
      <g class="scada-unit" transform="translate(395, 20)">
        <rect x="0" y="25" width="350" height="275" fill="#243342" stroke="#16a085" stroke-width="2" rx="8"/>
        <text x="175" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#1abc9c">INDIRECT (Central) Heating (間接集中供熱)</text>
        <g transform="translate(25, 45)">
          <rect x="0" y="20" width="100" height="85" fill="#78281f" stroke="#c0392b" rx="4"/>
          <text x="50" y="55" text-anchor="middle" font-size="9.5" fill="#ffffff" font-weight="bold">Remote</text>
          <text x="50" y="72" text-anchor="middle" font-size="9.5" fill="#ffffff" font-weight="bold">Boiler Plant</text>
          <path d="M 100 45 L 200 45" stroke="#ff7675" stroke-width="4" class="flow-hot-water"/>
          <text x="150" y="38" text-anchor="middle" font-size="8.5" fill="#ff7675" font-weight="bold">Supply Pipe</text>
          <path d="M 200 85 L 100 85" stroke="#00d2d3" stroke-width="4" class="flow-return-water"/>
          <text x="150" y="100" text-anchor="middle" font-size="8.5" fill="#00d2d3" font-weight="bold">Return Pipe</text>
          <rect x="200" y="25" width="90" height="75" fill="#1a252f" stroke="#16a085" rx="3"/>
          <text x="245" y="60" text-anchor="middle" font-size="9.5" fill="#1abc9c" font-weight="bold">Room</text>
          <text x="245" y="76" text-anchor="middle" font-size="9" fill="#ffffff">Radiator</text>
        </g>
        <rect x="15" y="195" width="320" height="95" fill="#111111" stroke="#16a085" rx="4"/>
        <text x="175" y="215" text-anchor="middle" font-size="10" fill="#1abc9c" font-weight="bold">Centralized Safety and Benefits:</text>
        <text x="25" y="235" font-size="9" fill="#ffffff">• Media: Warm air, hot water, or steam</text>
        <text x="25" y="253" font-size="9" fill="#ecf0f1">• Flue gas handled safely at central chimney</text>
        <text x="25" y="271" font-size="9" fill="#2ecc71">• Precise zoning and automated thermal control</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 1: Direct local heating (combustion in occupied space) vs Indirect central heating (combustion in plant room; heat transported by fluid medium)',
    sections: [
      {
        title: 'Two Fundamental Heating Categories / 兩大空間供熱方式',
        zh: '<p>空間供熱依燃料燃燒位置分為兩大類[cite: 13]：</p><ul><li><strong>直接 (Direct / Local) 供熱</strong>：燃料直接在需加熱的房間內部燃燒（如明火 open fire、密封爐 closed stove、燃氣自然對流器）[cite: 13]。熱量即時產生，但燃燒產物（CO、NOx、煙氣）直接滯留室內，安全風險高且難以多區自動控制[cite: 13]；</li><li><strong>間接 (Indirect / Central) 供熱</strong>：燃料在遠離起居區的機房（如地庫鍋爐房）燃燒，熱能透過「傳熱介質」輸送至末端[cite: 13]。常見介質為<strong>暖風 (warm-air)、熱水 (hot-water) 與蒸汽 (steam)</strong>[cite: 13]。排煙集中處理，室內空氣清潔安全[cite: 13]。</li></ul>',
        en: '<p>Space heating is categorized into two main streams[cite: 13]:</p><ul><li><strong>Direct (Local) heating</strong>: Fuel is consumed directly in the space (open fire, stove, gas convector)[cite: 13]. Quick heat, but flue gases enter the room and zoning is poor[cite: 13];</li><li><strong>Indirect (Central) heating</strong>: Fuel is burnt remotely in a boiler/furnace room; thermal energy is piped via a medium (<strong>warm air, hot water, or steam</strong>) to room terminals[cite: 13]. Flue gases are safely discharged centrally[cite: 13].</li></ul>'
      }
    ]
  },
  {
    id: 't2', icon: '2', title: 'Warm-Air Heating Systems & Basement Furnaces',
    titleZh: '暖風供熱系統與地庫加熱風道佈置',
    diagram: `<svg viewBox="0 0 760 330" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="720" height="280" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="360" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Warm-Air Heating System (地庫暖風爐與多房間風道佈置)</text>
        <line x1="40" y1="180" x2="680" y2="180" stroke="#7f8c8d" stroke-width="2" stroke-dasharray="6 3"/>
        <text x="60" y="172" font-size="9" fill="#bdc3c7">Ground Level (地面)</text>
        <rect x="60" y="195" width="160" height="95" fill="#1a252f" stroke="#e67e22" stroke-width="2" rx="4"/>
        <text x="140" y="222" text-anchor="middle" font-size="10.5" fill="#f39c12" font-weight="bold">Basement Furnace</text>
        <circle cx="185" cy="250" r="16" fill="#34495e"/>
        <text x="185" y="254" text-anchor="middle" font-size="8" fill="#ffffff">Blower</text>
        <path d="M 220 250 L 650 250" stroke="#f1c40f" stroke-width="8" class="flow-air-stream"/>
        <text x="435" y="270" text-anchor="middle" font-size="9.5" fill="#f1c40f">Under-floor / In-wall Supply Duct (主風道)</text>
        <path d="M 280 250 L 280 130" stroke="#f1c40f" stroke-width="5" class="flow-air-stream"/>
        <rect x="245" y="75" width="70" height="55" fill="#1b4f72" stroke="#3498db" rx="3"/>
        <text x="280" y="105" text-anchor="middle" font-size="8.5" fill="#ffffff">Room A</text>
        
        <path d="M 430 250 L 430 130" stroke="#f1c40f" stroke-width="5" class="flow-air-stream"/>
        <rect x="395" y="75" width="70" height="55" fill="#1b4f72" stroke="#3498db" rx="3"/>
        <text x="430" y="105" text-anchor="middle" font-size="8.5" fill="#ffffff">Room B</text>

        <path d="M 580 250 L 580 130" stroke="#f1c40f" stroke-width="5" class="flow-air-stream"/>
        <rect x="545" y="75" width="70" height="55" fill="#1b4f72" stroke="#3498db" rx="3"/>
        <text x="580" y="105" text-anchor="middle" font-size="8.5" fill="#ffffff">Room C</text>
        
        <rect x="40" y="45" width="190" height="105" fill="#111111" stroke="#f39c12" rx="4"/>
        <text x="135" y="68" text-anchor="middle" font-size="10" fill="#f39c12" font-weight="bold">Engineering Constraints:</text>
        <text x="15" y="90" font-size="8.5" fill="#ffffff">• Simple, direct air warming</text>
        <text x="15" y="108" font-size="8.5" fill="#ecf0f1">• Flow: gravity or fan driven</text>
        <text x="15" y="126" font-size="8.5" fill="#ff7675">• Bulky duct sizes</text>
        <text x="15" y="142" font-size="8.5" fill="#f1c40f">• 1-2 family houses ONLY</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 2: Warm-air heating layout: Basement furnace delivering heated air through under-floor ducts to rooms; restricted to small 1–2 family dwellings',
    sections: [
      {
        title: 'Warm-Air System Architecture / 暖風系統運作原理',
        zh: '<p><strong>暖風系統 (Warm-air system)</strong> 在地庫暖風爐房 (furnace room) 將空氣加熱，利用地下或牆內風道輸送至各房間[cite: 13]。氣流可由<strong>重力熱壓 (gravity)</strong> 或<strong>送風機 (fan)</strong> 驅動[cite: 13]。</p>',
        en: '<p>A <strong>warm-air system</strong> uses a furnace (usually in the basement) to heat air, distributing it through ducts via gravity or fan power[cite: 13].</p>'
      },
      {
        title: 'Pros, Cons & Application Limits / 優缺點與適用範圍',
        zh: '<div class="key-point"><strong>嚴格建築限制（Slide 4）：</strong><br>• <strong>優點</strong>：簡單、直接[cite: 13]；<br>• <strong>缺點</strong>：空氣容積熱容小，<strong>風管體積巨大 (bulky ducts)</strong>，佔用樓層淨高；傳熱距離短[cite: 13]；<br>• <strong>適用範圍</strong>：<strong>僅用於一戶或兩戶的小型低層住宅 (one- or two-family houses only)</strong>[cite: 13]。</div>',
        en: '<div class="key-point"><strong>Key Limits (Slide 4):</strong><br>• <strong>Pros</strong>: Simple and direct[cite: 13];<br>• <strong>Cons</strong>: Bulky ducts and short heat transport distance[cite: 13];<br>• <strong>Application</strong>: Used <strong>only in small buildings such as one- or two-family houses</strong>[cite: 13].</div>'
      }
    ]
  },
  {
    id: 't3', icon: '3', title: 'Hot-Water Heating Systems & Rapid Response',
    titleZh: '熱水供熱系統循環與熱負荷快速響應優勢',
    diagram: `<svg viewBox="0 0 760 330" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="720" height="280" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="360" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Hot-Water Hydronic System Layout (熱水循環管網與散熱器配置)</text>
        <rect x="50" y="75" width="110" height="125" fill="#78281f" stroke="#c0392b" stroke-width="2" rx="4"/>
        <text x="105" y="125" text-anchor="middle" font-size="11.5" fill="#ffffff" font-weight="bold">BOILER</text>
        <text x="105" y="145" text-anchor="middle" font-size="9.5" fill="#f5b7b1">鍋爐</text>
        <circle cx="200" cy="180" r="16" fill="#16a085"/>
        <text x="200" y="184" text-anchor="middle" font-size="9" fill="#ffffff" font-weight="bold">P</text>
        <text x="200" y="210" text-anchor="middle" font-size="8.5" fill="#1abc9c">Pump</text>
        <path d="M 160 95 L 660 95" stroke="#ff7675" stroke-width="5" class="flow-hot-water"/>
        <text x="380" y="85" text-anchor="middle" font-size="10" fill="#ff7675" font-weight="bold">Supply Pipe (Hot: 70–90 °C)</text>
        <path d="M 660 180 L 216 180" stroke="#00d2d3" stroke-width="5" class="flow-return-water"/>
        <text x="380" y="198" text-anchor="middle" font-size="10" fill="#00d2d3" font-weight="bold">Return Pipe (Cooled)</text>
        <g transform="translate(260, 105)">
          <rect x="0" y="0" width="60" height="65" fill="#1a252f" stroke="#ff7675" rx="3"/>
          <text x="30" y="38" text-anchor="middle" font-size="9" fill="#ffffff">Rad 1</text>
        </g>
        <g transform="translate(410, 105)">
          <rect x="0" y="0" width="60" height="65" fill="#1a252f" stroke="#ff7675" rx="3"/>
          <text x="30" y="38" text-anchor="middle" font-size="9" fill="#ffffff">Rad 2</text>
        </g>
        <g transform="translate(560, 105)">
          <rect x="0" y="0" width="60" height="65" fill="#1a252f" stroke="#ff7675" rx="3"/>
          <text x="30" y="38" text-anchor="middle" font-size="9" fill="#ffffff">Rad 3</text>
        </g>
        <rect x="40" y="225" width="640" height="65" fill="#111111" stroke="#1abc9c" rx="4"/>
        <text x="360" y="248" text-anchor="middle" font-size="10.5" fill="#1abc9c" font-weight="bold">Three Major Advantages over Warm-Air Systems (Slide 5):</text>
        <text x="360" y="268" text-anchor="middle" font-size="9.5" fill="#ecf0f1">1. Water pipes occupy smaller space than ducts | 2. Fast &amp; uniform response to load changes | 3. Output easily matched to load (overheating minimized).</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 3: Closed hot-water system: Boiler and circulation pump distributing hot water to space heating terminals with rapid response and compact pipework',
    sections: [
      {
        title: 'Hot-Water System Advantages / 熱水系統運作與三大優點',
        zh: '<p>鍋爐將水加熱後，經密閉水管送到房間終端設備散熱[cite: 13]。</p><div class="key-point"><strong>三大核心優點（Slide 5）：</strong><br>1. <strong>水管比風管佔用更少空間 (Pipes occupy smaller space than ducts)</strong>[cite: 13]；<br>2. <strong>對熱負載變化反應迅速且均勻 (Responds quickly and uniformly)</strong>[cite: 13]；<br>3. <strong>易於根據實際熱需求調節出力，避免過熱浪費 (Overheating minimised)</strong>[cite: 13]。</div>',
        en: '<p>Boiler heats water, which is pumped through pipes to space terminal units[cite: 13].</p><div class="key-point"><strong>Three Major Advantages (Slide 5):</strong><br>1. Pipes occupy far <strong>less space than ducts</strong>[cite: 13];<br>2. Responds <strong>quickly and uniformly</strong> to load changes[cite: 13];<br>3. Economical to <strong>match output to load</strong>, minimising overheating[cite: 13].</div>'
      }
    ]
  },
  {
    id: 't4', icon: '4', title: 'Hot Water Classification by Design Temperature',
    titleZh: '熱水系統按水溫四大分級與管徑耐壓取捨',
    diagram: `<svg viewBox="0 0 760 330" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="720" height="280" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="360" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">System Classification by Design Temperature (熱水溫度四個分級)</text>
        <g transform="translate(40, 45)">
          <rect x="0" y="0" width="640" height="34" fill="#f39c12" opacity="0.6"/>
          <text x="15" y="22" font-size="10.5" fill="#ffffff" font-weight="bold">(a) Low Temperature Warm Water: 40 °C – 70 °C</text>
          <text x="625" y="22" font-size="9.5" fill="#ffffff" text-anchor="end">Floor panels / Heat pumps</text>
          
          <rect x="0" y="44" width="640" height="34" fill="#e67e22" opacity="0.8"/>
          <text x="15" y="66" font-size="10.5" fill="#ffffff" font-weight="bold">(b) Low Temperature Hot Water (LTHW): 70 °C – 100 °C</text>
          <text x="625" y="66" font-size="9.5" fill="#ffffff" text-anchor="end">Standard commercial radiators</text>

          <rect x="0" y="88" width="640" height="34" fill="#c0392b" opacity="0.85"/>
          <text x="15" y="110" font-size="10.5" fill="#ffffff" font-weight="bold">(c) Medium Temperature Hot Water (MTHW): 110 °C – 130 °C</text>
          <text x="625" y="110" font-size="9.5" fill="#ffffff" text-anchor="end">District heating / Industrial</text>

          <rect x="0" y="132" width="640" height="34" fill="#8e44ad" opacity="0.9"/>
          <text x="15" y="154" font-size="10.5" fill="#ffffff" font-weight="bold">(d) High Temperature Hot Water (HTHW): 140 °C – 180 °C</text>
          <text x="625" y="154" font-size="9.5" fill="#ffffff" text-anchor="end">Long distance multi-building campus</text>
        </g>
        <rect x="40" y="225" width="640" height="65" fill="#111111" stroke="#f1c40f" rx="4"/>
        <text x="360" y="248" text-anchor="middle" font-size="10.5" fill="#f1c40f" font-weight="bold">Engineering Trade-off: Higher T ➔ Stores more heat per kg ➔ Smaller pipe diameter!</text>
        <text x="360" y="268" text-anchor="middle" font-size="9.5" fill="#ecf0f1">Trade-off Penalty: Heavier thick-walled pipes and higher-pressure fittings are required to resist elevated working pressure.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 4: Four water heating temperature bands: Higher operating temperatures maximize heat carrying density per kg, enabling smaller pipe bores for long-distance district distribution',
    sections: [
      {
        title: 'Four Temperature Bands / 四個溫度分級與工程取捨',
        zh: '<p>按設計溫度分為四類[cite: 13]：</p><div class="formula-block">(a) 低溫暖水 (Low temp warm water):   40 – 70  °C\n(b) 低溫熱水 (Low temp hot water):    70 – 100 °C\n(c) 中溫熱水 (Medium temp hot water): 110 – 130 °C\n(d) 高溫熱水 (High temp hot water):   140 – 180 °C</div><div class="key-point"><strong>工程取捨（Slide 6）：</strong> 水溫越高，每千克水蓄熱量越大，<strong>可用更細管徑 (smaller pipe sizes)</strong>[cite: 13]；但水壓隨溫度升高而倍增，<strong>必須採用更厚重的管材 (heavier pipes)</strong> 來承受高工作壓力，多用於多棟建築長途輸送[cite: 13]。</div>',
        en: '<p>Water systems are grouped into four temperature bands[cite: 13]:</p><div class="formula-block">(a) Low temp warm water:      40 – 70  °C\n(b) Low temp hot water:       70 – 100 °C\n(c) Medium temp hot water:   110 – 130 °C\n(d) High temp hot water:     140 – 180 °C</div><div class="key-point"><strong>Trade-off (Slide 6):</strong> Higher temperatures allow water to store more heat per kg, enabling <strong>smaller pipe diameters</strong>, but require <strong>heavier pipes</strong> to handle elevated pressure[cite: 13].</div>'
      }
    ]
  },
  {
    id: 't5', icon: '5', title: 'Radiator Piping: Single-Pipe vs Two-Pipe Reverse-Return',
    titleZh: '單管串聯遞減 vs 雙管同程水力自平衡管路',
    diagram: `<svg viewBox="0 0 760 330" xmlns="http://www.w3.org/2000/svg" width="100%">
      <!-- Left: Single-Pipe Series -->
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="25" width="350" height="280" fill="#243342" stroke="#e74c3c" stroke-width="2" rx="8"/>
        <text x="175" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#ff7675">Single-Pipe Circuit (單管串聯回路)</text>
        <rect x="25" y="135" width="45" height="55" fill="#78281f" stroke="#c0392b" rx="2"/>
        <text x="47" y="167" text-anchor="middle" font-size="8.5" fill="#ffffff">Boiler</text>
        <path d="M 70 145 L 120 145 L 120 65 L 305 65 L 305 185 L 70 185" fill="none" stroke="#ff7675" stroke-width="4" class="flow-hot-water"/>
        <rect x="120" y="70" width="40" height="40" fill="#1a252f" stroke="#ff7675"/>
        <text x="140" y="92" text-anchor="middle" font-size="8" fill="#ffffff">Rad A</text>
        <text x="140" y="125" text-anchor="middle" font-size="8" fill="#ff7675" font-weight="bold">100°C</text>
        <rect x="185" y="70" width="48" height="40" fill="#1a252f" stroke="#f39c12"/>
        <text x="209" y="92" text-anchor="middle" font-size="8" fill="#ffffff">Rad B</text>
        <text x="209" y="125" text-anchor="middle" font-size="8" fill="#f39c12" font-weight="bold">85°C</text>
        <rect x="250" y="70" width="55" height="40" fill="#1a252f" stroke="#3498db"/>
        <text x="277" y="92" text-anchor="middle" font-size="8" fill="#ffffff">Rad C</text>
        <text x="277" y="125" text-anchor="middle" font-size="8" fill="#00d2d3" font-weight="bold">70°C</text>
        <rect x="20" y="200" width="310" height="90" fill="#111111" stroke="#e74c3c" rx="4"/>
        <text x="175" y="222" text-anchor="middle" font-size="10" fill="#ff7675" font-weight="bold">Water cools progressively along loop:</text>
        <text x="175" y="242" text-anchor="middle" font-size="8.5" fill="#ecf0f1">Exiting cooled water returns into the SAME pipe.</text>
        <text x="175" y="260" text-anchor="middle" font-size="9" fill="#f1c40f" font-weight="bold">Downstream radiators MUST be larger for equal output!</text>
      </g>
      <!-- Right: Two-Pipe Reverse-Return -->
      <g class="scada-unit" transform="translate(395, 20)">
        <rect x="0" y="25" width="350" height="280" fill="#243342" stroke="#2ecc71" stroke-width="2" rx="8"/>
        <text x="175" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#2ecc71">Two-Pipe Reverse-Return (雙管同程自平衡)</text>
        <rect x="25" y="135" width="45" height="55" fill="#78281f" stroke="#c0392b" rx="2"/>
        <text x="47" y="167" text-anchor="middle" font-size="8.5" fill="#ffffff">Boiler</text>
        <path d="M 70 145 L 110 145 L 110 60 L 305 60" fill="none" stroke="#ff7675" stroke-width="3.5" class="flow-hot-water"/>
        <path d="M 130 115 L 130 140 L 305 140 L 325 140 L 325 185 L 70 185" fill="none" stroke="#00d2d3" stroke-width="3.5" class="flow-return-water"/>
        <rect x="130" y="75" width="45" height="42" fill="#1a252f" stroke="#2ecc71"/>
        <text x="152" y="98" text-anchor="middle" font-size="8" fill="#ffffff">Rad A</text>
        <rect x="195" y="75" width="45" height="42" fill="#1a252f" stroke="#2ecc71"/>
        <text x="217" y="98" text-anchor="middle" font-size="8" fill="#ffffff">Rad B</text>
        <rect x="260" y="75" width="45" height="42" fill="#1a252f" stroke="#2ecc71"/>
        <text x="282" y="98" text-anchor="middle" font-size="8" fill="#ffffff">Rad C</text>
        <rect x="20" y="200" width="310" height="90" fill="#111111" stroke="#2ecc71" rx="4"/>
        <text x="175" y="222" text-anchor="middle" font-size="10" fill="#2ecc71" font-weight="bold">Parallel Feed + Equal Total Length:</text>
        <text x="175" y="242" text-anchor="middle" font-size="8.5" fill="#ecf0f1">All radiators receive identical supply water temperature.</text>
        <text x="175" y="260" text-anchor="middle" font-size="9" fill="#f1c40f" font-weight="bold">Total friction loss equal ➔ Natural flow balancing!</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 5: Single-pipe series (water temperature drops along loop, requiring larger downstream units) vs Two-pipe reverse-return (equal circuit lengths, identical supply temperature, self-balancing)',
    sections: [
      {
        title: 'Single-Pipe vs Reverse-Return / 單管 vs 雙管同程對比',
        zh: '<p><strong>單管系統 (Single-pipe)</strong>：單管串聯所有散熱器[cite: 13]。散熱器出水返回同管，水溫<strong>越遠越凍</strong>（100°C ➔ 85°C ➔ 70°C），<strong>後端散熱器必須加大面積</strong>以保證散熱量[cite: 13]；</p><p><strong>雙管同程 (Two-pipe reverse-return)</strong>：供水與回水兩管並聯，<strong>先供水者後回水（First fed, last returned）</strong>[cite: 13]。每個迴路<strong>總管長完全相等、阻力相同，流量自然平衡</strong>，各散熱器水溫均勻[cite: 13]。</p>',
        en: '<p><strong>Single-pipe</strong>: Radiators in series; water temperature drops downstream, requiring <strong>progressively larger radiators</strong>[cite: 13].</p><p><strong>Two-pipe reverse-return</strong>: Radiators in parallel; each loop has the <strong>same total pipe length and friction loss, balancing flow naturally</strong>[cite: 13].</p>'
      }
    ]
  },
  {
    id: 't6', icon: '6', title: 'Steam Heating Systems: Gravity Returns & District CHP',
    titleZh: '低壓蒸汽供熱系統、乾濕回流與區域熱電聯產',
    diagram: `<svg viewBox="0 0 760 330" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="720" height="280" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="360" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Low-Pressure Steam System: Dry vs Wet Return &amp; District CHP (蒸汽供熱與回流管路)</text>
        <rect x="50" y="85" width="90" height="95" fill="#78281f" stroke="#c0392b" rx="4"/>
        <text x="95" y="125" text-anchor="middle" font-size="10" fill="#ffffff" font-weight="bold">Boiler</text>
        <line x1="95" y1="145" x2="95" y2="145" stroke="#00d2d3" stroke-width="4"/>
        <text x="95" y="160" text-anchor="middle" font-size="8" fill="#00d2d3">Water Line</text>
        <path d="M 95 85 L 95 50 L 640 50" stroke="#ffffff" stroke-width="5" class="flow-steam"/>
        <text x="370" y="42" text-anchor="middle" font-size="9.5" fill="#ffffff" font-weight="bold">Steam Pipe (Sensible + Latent Heat)</text>
        <path d="M 640 105 L 140 105" stroke="#00d2d3" stroke-width="3.5" class="flow-return-water"/>
        <text x="370" y="98" text-anchor="middle" font-size="9" fill="#5dade2">Dry Return: Condensate pipe ABOVE boiler water level</text>
        <path d="M 640 170 L 140 170" stroke="#00d2d3" stroke-width="3.5" stroke-dasharray="4 2"/>
        <text x="370" y="185" text-anchor="middle" font-size="9" fill="#2ecc71">Wet Return: Condensate pipe BELOW boiler water level</text>
        <rect x="40" y="205" width="640" height="85" fill="#111111" stroke="#1abc9c" rx="4"/>
        <text x="360" y="228" text-anchor="middle" font-size="10.5" fill="#ffffff">District Heating and Combined Heat and Power (CHP): Steam produced centrally by utility plants and piped to buildings.</text>
        <text x="360" y="248" text-anchor="middle" font-size="9.5" fill="#f1c40f">Advantages: Higher heat capacity per kg (latent heat) enables long-distance distribution at lower running cost.</text>
        <text x="360" y="268" text-anchor="middle" font-size="9.5" fill="#ff7675">Disadvantages: Disposing of condensate and removing air from long pipework are major engineering headaches.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 6: Low-pressure steam systems: Overhead steam main, Dry return (above boiler water level), Wet return (below water level), and District CHP networks',
    sections: [
      {
        title: 'Steam System Mechanics & District CHP / 蒸汽系統與區域供熱',
        zh: '<p>蒸汽系統利用相變<strong>潛熱 (latent heat)</strong> 傳熱[cite: 13]：</p><ul><li><strong>乾回流 (Dry return)</strong>：凝水管敷設於<strong>鍋爐水位線之上</strong>[cite: 13]；</li><li><strong>濕回流 (Wet return)</strong>：凝水管敷設於<strong>鍋爐水位線之下</strong>[cite: 13]；</li><li><strong>區域供熱 / 熱電聯產 (District heating / CHP)</strong>：電廠廢熱蒸汽集中輸送，大廈免設鍋爐與煙囪[cite: 13]。優點是潛熱大、適合長途輸送；缺點是<strong>凝結水排放與管道排氣困難</strong>[cite: 13]。</li></ul>',
        en: '<p>Steam uses latent heat of vaporization[cite: 13]:</p><ul><li><strong>Dry return</strong>: Condensate pipe is <strong>above boiler water level</strong>[cite: 13];</li><li><strong>Wet return</strong>: Condensate pipe is <strong>below boiler water level</strong>[cite: 13];</li><li><strong>District heating / CHP</strong>: High heat capacity per kg allows long-distance transport, but <strong>condensate disposal and air removal are major challenges</strong>[cite: 13].</li></ul>'
      }
    ]
  },
  {
    id: 't7', icon: '7', title: 'Heat Emitting Equipment: Panels, Radiators & Convectors',
    titleZh: '散熱設備四大家族：輻射板、散熱器、對流器與嵌入板',
    diagram: `<svg viewBox="0 0 760 330" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="25" width="165" height="280" fill="#243342" stroke="#e74c3c" stroke-width="2" rx="6"/>
        <text x="82" y="16" text-anchor="middle" font-size="11" font-weight="bold" fill="#ff7675">1. Radiant Panel</text>
        <rect x="25" y="45" width="115" height="75" fill="#1a252f" stroke="#e74c3c"/>
        <text x="82" y="80" text-anchor="middle" font-size="8.5" fill="#ffffff">Steel Panel</text>
        <text x="82" y="98" text-anchor="middle" font-size="8.5" fill="#f1c40f">100–150 °C</text>
        <rect x="10" y="135" width="145" height="155" fill="#111111" stroke="#e74c3c" rx="3"/>
        <text x="82" y="158" text-anchor="middle" font-size="9" fill="#f5b7b1">• 60% Rad + 40% Conv</text>
        <text x="82" y="180" text-anchor="middle" font-size="8.5" fill="#ecf0f1">• High factories</text>
        <text x="82" y="202" text-anchor="middle" font-size="8.5" fill="#ecf0f1">• Medium/high T water</text>
        <text x="82" y="224" text-anchor="middle" font-size="8.5" fill="#bdc3c7">• Ceiling plates allow lower surface temp</text>
      </g>
      <g class="scada-unit" transform="translate(195, 20)">
        <rect x="0" y="25" width="175" height="280" fill="#243342" stroke="#f39c12" stroke-width="2" rx="6"/>
        <text x="87" y="16" text-anchor="middle" font-size="11" font-weight="bold" fill="#f39c12">2. Radiator (Window)</text>
        <rect x="25" y="45" width="125" height="75" fill="#1a252f" stroke="#f39c12"/>
        <text x="87" y="80" text-anchor="middle" font-size="8.5" fill="#ffffff">Cast iron / Steel</text>
        <text x="87" y="98" text-anchor="middle" font-size="8.5" fill="#2ecc71">Under Window</text>
        <rect x="10" y="135" width="155" height="155" fill="#111111" stroke="#f39c12" rx="3"/>
        <text x="87" y="158" text-anchor="middle" font-size="9" fill="#f1c40f">• 70% Conv + 30% Rad</text>
        <text x="87" y="180" text-anchor="middle" font-size="8.5" fill="#ecf0f1">• Placed under windows</text>
        <text x="87" y="202" text-anchor="middle" font-size="8.5" fill="#abebc6">• Cancels cold downdraft</text>
        <text x="87" y="224" text-anchor="middle" font-size="8.5" fill="#bdc3c7">• Reduces room temp gradient</text>
      </g>
      <g class="scada-unit" transform="translate(385, 20)">
        <rect x="0" y="25" width="170" height="280" fill="#243342" stroke="#16a085" stroke-width="2" rx="6"/>
        <text x="85" y="16" text-anchor="middle" font-size="11" font-weight="bold" fill="#1abc9c">3. Convector</text>
        <rect x="25" y="45" width="120" height="75" fill="#1a252f" stroke="#16a085"/>
        <text x="85" y="78" text-anchor="middle" font-size="8.5" fill="#ffffff">Finned Element</text>
        <text x="85" y="98" text-anchor="middle" font-size="8.5" fill="#f1c40f">Chimney Effect</text>
        <rect x="10" y="135" width="150" height="155" fill="#111111" stroke="#16a085" rx="3"/>
        <text x="85" y="158" text-anchor="middle" font-size="9" fill="#1abc9c">• Pure Convective</text>
        <text x="85" y="180" text-anchor="middle" font-size="8.5" fill="#ecf0f1">• Rising column of air</text>
        <text x="85" y="202" text-anchor="middle" font-size="8.5" fill="#bdc3c7">• Air drawn in at base</text>
        <text x="85" y="224" text-anchor="middle" font-size="8.5" fill="#5dade2">• Forced type adds fan/filter</text>
      </g>
      <g class="scada-unit" transform="translate(570, 20)">
        <rect x="0" y="25" width="175" height="280" fill="#243342" stroke="#9b59b6" stroke-width="2" rx="6"/>
        <text x="87" y="16" text-anchor="middle" font-size="11" font-weight="bold" fill="#bb86fc">4. Embedded Panel</text>
        <rect x="25" y="45" width="125" height="75" fill="#1a252f" stroke="#9b59b6"/>
        <text x="87" y="78" text-anchor="middle" font-size="8.5" fill="#ffffff">Pipes in Floor</text>
        <text x="87" y="98" text-anchor="middle" font-size="8.5" fill="#f1c40f">27 °C – 50 °C</text>
        <rect x="10" y="135" width="155" height="155" fill="#111111" stroke="#9b59b6" rx="3"/>
        <text x="87" y="158" text-anchor="middle" font-size="9" fill="#bb86fc">• Large thermal mass</text>
        <text x="87" y="180" text-anchor="middle" font-size="8.5" fill="#ecf0f1">• Very uniform heating</text>
        <text x="87" y="202" text-anchor="middle" font-size="8.5" fill="#d7bde2">• Safe surface temp</text>
        <text x="87" y="224" text-anchor="middle" font-size="8.5" fill="#bdc3c7">• Emits heat long after off</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 7: Four heat emitting equipment types: Radiant panel (100–150°C), Window radiator (70% conv/30% rad), Natural convector (chimney effect), and Embedded floor panel (27–50°C)',
    sections: [
      {
        title: 'Four Emitter Types & Placement Rules / 四大散熱設備特性',
        zh: '<ul><li><strong>金屬輻射板 (Radiant panel)</strong>：表面 <strong>100–150 °C</strong>，<strong>60% 輻射 + 40% 對流</strong>，適合大廠房[cite: 13]；</li><li><strong>散熱器 (Radiator)</strong>：<strong>70% 對流 + 30% 輻射</strong>[cite: 13]。<strong>最佳安裝在窗下</strong>，用上升暖氣流抵消外窗冷下沉氣流，使室內垂直溫度梯度更均勻[cite: 13]；</li><li><strong>對流器 (Convector)</strong>：利用底部鰭片管加熱氣流，產生<strong>煙囪效應 (chimney effect)</strong>[cite: 13]；</li><li><strong>嵌入式板 (Embedded panel)</strong>：埋於地板或牆體，表面 <strong>27–50 °C</strong>，蓄熱量大，關熱源後可持續放熱[cite: 13]。</li></ul>',
        en: '<ul><li><strong>Radiant panel</strong>: 100–150 °C, <strong>60% rad + 40% conv</strong>, ideal for high factories[cite: 13];</li><li><strong>Radiator</strong>: <strong>70% conv + 30% rad</strong>, <strong>best under windows</strong> to cancel cold downdrafts[cite: 13];</li><li><strong>Convector</strong>: Enclosed finned element operating via <strong>chimney effect</strong>[cite: 13];</li><li><strong>Embedded panel</strong>: 27–50 °C surface, high thermal storage capacity[cite: 13].</li></ul>'
      }
    ]
  },
  {
    id: 't8', icon: '8', title: 'Electric Duct Heaters & 8 Mandatory Safety Interlocks',
    titleZh: '通風管道電加熱器八大強制性安全控制規範',
    diagram: `<svg viewBox="0 0 760 330" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="720" height="280" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="360" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Electric Duct Heater Safety Controls (風管電加熱器八大安全聯鎖法規)</text>
        <!-- Duct Section -->
        <rect x="40" y="48" width="640" height="75" fill="#1a252f" stroke="#7f8c8d" stroke-width="2"/>
        <!-- Heater Elements in Middle -->
        <rect x="310" y="52" width="55" height="67" fill="#78281f" stroke="#e74c3c" stroke-width="2"/>
        <path d="M 325 58 L 325 112 M 338 58 L 338 112 M 350 58 L 350 112" stroke="#f1c40f" stroke-width="2.5"/>
        <text x="337" y="88" text-anchor="middle" font-size="8" fill="#ffffff" font-weight="bold">Heater</text>
        <!-- 1000 mm No Insulation Zone -->
        <rect x="180" y="50" width="130" height="15" fill="#e74c3c" opacity="0.35"/>
        <rect x="365" y="50" width="130" height="15" fill="#e74c3c" opacity="0.35"/>
        <text x="245" y="42" font-size="8.5" fill="#ff7675" font-weight="bold">Min 1000 mm No-Insulation</text>
        <text x="430" y="42" font-size="8.5" fill="#ff7675" font-weight="bold">Min 1000 mm No-Insulation</text>
        <!-- Overheat stat at max 600 mm -->
        <circle cx="425" cy="85" r="11" fill="#f39c12"/>
        <text x="425" y="89" text-anchor="middle" font-size="7.5" fill="#111111" font-weight="bold">Stat</text>
        <text x="425" y="112" text-anchor="middle" font-size="8" fill="#f1c40f">≤600mm / 50°C / 90s</text>
        <!-- Sail switch -->
        <polygon points="485,85 500,75 500,95" fill="#00d2d3"/>
        <text x="505" y="88" font-size="8" fill="#00d2d3">Sail switch</text>
        <!-- Summary Matrix of 8 Rules -->
        <rect x="40" y="135" width="640" height="155" fill="#111111" stroke="#1abc9c" rx="4"/>
        <text x="50" y="156" font-size="9.5" fill="#ffffff">1. 1000 mm Clearance: No internal acoustic/thermal duct insulation within 1000 mm of heater.</text>
        <text x="50" y="174" font-size="9.5" fill="#ffffff">2. Sequence Interlock: Heater CANNOT be energized before the fan motor starts.</text>
        <text x="50" y="192" font-size="9.5" fill="#f1c40f">3. 3-Minute Fan Delay: On fan shut-off, heater cuts instantly while fan runs ≥ 3 mins to clear heat.</text>
        <text x="50" y="210" font-size="9.5" fill="#ffffff">4. Emergency Stop Button: Mushroom head with manual reset overrides timer for instant stop.</text>
        <text x="50" y="228" font-size="9.5" fill="#ffffff">5. Airflow Failure: Fail-safe sail switch / differential pressure switch cuts power on zero flow.</text>
        <text x="50" y="246" font-size="9.5" fill="#ffffff">6. Overheat Stat: Located ≤ 600 mm, trips within 90 s if duct mean temp exceeds 50 °C ± 10%.</text>
        <text x="50" y="264" font-size="9.5" fill="#ecf0f1">7. Fail-Safe: Switches de-energize elements on loss of control power.</text>
        <text x="50" y="280" font-size="9" fill="#2ecc71">8. ≤ 2 kW Relaxation: Small FCUs require only sequence interlock and overheat stat.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 8: Mechanical ventilation electric heater mandatory safety interlocks: 1 m uninsulated zone, 3-min fan rundown timer, and fail-safe airflow/overheat cut-offs',
    sections: [
      {
        title: '8 Mandatory Safety Interlocks / 八大安全聯鎖要求',
        zh: '<p>風管電加熱器安全控制規範（Slide 24–25）[cite: 13]：</p><ol><li><strong>1000 mm 禁保溫區</strong>：加熱器前後 <strong>1000 mm 範圍內嚴禁安裝風管內部保溫層</strong>[cite: 13]；</li><li><strong>順序聯鎖</strong>：風扇未開動前，電加熱器不能通電[cite: 13]；</li><li><strong>3 分鐘延時停機</strong>：關閉風機時，電加熱器立即斷電，但<strong>風機必須持續運轉至少 3 分鐘</strong>[cite: 13]；</li><li><strong>緊急停機按鈕</strong>：靠近電機設蘑菇頭手動復位急停掣，可凌駕延時電路即時停機[cite: 13]；</li><li><strong>氣流失效控制</strong>：設風帆開關 (sail switch)，無風即斷電[cite: 13]；</li><li><strong>過熱溫控器</strong>：距電熱器<strong>最遠 600 mm</strong> 處設過熱溫控器，風管均溫超過 <strong>50 °C ± 10%</strong> 時<strong>在 90 秒內斷電</strong>[cite: 13]；</li><li><strong>失效安全 (Fail-safe)</strong>：控制迴路斷電時，加熱元件必須自動斷開[cite: 13]；</li><li><strong>≤ 2 kW 小型 FCU 豁免</strong>：電熱總功率 ≤ 2 kW 時，安全要求簡化為順序聯鎖與過熱溫控[cite: 13]。</li></ol>',
        en: '<p>Statutory safety requirements for electric duct heaters (Slide 24–25)[cite: 13]:</p><ol><li><strong>1000 mm clearance</strong>: No internal insulation within 1000 mm[cite: 13];</li><li><strong>Sequence interlock</strong>: Heaters cannot energize before fan starts[cite: 13];</li><li><strong>3-minute fan delay</strong>: Heater cuts instantly; fan runs &ge; 3 mins to clear heat[cite: 13];</li><li><strong>Emergency stop</strong>: Mushroom head manual reset overrides delay[cite: 13];</li><li><strong>Airflow failure</strong>: Fail-safe sail switch de-energizes elements[cite: 13];</li><li><strong>Overheat stat</strong>: Within <strong>600 mm</strong>, trips in &le; <strong>90 s</strong> at <strong>50 °C &plusmn; 10%</strong>[cite: 13];</li><li><strong>Fail-safe</strong>: Drops out upon power loss[cite: 13];</li><li><strong>&le; 2 kW relaxation</strong>: Small FCUs require only items 2 and 6[cite: 13].</li></ol>'
      }
    ]
  },
  {
    id: 't9', icon: '9', title: 'Heat Pipe Heat Exchangers: Phase-Change & Tilt Angle',
    titleZh: '熱管換熱器：毛細相變循環、重力傾角與顯熱局限',
    diagram: `<svg viewBox="0 0 760 330" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="720" height="280" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="360" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Heat Pipe Heat Exchanger (熱管內部毛細相變循環與隔板矩陣)</text>
        <!-- Single Tube Cutaway (Left) -->
        <g transform="translate(30, 45)">
          <rect x="0" y="20" width="300" height="65" fill="#1a252f" stroke="#ecf0f1" stroke-width="2" rx="32"/>
          <path d="M 0 52 A 32 32 0 0 1 80 20 L 80 85 A 32 32 0 0 1 0 52 Z" fill="#e74c3c" opacity="0.4"/>
          <text x="40" y="56" text-anchor="middle" font-size="8.5" fill="#f5b7b1" font-weight="bold">Evaporator</text>
          <path d="M 220 20 L 220 85 A 32 32 0 0 0 300 52 A 32 32 0 0 0 220 20 Z" fill="#2980b9" opacity="0.4"/>
          <text x="260" y="56" text-anchor="middle" font-size="8.5" fill="#00d2d3" font-weight="bold">Condenser</text>
          <line x1="85" y1="38" x2="215" y2="38" stroke="#f1c40f" stroke-width="2" stroke-dasharray="4 2"/>
          <text x="150" y="34" text-anchor="middle" font-size="8" fill="#f1c40f">Vapour Flow ➔</text>
          <line x1="215" y1="68" x2="85" y2="68" stroke="#2ecc71" stroke-width="2" stroke-dasharray="4 2"/>
          <text x="150" y="78" text-anchor="middle" font-size="8" fill="#2ecc71">⮜ Capillary Liquid Return</text>
          <text x="150" y="105" text-anchor="middle" font-size="9" fill="#ffffff">Diameters: 15, 25, 32, 40, 50 mm</text>
        </g>
        <!-- Counterflow Matrix with Sealed Partition (Right) -->
        <g transform="translate(370, 45)">
          <rect x="0" y="0" width="320" height="110" fill="#111111" stroke="#3498db" rx="4"/>
          <!-- Sealed partition in center -->
          <line x1="160" y1="0" x2="160" y2="110" stroke="#e74c3c" stroke-width="3.5"/>
          <text x="160" y="-6" text-anchor="middle" font-size="8.5" fill="#ff7675" font-weight="bold">Sealed Partition</text>
          <path d="M 20 30 L 140 30" stroke="#ff7675" stroke-width="3.5" class="flow-hot-water"/>
          <text x="80" y="22" font-size="8.5" fill="#ff7675">Hot Exhaust Gas</text>
          <path d="M 300 80 L 180 80" stroke="#00d2d3" stroke-width="3.5" class="flow-return-water"/>
          <text x="240" y="95" font-size="8.5" fill="#00d2d3">Cold Fresh Air</text>
          <text x="160" y="60" text-anchor="middle" font-size="9" fill="#2ecc71" font-weight="bold">Zero Cross-Contamination</text>
        </g>
        <rect x="30" y="175" width="660" height="115" fill="#111111" stroke="#1abc9c" rx="4"/>
        <text x="360" y="198" text-anchor="middle" font-size="11" fill="#ffffff" font-weight="bold">Gravity-Assisted Inclination: Sloped with hot end below horizontal (5.7° / 10% slope or 90° vertical) boosts return rate.</text>
        <text x="360" y="220" text-anchor="middle" font-size="10" fill="#f1c40f">Pros: No moving parts, indefinite life, no external power, highly reliable independent tubes, compact geometry.</text>
        <text x="360" y="242" text-anchor="middle" font-size="11" fill="#ff7675" font-weight="bold">THE SINGLE DISADVANTAGE: Transfers SENSIBLE heat only — cannot recover or transfer latent moisture!</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 9: Heat pipe working cycle: Evaporation, vapor migration, condensation, and capillary return in a counterflow bundle separated by a sealed partition',
    sections: [
      {
        title: 'Heat Pipe Phase-Change Cycle / 熱管相變運作原理',
        zh: '<p><strong>熱管 (Heat pipe)</strong> 內附<strong>毛細芯 (wick)</strong> 並抽真空注入工質[cite: 13]：</p><ol><li>熱端吸收廢氣熱量蒸發汽化[cite: 13]；</li><li>蒸氣流向冷端放出<strong>汽化潛熱</strong>凝結[cite: 13]；</li><li>凝液沿毛細芯自動抽回熱端，<strong>無活動部件、無外接動力</strong>[cite: 13]。</li></ol>',
        en: '<p>A <strong>heat pipe</strong> contains an internal <strong>capillary wick</strong> and working fluid under vacuum[cite: 13]:</p><ol><li>Heat evaporates fluid at the hot end[cite: 13];</li><li>Vapor migrates and condenses at the cold end, releasing latent heat[cite: 13];</li><li>Capillary wick returns liquid passively without moving parts[cite: 13].</li></ol>'
      },
      {
        title: 'Tilt Angles & Critical Limitation / 傾角增效與顯熱局限',
        zh: '<div class="key-point"><strong>傾角增效與最大缺點（Slide 29–30）：</strong><br>• <strong>傾角增效</strong>：熱端向下傾斜 <strong>5.7°（10% 斜度）或 90°（垂直）</strong>，利用重力回流使傳熱量大增[cite: 13]；<br>• <strong>管徑規格</strong>：常用 <strong>15, 25, 32, 40, 50 mm</strong>[cite: 13]；<br>• <strong>密封隔板</strong>保證零交叉污染[cite: 13]；<br>• <strong>唯一缺點</strong>：<strong>只能傳遞顯熱 (Sensible heat only)，不能傳遞潛熱</strong>[cite: 13]！</div>',
        en: '<div class="key-point"><strong>Tilt &amp; Limit (Slide 29–30):</strong><br>• <strong>Tilt</strong>: Sloping hot end down at <strong>5.7° (10%) or 90° (vertical)</strong> uses gravity to boost capacity[cite: 13];<br>• <strong>Diameters</strong>: <strong>15, 25, 32, 40, 50 mm</strong>[cite: 13];<br>• <strong>Con</strong>: Transfers <strong>sensible heat ONLY</strong>; does nothing for latent heat[cite: 13].</div>'
      }
    ]
  },
  {
    id: 't10', icon: '10', title: 'Enthalpy Wheels: Total Energy Recovery & Purge Sector',
    titleZh: '轉輪式全熱交換器：70%–90% 焓回收與防串氣吹洗',
    diagram: `<svg viewBox="0 0 760 330" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="720" height="280" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="360" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Enthalpy Wheel (Rotary Heat Regenerator) (轉輪式全熱交換器與吹洗區)</text>
        <!-- Wheel casing -->
        <g transform="translate(35, 45)">
          <rect x="0" y="0" width="380" height="145" fill="#1a252f" stroke="#1abc9c" stroke-width="2" rx="4"/>
          <!-- Counterflow Ducts -->
          <rect x="10" y="15" width="360" height="42" fill="#78281f" stroke="#c0392b"/>
          <text x="50" y="40" font-size="9" fill="#ffffff" font-weight="bold">Hot Moist Exhaust Air ➔➔</text>
          <rect x="10" y="85" width="360" height="42" fill="#1b4f72" stroke="#3498db"/>
          <text x="330" y="110" text-anchor="end" font-size="9" fill="#ffffff" font-weight="bold">⮜⮜ Cold Fresh Supply Air</text>
          <!-- Central Rotating Matrix -->
          <circle cx="190" cy="72" r="54" fill="#16a085" opacity="0.4" stroke="#12806d" stroke-width="3"/>
          <circle cx="190" cy="72" r="10" fill="#111111"/>
          <!-- Purge Sector -->
          <path d="M 190 72 L 218 28 A 54 54 0 0 1 242 48 Z" fill="#f1c40f" stroke="#d4ac0d"/>
          <text x="250" y="38" font-size="8.5" fill="#f1c40f" font-weight="bold">Purge</text>
        </g>
        <g transform="translate(440, 45)">
          <rect x="0" y="0" width="250" height="145" fill="#111111" stroke="#f1c40f" rx="4"/>
          <text x="125" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#f1c40f">Performance &amp; Drawbacks:</text>
          <text x="12" y="48" font-size="9.5" fill="#2ecc71" font-weight="bold">• 70% to 90% Total Energy Recovery</text>
          <text x="20" y="64" font-size="8.5" fill="#abebc6">(Sensible AND latent moisture!)</text>
          <text x="12" y="84" font-size="9" fill="#ff7675">• Bulky: 2×2 m to 5×5 m size</text>
          <text x="12" y="102" font-size="9" fill="#ecf0f1">• Complex bent ductwork</text>
          <text x="12" y="120" font-size="9" fill="#bdc3c7">• Slight cross-contamination</text>
          <text x="12" y="136" font-size="8.5" fill="#bdc3c7">• Corrosion risk &amp; maintenance</text>
        </g>
        <rect x="35" y="205" width="655" height="85" fill="#111111" stroke="#1abc9c" rx="4"/>
        <text x="360" y="228" text-anchor="middle" font-size="10.5" fill="#ffffff">Slowly rotating porous honeycomb wheel coated with desiccant absorbs heat and moisture from exhaust,</text>
        <text x="360" y="248" text-anchor="middle" font-size="9.5" fill="#f1c40f">transferring both to incoming supply air stream. Purge section uses clean air to flush cells before supply exposure.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 10: Enthalpy wheel operation: Rotating desiccant honeycomb matrix transferring both sensible and latent heat (70%–90% efficiency) with a purge sector',
    sections: [
      {
        title: 'Enthalpy Wheel Full Heat Recovery / 焓輪全熱回收優點',
        zh: '<p><strong>焓輪 (Enthalpy wheel)</strong> 填有吸濕多孔材料，慢速旋轉[cite: 13]：</p><div class="key-point"><strong>全熱回收效率（Slide 33）：</strong> 可同時傳遞<strong>顯熱與潛熱 (Sensible and latent heat)</strong>，回收效率高達 <strong>70% 至 90%</strong>[cite: 13]！</div>',
        en: '<p>An <strong>enthalpy wheel</strong> slowly rotates a desiccant matrix between air streams[cite: 13]:</p><div class="key-point"><strong>High Efficiency (Slide 33):</strong> Recovers <strong>70% to 90% of exhaust energy—both sensible and latent</strong>[cite: 13].</div>'
      },
      {
        title: 'Purge Section & 5 Drawbacks / 吹洗區與五大缺點',
        zh: '<p><strong>吹洗區 (Purge)</strong> 減少交叉污染[cite: 13]；缺點為：① <strong>體積龐大 (2×2 m 至 5×5 m)</strong>[cite: 13]；② 風管佈置彎頭多[cite: 13]；③ 有微量交叉污染[cite: 13]；④ 易受煙氣腐蝕[cite: 13]；⑤ 需維護旋轉部件[cite: 13]。</p>',
        en: '<p>A <strong>purge section</strong> reduces cross-contamination[cite: 13]. Cons: bulky (<strong>2×2 m to 5×5 m</strong>), complex ducts, slight cross-contamination, corrosion risk, and maintenance needs[cite: 13].</p>'
      }
    ]
  },
  {
    id: 't11', icon: '11', title: 'Run-Around Coils & Double-Bundle Reclaim Condensers',
    titleZh: '環形雙盤管液體循環與冷水機雙束冷凝器廢熱回收',
    diagram: `<svg viewBox="0 0 760 330" xmlns="http://www.w3.org/2000/svg" width="100%">
      <!-- Left: Run-Around Coils -->
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="25" width="350" height="280" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="175" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#3498db">(a) Run-Around Coils (環形雙盤管)</text>
        <rect x="25" y="45" width="130" height="55" fill="#78281f" stroke="#e74c3c"/>
        <text x="90" y="77" text-anchor="middle" font-size="9" fill="#ffffff">Exhaust Coil 1</text>
        <rect x="195" y="45" width="130" height="55" fill="#1b4f72" stroke="#3498db"/>
        <text x="260" y="77" text-anchor="middle" font-size="9" fill="#ffffff">Supply Coil 2</text>
        <path d="M 90 100 L 90 145 L 260 145 L 260 100" fill="none" stroke="#2ecc71" stroke-width="3.5" class="flow-refrigerant"/>
        <circle cx="175" cy="145" r="15" fill="#16a085"/>
        <text x="175" y="149" text-anchor="middle" font-size="8.5" fill="#ffffff">Pump</text>
        <rect x="15" y="180" width="320" height="110" fill="#111111" stroke="#3498db" rx="4"/>
        <text x="175" y="202" text-anchor="middle" font-size="10.5" fill="#5dade2" font-weight="bold">Closed Hydronic Loop (Water/Glycol):</text>
        <text x="25" y="224" font-size="9" fill="#ecf0f1">• Sensible heat efficiency: up to 70%</text>
        <text x="25" y="244" font-size="9.5" fill="#2ecc71" font-weight="bold">• Coils can be located completely FAR APART!</text>
        <text x="25" y="264" font-size="8.5" fill="#bdc3c7">Ideal for retrofits and hospital exhaust isolation.</text>
      </g>
      <!-- Right: Double-Bundle Heat Reclaim Condenser -->
      <g class="scada-unit" transform="translate(395, 20)">
        <rect x="0" y="25" width="350" height="280" fill="#243342" stroke="#e67e22" stroke-width="2" rx="8"/>
        <text x="175" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#f39c12">(b) Double-Bundle Condenser (雙束冷凝器)</text>
        <circle cx="175" cy="100" r="58" fill="#1a252f" stroke="#ecf0f1" stroke-width="2"/>
        <line x1="175" y1="42" x2="175" y2="158" stroke="#7f8c8d" stroke-width="2" stroke-dasharray="3 2"/>
        <rect x="130" y="70" width="35" height="60" fill="#78281f" stroke="#e74c3c"/>
        <text x="147" y="105" text-anchor="middle" font-size="8" fill="#ffffff" transform="rotate(-90 147 105)">Heating</text>
        <rect x="185" y="70" width="35" height="60" fill="#1b4f72" stroke="#3498db"/>
        <text x="202" y="105" text-anchor="middle" font-size="8" fill="#ffffff" transform="rotate(-90 202 105)">Tower</text>
        <rect x="15" y="180" width="320" height="110" fill="#111111" stroke="#e67e22" rx="4"/>
        <text x="175" y="202" text-anchor="middle" font-size="10.5" fill="#f1c40f" font-weight="bold">Simultaneous Cooling and Heating:</text>
        <text x="25" y="224" font-size="9" fill="#ecf0f1">• Heating bundle delivers heat to perimeter coils</text>
        <text x="25" y="244" font-size="9" fill="#ecf0f1">• Tower bundle sheds surplus heat to cooling tower</text>
        <text x="25" y="264" font-size="8.5" fill="#abebc6">Auxiliary heater tops up hot water temperature if needed.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 11: Run-around coil system (remote coils linked by pumped water/glycol loop) and Chiller double-bundle heat reclaim condenser',
    sections: [
      {
        title: 'Run-Around Coils & Double-Bundle Condenser / 環形盤管與雙束冷凝器',
        zh: '<p><strong>環形盤管 (Run-around coils)</strong>：由密閉水/乙二醇管路連接兩盤管，泵送傳熱，效率最高 <strong>70%</strong>[cite: 13]。最大優勢是<strong>兩盤管可相距很遠 (far apart)</strong>，無需合併風道[cite: 13]；</p><p><strong>雙束冷凝器 (Double-bundle condenser)</strong>：冷凝器分<strong>供熱束 (heating bundle，送往周邊區)</strong> 與<strong>塔束 (tower bundle，排向冷卻塔)</strong>，實現同時供冷供熱[cite: 13]。</p>',
        en: '<p><strong>Run-around coils</strong> link two separated coils via a pumped water/glycol loop (up to <strong>70% sensible efficiency</strong>)[cite: 13]. Advantage: coils can be <strong>located far apart</strong>[cite: 13].</p><p><strong>Double-bundle condensers</strong> split tubes into a heating bundle (reclaiming heat) and a tower bundle (dumping excess heat to cooling tower)[cite: 13].</p>'
      }
    ]
  },
  {
    id: 't12', icon: '12', title: 'Heat Pumps, COP Equations & Cascade Heating Systems',
    titleZh: '熱泵熱力循環、COP 性能系數與 48–82°C 串級供熱',
    diagram: `<svg viewBox="0 0 760 330" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="720" height="280" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="360" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Heat Pump Cycle, COP Formulation &amp; Cascade System (熱泵熱力循環與串級供熱)</text>
        <rect x="40" y="75" width="130" height="85" fill="#1b4f72" stroke="#3498db" rx="4"/>
        <text x="105" y="112" text-anchor="middle" font-size="10.5" fill="#ffffff" font-weight="bold">Cold Source T2</text>
        <text x="105" y="132" text-anchor="middle" font-size="8.5" fill="#00d2d3">River / Ambient Air</text>
        <circle cx="360" cy="117" r="48" fill="#1a252f" stroke="#16a085" stroke-width="3"/>
        <text x="360" y="112" text-anchor="middle" font-size="11" fill="#1abc9c" font-weight="bold">HEAT PUMP</text>
        <text x="360" y="128" text-anchor="middle" font-size="9" fill="#ffffff">熱泵機組</text>
        <rect x="550" y="75" width="130" height="85" fill="#78281f" stroke="#e74c3c" rx="4"/>
        <text x="615" y="112" text-anchor="middle" font-size="10.5" fill="#ffffff" font-weight="bold">Hot Sink T1</text>
        <text x="615" y="132" text-anchor="middle" font-size="8.5" fill="#ff7675">Space Heating Load</text>
        <path d="M 170 117 L 312 117" stroke="#00d2d3" stroke-width="5" class="flow-return-water"/>
        <text x="241" y="105" text-anchor="middle" font-size="10" fill="#00d2d3" font-weight="bold">Q2 Absorbed</text>
        <path d="M 360 40 L 360 69" stroke="#f1c40f" stroke-width="4"/>
        <text x="360" y="34" text-anchor="middle" font-size="9" fill="#f1c40f" font-weight="bold">Work Input W (Electricity)</text>
        <path d="M 408 117 L 550 117" stroke="#ff7675" stroke-width="5" class="flow-hot-water"/>
        <text x="479" y="105" text-anchor="middle" font-size="10" fill="#ff7675" font-weight="bold">Q1 Delivered</text>
        <rect x="40" y="185" width="640" height="105" fill="#111111" stroke="#1abc9c" rx="4"/>
        <text x="360" y="210" text-anchor="middle" font-size="13" fill="#f1c40f" font-family="Consolas" font-weight="bold">COP_hp = Q1 / W = Q1 / (Q1 - Q2)   |   Rule of Thumb: COP ≈ 3.0</text>
        <text x="360" y="235" text-anchor="middle" font-size="10" fill="#ecf0f1">1 J electricity delivers ~3 J heat (versus Electric resistance heater COP = 1.0 strictly 1-for-1).</text>
        <text x="360" y="255" text-anchor="middle" font-size="10" fill="#2ecc71">Reversible Heat Pump: 4-way valve flips between cooling mode (summer) and heating mode (winter).</text>
        <text x="360" y="275" text-anchor="middle" font-size="9" fill="#bdc3c7">Cascade Chiller-Heat Pump combines chiller condenser as HP heat source, delivering 48 °C to 82 °C hot water.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 12: Heat pump thermodynamics: Upgrading low-temperature heat Q2 into high-temperature delivery Q1 with COP ≈ 3.0, and high-temperature cascade configuration (48–82°C)',
    sections: [
      {
        title: 'Heat Pump Cycle & COP / 熱泵循環與性能系數',
        zh: '<p><strong>熱泵 (Heat pump)</strong> 輸入電功 $W$，從低溫源抽取熱量 $Q_2$，提升品位輸出高溫熱量 $Q_1$[cite: 13]：</p><div class="formula-block">COP_{hp} = \frac{Q_1}{W} = \frac{Q_1}{Q_1 - Q_2}</div><div class="key-point"><strong>性能系數 COP（Slide 39）：</strong><br>• <strong>經驗 COP 約為 3.0 ($COP_{hp} \approx 3$)</strong>：每用 1 J 電可產出約 3 J 熱量[cite: 13]；<br>• 電阻暖爐僅為 1:1 ($COP=1$)[cite: 13]；<br>• <strong>可逆轉熱泵</strong>：靠<strong>四通閥 (4-way valve)</strong> 實現冬暖夏涼切換[cite: 13]；<br>• <strong>串級系統</strong>：冰機冷凝器作熱泵熱源，輸出 <strong>48–82 °C</strong> 熱水[cite: 13]。</div>',
        en: '<p>A <strong>heat pump</strong> upgrades low-grade heat $Q_2$ into high-grade heat $Q_1$ using work $W$[cite: 13]:</p><div class="formula-block">COP_{hp} = \frac{Q_1}{W} = \frac{Q_1}{Q_1 - Q_2}</div><div class="key-point"><strong>Rule of Thumb (Slide 39):</strong><br>• <strong>$COP_{hp} \approx 3.0$</strong> (delivers ~3 J heat per 1 J electricity, vs electric heater strictly 1-for-1)[cite: 13];<br>• Reversible heat pumps use a <strong>4-way valve</strong>[cite: 13];<br>• Cascade systems deliver hot water at <strong>48–82 °C</strong>[cite: 13].</div>'
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
    explanation: "Slide 17: Windows are the point of maximum heat loss; rising warm convection and positive radiation cancel cold drafts and negative radiation from cold glazing.",
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
