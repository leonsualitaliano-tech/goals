import { type PropsWithChildren } from "react";

type HeaderProps = PropsWithChildren<{ image: { src: string; alt: string } }>;

export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      <img src={image.src} alt={image.alt} />
      {/* <img {...image} /> */}
      {children}
    </header>
  );
}

//se puede usar {...image} para distribuir los props en la imagen 
//<img {...image} />
