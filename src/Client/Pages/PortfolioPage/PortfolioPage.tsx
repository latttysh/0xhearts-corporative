import React, { FunctionComponent } from 'react';
import s from "./PortfolioPage.module.scss"
import artist from "../../Assets/img/artist.png"
import buda from "../../Assets/img/buda.svg"
import pic from "../../Assets/img/pic.svg"
import WorkItem from "../../Components/WorkItem/WorkItem";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../Components/Buttons/SecondaryButton/SecondaryButton";
import PortfolioItem from "../../Components/PortfolioItem/PortfolioItem";
import ServiceItem from "../../Components/ServiceItem/ServiceItem";
import {useTranslation} from "react-i18next";
import {useNavigate, useParams} from "react-router-dom";
import {getCategoryWorks} from "../../../Redux/Slices/PortfolioSlice/PortfolioAsyncActions";
import {useAppDispatch} from "../../../Redux/store";
import {useSelector} from "react-redux";
import {WorkType} from "../../../Redux/Slices/PortfolioSlice/PortfolioTypes";
import branding from "../../Assets/img/branding.jpg";

interface OwnProps {}

type Props = OwnProps;

const PortfolioPage: FunctionComponent<Props> = (props) => {
    const { t } = useTranslation();
    const navigate = useNavigate()

    const params = useParams()
    const dispatch = useAppDispatch()

    const [type,setType] = React.useState("")
    const portfolioState = useSelector((state:any) => state.portfolioSlice);

    React.useEffect(()=> {
        window.scrollTo(0, 0)
        if (params.category) {
            if (params.category === "2d_all"){
                setType("2D-Графика, обложки, афиши промо и анимации")
            } else if (params.category === "3d_all") {
                setType("3D-Графика, NFT, анимация и визуализация")
            } else if (params.category === "branding_all") {
                setType("Брендинг, упаковка продукта, фирменный стиль")
            } else if (params.category === "sites_all") {
                setType("Сайты, лендинги, интерфейсы")
            }
            dispatch(getCategoryWorks(params.category))
        }

    },[])


    return (
      <div className={s.portfolio}>
          <div className={s.title}>{t(type)}</div>
          <div className={s.promo}>
              <div className={s.info}>
                  <div className={s.description}>
                      {t("В команде 0xHearts работают сразу несколько дизайнеров, которые занимаются этими направлениями.")}
                  </div>
{/*                  <div className={s.artists}>
                      <img src={artist} alt="artist"/>
                      <img src={buda} alt="artist"/>
                      <img src={pic} alt="artist"/>
                  </div>*/}
              </div>

          </div>

          {portfolioState.status === "loaded" &&
              portfolioState.works.filter((e:any, i:any) =>portfolioState.works.findIndex((a: { [x: string]: any; }) => a["category"] === e["category"]) === i).map((category: any) => {
                  return (
                      <>
                          <div className={s.title_block}>{t(portfolioState.categories[category.category])}</div>

                          <div className={s.block}>
                              <div className={s.items}>
                                  {
                                      portfolioState.works.filter((filter_item:WorkType) => filter_item.category === category.category).map((work: WorkType) => {
                                          return (
                                              <WorkItem link={work.link} img={work.cover_img} title={work.title} author={work.author}/>

                                          )
                                      })
                                  }
                              </div>
                              <div className={s.buttons}>
                                  <SecondaryButton title={t("Больше работ")} action={()=>navigate(`/portfolio/works/${category.category}`)}/>
                                  <PrimaryButton title={t("Начать проект")} action={()=>navigate('/send')}/>
                              </div>
                          </div>
                      </>
                  )
              })
          }



          <div className={s.block_service}>
              <ServiceItem img={"/Videos/covers.mp4"} video={true} title={t("2D-Графика, обложки, афиши промо и анимации")} action={()=>navigate("/portfolio/2d_all")}/>
              <ServiceItem img={"/Videos/3d.mp4"} video={true} title={t("3D-Графика, NFT, анимация и визуализация")} action={()=>navigate("/portfolio/3d_all")}/>
              <ServiceItem title={t("Брендинг, упаковка продукта, фирменный стиль")} img={branding} video={false} action={()=>navigate("/portfolio/branding_all")}/>
          </div>
      </div>
  );
};

export default PortfolioPage;
