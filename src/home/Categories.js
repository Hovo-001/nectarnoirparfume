import { useTranslation } from "react-i18next"

export default function Categories() {
const { t } = useTranslation();
  return (
    <div className="categories_slide_block">
        {t('categories', {returnObjects : true}).map(item => {
            return <div className="categories_item" key={ item.picture}>
                <img src={item.picture} alt="" />
                <div className="content_block">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                </div>
            </div>
        })}
    </div>
  )
}