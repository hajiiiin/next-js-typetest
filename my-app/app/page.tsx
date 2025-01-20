"use client";

import { useRouter } from "next/navigation";
import { animated, useSpring } from "@react-spring/web";
import Image from "next/image";
import Head from "next/head";

export default function HomePage() {
  const router = useRouter();

  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { duration: 800 },
  });

  return (
    <>
      <Head>
        <title>명탐정 코난 캐릭터 테스트</title>
        <meta
          name="description"
          content="명탐정 코난 캐릭터 테스트를 통해 당신과 닮은 캐릭터를 찾아보세요!"
        />
      </Head>
      <animated.div
        style={fadeIn}
        className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6"
      >
        {/* 헤더 */}
        <h1 className="text-4xl font-bold text-blue-500 mb-4">
          명탐정 코난 캐릭터 테스트
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          당신은 어떤 캐릭터와 가장 닮았을까요? 지금 테스트를 시작해보세요!
        </p>

        {/* 이미지 */}
        <div className="mb-10">
          <Image
            src="/main-character.png"
            alt="코난 캐릭터"
            width={192}
            height={192}
            className="mx-auto"
          />
        </div>

        {/* 시작 버튼 */}
        <button
          onClick={() => router.push("/test")}
          className="px-8 py-4 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 active:scale-95 transition-transform duration-300"
        >
          테스트 시작하기
        </button>

        {/* 푸터 */}
        <footer className="mt-12 text-sm text-gray-500">
          Made with ❤️ by HJ
        </footer>
      </animated.div>
    </>
  );
}
