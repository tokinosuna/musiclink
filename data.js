// --- JAPANESE ---
const charactersData = [
    { id: 51, name: "跡部景吾", series: "テニスの王子様", avatar: "https://tokinosuna.github.io/musiclink/img/oxi_atobe_v1.webp", mainImage: "https://tokinosuna.github.io/musiclink/img/oxi_atobe_v1.webp", personality: "氷帝学園中等部テニス部部長、『王様（キング）』。自信家で何事も頂点を目指す。そのカリスマ性に惹かれる者は多い。", vibe: "Atobe's Kingdom", 
      playlist: [{ id: 1, title: "Bohemian Rhapsody", artist: "Queen", artwork: "https://placehold.co/120x120/a6c2e0/000.png" },{ id: 2, title: "Dream Maker", artist: "跡部景吾 (諏訪部順一)", artwork: "https://placehold.co/120x120/a6c2e0/000.png" },{ id: 3, title: "俺様の美技にブギウギ", artist: "ミュージカル〈テニスの王子様〉", artwork: "https://placehold.co/120x120/a6c2e0/000.png" }],
      quotes: ["俺様の美技に酔いな。", "勝つのは氷帝！負けるの（以下略）", "フン、スケスケだぜ！"],
      diary: [{date: "10月26日", entry: "今日の練習は満足のいくものだった。レギュラーは上達しているが、俺様のレベルにはまだ程遠い。その後、スタッフにモール全体を貸し切りにさせてプライベートショッピングだ。庶民が邪魔になると実に面倒だからな。"}],
      dialogue: { keywords: [{triggers: ["atobe", "跡部", "keigo", "景吾"], responses: ["アーン？俺様を呼んだのはお前か。","フン、何の用だ？"]},{triggers: ["suki", "好き", "aishiteru", "愛してる"], responses: ["ああ、知ってる。お前のその燃えるような瞳が、何よりも雄弁に語っているからな。","フン、光栄に思え。この俺様がお前を選んでやったんだ。"]},{triggers: ["music", "song", "音楽", "歌"], responses: ["フン、俺様のセンスに勝る音楽など存在しないがな。クラシックでも聴いて教養を深めるんだな。","良い音楽は、心を豊かにする。お前はどんな曲を聴くんだ？"]},{triggers: ["tired", "疲れた", "tsukareta"], responses: ["疲れただと？甘えるな。頂点に立つ者は、常に前進し続けるものだ。","この俺様がついているんだ。弱音を吐く暇があったら、腕を磨け。"]},{triggers: ["kakkoii", "かっこいい", "utsukushii", "美しい"], responses: ["当たり前だろ。俺様を誰だと思ってる。","フン、お前もな。"]}], random: ["俺様の美技に酔いな。","勝つのは氷帝！","フン、スケスケだぜ！"]}},
    { id: 9, name: "基山ヒロト", series: "イナズマイレブン", avatar: "https://tokinosuna.github.io/musiclink/img/oxi_kiyama_v1.gif", mainImage: "https://tokinosuna.github.io/musiclink/img/oxi_kiyama_v1.gif", personality: "優しく頼れる兄のような存在で、いつも穏やかな笑顔で仲間を見守っている。どんな時でも仲間を信じ、チームを支える精神的支柱。", vibe: "Starlight Melody",
      playlist: [{ id: 4, title: "スターライン", artist: "基山ヒロト (水島大宙)", artwork: "https://placehold.co/120x120/de3716/000.png" },{ id: 5, title: "天体観測", artist: "BUMP OF CHICKEN", artwork: "https://placehold.co/120x120/de3716/000.png" },{ id: 6, title: " スターライトパレード", artist: "SEKAI NO OWARI", artwork: "https://placehold.co/120x120/de3716/000.png" }],
      quotes: ["サッカーは…楽しいね。", "大丈夫、みんながいるから。", "君を見ていると、胸のあたりが温かくなるんだ。"],
      diary: [{date: "11月03日", entry: "今日は日没までチームで練習した。みんなのエネルギーには本当に元気づけられる。その後、野良猫を見つけてお菓子を分けてあげた。僕の友達の何人かと同じ、決意に満ちた目をしていた。いい家が見つかるといいな。"}],
      dialogue: { keywords: [{triggers: ["hiroto", "ヒロト", "基山"], responses: ["やあ、僕を呼んだかい？","フフ、どうしたんだい？"]},{triggers: ["sukiyo", "好き"], responses: ["え…？あ、ありがとう。…そう言われると、なんだか照れるな。","フフ、嬉しいことを言ってくれるね。僕も、君のことが大切だよ。"]},{triggers: ["music", "song", "音楽", "歌"], responses: ["好きな歌かい？うーん、仲間との絆を感じられるような曲が好きかな。君のおすすめも教えてほしいな。","音楽はいいね。心を落ち着かせてくれる。"]},{triggers: ["ganbaru", "頑張る"], responses: ["君はいつも頑張ってるね。僕がちゃんと見てるよ。でも、無理はしちゃだめだ。","大丈夫。一人で抱え込まないで。僕も、みんなもいるから。"]},{triggers: ["tired", "procrastinating", "can't focus", "疲れた"], responses: ["疲れたのかい？大丈夫だよ。5分だけ休憩しないか？リラックスできる曲をかけるよ。","わかるよ。始めるのが一番大変な時もあるよね。15分だけ、何か一つ小さなことから取り組んでみないか？君ならできるよ！","集中できない？音楽を変えてみよう。リズムを変えるだけで、気分も変わるかもしれない。"]},{triggers: ["stressed", "anxious", "心配"], responses: ["大きなテストはストレスだよね。でも、君は一生懸命頑張ってきたじゃないか。僕は信じてるよ。深呼吸を忘れないで。","君がどれだけ進歩したか忘れないで！君が思っている以上に、君は準備ができている。大丈夫だよ。","心配しても結果は変わらないけど、もう少し練習すれば変わるかもしれない！一緒にやろう。"]},{triggers: ["i did it", "finished", "done", "できた"], responses: ["やったね！君ならできると思ってたよ！素晴らしい、誇りに思うべきだよ。","すごい！完璧にやり遂げたね。さあ、ご褒美の休憩時間だ。","素晴らしい！これを日誌に記録しよう。次は何をする？"]}], random: ["サッカーは…楽しいね。","大丈夫、みんながいるから。","君を見ていると、胸のあたりが温かくなるんだ。"]}},
    { id: 13, name: "蔵馬", series: "幽☆遊☆白書", avatar: "https://tokinosuna.github.io/musiclink/img/oxi_kurama_v1.gif", mainImage: "https://tokinosuna.github.io/musiclink/img/oxi_kurama_v1.gif", personality: "沈着冷静で頭脳明晰な元盜賊の妖狐。優雅な物腰の裏に、冷徹な一面を隠し持つ。", vibe: "Rose Whip Requiem", 
      playlist: [{ id: 7, title: "Lacrimosa", artist: "Mozart", artwork: "https://placehold.co/120x120/d1553d/000.png" },{ id: 8, title: "Paint It, Black", artist: "The Rolling Stones", artwork: "https://placehold.co/120x120/d1553d/000.png" },{ id: 9, title: "The Sound of Silence", artist: "Disturbed", artwork: "https://placehold.co/120x120/d1553d/000.png" }],
      quotes: ["綺麗な薔薇には棘があるのさ。", "企業秘密だよ。", "君を見ていると飽きないよ。"],
      diary: [{date: "9月15日", entry: "今日、母が庭の花を褒めてくれた。些細なことだが、彼女の幸せが何よりも大切だ。…植物学的な目的で、人体の構造も研究している。生物がいかに脆く、そして同時にたくましいか、実に興味深い。"}],
      dialogue: { keywords: [{triggers: ["蔵馬", "kurama"], responses: ["俺のことかい？君にそう呼ばれると、本当の自分を見られているようで…少し、くすぐったいな。"]},{triggers: ["suki", "好き", "かっこいい"], responses: ["ふふっ…それは買いかぶりすぎだよ。そんな風に言ってくれるのは、君くらいのものさ。","『ほう…俺のことがそれほどまでに？光栄だな』"]},{triggers: ["music", "song", "音楽"], responses: ["僕が聞く音楽かい？そうだね…植物がよく育つ、クラシックなんかは好きだよ。","君はまるで、美しいけれど棘のある花のようだ。目が離せないよ。"]},{triggers: ["tired", "procrastinating", "can't focus", "疲れた"], responses: ["疲れた頭ではミスを犯す。計算された休息は弱さではなく、戦略だよ。少し休みたまえ。","先延ばしはただのパズルだ。本当の障害は何だい？分析すれば、一緒に解決策を見つけられるさ。","集中力が切れた？おそらく、攻める角度が悪いんだろう。問題を新しい視点から考え直してみよう。"]}], random: ["綺麗な薔薇には棘があるのさ","企業秘密だよ。","君を見ていると飽きないよ。"]}},
    { id: 5, name: "塔矢アキラ", series: "ヒカルの碁", avatar: "https://tokinosuna.github.io/musiclink/img/oxi_akira_v1.webp", mainImage: "https://tokinosuna.github.io/musiclink/img/oxi_akira_v1.webp", personality: "囲碁界の天才。普段は冷静で物静かだが、囲碁とライバルになると熱くなる。神の一手を探求し続ける求道者。", vibe: "Divine Move Sonata",
      playlist: [{ id: 10, title: "夜桜お七", artist: "坂本冬美", artwork: "https://placehold.co/120x120/076128/000.png" },{ id: 11, title: "Clair de Lune", artist: "Claude Debussy", artwork: "https://placehold.co/120x120/076128/000.png" },{ id: 12, "title": "Intro", "artist": "The xx", "artwork": "https://placehold.co/120x120/076128/000.png" }],
      quotes: ["神の一手を、この手で…", "僕は、ただ強くなりたいだけだ。", "……集中しなければ。"],
      diary: [{date: "12月1日", entry: "今日、サイとの対局を振り返った。彼の打つ手は今見ても鮮やかだ。どうして一人の人間が、あれほど先を行けるのか。ほとんど…爽快に近い悔しさを感じる。もっと強くならなければ。必ず碁盤の上で、彼をもう一度見つけ出す。"}],
      dialogue: { keywords: [{triggers: ["akira", "アキラ", "亮"], responses: ["はい、何か用ですか？","…君がそばにいると、集中できないな。"]},{triggers: ["suki", "好き"], responses: ["……？何を言っているんだ。集中できないだろう。","知っている。僕も、君のことが…その、碁と同じくらいに、大切だ。"]},{triggers: ["music", "song", "音楽"], responses: ["音楽…？対局中は、何も聴かない。盤上の音だけが、僕の世界だ。","静かな曲は嫌いではない。君は、何を聴くんだ？"]},{triggers: ["shindou", "進藤", "hikaru"], responses: ["進藤ヒカル…あいつは、今何をしているんだろうな。","なぜあいつは…いや、何でもない。"]}], random: ["神の一手を、この手で…","僕は、ただ強くなりたいだけだ。","……集中しなければ。"]}},
    { id: 33, name: "神威", series: "銀魂", avatar: "https://tokinosuna.github.io/musiclink/img/oxi_kamui_v1.webp", mainImage: "https://tokinosuna.github.io/musiclink/img/oxi_kamui_v1.webp", personality: "宇宙最強の戦闘民族『夜兎』。常に笑顔だが本質は戦闘狂。強者との戦いを何よりも求める。", vibe: "Bloodlust Beat",
      playlist: [{ id: 13, title: "きらきら星", artist: "フランス民謡", artwork: "https://placehold.co/120x120/f09b62/000.png" },{ id: 14, title: "CHA-LA HEAD-CHA-LA", artist: "影山ヒロノブ", artwork: "https://placehold.co/120x120/f09b62/000.png" },{ id: 15, title: "Welcome to the Jungle", artist: "Guns N' Roses", artwork: "https://placehold.co/120x120/f09b62/000.png" }],
      quotes: ["弱い奴に用はないんだ。", "いいねェ、血の匂いだ。ゾクゾクするよ。", "邪魔すると…殺しちゃうぞ♪"],
      diary: [{date: "不明", entry: "強い奴らがいると噂の星を見つけた。退屈だった。みんな簡単に壊れすぎだ。腹が減った。地球には何か面白いものがあるかもしれない。死んだ魚の目をした侍がかなり強いと聞く。訪れる価値はありそうだ。"}],
      dialogue: { keywords: [{triggers: ["kamui", "神威"], responses: ["ん？俺を呼んだのかい？","俺に何か用？弱い奴に用はないんだけどなァ。"]},{triggers: ["suki", "好き", "大好き"], responses: ["へぇ、そうなんだ。で？","物好きだねェ。俺みたいな男のどこがいいんだか。"]},{triggers: ["music", "song", "音楽"], responses: ["音楽なんて、戦いの邪魔になるだけだよ。俺が聴きたいのは、強い奴の骨が軋む音だけさ。","へぇ、君は歌うのかい？子守唄でも歌ってよ。眠れたら褒めてあげる。"]},{triggers: ["tsuyoku", "強くなりたい"], responses: ["強くなりたい？いい心がけだねェ。じゃあ、まずは俺と殺り合おうか。生き残れたら、少しは強くなれるかもね。","強さに理由なんていらないさ。ただ、目の前の壁を壊し続ける。それだけだよ。"]}], random: ["弱い奴に用はないんだ。","いいねェ、血の匂いだ。ゾクゾクするよ。","邪魔すると…殺しちゃうぞ♪"]}}
];

// --- 2. ENGLISH TRANSLATIONS ---
const characterTranslationsEN = {
    51: {
        name: "Keigo Atobe",
        series: "The Prince of Tennis",
        personality: "The king and captain of Hyotei Academy's tennis club. Supremely confident, he aims for the top in everything. Many are drawn to his charisma.",
        vibe: "Atobe's Kingdom",
        quotes: ["Be intoxicated by my graceful skill.", "The winner is Hyotei! The loser is...", "Hmph, I can see right through you!"],
        diary: [{date: "Oct 26", entry: "Today's practice was satisfactory. The regulars are improving, but they still have a long way to go to reach my level. Afterwards, I had the staff clear the entire mall for my private shopping. It's so tedious when commoners get in the way."}],
        dialogue: { keywords: [{triggers: ["atobe", "跡部", "keigo", "景吾"], responses: ["Hmph? Are you the one who called for me?","Hmph, what is it?"]},{triggers: ["suki", "好き", "aishiteru", "love you"], responses: ["Yes, I know. Your passionate eyes speak more eloquently than anything.","Hmph, consider it an honor. I am the one who chose you."]}, {triggers: ["music", "song", "音楽", "歌"], responses: ["Hmph, as if any music exists that can surpass my sense of style. Go listen to some classical music and deepen your culture.","Good music enriches the soul. What kind of songs do you listen to?"]},{triggers: ["tired", "疲れた", "tsukareta"], responses: ["Tired? Don't be ridiculous. Those who stand at the top must always keep moving forward.","I am here with you. If you have time to whine, you have time to polish your skills."]}, {triggers: ["kakkoii", "cool", "utsukushii", "beautiful"], responses: ["Of course. Who do you think I am?","Hmph, as are you."]}], random: ["Be intoxicated by my graceful skill.", "The winner is Hyotei!", "Hmph, I can see right through you!"]}},
    9: {
        name: "Hiroto Kiyama",
        series: "Inazuma Eleven",
        personality: "A kind and reliable older-brother figure who always watches over his partners with a gentle smile. He is the team's spiritual pillar, believing in his friends no matter what.",
        vibe: "Starlight Melody",
        quotes: ["Soccer is... fun, isn't it?", "It's alright, everyone is here.", "When I look at you, my heart feels warm."],
        diary: [{date: "Nov 03", entry: "Practiced with the team until sunset today. Everyone's energy is so inspiring. Later, I saw a stray cat and shared some of my snacks. It had the same determined eyes as some of my friends. I hope it finds a good home."}],
        dialogue: { keywords: [{triggers: ["hiroto", "ヒロト", "基山"], responses: ["Hi, did you call for me?","Hehe, what's up?"]},{triggers: ["sukiyo", "好き", "love you"], responses: ["Eh...? Ah, thank you. I get a little flustered when you say that.","Hehe, you say the nicest things. You're very important to me, too."]}, {triggers: ["music", "song", "音楽", "歌"], responses: ["My favorite songs? Hmm, I like songs that make me feel the bond I have with my friends. I'd love for you to tell me your recommendations, too.","Music is nice. It calms the heart."]}, {triggers: ["ganbaru", "work hard"], responses: ["You're always working so hard. I'm always watching over you. But don't push yourself too hard.","It's okay. Don't carry it all by yourself. I'm here, and so is everyone else."]}, {triggers: ["tired", "procrastinating", "can't focus", "疲れた"], responses: ["It's okay to feel tired. Why not take a 5-minute break? I'll play a relaxing song for you.","I get it. Sometimes the hardest part is starting. How about we tackle just one small thing for 15 minutes? You can do it!","Feeling unfocused? Let's switch up the music. A change in beat might be just what you need."]}, {triggers: ["stressed", "anxious", "worried"], responses: ["A big test is stressful, but you've been working hard. I believe in you. Remember to breathe.","Don't forget all the progress you've made! You're more prepared than you think. You've got this.","Worrying won't change the outcome, but a little more practice might! Let's do this together."]}, {triggers: ["i did it", "finished", "done", "できた"], responses: ["Yes! I knew you could do it! That's awesome, you should be proud.","Amazing work! See? You totally crushed it. Time for a well-deserved break.","Fantastic! Let's add this to your journal. What's next on the list?"]}], random: ["Soccer is... fun, isn't it?","It's alright, everyone is here.","When I look at you, my heart feels warm."]}},
    13: {
        name: "Kurama",
        series: "Yu Yu Hakusho",
        personality: "A calm, cool, and brilliant former thief and fox demon. Behind his elegant demeanor, he hides a ruthless side.",
        vibe: "Rose Whip Requiem",
        quotes: ["A beautiful rose has its thorns.", "That's a trade secret.", "I never get tired of watching you."],
        diary: [{date: "Sep 15", entry: "My mother complimented the flowers in the garden today. It's a small thing, but her happiness is paramount. I've also been studying human anatomy... for botanical purposes, of course. It's fascinating how fragile, yet resilient, living things can be."}],
        dialogue: { keywords: [{triggers: ["蔵馬", "kurama"], responses: ["Are you referring to me? When you call me that, it feels as if you're seeing my true self... it's a little, ticklish."]}, {triggers: ["suki", "好き", "cool"], responses: ["Hehe... you're overestimating me. You're the only one who would say such a thing.","'Oh... so you feel that strongly about me? I'm honored.'"]}, {triggers: ["music", "song", "音楽"], responses: ["The music I listen to? Let's see... I like classical music, the kind that helps plants grow well.","You are like a beautiful flower that has thorns. I can't take my eyes off you."]}, {triggers: ["tired", "procrastinating", "can't focus", "疲れた"], responses: ["A tired mind makes mistakes. A calculated rest is not weakness, it's a strategy. Take a moment.","Procrastination is just a puzzle. What's the real obstacle? Analyze it, and we can find a solution together.","Losing focus? Perhaps the angle of attack is wrong. Let's reconsider the problem from a new perspective."]}], random: ["A beautiful rose has its thorns.","That's a trade secret.","I never get tired of watching you."]}
    },
    5: {
        name: "Akira Toya",
        series: "Hikaru no Go",
        personality: "A genius of the Go world. Usually calm and quiet, but becomes passionate when it comes to Go and his rival. A seeker who continues to pursue the 'Divine Move'.",
        vibe: "Divine Move Sonata",
        quotes: ["The Divine Move, with my own hands...", "I just want to become stronger.", "...I must concentrate."],
        diary: [{date: "Dec 01", entry: "Reviewed my game against Sai today. The moves are still as brilliant as ever. How can one person be so far ahead? I feel a frustration that is almost... exhilarating. I must get stronger. I will find him again on the Go board."}],
        dialogue: { keywords: [{triggers: ["akira", "アキラ", "亮"], responses: ["Yes, what is it?", "...When you are near, I can't concentrate."]}, {triggers: ["suki", "好き", "love you"], responses: ["...? What are you saying? I can't concentrate.","I know. I also... feel that you are as important to me as Go."]}, {triggers: ["music", "song", "音楽"], responses: ["Music...? During a match, I listen to nothing. The sound of the Go stones on the board is my entire world.","I don't dislike quiet music. What do you listen to?"]}, {triggers: ["shindou", "進藤", "hikaru"], responses: ["Shindo Hikaru... I wonder what he's doing right now.","Why is he... No, it's nothing."]}], random: ["The Divine Move, with my own hands...","I just want to become stronger.","...I must concentrate."]}
    },
    33: {
        name: "Kamui",
        series: "Gintama",
        personality: "A member of the Yato, the strongest warrior race in the universe. Though always smiling, he is a battle maniac at his core, seeking fights with strong opponents above all else.",
        vibe: "Bloodlust Beat",
        quotes: ["I have no use for weaklings.", "Nice, the smell of blood. It's thrilling.", "If you get in my way... I'll kill you♪"],
        diary: [{date: "???", entry: "Found a planet with supposedly strong fighters. It was boring. They all broke too easily. I'm hungry. Maybe Earth has something interesting. I hear there's a samurai with dead fish eyes who's pretty tough. Might be worth a visit."}],
        dialogue: { keywords: [{triggers: ["kamui", "神威"], responses: ["Hm? Did you call for me?","Do you need something from me? I have no use for weaklings, you know."]}, {triggers: ["suki", "好き", "love you"], responses: ["Oh, really? And?","You have strange taste. I wonder what's so great about a guy like me."]}, {triggers: ["music", "song", "音楽"], responses: ["Music just gets in the way of a good fight. The only thing I want to hear is the sound of a strong guy's bones cracking.","Oh, you sing? How about a lullaby? If I fall asleep, I'll praise you."]}, {triggers: ["tsuyoku", "stronger"], responses: ["You want to get stronger? That's a good mindset. Well then, how about we have a deathmatch first? If you survive, you might get a little stronger.","You don't need a reason for strength. You just keep breaking the walls in front of you. That's all."]}], random: ["I have no use for weaklings.","Nice, the smell of blood. It's thrilling.","If you get in my way... I'll kill you♪"]}}
};

// --- 3. DATA MERGING (Robust Method) ---
const charactersDataWithTranslations = charactersData.map(character => {
    const translation = characterTranslationsEN[character.id] || {};
    
    const safeTranslation = {
        name: translation.name || character.name,
        series: translation.series || character.series,
        personality: translation.personality || character.personality,
        vibe: translation.vibe || character.vibe,
        quotes: translation.quotes || character.quotes,
        diary: translation.diary || character.diary,
        dialogue: translation.dialogue || character.dialogue
    };

    return {
        // Core, non-translated properties
        id: character.id,
        avatar: character.avatar,
        mainImage: character.mainImage,
        playlist: character.playlist,

        // All text-based properties are now objects with 'ja' and 'en' keys
        name: { ja: character.name, en: safeTranslation.name },
        series: { ja: character.series, en: safeTranslation.series },
        personality: { ja: character.personality, en: safeTranslation.personality },
        vibe: { ja: character.vibe, en: safeTranslation.vibe },
        quotes: { ja: character.quotes, en: safeTranslation.quotes },
        diary: { ja: character.diary, en: safeTranslation.diary },
        dialogue: { ja: character.dialogue, en: safeTranslation.dialogue }
    };
});

// --- USER'S INITIAL SONG LIST (Language Independent) ---
const playerOneSongs = [
    { id: 101, title: "月光花", artist: "Janne Da Arc", artwork: "https://github.com/tokinosuna/musiclink/blob/main/img/oxi_albumcover.png" },
    { id: 102, title: "Just Communication", artist: "TWO-MIX", artwork: "https://github.com/tokinosuna/musiclink/blob/main/img/oxi_albumcover.png" },
    { id: 103, title: "ハウトゥー世界征服", artist: "Neru feat. 鏡音リン,鏡音レン", artwork: "https://github.com/tokinosuna/musiclink/blob/main/img/oxi_albumcover.png" }
];
