import Image from "next/image"
import heroImage from '../Assets/Images/HeroImage.png'

export const HeroSection = () => {
  return (
    <div className="w-ful flex justify-between h-[50vh]">
        <ul className="flex flex-col gap-3 text-xl w-[20%]">
            <li>Woman's Fashion</li>
            <li>Men's Fashion</li>
            <li>Electronic</li>
            <li>Home & LifeStyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Boy's & Pets</li>
            <li>Health & Beauty</li>
        </ul>
        <div className="bg-black w-[80%] flex justify-between px-20 items-center">
            <div className="flex flex-col gap-5 text-2xl p-10">
                <h1 className="text-white">iPhone 14 Series</h1>
                <h1 className="text-7xl font-bold text-white">Up to 10% off Voucher</h1>
                <h1 className="text-2xl underline text-white">Shop Now</h1>
            </div>
            <div>
                <Image src={heroImage} alt="haseebHere" height="1000" width='1000'/>
            </div>
        </div>
    </div>
  )
}
