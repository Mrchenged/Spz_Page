import React from 'react';
import Card from '../app/Card';
import Image from 'next/image';
import X from "logo-github.svg";

const IndexPage: React.FC = () => {
  const cards = [
    {
      word: '囿⇋局限',
      explanation: '囿，读作 yòu，意为局限、拘尼。',
      example: '唯有回归生活，才能触碰到最真实的语言和文字，不让语文素养囿于空洞的说教。'
    },
    {
      word: '丰盈⇋丰富、充实',
      explanation: '',
      example: '真正的富有在于内心丰盈。正如林清玄所言：“心美一切皆美，情深万象皆深。'
    },
    {
      word: '赓续⇋继承、延续',
      explanation: '赓，读作 gēng，指继续。',
      example: ''
    },
    {
      word: '滥觞⇋起源、开始',
      explanation: '觞，读作 shāng，古代指酒杯。滥觞，指事物的起源。',
      example: ''
    },
    {
      word: '圭臬⇋标准、规范',
      explanation: '臬，读作 niè，圭臬，古时测日影的器具，比喻准则、法度。',
      example: ''
    },
    {
      word: '熟稔⇋熟悉',
      explanation: '稔，读作 rěn，指庄稼成熟。熟稔，指熟悉。',
      example: ''
    },
    {
      word: '韶华⇋年华',
      explanation: '',
      example: '新时代中国青年以实现复兴为己任，彰显中国人的志气与底气，不负韶华。'
    },
    {
      word: '遑论⇋更不必说',
      explanation: '',
      example: '若小事不做好，遑论成就大业。'
    },
    {
      word: '殷鉴⇋历史教训',
      explanation: '',
      example: '甲午海战、庚子赔款，近史殷鉴深刻。唯有强大方能守住权益和尊严。'
    },
    {
      word: '暌违⇋别离',
      explanation: '',
      example: '暌违数载，故乡生活宁静如故，雨声、屋檐、石桥，显生活本色。'
    },
    {
      word: '商榷⇋讨论',
      explanation: '',
      example: '提议良好，具体做法尚需商榷。'
    },
    {
      word: '渊薮⇋聚集地',
      explanation: '',
      example: '若学术界沦为抄袭渊薮，创新只能是空谈。'
    },
    {
      word: '揆诸现实⇋反观当下',
      explanation: '',
      example: '“减负”口号声久，揆诸现实，学生负担却更重。'
    },
    {
      word: '筚路蓝缕⇋艰苦奋斗',
      explanation: '',
      example: '筚路蓝缕，创业艰辛，无怨无悔，追求内心宁静。'
    },
    {
      word: '栉风沐雨⇋风吹日晒',
      explanation: '',
      example: '党史诉奋斗，栉风沐雨，继续前行。'
    },
    {
      word: '胼手胝足⇋辛勤劳作',
      explanation: '',
      example: '农民劳作非凡，胼手胝足，亦是衣食恩人。'
    },
    {
      word: '焚膏继晷⇋夜以继日',
      explanation: '',
      example: '南仁东以生命换“天眼”，焚膏继晷，传承爱国精神。'
    },
    {
      word: '掇菁撷华⇋选取精华',
      explanation: '',
      example: '传统文化滋养文明，从经典中掇菁撷华，书写精彩文章。'
    },
    {
      word: '踔厉奋发⇋振奋精神',
      explanation: '',
      example: '共同努力，踔厉奋发，“中国号”必能行稳致远。'
    },
    {
      word: '岁月不居，春秋代序⇋日月如梭，光阴似箭',
      explanation: '',
      example: '岁月匆匆，日月如梭，百年光阴转瞬即逝。'
    },
    {
      word: '嚆矢（hāo shǐ）',
      explanation: '嚆，表示呼叫。嚆矢，指响箭，即箭射出后声音先到而箭后至，象征事物的发生或开端。',
      example: ''
    },
    {
      word: '滥觞（làn shāng）',
      explanation: '原意为江河发源之处水很浅，仅能浮起酒杯，后用以比喻事物的起源和发端。',
      example: ''
    },
    {
      word: '振翮（zhèn hè）',
      explanation: '翮指鸟羽的茎状部分，中空透明；鸟的翅膀。振翮，即鸟翅振动的动作。',
      example: ''
    },
    {
      word: '肯綮（kěn qìng）',
      explanation: '肯綮指筋骨结合的地方，比喻要害或关键之处。出自《庄子·内篇·养生主》，讲庖丁解牛的故事。',
      example: ''
    },
    {
      word: '孜孜矻矻（zī zī kū kū）',
      explanation: '形容勤勉不懈的样子。出自唐代韩愈的《争臣论》。',
      example: ''
    },
    {
      word: '祓魅（fú mèi）',
      explanation: '祓，古代一种除灾求福的祭祀。在这里是指消除、清除。与之相反的是“赋魅”。',
      example: ''
    },
    {
      word: '觇（chān）',
      explanation: '指偷偷地观察，暗中察看。',
      example: ''
    },
    {
      word: '洵（xún）',
      explanation: '古文中的副词，意为实在、确实。',
      example: ''
    },
    {
      word: '玉墀（yù chí）',
      explanation: '墀是指台阶上的平地。玉墀，宫殿前的石阶，有美好的象征。',
      example: ''
    },
    {
      word: '婞直（xìng zhí）',
      explanation: '婞，意为刚强。婞直，形容倔强、刚直、固执。引自《离骚》，表现在大禹之父鲧治水时以身犯险，但未能成功。',
      example: ''
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="mt-8">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {cards.map((card, index) => (
            <Card
              key={index}
              word={card.word}
              explanation={card.explanation}
              example={card.example}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-end mr-4 mb-4">
        <a
          href="https://github.com/Mrchenged/Guide_To_Writing_An_Essay_For_Exams"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-slate-500 p-2 rounded-full"
        >
          <Image src={X} alt="svg" className="h-6 w-6 text-white" />
        </a>
      </div>
    </div>
  );
  
  
};

export default IndexPage;
