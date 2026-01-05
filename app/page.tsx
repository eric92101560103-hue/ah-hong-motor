"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Wrench, Menu, Droplet, Gauge, Zap, Shield, Clock, Phone, Mail, MapPin, CheckCircle2, Calendar } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter, // 如果有的話
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea" // 如果沒裝這個，用 Input 也可以
// 定義 LINE 的 SVG 圖標組件
const LineIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
  >

  </svg>
)
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-slate-950/80">
        <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="flex items-center gap-3 group cursor-pointer">
          {/* 1. 發光的 Logo 圖標 */}
          <div className="relative flex h-9 w-9 items-center justify-center rounded bg-gradient-to-br from-[#E60012] to-[#80000a] shadow-[0_0_15px_rgba(230,0,18,0.6)] transform transition-transform group-hover:scale-110 duration-300">
            <Wrench className="h-5 w-5 text-white" />
            {/* 金屬光澤特效 */}
            <div className="absolute inset-0 rounded bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          
          {/* 2. 雙層文字設計 */}
          <div className="flex flex-col">
            <span className="text-xl font-black italic tracking-tighter text-white leading-none">
              AH-HONG <span className="text-[#E60012]">MOTOR</span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 group-hover:text-white transition-colors leading-none mt-1">
              PROFESSIONAL
            </span>
          </div>
        </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            <a href="#services" className="text-sm text-slate-300 transition-colors hover:text-white">
              服務項目
            </a>
            <a href="#pricing" className="text-sm text-slate-300 transition-colors hover:text-white">
              價格方案
            </a>
            <a href="#faq" className="text-sm text-slate-300 transition-colors hover:text-white">
              常見問題
            </a>
            <a href="#contact" className="text-sm text-slate-300 transition-colors hover:text-white">
              聯絡我們
            </a>
            
            <div className="hidden md:block">
              <Dialog>
                {/* 1. 替換掉原本的 emoji，換成 LineIcon */}
                <DialogTrigger asChild>
                  <Button className="bg-[#06C755] hover:bg-[#05a546] text-white font-bold px-6 shadow-[0_0_15px_rgba(6,199,85,0.4)] transition-all hover:-translate-y-0.5">
                    LINE 諮詢
                  </Button>
                </DialogTrigger>
                
                <DialogContent className="sm:max-w-[350px] bg-slate-900 border-slate-700 text-white text-center">
                  <DialogHeader>
                    <DialogTitle className="text-xl text-[#06C755] flex items-center justify-center gap-2">
                      <LineIcon className="h-6 w-6" /> {/* 標題也加上圖標 */}
                      加入官方 LINE 好友
                    </DialogTitle>
                    <DialogDescription className="text-slate-400">
                      拍照回傳車況，線上估價最快速！
                    </DialogDescription>
                  </DialogHeader>
                  
                  {/* QR Code 區域 */}
                  <div className="flex flex-col items-center justify-center py-6 gap-4">
                    <div className="w-48 h-48 bg-white p-2 rounded-xl flex items-center justify-center relative overflow-hidden">
                      {/* 這裡我們放一張假的 QR Code 示意圖，如果你有真的圖片可以換掉 src */}
                      <img 
                        src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://line.me/ti/p/@ah-hong-motor" 
                        alt="LINE QR Code" 
                        className="w-full h-full"
                      />
                    </div>
                    <p className="text-sm text-slate-300">ID: @ah-hong-motor</p>
                  </div>

                  {/* 2. 設定跳轉連結 */}
                  <div className="flex justify-center">
                    {/* href 裡面放的就是 LINE 的加入好友連結 */}
                    {/* target="_blank" 代表開新分頁，避免使用者跳離你的網站 */}
                    <Button asChild className="w-full bg-[#06C755] hover:bg-[#05a546] text-white">
                      <a href="https://line.me/ti/p/hash3171717" target="_blank" rel="noopener noreferrer">
                        點擊直接加入
                      </a>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-slate-800 bg-slate-950/95 backdrop-blur-xl text-white">
            {/* 標題區域 (可選) */}
            <div className="mt-8 mb-8 text-center">
              <h2 className="text-2xl font-bold text-[#E60012]">AH-HONG MOTOR</h2>
              <p className="text-sm text-slate-400">專業維修・道路救援</p>
            </div>

            {/* 連結區域：置中對齊，手指比較好點 */}
            <div className="flex flex-col gap-6 items-center">
              <a href="#services" className="text-xl font-medium text-slate-300 hover:text-[#E60012] transition-colors">
                服務項目
              </a>
              <a href="#pricing" className="text-xl font-medium text-slate-300 hover:text-[#E60012] transition-colors">
                價格方案
              </a>
              <a href="#faq" className="text-xl font-medium text-slate-300 hover:text-[#E60012] transition-colors">
                常見問題
              </a>
              <a href="#contact" className="text-xl font-medium text-slate-300 hover:text-[#E60012] transition-colors">
                聯絡我們
              </a>
            </div>
            
            {/* 底部裝飾 (可選) */}
            <div className="absolute bottom-8 left-0 right-0 text-center text-xs text-slate-600">
              © 2025 Ah-Hong Motor
            </div>
          </SheetContent>
          </Sheet>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0"> {/* 加了 z-0 確保在最底層 */}
          {/* 1. 底層真圖片 */}
          <img
            src="/hero-bg.jpg" // 這裡對應你剛剛放入 public 的檔名
            alt="阿宏機車行維修實景"
            // object-cover 保證圖片填滿不變形
            className="h-full w-full object-cover"
          />
          {/* 2. 上層黑色強力遮罩 (Overlay) */}
          {/* bg-slate-950/85 代表深黑色帶 85% 不透明度。覺得太暗改成 /70，太亮改成 /90 */}
          <div className="absolute inset-0 bg-slate-950/85 mix-blend-multiply" />
        </div>
        <div className="relative container mx-auto px-4 py-32 md:py-48">
          <div className="max-w-3xl">
            <h1 className="text-balance text-5xl font-bold leading-tight text-white md:text-7xl">
              專業機車維修
              <span className="text-[#E60012]">值得信賴</span>
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-300 md:text-xl">
              超過20年經驗，專業技師團隊為您的愛車提供最優質的保養與維修服務。我們使用原廠零件，確保您的機車性能與安全。
            </p>
             {/* --- 混合按鈕區塊開始 --- */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  
                  {/* 🅰️ 手機版專用：直接打電話 (只在 md 以下顯示) */}
                  <a href="tel:0912345678" className="md:hidden w-full">
                    <Button size="lg" className="w-full bg-gradient-to-r from-[#E60012] to-[#ff4d4d] hover:from-[#cc0010] hover:to-[#e60012] text-white text-lg font-bold shadow-[0_0_20px_rgba(230,0,18,0.5)] border-0">
                      <Phone className="mr-2 h-5 w-5 animate-pulse" />
                      緊急道路救援
                    </Button>
                  </a>

                  {/* 🅱️ 電腦版專用：高級預約彈窗 (只在 md 以上顯示) */}
                  <div className="hidden md:block">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 text-lg font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all border border-slate-200">
                          <Calendar className="mr-2 h-5 w-5 text-[#E60012]" />
                          線上預約維修
                        </Button>
                      </DialogTrigger>

                      {/* 這是彈出來的高級視窗內容 */}
                      <DialogContent className="sm:max-w-[500px] bg-slate-950/95 backdrop-blur-xl text-white border-slate-800 shadow-2xl">
                        <DialogHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="p-2 bg-[#E60012]/10 rounded-lg">
                              <Wrench className="h-6 w-6 text-[#E60012]" />
                            </div>
                            <DialogTitle className="text-2xl font-bold">預約維修服務</DialogTitle>
                          </div>
                          <DialogDescription className="text-slate-400 text-base">
                            請留下您的愛車狀況，我們會將資訊同步發送給老闆，並安排專人回覆。
                          </DialogDescription>
                        </DialogHeader>

                        {/* 表單區域 */}
                        <div className="grid gap-6 py-6">
                          <div className="grid gap-2">
                            <Label htmlFor="name" className="text-slate-300">您的稱呼</Label>
                            <Input id="name" className="bg-slate-900 border-slate-700 focus:border-[#E60012] h-12" placeholder="王先生/小姐" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="phone" className="text-slate-300">聯絡電話</Label>
                            <Input id="phone" className="bg-slate-900 border-slate-700 focus:border-[#E60012] h-12" placeholder="0912-345-678" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="note" className="text-slate-300">車況描述 / 備註</Label>
                            <Textarea id="note" className="bg-slate-900 border-slate-700 focus:border-[#E60012] min-h-[100px]" placeholder="例如：車子發不動、想要換好一點的機油..." />
                          </div>
                        </div>

                        {/* 底部按鈕 */}
                        <div className="flex justify-end gap-3">
                          <Button variant="ghost" className="text-slate-400 hover:text-white hover:bg-slate-800">
                            取消
                          </Button>
                          <Button type="submit" className="bg-[#E60012] hover:bg-[#cc0010] text-white px-8">
                            確認送出
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                <a href="#services" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 rounded-full text-lg">
                    查看服務項目
                  </Button>
                </a>
                </div>
                {/* --- 混合按鈕區塊結束 --- */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="border-t border-slate-800 bg-slate-900/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-balance text-4xl font-bold text-white md:text-5xl">專業服務項目</h2>
            <p className="mt-4 text-pretty text-lg text-slate-400">提供全方位的機車保養與維修服務</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-slate-800 bg-slate-950 transition-all hover:border-[#E60012]/50 hover:shadow-lg hover:shadow-[#E60012]/10">
              <CardHeader>
                <Droplet className="mb-4 h-12 w-12 text-[#E60012]" />
                <CardTitle className="text-white">機油更換</CardTitle>
                <CardDescription className="text-slate-400">使用優質機油，定期保養延長引擎壽命</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#E60012]" />
                    原廠認證機油
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#E60012]" />
                    免費機油濾芯檢查
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#E60012]" />
                    快速服務30分鐘完成
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-800 bg-slate-950 transition-all hover:border-[#E60012]/50 hover:shadow-lg hover:shadow-[#E60012]/10">
              <CardHeader>
                <Gauge className="mb-4 h-12 w-12 text-[#E60012]" />
                <CardTitle className="text-white">煞車系統</CardTitle>
                <CardDescription className="text-slate-400">確保行車安全，專業煞車檢修服務</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#E60012]" />
                    來令片更換
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#E60012]" />
                    碟盤研磨
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#E60012]" />
                    油壓系統檢測
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-800 bg-slate-950 transition-all hover:border-[#E60012]/50 hover:shadow-lg hover:shadow-[#E60012]/10">
              <CardHeader>
                <Zap className="mb-4 h-12 w-12 text-[#E60012]" />
                <CardTitle className="text-white">電系維修</CardTitle>
                <CardDescription className="text-slate-400">電路故障排除，電瓶更換與檢測</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#E60012]" />
                    電瓶健康檢查
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#E60012]" />
                    燈具系統維修
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#E60012]" />
                    啟動系統檢修
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-800 bg-slate-950 transition-all hover:border-[#E60012]/50 hover:shadow-lg hover:shadow-[#E60012]/10">
              <CardHeader>
                <Shield className="mb-4 h-12 w-12 text-[#E60012]" />
                <CardTitle className="text-white">定期保養</CardTitle>
                <CardDescription className="text-slate-400">完整的保養套餐，讓愛車常保最佳狀態</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#E60012]" />
                    全車安全檢查
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#E60012]" />
                    傳動系統保養
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#E60012]" />
                    輪胎氣壓調整
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-800 bg-slate-950 transition-all hover:border-[#E60012]/50 hover:shadow-lg hover:shadow-[#E60012]/10">
              <CardHeader>
                <Clock className="mb-4 h-12 w-12 text-[#E60012]" />
                <CardTitle className="text-white">快速維修</CardTitle>
                <CardDescription className="text-slate-400">小問題立即處理，不耽誤您的時間</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#E60012]" />
                    輪胎補胎
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#E60012]" />
                    鍊條調整
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#E60012]" />
                    燈泡更換
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-800 bg-slate-950 transition-all hover:border-[#E60012]/50 hover:shadow-lg hover:shadow-[#E60012]/10">
              <CardHeader>
                <Wrench className="mb-4 h-12 w-12 text-[#E60012]" />
                <CardTitle className="text-white">引擎維修</CardTitle>
                <CardDescription className="text-slate-400">專業引擎診斷與維修服務</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#E60012]" />
                    引擎異音檢測
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#E60012]" />
                    汽缸維修
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#E60012]" />
                    引擎大修
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="border-t border-slate-800 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-balance text-4xl font-bold text-white md:text-5xl">透明收費標準</h2>
            <p className="mt-4 text-pretty text-lg text-slate-400">明碼標價，絕不亂收費</p>
          </div>
          <div className="mx-auto max-w-3xl">
            <Card className="border-slate-800 bg-slate-950">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div>
                      <h3 className="font-semibold text-white">機油更換（含工資）</h3>
                      <p className="text-sm text-slate-400">適用一般125cc機車</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#E60012]">NT$ 350</div>
                      <div className="text-sm text-slate-400">起</div>
                    </div>
                  </div>
                  <Separator className="bg-slate-800" />
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div>
                      <h3 className="font-semibold text-white">煞車來令片更換</h3>
                      <p className="text-sm text-slate-400">前輪或後輪單邊</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#E60012]">NT$ 600</div>
                      <div className="text-sm text-slate-400">起</div>
                    </div>
                  </div>
                  <Separator className="bg-slate-800" />
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div>
                      <h3 className="font-semibold text-white">輪胎更換</h3>
                      <p className="text-sm text-slate-400">含拆裝、平衡、氣嘴</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#E60012]">NT$ 1,200</div>
                      <div className="text-sm text-slate-400">起</div>
                    </div>
                  </div>
                  <Separator className="bg-slate-800" />
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div>
                      <h3 className="font-semibold text-white">電瓶更換</h3>
                      <p className="text-sm text-slate-400">含安裝與舊電瓶回收</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#E60012]">NT$ 800</div>
                      <div className="text-sm text-slate-400">起</div>
                    </div>
                  </div>
                  <Separator className="bg-slate-800" />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-white">定期保養套餐</h3>
                      <p className="text-sm text-slate-400">包含機油、火星塞、空濾、全車檢查</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#E60012]">NT$ 1,500</div>
                      <div className="text-sm text-slate-400">起</div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 rounded-lg bg-slate-900 p-6">
                  <p className="text-sm text-slate-300">
                    <span className="font-semibold text-white">注意事項：</span>{" "}
                    以上價格僅供參考，實際費用依車種與零件而定。我們使用原廠或優質副廠零件，保證品質。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="border-t border-slate-800 bg-slate-900/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-balance text-4xl font-bold text-white md:text-5xl">常見問題</h2>
            <p className="mt-4 text-pretty text-lg text-slate-400">關於機車保養維修的常見疑問</p>
          </div>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-slate-800 bg-slate-950 px-6 rounded-lg">
                <AccordionTrigger className="text-left text-white hover:text-[#E60012] hover:no-underline">
                  機油多久需要更換一次？
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  一般建議每1000-1500公里或每3個月更換一次機油，視您的騎乘習慣而定。經常在市區走走停停的騎士，建議縮短更換週期。定期更換機油可以延長引擎壽命，保持最佳性能。
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-slate-800 bg-slate-950 px-6 rounded-lg">
                <AccordionTrigger className="text-left text-white hover:text-[#E60012] hover:no-underline">
                  煞車系統何時需要檢查？
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  當您感覺煞車力道變弱、聽到異音、或煞車把手行程變長時，就應該立即檢查。我們建議每5000公里進行一次煞車系統檢查，確保行車安全。定期檢查可以提早發現問題，避免更大的維修費用。
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-slate-800 bg-slate-950 px-6 rounded-lg">
                <AccordionTrigger className="text-left text-white hover:text-[#E60012] hover:no-underline">
                  維修需要預約嗎？
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  我們接受現場維修，但建議您事先預約以節省等待時間。預約客戶可享優先服務，特別是在假日或尖峰時段。您可以透過電話或LINE預約，我們會為您安排最適合的時間。
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-slate-800 bg-slate-950 px-6 rounded-lg">
                <AccordionTrigger className="text-left text-white hover:text-[#E60012] hover:no-underline">
                  你們使用什麼品牌的零件？
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  我們優先使用原廠零件，確保品質與車輛的完美配合。對於預算有限的客戶，我們也提供經過認證的優質副廠零件選擇。所有零件都提供保固，讓您安心使用。
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-slate-800 bg-slate-950 px-6 rounded-lg">
                <AccordionTrigger className="text-left text-white hover:text-[#E60012] hover:no-underline">
                  維修完成後有保固嗎？
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  是的！我們提供工資與零件保固。一般維修項目提供1個月或500公里保固（以先到者為準）。大型維修如引擎大修則提供3個月保固。保固期間若有任何問題，我們將免費為您處理。
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-slate-800 bg-slate-950 px-6 rounded-lg">
                <AccordionTrigger className="text-left text-white hover:text-[#E60012] hover:no-underline">
                  可以只檢查不維修嗎？
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  當然可以！我們提供免費的基本檢查服務。如果需要更詳細的診斷（如電腦檢測），可能會酌收檢測費用。檢查後我們會詳細說明車況，讓您自行決定是否進行維修，絕不強迫推銷。
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-slate-800 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-balance text-4xl font-bold text-white md:text-5xl">聯絡我們</h2>
            <p className="mt-4 text-pretty text-lg text-slate-400">歡迎來店或來電預約</p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            <Card className="border-slate-800 bg-slate-950">
              <CardContent className="flex flex-col items-center p-8 text-center">
                <div className="mb-4 rounded-full bg-[#E60012]/10 p-4">
                  <Phone className="h-8 w-8 text-[#E60012]" />
                </div>
                <h3 className="mb-2 font-semibold text-white">電話預約</h3>
                <p className="text-sm text-slate-400 mb-2">服務專線</p>
                <a href="tel:0912345678" className="text-lg font-semibold text-[#E60012] hover:underline">
                  0912-345-678
                </a>
              </CardContent>
            </Card>

            <Card className="border-slate-800 bg-slate-950">
              <CardContent className="flex flex-col items-center p-8 text-center">
                <div className="mb-4 rounded-full bg-[#E60012]/10 p-4">
                  <Mail className="h-8 w-8 text-[#E60012]" />
                </div>
                <h3 className="mb-2 font-semibold text-white">電子郵件</h3>
                <p className="text-sm text-slate-400 mb-2">聯絡信箱</p>
                <a href="mailto:info@ahhongmotor.com" className="text-lg font-semibold text-[#E60012] hover:underline">
                  info@ahhongmotor.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-slate-800 bg-slate-950">
              <CardContent className="flex flex-col items-center p-8 text-center">
                <div className="mb-4 rounded-full bg-[#E60012]/10 p-4">
                  <MapPin className="h-8 w-8 text-[#E60012]" />
                </div>
                <h3 className="mb-2 font-semibold text-white">店面位置</h3>
                <p className="text-sm text-slate-400 mb-2">營業時間：09:00-20:00</p>
                <p className="text-slate-300">
                  台北市中山區
                  <br />
                  中山北路一段123號
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Wrench className="h-6 w-6 text-[#E60012]" />
                <span className="text-xl font-bold text-white">阿宏機車行</span>
              </div>
              <p className="text-sm text-slate-400">
                專業機車維修保養
                <br />
                值得您信賴的好夥伴
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">快速連結</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#services" className="transition-colors hover:text-white">
                    服務項目
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="transition-colors hover:text-white">
                    價格方案
                  </a>
                </li>
                <li>
                  <a href="#faq" className="transition-colors hover:text-white">
                    常見問題
                  </a>
                </li>
                <li>
                  <a href="#contact" className="transition-colors hover:text-white">
                    聯絡我們
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">服務時間</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>週一至週六</li>
                <li>09:00 - 20:00</li>
                <li className="text-[#E60012]">週日公休</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">聯絡資訊</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>電話：0912-345-678</li>
                <li>信箱：info@ahhongmotor.com</li>
                <li>地址：台北市中山區中山北路一段123號</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-slate-800" />
          <div className="text-center text-sm text-slate-400">
            <p>&copy; 2026 阿宏機車行 Ah-Hong Motor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
