# FAIRYAI - Client-Side AI Chatbot

WebLLM ve Mistral-7B-Instruct modeli ile çalışan tamamen client-side AI chatbot web uygulaması. FAIRYAI tamamen tarayıcıda WebGPU kullanarak çalışır, sunucu veya harici API gerektirmez.

## ✨ Özellikler

- 🤖 **Client-Side AI**: WebLLM kullanarak tamamen tarayıcıda çalışır
- 📁 **Dosya Yükleme**: .txt dosyalarını yükleyerek bağlama dayalı yanıtlar alın
- 🌙 **Karanlık Mod**: Güzel karanlık/aydınlık tema geçişi
- 📱 **Responsive Tasarım**: Masaüstü ve mobilde mükemmel çalışır
- ⚡ **Hızlı**: WebGPU ile optimize edilmiş performans
- 🔒 **Gizlilik Odaklı**: Verileriniz cihazınızdan çıkmaz

## 🚀 Canlı Demo

Uygulamayı ziyaret edin: [FAIRYAI on GitHub Pages](https://meliherdem06.github.io/FAIRYAI/)

## 🛠️ Teknoloji Stack'i

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS with dark mode
- **AI Engine**: @mlc-ai/web-llm
- **Model**: Mistral-7B-Instruct-q4f16_1
- **Deployment**: GitHub Pages

## 📋 Gereksinimler

- Node.js 18+ 
- WebGPU desteği olan modern tarayıcı (Chrome 113+, Edge 113+, Firefox Nightly)
- Git

## 🚀 Hızlı Başlangıç

### 1. Repository'yi Klonlayın

```bash
git clone https://github.com/meliherdem06/FAIRYAI.git
cd FAIRYAI
```

### 2. Bağımlılıkları Yükleyin

```bash
npm install
```

### 3. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

Uygulama `http://localhost:3000` adresinde açılacak

### 4. Production Build

```bash
npm run build
```

### 5. Production Build'i Önizleyin

```bash
npm run preview
```

## 📖 Kullanım

### Temel Sohbet
1. AI modelinin yüklenmesini bekleyin (Mistral-7B-Instruct)
2. Sohbet girişine sorunuzu yazın
3. Enter'a basın veya gönder butonuna tıklayın
4. AI yanıtını görün

### Bağlama Dayalı Sohbet
1. Dosya yükleme alanını kullanarak .txt dosyası yükleyin
2. Dosya içeriği bağlam olarak yüklenecek
3. Yüklenen içerik hakkında sorular sorun
4. FAIRYAI dosya bağlamına dayalı yanıtlar verecek

### Karanlık Mod
- Karanlık modu açıp kapatmak için header'daki güneş/ay ikonuna tıklayın
- Tercihiniz otomatik olarak kaydedilir

## 🏗️ Proje Yapısı

```
FAIRYAI/
├── src/
│   ├── components/
│   │   ├── ChatInterface.tsx    # Ana sohbet bileşeni
│   │   ├── FileUpload.tsx       # Dosya yükleme bileşeni
│   │   └── Header.tsx           # Karanlık mod toggle'ı ile header
│   ├── types.ts                 # TypeScript tip tanımları
│   ├── App.tsx                  # Ana uygulama bileşeni
│   ├── main.tsx                 # React giriş noktası
│   └── index.css                # TailwindCSS ile global stiller
├── public/                      # Statik dosyalar
├── package.json                 # Bağımlılıklar ve scriptler
├── vite.config.ts              # Vite konfigürasyonu
├── tailwind.config.js          # TailwindCSS konfigürasyonu
├── tsconfig.json               # TypeScript konfigürasyonu
└── README.md                   # Bu dosya
```

## 🚀 Deployment

### GitHub Pages (Otomatik)

Proje GitHub Pages'e otomatik deployment için yapılandırılmıştır:

1. Kodunuzu main branch'e push edin
2. Deployment scriptini çalıştırın:
   ```bash
   npm run deploy
   ```
3. Uygulama `https://meliherdem06.github.io/FAIRYAI/` adresine deploy edilecek

### Manuel Deployment

1. Projeyi build edin:
   ```bash
   npm run build
   ```
2. `dist` klasörünü web sunucunuza deploy edin

## 🔧 Konfigürasyon

### Vite Konfigürasyonu
`vite.config.ts` dosyası şunlarla yapılandırılmıştır:
- React plugin
- GitHub Pages için base path (`/FAIRYAI/`)
- Geliştirme sunucusu ayarları

### TailwindCSS Konfigürasyonu
`tailwind.config.js` şunları içerir:
- Karanlık mod desteği
- Özel renk paleti
- Responsive tasarım yardımcıları

## 🤝 Katkıda Bulunma

1. Repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'e push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📝 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır - detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🙏 Teşekkürler

- [MLC-LLM](https://github.com/mlc-ai/mlc-llm) WebLLM framework'ü için
- [Mistral AI](https://mistral.ai/) Mistral-7B-Instruct modeli için
- [Vite](https://vitejs.dev/) hızlı build tool için
- [TailwindCSS](https://tailwindcss.com/) utility-first CSS framework'ü için

## 🐛 Sorun Giderme

### Model Yükleme Sorunları
- Tarayıcınızın WebGPU desteği olduğundan emin olun
- Yeterli belleğiniz olduğunu kontrol edin (4GB+ önerilir)
- Model yüklenemezse sayfayı yenilemeyi deneyin

### Performans Sorunları
- Belleği boşaltmak için diğer tarayıcı sekmelerini kapatın
- WebGPU desteği olan modern bir tarayıcı kullanın
- Ayrı grafik kartı olan bir cihaz kullanmayı düşünün

### Dosya Yükleme Sorunları
- Dosyanın .txt formatında olduğundan emin olun
- Dosya boyutunun makul olduğunu kontrol edin (< 10MB önerilir)
- Yükleme başarısız olursa sayfayı yenilemeyi deneyin

## 📞 Destek

Sorunlarla karşılaşırsanız veya sorularınız varsa:
1. Yukarıdaki sorun giderme bölümünü kontrol edin
2. GitHub'da mevcut sorunları arayın
3. Detaylı bilgi ile yeni bir sorun oluşturun

---

React, TypeScript ve WebLLM ile ❤️ ile yapıldı 