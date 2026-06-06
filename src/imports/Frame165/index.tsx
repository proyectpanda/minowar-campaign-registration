function Frame() {
  return (
    <div className="absolute left-0 top-0 w-[442px]">
      <div className="content-stretch flex items-center overflow-clip px-[24px] py-[8px] relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Barlow_Condensed:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0e] text-[18px] uppercase whitespace-nowrap">
          <p className="leading-[normal]">GANG</p>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#0d0d0e] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex font-['Roboto_Condensed:Medium',sans-serif] font-medium items-start justify-between relative shrink-0 text-[#0d0d0e] text-[18px] w-full">
      <div className="flex flex-col justify-center mr-[-26px] relative shrink-0 w-[329px]">
        <p className="leading-[24px]">Goliath</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[24px]">Adam Mobius</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="bg-[#f9f5f3] relative shrink-0 w-[442px]" data-name="Row">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start justify-center leading-[0] overflow-clip pl-[16px] pr-[24px] py-[12px] relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Barlow_Condensed:SemiBold',sans-serif] justify-center not-italic relative shrink-0 text-[#00378d] text-[24px] tracking-[1.2px] uppercase w-[732px]">
          <p className="leading-[24px]">MARUDERZY ALBIONU</p>
        </div>
        <Frame4 />
      </div>
      <div aria-hidden className="absolute border border-[#bebdbc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[54px]">
      <Row />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex font-['Roboto_Condensed:Medium',sans-serif] font-medium items-start justify-between relative shrink-0 text-[#0d0d0e] text-[18px] w-full">
      <div className="flex flex-col justify-center relative shrink-0 w-[329px]">
        <p className="leading-[24px]">Orlock</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[24px]">Papayu</p>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="bg-[#f9f5f3] relative shrink-0 w-[442px]" data-name="Row">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start justify-center leading-[0] overflow-clip pl-[16px] pr-[24px] py-[12px] relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Barlow_Condensed:SemiBold',sans-serif] justify-center not-italic relative shrink-0 text-[#00378d] text-[24px] tracking-[1.2px] uppercase w-[732px]">
          <p className="leading-[24px]">IRON MONKERS</p>
        </div>
        <Frame6 />
      </div>
      <div aria-hidden className="absolute border border-[#bebdbc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[150px]">
      <Row1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex font-['Roboto_Condensed:Medium',sans-serif] font-medium items-start justify-between relative shrink-0 text-[#0d0d0e] text-[18px] w-full">
      <div className="flex flex-col justify-center relative shrink-0 w-[329px]">
        <p className="leading-[24px]">Outcasts</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[24px]">Golzak</p>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="bg-[#f9f5f3] relative shrink-0 w-[442px]" data-name="Row">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start justify-center leading-[0] overflow-clip pl-[16px] pr-[24px] py-[12px] relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Barlow_Condensed:SemiBold',sans-serif] justify-center not-italic relative shrink-0 text-[#00378d] text-[24px] tracking-[1.2px] uppercase w-[732px]">
          <p className="leading-[24px]">ALTERNATYWNI</p>
        </div>
        <Frame7 />
      </div>
      <div aria-hidden className="absolute border border-[#bebdbc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[246px]">
      <Row2 />
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="relative size-full">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}