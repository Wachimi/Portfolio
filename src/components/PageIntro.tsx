import Image from "next/image";

export function PageIntro() {
  return (
    <div aria-hidden="true" className="page-intro">
      <div className="page-intro-brand">
        <Image
          src="/logo/01_logo_poziome_przezroczyste.svg"
          alt=""
          width={2200}
          height={720}
          sizes="(max-width: 640px) 240px, 420px"
          className="page-intro-logo h-auto w-full"
        />
      </div>
    </div>
  );
}
