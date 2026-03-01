import React from 'react';
import { ClipboardList, Calendar, Dumbbell, Activity, Shield, Anchor, Clock } from 'lucide-react';

export default function TrainingReport() {
  return (
    <div className="min-h-screen bg-[#f4f7f6] p-4 md:p-8 font-sans text-slate-800">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-md">
        
        {/* Header */}
        <header className="mb-8 text-center border-b-4 border-[#3498db] pb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2c3e50] flex items-center justify-center gap-3">
            <ClipboardList className="w-8 h-8 md:w-10 md:h-10" />
            體能訓練計畫執行報告
          </h1>
        </header>

        {/* Info Box */}
        <div className="bg-[#fdf2e9] border-l-4 border-[#e67e22] p-5 rounded-r-lg mb-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <Calendar className="w-5 h-5 text-[#e67e22] mt-0.5" />
              <div>
                <span className="font-bold block text-[#d35400]">訓練週期</span>
                <span>雙日循環（Day 1 / Day 2）</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Dumbbell className="w-5 h-5 text-[#e67e22] mt-0.5" />
              <div>
                <span className="font-bold block text-[#d35400]">必備器材</span>
                <span>短拉力帶、長彈力帶、滾筒、網球（學生自備）</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Goals */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#2980b9] bg-[#ecf0f1] p-3 border-l-4 border-[#2980b9] mb-6 flex items-center gap-2">
            <Activity className="w-6 h-6" />
            一、 訓練核心目標
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <div className="flex items-center gap-2 mb-2 text-[#16a085]">
                <Activity className="w-5 h-5" />
                <h3 className="font-bold text-lg">活動度 (Mobility)</h3>
              </div>
              <p className="text-sm text-slate-600">針對髖、胸椎進行動態伸展，優化運動幅度。</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <div className="flex items-center gap-2 mb-2 text-[#16a085]">
                <Shield className="w-5 h-5" />
                <h3 className="font-bold text-lg">穩定性 (Stability)</h3>
              </div>
              <p className="text-sm text-slate-600">透過單側與核心訓練，強化身體抗干擾能力。</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <div className="flex items-center gap-2 mb-2 text-[#16a085]">
                <Anchor className="w-5 h-5" />
                <h3 className="font-bold text-lg">控制力 (Control)</h3>
              </div>
              <p className="text-sm text-slate-600">強調「3秒離心收縮」，建立扎實肌肉發力基礎。</p>
            </div>
          </div>
        </section>

        {/* Day 1 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#2980b9] bg-[#ecf0f1] p-3 border-l-4 border-[#2980b9] mb-6 flex items-center gap-2">
            <span className="bg-[#2980b9] text-white text-xs px-2 py-1 rounded">DAY 1</span>
            二、 第一天訓練課表：基礎穩定
          </h2>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-[#16a085] mb-3 flex items-center gap-2">
              1. 活動度訓練 <span className="text-sm font-normal text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full ml-2 flex items-center gap-1"><Clock className="w-3 h-3"/> 限時 20 分鐘</span>
            </h3>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-white uppercase bg-[#34495e]">
                  <tr>
                    <th className="px-4 py-3 w-1/2">項目</th>
                    <th className="px-4 py-3 w-1/4">組數/次數</th>
                    <th className="px-4 py-3 w-1/4">執行要點</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white hover:bg-gray-50"><td className="px-4 py-3 font-medium">青蛙趴髖部動態伸展</td><td className="px-4 py-3">2 x 8</td><td className="px-4 py-3 text-gray-600">強調髖關節深層感受</td></tr>
                  <tr className="bg-gray-50 hover:bg-gray-100"><td className="px-4 py-3 font-medium">青蛙趴單腳動態伸展</td><td className="px-4 py-3">2 x 8</td><td className="px-4 py-3 text-gray-600">雙側執行</td></tr>
                  <tr className="bg-white hover:bg-gray-50"><td className="px-4 py-3 font-medium">跪姿胸椎活動度</td><td className="px-4 py-3">2 x 8</td><td className="px-4 py-3 text-gray-600">雙側執行，旋轉範圍極大化</td></tr>
                  <tr className="bg-gray-50 hover:bg-gray-100"><td className="px-4 py-3 font-medium">最偉大伸展</td><td className="px-4 py-3">2 x 8</td><td className="px-4 py-3 text-gray-600">雙側執行，全身性喚醒</td></tr>
                  <tr className="bg-white hover:bg-gray-50"><td className="px-4 py-3 font-medium">跪姿弓箭步 (向上/左右)</td><td className="px-4 py-3">2 x 8</td><td className="px-4 py-3 text-gray-600">雙側執行，強調軀幹穩定</td></tr>
                  <tr className="bg-gray-50 hover:bg-gray-100"><td className="px-4 py-3 font-medium">肩部環繞 & 背部滾筒</td><td className="px-4 py-3">2 x 8</td><td className="px-4 py-3 text-gray-600">改善肩胛活動度</td></tr>
                  <tr className="bg-white hover:bg-gray-50"><td className="px-4 py-3 font-medium">蜘蛛人式背闊肌伸展</td><td className="px-4 py-3">2 x 5</td><td className="px-4 py-3 text-gray-600">深層延伸背部側鍊</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#16a085] mb-3">2. 肌力訓練 (暖身與主項)</h3>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-white uppercase bg-[#34495e]">
                  <tr>
                    <th className="px-4 py-3 w-1/6">類別</th>
                    <th className="px-4 py-3 w-1/3">項目</th>
                    <th className="px-4 py-3 w-1/6">量值</th>
                    <th className="px-4 py-3 w-1/3">備註/動作要求</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white hover:bg-gray-50"><td className="px-4 py-3 text-slate-500">暖身</td><td className="px-4 py-3 font-medium">跪姿撐體</td><td className="px-4 py-3">2 x 16</td><td className="px-4 py-3 text-gray-600">核心穩定</td></tr>
                  <tr className="bg-gray-50 hover:bg-gray-100"><td className="px-4 py-3 text-slate-500">暖身</td><td className="px-4 py-3 font-medium">單腳髖部摸地</td><td className="px-4 py-3">2 x 8</td><td className="px-4 py-3 text-gray-600">單腳平衡</td></tr>
                  <tr className="bg-white hover:bg-gray-50"><td className="px-4 py-3 text-slate-500">暖身</td><td className="px-4 py-3 font-medium">單腳前後左右跳</td><td className="px-4 py-3">2 x 8</td><td className="px-4 py-3 text-gray-600">建立足踝彈性與反應</td></tr>
                  <tr className="bg-gray-50 hover:bg-gray-100"><td className="px-4 py-3 font-bold text-[#2980b9]" rowSpan={5}>主項</td><td className="px-4 py-3 font-medium">基礎深蹲 + 彈力繩</td><td className="px-4 py-3">3 x 8</td><td className="px-4 py-3 text-[#e74c3c] font-bold">3秒下，1秒停（離心控制）</td></tr>
                  <tr className="bg-white hover:bg-gray-50"><td className="px-4 py-3 font-medium">伏地挺身</td><td className="px-4 py-3">3 x 8</td><td className="px-4 py-3 text-[#e74c3c] font-bold">3秒下，1秒停（離心控制）</td></tr>
                  <tr className="bg-gray-50 hover:bg-gray-100"><td className="px-4 py-3 font-medium">單腳臀橋</td><td className="px-4 py-3">3 x 8</td><td className="px-4 py-3 text-[#e74c3c] font-bold">3秒下，1秒停（單側爆發）</td></tr>
                  <tr className="bg-white hover:bg-gray-50"><td className="px-4 py-3 font-medium">俯身下拉</td><td className="px-4 py-3">3 x 8</td><td className="px-4 py-3 text-gray-600">背部肌群集中發力</td></tr>
                  <tr className="bg-gray-50 hover:bg-gray-100"><td className="px-4 py-3 font-medium">弓步地雷管肩推</td><td className="px-4 py-3">3 x 8</td><td className="px-4 py-3 text-gray-600">核心抗側彎力量</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Day 2 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#2980b9] bg-[#ecf0f1] p-3 border-l-4 border-[#2980b9] mb-6 flex items-center gap-2">
            <span className="bg-[#2980b9] text-white text-xs px-2 py-1 rounded">DAY 2</span>
            三、 第二天訓練課表：功能性力量
          </h2>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-[#16a085] mb-3 flex items-center gap-2">
              1. 活動度訓練 <span className="text-sm font-normal text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full ml-2 flex items-center gap-1"><Clock className="w-3 h-3"/> 限時 20 分鐘</span>
            </h3>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-white uppercase bg-[#34495e]">
                  <tr>
                    <th className="px-4 py-3 w-1/2">項目</th>
                    <th className="px-4 py-3 w-1/4">組數/次數</th>
                    <th className="px-4 py-3 w-1/4">執行要點</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white hover:bg-gray-50"><td className="px-4 py-3 font-medium">青蛙趴髖部動態伸展</td><td className="px-4 py-3">2 x 8</td><td className="px-4 py-3 text-gray-600">強調髖關節深層感受</td></tr>
                  <tr className="bg-gray-50 hover:bg-gray-100"><td className="px-4 py-3 font-medium">青蛙趴單腳動態伸展</td><td className="px-4 py-3">2 x 8</td><td className="px-4 py-3 text-gray-600">雙側執行</td></tr>
                  <tr className="bg-white hover:bg-gray-50"><td className="px-4 py-3 font-medium">跪姿胸椎活動度</td><td className="px-4 py-3">2 x 8</td><td className="px-4 py-3 text-gray-600">雙側執行，旋轉範圍極大化</td></tr>
                  <tr className="bg-gray-50 hover:bg-gray-100"><td className="px-4 py-3 font-medium">最偉大伸展</td><td className="px-4 py-3">2 x 8</td><td className="px-4 py-3 text-gray-600">雙側執行，全身性喚醒</td></tr>
                  <tr className="bg-white hover:bg-gray-50"><td className="px-4 py-3 font-medium">跪姿弓箭步 (向上/左右)</td><td className="px-4 py-3">2 x 8</td><td className="px-4 py-3 text-gray-600">雙側執行，強調軀幹穩定</td></tr>
                  <tr className="bg-gray-50 hover:bg-gray-100"><td className="px-4 py-3 font-medium">肩部環繞 & 背部滾筒</td><td className="px-4 py-3">2 x 8</td><td className="px-4 py-3 text-gray-600">改善肩胛活動度</td></tr>
                  <tr className="bg-white hover:bg-gray-50"><td className="px-4 py-3 font-medium">蜘蛛人式背闊肌伸展</td><td className="px-4 py-3">2 x 5</td><td className="px-4 py-3 text-gray-600">深層延伸背部側鍊</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#16a085] mb-3">2. 肌力訓練 (暖身與主項)</h3>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-white uppercase bg-[#34495e]">
                  <tr>
                    <th className="px-4 py-3 w-1/6">類別</th>
                    <th className="px-4 py-3 w-1/3">項目</th>
                    <th className="px-4 py-3 w-1/6">量值</th>
                    <th className="px-4 py-3 w-1/3">備註/動作要求</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white hover:bg-gray-50"><td className="px-4 py-3 text-slate-500">暖身</td><td className="px-4 py-3 font-medium">死蟲式 (Dead Bug)</td><td className="px-4 py-3">2 x 16</td><td className="px-4 py-3 text-gray-600">嚴格要求下背部貼地</td></tr>
                  <tr className="bg-gray-50 hover:bg-gray-100"><td className="px-4 py-3 text-slate-500">暖身</td><td className="px-4 py-3 font-medium">單腳髖部摸地</td><td className="px-4 py-3">2 x 8</td><td className="px-4 py-3 text-gray-600">單腳平衡</td></tr>
                  <tr className="bg-white hover:bg-gray-50"><td className="px-4 py-3 text-slate-500">暖身</td><td className="px-4 py-3 font-medium">單腳前後左右跳</td><td className="px-4 py-3">2 x 8</td><td className="px-4 py-3 text-gray-600">建立足踝彈性與反應</td></tr>
                  <tr className="bg-gray-50 hover:bg-gray-100"><td className="px-4 py-3 font-bold text-[#2980b9]" rowSpan={5}>主項</td><td className="px-4 py-3 font-medium">壺鈴提舉</td><td className="px-4 py-3">3 x 8</td><td className="px-4 py-3 text-gray-600">強調髖鉸鏈與背部平整</td></tr>
                  <tr className="bg-white hover:bg-gray-50"><td className="px-4 py-3 font-medium">伏地挺身</td><td className="px-4 py-3">3 x 8</td><td className="px-4 py-3 text-[#e74c3c] font-bold">3秒下，1秒停</td></tr>
                  <tr className="bg-gray-50 hover:bg-gray-100"><td className="px-4 py-3 font-medium">分腿深蹲</td><td className="px-4 py-3">3 x 8</td><td className="px-4 py-3 text-[#e74c3c] font-bold">3秒下，1秒停</td></tr>
                  <tr className="bg-white hover:bg-gray-50"><td className="px-4 py-3 font-medium">引體向上 (倒階)</td><td className="px-4 py-3">3 x 8</td><td className="px-4 py-3 text-gray-600">強調背部收縮品質</td></tr>
                  <tr className="bg-gray-50 hover:bg-gray-100"><td className="px-4 py-3 font-medium">分腿壺鈴肩推</td><td className="px-4 py-3">3 x 8</td><td className="px-4 py-3 text-gray-600">挑戰高重心下的身體平衡</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-slate-400 border-t border-slate-100 pt-6">
          <p>© 2026 體育專案計畫 - 訓練課表自動化報告</p>
        </footer>

      </div>
    </div>
  );
}
