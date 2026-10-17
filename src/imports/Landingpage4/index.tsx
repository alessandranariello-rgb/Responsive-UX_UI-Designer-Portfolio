import svgPaths from "./svg-bg6ltqbr7j";
import imgRectangle3 from "./55ea635161d4bd8295b3fa80fda14a0bfcbf258b.png";
import imgFrame17 from "./0e88c4696dd63c50626a55de555e5ae64a384e09.png";
import imgRectangle11 from "./153d6453c7901b44ebd22fe3b2f18efe6486ee23.png";
import imgHero from "./dc313f565e9b3f2ede996fde28af912a0a09f6df.png";
import imgFrame37 from "./eaec909f0def20cbf4a3bebdfd4b9781c94b57e1.png";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[32px] text-black w-full whitespace-pre-wrap">
        L’alba è scomparsa e il mondo è sospeso tra luce e ombra.
        <br aria-hidden />
        {` Auriel, un’eroina divina reincarnata, intraprende un viaggio per ristabilire l’equilibrio perduto.`}
        <br aria-hidden />
        {` Ogni scelta influenzerà il suo destino e il futuro del mondo.`}
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[rgba(217,217,217,0.65)] content-stretch flex h-[100px] items-center justify-center px-[71px] py-[30px] relative rounded-[20px] shrink-0 w-[350px]">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[32px] text-black whitespace-nowrap">Guarda ora</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-end relative shrink-0 w-[680px]">
      <Frame1 />
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[70px] items-start left-[65px] top-[811px] w-[1309px]">
      <div className="h-[520px] relative shrink-0 w-[540px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle3} />
      </div>
      <Frame2 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex gap-[11px] h-[191px] items-center pb-[25px] pt-[37px] px-[14px] relative rounded-[20px] shrink-0 w-[400px]">
      <div className="h-[129px] relative shrink-0 w-[100px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="129" preserveAspectRatio="none" viewBox="0 0 100 129" width="100">
          <path clipRule="evenodd" d={svgPaths.p3c533200} fill="black" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[34px] text-black w-[261px]">Combattimento dinamico</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex gap-[26px] h-[191px] items-center pb-[40px] pt-[41px] px-[28px] relative rounded-[20px] shrink-0 w-[400px]">
      <div className="relative shrink-0 size-[110px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="110" preserveAspectRatio="none" viewBox="0 0 110 110" width="110">
          <path d={svgPaths.p2ae8b680} fill="black" id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[34px] text-black whitespace-nowrap">Scelte morali</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex gap-[12px] h-[191px] items-center pb-[42px] pt-[49px] px-[14px] relative rounded-[20px] shrink-0 w-[400px]">
      <div className="relative shrink-0 size-[100px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="100" preserveAspectRatio="none" viewBox="0 0 100 100" width="100">
          <path clipRule="evenodd" d={svgPaths.p27a91580} fill="black" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[34px] text-black w-[260px]">{`Grafica cinematografica `}</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex gap-[50px] items-center left-[70px] top-[4278px]">
      <Frame11 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function MdiSteam() {
  return (
    <div className="relative shrink-0 size-[200px]" data-name="mdi--steam 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="200" preserveAspectRatio="none" viewBox="0 0 200 200" width="200">
        <g id="mdi--steam 1">
          <path d={svgPaths.p372c5a80} fill="white" fillOpacity="0.55" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RiPlaystationFill() {
  return (
    <div className="relative shrink-0 size-[200px]" data-name="ri--playstation-fill 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="200" preserveAspectRatio="none" viewBox="0 0 200 200" width="200">
        <g id="ri--playstation-fill 1">
          <path d={svgPaths.p1ec56e80} fill="white" fillOpacity="0.55" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SimpleIconsPlaystation() {
  return (
    <div className="relative shrink-0 size-[200px]" data-name="simple-icons--playstation4 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="200" preserveAspectRatio="none" viewBox="0 0 200 200" width="200">
        <g id="simple-icons--playstation4 1">
          <path d={svgPaths.p11cc4e80} fill="white" fillOpacity="0.55" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
      <RiPlaystationFill />
      <SimpleIconsPlaystation />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0_0_-0.02%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="200.04" preserveAspectRatio="none" viewBox="0 0 200.002 200.04" width="200.002">
        <g id="Group">
          <path d={svgPaths.pbef9500} fill="white" fillOpacity="0.55" id="Vector" />
          <path d={svgPaths.p5eff1f0} fill="white" fillOpacity="0.55" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function BiNintendoSwitch() {
  return (
    <div className="overflow-clip relative shrink-0 size-[200px]" data-name="bi--nintendo-switch 1">
      <Group />
    </div>
  );
}

function RiXboxFill() {
  return (
    <div className="relative shrink-0 size-[200px]" data-name="ri--xbox-fill 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="200" preserveAspectRatio="none" viewBox="0 0 200 200" width="200">
        <g id="ri--xbox-fill 1">
          <path d={svgPaths.p33a43880} fill="white" fillOpacity="0.55" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-start flex flex-wrap gap-[70px_473px] items-start relative shrink-0 w-full">
      <MdiSteam />
      <Frame6 />
      <BiNintendoSwitch />
      <RiXboxFill />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[rgba(217,217,217,0.65)] content-stretch flex h-[100px] items-center justify-center px-[71px] py-[30px] relative rounded-[20px] shrink-0 w-[350px]">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[32px] text-black whitespace-nowrap">Preordina ora</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[46px] items-end justify-end relative shrink-0 w-[1225px]">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[59px] h-[835px] items-end justify-end left-0 pb-[36px] pl-[38px] pr-[36px] pt-[66px] top-[4709px] w-[1440px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame17} />
      <Frame9 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[70px] not-italic text-[48px] text-[rgba(217,217,217,0.65)] top-[56px] w-[920px]">L’alba non è ancora perduta.</p>
    </div>
  );
}

function GgFacebook() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="gg--facebook 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 40 40" width="40">
        <g id="gg--facebook 1">
          <path d={svgPaths.p3e01df00} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IcBaselineDiscord() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="ic--baseline-discord 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 40 40" width="40">
        <g id="ic--baseline-discord 1">
          <path d={svgPaths.pe69300} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiYoutube() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="mdi--youtube 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 40 40" width="40">
        <g id="mdi--youtube 1">
          <path d={svgPaths.p1fc32680} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiInstagram() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="mdi--instagram 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 40 40" width="40">
        <g id="mdi--instagram 1">
          <path d={svgPaths.p2374ac00} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CodiconTwitter() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="codicon--twitter 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 40 40" width="40">
        <g id="codicon--twitter 1">
          <path d={svgPaths.p23da9900} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
      <GgFacebook />
      <IcBaselineDiscord />
      <MdiYoutube />
      <MdiInstagram />
      <CodiconTwitter />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bg-[#d9d9d9] content-stretch flex flex-col gap-[80px] h-[787px] items-center left-0 pb-[32px] pt-[56px] px-[241px] top-[5698px] w-[1440px]">
      <div className="h-[338px] relative rounded-[10px] shrink-0 w-[326px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-full left-[-14.59%] max-w-none top-0 w-[133.21%]" src={imgRectangle11} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[34px] text-black whitespace-nowrap">An epic fantasy adventure where light and darkness collide.</p>
      <Frame15 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[32px] text-black whitespace-nowrap">© 2026 Tears of Dawn. All rights reserved.</p>
    </div>
  );
}

function GgFacebook1() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="gg--facebook 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="60" preserveAspectRatio="none" viewBox="0 0 60 60" width="60">
        <g id="gg--facebook 1">
          <path d={svgPaths.p2c67c700} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiYoutube1() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="mdi--youtube 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="60" preserveAspectRatio="none" viewBox="0 0 60 60" width="60">
        <g id="mdi--youtube 1">
          <path d={svgPaths.p344b1cf0} fill="white" fillOpacity="0.72" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiInstagram1() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="mdi--instagram 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="60" preserveAspectRatio="none" viewBox="0 0 60 60" width="60">
        <g id="mdi--instagram 1">
          <path d={svgPaths.pb30ac80} fill="white" fillOpacity="0.72" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[13px] h-[90px] items-center px-[10px] relative shrink-0 w-[222px]">
      <GgFacebook1 />
      <MdiYoutube1 />
      <MdiInstagram1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[rgba(217,217,217,0.65)] content-stretch flex h-[100px] items-center justify-center px-[71px] py-[30px] relative rounded-[20px] shrink-0 w-[350px]">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[32px] text-black whitespace-nowrap">Aggiungi alla wishlist</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[165px] items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] leading-[normal] not-italic relative shrink-0 text-[128px] text-[rgba(255,255,255,0.72)] text-center w-full">Tears of Dawn</p>
      <Frame25 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[108px] items-start relative shrink-0 w-[1336px]">
      <div className="relative rounded-[10px] shrink-0 size-[150px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle11} />
      </div>
      <Frame26 />
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute content-stretch flex flex-col h-[763px] items-start left-0 pb-[52px] pt-[60px] px-[52px] top-0 w-[1440px]" data-name="hero">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[170.47%] left-0 max-w-none top-[-40.69%] w-full" src={imgHero} />
      </div>
      <Frame27 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[14px] items-start leading-[normal] not-italic relative shrink-0 text-black w-[666px]">
      <p className="relative shrink-0 text-[48px] w-full">Auriel</p>
      <p className="relative shrink-0 text-[32px] w-full whitespace-pre-wrap">
        Un’eroina divina reincarnata, legata al destino dell’alba perduta.
        <br aria-hidden />
        {` Le sue scelte determineranno il futuro del mondo.`}
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full">
      <div className="bg-[#d9d9d9] relative shrink-0 size-[400px]" />
      <Frame17 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[14px] items-start leading-[normal] not-italic relative shrink-0 text-black w-[666px]">
      <p className="relative shrink-0 text-[48px] w-full">Elyon</p>
      <p className="relative shrink-0 text-[32px] w-full">Custode dei segreti dell’alba, guida Auriel nel suo cammino tra verità e sacrificio.</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[72px] items-start relative shrink-0 w-full">
      <Frame19 />
      <div className="relative shrink-0 size-[400px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="400" preserveAspectRatio="none" viewBox="0 0 400 400" width="400">
          <path d="M0 0H400V400H0V0Z" fill="#D9D9D9" id="Rectangle 9" />
        </svg>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[14px] items-start leading-[normal] not-italic relative shrink-0 text-black w-[666px]">
      <p className="relative shrink-0 text-[48px] w-full">{` Nocthar`}</p>
      <p className="relative shrink-0 text-[32px] w-full">Incarnazione dell’ombra, minaccia l’equilibrio e mette alla prova la luce di Auriel.</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full">
      <div className="bg-[#d9d9d9] relative shrink-0 size-[400px]" />
      <Frame20 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[160px] items-start left-[141px] p-[10px] top-[2637px]">
      <Frame18 />
      <Frame22 />
      <Frame21 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[488px] h-[1120px] items-end justify-end left-0 pb-[153px] pl-[22px] pr-[32px] pt-[67px] top-[1412px] w-[1440px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame37} />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal h-[329px] leading-[normal] not-italic relative shrink-0 text-[36px] text-[rgba(0,0,0,0.75)] w-[659px]">Quando il velo tra luce e oscurità si spezza, antichi poteri si risvegliano e il mondo muta. In Tears of Dawn, le stelle cadute segnano il cammino, le foreste respirano storie dimenticate e ogni cuore coraggioso è chiamato a forgiare il proprio destino. Addentrati nell’ignoto e lascia che le tue imprese riverberino oltre il tempo.</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[83px] leading-[60px] left-[582px] not-italic text-[64px] text-[rgba(0,0,0,0.54)] text-center top-[42px] w-[1164px]">Un mondo sospeso tra luce e ombra</p>
    </div>
  );
}

export default function Landingpage() {
  return (
    <div className="bg-white mix-blend-luminosity relative size-full" data-name="landingpage4">
      <Frame3 />
      <Frame14 />
      <Frame10 />
      <Frame16 />
      <Hero />
      <Frame23 />
      <Frame24 />
    </div>
  );
}