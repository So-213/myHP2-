export default function LearningHistory() {
  const learningPeriods = [
    {
      period: "1-3ヶ月目",
      topics: ["GitHub基礎 / Web技術概略", "HTML / CSS / JS", "JS / Node.js / React"],
      status: "completed"
    },
    {
      period: "4-5ヶ月目", 
      topics: ["API / Projects①作成", "Vercel / V0 / 本HP作成", "cookie / セッション / 認証認可"],
      status: "completed"
    },
    {
      period: "6ヶ月目",
      topics: ["Cognito / Route53", "Next.js基礎"],
      status: "completed"
    },
    {
      period: "7ヶ月目",
      topics: ["Auth.js（JWTベース認証）", "DB設計 / Postgres / Prisma / Supabase"],
      status: "completed"
    },
    {
      period: "8-9ヶ月目（KL渡航期）",
      topics: ["休止期間2ヶ月"],
      status: "paused"
    },
    {
      period: "10-11ヶ月目",
      topics: ["Stripe"],
      status: "completed"
    },
    {
      period: "12-14ヶ月目",
      topics: ["Projects③", "Docker基礎"],
      status: "completed"
    }
  ];

  return (
    <div className="space-y-6 p-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-black-600 mb-2">学習履歴</h1>
        <p className="text-sm text-gray-600">学習開始：2024年9月15日</p>
      </div>

      <div className="space-y-4">
        {learningPeriods.map((item, index) => (
          <div key={index} className="relative">
            {/* Timeline line */}
            {index < learningPeriods.length - 1 && (
              <div className="absolute left-4 top-8 w-0.5 h-full bg-gray-300"></div>
            )}
            
            {/* Timeline dot */}
            <div className={`absolute left-3 top-2 w-2 h-2 rounded-full ${
              item.status === 'completed' ? 'bg-green-500' : 
              item.status === 'paused' ? 'bg-yellow-500' : 'bg-gray-400'
            }`}></div>
            
            {/* Content card */}
            <div className={`ml-8 p-4 rounded-lg border-l-4 ${
              item.status === 'completed' ? 'border-green-500 bg-green-50' :
              item.status === 'paused' ? 'border-yellow-500 bg-yellow-50' : 
              'border-gray-400 bg-gray-50'
            }`}>
              <h2 className="text-lg font-bold mb-2 text-gray-800">
                {item.period}
              </h2>
              <div className="space-y-1">
                {item.topics.map((topic, topicIndex) => (
                  <p key={topicIndex} className="text-sm text-gray-700">
                    • {topic}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="text-sm font-bold text-blue-800 mb-2">学習スタイル</h3>
        <p className="text-sm text-blue-700">
          基本的にUdemyやYoutubeで概要やロジックを理解してから、コードはCursorに書いてもらうという流れで勉強しています。
        </p>
      </div>

    </div>
  );
}
  