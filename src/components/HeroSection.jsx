import Footer from "./Footer";
import LeftMenu from "./LeftMenu";
import RightHero from "./RightHero";

const HeroSection = () => {
  const Songs = [
    {
      name: "Death Bed",
      subName: "Powfu",
      image: "https://samplesongs.netlify.app/album-arts/death-bed.jpg",
      id: "1",
    },
    {
      name: "Bad Liar",
      subName: "Imagine Dragons",
      image: "https://samplesongs.netlify.app/album-arts/bad-liar.jpg",
      url: "https://samplesongs.netlify.app/Bad%20Liar.mp3",
      id: "2",
    },
    {
      
      name: "Faded",
      subName: "Alan Walker",
      image: "https://samplesongs.netlify.app/album-arts/faded.jpg",
      id: "3",
    },
    {
      name: "Hate Me",
      subName: "Ellie Goulding",
      image: "https://samplesongs.netlify.app/album-arts/hate-me.jpg",
      url: "https://samplesongs.netlify.app/Hate%20Me.mp3",
      id: "4",
    },
    {
      name: "Solo",
      subName: "Clean Bandit",
      image: "https://samplesongs.netlify.app/album-arts/solo.jpg",
      id: "5",
    },
    {
      name: "Without Me",
      subName: "Halsey",
      image: "https://samplesongs.netlify.app/album-arts/without-me.jpg",
      id: "6",
    },
  ];
  const Aritist = [
    {
      id:'1',
      name:"Arijit Singh",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwoKGLall3QkLVvyKYae_Gy903JC0tNen1JYUCFHLIsg&s=10",
      subName:"Singer"
    },
    {
      id:'2',
      name:"Ankit Tiwari",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToeXBxkL37TRKBPDfN1hGor--8HJw8odDrHclV-BEw2A&s=10",
      subName:"Singer"
    },
    {
      id:'3',
      name:"Shaan",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_nx797J2c-RrI2YKffBT10EJeRcJ00Oh55Fjz60buAQ&s=10",
      subName:"Singer"
    },
    {
      id:'4',
      name:"Rafi",      
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXRKgzIjPQ2927filqdduK0_Y5kGuRNjCEiwsOMt7btw&s=10",
      subName:"Singer"
    },
    {
      id:'5',
      name:"Javed Ali",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1N1m2f2IBC-B6u5fW46cBf2_GH9sRFZc-wm_gaO0moQ&s=10",
      subName:"Singer"
    },
    {
      id:'6',
      name:"Kishore Kumar",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2q-zMVKNlYx-jAwfR84wAV-O7o-XVqpvPNmBupceyNA&s=10",
      subName:"Singer"
    },
  ]

  return (
    <div className="py-2 flex gap-2 min-w-xs max-h-[89vh] ">
      <LeftMenu />
      <div className="rightHeroContainer w-[85%] bg-[#121212] rounded-md overflow-y-auto flex flex-col gap-1 ">
        {/* <RightHero Songs={Songs} /> */}
        <RightHero Songs={Songs} heading="Treding Songs" />
        <RightHero Songs={Aritist} heading="Popular Artist" imgStyle="rounded-full" nameStyle="text-center" subNameStyle="text-center"/>
        <RightHero Songs={Songs} heading="Treding Songs" />
        <RightHero Songs={Aritist} heading="Popular Artist" imgStyle="rounded-full" nameStyle="text-center" subNameStyle="text-center"/>
        <RightHero Songs={Songs} heading="Treding Songs" />
        <RightHero Songs={Aritist} heading="Popular Artist" imgStyle="rounded-full" nameStyle="text-center" subNameStyle="text-center"/>
        <RightHero Songs={Songs} heading="Treding Songs" />
        <RightHero Songs={Aritist} heading="Popular Artist" imgStyle="rounded-full" nameStyle="text-center" subNameStyle="text-center"/>
        {/* <RightHero ={subNames}/> */}
        {/* <RightHero />
        <RightHero />
        <RightHero /> */}
        <Footer />
      </div>
    </div>
  );
};
export default HeroSection;
