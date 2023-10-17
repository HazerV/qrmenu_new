import React, { useContext } from "react";
import { View, StyleSheet, StatusBar, Text, Image, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import Header from './Header.png'
import SunSvg from './Sun.svg'
import HomeSvg from  './Home.svg'
import SearchSvg from './Search.svg'
import { stylesOferta } from "./stylesOferta.js";
import { ThemeContext } from "../../Theme/ThemeSwitcher";
import Footer from "../Footer/Footer";


const Oferta = ({navigation}) => {

  const {theme, setTheme} = useContext(ThemeContext)

  const style = StyleSheet.create ({
    container: {
        backgroundColor: theme == 'light' ? 'white' : 'black',
        minHeight: 100,
        display: "flex",
        flex: 1,
        width: '100%',
        height: '100%'
      },
      text: {
        color: theme == 'light' ? 'black' : 'white',
        fontSize: 12,
        fontFamily: 'Gilroy-Regular',
        marginBottom: 25,
        marginLeft: 16,
        whiteSpace:'preWrap',
        lineHeight: 16,
      },
      ofertaHead: {
        fontFamily: 'Gilroy-Regular',
        fontSize: 24,
        marginBottom: 25,
        marginLeft: 16,
        color: theme == 'light' ? 'black' : 'white'
      }
})

    return (
    <SafeAreaView style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        minHeight: 100
    }}>
    <ScrollView style={stylesOferta.scrollView}>
        <View style={style.container}>
            <Image style={stylesOferta.header} source={Header}/>
            <Text style={style.ofertaHead}>
                Оферта
            </Text>
                <Text style = {style.text}>
                  {"\n"}СТОРОНАМИ НАСТОЯЩЕГО СОГЛАШЕНИЯ ЯВЛЯЮТСЯ:{"\n"}
                  {"\n"}Клиент — физическое лицо, имеющее намерение оформить заказ на сайте официального интернет-магазина ООО "Орион".{"\n"}
                  {"\n"}Продавец — ООО "Орион" адрес: 117218, город Москва, ул. Кржижановского, д. 15 к. 5, эт 5 пом 515а оф 2, ИНН: 7714364969, ОГРН: 515774612393{'\n'}
                  {"\n"}1. ОБЩИЕ ПОЛОЖЕНИЯ.{"\n"}
                  {"\n"}1.1 Информация о Товарах, размещаемых на сайте zaryadye.ginza.ru предоставляется Продавцом, если иное прямо не указано в информации о Товаре. {"\n"}
                  {"\n"}1.2 Заказывая товары через Cайт, Клиент соглашается с Условиями продажи товаров Продавца (далее — Условия), изложенными ниже. {"\n"}
                  {"\n"}1.3 Настоящее соглашение, а также информация о Товаре, представленная на Сайте, являются публичной офертой в соответствии со ст. 435 и ч. 2 ст. 437 ГК РФ.{"\n"}
                  {"\n"}1.4 К отношениям между Клиентом и Продавцом применяются положения ГК РФ о розничной купле-продаже (§ 2 Главы 30), 
                  Закон РФ «О защите прав потребителей» от 07.02.1992 г. № 2300-1 и иные правовые акты, принятые в соответствии с ними.{"\n"}
                  {"\n"} 1.5 Местом продажи Товаров является территория Российской Федерации. {"\n"}
                  {"\n"}1.6 Продавец оставляет за собой право вносить изменения в настоящее Соглашение.{"\n"}

                   {"\n"}2. ОПЛАТА ТОВАРА.{"\n"}
                  {"\n"}2.1 Цена Товара на Сайте может быть изменена Продавцом в одностороннем порядке.
                   При этом цена на заказанный Покупателем Товар изменению не подлежит. Расчеты производятся в рублях. {"\n"}
                  {"\n"}2.2 При оплате заказа банковской картой Клиент обязуется в случае запроса Продавца предоставить документ, 
                  удостоверяющий личность (паспорт гражданина РФ, загранпаспорт, временное удостоверение личности, выдаваемое на время оформления паспорта, водительское удостоверение).{"\n"}
                  {"\n"}2.3 Для выбора оплаты товара с помощью банковской карты на соответствующей странице необходимо нажать кнопку 
                  Оплата заказа банковской картой. Оплата происходит через ПАО СБЕРБАНК с использованием банковских карт следующих платёжных систем:{"\n"}

                  {"\n"}Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены на платёжный шлюз ПАО СБЕРБАНК. 
                  Соединение с платёжным шлюзом и передача информации осуществляется в защищённом режиме с использованием протокола шифрования SSL. 
                  В случае если Ваш банк поддерживает технологию безопасного проведения интернет-платежей Verified By Visa, MasterCard SecureCode, MIR Accept, J-Secure,
                   для проведения платежа также может потребоваться ввод специального пароля.{"\n"}
                  {"\n"}Настоящий сайт поддерживает 256-битное шифрование. Конфиденциальность сообщаемой персональной информации 
                  обеспечивается ПАО СБЕРБАНК. Введённая информация не будет предоставлена третьим лицам за исключением случаев, предусмотренных законодательством РФ. 
                  Проведение платежей по банковским картам осуществляется в строгом соответствии с требованиями платёжных систем МИР, Visa Int., MasterCard Europe Sprl, JCB.{"\n"}
                  {"\n"}
                  3. ВОЗВРАТ ТОВАРА{"\n"}
                  {"\n"}3.1 Товар надлежащего качества возврату и обмену не подлежит.
                </Text>
            <View style={stylesOferta.footer}>
              <Footer/>
            </View>
        </View>
    </ScrollView>
    </SafeAreaView>
    
    )
}
export default Oferta
