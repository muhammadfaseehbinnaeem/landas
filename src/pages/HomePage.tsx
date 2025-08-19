import { useAuthStore } from "@/stores/authStore";
import BasicButton from "@/shared/components/atoms/BasicButton";

// Import images
import heroImg from "@/assets/carousel.jpg";
import productImg1 from "@/assets/product1.png";
import productImg2 from "@/assets/product2.png";
import productImg3 from "@/assets/product3.png";
import productImg4 from "@/assets/product4.png";
import highlightedProductImg from "@/assets/highlighted-product.jpg";

const mockCards = [
  { id: 1, title: "경량 패딩", price: "₩89,000", img: productImg1 },
  { id: 2, title: "윈드브레이커", price: "₩64,000", img: productImg2 },
  { id: 3, title: "후드 다운", price: "₩99,000", img: productImg3 },
  { id: 4, title: "라이트 자켓", price: "₩79,000", img: productImg4 },
];

export default function HomePage() {
  const userId = useAuthStore((s) => s.userId);
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      {/* Hero section with image */}
      <section className="relative aspect-[16/5] w-full rounded-xl bg-neutral-900 text-white grid place-items-center">
        <img
          src={heroImg}
          alt="Hero Banner"
          className="absolute inset-0 object-cover w-full h-full rounded-xl"
        />
        <div className="z-10 text-center p-4 md:p-8">
          <p className="text-yellow-400 font-semibold">안녕하세요, {userId} 님</p>
          <h2 className="text-2xl md:text-4xl font-bold leading-tight text-white">
            Performance-Ready Apparel for Work & Beyond
          </h2>
        </div>
      </section>

      {/* Product section */}
      <section aria-label="추천 상품" className="mt-10">
        <h3 className="font-semibold mb-4">스타일의 밸런스를 잡아 보자, 시즌 월드컵</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mockCards.map((c) => (
            <article key={c.id} className="rounded-lg border bg-white p-3">
              <div className="aspect-[4/3] rounded-md bg-neutral-100 mb-3">
                <img
                  src={c.img}
                  alt={c.title}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
              <h4 className="text-sm">{c.title}</h4>
              <p className="text-xs text-neutral-500">리뷰 ★★★★★</p>
              <div className="mt-2 font-semibold">{c.price}</div>
            </article>
          ))}
          {Array(8).fill(0).map((c, idx) => (
            <article key={idx} className="rounded-lg border bg-white p-3">
              <div className="aspect-[4/3] rounded-md bg-neutral-100 mb-3">
                <img
                  src={highlightedProductImg}
                  alt={"상품명이 노출 됩니다.상품명이 노출 됩니..."}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
              <h4 className="text-sm">상품명이 노출 됩니다.상품명이 노출 됩니...</h4>
              <p className="text-xs text-neutral-500">{"{브랜드명} 그룹코드-색상명"}</p>
              <div className="mt-2 font-semibold">000,000원</div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
