import React, { FunctionComponent } from 'react';
import artist from "../../Assets/img/artist.png";
import WorkItem from "../../Components/WorkItem/WorkItem";
import SecondaryButton from "../../Components/Buttons/SecondaryButton/SecondaryButton";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";
import ServiceItem from "../../Components/ServiceItem/ServiceItem";
import {useTranslation} from "react-i18next";
import s from "./WorksPage.module.scss"
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch} from "../../../Redux/store";
import {getCategoryWorks} from "../../../Redux/Slices/PortfolioSlice/PortfolioAsyncActions";
import {useSelector} from "react-redux";
import {WorkType} from "../../../Redux/Slices/PortfolioSlice/PortfolioTypes";
import branding from "../../Assets/img/branding.jpg";

interface OwnProps {}

type Props = OwnProps;

const WorksPage: FunctionComponent<Props> = (props) => {
    const { t } = useTranslation();
    const params = useParams()
    const dispatch = useAppDispatch()
    const [type, setType] = React.useState("")
    const portfolioState = useSelector((state:any) => state.portfolioSlice);

    React.useEffect(()=> {
        window.scrollTo(0, 0)
        if (params.category) {
            if (params.category === "sites"){
                setType("Сайты, лендинги, интерфейсы")
            } else if (params.category === "covers") {
                setType("Обложки")
            } else if (params.category === "2d") {
                setType("2D-графика")
            } else if (params.category === "posters") {
                setType("Афиши")
            } else if (params.category === "animations") {
                setType("Анимации")
            } else if (params.category === "3d") {
                setType("3D-графика")
            } else if (params.category === "nft") {
                setType("NFT")
            }  else if (params.category === "branding") {
                setType("Брендинг")
            }  else if (params.category === "packaging") {
                setType("Упаковка продукта")
            } else if (params.category === "identity") {
                setType("Фирменный стиль")
            }
            dispatch(getCategoryWorks(params.category))

        }

    },[])

    const navigate = useNavigate()

    console.log(type)
    return (
      <div className={s.portfolio}>
          <div className={s.title}>{t(type)}</div>
          <div className={s.block}>
              <div className={s.items}>
                  {
                      portfolioState.works.map((work:WorkType) => {
                          return <WorkItem img={work.cover_img} author={work.author} title={work.title} link={work.link}/>

                      })
                  }
              </div>
              <div className={s.buttons}>
                  <PrimaryButton title={t("Начать проект")} action={()=>console.log(123)}/>
              </div>
          </div>
          <div className={s.block_service}>
              <ServiceItem img={"/Videos/covers.mp4"} video={true} title={t("2D-Графика, обложки, афиши промо и анимации")} action={()=>navigate("/portfolio/2d_all")}/>
              <ServiceItem img={"/Videos/3d.mp4"} video={true} title={t("3D-Графика, NFT, анимация и визуализация")} action={()=>navigate("/portfolio/3d_all")}/>
              <ServiceItem title={t("Брендинг, упаковка продукта, фирменный стиль")} img={branding} video={false} action={()=>navigate("/portfolio/branding_all")}/>
          </div>
      </div>
  );
};

export default WorksPage;
