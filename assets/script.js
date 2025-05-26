const tarotDeck = [
  {
    name: "愚者",
    img: "http://p2.itc.cn/images01/20200608/eef7ecfac6e24cadb8e6f8f2bac809ab.jpeg",
    description_upright: "正位：新的開始與自由。",
    description_reversed: "逆位：魯莽與不成熟。"
  },
  {
    name: "戀人",
    img: "https://brup.shengri.cn/goods/2020/07/Ft7Ps66dgZ73BygP76_LkkSSPoi2.png",
    description_upright: "正位：愛與選擇。",
    description_reversed: "逆位：關係的不協調。"
  },
  {
    name: "隱士",
    img: "http://p5.itc.cn/images01/20200608/2c40ff5cbdb34f63b93d76d5774dc813.jpeg",
    description_upright: "正位：內省與尋求真理。",
    description_reversed: "逆位：孤立與逃避。"
  },
  {
    name: "力量",
    img: "http://p4.itc.cn/images01/20200608/9bf1be1e05fe48009e76c6bd29087dad.jpeg",
    description_upright: "正位：勇氣與內在力量。",
    description_reversed: "逆位：恐懼與懦弱。"
  },
  {
    name: "命運之輪",
    img: "http://p0.itc.cn/images01/20200608/011fba001ced45668ce1851c650fa7ed.jpeg",
    description_upright: "正位：命運轉變、新機會。",
    description_reversed: "逆位：停滯與反覆無常。"
  },
  {
    name: "死神",
    img: "http://p7.itc.cn/images01/20200608/b8348909e6c74c548ae01a82d8ae471e.jpeg",
    description_upright: "正位：結束與轉變。",
    description_reversed: "逆位：抗拒改變、停滯不前。"
  },
  {
    name: "太陽",
    img: "http://p7.itc.cn/images01/20200608/63c4d0b6809346868805db8cdaa3252f.jpeg",
    description_upright: "正位：快樂與成功。",
    description_reversed: "逆位：延遲與錯失機會。"
  },
  {
    name: "塔",
    img: "http://p2.itc.cn/images01/20200608/83c1a3a4c23d41538108c051dc476ab1.jpeg。",
    description_reversed: "逆位：災難的預兆。"
  },
  {
    name: "審判",
    img: "http://p6.itc.cn/images01/20200608/656b9314a1124c27abfe10624a5d71b9.jpeg",
    description_upright: "正位：覺醒與重生。",
    description_reversed: "逆位：懷疑與否認。"
  },
  {
    name: "星星",
    img: "http://p9.itc.cn/images01/20200608/b29e732d551047c3aeba9e3b572d3de4.jpeg",
    description_upright: "正位：希望與靈感。",
    description_reversed: "逆位：失望與迷失。"
  },
  {
    name: "魔術師",
    img: "http://p9.itc.cn/images01/20200608/a6d58d82c46e4733b58f15ef03476818.jpeg",
    description_upright: "正位：創造力、資源與行動。",
    description_reversed: "逆位：欺騙、操控與延遲。"
  },
      {
    name: "女祭司",
    img: "http://p2.itc.cn/images01/20200608/f9128e65b2b347aa9ae1247c6081ec1f.jpeg",
    description_upright: "正位：實力，優勢，從容不迫。",
    description_reversed: "逆位：冷淡，消極，疏離感。"
  },
        {
    name: "皇后",
    img: "http://p0.itc.cn/images01/20200608/cb4f82d0d80340b6aaab355e4a49b6de.jpeg",
    description_upright: "正位：熱情溫暖，充滿創造力，富貴的。",
    description_reversed: "逆位：容易沉迷於享樂或缺乏克制力。"
  },
        {
    name: "皇帝",
    img: "http://p4.itc.cn/images01/20200608/268c2461b377436e85894647dc174f89.jpeg",
    description_upright: "正位：有權力，地位，江山。",
    description_reversed: "逆位：相對較守舊，製造衝突的傾向。"
  },
        {
    name: "教皇",
    img: "http://p9.itc.cn/images01/20200608/6bb84fb69ab240cbbcc8439addee064a.jpeg",
    description_upright: "正位：有領導力，有智慧，有啟蒙他人的能力。",
    description_reversed: "逆位：僵化、頑固的態度。"
  },
        {
    name: "戰車",
    img: "https://playfulfamily.org/wp-content/uploads/2024/07/f55e7610c0.jpg",
    description_upright: "正位：意志堅定，有勇氣，有行動力。",
    description_reversed: "逆位：會自視過高、自大、傲慢。"
  },
          {
    name: "正義",
    img: "http://p4.itc.cn/images01/20200608/6638dcfdf1aa43ae8d348dc391ee80da.jpeg",
    description_upright: "正位：一視同仁，賞罰分明。",
    description_reversed: "逆位：缺乏溫度。"
  },
          {
    name: "吊人",
    img: "http://p3.itc.cn/images01/20200608/4020f4cd6a5e4731aa67b5d958ee34cf.jpeg",
    description_upright: "正位：獨立，精神/心靈自由，自得其樂。",
    description_reversed: "逆位：有距離，我行我素。"
  },
          {
    name: "節制",
    img: "http://p5.itc.cn/images01/20200608/c9a6c4f762cd49edbb60c2d4d4ed6f0b.jpeg",
    description_upright: "正位：平靜，有耐性，內斂含蓄。",
    description_reversed: "逆位：中庸，較冷淡。"
  },
          {
    name: "惡魔",
    img: "http://p9.itc.cn/images01/20200608/8ef67709001f40548402b8f854693904.jpeg",
    description_upright: "正位：樂觀，喜歡或擅長玩樂，有野心。",
    description_reversed: "逆位：眼光/視野狹隘，不負責任。"
  },
     {
    name: "世界",
    img: "http://p7.itc.cn/images01/20200608/73e265794d114d12a699446be34d912f.jpeg",
    description_upright: "正位：有信心，有希望，開闊的視野。",
    description_reversed: "逆位：過度完美主義。"
  },
       {
    name: "月亮",
    img: "http://p2.itc.cn/images01/20200608/1b4daab5f37642f088c4f3f5b738172f.jpeg",
    description_upright: "正位：有想像力、創意，有神秘感。",
    description_reversed: "逆位：內心的陰影，有不安感或焦慮感。"
  },
       {
    name: "聖杯一",
    img: "https://e-tarots.com/wp-content/uploads/2023/05/93ebd-1-9.jpg?w=572&h=1024",
    description_upright: "正位：萌芽中的情感。",
    description_reversed: "逆位：缺乏情感投入。"
  },
       {
    name: "聖杯二",
    img: "http://p6.itc.cn/images01/20200608/5f050225a761475b9e4f2eb66d20f79a.jpeg",
    description_upright: "正位：心靈契合、互相吸引。",
    description_reversed: "逆位：關係失衡、誤會產生。"
  },
       {
    name: "聖杯三",
    img: "http://p3.itc.cn/images01/20200608/02f4ea3c775841ad8657cad9ed081276.jpeg",
    description_upright: "正位：有良好的人際關係，能保持正向情緒。",
    description_reversed: "逆位：容易迷失自我，沉迷享樂。"
  },
       {
    name: "聖杯四",
    img: "http://p0.itc.cn/images01/20200608/362d80d817af408d8fda45cdc90098da.jpeg",
    description_upright: "正位：懂得多思考，會仔細考慮。",
    description_reversed: "逆位：興致缺缺 ，優柔寡斷。"
  },
         {
    name: "聖杯五",
    img: "http://p9.itc.cn/images01/20200608/ff8a966ef4494e03981f188d67f229f7.jpeg",
    description_upright: "正位：會自我沉澱與內省。",
    description_reversed: "逆位：未看見仍然未失去的，容易陷入悲傷的。"
  },
         {
    name: "聖杯六",
    img: "http://p9.itc.cn/images01/20200608/2957ca724ccc4a73baeb7d5960a3409d.jpeg",
    description_upright: "正位：擁有舒適的關係或環境。",
    description_reversed: "逆位：害怕面對外面的世界，過於沉浸過去。"
  },
         {
    name: "聖杯七",
    img: "http://p8.itc.cn/images01/20200608/607b1b89bc534d91b099dfd1b332833d.jpeg",
    description_upright: "正位：有信心，有希望，開闊的視野。",
    description_reversed: "逆位：過度完美主義。"
  },
         {
    name: "聖杯八",
    img: "http://p8.itc.cn/images01/20200608/5d30fada53064dd5804a9eb07f505fa7.jpeg",
    description_upright: "正位：有信心，有希望，開闊的視野。",
    description_reversed: "逆位：過度完美主義。"
  },
         {
    name: "聖杯九",
    img: "http://p5.itc.cn/images01/20200608/133925c674ad46c7944994976b34bab4.jpeg",
    description_upright: "正位：有信心，有希望，開闊的視野。",
    description_reversed: "逆位：過度完美主義。"
  },
         {
    name: "聖杯十",
    img: "http://p5.itc.cn/images01/20200608/94bf27fa2336483883305741380793ed.jpeg",
    description_upright: "正位：有信心，有希望，開闊的視野。",
    description_reversed: "逆位：過度完美主義。"
  },
         {
    name: "聖杯侍者",
    img: "http://p8.itc.cn/images01/20200608/45a89760ffa3428a9186333be8a18089.jpeg",
    description_upright: "正位：好學的，關懷與照顧他人，喜表達自己、與人溝通。",
    description_reversed: "逆位：情感脆弱，依賴他人的肯定。"
  },
         {
    name: "聖杯騎士",
    img: "http://p9.itc.cn/images01/20200608/5248f63e01de4b43ac60cf5239959cb1.jpeg",
    description_upright: "正位：充滿創意的想像力，追求藝術性。",
    description_reversed: "逆位：容易天馬行空，容易花心或濫情。"
  },
         {
    name: "聖杯王后",
    img: "http://p6.itc.cn/images01/20200608/795f51c913bd43ad84d42d322a28e79e.jpeg",
    description_upright: "正位：富有愛心及同理心，有創造力，有藝術細胞。",
    description_reversed: "逆位：容易同理心、同情心過度氾濫。"
  },
         {
    name: "聖杯國王",
    img: "http://p7.itc.cn/images01/20200608/1db48e10385044f2ad41c2f1083e0527.jpeg",
    description_upright: "正位：有信心，有希望，開闊的視野。",
    description_reversed: "逆位：過度完美主義。"
  },
           {
    name: "寶劍首牌",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/s1.jpeg",
    description_upright: "正位：心智清晰、新思想、決定性的洞察力。",
    description_reversed: "逆位：思想混亂、溝通障礙、缺乏方向。"
  },
             {
    name: "寶劍二",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/s2.jpeg",
    description_upright: "正位：選擇、糾葛、 平衡、信息收集。",
    description_reversed: "逆位：猶豫不決、優柔寡斷、遲疑。"
  },
             {
    name: "寶劍三",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/s3.jpeg",
    description_upright: "正位：痛苦、心碎、失望、 分離。",
    description_reversed: "逆位：解脫、寬恕、恢復。"
  },
               {
    name: "寶劍四",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/s4.jpeg",
    description_upright: "正位：休息、恢復、平靜、放鬆。",
    description_reversed: "逆位：內心不安、恢復進程、準備前進。"
  },
               {
    name: "寶劍五",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/s5.jpeg",
    description_upright: "正位：競爭、勝利、衝突、糾紛。",
    description_reversed: "逆位：避免不必要的爭議、修復關係。"
  },
               {
    name: "寶劍六",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/s6.jpeg",
    description_upright: "正位：移動、脫離困境、前進的勇氣。",
    description_reversed: "逆位：阻礙、困在過去、重蹈覆轍、被困。"
  },
               {
    name: "寶劍七",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/s7.jpeg",
    description_upright: "正位：謊言、詭計、暗地裡施展詭計。",
    description_reversed: "逆位：坦承、揭露、懺悔。"
  },
                 {
    name: "寶劍八",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/s8.jpeg",
    description_upright: "正位：受害、 無能為力、監禁、恐懼。",
    description_reversed: "逆位：解脫、自由、 釋放、克服困難。"
  },
                 {
    name: "寶劍九",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/s9.jpeg",
    description_upright: "正位：擔憂、失眠、負面情緒、自我懷疑。",
    description_reversed: "逆位：克服、放鬆、心態恢復平靜。"
  },
                 {
    name: "寶劍十",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/s10.jpeg",
    description_upright: "正位：結局、解脫、終點、新的開始。",
    description_reversed: "逆位：困難高峰、困境持續、絕望、復發。"
  },
                 {
    name: "寶劍侍者",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/s_pace.jpeg",
    description_upright: "正位：警戒、機智、靈活、好奇、敏捷。",
    description_reversed: "逆位：漫不經心、困惑、混淆。"
  },
                 {
    name: "寶劍騎士",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/s_knight.jpeg.webp",
    description_upright: "正位：有野心、以行動為導向、渴望成功。",
    description_reversed: "逆位：焦躁不安、缺乏焦點、衝動行事。"
  },
                   {
    name: "寶劍皇后",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/s_queen.jpeg",
    description_upright: "正位：獨立、公正無私的判斷、清晰的界限。",
    description_reversed: "逆位：過於批判、容易受影響、尖酸刻薄。"
  },
                   {
    name: "寶劍國王",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/s_king.jpeg",
    description_upright: "正位：心智清晰、智力強大、權威。",
    description_reversed: "逆位：不實際的期望、思維偏激、濫用權力。"
  },
    {
    name: "權杖一",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/w1.jpeg",
    description_upright: "正位：自信、創意、新的開始。",
    description_reversed: "逆位：猶豫不決、延遲、拖延、缺乏激情。"
  },
  {   name: "權杖二",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/w2.jpeg",
    description_upright: "正位：順利、進展、達成目標、下一步。",
    description_reversed: "逆位：計劃受阻、不採取行動、擔心、猶豫。"
  },
   {     name: "權杖三",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/w3.jpeg",
    description_upright: "正位：前進、擴大、成長、成功、展望、摸索。",
    description_reversed: "逆位：沒有進展、阻礙、限制、局限。"
  },
    {    name: "權杖四",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/w4.jpeg",
    description_upright: "正位：穩定性、歸屬感、慶祝、團聚。",
    description_reversed: "逆位：放棄、不穩定、失去掌控。"
  },
      {    name: "權杖五",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/w5.jpeg",
    description_upright: "正位：衝突、競爭、鍛鍊、改變。",
    description_reversed: "逆位：衝突升級、對抗、固執己見、情緒化。"
  },
      {    name: "權杖六",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/w6.jpeg",
    description_upright: "正位：勝利、成就感、認可、稱讚、驕傲。",
    description_reversed: "逆位：失敗、挫折感、失望。"
  },
      {    name: "權杖七",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/w7.jpeg",
    description_upright: "正位：克服軟弱、為自己奮鬥、自信、勇氣。",
    description_reversed: "逆位：放棄、認輸、壓力過大、準備不足、缺乏自信。"
  },
        {    name: "權杖八",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/w8.jpeg",
    description_upright: "正位：快速進展、方向清晰、行動力、效率。",
    description_reversed: "逆位：緩慢、倉促、毫無準備、進展受阻。"
  },
        {    name: "權杖九",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/w9.jpeg",
    description_upright: "正位：堅持到底、防守、毅力、警惕。",
    description_reversed: "逆位：疲憊、壓力、目標模糊、失守。"
  },
        {    name: "權杖十",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/w10.jpeg",
    description_upright: "正位：堅持、負擔、 責任、 壓力、完成。",
    description_reversed: "逆位：解脫、放下、崩潰、責任釋放。"
  },
          {    name: "權杖侍者",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/w_pace.jpeg",
    description_upright: "正位：冒險、好奇心、啟發、樂觀、精力充沛。",
    description_reversed: "逆位：不耐煩、焦躁、缺乏實現。"
  },
          {    name: "權杖騎士",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/w_knight.jpeg",
    description_upright: "正位：勇敢、冒險、熱情、行動、積極。",
    description_reversed: "逆位：魯莽、 躁進、被動、易變、霸道。"
  },
          {    name: "權杖皇后",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/w_queen.jpeg",
    description_upright: "正位：自信、可靠、熱情、社交、魅力。",
    description_reversed: "逆位：任性、復仇、高傲、嫉妒。"
  },
     {    name: "權杖國王",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/w_king.jpeg",
    description_upright: "正位：領導力, 遠見, 大局觀, 控制, 大膽的決定。",
    description_reversed: "逆位：霸道, 暴君, 惡毒, 無能為力。"
  },
      {    name: "錢幣一",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/p1.jpeg",
    description_upright: "正位：實力、機會、大膽的決定、豐收。",
    description_reversed: "逆位：錯失機會、資源稀缺、不穩定。"
  },
      {    name: "錢幣二",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/p2.jpeg",
    description_upright: "正位：平衡、選擇、變革、適應性。",
    description_reversed: "逆位：失衡、無法應對、不堪重負。"
  },
        {    name: "錢幣三",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/p3.jpeg",
    description_upright: "正位：團隊合作、專注、努力。",
    description_reversed: "逆位：合作不順利、缺乏凝聚力、分心。"
  },
        {    name: "錢幣四",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/p4.jpeg",
    description_upright: "正位：佔有欲、穩定、囤積、儲蓄、節儉。",
    description_reversed: "逆位：吝嗇、貪婪、魯莽支出、利用。"
  },
        {    name: "錢幣五",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/p5.jpeg",
    description_upright: "正位：逆境、困難、損失、孤立、被遺棄。",
    description_reversed: "逆位：恢復、克服逆境、痛苦緩解。"
  },
        {    name: "錢幣六",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/p6.jpeg",
    description_upright: "正位：善意、慷慨、幫助、支持、分享。",
    description_reversed: "逆位：權力、支配、濫用慷慨、賄賂。"
  },
          {    name: "錢幣七",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/p7.jpeg",
    description_upright: "正位：成長、進步、收穫、獎勵、耐心。",
    description_reversed: "逆位：拖延、缺乏成長、未完成的工作。"
  },
          {    name: "錢幣八",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/p8.jpeg",
    description_upright: "正位：修行、專注、工藝、技術、專業。",
    description_reversed: "逆位：隨便、平庸、懶惰、缺乏素質。"
  },
          {    name: "錢幣九",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/p9.jpeg",
    description_upright: "正位：達成、成就感、獨立、財富累積。",
    description_reversed: "逆位：衝動消費、揮霍、不穩定、財務混亂。"
  },
          {    name: "錢幣十",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/p10.jpeg",
    description_upright: "正位：富裕、豐盛、穩定、家庭、 安全感。",
    description_reversed: "逆位：不穩定、浪費、財務問題、家庭糾紛。"
  },
          {    name: "錢幣侍者",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/p_pace.jpeg",
    description_upright: "正位：學習、勤奮、腳踏實地、計劃。",
    description_reversed: "逆位：懶惰、愚蠢、幼稚、逃避責任。"
  },
          {    name: "錢幣騎士",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/p_knight.jpeg",
    description_upright: "正位：責任感、實際、穩定、可靠、勤奮。",
    description_reversed: "逆位：懶惰、無聊、消極、不負責任。"
  },
          {    name: "錢幣皇后",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/p_queen.jpeg",
    description_upright: "正位：自主、現實、大方、繁榮。",
    description_reversed: "逆位：貪婪、物質主義、自私、嫉妒。"
  },
          {    name: "錢幣國王",
    img: "https://lunala-tarot.com/wp-content/uploads/2023/10/p_king.jpeg",
    description_upright: "正位：雄心、保護、豐富、繁榮。",
    description_reversed: "逆位：浪費、貪婪、賭徒、佔有欲。"
  },
  
    
];

const container = document.getElementById("card-container");
const selectedArea = document.getElementById("selected-cards");
let selectedCount = 0;

// 初始載入
reset();

// 按 R 重置
document.addEventListener("keydown", (e) => {
  if (e.key === "r" || e.key === "R") {
    reset();
  }
});

function reset() {
  container.innerHTML = "";
  selectedArea.innerHTML = "";
document.getElementById("summary").innerHTML = "";

  selectedCount = 0;

  const total = tarotDeck.length;

  tarotDeck.forEach((card, index) => {
    const isReversed = Math.random() < 0.5;
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.dataset.index = index;
    cardElement.dataset.reversed = isReversed;

    // 彩虹式扇形排列
    const angleRange = 90;
    const radius = 300;
    const angle = -angleRange / 2 + index * (angleRange / (total - 1));
    const rad = angle * (Math.PI / 180);
    const x = radius * Math.sin(rad);
    const y = radius * (1 - Math.cos(rad));

    cardElement.style.position = "absolute";
    cardElement.style.left = `calc(50% + ${x}px)`;
    cardElement.style.top = `${y}px`;
    cardElement.style.transform = `rotate(${angle}deg)`;
    cardElement.style.transformOrigin = "bottom center";
    cardElement.style.zIndex = index;

    cardElement.innerHTML = `
      <div class="card-inner">
        <div class="card-back"></div>
        <div class="card-front">
          <img src="${card.img}" alt="${card.name}" style="transform: rotate(${isReversed ? 180 : 0}deg);">
          <div class="description">
            <strong>${card.name}</strong><br>
            ${isReversed ? card.description_reversed : card.description_upright}
          </div>
        </div>
      </div>
    `;

    // 點擊事件
    cardElement.addEventListener("click", () => {
      if (!cardElement.classList.contains("flipped") && selectedCount < 3) {
        cardElement.classList.add("flipped");
        selectedCount++;

        // 複製卡片到右側
        const clone = cardElement.cloneNode(true);
        clone.classList.remove("flipped");
        clone.style.transform = "none";
        clone.style.position = "relative";
        clone.style.left = "0";
        clone.style.top = "0";

        // 保留資訊
        clone.dataset.index = cardElement.dataset.index;
        clone.dataset.reversed = cardElement.dataset.reversed;

        selectedArea.appendChild(clone);

        setTimeout(() => {
          clone.classList.add("flipped");
        }, 100);

        // 選滿三張產生總結
        if (selectedCount === 3) {
          const selectedCards = Array.from(selectedArea.children).map(el => {
            const index = parseInt(el.dataset.index);
            const reversed = el.dataset.reversed === "true";
            const card = tarotDeck[index];
            return {
              name: card.name,
              description_upright: card.description_upright,
              description_reversed: card.description_reversed,
              reversed: reversed
            };
          });

          const summary = generateSummary(selectedCards);
          document.getElementById("summary").innerText = summary;
        }
      }
    });

    container.appendChild(cardElement);
  });
}

function generateSummary(selectedCards) {
  if (selectedCards.length !== 3) return "請選滿三張卡牌來獲得占卜結果。";

  const themes = selectedCards.map(card => {
    const state = card.reversed ? "逆位" : "正位";
    const desc = card.reversed ? card.description_reversed : card.description_upright;
    return `「${card.name}」${state}：${desc}`;
  });

  let message = "🔮 你抽到的三張牌為：\n";
  message += themes.join("\n");

  const uprightCount = selectedCards.filter(c => !c.reversed).length;

let overall = "\n\n✨ 總結建議:";

if (uprightCount === 3) {
  overall += "你的能量非常強大，近期行動將有極佳成果！勇敢前進吧。\n";
  overall += "這是一段值得把握的時機，無論是感情、學業或工作，都有突破的潛力。";
} else if (uprightCount === 2) {
  overall += "你目前正處於轉變中，大致向好，記得抓住機會。\n";
  overall += "雖然仍有些不確定因素，但整體趨勢正面，適合嘗試新方向。";
} else if (uprightCount === 1) {
  overall += "你可能感受到阻力，但有一線希望指引你前行。耐心與調整是關鍵。\n";
  overall += "別急著做出決定，靜下心來傾聽內在聲音，將有助於找到方向。";
} else {
  overall += "近期可能會遇到挑戰，建議暫緩重大決策，並關注內在反思與休息。\n";
  overall += "有時停止腳步，是為了走得更穩更遠。給自己一點空間與療癒。";
}


  return message + overall;
}