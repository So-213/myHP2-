export default function AboutMeContent() {


    return (
      <div className="space-y-4 flex flex-col items-start">
        <div className="flex justify-between w-full">
          <h1 className="text-2xl font-bold">So</h1>
          <img
            src="/me.jpg"
            alt="My Photo"
            className="w-40 h-auto rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-lg font-bold">年齢</h2>
          <p>24 (2001)</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">現在</h2>
          <p>クアラルンプールにいます</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">学歴</h2>
          <p>広島市立大学 情報科学部卒</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">資格</h2>
          <ul className="list-disc pl-5">
            <li>第4級アマチュア無線技士（2014年）</li>
            <li>実用英語技能検定2級（2018年）</li>
            <li>普通自動車第一種運転免許（2023年）</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold">その他</h2>
          <p>ヒッチハイクとか野宿とか面白いことが好きです</p>
        </div>
      </div>
    );
  }
  