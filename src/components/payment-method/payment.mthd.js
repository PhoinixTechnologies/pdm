import './payment-mthd.styles.scss'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import visa from "../../assets/icons/visa_card_icon.png";
import mastercard from "../../assets/icons/master_card_icon.png";
import paypal from "../../assets/icons/paypal_card_icon.png";

const PaymentMethods = () => {
  const [selected, setSelected] = useState(null);

  const radioInputBox = (index) => {
    setSelected((prev) => (prev === index ? null : index));
  };
  

  return (
    <div className="cards">
      {[
        { icon: visa, text: "4855 **** **** ****", subText: "04/24", name: "Vako Shvili", last: "visa-card" },
        { icon: mastercard, text: "5795 **** **** ****", subText: "04/24", name: "Vako Shvili", last: "master-card" },
        { icon: paypal, text: "You will be redirected to the PayPal site after reviewing your order.", last: "paypal-card" },
        { icon: faCreditCard, text: "New Payment Cards", isFontAwesome: true, last: "credit-card" }
      ].map((item, index) => (
        <div key={index} className={`each ${selected === index ? "selected" : ""}`} onClick={() => radioInputBox(index)}>
          {item.isFontAwesome ? ( <FontAwesomeIcon icon={item.icon} /> ) : ( <img src={item.icon} alt="payment method icon" /> )}

          <p> {item.text} </p>
          {item.subText && <p> {item.subText} </p>}
          {item.name && <p> {item.name} </p>}
          {item.last && <p style={{ display: 'none' }}> {item.last} </p>}
          <input type="radio" name={`${item.last}-payment-method`} checked={selected === index} readOnly />
        </div>
      ))}
      <style jsx>
        {`
        .cards {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .each {
          padding: 10px;
          border: 2px solid transparent;
          cursor: pointer;
          transition: border-color 0.3s ease;
        }
        .each.selected {
          border-color: blue;
        }
      `}</style>
    </div>
  );
};

export default PaymentMethods;
